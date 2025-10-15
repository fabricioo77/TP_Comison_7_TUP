import React from 'react'

const Proyectos = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-list">
        <article className="project-item">
          <h3>Nombre del proyecto</h3>
          <p className="description">Descripción del proyecto</p>
          <p className="technologies">Tecnologías: React, JavaScript, CSS</p>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Ver demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Ver código</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Proyectos
