// Archivo: src/Pages/Dashboard/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getAll } from '../../Utils/utils'; // Importamos la utilidad

function Dashboard() {
    // Estado para guardar las estadísticas
    const [stats, setStats] = useState({
        totalEventos: 0,
        totalArtistas: 0,
        totalAsistentes: 0,
        cupoTotal: 0,
        totalInscritos: 0
    });

    useEffect(() => {
        // Cargamos todos los datos al montar la página
        const eventos = getAll('eventos');
        const artistas = getAll('artistas');
        const asistentes = getAll('asistentes');

        let cupo = 0;
        let inscritos = 0;

        // Calculamos la ocupación total
        eventos.forEach(evento => {
            cupo += parseInt(evento.cupo, 10) || 0; // || 0 por si el cupo es inválido
            inscritos += evento.asistentes.length;
        });

        // Guardamos las estadísticas en el estado
        setStats({
            totalEventos: eventos.length,
            totalArtistas: artistas.length,
            totalAsistentes: asistentes.length,
            cupoTotal: cupo,
            totalInscritos: inscritos
        });

    }, []); // El array vacío asegura que se ejecute solo una vez

    // Calculamos el porcentaje de ocupación
    const porcentajeOcupacion = (stats.cupoTotal > 0) 
        ? ((stats.totalInscritos / stats.cupoTotal) * 100).toFixed(1) 
        : 0;

    return (
        <Container fluid>
            <h2 className="mb-4">Panel de Estadísticas</h2>
            
            <Row>
                {/* Tarjeta 1: Total de Eventos */}
                <Col md={3}>
                    <Card className="text-center shadow-sm mb-3">
                        <Card.Body>
                            <Card.Title>Total de Eventos</Card.Title>
                            <Card.Text as="h3">{stats.totalEventos}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-primary text-white">
                            Eventos programados
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Tarjeta 2: Total de Artistas */}
                <Col md={3}>
                    <Card className="text-center shadow-sm mb-3">
                        <Card.Body>
                            <Card.Title>Total de Artistas</Card.Title>
                            <Card.Text as="h3">{stats.totalArtistas}</Card.Text>
                        </Card.Body>
                         <Card.Footer className="bg-dark text-white">
                            Artistas registrados
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Tarjeta 3: Total de Asistentes */}
                <Col md={3}>
                    <Card className="text-center shadow-sm mb-3">
                        <Card.Body>
                            <Card.Title>Total de Asistentes</Card.Title>
                            <Card.Text as="h3">{stats.totalAsistentes}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-success text-white">
                            Asistentes registrados
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Tarjeta 4: Ocupación General */}
                <Col md={3}>
                    <Card className="text-center shadow-sm mb-3">
                        <Card.Body>
                            <Card.Title>Ocupación General</Card.Title>
                            <Card.Text as="h3">{porcentajeOcupacion}%</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-info text-white">
                            {stats.totalInscritos} / {stats.cupoTotal} Cupos
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* Aquí puedes agregar los gráficos en el futuro */}
            <Row className="mt-4">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Header as="h5">Gráficos (Próximamente)</Card.Header>
                        <Card.Body style={{ minHeight: '200px' }} className="d-flex justify-content-center align-items-center text-muted">
                            Aquí se mostrarán los gráficos de asistencia por evento.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Dashboard;