export default function Estudios({ titulo }) {
  const estudios = [
    { id: 1, nombre: "Tecnicatura Universitaria en Programación", institucion: "UTN FRT", anio: "2023 - Actualidad" },
    { id: 2, nombre: "Curso de React y Node.js", institucion: "RollingCode School", anio: "2024" },
  ];

  return (
    <section id="estudios" className="section">
      <h2>{titulo}</h2>
      <ul>
        {estudios.map((e) => (
          <li key={e.id} className="card">
            <h3>{e.nombre}</h3>
            <p>{e.institucion} — <span>{e.anio}</span></p>
          </li>
        ))}
      </ul>
    </section>
  );
}
