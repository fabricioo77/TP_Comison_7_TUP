import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Row, Col, ListGroup, Badge } from 'react-bootstrap';
// --- ¡IMPORTAMOS LA NUEVA FUNCIÓN! ---
import { addItem, updateItem, getAll, agregarArtistaAEvento, removerArtistaDeEvento, getById } from '../Utils/utils';

function ModalFormularioEvento({ show, handleClose, onEventAdded, eventoAEditar, esEdicion }) {
    const initialState = {
        nombre: '', fecha: '', lugar: '', cupo: '', artistas: [], asistentes: [],
    };
    
    const [evento, setEvento] = useState(initialState);
    const [artistasDisponibles, setArtistasDisponibles] = useState([]);
    const [artistaSeleccionadoId, setArtistaSeleccionadoId] = useState('');

    useEffect(() => {
        if (show) {
            setArtistasDisponibles(getAll('artistas'));
        }
        if (esEdicion && eventoAEditar) {
            const fechaParaInput = eventoAEditar.fecha.split('-').reverse().join('-');
            setEvento({ ...eventoAEditar, fecha: fechaParaInput });
        } else {
            setEvento(initialState);
        }
    }, [eventoAEditar, esEdicion, show]);
    
    const handleAsociarArtista = () => {
        if (!artistaSeleccionadoId) {
            alert("Por favor, selecciona un artista.");
            return;
        }
        const resultado = agregarArtistaAEvento(evento.id, parseInt(artistaSeleccionadoId));
        if (!resultado.success) {
            alert(resultado.message);
            return;
        }
        refrescarDatosDelModal();
    };

    const handleRemoverArtista = (idArtistaARemover) => {
        removerArtistaDeEvento(evento.id, idArtistaARemover);
        refrescarDatosDelModal();
    };

    const refrescarDatosDelModal = () => {
        const eventoRefrescado = getById('eventos', evento.id);
        if (eventoRefrescado) {
            const fechaParaInput = eventoRefrescado.fecha.split('-').reverse().join('-');
            setEvento({ ...eventoRefrescado, fecha: fechaParaInput });
        }
        setArtistasDisponibles(getAll('artistas'));
        setArtistaSeleccionadoId('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvento(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cupoNumerico = parseInt(evento.cupo, 10);
        const fechaParaGuardar = evento.fecha.split('-').reverse().join('-');
        const datosAGuardar = { ...evento, cupo: cupoNumerico, fecha: fechaParaGuardar };
        try {
            if (esEdicion) { 
                updateItem('eventos', evento.id, datosAGuardar);
            } else { 
                addItem('eventos', datosAGuardar);
            }
            onEventAdded();
            handleClose(); 
        } catch (error) { 
            console.error(error);
            alert("Error al guardar el evento.");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title>{esEdicion ? "Gestionar Evento" : "Registrar Nuevo Evento"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {/* --- CORRECCIÓN AQUÍ: CAMPOS DEL FORMULARIO RESTAURADOS --- */}
                    <h5>Detalles del Evento</h5>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre del Evento</Form.Label>
                        <Form.Control type="text" name="nombre" value={evento.nombre} onChange={handleChange} required />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Fecha</Form.Label>
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
                    
                    {/* La sección para gestionar artistas sigue aquí, sin cambios */}
                    {esEdicion && (
                        <div className="mt-4 p-3 border rounded">
                            <h5>Artistas del Evento</h5>
                            <ListGroup variant="flush" className="mb-3">
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
                                    <p className="text-muted">Aún no hay artistas asociados a este evento.</p>
                                )}
                            </ListGroup>
                            
                            <h6 className="mt-3">Asociar Nuevo Artista</h6>
                            <Row>
                                <Col md={8}>
                                    <Form.Select 
                                        aria-label="Seleccionar artista"
                                        value={artistaSeleccionadoId}
                                        onChange={(e) => setArtistaSeleccionadoId(e.target.value)}
                                    >
                                        <option value="">Selecciona un artista para añadir...</option>
                                        {artistasDisponibles.map(artista => (
                                            <option 
                                                key={artista.id} 
                                                value={artista.id} 
                                                disabled={!artista.disponible}
                                            >
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

                    <Button variant="success" type="submit" className="w-100 mt-4">
                        {esEdicion ? "GUARDAR CAMBIOS" : "REGISTRAR EVENTO"}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalFormularioEvento;