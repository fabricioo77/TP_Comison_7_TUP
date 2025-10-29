# 🧾 Auditoría — Semana 2  
### Grupo Nº: ___  
### Tema asignado: ___  
### Integrantes (Nombre completo + Legajo):
- …
- …
- …

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Conflicto de Ruteo: react-router-dom esta instalado, pero implementado de forma incorrecta. AppRouter.jsx define rutas anidadas, pero MainLayout.jsx las ignora.

Navegación por Estado: MainLayout.jsx utiliza un useState (section) y una función renderSection() para mostrar las páginas. Esto anula el propósito del router, no actualiza la URL y no permite navegar por el historial.

Sidebar incorrecto: Sidebar.jsx usa una prop onSelect para actualizar el estado del layout, en lugar de usar el componente <Link> de react-router-dom para navegar por URL.

Ruta Privada Vacía: El archivo RouterProtect.jsx existe pero no contiene lógica de protección.

Consumo de Datos Estático: Todas las páginas leen datos de fakeData.js.

Formularios No Funcionales: Los formularios son solo visuales y no capturan la entrada del usuario.

Capa de Servicios: Existe una carpeta endpoints/ que usaremos como services/, pero está vacía.


## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- …

### ✅ Nuevos requerimientos de Semana 2 agregados
- …

---

## Observaciones finales (opcional)
- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.
