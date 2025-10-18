import React from 'react';

/* componentes hijos a importar*/

import Proyectos from './Proyectos';
import Estudios from './Estudios';

const listaProyectos = 
[
  {
    id: 1,
    titulo: "Juego de Preguntas (Trivia)",
    descripcion: "Una trivia sobre conocimientos generales utilizando C#.",
    urlGithub: "https://github.com/LuchoMerce/JuegDePreguntas.git"
  },
  {
    id: 2,
    titulo: "Implementación de Clases en C#",
    descripcion: "Proyecto con implementación de clases y que contiene Calculadora, contador de objetos, gestión de personas, gestor de alumnos, pregunta de seguridad tipo contraseña",
    urlGithub: "https://github.com/LuchoMerce/Proyecto-de-implementacion-de-clases.git"
  },
  {
    id: 3,
    titulo: "Proyecto de ventas + Principios SOLID en C#",
    descripcion: "Proyecto de ventas que aplica los principios SOLID",
    urlGithub: "https://github.com/LuchoMerce/Venta-de-Productos-SOLID.git"
  },
  {
    id: 4,
    titulo: "Este Portfolio (React)",
    descripcion: "Mi portfolio personal creado con React y Vite. Aquí muestro mis habilidades y proyectos.",
    urlGithub: "https..."
  }
];


const listaEstudios = 
[
  {
    id: 1,
    titulo: "Tecnicatura Universitaria en Programación",
    institucion: "Universidad Tecnológica Nacional (UTN) - Facultad Regional de Tucumán",
    periodo: "2024 - 2025",
    estado: "En curso"
  },
  {
    id: 2,
    titulo: "Programación Web Full Stack PHP",
    institucion: "Instituto Nacional de Educación Técnologica -- Educación IT",
    periodo: "2019",
    estado: "Completado"
  }
]


function Main() {
  return (
    <main className="main-content">
      <section className="seccion">
        <h2>Sobre Mí</h2>
        <p>
          ¡Hola! Soy Luciano. Un apasionado desarrollador en formación, siempre
          buscando aprender nuevas tecnologías y mejorar mis habilidades. Me
          encanta enfrentar desafíos y trabajar en proyectos que me permitan
          crecer profesionalmente.
        </p>
      </section>

        {/* --- 2. NAVEGACIÓN INTERNA --- */}
      <nav>
        <a href="#estudios">Ir a Estudios</a>
        <a href="#proyectos">Ir a Proyectos</a>
      </nav>

      {/* --- 3. Props para los hijos) --- */}
      
      <Estudios formacion={datosFormacion} />
      
      <Proyectos proyectos={datosProyectos} />

    </main>
  );
}

export default Main;