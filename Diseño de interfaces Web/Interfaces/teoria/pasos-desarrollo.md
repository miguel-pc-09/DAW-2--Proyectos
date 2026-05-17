# Guía paso a paso · Diseño de Interfaces Web

> HTML5 + CSS3 + Flexbox + Grid + Bootstrap. Cómo montar, escribir, probar y entregar.

---

## 0 · Setup

### 0.1 VS Code + Live Server

1. Instala VSCode.
2. Extensión **Live Server** (Ritwick Dey).
3. Crea tu carpeta de proyecto.
4. Click derecho en `index.html` → **Open with Live Server**.

### 0.2 Bootstrap por CDN (no hace falta instalar nada)

Pega esto en el `<head>`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

Y justo antes del `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 1 · Plantilla HTML5 estándar

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
    <header>
        <nav>...</nav>
    </header>

    <main>
        <section>
            <h1>Título</h1>
            <p>Contenido</p>
        </section>
    </main>

    <footer>...</footer>
</body>
</html>
```

### Etiquetas semánticas (no `<div>` para todo)

- `<header>` cabecera (de página o sección).
- `<nav>` navegación.
- `<main>` contenido principal (1 sólo por página).
- `<section>` agrupación temática.
- `<article>` contenido independiente (post, tarjeta…).
- `<aside>` contenido lateral.
- `<footer>` pie de página o sección.
- `<figure>` + `<figcaption>` imágenes con leyenda.

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

    <label><input type="checkbox" name="acepto"> Acepto términos</label>

    <label><input type="radio" name="genero" value="m"> Hombre</label>
    <label><input type="radio" name="genero" value="f"> Mujer</label>

    <button type="submit">Enviar</button>
</form>
```

**Tipos de input modernos**: `email`, `url`, `tel`, `number`, `date`, `time`, `color`, `range`, `search`, `password`, `file`.

### Multimedia

```html
<!-- Imagen -->
<img src="foto.jpg" alt="Descripción" width="300">

<!-- Vídeo local -->
<video controls width="600">
    <source src="video.mp4" type="video/mp4">
</video>

<!-- YouTube (pregunta 3 del test): <iframe> NO <video> -->
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameborder="0" allowfullscreen></iframe>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

---

## 2 · CSS — fundamentos

### 2.1 Cómo incluir CSS

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

### 2.2 Selectores

```css
* { ... }                      /* todos */
p { ... }                      /* etiqueta */
.clase { ... }                 /* clase */
#id { ... }                    /* id */
p.destacado { ... }            /* p con clase destacado */
div > p { ... }                /* hijo directo */
div p { ... }                  /* descendiente */
p + p { ... }                  /* hermano inmediato */
p ~ span { ... }               /* hermanos posteriores */
a[target="_blank"] { ... }     /* atributo */
button:hover { ... }           /* pseudoclase */
li:first-child { ... }
li:nth-child(2n) { ... }       /* pares */
p::before { content: "→"; }    /* pseudoelemento */
```

### 2.3 Modelo de caja

```css
.caja {
    width: 300px;
    height: 100px;
    padding: 10px;             /* espacio interior */
    border: 2px solid #333;    /* borde */
    margin: 20px;              /* espacio exterior */
    box-sizing: border-box;    /* width incluye padding y border (RECOMENDADO) */
}

/* Reset global imprescindible */
* { margin: 0; padding: 0; box-sizing: border-box; }
```

### 2.4 Unidades

| Unidad | Qué es |
|--------|--------|
| `px` | Píxeles absolutos. |
| `%` | Porcentaje del padre. |
| `em` | Relativo al `font-size` del **padre**. |
| `rem` | Relativo al `font-size` del **`<html>`** (raíz). |
| `vw` / `vh` | 1% del ancho/alto de la **ventana**. |
| `vmin` / `vmax` | El menor/mayor entre vw y vh. |
| `fr` | Fracciones (en Grid). |

### 2.5 Display

```css
/* Display posibles */
display: block;        /* div, p — ocupa toda la línea */
display: inline;       /* span, a — sin saltos */
display: inline-block; /* combinación */
display: none;         /* desaparece (NO ocupa espacio) */
display: flex;         /* contenedor flex */
display: grid;         /* contenedor grid */

/* Diferencia clave (pregunta 15 del test) */
display: none;         /* NO se ve y NO ocupa espacio */
visibility: hidden;    /* NO se ve PERO ocupa espacio */
opacity: 0;            /* invisible PERO ocupa espacio y clicable */
```

---

## 3 · Flexbox (eje principal + eje cruzado)

