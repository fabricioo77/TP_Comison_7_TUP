import React, { useState, useEffect } from 'react';
import { Button, Container, Card } from 'react-bootstrap';


import ModalFormularioEvento from '../../Components/EventCard'; 

import TablaComponent from '../../Components/Tabla'; 

import { getAll } from '../../Utils/utils'; 

function Eventos() {
    const [eventos, setEventos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    const cargarEventos = () => {
        const listaActualizada = getAll('eventos'); 
        setEventos(listaActualizada);
    };

    
    useEffect(() => {
        cargarEventos();
    }, []); 

    
    const columnasEventos = ["#", "Nombre", "Fecha", "Lugar", "Cupo"];

    return (
        <Container fluid className="my-4">
            <h2 className="mb-4">Gestión de Eventos 📅</h2>
            
            {}
            <Button variant="primary" onClick={handleShow} className="mb-4">
                <i className="bi bi-calendar-plus-fill me-2"></i> Añadir Nuevo Evento
            </Button>

            <Card className="shadow-sm">
                <Card.Header as="h5" className="bg-dark text-white">Listado de Eventos</Card.Header>
                <Card.Body>
                    {}
                    <TablaComponent 
                        datos={eventos} 
                        columnas={columnasEventos} 
                    />
                </Card.Body>
            </Card>

            {}
            <ModalFormularioEvento 
                show={showModal} 
                handleClose={handleClose} 
                onEventAdded={cargarEventos} 
            />
        </Container>
    )
}

export default Eventos;