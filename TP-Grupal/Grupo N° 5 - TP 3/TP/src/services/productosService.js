const API_URL = "http://localhost:5000/productos";

// Obtener todos los productos
export const getProductos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

// Agregar nuevo producto
export const addProducto = async (nuevoProducto) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoProducto),
  });
  return await res.json();
};

// Eliminar producto
export const deleteProducto = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

// Editar producto
export const updateProducto = async (id, productoActualizado) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productoActualizado),
  });
  return await res.json();
};