```css
.contenedor {
    display: flex;

    /* Eje principal: dirección de los hijos */
    flex-direction: row;        /* row | column | row-reverse | column-reverse */

    /* Alineación en el eje PRINCIPAL */
    justify-content: center;    /* flex-start | center | flex-end | space-between | space-around | space-evenly */

    /* Alineación en el eje CRUZADO */
    align-items: center;        /* flex-start | center | flex-end | stretch | baseline */

    /* Si los hijos no caben */
    flex-wrap: wrap;            /* nowrap (default) | wrap */

    /* Hueco entre hijos */
    gap: 20px;
}

/* Por defecto el eje principal es horizontal:
   ┌──────┬─────┬─────┐   <- justify-content controla esta línea (horizontal)
   │      │     │     │   <- align-items controla alturas (vertical)
   └──────┴─────┴─────┘
*/

.hijo {
    flex: 1;            /* crece para ocupar disponible: shorthand de flex-grow:1 flex-shrink:1 flex-basis:0 */
    flex-grow: 2;       /* crece el doble que los demás */
    flex-basis: 200px;  /* tamaño inicial */
}
```

**Centrar perfectamente:**

```css
.contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

---

## 4 · CSS Grid (cuadrículas 2D)

```css
.contenedor {
    display: grid;

    /* Definir columnas */
    grid-template-columns: 1fr 2fr 1fr;            /* 3 columnas, la del medio el doble */
    grid-template-columns: repeat(3, 1fr);         /* 3 columnas iguales */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));  /* responsive auto */

    /* Filas */
    grid-template-rows: auto 1fr auto;

    gap: 20px;                                      /* hueco entre celdas */
    column-gap: 20px;
    row-gap: 10px;
}

/* Colocar un hijo en una celda concreta */
.hijo {
    grid-column: 1 / 3;              /* desde col 1 hasta col 3 (no inclusivo) */
    grid-row: 2 / 4;                 /* desde fila 2 hasta fila 4 */
}

/* Centrar con Grid */
.contenedor {
    display: grid;
    place-items: center;              /* atajo para justify-items + align-items */
    min-height: 100vh;
}
```

---

## 5 · Diseño responsive (media queries)

```css
/* Mobile-first: estilos por defecto para móvil */
.menu { flex-direction: column; }

/* Tablet (≥768px) */
@media (min-width: 768px) {
    .menu { flex-direction: row; }
}

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
    .container { max-width: 1200px; }
}

/* Estilos solo móvil */
@media (max-width: 767px) {
    .sidebar { display: none; }
}

