import "../styles/Inicio.css"


export default function Inicio({id}) {



    return(
        <section id={id} className="seccion-inico">
                    <h1 className="h1-inicio">Bienvenido a mi portafolio</h1>
                    <p className="p-inicio">
                        Soy una persona proactiva, con gran capacidad de aprndizaje, adaptacion y trabajo en equipo.
                        Me apasiona la tecnologia y disfruto desarrollar soluciones prácticas. Actualmente estudios
                        programación, lo que me permite aplicar mis conocimientos en proyectos reales.
                    </p>
        </section>

    )
}