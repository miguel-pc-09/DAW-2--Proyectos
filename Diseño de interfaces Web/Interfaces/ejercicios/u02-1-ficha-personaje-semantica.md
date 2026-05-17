# Ejercicio U2.1 — Ficha de personaje con HTML5 semántico

> 📚 Unidad 2 · HTML5: estructura, semántica y formularios
> ⏱️ Tiempo: 20-25 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: usar las etiquetas semánticas correctas y los atributos globales (`id`, `class`).

## Enunciado

Crear una ficha estilo "wiki" de un personaje de ficción (puede ser Frodo Bolsón, Hermione Granger, Goku... lo que prefieras). Solo HTML, **sin CSS** (vamos a centrarnos en la estructura semántica). Debe incluir:

- Cabecera con título de la ficha y un enlace de "volver al índice".
- Una sección de "Datos básicos" con lista de definición (`<dl>`).
- Una sección de "Biografía" con párrafos.
- Una tabla con "Apariciones" (libro/película, año, papel).
- Una imagen del personaje con `alt` correcto.
- Aside con "Sabías que..." (curiosidad).
- Footer con la fecha de la última edición usando `<time>`.

---

## ¿Qué vas a aprender?

- Etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- `<h1>` a `<h6>` y su jerarquía correcta.
- Listas de definición `<dl>` / `<dt>` / `<dd>` (diferentes de `<ul>` y `<ol>`).
- Tablas semánticas con `<thead>`, `<tbody>`, `<th scope="col">`, `<caption>`.
- `<figure>` + `<figcaption>` para imágenes con leyenda.
- `<time datetime="...">` para fechas legibles por máquinas.
- Atributos globales `id` y `class`: cuándo usar cada uno.

## Cómo va a quedar (en navegador, sin CSS)

```
Ficha: Hermione Granger
[Volver al índice]
────────────────────────────────

Datos básicos
  Nombre completo: Hermione Jean Granger
  Nacimiento: 19 de septiembre de 1979
  Casa: Gryffindor
  Varita: Madera de vid, núcleo de pelo de unicornio

Biografía
  Hermione es la mejor amiga de Harry Potter...

Apariciones                         (tabla)
┌─────────────────────────┬──────┬──────────────┐
│ Obra                    │ Año  │ Papel        │
├─────────────────────────┼──────┼──────────────┤
│ La piedra filosofal     │ 1997 │ Protagonista │
│ La cámara secreta       │ 1998 │ Protagonista │
└─────────────────────────┴──────┴──────────────┘

[imagen de Hermione]
"Hermione en su tercer año en Hogwarts"

¿Sabías que...?
  Emma Watson, que la interpretó en cine, fue elegida tras pasar
  más de 100 pruebas.

────────────────────────────────
Última edición: 12 de mayo de 2026
```

---

## Paso 1 — Estructura general

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ficha: Hermione Granger</title>
</head>
<body>
    <header>
        <h1>Ficha: Hermione Granger</h1>
        <nav>
            <a href="indice.html">← Volver al índice</a>
        </nav>
    </header>

    <main>
        <!-- aquí van las secciones -->
    </main>

    <footer>
        <p>Última edición: <time datetime="2026-05-12">12 de mayo de 2026</time></p>
    </footer>
</body>
</html>
```

### Por qué esta estructura

- `<header>` contiene el título y la navegación principal de **esta página** (no es el header del sitio entero, pero también vale).
- `<nav>` agrupa enlaces de navegación. Aunque sea un solo enlace, indica intención.
- `<main>` engloba todo el contenido principal. **Solo uno por página**. Los lectores de pantalla pueden saltar directo aquí.
- `<footer>` para la información de pie de la página.
- `<time datetime="2026-05-12">` permite a los buscadores/calendarios entender la fecha (la versión legible está dentro).

## Paso 2 — Datos básicos con lista de definición

Dentro del `<main>`:

```html
<section>
    <h2>Datos básicos</h2>
    <dl>
        <dt>Nombre completo</dt>
        <dd>Hermione Jean Granger</dd>

        <dt>Nacimiento</dt>
        <dd><time datetime="1979-09-19">19 de septiembre de 1979</time></dd>

        <dt>Casa</dt>
        <dd>Gryffindor</dd>

        <dt>Varita</dt>
        <dd>Madera de vid, núcleo de pelo de unicornio</dd>
    </dl>
</section>
```

### ¿Por qué `<dl>` y no `<ul>`?

`<dl>` (description list) es la etiqueta correcta para **pares clave-valor**:

| Etiqueta | Para qué |
|----------|----------|
| `<dl>` | Lista de definición (contenedor). |
| `<dt>` | *Definition term* — el "nombre". |
| `<dd>` | *Definition description* — el "valor". |

Cualquier cosa que sea "X: Y" pide `<dl>`. Si usas `<ul>` con `<li>Nombre: Hermione</li>`, **funciona** pero pierdes semántica.

## Paso 3 — Biografía con párrafos

```html
<section>
    <h2>Biografía</h2>
    <p>
        Hermione es la mejor amiga de Harry Potter y Ron Weasley. Hija de dentistas
        muggles, descubrió su naturaleza mágica a los 11 años cuando recibió la carta
        de admisión en Hogwarts.
    </p>
    <p>
        Durante su escolarización destacó por ser la <strong>alumna más brillante de
        su generación</strong>. Tras la guerra contra Voldemort, trabajó en el
        Ministerio de Magia luchando por los derechos de los elfos domésticos.
    </p>
</section>
```

### `<strong>` vs `<b>`

- `<strong>` = **importancia semántica** ("esto es importante"). Lo lee distinto un lector de pantalla.
- `<b>` = solo negrita visual, sin significado.

Para "alumna más brillante" usamos `<strong>` porque lo es semánticamente. Para subrayar el nombre de un libro usaríamos `<i>` o `<cite>`.

## Paso 4 — Tabla de apariciones

```html
<section>
    <h2>Apariciones</h2>
    <table>
        <caption>Apariciones en libros</caption>
        <thead>
            <tr>
                <th scope="col">Obra</th>
                <th scope="col">Año</th>
                <th scope="col">Papel</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>La piedra filosofal</td>
                <td>1997</td>
                <td>Protagonista</td>
            </tr>
            <tr>
                <td>La cámara secreta</td>
                <td>1998</td>
                <td>Protagonista</td>
            </tr>
            <tr>
                <td>El prisionero de Azkaban</td>
                <td>1999</td>
                <td>Protagonista</td>
            </tr>
        </tbody>
    </table>
</section>
```

### Por qué `<thead>`, `<tbody>`, `<th scope="col">`, `<caption>`

| Elemento | Para qué |
|----------|----------|
| `<caption>` | Título de la tabla. Va dentro de `<table>`, justo después. |
| `<thead>` | Agrupa la cabecera. |
| `<tbody>` | Agrupa el cuerpo. |
| `<th>` | Celda de cabecera (no `<td>`). |
| `scope="col"` | Indica que la cabecera describe una **columna**. Para filas: `scope="row"`. |

Esto NO es decorativo: los lectores de pantalla anuncian "Obra: La piedra filosofal" porque saben que "Obra" es la cabecera de columna.

## Paso 5 — Imagen con `<figure>` y `<figcaption>`

```html
<figure>
    <img src="hermione.jpg" alt="Retrato de Hermione Granger en su tercer año en Hogwarts, con uniforme escolar y un libro en la mano.">
    <figcaption>Hermione en su tercer año en Hogwarts.</figcaption>
</figure>
```

### `<figure>` vs `<img>` suelto

- `<figure>` envuelve la imagen (o vídeo, código, etc.) y permite añadir leyenda con `<figcaption>`.
- El `alt` es **obligatorio** (accesibilidad). Si la imagen es decorativa pones `alt=""` (cadena vacía, NO lo omitas).
- El texto de `alt` debe describir lo que se ve. NO escribas "imagen de Hermione" → todos los lectores de pantalla ya anuncian "imagen" antes del alt; sería redundante.

## Paso 6 — Aside con curiosidad

```html
<aside>
    <h3>¿Sabías que...?</h3>
    <p>
        Emma Watson, que la interpretó en cine, fue elegida tras pasar
        más de 100 pruebas.
    </p>
