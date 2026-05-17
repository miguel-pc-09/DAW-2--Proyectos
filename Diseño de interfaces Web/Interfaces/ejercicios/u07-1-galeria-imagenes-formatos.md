# Ejercicio U7.1 — Galería con formatos de imagen y optimización

> 📚 Unidad 7 · Multimedia: imágenes y SVG
> ⏱️ Tiempo: 25-35 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: usar el `<img>` correctamente, elegir el formato adecuado y aplicar atributos modernos.

## Enunciado

Galería con 6 imágenes que demuestre:

1. Una foto JPG con `alt` descriptivo.
2. Un PNG con transparencia (logo, icono).
3. Un SVG (escalable sin perder calidad).
4. Una imagen decorativa (`alt=""`).
5. Un GIF animado.
6. Una imagen con dimensiones especificadas (evita layout shift).

Todas con leyenda, lazy loading y dimensiones definidas.

---

## ¿Qué vas a aprender?

- Formatos de imagen y cuándo usar cada uno:
  - **JPG** — fotografías con muchos colores.
  - **PNG** — gráficos con transparencia (logos, iconos).
  - **GIF** — animaciones simples (poco color).
  - **WebP** — moderno, comprime mejor que JPG y PNG.
  - **AVIF** — el más moderno, mejor compresión aún.
  - **SVG** — vectorial, escalable, editable con CSS.
- El atributo `alt` (cuándo descriptivo, cuándo vacío, cuándo omitirlo).
- `width` y `height` para evitar **CLS** (Cumulative Layout Shift).
- `loading="lazy"` para carga diferida.
- `decoding="async"` para no bloquear el render.
- `<figure>` + `<figcaption>`.

## Cómo va a quedar (boceto ASCII)

```
+--------------------+--------------------+--------------------+
|   [foto.jpg]       |   [logo.png]       |   [icono.svg]      |
| Atardecer en       | Logo MiEmpresa     | Icono de búsqueda  |
| la playa           |                    |                    |
+--------------------+--------------------+--------------------+
|   [decorativa]     |   [animacion.gif]  |   [grafico.png]    |
| (sin alt — solo    | Spinner cargando   | Gráfico de barras  |
|  decora)           |                    |                    |
+--------------------+--------------------+--------------------+
```

---

## Paso 1 — Tabla de formatos: ¿cuándo cada uno?

| Formato | Cuándo | Tamaño típico | Soporta transparencia | Animación |
|---------|--------|---------------|----------------------|-----------|
| **JPG/JPEG** | Fotos con muchos colores (paisajes, retratos) | 100-500 KB | ❌ | ❌ |
| **PNG** | Logos, iconos, imágenes con texto, transparencia | 20-200 KB | ✅ | ❌ (excepto APNG, raro) |
| **GIF** | Animaciones simples, paleta limitada (256 colores) | 100-1000 KB | ✅ (1 bit) | ✅ |
| **WebP** | Cualquier foto o gráfico moderno | 50-300 KB (30% menos que JPG) | ✅ | ✅ |
| **AVIF** | Lo último, mejor compresión que WebP | 30-200 KB (50% menos que JPG) | ✅ | ✅ |
| **SVG** | Logos, iconos, gráficos vectoriales | 1-50 KB (texto XML) | ✅ | ✅ (con SMIL/CSS) |

🔥 **Regla práctica**:

- Fotos → **JPG** o **WebP**.
- Logos / iconos planos → **SVG** (mejor) o **PNG**.
- Animaciones → **WebP** o **vídeo** corto (mejor que GIF).
- Captura de pantalla con texto → **PNG**.

## Paso 2 — La imagen base `<img>`

```html
<img src="imagen.jpg"
     alt="Descripción de la imagen"
     width="600"
     height="400"
     loading="lazy"
     decoding="async">
```

### Cada atributo explicado

| Atributo | Para qué | Obligatorio |
|----------|----------|-------------|
| `src` | Ruta de la imagen. | Sí |
| `alt` | Texto alternativo. | Sí (puede ser `""`) |
| `width` / `height` | Dimensiones en píxeles (relación de aspecto). | Muy recomendado |
| `loading="lazy"` | No carga hasta que se acerca al viewport. | Recomendado |
| `decoding="async"` | Decodifica en background. | Recomendado |

