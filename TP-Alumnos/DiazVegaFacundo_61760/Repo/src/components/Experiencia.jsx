function Experiencia() {
  const trabajos = [
    { id: 1, puesto: "Soporte Técnico", empresa: "Tech Solutions", anio: "2023" },
    { id: 2, puesto: "Desarrollador Frontend Jr.", empresa: "Innovar Web", anio: "2024" },
  ];

  return (
    <section id="experiencia">
      <h2>Experiencia Laboral</h2>
      <ul>
        {trabajos.map((t) => (
          <li key={t.id}>
            <strong>{t.puesto}</strong> - {t.empresa} ({t.anio})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experiencia;
