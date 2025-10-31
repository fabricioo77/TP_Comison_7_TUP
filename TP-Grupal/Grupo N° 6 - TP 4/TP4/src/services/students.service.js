import { ENDPOINTS } from "./endpoints";
import { httpClient } from "./httpClient";
import { audit } from "./audit.service";

/** CRUD Students contra json-server */
export const studentsService = {
  async getAll() {
    const client = httpClient();
    return client.get(ENDPOINTS.students);
  },

  async create(student) {
    const client = httpClient();
    const payload = { ...student };
    const created = await client.post(ENDPOINTS.students, payload);
    await audit("CREATE_STUDENT", "student", created.id);
    return created;
  },

  async update(id, patch) {
    const client = httpClient();
    const updated = await client.patch(`${ENDPOINTS.students}/${id}`, patch);
    await audit("UPDATE_STUDENT", "student", id);
    return updated;
  },

  async delete(id) {
    const client = httpClient();
    await client.del(`${ENDPOINTS.students}/${id}`);
    await audit("DELETE_STUDENT", "student", id);
    return true;
  }
};
