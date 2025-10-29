// src/services/productosService.js
const API_URL = "http://localhost:5000/productos";

// 🔹 Obtener todos los productos
export const getProductos = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener productos");
    return await res.json();
  } catch (error) {
    console.error("Error en getProductos:", error);
    return [];
  }
};

// 🔹 Agregar un nuevo producto
export const addProducto = async (nuevoProducto) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto),
    });
    if (!res.ok) throw new Error("Error al agregar producto");
    return await res.json();
  } catch (error) {
    console.error("Error en addProducto:", error);
    throw error;
  }
};

// 🔹 Eliminar un producto
export const deleteProducto = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar producto");
  } catch (error) {
    console.error("Error en deleteProducto:", error);
    throw error;
  }
};
