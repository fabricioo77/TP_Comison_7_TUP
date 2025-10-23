import { useState, useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import DataTable from "./ui/DataTable";
import "./SportsTable.css";

const SportsTable = () => {
  const [sports, setSports] = useState([]);

  // Pre carga los datos en la tabla con el useEffect
  useEffect(() => {
    const storedSports = localStorage.getItem("sports");

    const initialSports = [
      {
        id: 1,
        nombre: "Tenis",
        miembros: 32,
        estado: "Activo",
      },
      {
        id: 2,
        nombre: "Natación",
        miembros: 45,
        estado: "Activo",
      },
      {
        id: 3,
        nombre: "Básquet",
        miembros: 28,
        estado: "Activo",
      },
      {
        id: 4,
        nombre: "Yoga",
        miembros: 15,
        estado: "Inactivo",
      },
      {
        id: 5,
        nombre: "Karate",
        miembros: 22,
        estado: "Activo",
      },
      {
        id: 6,
        nombre: "Fútbol",
        miembros: 50,
        estado: "Activo",
      },
      {
        id: 7,
        nombre: "Voleibol",
        miembros: 18,
        estado: "Activo",
      },
      {
        id: 8,
        nombre: "Gimnasia",
        miembros: 25,
        estado: "Inactivo",
      },
    ];

    if (!storedSports) {
      // Cuando no hay datos en localStorage, precarga los datos iniciales
      localStorage.setItem("sports", JSON.stringify(initialSports));
      setSports(initialSports);
    } else {
      // Si existen datos, usarlos tal cual
      setSports(JSON.parse(storedSports));
    }
  }, []);

  // Actualizar deportes en estado y localStorage
  const updateSports = (updatedSports) => {
    setSports(updatedSports);
    localStorage.setItem("sports", JSON.stringify(updatedSports));
  };

  // Activar deporte
  const handleActivate = (id) => {
    const updatedSports = sports.map((sport) =>
      sport.id === id ? { ...sport, estado: "Activo" } : sport
    );
    updateSports(updatedSports);
  };

  // Desactivar deporte
  const handleDeactivate = (id) => {
    const updatedSports = sports.map((sport) =>
      sport.id === id ? { ...sport, estado: "Inactivo" } : sport
    );
    updateSports(updatedSports);
  };

  // Ver detalles del deporte
  const handleView = (id) => {
    const sport = sports.find((s) => s.id === id);
    alert(`Ver detalles de: ${sport.nombre}\nMiembros: ${sport.miembros}\nEstado: ${sport.estado}`);
  };

  // Editar deporte
  const handleEdit = (id) => {
    const sport = sports.find((s) => s.id === id);
    alert(`Editar deporte: ${sport.nombre}`);
  };

  // Badge de estado
  const getStatusBadge = (estado) => {
    switch (estado) {
      case "Activo":
        return (
          <Badge bg="success" className="status-badge">
            Activo
          </Badge>
        );
      case "Inactivo":
        return (
          <Badge bg="danger" className="status-badge">
            Inactivo
          </Badge>
        );
      default:
        return (
          <Badge bg="secondary" className="status-badge">
            {estado}
          </Badge>
        );
    }
  };

  // Definir columnas de la tabla
  const columns = [
    {
      key: "nombre",
      label: "Nombre del Deporte",
      render: (item) => <span className="sport-name">{item.nombre}</span>,
    },
    {
      key: "miembros",
      label: "Miembros",
      render: (item) => {
        const miembros = item.miembros || 0;
        return <span className="member-count">{miembros}</span>;
      },
    },
    {
      key: "estado",
      label: "Estado",
      render: (item) => getStatusBadge(item.estado),
    },
    {
      key: "acciones",
      label: "Acciones",
      render: (item) => (
        <div className="action-buttons-inline">
          <Button
            variant="link"
            className="action-btn edit-btn"
            onClick={() => handleEdit(item.id)}
            title="Editar"
          >
            Editar
          </Button>
          <Button
            variant="link"
            className="action-btn view-btn"
            onClick={() => handleView(item.id)}
            title="Ver"
          >
            Ver
          </Button>
          {item.estado === "Activo" ? (
            <Button
              variant="link"
              className="action-btn deactivate-btn"
              onClick={() => handleDeactivate(item.id)}
              title="Desactivar"
            >
              Desactivar
            </Button>
          ) : (
            <Button
              variant="link"
              className="action-btn activate-btn"
              onClick={() => handleActivate(item.id)}
              title="Activar"
            >
              Activar
            </Button>
          )}
        </div>
      ),
    },
  ];

  // Filtros de estado
  const filters = [
    {
      key: "estado",
      label: "Estado",
      options: [
        { value: "Activo", label: "Activo" },
        { value: "Inactivo", label: "Inactivo" },
      ],
    },
  ];

  return (
    <div className="sports-table-container">
      <div className="table-wrapper">
        <DataTable
          data={sports}
          columns={columns}
          searchable={true}
          searchPlaceholder="Buscar por nombre de deporte"
          filters={filters}
          selectable={false}
        />
      </div>
    </div>
  );
};

export default SportsTable;
