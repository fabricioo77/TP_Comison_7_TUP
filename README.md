# 📌 TP — Semana 2  
Tecnicatura Universitaria en Programación — Comisión 7  
Profesor: Chocobar Matías  
**Fecha límite:** Domingo 02 — 18:00 hs

---

## 🎯 Objetivo Semana 2

Extender el proyecto React ya iniciado en Semana 1 incorporando:

- ✅ `react-router-dom` instalado y ruteo funcional
- ✅ Creación de **rutas privadas** usando el login simulado (localStorage)
- ✅ Creación de **custom hooks** para manejo simulado de peticiones HTTP
- ✅ Configuración de **json-server** para API fake
- ✅ Carpeta `services/` configurada con archivos para peticiones HTTP simuladas
- ✅ Proyecto **no debe reiniciarse desde cero** — se continua sobre lo ya entregado

---

## 🔁 Sobre el FORK y la actualización

- **No deben volver a hacer FORK** si ya lo hicieron en Semana 1
- El profesor ya cargó en el repositorio original nuevas carpetas y estructura
- Cada grupo debe **traer los nuevos cambios desde el repo del profesor**  
  (actualizando su fork y luego su clon local)
- Si encuentran carpetas vacías en su propio proyecto:
  - Deben reconstruirlas con lo hecho en Semana 1
  - Y luego agregar lo nuevo de Semana 2

---

## 🧩 Requerimientos técnicos esta semana

- `react-router-dom` instalado y en uso
- Rutas públicas y **rutas privadas protegidas**
- Hook personalizado para manejo simulado de API (`useFetch` / `useService` / similar)
- `json-server` agregado al proyecto con data fake
- Scripts en package.json para levantar json-server
- Peticiones HTTP simuladas desde carpeta `services/`

---

## 🧮 Flujo GIT — Semana 2

**LÍDER**
- Actualiza el repo con los cambios del profesor
- Integra ramas de integrantes en `dev`
- Hace `merge dev → main` al final
- Realiza el Pull Request final al profesor

**INTEGRANTES**
- NO hacen fork nuevo
- Trabajan en su rama `Nombre_Legajo`
- Push a su rama
- Avisan al líder para integrar

---

## 📘 Contenido obligatorio NUEVO esta semana

Dentro de la carpeta del grupo debe existir un archivo separado:

**`Auditoria_Semana_2.md` (OBLIGATORIO Y DESTACADO)**  
Con dos secciones:

1) **REPORTE ANTES DE TRABAJAR**  
   - Qué encontraron: errores, bugs, omisiones, faltantes de la semana pasada

2) **REPORTE DE SOLUCIONES + NUEVO AGREGADO**  
   - Qué corrigieron + qué añadieron de esta semana

> Este tipo de auditoría mejora:  
> lectura de código ajeno, reducción de deuda técnica, colaboración real y capacidad de detectar fallos antes de desarrollar

---

## 📬 Entrega

- Solo el líder realiza Pull Request al repo del profesor  
- **Título PR:** `TP Semana 2 — Grupo X — Comisión 7`  
- **Fecha límite:** Domingo 02 — 18:00 hs

---

## ✅ Checklist antes de enviar

- Router configurado + rutas privadas
- Hook custom para API simulada
- json-server configurado y funcionando
- Carpeta `services` operativa con funciones HTTP fake
- Auditoria_Semana_2.md creado dentro del grupo
- `dev` mergeado a `main` sin conflictos
- PR enviado por el líder
