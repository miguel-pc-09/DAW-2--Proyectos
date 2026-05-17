# Antes de los ejercicios — Diseño de Interfaces desde cero

> Lee esto antes del primer ejercicio. Es un resumen práctico de HTML5 + CSS3 + Flexbox + Grid + Bootstrap. Para más profundidad, ve a [teoria.md](../teoria/teoria.md).

## Las 3 tecnologías que vas a usar

| Tecnología | Para qué |
|-----------|----------|
| **HTML** | La **estructura** (qué hay en la página: texto, imágenes, formularios). |
| **CSS** | El **estilo** (cómo se ve: colores, tipografía, espaciado, layout). |
| **Bootstrap** | Una **librería de CSS** prefabricada que evita escribir CSS desde cero. |

Los exámenes piden:

- Pregunta 1: **CSS3 puro** (sin frameworks).
- Pregunta 2: **Bootstrap**.
- Pregunta 3: **Flexbox** (que también es CSS3, pero específico).

## Plantilla HTML5 estándar

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi página</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <!-- contenido -->
</body>
</html>
```

| Línea | Para qué |
|-------|----------|
| `<!DOCTYPE html>` | "Esto es HTML5". |
| `lang="es"` | Idioma de la página (importante para accesibilidad/SEO). |
| `<meta charset="UTF-8">` | Acentos y ñ se ven bien. |
| `<meta name="viewport"...>` | Página adaptable a móvil. SIN ESTO se ve gigante en el móvil. |
| `<link rel="stylesheet" href="estilo.css">` | Enlaza el CSS externo. |

## Etiquetas HTML que vas a usar

### Estructura semántica

| Etiqueta | Para qué |
|----------|----------|
| `<header>` | Cabecera (de página o sección). |
| `<nav>` | Navegación principal. |
| `<main>` | Contenido principal (1 solo por página). |
| `<section>` | Agrupación temática. |
| `<article>` | Contenido independiente (post, tarjeta). |
| `<aside>` | Contenido lateral (sidebar). |
| `<footer>` | Pie. |
| `<div>` | Contenedor genérico (usar cuando no haya semántica clara). |
| `<span>` | Contenedor inline genérico. |

### Texto

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>...</h3>
<p>Párrafo de texto.</p>
<strong>Negrita semántica</strong> y <b>negrita visual</b>.
<em>Énfasis</em> y <i>cursiva</i>.
<br>      <!-- salto de línea -->
<hr>      <!-- línea horizontal -->
```

### Listas

```html
<!-- Lista no ordenada -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Lista ordenada -->
<ol>
    <li>Primero</li>
    <li>Segundo</li>
</ol>
```

### Enlaces e imágenes

```html
<a href="https://example.com">Enlace externo</a>
<a href="otra-pagina.html">Enlace interno</a>
<a href="#seccion">Ancla a sección de la misma página</a>

<img src="foto.jpg" alt="Descripción">      <!-- alt obligatorio para accesibilidad -->
<img src="foto.jpg" alt="..." width="300">  <!-- ancho fijo -->
```

### Multimedia

```html
<!-- Vídeo local -->
<video controls width="600">
    <source src="video.mp4" type="video/mp4">
</video>

<!-- YouTube (¡con iframe, no con video!) -->
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameborder="0"
        allowfullscreen></iframe>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

### Formularios

```html
<form action="procesar.php" method="POST">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="edad">Edad</label>
    <input type="number" id="edad" name="edad" min="0" max="120">

    <label for="msg">Mensaje</label>
    <textarea id="msg" name="msg" rows="4"></textarea>

    <label for="pais">País</label>
    <select id="pais" name="pais">
        <option value="es">España</option>
        <option value="fr">Francia</option>
    </select>

    <label><input type="checkbox" name="acepto"> Acepto los términos</label>

    <label><input type="radio" name="genero" value="m"> Hombre</label>
    <label><input type="radio" name="genero" value="f"> Mujer</label>

    <button type="submit">Enviar</button>
</form>
```

### Tipos de input modernos

- `text` (texto general)
- `email` (valida formato email; teclado @ en móvil)
- `tel` (teléfono)
- `number` (solo números)
- `password` (oculta texto)
- `date`, `time`, `datetime-local` (selectores nativos)
- `color` (selector de color)
- `range` (slider)
- `search` (con "x" para limpiar)
- `file` (subir archivo)

## CSS — sintaxis básica

### Cómo incluirlo

```html
<!-- 1. Externo (recomendado) -->
<link rel="stylesheet" href="estilo.css">

