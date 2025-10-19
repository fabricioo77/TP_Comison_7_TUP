const proyectos = [
  { id: 1, nombre: "E-Commerce", tecnologia: "React" },
  { id: 2, nombre: "App de Notas", tecnologia: "Node.js" },
];

function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos Realizados</h2>
      {proyectos.map(p => (
        <div key={p.id}>
          <h3>{p.nombre}</h3>
          <p>Tecnología: {p.tecnologia}</p>
        </div>
      ))}
    </section>
  );
}