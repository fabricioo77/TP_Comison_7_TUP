function Proyectos() {
  const proyectos = [
    { id: 1, nombre: "Portfolio Personal", descripcion: "Hecho con React y Vite" },
    { id: 2, nombre: "App de Tareas", descripcion: "Aplicación CRUD con JavaScript" },
    { id: 3, nombre: "Gestor de Notas", descripcion: "Usa LocalStorage y Bootstrap" },
  ];

  return (
    <section id="proyectos">
      <h2>Proyectos Realizados</h2>
      <ul>
        {proyectos.map((p) => (
          <li key={p.id}>
            <strong>{p.nombre}</strong>: {p.descripcion}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Proyectos;
