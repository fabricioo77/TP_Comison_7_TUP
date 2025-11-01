import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import DataTable from "../components/DataTable";
import { hairServiceAPI } from "../services/hairServiceAPI";
import "../styles/services.css";

export default function Services() {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    price: ""
  });

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const response = await hairServiceAPI.getServices();
      setServices(response.data);
    } catch (err) {
      alert(`Error al cargar los servicios: ${err.message}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOpenModal = (service = null) => {
    if (service) {
      setFormData(service);
      setCurrentService(service);
    } else {
      setFormData({
        name: "",
        description: "",
        duration: "",
        price: ""
      });
      setCurrentService(null);
    }
    setShowModal(true);
  };

  const handleSaveService = async () => {
    try {
      const serviceData = {
        ...formData,
        duration: parseInt(formData.duration),
        price: parseFloat(formData.price)
      };

      if (currentService) {
        await hairServiceAPI.updateService(currentService.id, serviceData);
      } else {
        await hairServiceAPI.createService(serviceData);
      }

      setShowModal(false);
      loadServices();
      alert(currentService ? "Servicio actualizado" : "Servicio creado");
    } catch (err) {
      alert(`Error al guardar el servicio: ${err.message}`);
    }
  };

  const handleToggleAvailability = async (service) => {
    try {
      // Actualizar el estado localmente primero
      setServices(currentServices => 
        currentServices.map(s => {
          if (s.id === service.id) {
            return { ...s, available: !s.available };
          }
          return s;
        })
      );

      // Luego hacer la llamada a la API
      if (service.available) {
        await hairServiceAPI.disableService(service.id);
      } else {
        await hairServiceAPI.restoreService(service.id);
      }
    } catch (err) {
      // Si hay error, revertir el cambio local
      setServices(currentServices => 
        currentServices.map(s => {
          if (s.id === service.id) {
            return { ...s, available: service.available };
          }
          return s;
        })
      );
      alert(`Error al cambiar disponibilidad del servicio: ${err.message}`);
    }
  };

  const handleDeleteService = async (service) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar el servicio "${service.name}"? Esta acción no se puede deshacer.`)) {
      try {
        // Eliminar localmente primero
        setServices(currentServices => 
          currentServices.filter(s => s.id !== service.id)
        );
        
        // Luego eliminar en la API
        const response = await hairServiceAPI.deleteService(service.id);
        console.log(response.data.message);
      } catch (err) {
        // Si hay error, recargar los servicios para asegurar consistencia
        loadServices();
        alert(`Error al eliminar el servicio: ${err.message}`);
      }
    }
  };

  const renderActionButtons = (service) => (
    <div className="d-flex gap-2 justify-content-center">
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => handleOpenModal(service)}
        title="Editar servicio"
      >
        Editar
      </Button>
      <Button
        variant={service.available ? "outline-warning" : "outline-success"}
        size="sm"
        onClick={() => handleToggleAvailability(service)}
        title={service.available ? "Deshabilitar servicio" : "Habilitar servicio"}
      >
        {service.available ? "Deshabilitar" : "Habilitar"}
      </Button>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => handleDeleteService(service)}
        title="Eliminar servicio permanentemente"
      >
        Eliminar
      </Button>
    </div>
  );

  return (
    <div className="services-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="services-title">Servicios</h4>
        <Button variant="primary" onClick={() => handleOpenModal()}>
          Nuevo Servicio
        </Button>
      </div>
      
      <div className="table-wrapper">
        <DataTable
          columns={["ID", "Servicio", "Descripción", "Duración", "Precio", "Estado", "Acciones"]}
          data={services.map((s) => [
            s.id,
            s.name,
            s.description,
            `${s.duration} min`,
            `$${s.price}`,
            s.available ? "Activo" : "Inactivo",
            renderActionButtons(s)
          ])}
        />
      </div>

      {/* Modal para crear/editar servicio */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentService ? "Editar Servicio" : "Nuevo Servicio"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duración (minutos)</Form.Label>
              <Form.Control
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveService}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

