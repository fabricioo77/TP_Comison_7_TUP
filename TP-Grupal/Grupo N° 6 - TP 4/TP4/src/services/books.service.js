import { ENDPOINTS } from "./endpoints";
import { httpClient } from "./httpClient";
import { audit } from "./audit.service";

/** CRUD Libros contra json-server */
export const booksService = {
  async getAll() {
    const client = httpClient();
    return client.get(ENDPOINTS.books);
  },

  async create(book) {
    const client = httpClient();
    // Normalizar campos
    const payload = {
      ...book,
      cantidad: Number(book.cantidad || 0),
      cantidadDisponible: Number(book.cantidad || 0),
    };
    const created = await client.post(ENDPOINTS.books, payload);
    await audit("CREATE_BOOK", "book", created.id);
    return created;
  },

  async update(id, patch) {
    const client = httpClient();
    const updated = await client.patch(`${ENDPOINTS.books}/${id}`, patch);
    await audit("UPDATE_BOOK", "book", id);
    return updated;
  },

  async delete(id) {
    const client = httpClient();
    await client.del(`${ENDPOINTS.books}/${id}`);
    await audit("DELETE_BOOK", "book", id);
    return true;
  }
};
