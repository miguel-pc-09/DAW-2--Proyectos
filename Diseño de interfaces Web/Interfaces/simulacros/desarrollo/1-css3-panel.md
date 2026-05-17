# Ejercicio 1 · Panel de estadísticas con CSS3 puro

> 📕 Origen: pregunta 1 del simulacro de Diseño de Interfaces.
> ⭐ Valor: 3,5 puntos.
> ⏱️ Tiempo: 25-30 min.
> 🗂️ Material: `Material/Interfaces/ej1/` tiene `ejercicio1.html` y `solucion.css`.

## Enunciado original

Reproducir un diseño tipo dashboard usando **CSS3 puro** (sin Bootstrap, sin frameworks): 3 tarjetas (Usuarios 1.234 · Ventas 567 · Visitas 89K) en una fila, cada una con:

- Borde lateral de color (azul/verde/naranja).
- Sombra suave.
- Fondo blanco.
- Número grande en negrita.
- Descripción gris debajo.

---

## ¿Qué vas a aprender?

- Usar **CSS Grid** para layouts en rejilla.
- `place-items: center` para centrar.
- `box-shadow` para sombras.
- `border-left` con color para barras laterales.
- `transition` + `:hover` para animaciones.
- Diseño responsive con `@media`.

## Cómo va a quedar (boceto ASCII)

```
              ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
              │ ║ Usuarios   │  │ ║ Ventas     │  │ ║ Visitas    │
              │ ║            │  │ ║            │  │ ║            │
              │ ║  1,234     │  │ ║   567      │  │ ║   89K      │
              │ ║            │  │ ║            │  │ ║            │
              │ ║ Usuarios   │  │ ║ Ventas     │  │ ║ Visitas    │
              │ ║  activos   │  │ ║  hoy       │  │ ║ totales    │
              └──────────────┘  └──────────────┘  └──────────────┘
              (azul)              (verde)            (naranja)
```

En móvil, las tarjetas se apilan en una columna.

---

## Paso 1 — Estructura del proyecto

```
panel-stats/
├── index.html
└── estilo.css
```

## Paso 2 — HTML

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de estadísticas</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="stats-panel">
        <div class="stat-card card-1">
            <h3>Usuarios</h3>
            <p class="number">1,234</p>
            <p class="description">Usuarios activos</p>
        </div>
        <div class="stat-card card-2">
            <h3>Ventas</h3>
            <p class="number">567</p>
            <p class="description">Ventas hoy</p>
        </div>
        <div class="stat-card card-3">
            <h3>Visitas</h3>
            <p class="number">89K</p>
            <p class="description">Visitas totales</p>
        </div>
    </div>
</body>
</html>
```

### Por qué esta estructura

- `<div class="stats-panel">` es el **contenedor** que controlará el grid.
- Cada `<div class="stat-card">` es una tarjeta. Le añadimos `card-1`, `card-2`, `card-3` para darles colores distintos (borde).
- `<h3>` para el título pequeño (Usuarios).
- `<p class="number">` para el número grande (1,234).
- `<p class="description">` para el subtítulo gris (Usuarios activos).

### ¿Por qué no `<article>` o `<section>`?

Podrías usar `<article class="stat-card">` (más semántico). Para el examen, `<div>` también vale.

## Paso 3 — CSS (paso a paso)

### 3.1 Reset global

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Los navegadores aplican márgenes por defecto a algunos elementos (`h1`, `p`, etc.). Este reset elimina todos los márgenes/padding por defecto y hace que `width` incluya el padding y border.

### 3.2 Centrar el panel

```css
body {
    height: 100vh;
    display: grid;
    place-items: center;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}
```

| Propiedad | Qué hace |
|-----------|----------|
| `height: 100vh` | El body ocupa el 100% de la altura visible. Necesario para que el grid pueda centrar verticalmente. |
| `display: grid` | El body es un contenedor grid. |
| `place-items: center` | Centra el contenido horizontal y verticalmente. Equivale a `justify-items: center; align-items: center`. |
| `font-family: Arial, sans-serif` | Si Arial no está, usa cualquier sans-serif. |
| `background-color: #f8f9fa` | Gris muy claro de fondo. |