### Por qué `width` y `height` SIEMPRE

Sin dimensiones, el navegador no sabe cuánto espacio reservar para la imagen. Cuando la imagen carga, **el contenido baja de golpe** — el famoso **Layout Shift**. Mala UX y Google penaliza (Core Web Vitals).

```html
<!-- ❌ produce layout shift -->
<img src="hero.jpg" alt="Hero">

<!-- ✅ reserva espacio -->
<img src="hero.jpg" alt="Hero" width="1200" height="600">
```

🔥 El navegador calcula la **relación de aspecto** y reserva el espacio aunque uses `max-width: 100%` en CSS.

### `loading="lazy"`: carga diferida

Las imágenes con `loading="lazy"` no se descargan hasta que el usuario hace scroll cerca de ellas. Tu página principal carga más rápido. Aplicalo a TODAS las imágenes excepto las del "above the fold" (lo primero que se ve).

### `decoding="async"`: decodificación no bloqueante

Cuando una imagen carga, el navegador debe **decodificarla** (descomprimir el JPG, por ejemplo). Por defecto bloquea brevemente el render. Con `async`, lo hace en background.

## Paso 3 — Galería completa con `<figure>` y `<figcaption>`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de formatos</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <h1>Galería de formatos de imagen</h1>

    <section class="galeria">

        <!-- 1. JPG -->
        <figure>
            <img src="https://picsum.photos/400/300?random=1"
                 alt="Atardecer sobre las montañas con tonos naranjas y rosas"
                 width="400" height="300"
                 loading="lazy" decoding="async">
            <figcaption>JPG — Fotografía de paisaje</figcaption>
        </figure>

        <!-- 2. PNG con transparencia -->
        <figure>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/200px-LEGO_logo.svg.png"
                 alt="Logo de LEGO"
                 width="200" height="200"
                 loading="lazy">
            <figcaption>PNG — Logo con transparencia</figcaption>
        </figure>

        <!-- 3. SVG -->
        <figure>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                 alt="Logo oficial de SVG"
                 width="200" height="200"
                 loading="lazy">
            <figcaption>SVG — Vectorial, escala sin pérdida</figcaption>
        </figure>

        <!-- 4. Decorativa (alt vacío) -->
        <figure>
            <img src="https://picsum.photos/400/300?random=4"
                 alt=""
                 width="400" height="300"
                 loading="lazy">
            <figcaption>Imagen decorativa (alt vacío)</figcaption>
        </figure>

        <!-- 5. GIF animado -->
        <figure>
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-loading-forever.gif"
                 alt="Animación de spinner cargando"
                 width="200" height="200"
                 loading="lazy">
            <figcaption>GIF — Animación simple</figcaption>
        </figure>

        <!-- 6. SVG inline (lo verás en el otro ejercicio) -->
        <figure>
            <svg width="200" height="200" viewBox="0 0 100 100"
                 role="img" aria-label="Icono de búsqueda">
                <circle cx="40" cy="40" r="25" fill="none" stroke="#0d6efd" stroke-width="6"/>
                <line x1="60" y1="60" x2="85" y2="85" stroke="#0d6efd" stroke-width="8" stroke-linecap="round"/>
            </svg>
            <figcaption>SVG inline — Icono editable con CSS</figcaption>
        </figure>

    </section>
</body>
</html>
```

### Cuándo `alt=""` y cuándo `alt="..."`

| Caso | Qué poner |
|------|-----------|
| Imagen informativa (foto, gráfico, captura) | `alt="descripción concreta"` |
| Imagen decorativa (separador, fondo) | `alt=""` (cadena vacía) |
| Logo que ES un enlace al inicio | `alt="Inicio"` o `alt="MiSitio"` |
| Imagen ya descrita por el texto alrededor | `alt=""` |

🔥 **NUNCA omitas el `alt`** — eso le dice al lector de pantalla "leo el nombre del fichero", que es lo peor. Pon `alt=""` si es decorativa.

🔥 **NO empieces con "Imagen de..."** — el lector de pantalla ya dice "imagen" antes del alt; sería redundante.

## Paso 4 — CSS de la galería

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: #f8f9fa;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

figure {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    padding: 15px;
    text-align: center;
}

figure img,
figure svg {
    width: 100%;
    height: 250px;
    object-fit: contain;     /* mantiene proporciones, no recorta */
    background: #f0f0f0;     /* fondo gris para imágenes con transparencia */
}

figcaption {
    margin-top: 10px;
    font-style: italic;
    color: #6c757d;
    font-size: 14px;
}
```

