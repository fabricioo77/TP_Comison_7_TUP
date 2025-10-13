import React from "react";
import "../styles/Estudios/estudios.css";
export const Estudios = () => {
  const estudios = [
    {
      titulo: "Tecnicatura Universitaria en Programación",
      lugar: "UTN",
      año: "2024-Actualidad",
    },
    {
      titulo: "Rolling Code Full Stack Developer",
      lugar: "Rolling Code School",
      año: "2022-2023",
    },
    {
      titulo: "Técnico Universitario en Fotografía",
      lugar: "Universidad Nacional de Tucumán",
      año: "2020-2023",
    },
  ];
  return (
    <>
      <section className="estudios-container">
        <h2 className="estudios-title">Mis Estudios:</h2>
        <ul>
          {estudios.map((estudio, index) => (
            <li key={index}>
              <h3>{estudio.titulo}</h3>
              <h4>
                Lugar: <span>{estudio.lugar}</span>
              </h4>
              <h5>
                Año: <span>{estudio.año}</span>
              </h5>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