</aside>
```

### `<aside>` ≠ siempre sidebar

`<aside>` significa "contenido relacionado pero no esencial". Puede ser:

- Sidebar a la derecha (la asociación más común).
- Una caja de curiosidad dentro del contenido (como aquí).
- Una nota al margen.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Varios `<h1>` en una página | Antes se permitía 1 por sección; hoy se recomienda **1 solo `<h1>` por página** | Usa `<h1>` para el título principal y `<h2>` para secciones. |
| Saltar niveles (`<h1>` → `<h3>`) | Rompe la jerarquía para lectores de pantalla | Sigue el orden: h1 → h2 → h3. |
| `<br>` para separar párrafos | `<br>` es para **dentro** de un párrafo (direcciones, poesía) | Usa `<p>` separados. |
| `<table>` para layout | Anti-patrón histórico; rompe accesibilidad | Usa `<table>` solo para **datos tabulares**. |
| Omitir el `alt` | Falla WCAG; lector de pantalla dice "imagen jpg" | Pon `alt=""` si es decorativa, descriptivo si aporta. |
| Texto del enlace "click aquí" | Sin contexto fuera del párrafo | "Descargar el PDF del informe 2026". |
| Confundir `id` y `class` | Errores de selector | `id` único en la página, `class` reutilizable. |
| `<section>` sin `<h2>` | Una `<section>` siempre lleva encabezado | Si no hay encabezado, considera usar `<div>`. |
| Omitir `<caption>` en tablas | Dificulta la accesibilidad | Pon siempre `<caption>` (puedes ocultarlo visualmente con CSS si molesta). |

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ficha: Hermione Granger</title>
</head>
<body>
    <header>
        <h1>Ficha: Hermione Granger</h1>
        <nav>
            <a href="indice.html">← Volver al índice</a>
        </nav>
    </header>

    <main>
        <section id="datos-basicos">
            <h2>Datos básicos</h2>
            <dl>
                <dt>Nombre completo</dt>
                <dd>Hermione Jean Granger</dd>

                <dt>Nacimiento</dt>
                <dd><time datetime="1979-09-19">19 de septiembre de 1979</time></dd>

                <dt>Casa</dt>
                <dd>Gryffindor</dd>

                <dt>Varita</dt>
                <dd>Madera de vid, núcleo de pelo de unicornio</dd>
            </dl>
        </section>

        <section id="biografia">
            <h2>Biografía</h2>
            <p>
                Hermione es la mejor amiga de Harry Potter y Ron Weasley. Hija de
                dentistas muggles, descubrió su naturaleza mágica a los 11 años cuando
                recibió la carta de admisión en Hogwarts.
            </p>
            <p>
                Durante su escolarización destacó por ser la <strong>alumna más
                brillante de su generación</strong>.
            </p>
        </section>

        <section id="apariciones">
            <h2>Apariciones</h2>
            <table>
                <caption>Apariciones en libros</caption>
                <thead>
                    <tr>
                        <th scope="col">Obra</th>
                        <th scope="col">Año</th>
                        <th scope="col">Papel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>La piedra filosofal</td>
                        <td>1997</td>
                        <td>Protagonista</td>
                    </tr>
                    <tr>
                        <td>La cámara secreta</td>
                        <td>1998</td>
                        <td>Protagonista</td>
                    </tr>
                    <tr>
                        <td>El prisionero de Azkaban</td>
                        <td>1999</td>
                        <td>Protagonista</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <figure>
            <img src="hermione.jpg" alt="Retrato de Hermione Granger con uniforme de Hogwarts.">
            <figcaption>Hermione en su tercer año.</figcaption>
        </figure>

        <aside>
            <h3>¿Sabías que...?</h3>
            <p>Emma Watson fue elegida tras pasar más de 100 pruebas.</p>
        </aside>
    </main>

    <footer>
        <p>
            Última edición:
            <time datetime="2026-05-12">12 de mayo de 2026</time>
        </p>
    </footer>
</body>
</html>
```

