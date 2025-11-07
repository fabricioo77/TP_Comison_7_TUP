import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 1. Importar el servicio en lugar de utils
import { getUsuarioPorEmail } from '../services/usuariosService.js';

function Login() {
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasena] = useState("");
  const [loading, setLoading] = useState(false); // Estado de carga
  const navigate = useNavigate();

  useEffect(() => {
    const log = localStorage.getItem("usuarioLogueado");
    if (log === "Si") {
      navigate('/dashboard');
    }
  }, [navigate]);

  // 2. Convertir handleSubmit en async
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 3. Llamar al servicio (es asíncrono)
      const usuario = await getUsuarioPorEmail(email);

      if (usuario != null) {
        if (contrasenia === usuario.contrasenia) {
          localStorage.setItem('usuarioLogueado', 'Si');
          localStorage.setItem('Usuario', JSON.stringify(usuario));
          navigate('/dashboard');
        } else {
          alert("Contraseña Incorrecta");
        }
      } else {
        alert("El Usuario No Existe");
      }
    } catch (error) {
      alert("Error al contactar el servidor. ¿Iniciaste 'npm run server'?");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: " #2c3e50",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setContrasena(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" style={{ width: "100%" }} disabled={loading}>
          {loading ? 'INGRESANDO...' : 'INICIAR SESIÓN'}
        </Button>
      </Form>
    </div>
  );
}

export default Login;