## Tabla de Pagos (componente específico)

- `src/components/PaymentTable.jsx`

  - Pre-carga datos en `localStorage` la primera vez que se entra (si no existe la clave `payments`, los setea). Si ya existen, usa los que están (tal cual).

  - Funciones principales:
    - `updatePayments(updated)`: actualiza estado y sincroniza `localStorage` (así la tabla refleja todo al toque).
    - `handleRegisterPayment(id)`: marca un pago individual como "Pagado" (usa `map` y spread para mantener inmutabilidad).
    - `handleRegisterSelected(selectedData)`: mismo concepto pero en lote (viene desde la barra de acciones del DataTable).
    - `handleSendReminder(selectedData)`: por ahora muestra un `alert` (queda listo para enchufar un envío real si hace falta).
  - Columnas (acá se ve cuándo uso `render` y cuándo no):
    - `miembro` → con `render` para darle un estilo al nombre.
    - `membresia` → sin `render` (se muestra tal cual viene, no hace falta decorarlo).
    - `cuota` → con `render` para formatear a `$xx.xx` (si en algún momento queremos, podemos mostrar "Error" en vez de `0` cuando falte el dato, lo dejé comentado).
    - `estado` → con `render` porque muestro un `Badge` verde/rojo/amarillo.
    - `fechaVencimiento` → sin `render` (texto plano).
    - `accion` → con `render` para pintar el botón "Registrar Pago" cuando corresponde.
  - Filtros y acciones:
    - `filters`: por ahora sólo por `estado` (Pagado / Vencido / Pendiente).
    - `actions`: dos botones en la barra flotante cuando hay seleccionados: "Registrar Pago" y "Enviar Recordatorio" (acá uso `variant` de React-Bootstrap para el estilo del botón y una clase extra para terminar de dejarlo como queremos).

- `src/components/PaymentTable.css`
  - Estilos específicos de la tabla de pagos: clases para el nombre, el link de "Registrar Pago", los `Badge` de estado y algunos ajustes de botones.
  - Importante: los estilos "genéricos" de tablas están en el CSS del DataTable (ver más abajo); acá dejamos sólo lo propio de Pagos para no mezclar.

---

## Tabla genérica reutilizable (para todo el sistema)

- `src/components/ui/DataTable.jsx`

  - Este es el componente genérico para que todas las tablas del sistema se vean/funcionen igual (búsqueda, filtros, selección múltiple, acciones masivas, etc.).
  - Props principales (las que más vas a tocar):
    - `data`: array de registros (cada uno con `id`).
    - `columns`: definición de columnas `[ { key, label, render? } ]`.
    - `selectable`: si permite seleccionar filas.
    - `actions`: array de acciones para los seleccionados `[ { label, variant, icon, className, onClick } ]`.
    - `searchable` + `searchPlaceholder`: para mostrar el input de búsqueda.
    - `filters`: dropdowns de filtros (por ejemplo estado, rol, etc.).
  - Cómo funciona la búsqueda:
    - Si NO pasás `onSearch`, hace una búsqueda simple por defecto: arma un string con `Object.values(item).join(' ')` y hace `includes` en minúsculas (sirve para búsquedas generales para todos los campos).
    - Si SÍ pasás `onSearch`, te delega la lógica (o sea, el DataTable no filtra internamente y vos podés filtrar `data` a tu gusto antes de pasársela).
  - Selección de filas:
    - Checkbox por fila: hace toggle con `handleSelectItem(id)` (si estaba, lo saca; si no, lo agrega). Mantiene inmutabilidad.
    - Checkbox del header: `handleSelectAll` toma sólo lo visible (`filteredData`) para seleccionar/deseleccionar en bloque.
    - Cuando hay seleccionados, aparece la barra de acciones de abajo con los botones definidos en `actions`.
  - Acciones masivas:
    - Al apretar un botón, `handleAction` te arma `selectedData` (filtrando `data` por los `selectedItems`) y llama al `onClick` que definiste en `actions`.
