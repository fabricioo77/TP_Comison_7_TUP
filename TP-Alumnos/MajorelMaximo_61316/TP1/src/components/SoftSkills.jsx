import React from "react";
import "../styles/SoftSkills/softskills.css";
export const SoftSkills = () => {
  const textColor = {
    claro: "#cad3f5",
    oscuro: "#181926",
  };
  const habilidades = [
    {
      nombre: "Comunicación",
      background: "#8bd5ca",
      textColor: textColor.oscuro,
    },
    {
      nombre: "Aprendizaje Rápido",
      background: "#a6da95",
      textColor: textColor.oscuro,
    },
    {
      nombre: "Liderazgo",
      background: "#8aadf4",
      textColor: textColor.oscuro,
    },
    {
      nombre: "Proactivo",
      background: "#f5a97f",
      textColor: textColor.oscuro,
    },
    {
      nombre: "Trabajo en equipo",
      background: "#8bd5ca",
      textColor: textColor.oscuro,
    },
  ];
  return (
    <>
      <section className="softSkills-container">
        <div className="title-container">
          <h2>Soft Skills</h2>
        </div>
        <div className="skill-container">
          <ul>
            {habilidades.map((habilidad, index) => (
              <li key={index} style={{ backgroundColor: habilidad.background }}>
                <h3 style={{ color: habilidad.textColor }}>
                  {habilidad.nombre}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