/* Modo oscuro */
@media (prefers-color-scheme: dark) {
    body { background: #111; color: #eee; }
}
```

**Breakpoints típicos** (Bootstrap):

| Prefijo | Ancho mínimo |
|---------|--------------|
| (ninguno) | 0 (móvil) |
| `sm` | 576px |
| `md` | 768px (tablet) |
| `lg` | 992px (laptop) |
| `xl` | 1200px (desktop) |
| `xxl` | 1400px |

---

## 6 · Bootstrap esencial

### 6.1 Sistema de rejilla (12 columnas)

```html
<div class="container">          <!-- caja centrada con max-width -->
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- 12 cols en móvil, 6 en tablet (la mitad), 4 en desktop (un tercio) -->
        </div>
        <div class="col-12 col-md-6 col-lg-4">...</div>
        <div class="col-12 col-md-6 col-lg-4">...</div>
    </div>
</div>
```

### 6.2 Utilidades de espaciado

`{prop}{lado}-{tamaño}` donde:

- prop: `m` (margin), `p` (padding)
- lado: `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (left+right), `y` (top+bottom), nada (todos)
- tamaño: 0, 1, 2, 3, 4, 5 (de 0 a 3rem aprox), `auto`

Ejemplos: `mt-4`, `mb-2`, `px-3`, `py-5`, `m-auto`.

### 6.3 Utilidades de texto

- Alineación: `text-start`, `text-center`, `text-end`.
- Color: `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-body`, `text-muted`.
- Peso: `fw-bold`, `fw-semibold`, `fw-normal`, `fw-light`.
- Tamaño: `fs-1` a `fs-6`, `display-1` a `display-6`, `lead`.

### 6.4 Botones

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-success btn-sm">Small</button>
<button class="btn btn-danger btn-lg">Large</button>

<!-- Grupo de botones (pregunta 6 del test) -->
<div class="btn-group">
    <button class="btn btn-secondary">A</button>
    <button class="btn btn-secondary">B</button>
    <button class="btn btn-secondary">C</button>
</div>
```

### 6.5 Cards

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

### 6.6 Flex utilities

```html
<div class="d-flex justify-content-center align-items-center gap-3">
    <button class="btn btn-primary">A</button>
    <button class="btn btn-primary">B</button>
</div>
```

### 6.7 Sombras y ancho

- Sombras: `shadow-sm`, `shadow`, `shadow-lg` (pregunta 2).
- Ancho: `w-25`, `w-50`, `w-75`, `w-100`, `w-auto` (pregunta 13).
- Border radius: `rounded`, `rounded-circle`, `rounded-pill`, `rounded-0` a `rounded-5`.

---

## 7 · Imágenes y SVG

```html
<!-- Imagen responsive con Bootstrap -->
<img src="foto.jpg" class="img-fluid" alt="...">

<!-- SVG inline (puedes manipularlo con CSS/JS) -->
<svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="dodgerblue"/>
    <text x="50" y="55" text-anchor="middle" fill="white">Hola</text>
</svg>

<!-- Formato WEBP (pregunta 11) — mejor compresión que JPG/PNG, con transparencia -->
<picture>
    <source srcset="foto.webp" type="image/webp">
    <img src="foto.jpg" alt="Fallback">
</picture>
```

---

## 8 · Accesibilidad (heurísticas de Nielsen — pregunta 12)

Las 10 heurísticas básicas:

1. **Visibilidad del estado del sistema** — feedback claro.
2. **Coincidencia con el mundo real** — lenguaje natural.
3. **Control y libertad** — deshacer, salir.
4. **Consistencia y estándares** — iguales acciones, mismo resultado.
5. **Prevención de errores** — confirmar antes de borrar.
6. **Reconocer mejor que recordar** — opciones visibles.
7. **Flexibilidad y eficiencia** — atajos para expertos.
8. **Diseño estético y minimalista** — solo lo necesario.
9. **Ayuda a recuperarse de errores** — mensajes claros con solución.
10. **Ayuda y documentación** — accesible y específica.

**Buenas prácticas de accesibilidad (WCAG):**

- Atributo `alt` en todas las imágenes.
- Etiquetas `<label for="...">` en todos los inputs.
- Contraste de color suficiente (4.5:1 mínimo).
- Navegable por teclado (Tab).
- `lang="es"` en `<html>`.
- ARIA cuando haga falta: `aria-label`, `role`, `aria-live`.

---

## 9 · Errores típicos en la corrección

| Error | Solución |
|-------|----------|
| Texto que se sale de la caja | `word-wrap: break-word;` o `overflow-wrap: anywhere;`. |
| `width: 100%` y se sale al añadir padding | `box-sizing: border-box;`. |
| Los `<div>` flex no se centran verticalmente | Falta `align-items: center;` o `min-height` en el padre. |
| Imágenes que se desbordan en móvil | `img { max-width: 100%; height: auto; }`. |
| `<a>` sin `target` que abre en la pestaña | `target="_blank" rel="noopener"`. |
| El form no envía datos | Falta `name=""` en los inputs (es lo que se envía al servidor). |
| Vídeo de YouTube no se ve | Usa `<iframe>` con `src="https://www.youtube.com/embed/ID"` (NO la URL normal). |
| Bootstrap no aplica estilos | Falta el `<link>` al CSS o el orden del CDN está mal. |

---

## 10 · Cómo entregar

1. Carpeta raíz: `Apellidos_Nombre_interfaces`.
2. Subcarpeta por ejercicio: `Pregunta1_CSS3/`, `Pregunta2_Bootstrap/`, etc.
3. Dentro: `index.html`, `estilo.css` (o `solucion.css`), todas las imágenes que use, capturas.
4. **NO uses inline styles**: todo en CSS externo.
5. Comprime en `.zip` o `.rar`.

### Capturas exigidas

- Captura del navegador con el diseño aplicado.
- Si el examen pide responsive: dos capturas, una en escritorio y otra simulando móvil (F12 → ícono móvil).

---

## 11 · Checklist examen

- [ ] `<!DOCTYPE html>` y `<html lang="es">`.
- [ ] `<meta charset="UTF-8">` y `<meta name="viewport">`.
- [ ] CSS externo, no `style="..."` inline.
- [ ] Reset `* { margin:0; padding:0; box-sizing:border-box; }`.
- [ ] `<label for="">` en todos los inputs.
- [ ] `alt=""` en todas las imágenes.
- [ ] Media query para móvil (`max-width: 768px` o `min-width: 768px`).
- [ ] La página se ve correctamente en escritorio Y móvil (F12).
- [ ] Has elegido **2 de las 3** preguntas.
- [ ] Carpeta + zip con tu nombre.
