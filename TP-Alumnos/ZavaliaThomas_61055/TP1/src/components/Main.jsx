import React from "react";
import HomeSection from "./home/HomeSection"; // tu Home.jsx del template
/*import Estudios from "./Estudios";
import SoftSkills from "./SoftSkills";
import Experiencia from "./Experiencia";
import Idiomas from "./Idiomas";
import Certificados from "./Certificados";*/

function Main() {
  return (
    <main>
      {/* Sección del template */}
      <HomeSection />

      {/* Mis secciones 
      <section id="estudios" style={{ padding: "100px 0" }}>
        <Estudios />
      </section>

      <section id="softskills" style={{ padding: "100px 0" }}>
        <SoftSkills />
      </section>

      <section id="experiencia" style={{ padding: "100px 0" }}>
        <Experiencia />
      </section>

      <section id="idiomas" style={{ padding: "100px 0" }}>
        <Idiomas />
      </section>

      <section id="certificados" style={{ padding: "100px 0" }}>
        <Certificados />
      </section>
        */}
    </main>
  );
}

export default Main;
