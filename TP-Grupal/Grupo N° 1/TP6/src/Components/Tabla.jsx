import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

// El componente Tabla genérico
function TablaComponent({ datos, columnas }) { 
    return (
        <Table striped bordered hover variant="light" responsive>
            <thead>
                <tr>
                    {}
                    {columnas.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                    <th>Acciones</th> {}
                </tr>
            </thead>
            <tbody>
                {datos.map((item, index) => (
                    <tr key={item.id}>
                        {}
                        <td>{index + 1}</td> 
                        {}
                        <td>{item.nombre}</td>
                        <td>{item.fecha}</td>
                        <td>{item.lugar}</td>
                        {}
                        <td>{item.asistentes ? `${item.asistentes.length}/${item.cupo}` : item.cupo}</td>
                        
                        <td>
                            <Button variant="info" size="sm" className="me-2">Ver Detalle</Button>
                            <Button variant="danger" size="sm" className="me-2">Eliminar</Button>
                        </td>
                    </tr>
                ))}
                {datos.length === 0 && (
                    <tr>
                        <td colSpan={columnas.length + 1} className="text-center text-muted">No hay datos para mostrar.</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default TablaComponent;