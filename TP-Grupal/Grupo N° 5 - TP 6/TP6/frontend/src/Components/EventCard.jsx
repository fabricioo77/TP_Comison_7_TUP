import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Row, Col, ListGroup, Badge, Spinner } from 'react-bootstrap';
// 1. Importar TODOS los servicios necesarios
import {
  addEvento,
  updateEvento,
  getEventoById
} from '../services/eventosService';
import { getAllArtistas, getArtistaById, updateArtista } from '../services/artistasService';
import { getAllAsistentes, getAsistenteById } from '../services/asistentesService';

function ModalFormularioEvento({ show, handleClose, onEventAdded, eventoAEditar, esEdicion }) {
  const initialState = {
    nombre: '', fecha: '', lugar: '', cupo: 0, artistas: [], asistentes: [],
  };

  const [evento, setEvento] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Estados para los selectores
  const [artistasDisponibles, setArtistasDisponibles] = useState([]);
  const [artistaSeleccionadoId, setArtistaSeleccionadoId] = useState('');
  const [asistentesDisponibles, setAsistentesDisponibles] = useState([]);
  const [asistenteSeleccionadoId, setAsistenteSeleccionadoId] = useState('');

  // 2. Cargar datos de la API para los selectores
  useEffect(() => {
    const cargarDatosIniciales = async () => {
      if (show) {
        setLoading(true);
        try {
          const [artistas, asistentes] = await Promise.all([
            getAllArtistas(),
            getAllAsistentes()
          ]);
          setArtistasDisponibles(artistas);
          setAsistentesDisponibles(asistentes);

          if (esEdicion && eventoAEditar) {
            // Aseguramos que los datos del evento estén frescos
            const eventoActualizado = await getEventoById(eventoAEditar.id);
            // Formatear fecha para el input type="date" (YYYY-MM-DD)
            const fechaParaInput = eventoActualizado.fecha.split('-').reverse().join('-');
            setEvento({ ...eventoActualizado, fecha: fechaParaInput });
          } else {
            setEvento(initialState);
          }
        } catch (error) {
          console.error("Error cargando datos para el modal", error);
          alert("Error al cargar datos del modal.");
        } finally {
          setLoading(false);
        }
      }
    };
    cargarDatosIniciales();
  }, [eventoAEditar, esEdicion, show]);

  // 3. Lógica refactorizada para asociar (ahora es async)
  const handleAsociarArtista = async () => {
    if (!artistaSeleccionadoId) return;

    try {
      const artistaId = parseInt(artistaSeleccionadoId);
      const artista = artistasDisponibles.find(a => a.id === artistaId);

      if (!artista.disponible) {
        alert(`El artista ${artista.nombreArt} ya se encuentra ocupado.`);
        return;
      }
      if (evento.artistas.some(a => a.id === artistaId)) {
         alert(`El artista ${artista.nombreArt} ya está asociado a este evento.`);
         return;
      }

      // 1. Actualizar al artista (marcarlo como no disponible)
      await updateArtista(artistaId, { ...artista, disponible: false });
      
      // 2. Actualizar el evento (añadir el artista a la lista)
      const eventoActualizado = { ...evento, artistas: [...evento.artistas, artista] };
      // Convertimos la fecha de nuevo a DD-MM-YYYY para guardarla
      const fechaGuardar = evento.fecha.split('-').reverse().join('-');
      await updateEvento(evento.id, { ...eventoActualizado, fecha: fechaGuardar });

      refrescarDatosDelModal();
    } catch (error) {
      console.error(error);
      alert("Error al asociar el artista.");
    }
  };

  // 4. Lógica refactorizada para remover (ahora es async)
  const handleRemoverArtista = async (idArtistaARemover) => {
    try {
      const artista = await getArtistaById(idArtistaARemover);

      // 1. Actualizar al artista (marcarlo como disponible)
      if (artista) {
        await updateArtista(idArtistaARemover, { ...artista, disponible: true });
      }
      
      // 2. Actualizar el evento (filtrar el artista)
      const artistasFiltrados = evento.artistas.filter(a => a.id !== idArtistaARemover);
      const eventoActualizado = { ...evento, artistas: artistasFiltrados };
      const fechaGuardar = evento.fecha.split('-').reverse().join('-');
      await updateEvento(evento.id, { ...eventoActualizado, fecha: fechaGuardar });

      refrescarDatosDelModal();
    } catch (error) {
      console.error(error);
      alert("Error al remover el artista.");
    }
  };

  // 5. Lógica para inscribir asistente (async)
  const handleInscribirAsistente = async () => {
    if (!asistenteSeleccionadoId) return;
    
    try {
        const asistenteId = parseInt(asistenteSeleccionadoId);

        if (evento.asistentes.length >= evento.cupo) {
            alert("¡Cupo completo!");
            return;
        }
        if (evento.asistentes.some(a => a.id === asistenteId)) {
            alert("Este asistente ya está inscrito.");
            return;
        }

        const asistente = await getAsistenteById(asistenteId);
        
        // 1. Actualizar el evento (añadir asistente)
        const eventoActualizado = { ...evento, asistentes: [...evento.asistentes, asistente] };
        const fechaGuardar = evento.fecha.split('-').reverse().join('-');
        await updateEvento(evento.id, { ...eventoActualizado, fecha: fechaGuardar });
        
        refrescarDatosDelModal();

    } catch (error) {
        console.error(error);
        alert("Error al inscribir asistente.");
    }
  };

  // 6. Lógica para remover asistente (async)
  const handleRemoverAsistente = async (idAsistenteARemover) => {
     try {
        // 1. Actualizar el evento (filtrar asistente)
        const asistentesFiltrados = evento.asistentes.filter(a => a.id !== idAsistenteARemover);
        const eventoActualizado = { ...evento, asistentes: asistentesFiltrados };
        const fechaGuardar = evento.fecha.split('-').reverse().join('-');
        await updateEvento(evento.id, { ...eventoActualizado, fecha: fechaGuardar });

        refrescarDatosDelModal();
     } catch (error) {
        console.error(error);
        alert("Error al remover asistente.");
     }
  };

  // Refresca tanto el evento como los selectores
  const refrescarDatosDelModal = async () => {
    setLoading(true);
    try {
        const [eventoRefrescado, artistas, asistentes] = await Promise.all([
            getEventoById(evento.id),
            getAllArtistas(),
            getAllAsistentes()
        ]);
        
        const fechaParaInput = eventoRefrescado.fecha.split('-').reverse().join('-');
        setEvento({ ...eventoRefrescado, fecha: fechaParaInput });
        
        setArtistasDisponibles(artistas);
        setAsistentesDisponibles(asistentes);
        setArtistaSeleccionadoId('');
        setAsistenteSeleccionadoId('');
    } catch (error) {
        console.error("Error refrescando modal", error);
    } finally {
        setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento(prev => ({ ...prev, [name]: value }));
  };

  // 7. handleSubmit (async y llama a servicios)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Formatear fecha para guardar (DD-MM-YYYY)
    const fechaParaGuardar = evento.fecha.split('-').reverse().join('-');
    const cupoNumerico = parseInt(evento.cupo, 10) || 0;

    const datosAGuardar = {
      ...evento,
      cupo: cupoNumerico,
      fecha: fechaParaGuardar
    };

    try {
      if (esEdicion) {
        await updateEvento(evento.id, datosAGuardar);
      } else {
        // Al crear, aseguramos listas vacías
        await addEvento({ ...datosAGuardar, artistas: [], asistentes: [] });
      }
      onEventAdded();
      handleClose();
    } catch (error) {
      console.error(error);
      alert("Error al guardar el evento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>{esEdicion ? "Gestionar Evento" : "Registrar Nuevo Evento"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && <div className="text-center"><Spinner animation="border" /> <p>Cargando datos...</p></div>}
        
        {!loading && (
          <Form onSubmit={handleSubmit}>
            {/* Detalles del Evento */}
            <h5>Detalles del Evento</h5>
            <Form.Group className="mb-3">
                <Form.Label>Nombre del Evento</Form.Label>
                <Form.Control type="text" name="nombre" value={evento.nombre} onChange={handleChange} required />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Fecha (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="date" name="fecha" value={evento.fecha} onChange={handleChange} required />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Cupo Máximo</Form.Label>
                    <Form.Control type="number" name="cupo" value={evento.cupo} onChange={handleChange} min="1" required />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>Lugar</Form.Label>
                <Form.Control type="text" name="lugar" value={evento.lugar} onChange={handleChange} required />
            </Form.Group>

            {/* Sección de Artistas (Solo visible en Edición) */}
            {esEdicion && (
              <div className="mt-4 p-3 border rounded">
                <h5>Artistas del Evento</h5>
                <ListGroup variant="flush" className="mb-3" style={{maxHeight: '150px', overflowY: 'auto'}}>
                  {evento.artistas && evento.artistas.length > 0 ? (
                    evento.artistas.map(artista => (
                      <ListGroup.Item key={artista.id} className="d-flex justify-content-between align-items-center">
                        <span>
                          {artista.nombreArt} <Badge bg="secondary" pill>{artista.nombre}</Badge>
                        </span>
                        <Button variant="outline-danger" size="sm" onClick={() => handleRemoverArtista(artista.id)}>
                          Quitar
                        </Button>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <p className="text-muted">Aún no hay artistas asociados.</p>
                  )}
                </ListGroup>

                <h6 className="mt-3">Asociar Nuevo Artista</h6>
                <Row>
                  <Col md={8}>
                    <Form.Select
                      value={artistaSeleccionadoId}
                      onChange={(e) => setArtistaSeleccionadoId(e.target.value)}
                    >
                      <option value="">Selecciona un artista...</option>
                      {artistasDisponibles.map(artista => (
                        <option key={artista.id} value={artista.id} disabled={!artista.disponible}>
                          {artista.nombreArt} {artista.disponible ? '' : '(Ocupado)'}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <Button variant="info" onClick={handleAsociarArtista} className="w-100">
                      Añadir Artista
                    </Button>
                  </Col>
                </Row>
              </div>
            )}

            {/* Sección de Asistentes (Solo visible en Edición) */}
            {esEdicion && (
              <div className="mt-4 p-3 border rounded bg-light">
                <h5>
                  Asistentes del Evento
                  <Badge bg="dark" className="ms-2">
                    {evento.asistentes.length} / {evento.cupo}
                  </Badge>
                </h5>

                <ListGroup variant="flush" className="mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {evento.asistentes && evento.asistentes.length > 0 ? (
                    evento.asistentes.map(asistente => (
                      <ListGroup.Item key={asistente.id} className="d-flex justify-content-between align-items-center">
                        <span>
                          {asistente.nombre} {asistente.apellido}
                        </span>
                        <Button variant="outline-danger" size="sm" onClick={() => handleRemoverAsistente(asistente.id)}>
                          Quitar
                        </Button>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <p className="text-muted">Aún no hay asistentes inscritos.</p>
                  )}
                </ListGroup>

                <h6 className="mt-3">Inscribir Nuevo Asistente</h6>
                <Row>
                  <Col md={8}>
                    <Form.Select
                      value={asistenteSeleccionadoId}
                      onChange={(e) => setAsistenteSeleccionadoId(e.target.value)}
                      disabled={evento.asistentes.length >= evento.cupo}
                    >
                      <option value="">Selecciona un asistente...</option>
                      {asistentesDisponibles.map(asistente => {
                        // Opcional: Evitar que se listen asistentes ya inscritos
                        const yaInscrito = evento.asistentes.some(a => a.id === asistente.id);
                        if (yaInscrito) return null;
                        return (
                           <option key={asistente.id} value={asistente.id}>
                                {asistente.nombre} {asistente.apellido}
                           </option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <Button
                      variant="success"
                      onClick={handleInscribirAsistente}
                      className="w-100"
                      disabled={evento.asistentes.length >= evento.cupo}
                    >
                      Inscribir
                    </Button>
                  </Col>
                </Row>
                {evento.asistentes.length >= evento.cupo && (
                  <div className="text-danger mt-2 fw-bold">
                    ¡Cupo completo!
                  </div>
                )}
              </div>
            )}

            <Button variant="success" type="submit" className="w-100 mt-4" disabled={loading}>
              {esEdicion ? "GUARDAR CAMBIOS" : "REGISTRAR EVENTO"}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ModalFormularioEvento;