import React from "react";
import "../styles/Header/header.css";
import fotoMaxi from "../assets/Header/fotoMaxi.png";
export const Header = () => {
  return (
    <>
      <section className="header-container">
        <div className="photo-container">
          <img src={fotoMaxi} alt="Fotografía Máximo Majorel" />
        </div>
        <div>
          <h1>Máximo Majorel</h1>
        </div>
      </section>
    </>
  );
};
