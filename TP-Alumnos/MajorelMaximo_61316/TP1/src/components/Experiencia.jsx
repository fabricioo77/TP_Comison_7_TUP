import React from "react";
import "../styles/Experiencia/experiencia.css";
export const Experiencia = () => {
  return (
    <>
      <section className="experiencia-container">
        <h2 className="experiencia-title">Experiencia</h2>
        <p>
          Gracias a mi emprendimiento <span className="destacado">Radix</span>,
          tuve la oportunidad de liderar y colaborar con equipos de trabajo en
          proyectos para múltiples empresas de distintos rubros. Además,
          actualmente formo parte de{" "}
          <span className="destacado">Zymo Tech</span>, una empresa tucumana
          dedicada a ofrecer soluciones informáticas empresariales.
          Paralelamente, gestiono mi propio{" "}
          <span className="destacado">servicio de hosting web</span>, donde
          administro proyectos tanto propios como de terceros.
        </p>
      </section>
    </>
  );
};
