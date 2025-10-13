import React, { useState, useEffect } from "react";
import "../styles/Proyectos/proyectos.css";
import indatabiz from "../assets/Proyects/indatabiz.png";
import openit from "../assets/Proyects/openit.png";
import zontes from "../assets/Proyects/zontes.jpg";
import erma from "../assets/Proyects/comercialerma.jpg";
import cmdweb from "../assets/Proyects/cmd.png";
import cmdsys from "../assets/Proyects/cmd-sistema.png";
import radix from "../assets/Proyects/radix.png";
export const Proyectos = () => {
  const proyectosRealizados = [
    {
      nombre: "InDataBiz",
      rol: "Dev & Product Manager",
      descripcion:
        "Desarrollo integral de la web coorporativa de InDataBiz, empresa especializada en ciencia de datos",
      imagen: indatabiz,
    },
    {
      nombre: "OpenIT",
      rol: "Dev & Product Manager",
      descripcion:
        "Auditoría y sanitización de vulnerabilidades de seguridad del sitio corporativo de la empresa OpenIT, empresa especializada en infraestructura IT ",
      imagen: openit,
    },
    {
      nombre: "Zontes Barcelona",
      rol: "Dev & Product Manager",
      descripcion:
        "Desarrollo integral del sitio web para concesionaria oficial de marca Zontes, en Barcelona, España",
      imagen: zontes,
    },
    {
      nombre: "Comercial Erma",
      rol: "Product Manager",
      descripcion:
        "Gestión del equipo de desarrolladores durante el desarrollo del sitio corporativo para la empresa Comercial Erma, especializada en distribución de Azucar nacional e internacional",
      imagen: erma,
    },
    {
      nombre: "Centro Dermatologico Tucumán - Web",
      rol: "Dev & Product Manager",
      descripcion:
        "Desarrollo integral del sitio web para Centro Dermatologico Tucumán.",
      imagen: cmdweb,
    },
    {
      nombre: "Centro Dermatologico Tucumán - Sistema",
      rol: "Backend dev & Product Manager",
      descripcion:
        "Sistema en desarrollo para gestión de movimientos dentro del Centro Medico, con trazabilidad de las transacciones",
      imagen: cmdsys,
    },
    {
      nombre: "Radix Web",
      rol: "Founder",
      descripcion:
        "Radix es mi empresa de desarrollo fundada con colegas con orientación al desarrollo de soluciones digitales y publicidad para PyMES",
      imagen: radix,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % proyectosRealizados.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [proyectosRealizados.length]);
  return (
    <>
      <section className="proyectos-section">
        <div className="proyectos-info">
          <h3 className="titulo-proyecto">
            {proyectosRealizados[currentIndex].nombre}
          </h3>
          <h4>Rol: {proyectosRealizados[currentIndex].rol}</h4>
          <p className="descripcion-proyecto">
            {proyectosRealizados[currentIndex].descripcion}
          </p>
        </div>
        <div className="proyectos-info image-container">
          <img
            className="imagen-proyecto"
            src={proyectosRealizados[currentIndex].imagen}
            alt={proyectosRealizados[currentIndex].nombre}
          />
        </div>
      </section>
    </>
  );
};
