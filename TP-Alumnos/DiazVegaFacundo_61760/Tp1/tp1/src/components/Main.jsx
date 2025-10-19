import Estudios from "./Estudios";
import SoftSkills from "./SoftSkills";
import Proyectos from "./Proyectos";
import Experiencia from "./Experiencia";
import Idiomas from "./Idiomas";
import Certificados from "./Certificados";
import { personalData } from "../data/data";

const Main = () => {
  return (
    <main className="portfolio-main">
      <section id="presentacion" className="section-padding">
        <h2 className="section-title">Acerca de Mí</h2>
        <p>{personalData.bio}</p>
      </section>

      <Proyectos />
      <Estudios />
      <Experiencia />
      <SoftSkills />
      <Idiomas />
      <Certificados />
      
    </main>
  );
};

export default Main;