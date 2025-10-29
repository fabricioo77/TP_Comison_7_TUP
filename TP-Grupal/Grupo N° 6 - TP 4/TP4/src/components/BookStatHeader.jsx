// src/components/ui/BookStatsHeader.jsx (versión simplificada usando StatCard)
import { Row, Col } from "react-bootstrap";
import StatCard from "./StatCard";

export default function BookStatsHeader({ libro }) {
  if (!libro) return null;

  return (
    <Row className="mb-4">
      <Col md={4}>
        <StatCard
          title="❤️ Likes"
          value={libro.likes ?? 0}
          color="danger"
          icon="❤️"
        />
      </Col>

      <Col md={4}>
        <StatCard
          title="💬 Comentarios"
          value="Ver comentarios"
          color="primary"
          icon="💬"
          link={libro.linkComentarios}
        />
      </Col>

      <Col md={4}>
        <StatCard
          title="⭐ Puntaje"
          value={libro.puntaje ?? "N/A"}
          color="warning"
          icon="⭐"
        />
      </Col>
    </Row>
  );
}
