import Estudios from "./Estudios";
import Experiencia from "./Experiencia";
import Proyectos from "./Proyectos";
import Softskills from "./SoftSkills";
import Idiomas from "./Idiomas";

export default function Main() {
  const descripcion = "Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN,apasionado por el desarrollo de software, especialmente en C#, JavaScript y HTML. Me gusta aprender nuevas tecnologías y aplicar buenas prácticas de programación.";

  return (
    <main className="main">
      <section id="presentacion" className="section">
        <h2>Sobre mí</h2>
        <p>{descripcion}</p>
      </section>

      <Estudios titulo="Formación Académica" />
      <Proyectos titulo="Proyectos Realizados" />
      <Softskills titulo="Habilidades Blandas" />
      <Idiomas titulo="Idiomas" />
      <Experiencia titulo="Experiencia Laboral" />
    </main>
  );
}
