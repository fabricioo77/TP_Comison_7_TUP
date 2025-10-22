import React from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Para navegar

const LoginPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Login (Simulado)</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="admin@test.com" disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="123456" disabled />
            </Form.Group>
            
          
            <Button as={Link} to="/dashboard" variant="primary" className="w-100">
              Ir a Dashboard (Prueba)
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;