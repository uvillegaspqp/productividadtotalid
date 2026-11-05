# PQP | Centro de Gestión I+D / Q/A
Aplicación SPA React para la gestión del área de I+D / Q/A – Planta Barranquilla.

## Requisitos
- Node.js 18 o superior
- npm

## Instalación y ejecución
```bash
npm install
npm run dev
```
Abrir la URL local que muestra Vite (normalmente http://localhost:5173).

## Compilar
```bash
npm run build
npm run preview
```

## Almacenamiento y respaldos
El mecanismo principal de persistencia es la **exportación e importación de respaldos JSON**.
La aplicación mantiene además una copia de trabajo en el almacenamiento local del navegador para evitar perder cambios al navegar o recargar en el mismo equipo/navegador. Esto no constituye una base de datos compartida, respaldo corporativo ni sincronización entre usuarios/dispositivos. Descargue periódicamente el JSON y guárdelo en una ubicación institucional autorizada.

- `Configuración > Respaldo`: exportar/importar JSON.
- CSV: exporta el módulo que se está consultando.
- PPTX: genera una presentación ejecutiva con indicadores consolidados y resumen de gestión desde el Dashboard.

## Datos de demostración
El botón **Cargar demo** incorpora registros ficticios identificados con `DEMO`. No corresponden a información real de PQP. El dashboard muestra una advertencia cuando existen registros de demostración.

## Integridad y limitaciones
- Los KPI se calculan a partir de los registros existentes.
- Los registros cancelados no cuentan como actividades ejecutadas.
- Los compromisos y vencimientos se evalúan contra la fecha de compromiso, no contra la fecha de cierre.
- La evaluación de conformidad de muestras requiere límites de especificación y resultados numéricos para cada parámetro.
- Los perfiles son conceptuales y solo controlan la interfaz; no constituyen controles de seguridad.
- El historial de cambios se conserva en cada registro mientras se mantenga el conjunto de datos local/JSON.
- No hay autenticación, sincronización multiusuario, servidor, base de datos ni almacenamiento compartido.

## Módulos
Dashboard, Producto No Conforme, Análisis de Muestras, Gestión Semanal, Proyectos, Bitácora Técnica, Gestión del Conocimiento, Implementación de Instructivos y Configuración.
