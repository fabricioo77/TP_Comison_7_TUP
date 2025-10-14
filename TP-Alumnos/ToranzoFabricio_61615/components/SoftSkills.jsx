export default function Softskills({ titulo }) {
  const skills = ["Trabajo en equipo", "Comunicación", "Liderazgo", "Responsabilidad", "Adaptabilidad"];

  return (
    <section id="softskills" className="section">
      <h2>{titulo}</h2>
      <ul className="tags">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
