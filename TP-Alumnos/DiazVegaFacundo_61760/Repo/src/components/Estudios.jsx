function Estudios() {
  const estudios = [
    { id: 1, titulo: "Tecnicatura en Programación", institucion: "UTN" },
    { id: 2, titulo: "Curso de React", institucion: "Coderhouse" },
  ];

  return (
    <section id="estudios">
      <h2>Estudios</h2>
      <ul>
        {estudios.map((e) => (
          <li key={e.id}>
            {e.titulo} - {e.institucion}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Estudios;
