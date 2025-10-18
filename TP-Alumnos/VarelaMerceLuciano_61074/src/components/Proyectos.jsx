import react from 'react'; 
import listaProyectos from '../data/proyectos.json';




function Proyectos({proyectos})
{
    return (
    <section id = "proyectos" className = "seccion">
        <h2> Proyectos Realizados </h2>
        <div className = "proyectos-lista">

            {listaProyectos.map( (proyecto) => (
            
            <article key={proyecto.id} className="proyecto-card">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                <a 
              href={proyecto.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="proyecto-boton"
                >
              Ver en GitHub
            </a>
          </article>
            ))}
        </div>        
    </section>
    );
}

export default Proyectos;