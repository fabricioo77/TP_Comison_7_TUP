import perfil from "../src/assets/IMG-20230223-WA0000.jpg";

import Estudios from "./Estudios";
import Experiencia from "./Experiencia";
import Proyectos from "./Proyectos";
import Softskills from "./SoftSkills";
import Idiomas from "./Idiomas";

export default function Main() {
  const descripcion = "Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN,apasionado por el desarrollo de software, especialmente en C#, JavaScript y HTML. Me gusta aprender nuevas tecnologías y aplicar buenas prácticas de programación.";

  return (
    <main className="main" id="inicio">
      <div className="perfil-container">
        <img src={perfil} alt="Foto personal" className="perfil" />
      </div>

      <h1 className="nombre">Fabricio Luciano Toranzo</h1>


      <section className="sobre-mi">
        <h2>Sobre mí</h2>
        <p>
          Soy estudiante de la Tecnicatura Universitaria en Programación (UTN FRT),
          apasionado por el desarrollo de software, con especial interés en C#, React y Node.js.
          Me gusta crear soluciones eficientes y aprender constantemente sobre nuevas tecnologías.
        </p>
      </section>

      <Estudios titulo="Formación Académica" />
      <Proyectos titulo="Proyectos Realizados" />
      <Softskills titulo="Habilidades Blandas" />
      <Idiomas titulo="Idiomas" />
      <Experiencia titulo="Experiencia Laboral" />
    </main>
  );
}
