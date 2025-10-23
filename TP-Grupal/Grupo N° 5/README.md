# Proyecto: Sistema de Gestión de Peluqueria

## Integrantes
- Toranzo Fabricio Luciano (Líder / components / pages / constants/ utils/ endpoints)
- Ibañez Lucas Benjamin (Dashboard / layout/ router / store / styles)


# Obejetivos Semana 1
Objetivo de la Semana 1

 - Iniciar la construcción del proyecto React dejando:

 - Estructura de carpetas completa dentro de /src

 - Componentes base creados y funcionales (no vacíos)

 - Login simulado con localStorage

 - Dashboard inicial con useState + useEffect + datos simulados

 - Router configurado (sin proteger aún)

 - React Bootstrap aplicado (tablas, forms, cards)

 - Flujo Git colaborativo aplicado correctamente


# Estructura del Proyecto

src/
 ├─ components/
 │   ├─ Sidebar.jsx
 │   ├─ ClientForm.jsx
 │   ├─ ServiceForm.jsx
 │   ├─ AppointmentForm.jsx
 │   └─ DataTable.jsx
 ├─ pages/
 │   ├─ Login.jsx
 │   ├─ Dashboard.jsx
 │   ├─ Clients.jsx
 │   ├─ Services.jsx
 │   └─ Appointments.jsx
 ├─ layout/
 │   └─ MainLayout.jsx
 ├─ router/
 │   ├─ AppRouter.jsx
 │   └─ RouterProtect.jsx
 ├─ store/
 │   └─ userStore.js
 ├─ utils/
 │   ├─ fakeData.js
 │   └─ date.js
 ├─ constants/
 │   └─ index.js
 ├─ endpoints/
 │   └─ index.js
 ├─ styles/
 │   ├─ Sidebar.css
 │   ├─ Layout.css
 │   ├─ Login.css
 │   └─ Dashboard.css
 └─ App.jsx


## Estructura inicial
- Login simulado con localStorage
- Dashboard inicial con datos fake (próxima tarea)
- Router configurado
- Carpeta store y utils preparadas

## Tecnologías
React + Vite + React Bootstrap + React Router DOM

## Flujo Git
1. Lider crea el fork y rama `dev`
2. Integrantes clonan el fork del lider
3. Cada uno trabaja en su rama `Nombre_Legajo`
4. Pull request a `dev`
5. Merge final → `main`


# Credenciales del Login Simulado
Usuario: admin
Contraseña: 1234

# Estado Actual

 - Proyecto funcionando correctamente
 - Listo para continuar con la Semana 2 (CRUD de Clientes y Servicios).
	