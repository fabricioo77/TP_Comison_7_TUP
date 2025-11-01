# 🧾 Auditoría — Semana 2  
### Grupo Nº: ___  
### Tema asignado: ___  
### Integrantes (Nombre completo + Legajo):
- …
- …
- …

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)
- Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)
- Problemas de estructura, naming, uso de git o dependencias

> Este apartado debe completarse **ANTES** de modificar el código.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- Se corrigió el handler de eliminación en Asistentes.jsx para que llame correctamente a la función deleteById de utils.js.
- Se mejoró deleteById para que al eliminar un artista o asistente, también se elimine de todos los eventos en los que estaba inscrito/asociado (integridad de datos).
- Se modificó el modal de "Gestionar Evento" para incluir dos nuevas secciones (visibles solo en modo edición).
- Se implementó la lógica para asociar y desasociar Artistas a un evento, consumiendo la lógica de utils.js.
- Se añadió la sección para inscribir y remover Asistentes a un evento.
- El formulario deshabilita el botón de inscripción de asistentes cuando el evento alcanza su cupo máximo.
### ✅ Nuevos requerimientos de Semana 2 agregados

- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.
