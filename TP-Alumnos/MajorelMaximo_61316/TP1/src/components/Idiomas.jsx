import React from "react";
import "../styles/Idiomas/idioma.css";
export const Idiomas = () => {
  const idiomas = [
    {
      nombre: "Español",
      nivel: "Nativo",
    },
    {
      nombre: "Ingles",
      nivel: "B2",
    },
  ];

  return (
    <>
      <section className="idioma-container">
        <h2 className="idioma-title">Idiomas que domino</h2>
        <ul className="idioma-list">
          {idiomas.map((idioma, index) => (
            <li key={index}>
              <h3 className="idioma-title">{idioma.nombre}</h3>
              <span>{idioma.nivel}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
