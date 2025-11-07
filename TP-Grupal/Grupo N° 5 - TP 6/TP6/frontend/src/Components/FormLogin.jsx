import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const log = localStorage.getItem("usuarioLogueado");
    if (log === "Si") {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3006/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contrasenia })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('usuarioLogueado', 'Si');
        localStorage.setItem('Usuario', JSON.stringify(data.usuario));
        alert("Login exitoso!");
        navigate('/dashboard');
      } else {
        alert(data.error || "Credenciales incorrectas");
      }

    } catch (error) {
      alert("Error al contactar el servidor");
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
            onChange={(e) => setContrasenia(e.target.value)}
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
