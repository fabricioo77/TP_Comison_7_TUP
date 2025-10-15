import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/image.png"; // Asegúrate de que la ruta sea correcta
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineStar,
  AiOutlineProject,
  AiOutlineGlobal,
} from "react-icons/ai";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) setNavColour(true);
      else setNavColour(false);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#acerca" onClick={() => setExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Acerca de mí
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#estudios" onClick={() => setExpanded(false)}>
                <AiOutlineBook style={{ marginBottom: "2px" }} /> Estudios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#softskills" onClick={() => setExpanded(false)}>
                <AiOutlineStar style={{ marginBottom: "2px" }} /> Habilidades Blandas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#proyectos" onClick={() => setExpanded(false)}>
                <AiOutlineProject style={{ marginBottom: "2px" }} /> Proyectos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#idiomas" onClick={() => setExpanded(false)}>
                <AiOutlineGlobal style={{ marginBottom: "2px" }} /> Idiomas
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;