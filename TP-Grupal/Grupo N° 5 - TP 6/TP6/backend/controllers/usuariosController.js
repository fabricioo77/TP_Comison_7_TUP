import pool from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const [result] = await pool.query(
      "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
      [nombre, email, password]
    );
    res.status(201).json({ id: result.insertId, nombre, email });
  } catch (err) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE email = ? AND password = ?",
      [email, password]
    );
    if (rows.length > 0) {
      res.json({ message: "Login exitoso", usuario: rows[0] });
    } else {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error en login" });
  }
};
