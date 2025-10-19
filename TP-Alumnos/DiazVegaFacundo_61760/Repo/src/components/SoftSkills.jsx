function SoftSkills() {
  const skills = ["Comunicación", "Trabajo en equipo", "Responsabilidad", "Creatividad"];

  return (
    <section id="softskills">
      <h2>Soft Skills</h2>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

export default SoftSkills;
