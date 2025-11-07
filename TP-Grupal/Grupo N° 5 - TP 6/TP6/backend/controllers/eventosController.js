import pool from "../db.js";

export const getEventos = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM eventos");
  res.json(rows);
};

export const getEventoById = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM eventos WHERE id = ?", [req.params.id]);
  res.json(rows[0]);
};

export const createEvento = async (req, res) => {
  const { nombre, fecha, lugar, cupo } = req.body;
  const [result] = await pool.query(
    "INSERT INTO eventos (nombre, fecha, lugar, cupo) VALUES (?, ?, ?, ?)",
    [nombre, fecha, lugar, cupo]
  );
  res.status(201).json({ id: result.insertId, ...req.body });
};

export const updateEvento = async (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, lugar, cupo } = req.body;
  await pool.query(
    "UPDATE eventos SET nombre=?, fecha=?, lugar=?, cupo=? WHERE id=?",
    [nombre, fecha, lugar, cupo, id]
  );
  res.json({ message: "Evento actualizado" });
};

export const deleteEvento = async (req, res) => {
  await pool.query("DELETE FROM eventos WHERE id = ?", [req.params.id]);
  res.json({ message: "Evento eliminado" });
};
