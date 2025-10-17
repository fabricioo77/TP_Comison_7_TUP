export default function Experiencia({ titulo }) {
  const trabajos = [
    { id: 1, puesto: "Asistente Técnico", empresa: "Cerámica Marcos Paz SRL", periodo: "2023" },
    { id: 2, puesto: "Desarrollador Freelance", empresa: "Proyectos personales", periodo: "2024 - Actualidad" },
  ];

  return (
    <section id="experiencia" className="section">
      <h2>{titulo}</h2>
      <ul className="lista-formacion">
      {trabajos.map((t) => (
        <div key={t.id} className="card">
          <h3>{t.puesto}</h3>
          <p>{t.empresa} — {t.periodo}</p>
        </div>
      ))}
      </ul>
    </section>
  );
}
