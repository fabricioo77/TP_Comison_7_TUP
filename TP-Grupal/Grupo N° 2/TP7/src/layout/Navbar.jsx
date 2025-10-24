import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";


const AppNavbar = () => {

    const cerrarSesion = () => {
        // aca iria la logica para cerrar sesion
    }



    return(

        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand href="/dashboard">Dashboard con datos falsos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <nav className="ms-auto">
                        <NavDropdown title={<PersonCircle size={24} color="white"/>} id="bsic-nav-dropdown" align="end">
                            <NavDropdown.Item href="#Perfil">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={cerrarSesion} className="text-danger">Cerrar sesion</NavDropdown.Item>
                        </NavDropdown>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default AppNavbar;