### `object-fit: contain` vs `cover`

- `contain` — entra entera. Si la proporción no encaja, deja huecos.
- `cover` — llena la caja, recorta lo que sobra.

Para una galería donde todas las imágenes deben verse enteras: `contain`. Para tarjetas tipo Instagram: `cover`.

## Paso 5 — `srcset` y `sizes` (responsive images)

Para servir distintas resoluciones según pantalla:

```html
<img src="hero-800.jpg"
     srcset="hero-400.jpg 400w,
             hero-800.jpg 800w,
             hero-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Hero">
```

### Anatomía

- `src` — fallback para navegadores que no soportan `srcset`.
- `srcset` — lista de imágenes con su ancho real (`Nw`).
- `sizes` — le dice al navegador cuánto espacio ocupará la imagen en cada ancho de pantalla. El navegador elige la imagen más eficiente.

🔥 El navegador hace la cuenta: "en pantalla de 400px CSS con DPR 2 necesito 800px reales → elijo `hero-800.jpg`". Ahorras ancho de banda y mejoras velocidad.

## Paso 6 — `<picture>` con `<source>` (formatos alternativos)

```html
<picture>
    <source srcset="hero.avif" type="image/avif">
    <source srcset="hero.webp" type="image/webp">
    <img src="hero.jpg" alt="Hero" width="1200" height="600">
</picture>
```

### Cómo funciona

El navegador prueba cada `<source>` por orden. Coge la **primera** que entiende:

1. Soporta AVIF → usa AVIF.
2. No → prueba WebP. Si lo soporta, lo usa.
3. No → fallback al `<img>` JPG.

🔥 **`<picture>` también vale para art direction** (mostrar imágenes distintas, no solo formatos distintos):

```html
<picture>
    <source media="(max-width: 600px)" srcset="hero-movil.jpg">
    <source media="(min-width: 601px)" srcset="hero-desktop.jpg">
    <img src="hero-desktop.jpg" alt="Hero">
</picture>
```

En móvil, una versión cuadrada centrada en la cara; en desktop, una versión panorámica.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Omitir `alt` | Mal SEO y accesibilidad | Siempre alt (vacío si decorativa). |
| `alt="imagen.jpg"` o `alt="foto"` | No aporta nada | Descriptivo o vacío. |
| Sin `width`/`height` | Layout shift | Ponlos siempre. |
| `width="600"` con CSS `width: 100%` | OK — CSS gana visualmente, pero `width="600"` reserva proporción | Es lo CORRECTO. |
| GIF para vídeo | Pesa 10× más que un mp4 | Usa `<video autoplay loop muted>`. |
| PNG para fotos | Pesa 3× más que JPG | Usa JPG/WebP para fotos. |
| JPG para iconos planos | Pierdes calidad, no transparencia | PNG o SVG. |
| `loading="eager"` en todas | Defeat del propósito | `lazy` por defecto excepto la primera. |
| Imagen 4000x3000 mostrada a 400×300 | El navegador la redimensiona — pierdes ancho de banda | Redimensiona tú (Squoosh, ImageOptim). |
| Subir 50 imágenes a 5 MB cada una | Web lenta | Comprime antes de subir (TinyPNG, Squoosh). |
| SVG con `<script>` dentro | Vulnerabilidad XSS si lo subes sin sanitizar | Acepta solo SVGs que tú crees. |
| `srcset` sin `sizes` | Navegador usa 100vw por defecto, no es eficiente | Pon `sizes`. |
| `<picture>` con `<source>` mal ordenado | Coge el primero, no el "mejor" | Ordena de mejor a peor (AVIF → WebP → JPG). |