## Cómo verificar la semántica

1. Abre `index.html` en el navegador.
2. **F12** → pestaña **Elements** → revisa la estructura.
3. Instala la extensión **WAVE** (WebAIM) → ejecuta → no debe haber errores rojos.
4. **Outliner**: hay extensiones que muestran el "esqueleto" de encabezados. Tu ficha debe verse así:
   ```
   H1: Ficha: Hermione Granger
     H2: Datos básicos
     H2: Biografía
     H2: Apariciones
     H3: ¿Sabías que...?
   ```
5. Lector de pantalla (NVDA gratuito en Windows): debe anunciar "navegación", "encabezado nivel 2 Datos básicos", "tabla con 3 columnas y 3 filas".

## Alternativas peores

### 1) Todo con `<div>` y `<span>`

```html
<!-- ❌ -->
<div class="header">
    <div class="title">Ficha: Hermione</div>
</div>
<div class="content">...</div>
```

Funciona visualmente pero pierdes toda la semántica. Para SEO y accesibilidad es un retroceso de 15 años (era el HTML pre-2012).

### 2) `<br><br>` para crear espacio

```html
<!-- ❌ -->
<p>Primer párrafo.<br><br>Segundo párrafo.</p>
```

`<br>` es para **saltos dentro** del mismo párrafo (direcciones postales, versos). Para separar párrafos usa `<p>` distintos.

### 3) `<table>` para datos no tabulares

```html
<!-- ❌ -->
<table>
  <tr>
    <td>Nombre:</td>
    <td>Hermione</td>
  </tr>
</table>
```

Esto pide `<dl>`, no `<table>`. Las tablas son **filas × columnas de datos comparables**.

### 4) `alt="imagen"` o `alt="foto.jpg"`

```html
<!-- ❌ inútil -->
<img src="hermione.jpg" alt="imagen">
<img src="hermione.jpg" alt="hermione.jpg">
```

El lector de pantalla ya dice "imagen". Tu `alt` debe describir el contenido: `alt="Hermione con uniforme de Hogwarts"`.

### 5) Confundir `id` y `class`

```html
<!-- ❌ id duplicado -->
<section id="seccion">...</section>
<section id="seccion">...</section>
```

```html
<!-- ✅ -->
<section id="biografia" class="seccion">...</section>
<section id="apariciones" class="seccion">...</section>
```

`id` debe ser **único** en toda la página. `class` se puede repetir.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Validador HTML da error "stray end tag" | Cerraste una etiqueta que no abriste o al revés | Revisa el anidamiento. |
| El navegador muestra "<" como texto | Es una entidad sin escapar | Usa `&lt;` y `&gt;`. |
| `<section>` no tiene encabezado | Te falta un `<h2>` | Añádelo o cambia a `<div>`. |
| Lector de pantalla anuncia "tabla" para layout | Usaste `<table>` para distribuir cosas | Cambia a `<div>` + CSS. |
| El `<time>` no se ve diferente | Es lo esperado: solo aporta semántica, no estilo | Si quieres, en CSS le das estilo: `time { font-style: italic; }`. |
| El validador del W3C marca "Heading level 1 should not be skipped" | Tienes `<h1>` y luego `<h3>` directo | Pon `<h2>` antes. |

## Lo que has aprendido

- Etiquetas semánticas HTML5: header, nav, main, section, article, aside, footer.
- Jerarquía de encabezados (h1 → h2 → h3) sin saltarse niveles.
- `<dl>`, `<dt>`, `<dd>` para listas de definición.
- Tablas con `<thead>`, `<tbody>`, `<th scope="col">`, `<caption>`.
- `<figure>` + `<figcaption>` para imágenes con leyenda.
- `<time datetime="...">` para fechas legibles por máquina.
- `<strong>` (importancia semántica) vs `<b>` (negrita visual).
- Diferencia entre `id` (único) y `class` (reutilizable).
- Atributo `alt` correcto (descriptivo, no redundante).
