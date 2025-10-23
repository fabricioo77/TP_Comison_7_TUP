import React, { useState } from 'react';

const EntregaItem = ({ donacion }) => {
  // Usamos un estado para manejar el estado actual de la entrega
  const [estado, setEstado] = useState(donacion.estadoInicial); // 'pendiente', 'en_camino', 'entregado'

  const handleMarcarEntregado = () => {
    setEstado('entregado');
    // Aquí podrías agregar una lógica para notificar al backend
    console.log(`La donación ${donacion.id} ha sido marcada como entregada.`);
  };

  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Donación ID: <strong>{donacion.id}</strong></span>
        <span className="badge bg-secondary">{donacion.destino}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">Detalles de la Entrega</h5>
        <p className="card-text">Contenido: {donacion.contenido}</p>

        {/* Línea de tiempo de la entrega */}
        <div className="mt-4">
          <div className="progress" style={{ height: '5px' }}>
            <div
              className={`progress-bar bg-${estado === 'pendiente' ? 'secondary' : 'success'}`}
              role="progressbar"
              style={{ width: estado === 'pendiente' ? '0%' : estado === 'en_camino' ? '50%' : '100%' }}
              aria-valuenow={estado === 'en_camino' ? 50 : 100}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-between mt-2 text-center">
            <div className={`step ${estado !== 'pendiente' ? 'text-success' : ''}`}>
              <div className="fw-bold">Salió</div>
              <div>{donacion.fechaSalida}</div>
            </div>
            <div className={`step ${estado === 'entregado' ? 'text-success' : ''}`}>
              <div className="fw-bold">Llegada Estimada</div>
              <div>{donacion.fechaLlegada}</div>
            </div>
          </div>
        </div>

        {/* Botón para marcar como entregado */}
        {estado !== 'entregado' && (
          <div className="text-end mt-3">
            <button className="btn btn-primary" onClick={handleMarcarEntregado}>
              Marcar como Entregado
            </button>
          </div>
        )}

        {estado === 'entregado' && (
           <div className="alert alert-success mt-3 text-center" role="alert">
             ¡Entrega completada! ✅
           </div>
        )}
      </div>
    </div>
  );
};

export default EntregaItem;