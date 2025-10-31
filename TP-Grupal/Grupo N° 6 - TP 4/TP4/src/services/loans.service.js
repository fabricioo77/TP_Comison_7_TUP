import { ENDPOINTS } from "./endpoints";
import { httpClient } from "./httpClient";
import { audit } from "./audit.service";

/**
 * Loans Service
 * - create: valida disponibilidad, descuenta stock, crea préstamo
 * - returnLoan: marca devuelto y repone stock
 * - getJoined: devuelve préstamos con nombres de alumno/libro (join client-side)
 */
export const loansService = {
  async getAll() {
    const client = httpClient();
    return client.get(ENDPOINTS.loans);
  },

  async getJoined() {
    const client = httpClient();
    const [loans, books, students] = await Promise.all([
      client.get(ENDPOINTS.loans),
      client.get(ENDPOINTS.books),
      client.get(ENDPOINTS.students),
    ]);

    return loans.map((p) => ({
      ...p,
      alumno: students.find((a) => a.id === p.alumnoId)?.nombre || "Desconocido",
      libro: books.find((l) => l.id === p.libroId)?.titulo || "Desconocido",
    }));
  },

  async create(prestamo) {
    const client = httpClient();
    // 1) Validar stock
    const book = await client.get(`${ENDPOINTS.books}/${prestamo.libroId}`);
    if (!book || Number(book.cantidadDisponible) <= 0) {
      throw new Error("No hay ejemplares disponibles");
    }

    // 2) Descontar stock
    await client.patch(`${ENDPOINTS.books}/${book.id}`, {
      cantidadDisponible: Number(book.cantidadDisponible) - 1,
    });

    // 3) Crear préstamo (devuelto=false por defecto)
    const payload = { ...prestamo, devuelto: false };
    const created = await client.post(ENDPOINTS.loans, payload);

    await audit("CREATE_LOAN", "loan", created.id);
    return created;
  },

  async returnLoan(loanId) {
    const client = httpClient();
    // 1) Obtener préstamo
    const loan = await client.get(`${ENDPOINTS.loans}/${loanId}`);
    if (!loan) throw new Error("Préstamo no encontrado");
    if (loan.devuelto) return loan; // ya devuelto, idempotente

    // 2) Marcar devuelto
    const updated = await client.patch(`${ENDPOINTS.loans}/${loanId}`, { devuelto: true });

    // 3) Reponer stock del libro
    const book = await client.get(`${ENDPOINTS.books}/${loan.libroId}`);
    await client.patch(`${ENDPOINTS.books}/${book.id}`, {
      cantidadDisponible: Number(book.cantidadDisponible) + 1,
    });

    await audit("RETURN_LOAN", "loan", loanId);
    return updated;
  },
};
