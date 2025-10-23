PROYECTO: Sistema de Reservas para Consultorios Médicos
**Grupo N° 2 — Comisión 7 — UTN FRT**

## Integrantes y roles

| Nombre completo - Legajo - Rol en el proyecto |
|------------------|---------|--------------------|
| Lautaro Punta - 61302 - Líder del grupo - ROL|
| Facundo Di Berto - Legajo - ROL |
| Lautaro Di Berto - Legajo - ROL |

## Flujo GIT aplicado

## Líder (Lautaro Punta)
- Realiza el **fork** del repositorio del profesor.  
- Crea la rama `dev`.  
- Integra las ramas de los integrantes mediante *Pull Requests*.  
- Realiza el **merge final de `dev` → `main`**.  
- Envía el **Pull Request al profesor**.

## Integrantes
- Clonan el **fork del líder** (no el del profesor).  
- Crean su rama personal con formato:  
Nombre_Legajo

##  Roadmap de desarrollo
1 - Estructura base y flujo GIT - Creacion de la estructura base del trabajo practico junto con las ramas:`main` y `dev` necesarias para el flujo colaborativo correcto - Completado

## Guía para actualizar el fork del líder

Si el fork del líder ya existía:

```bash
git remote add upstream https://github.com/ChocobarMatias/TP_Comison_7_TUP.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main