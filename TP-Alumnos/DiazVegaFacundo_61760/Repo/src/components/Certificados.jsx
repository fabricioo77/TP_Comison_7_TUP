function Certificados() {
  const certificados = [
    { id: 1, nombre: "React desde Cero", institucion: "Coderhouse" },
    { id: 2, nombre: "Git y GitHub", institucion: "Platzi" },
  ];

  return (
    <section id="certificados">
      <h2>Certificados</h2>
      <ul>
        {certificados.map((c) => (
          <li key={c.id}>
            <strong>{c.nombre}</strong> — {c.institucion}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificados;
