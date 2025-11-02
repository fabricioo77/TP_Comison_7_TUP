import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: 16 }}>
      <h1>Registro</h1>
      <p>Crea una cuenta para acceder a las funciones del sistema.</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" name="name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
