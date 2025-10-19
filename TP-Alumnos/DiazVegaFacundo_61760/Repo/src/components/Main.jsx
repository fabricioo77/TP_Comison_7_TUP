import Estudios from "./Estudios.jsx";
import SoftSkills from "./SoftSkills.jsx";
import Proyectos from "./Proyectos.jsx";
import Experiencia from "./Experiencia.jsx";
import Idiomas from "./Idiomas.jsx";
import Certificados from "./Certificados.jsx";

function Main() {
  return (
    <main>
      <section id="bio">
        <h2>Sobre mí</h2>
        <p>
          Soy estudiante de programación apasionado por el desarrollo web. Me
          gusta crear interfaces modernas, optimizadas y funcionales.
        </p>
      </section>

      <Estudios />
      <SoftSkills />
      <Proyectos />
      <Experiencia />
      <Idiomas />
      <Certificados />
    </main>
  );
}

export default Main;
