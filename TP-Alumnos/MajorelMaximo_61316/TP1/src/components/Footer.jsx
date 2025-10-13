import React from "react";
import "../styles/Footer/footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <a href="https://github.com/maximajorel/" target="_blank">
          <div className="icon-container">
            <FaGithub />
            GitHub
          </div>
        </a>
        <a href="https://www.linkedin.com/in/maximo-majorel/" target="_blank">
          <div className="icon-container">
            <FaLinkedin />
            LinkedIn
          </div>
        </a>
      </section>
    </>
  );
};