### 3.3 La rejilla de tarjetas

```css
.stats-panel {
    width: 100%;
    max-width: 900px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

| Propiedad | Qué hace |
|-----------|----------|
| `width: 100%` | Toma todo el ancho disponible... |
| `max-width: 900px` | ...pero nunca más de 900px. |
| `display: grid` | El panel es grid. |
| `grid-template-columns: repeat(3, 1fr)` | 3 columnas, cada una ocupa 1 fracción del espacio (iguales). |
| `gap: 20px` | Espacio entre las celdas (en este caso, entre las tarjetas). |

### 3.4 Las tarjetas (estilo base)

```css
.stat-card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
}
```

| Propiedad | Qué hace |
|-----------|----------|
| `border-radius: 8px` | Esquinas redondeadas. |
| `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` | Sombra: desplazamiento horizontal 0, vertical 2px, desenfoque 8px, color negro con 10% de opacidad. |
| `text-align: center` | Texto centrado. |
| `transition: transform 0.3s` | Anima cualquier cambio en `transform` durante 0.3s. Lo usaremos en el `:hover`. |

### 3.5 Animación al pasar el ratón

```css
.stat-card:hover {
    transform: translateY(-5px);
}
```

Cuando el cursor pasa por encima, la tarjeta se mueve 5px hacia ARRIBA (`-5px` en el eje Y). Gracias al `transition` anterior, lo hace suavemente.

### 3.6 Bordes laterales de colores

```css
.card-1 { border-left: 4px solid #007bff; }   /* azul */
.card-2 { border-left: 4px solid #28a745; }   /* verde */
.card-3 { border-left: 4px solid #fd7e14; }   /* naranja */
```

Solo el borde izquierdo, 4px de grosor, color sólido.

### 3.7 Tipografía

```css
.stat-card h3 {
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
}

.number {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.description {
    color: #999;
    font-size: 14px;
}
```

Tres tamaños y tres colores de gris.

### 3.8 Responsive

```css
@media (max-width: 700px) {
    .stats-panel {
        grid-template-columns: 1fr;
        max-width: 400px;
    }
}
```

En pantallas menores de 700px (móviles y tablets pequeñas), cambiamos a **una sola columna**. Las tarjetas se apilan verticalmente.

## Paso 4 — Código CSS completo

```css
/* estilo.css */

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body */
body {
    height: 100vh;
    display: grid;
    place-items: center;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}

/* Contenedor del panel */
.stats-panel {
    width: 100%;
    max-width: 900px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Tarjetas */
.stat-card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
}

.stat-card:hover {
    transform: translateY(-5px);
}

/* Bordes de colores */
.card-1 { border-left: 4px solid #007bff; }
.card-2 { border-left: 4px solid #28a745; }
.card-3 { border-left: 4px solid #fd7e14; }

/* Tipografía */
.stat-card h3 {
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
}

.number {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.description {
    color: #999;
    font-size: 14px;
}

/* Responsive */
@media (max-width: 700px) {
    .stats-panel {
        grid-template-columns: 1fr;
        max-width: 400px;
    }
}
```

## Paso 5 — Probar

1. Abre `index.html` con doble clic (basta — no llamamos a APIs).
2. Verás las 3 tarjetas centradas.
3. Pasa el ratón por encima → se elevan 5px.
4. **F12** → ícono de móvil → escoge "iPhone 12" → las tarjetas se apilan.

### Casos a probar

| Caso | Qué debe pasar |
|------|----------------|
| Cambiar el ancho del navegador hasta <700px | Las tarjetas pasan a una columna. |
| Pasar el ratón por encima | Animación suave hacia arriba. |
| Imprimir la página (Ctrl+P) | Sin animación, pero las tarjetas se ven igual. |

## Paso 6 — Entrega

```
Apellidos_Nombre_interfaces/
└── Pregunta1_CSS3/
    ├── index.html
    ├── estilo.css
    └── captura.png
```

Para la captura: una con vista desktop (3 columnas) y otra con vista móvil (1 columna) demuestra que has hecho el responsive.

## Alternativas peores

### 1) Usar Flexbox en vez de Grid para esto

```css
/* ❌ funciona pero menos elegante para rejillas */
.stats-panel {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.stat-card {
    flex: 1;
}
```

Flexbox sirve, pero Grid es **más natural para rejillas**. Lo dejas más limpio con `grid-template-columns: repeat(3, 1fr)`.

### 2) Anchos fijos en píxeles

```css
/* ❌ no es responsive */
.stat-card {
    width: 250px;
}
```

Con `1fr` en Grid las tarjetas crecen y se adaptan. Con `width: 250px` no.

### 3) Sombra demasiado fuerte

```css
/* ❌ feo */
box-shadow: 10px 10px 0 black;
```

La sombra elegante es **sutil**: poco desplazamiento, mucho desenfoque, color casi transparente.

### 4) Colores hardcodeados sin paleta

```css
/* ❌ inconsistente */
.card-1 { border-left: 4px solid blue; }
.card-2 { border-left: 4px solid green; }
.card-3 { border-left: 4px solid orange; }
```

Usa códigos hex específicos. `blue` (#0000FF) es un azul muy crudo; `#007bff` es el azul de Bootstrap, más agradable.

### 5) Olvidar el `viewport` meta tag

Sin `<meta name="viewport"...>`, el `@media` no funciona bien en móvil. La página se ve "zoomeada".

### 6) `transition: all`

```css
/* ❌ peor rendimiento, anima cosas que no quieres */
transition: all 0.3s;
```

Especifica QUÉ animar (`transition: transform 0.3s`).

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Las tarjetas no están centradas verticalmente | Falta `height: 100vh` en body | Añádelo. |
| Las tarjetas no se acomodan a 3 columnas | Falta `display: grid` en el contenedor | Comprueba. |
| Hueco entre tarjetas no aparece | Pones `margin` en lugar de `gap` | Usa `gap` en el grid. |
| Hover no hace nada | Falta `transition` en `.stat-card` | Añade `transition: transform 0.3s`. |
| Móvil sigue con 3 columnas | `@media` mal escrito o `viewport` falta | Comprueba. |
| Bordes asimétricos | Solo `border-left`, pero el padding desplaza el contenido | Está bien así. Si quieres simetría, añade `padding-left: 16px` y deja `border-left: 4px`. |

## Resumen visual

```
   body
   ├── height: 100vh
   ├── display: grid
   └── place-items: center
        │
        ▼
   .stats-panel
   ├── grid-template-columns: repeat(3, 1fr)
   ├── max-width: 900px
   └── gap: 20px
        │
        ▼
   .stat-card (×3)
   ├── background: white
   ├── border-radius: 8px
   ├── box-shadow
   ├── padding: 20px
   ├── text-align: center
   ├── transition: transform 0.3s
   ├── :hover → translateY(-5px)
   └── border-left (color según card-1, card-2, card-3)
        │
        ├── <h3>          gris medio, 16px
        ├── <p .number>   negro, 32px bold
        └── <p .description> gris claro, 14px

   @media (max-width: 700px)
        │
        └── grid-template-columns: 1fr  (una columna)
```

## Lo que has aprendido

- ✅ CSS Grid para layouts en rejilla.
- ✅ Reset global con `* { box-sizing: border-box; }`.
- ✅ Centrar con `display: grid; place-items: center`.
- ✅ `box-shadow` con `rgba` para sombras suaves.
- ✅ `border-left` para barra lateral.
- ✅ `transition` + `:hover` + `transform: translateY`.
- ✅ `@media` para diseño responsive.

Sigue con el [Ejercicio 2: Página de producto con Bootstrap](02-bootstrap-auriculares.md).
