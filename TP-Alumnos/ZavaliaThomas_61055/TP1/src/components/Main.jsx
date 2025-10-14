import React from 'react';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';
import Proyectos from './Proyectos';
import Idiomas from './Idiomas';

const datosProyectos = [
  {
    titulo: 'Sistema de Reserva de Películas',
    imagenes: ['../../public/cine.png'],
    fechaInicio: '2023',
    descripcion: 'Sistema que permite gestionar la reserva de entradas de cine.'
  }
 
];

const datosBasicos = {
  nombre_seccion: {
    proyectos: 'Mis Proyectos'
  }
};

function Main() {
  return (
    <>
      <main className="main-content">
        <motion.section
          id="estudios"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <Container fluid className="py-5">
            <section id="home" className="text-center mb-5">
              <h1 className="display-4 text-white mb-4">
                Bienvenido a mi Portafolio
              </h1>
              <p className="lead text-light">Soy un desarrollador backend.</p>
            </section>

            <Estudios />
            <SoftSkills />
            <Proyectos
              datosProyectos={datosProyectos}
              datosBasicos={datosBasicos}
            />
            <Idiomas />
          </Container>
        </motion.section>
      </main>
    </>
  );
}

export default Main;
