export default function Idiomas({ titulo }) {
  const idiomas = [
    { nombre: "Español", nivel: "Nativo" },
    { nombre: "Inglés", nivel: "Intermedio" },
  ];

  return (
    <section id="idiomas" className="section">
      <h2>{titulo}</h2>
      <ul>
        {idiomas.map((i, idx) => (
          <li key={idx} className="card">
            <strong>{i.nombre}</strong> — {i.nivel}
          </li>
        ))}
      </ul>
    </section>
  );
}
