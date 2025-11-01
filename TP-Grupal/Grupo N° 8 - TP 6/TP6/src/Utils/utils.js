// Clave única para guardar nuestros datos en el localStorage del navegador
const DB_KEY = 'culturaAppDB';

// Función para cargar la base de datos
function loadDB() {
  const data = localStorage.getItem(DB_KEY);
  if (data) {
    return JSON.parse(data);
  }
  // Si no hay nada guardado, usamos los datos iniciales
  return {
    asistentes: [
      { id: 1, nombre: "Juan", apellido: "Pérez", fechaNac: '2001-10-30' },
      { id: 2, nombre: "Lucía", apellido: "Gómez", fechaNac: '1999-01-20' },
      { id: 3, nombre: "Carlos", apellido: "Ruiz", fechaNac: '2004-03-15' }
    ],
    eventos: [
      { id: 1, nombre: "Feria Del Condado", fecha: "21-11-2025", lugar: "Parque 9 De Julio", cupo: 10, artistas: [], asistentes: [] },
      { id: 2, nombre: "La Expo", fecha: "22-12-2025", lugar: "Laprida y Corrientes", cupo: 20, artistas: [], asistentes: [] }
    ],
    artistas: [
      { id: 1, nombre: "Miguel", apellido: "Martin",nombreArt: "Gordillo",dni: "23123456" ,fechaNac: '1989-10-30', disponible: true },
      { id: 2, nombre: "Maria", apellido: "Becerra",nombreArt: "La Nena Argentina",dni: "24627416" ,fechaNac: '1988-04-15', disponible: true },
      { id: 3, nombre: "Mauro", apellido: "Monzon",nombreArt: "Lit-Killa",dni: "2234564" ,fechaNac: '1985-12-12', disponible: true },
    ],
    usuarios: [
      { id: 1, email: "Usuario@gmail.com", contrasenia: "123456", rol: "admin" },
    ],
  };
}

function saveDB() {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

let db = loadDB();
saveDB();

export function getAll(tabla) { return db[tabla] || []; }
export function getById(tabla, id) { return db[tabla]?.find(item => item.id === id) || null; }

export function addItem(tabla, nuevo) {
  const itemAAgregar = tabla === 'artistas' ? { ...nuevo, disponible: true } : nuevo;
  db[tabla].push({ id: Date.now(), ...itemAAgregar });
  saveDB();
}

export function updateItem(tabla, id, itemActualizado) {
  const index = db[tabla].findIndex(item => item.id === id);
  if (index !== -1) {
    db[tabla][index] = { ...db[tabla][index], ...itemActualizado };
    saveDB();
  }
}

// --- ¡FUNCIÓN MEJORADA! ---
export function deleteById(tabla, id) {
  // Lógica especial si estamos eliminando un evento
  if (tabla === 'eventos') {
    const eventoAEliminar = getById('eventos', id);
    if (eventoAEliminar && eventoAEliminar.artistas.length > 0) {
      // Liberamos a cada artista que estaba en el evento
      eventoAEliminar.artistas.forEach(artistaEnEvento => {
        const artistaOriginal = getById('artistas', artistaEnEvento.id);
        if (artistaOriginal) {
          artistaOriginal.disponible = true;
        }
      });
    }
  }

  // Lógica general para eliminar el item
  db[tabla] = db[tabla].filter(item => item.id !== id);
  saveDB(); // Guardamos todos los cambios
}

export function agregarArtistaAEvento(idEvento, idArtista) {
  const evento = getById('eventos', idEvento);
  const artista = getById('artistas', idArtista);

  if (!evento || !artista) {
    return { success: false, message: "Error: Evento o artista no encontrado." };
  }
  if (!artista.disponible) {
    return { success: false, message: `El artista ${artista.nombreArt} ya se encuentra ocupado.` };
  }
  const yaExiste = evento.artistas.some(a => a.id === idArtista);
  if (yaExiste) {
    return { success: false, message: `El artista ${artista.nombreArt} ya está asociado a este evento.` };
  }

  evento.artistas.push(artista);
  artista.disponible = false;
  saveDB();
  return { success: true, message: `¡${artista.nombreArt} se agregó al evento!` };
}

export function removerArtistaDeEvento(idEvento, idArtista) {
    const evento = getById('eventos', idEvento);
    if (!evento) { return; }
    evento.artistas = evento.artistas.filter(artista => artista.id !== idArtista);
    const artistaLiberado = getById('artistas', idArtista);
    if (artistaLiberado) {
      artistaLiberado.disponible = true;
    }
    saveDB();
}

export function agregarAsistenteAEvento(idEvento, idAsistente) {
  const evento = getById('eventos', idEvento);
  const asistente = getById('asistentes', idAsistente);

  if (!evento || !asistente) {
    console.error("Evento o asistente no encontrado");
    return;
  }
  if (evento.asistentes.length >= evento.cupo) {
    console.warn("No hay más cupos disponibles");
    return;
  }
  const yaExiste = evento.asistentes.some(a => a.id === idAsistente);
  if (yaExiste) {
    console.warn("El asistente ya está registrado");
    return;
  }

  evento.asistentes.push(asistente);
  saveDB();
}

export function getUsuarioPorEmail(email) {
  if (!email) return null;
  return db.usuarios.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
}