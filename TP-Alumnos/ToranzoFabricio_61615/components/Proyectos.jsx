export default function Proyectos({ titulo }) {
  const proyectos = [
    { id: 1, nombre: "Panadería Q’Ricos", desc: "Sistema de gestión de ventas, stock y producción con C# y SQL Server." },
    { id: 2, nombre: "ADA Shop", desc: "E-commerce con Node.js, Express y React." },
    { id: 3, nombre: "SmartLogisticsApp", desc: "Aplicación de gestión de envíos y vehículos." },
  ];

  return (
    <section id="proyectos" className="section">
      <h2>{titulo}</h2>
      <div className="lista-formacion">
        {proyectos.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.nombre}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
