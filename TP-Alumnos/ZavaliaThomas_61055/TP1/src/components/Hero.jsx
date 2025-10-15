import React from 'react';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
   
    <section id="home" className="home-section"> 
      <Container className="text-center">
        <h1 className="display-4 text-white mb-4">
          Bienvenido a mi Portafolio
        </h1>
        <p className="lead text-light">Soy un desarrollador backend.</p>
      </Container>
    </section>
  );
}

export default Hero;