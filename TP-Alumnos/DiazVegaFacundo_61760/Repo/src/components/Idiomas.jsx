function Idiomas() {
  const idiomas = [
    { id: 1, idioma: "Español", nivel: "Nativo" },
    { id: 2, idioma: "Inglés", nivel: "Intermedio (B1)" },
  ];

  return (
    <section id="idiomas">
      <h2>Idiomas</h2>
      <ul>
        {idiomas.map((i) => (
          <li key={i.id}>
            {i.idioma} — {i.nivel}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Idiomas;
