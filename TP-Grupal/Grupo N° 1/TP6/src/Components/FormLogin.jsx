import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
function Login() {
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && contrasena) {
          localStorage.setItem('usuarioLogueado', 'Si');
          localStorage.setItem('emailUsuario', email);
            navigate('/dashboard')
        }else {
            alert("Rellena los campos")
        }
    }
  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa"
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
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setContrasena(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordame" />
      </Form.Group>

      <Button  type="submit" style={{ width: "100%" }}>
        INICIAR SESIÓN
      </Button>
    </Form>
  </div>
  );
}

export default Login;