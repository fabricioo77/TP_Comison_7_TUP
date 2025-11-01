import React, { useState, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import TablaComponent from "../../Components/Tabla.jsx";
import ModalFormularioAsistente from "../../Components/AsistenteCard.jsx";
import { getAll } from "../../Utils/utils";

function Asistentes() {
  const [asistentes, setAsistentes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // --- NUEVOS ESTADOS PARA LA EDICIÓN ---
  const [asistenteSeleccionado, setAsistenteSeleccionado] = useState(null);
  const [esEdicion, setEsEdicion] = useState(false);

  const cargarAsistentes = () => {
    const data = getAll("asistentes");
    setAsistentes(data);
  };

  useEffect(() => {
    cargarAsistentes();
  }, []);

  const columnas = [
    { header: "Nombre", field: "nombre" },
    { header: "Apellido", field: "apellido" },
    { header: "Fecha Nacimiento", field: "fechaNac" }, // Corregido para mayor claridad
  ];

  // --- NUEVAS FUNCIONES HANDLER ---

  // Se activa al hacer clic en "Ver Detalle"
  const handleVerDetalle = (asistente) => {
    setAsistenteSeleccionado(asistente);
    setEsEdicion(true);
    setShowModal(true);
  };

  // Se activa al hacer clic en "Añadir Nuevo Asistente"
  const handleAbrirModalParaCrear = () => {
    setAsistenteSeleccionado(null);
    setEsEdicion(false);
    setShowModal(true);
  };

  // Cierra el modal y resetea los estados de edición
  const handleModalClose = () => {
    setShowModal(false);
    setEsEdicion(false);
    setAsistenteSeleccionado(null);
    cargarAsistentes(); // Recargamos para ver los cambios
  };

  return (
    <Container fluid className="my-4">
      <div className="d-flex justify-content-center">
        <h2 className="mb-4">Panel de Asistentes</h2>
      </div>
      <div className="d-flex justify-content-center">
        {/* Cambiamos el onClick para usar nuestro nuevo handler */}
        <Button variant="primary" onClick={handleAbrirModalParaCrear} className="mb-4">
          <i className="bi bi-person-plus-fill me-2"></i>
          Añadir Nuevo Asistente
        </Button>
      </div>
      <Card className="shadow-sm">
        <Card.Header as="h5" className="bg-dark text-white">
          Listado de Asistentes
        </Card.Header>
        <Card.Body>
          <TablaComponent
            datos={asistentes}
            columnas={columnas}
            // Conectamos el botón de la tabla a nuestro handler
            onVerDetalle={handleVerDetalle}
            onEliminar={(item) => console.log("Eliminar:", item)}
          />
        </Card.Body>
      </Card>

      {/* El modal ahora recibe las nuevas props para la edición */}
      <ModalFormularioAsistente
        show={showModal}
        handleClose={handleModalClose}
        onAsistenteAdded={cargarAsistentes} // Mantenemos la recarga de datos
        asistenteAEditar={asistenteSeleccionado}
        esEdicion={esEdicion}
      />
    </Container>
  );
}

export default Asistentes;