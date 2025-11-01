const MOCK_PATIENTS = [
  {
    id: "1",
    nombre: "Pedro",
    apellido: "García",
    dni: "12345678",
    fechaNacimiento: "1990-05-15",
    telefono: "011-1234-5678",
    email: "pedro.garcia@email.com",
    direccion: "Av. Corrientes 1234, CABA",
    obraSocial: "OSDE",
  },
  {
    id: "2",
    nombre: "Laura",
    apellido: "Fernández",
    dni: "23456789",
    fechaNacimiento: "1985-08-22",
    telefono: "011-2345-6789",
    email: "laura.fernandez@email.com",
    direccion: "Calle San Martín 567, CABA",
    obraSocial: "Swiss Medical",
  },
  {
    id: "3",
    nombre: "Roberto",
    apellido: "Martínez",
    dni: "34567890",
    fechaNacimiento: "1995-03-10",
    telefono: "011-3456-7890",
    email: "roberto.martinez@email.com",
    direccion: "Av. Rivadavia 890, CABA",
    obraSocial: "Galeno",
  },
  {
    id: "4",
    nombre: "Carolina",
    apellido: "López",
    dni: "45678901",
    fechaNacimiento: "1988-11-30",
    telefono: "011-4567-8901",
    email: "carolina.lopez@email.com",
    direccion: "Calle Belgrano 234, CABA",
    obraSocial: "OSDE",
  },
  {
    id: "5",
    nombre: "Martín",
    apellido: "González",
    dni: "56789012",
    fechaNacimiento: "1992-07-18",
    telefono: "011-5678-9012",
    email: "martin.gonzalez@email.com",
    direccion: "Av. Santa Fe 456, CABA",
    obraSocial: "Medicus",
  },
];

class PatientService {
  constructor() {
    this.loadPatientsFromStorage();
  }

  loadPatientsFromStorage() {
    const stored = localStorage.getItem("patients");
    if (stored) {
      try {
        this.patients = JSON.parse(stored);
      } catch {
        this.patients = [...MOCK_PATIENTS];
        this.savePatientsToStorage();
      }
    } else {
      this.patients = [...MOCK_PATIENTS];
      this.savePatientsToStorage();
    }
  }

  savePatientsToStorage() {
    localStorage.setItem("patients", JSON.stringify(this.patients));
  }

  async getAll() {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      data: this.patients,
      total: this.patients.length,
    };
  }

  async getById(id) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const patient = this.patients.find((p) => p.id === id);

    if (!patient) {
      return {
        success: false,
        error: "Paciente no encontrado",
      };
    }

    return {
      success: true,
      data: patient,
    };
  }

  async create(patientData) {
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!patientData.nombre || !patientData.apellido || !patientData.dni) {
      return {
        success: false,
        error: "Nombre, apellido y DNI son requeridos",
      };
    }

    const existingPatient = this.patients.find(
      (p) => p.dni === patientData.dni
    );
    if (existingPatient) {
      return {
        success: false,
        error: "Ya existe un paciente con ese DNI",
      };
    }

    const newPatient = {
      id: Date.now().toString(),
      ...patientData,
    };

    this.patients.push(newPatient);
    this.savePatientsToStorage();

    return {
      success: true,
      data: newPatient,
      message: "Paciente creado exitosamente",
    };
  }

  async update(id, patientData) {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const index = this.patients.findIndex((p) => p.id === id);

    if (index === -1) {
      return {
        success: false,
        error: "Paciente no encontrado",
      };
    }

    if (patientData.dni && patientData.dni !== this.patients[index].dni) {
      const existingPatient = this.patients.find(
        (p) => p.dni === patientData.dni && p.id !== id
      );
      if (existingPatient) {
        return {
          success: false,
          error: "Ya existe otro paciente con ese DNI",
        };
      }
    }

    this.patients[index] = {
      ...this.patients[index],
      ...patientData,
      id: id,
    };

    this.savePatientsToStorage();

    return {
      success: true,
      data: this.patients[index],
      message: "Paciente actualizado exitosamente",
    };
  }

  async delete(id) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const index = this.patients.findIndex((p) => p.id === id);

    if (index === -1) {
      return {
        success: false,
        error: "Paciente no encontrado",
      };
    }

    const deletedPatient = this.patients[index];
    this.patients.splice(index, 1);
    this.savePatientsToStorage();

    return {
      success: true,
      data: deletedPatient,
      message: "Paciente eliminado exitosamente",
    };
  }

  async search(query) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!query || query.trim() === "") {
      return this.getAll();
    }

    const searchTerm = query.toLowerCase();
    const filtered = this.patients.filter(
      (p) =>
        p.nombre.toLowerCase().includes(searchTerm) ||
        p.apellido.toLowerCase().includes(searchTerm) ||
        p.dni.includes(searchTerm) ||
        p.email.toLowerCase().includes(searchTerm)
    );

    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  }
}

export const patientService = new PatientService();
export default patientService;
