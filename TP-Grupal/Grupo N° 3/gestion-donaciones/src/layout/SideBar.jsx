import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "240px", minHeight: "100vh" }}
    >
      <h4 className="mb-4 text-center">HOME</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/SeccionDonaciones" className="text-white">
          Seccion Donaciones
        </Nav.Link>
        <Nav.Link as={Link} to="/Donantes" className="text-white">
          Donantes
        </Nav.Link>
        <Nav.Link as={Link} to="/Entregas" className="text-white">
          Entregas
        </Nav.Link>
      </Nav>
    </div>
  );
}
