import React from "react";
import "../styles/Footer/footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <a href="">
          <div className="icon-container">
            <FaGithub />
            GitHub
          </div>
        </a>
        <a href="">
          <div className="icon-container">
            <FaLinkedin />
            LinkedIn
          </div>
        </a>
      </section>
    </>
  );
};