<!-- 2. Interno -->
<style>
    body { background: #f5f5f5; }
</style>

<!-- 3. Inline (evítalo) -->
<p style="color: red;">Texto</p>
```

### Sintaxis

```css
selector {
    propiedad: valor;
    propiedad: valor;
}
```

### Selectores

```css
*               { ... }   /* todos los elementos */
p               { ... }   /* todas las etiquetas <p> */
.clase          { ... }   /* class="clase" */
#id             { ... }   /* id="id" */
p.destacado     { ... }   /* <p> CON clase destacado */
.a .b           { ... }   /* .b dentro de .a */
.a > .b         { ... }   /* .b hijo DIRECTO de .a */
.a + .b         { ... }   /* .b inmediatamente después de .a */
.a ~ .b         { ... }   /* .b hermano posterior de .a */
a[target="_blank"] { ... } /* <a> con atributo target="_blank" */

/* Pseudoclases */
a:hover         { ... }   /* cuando el ratón pasa por encima */
a:focus         { ... }   /* cuando recibe foco */
li:first-child  { ... }   /* primer hijo */
li:last-child   { ... }   /* último */
li:nth-child(2) { ... }   /* segundo */
li:nth-child(odd) { ... } /* impares */

/* Pseudoelementos */
p::before       { content: "→ "; }  /* añade antes del contenido */
p::after        { ... }
```

### Modelo de caja

```css
.caja {
    width: 300px;
    height: 100px;
    padding: 10px;       /* espacio interior */
    border: 2px solid #333;
    margin: 20px;        /* espacio exterior */
    box-sizing: border-box;  /* el width incluye padding y border (RECOMENDADO) */
}

/* Reset global imprescindible */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Unidades

| Unidad | Qué es |
|--------|--------|
| `px` | Píxeles absolutos. |
| `%` | Porcentaje del padre. |
| `em` | Relativo al `font-size` del **padre**. |
| `rem` | Relativo al `font-size` del **`<html>`** (raíz). |
| `vw` / `vh` | 1% del ancho/alto de la **ventana**. |
| `fr` | Fracciones (solo en Grid). |

### Colores

```css
color: red;                       /* nombre */
color: #ff0000;                   /* hex */
color: #f00;                      /* hex corto */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);      /* con alpha (transparencia) */
color: hsl(0, 100%, 50%);
```

### Tipografía

```css
font-family: "Segoe UI", Tahoma, sans-serif;  /* lista de fuentes con fallback */
font-size: 16px;
font-weight: bold;       /* o 700 */
font-weight: normal;     /* o 400 */
font-weight: 300;        /* light */
font-style: italic;
text-align: center;      /* left, right, justify */
text-decoration: underline;
line-height: 1.5;        /* espacio entre líneas */
letter-spacing: 2px;     /* espacio entre letras */
```

### Display

```css
display: block;            /* div, p — ocupa toda la línea */
display: inline;           /* span, a — sin saltos */
display: inline-block;     /* combinación */
display: none;             /* desaparece (NO ocupa espacio) */
display: flex;             /* contenedor flex */
display: grid;             /* contenedor grid */
```

### `display: none` vs `visibility: hidden` vs `opacity: 0`

| Propiedad | Visible | Ocupa espacio | Clicable |
|-----------|---------|---------------|----------|
| `display: none` | NO | NO | NO |
| `visibility: hidden` | NO | **SÍ** | NO |
| `opacity: 0` | NO | SÍ | **SÍ** (raro) |

Pregunta típica del examen: "ocultar manteniendo el espacio" → `visibility: hidden`.

## Flexbox (el más usado para alinear)

```css
.contenedor {
    display: flex;

    /* Dirección del eje principal */
    flex-direction: row;      /* row (default) | column | row-reverse | column-reverse */

    /* Alineación en el EJE PRINCIPAL */
    justify-content: center;  /* flex-start | center | flex-end | space-between | space-around | space-evenly */

    /* Alineación en el EJE CRUZADO */
    align-items: center;      /* flex-start | center | flex-end | stretch | baseline */

    /* Saltar a la línea siguiente si no caben */
    flex-wrap: wrap;          /* nowrap (default) | wrap */

    /* Hueco entre hijos */
    gap: 20px;
}

.hijo {
    flex: 1;                  /* crece para ocupar disponible */
    flex-grow: 2;             /* crece el doble que los demás */
    flex-basis: 200px;        /* tamaño inicial */
}
```

### Centrar perfectamente (truco universal)

```css
.padre {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

### `flex-direction: row` vs `column`

- `row` (por defecto): hijos uno al lado del otro (horizontal). El eje principal es horizontal.
- `column`: hijos uno encima del otro (vertical). El eje principal es vertical.

Cuando cambias `flex-direction`, las propiedades `justify-content` y `align-items` "intercambian" su efecto: la primera ahora es vertical y la segunda horizontal.

## CSS Grid (cuadrículas 2D)

```css
.contenedor {
    display: grid;

    /* Definir columnas */
    grid-template-columns: 1fr 2fr 1fr;            /* 3 cols, la del medio doble */
    grid-template-columns: repeat(3, 1fr);         /* 3 iguales */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  /* responsive */

    /* Filas */
    grid-template-rows: auto 1fr auto;

    gap: 20px;
}

/* Colocar un hijo en una celda concreta */
.hijo {
    grid-column: 1 / 3;            /* desde col 1 hasta col 3 */
    grid-row: 2 / 4;
}

/* Centrar con Grid (alternativa a Flex) */
.contenedor {
    display: grid;
    place-items: center;            /* atajo: justify + align */
    min-height: 100vh;
}
```

## Media queries (responsive)

```css
/* Base: móvil */
.menu {
    flex-direction: column;
}

/* Tablet en adelante (≥768px) */
@media (min-width: 768px) {
    .menu {
        flex-direction: row;
    }
}

/* Solo móvil (<768px) */
@media (max-width: 767px) {
    .sidebar {
        display: none;
    }
}
```

### Breakpoints (los de Bootstrap)

| Nombre | Ancho |
|--------|-------|
| (móvil) | 0+ |
| `sm` | 576px |
| `md` | 768px |
| `lg` | 992px |
| `xl` | 1200px |
| `xxl` | 1400px |

## Bootstrap por CDN (sin instalación)

En el `<head>`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

Antes de `</body>` (para componentes JS):

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

### Clases Bootstrap esenciales

#### Sistema de rejilla (12 columnas)

```html
<div class="container">                  <!-- caja centrada con max-width -->
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- 12 cols en móvil, 6 en tablet, 4 en desktop -->
        </div>
        <div class="col-12 col-md-6 col-lg-4">...</div>
        <div class="col-12 col-md-6 col-lg-4">...</div>
    </div>
</div>
```

#### Espaciado

`{prop}{lado}-{tamaño}`:

- prop: `m` (margin), `p` (padding)
- lado: `t`(op), `b`(ottom), `s`(start/left), `e`(nd/right), `x` (left+right), `y` (top+bottom), nada (todos)
- tamaño: 0-5

Ejemplos: `mt-4`, `mb-2`, `px-3`, `py-5`, `m-auto`.

#### Texto

- Alineación: `text-start`, `text-center`, `text-end`.
- Color: `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-muted`.
- Peso: `fw-bold`, `fw-semibold`, `fw-normal`.
- Tamaño: `fs-1` a `fs-6`, `display-1` a `display-6` (más grandes), `lead`.

#### Botones

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-success btn-sm">Small</button>
<button class="btn btn-danger btn-lg">Large</button>

<!-- Grupo de botones -->
<div class="btn-group">
    <button class="btn btn-secondary">A</button>
    <button class="btn btn-secondary">B</button>
</div>
```

#### Cards

```html
<div class="card shadow-sm">
    <img src="foto.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Descripción</p>
        <a href="#" class="btn btn-primary">Ver más</a>
    </div>
</div>
```

#### Flex utilities

```html
<div class="d-flex justify-content-center align-items-center gap-3">
    <button class="btn btn-primary">A</button>
    <button class="btn btn-primary">B</button>
</div>
```

#### Sombras y ancho

- Sombras: `shadow-sm`, `shadow`, `shadow-lg`.
- Ancho: `w-25`, `w-50`, `w-75`, `w-100`, `w-auto`.
- Border radius: `rounded`, `rounded-circle`, `rounded-pill`, `rounded-3`.

## Errores comunes

| Error | Solución |
|-------|----------|
| Texto se sale de la caja | `word-wrap: break-word;` o `overflow-wrap: anywhere;` |
| `width: 100%` y se sale al añadir padding | `box-sizing: border-box;` |
| Los `<div>` flex no se centran verticalmente | Falta `align-items: center;` o `min-height` en el padre |
| Imágenes que se desbordan en móvil | `img { max-width: 100%; height: auto; }` |
| El form no envía datos | Falta `name=""` en los inputs |
| Vídeo de YouTube no se ve | Usa `<iframe>` con `src="https://www.youtube.com/embed/ID"`, NO `<video>` |
| Bootstrap no aplica estilos | Falta el `<link>` al CDN |

Cuando lo tengas claro, ve al [Ejercicio 1 del simulacro: Panel de estadísticas con CSS3](../simulacros/desarrollo/1-css3-panel.md).
