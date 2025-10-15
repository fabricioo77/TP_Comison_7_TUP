import React from "react";
import "../styles/Header/header.css";
import fotoMaxi from "../assets/Header/fotoMaxi.png";
export const Header = () => {
  return (
    <>
      <header className="header-wrapper">
        <section className="header-container">
          <div className="photo-container">
            <img src={fotoMaxi} alt="Fotografía Máximo Majorel" />
          </div>
          <div className="header-info">
            <h1 className="header-name">Máximo Majorel</h1>
            <p className="header-title">
              Full Stack Developer & Product Manager
            </p>
          </div>
        </section>
      </header>
    </>
  );
};
