import React from 'react';




function Estudios({ formacion }) {
  
  return 
  (
    <section id="estudios" className="estudios-seccion">
      <h2>Mi Formación 🎓</h2>
      <div className="estudios-contenedor">
        
        {/* Mapeamos la prop "formacion" que recibimos de Main */}
        {formacion.map((estudio) => 
        (
          
          <article key={estudio.id} className="estudio-card">
            {/* Usamos las claves del array 'datosFormacion': titulo, institucion, año */}
            <h3>{estudio.titulo}</h3>
            <p className="estudio-institucion">{estudio.institucion}</p>
            <p className="estudio-info">{estudio.año}</p>
          </article>
        ))}
      </div>
     </section>
  );
}

export default Estudios;