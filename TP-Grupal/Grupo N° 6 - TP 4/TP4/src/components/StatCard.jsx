// src/components/ui/StatCard.jsx
import React from "react";
import { Card } from "react-bootstrap";

export default function StatCard({ title, value, icon, color, link }) {
  return (
    <Card
      className="shadow-sm h-100 border-0"
      style={{ transition: "0.3s", cursor: link ? "pointer" : "default" }}
      onClick={() => link && window.open(link, "_blank")}
    >
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div>
          <div className="text-muted small">{title}</div>
          <div
            className={`fs-3 fw-bold ${
              color ? `text-${color}` : "text-dark"
            }`}
          >
            {value}
          </div>
        </div>
        {icon && <div className="fs-2">{icon}</div>}
      </Card.Body>
    </Card>
  );
}
