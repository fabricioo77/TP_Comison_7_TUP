import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../layout/sidebar";
import MainContent from "../layout/maincontent";
import { getVentas } from "../services/ventasService";
import { getClientes } from "../services/clientesService";

const PageContainer = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  background-color: var(--white);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const SearchBar = styled.div`
  position: relative;
  width: 350px;
  i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light);
  }
  input {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.9rem;
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
  }
`;

const ExportButton = styled.button`
  background-color: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: var(--primary-blue-dark);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 25px;
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  th {
    color: var(--text-light);
    font-weight: 600;
  }
`;

const HistorialVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    Promise.all([getVentas(), getClientes()]).then(([ventasData, clientesData]) => {
      // Combinar ventas con nombre del cliente
      const ventasConCliente = ventasData.map((v) => {
        const cliente = clientesData.find((c) => c.id === v.clienteId);
        return {
          ...v,
          clienteNombre: cliente ? cliente.nombre : "Desconocido",
        };
      });
      setVentas(ventasConCliente);
      setClientes(clientesData);
    });
  }, []);

  const ventasFiltradas = ventas.filter(
    (v) =>
      v.clienteNombre.toLowerCase().includes(filtro.toLowerCase()) ||
      String(v.id).includes(filtro)
  );

  const exportarCSV = () => {
    console.log("Exportar CSV ejecutado ✅");
  if (ventas.length === 0) {
    alert("No hay ventas para exportar.");
    return;
  }

  // Encabezados
  const encabezados = ["ID Venta", "Fecha", "Cliente", "Total"];

  // Filas de datos
  const filas = ventas.map((v) => [
    v.id,
    v.fecha,
    v.clienteNombre,
    v.total
  ]);

  // Cálculos extra
  const totalMonto = ventas.reduce((acc, v) => acc + Number(v.total || 0), 0);
  const totalVentas = ventas.length;
  const ticketPromedio = totalMonto / totalVentas;

  // Totales al final del CSV
  filas.push([]);
  filas.push(["", "", "Total de Ventas", totalVentas]);
  filas.push(["", "", "Monto Total Vendido", `$${totalMonto.toLocaleString()}`]);
  filas.push(["", "", "Ticket Promedio", `$${ticketPromedio.toFixed(2)}`]);

  // Construcción del contenido CSV
  const csvContent = [encabezados, ...filas].map((e) => e.join(",")).join("\n");

  // Crear el archivo CSV descargable
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    `reporte_ventas_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <PageContainer>
      <Sidebar />
      <MainContent
        title="Historial de Ventas"
        description="Consulta, filtra y gestiona todas las transacciones realizadas."
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <SearchBar>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Buscar por ID o cliente..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </SearchBar>
          <ExportButton onClick={exportarCSV}>Exportar Reporte</ExportButton>
        </div>

        <ContentWrapper>
          <Table>
            <thead>
              <tr>
                <th>ID Venta</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {ventasFiltradas.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", color: "#888" }}>
                    No hay ventas registradas aún.
                  </td>
                </tr>
              ) : (
                ventasFiltradas.map((v) => (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.fecha}</td>
                    <td>{v.clienteNombre}</td>
                    <td>${v.total}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </ContentWrapper>
      </MainContent>
    </PageContainer>
  );
};

export default HistorialVentas;