## Código HTML completo

(Ver Paso 3.)

## Cómo verificar

1. Abre `index.html`. Las imágenes cargan progresivamente.
2. **F12** → pestaña **Network** → recarga. Verás cada imagen con su tamaño y formato.
3. Cambia a "Slow 3G" en throttling → notarás el efecto del lazy loading: las imágenes más abajo no cargan hasta hacer scroll.
4. Inspecciona una imagen → en "Computed" verás el `intrinsicSize` (tamaño real) y `displaySize` (tamaño mostrado).
5. **Lighthouse** (F12 → pestaña Lighthouse) → "Performance" → mide CLS. Si tus imágenes tienen `width` y `height`, debería estar cerca de 0.

## Alternativas peores

### 1) Imagen sin dimensiones

```html
<!-- ❌ provoca Layout Shift -->
<img src="hero.jpg">
```

Cuando la imagen carga, el contenido siguiente baja. Google penaliza.

### 2) GIF para vídeo

```html
<!-- ❌ pesa 5 MB -->
<img src="explicacion.gif">
```

```html
<!-- ✅ pesa 500 KB -->
<video autoplay loop muted playsinline>
    <source src="explicacion.mp4" type="video/mp4">
</video>
```

### 3) Imágenes inline con base64

```html
<!-- ❌ aumenta el HTML enormemente -->
<img src="data:image/png;base64,iVBORw0KGgo...muy_largo...">
```

Útil para iconos de 1KB. Mala idea para fotos.

### 4) `background-image` para contenido

```css
/* ❌ no tiene alt, mal SEO */
.hero { background-image: url('hero.jpg'); }
```

Si la imagen es contenido (forma parte de la información), usa `<img>`. `background-image` solo para decoración.

### 5) PNG-24 con transparencia para todo

```html
<!-- ❌ pesa 5 MB innecesarios -->
<img src="foto-paisaje.png">
```

Si no necesitas transparencia, usa JPG (90 % más ligero para fotos).

### 6) Imágenes gigantes para móvil

Servir una imagen de 3000px a un móvil de 360px de ancho. Usa `srcset`.

### 7) `<img>` dentro de `<a>` sin `alt` descriptivo

```html
<!-- ❌ -->
<a href="/producto"><img src="prod.jpg" alt=""></a>
```

Si la imagen es el único contenido del enlace, el `alt` debe describir A DÓNDE va, no la imagen.

```html
<!-- ✅ -->
<a href="/producto"><img src="prod.jpg" alt="Ver detalles del producto X"></a>
```

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Imagen rota (icono x) | `src` mal o ruta inválida | Verifica ruta. |
| Imagen muy pequeña en móvil | CSS la limita | Aplica `max-width: 100%; height: auto;`. |
| Layout salta al cargar | Sin `width`/`height` | Ponlos. |
| `loading="lazy"` no hace nada | Navegador antiguo | Es opcional, falla seguro. |
| Imagen pixelada | La imagen real es más pequeña que el espacio que ocupa | Usa imagen de mayor resolución. |
| Imagen borrosa en pantalla retina | DPR 2× pide doble resolución | `srcset` con versión 2×. |
| GIF se repite muchas veces | Comportamiento por defecto | Es lo esperado, o conviértelo a vídeo. |
| `<picture>` muestra el fallback siempre | Navegador no soporta AVIF/WebP | OK — para eso es el fallback. |

## Lo que has aprendido

- Cuándo usar JPG, PNG, GIF, WebP, AVIF, SVG.
- El atributo `alt` correctamente (descriptivo, vacío para decorativas, no redundante).
- `width` y `height` para evitar layout shift.
- `loading="lazy"` y `decoding="async"`.
- `<figure>` + `<figcaption>`.
- `srcset` + `sizes` para responsive images.
- `<picture>` + `<source>` para formatos alternativos y art direction.
- `object-fit: contain` vs `cover`.
- Por qué `background-image` no sustituye a `<img>` para contenido.
