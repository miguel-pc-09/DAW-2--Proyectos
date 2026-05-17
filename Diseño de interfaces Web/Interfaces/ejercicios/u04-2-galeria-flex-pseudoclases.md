# Ejercicio U4.2 — Galería de productos con Flex, pseudoclases y transiciones

> 📚 Unidad 4 · CSS avanzado y Flexbox
> ⏱️ Tiempo: 40-50 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: combinar `flex` avanzado, `position`, pseudoclases, transiciones y transformaciones.

## Enunciado

Galería de 6 productos:

- Cada tarjeta: imagen, nombre, precio, etiqueta de descuento (si la tiene).
- Etiqueta "OFERTA" en la esquina superior izquierda (posicionada absoluta).
- Sombra suave que se intensifica al pasar el ratón.
- Tarjeta se eleva 5px y se hace 2% más grande al hover.
- El precio anterior tachado, el nuevo en rojo.
- Botón "Añadir al carrito" oculto que aparece al hacer hover.
- Si pulsas la tarjeta (`:active`), efecto de "presión" (más pequeño).
- Layout flex: las tarjetas se reparten en filas, salto automático.
- Primera tarjeta destacada (más grande, fondo distinto).

---

## ¿Qué vas a aprender?

- **Flex en items**: `flex-grow`, `flex-shrink`, `flex-basis`, atajo `flex: 1 1 250px`.
- **Pseudoclases dinámicas**: `:hover`, `:focus`, `:active`, `:focus-visible`.
- **Pseudoclases estructurales**: `:first-child`, `:not()`.
- **Pseudoelementos**: `::before`, `::after`.
- **Position**: `relative` (referencia), `absolute` (sobre el padre relativo).
- **Transiciones**: `transition: prop dur timing delay`.
- **Transformaciones**: `transform: translate / scale / rotate`.
- **`opacity` y `visibility`** y por qué no son lo mismo.
- **`z-index`** para superponer.
- **`overflow: hidden`** para recortar imágenes.

## Cómo va a quedar (boceto ASCII)

```
┌──────────────────────────────────────────────────────────────┐
│  ┌────────────────┐  ┌────────┐  ┌────────┐                 │
│  │ OFERTA         │  │        │  │ OFERTA │                 │
│  │                │  │        │  │        │                 │
│  │    [imagen]    │  │ [img]  │  │ [img]  │                 │
│  │                │  │        │  │        │                 │
│  │  Producto 1    │  │ Prod 2 │  │ Prod 3 │                 │
│  │  20€ ~~25€~~   │  │ 30€    │  │ 15€    │                 │
│  │                │  │        │  │        │                 │
│  │  ← grande      │  │        │  │        │                 │
│  └────────────────┘  └────────┘  └────────┘                 │
│                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐                         │
│  │  Prod  │  │  Prod  │  │  Prod  │                         │
│  │   4    │  │   5    │  │   6    │                         │
│  └────────┘  └────────┘  └────────┘                         │
└──────────────────────────────────────────────────────────────┘

Al hover sobre una tarjeta:
  → se eleva 5px
  → sombra más fuerte
  → aparece el botón "Añadir al carrito" desde abajo
```

---

## Paso 1 — Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de productos</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <main class="galeria">
        <article class="producto destacado">
            <span class="etiqueta">OFERTA</span>
            <img src="https://picsum.photos/300/200?random=1" alt="Auriculares premium">
            <h3>Auriculares Premium</h3>
            <p class="precio">
                <span class="actual">79€</span>
                <span class="anterior">99€</span>
            </p>
            <button class="cta">Añadir al carrito</button>
        </article>

        <article class="producto">
            <img src="https://picsum.photos/300/200?random=2" alt="Teclado mecánico">
            <h3>Teclado Mecánico</h3>
            <p class="precio">
                <span class="actual">120€</span>
            </p>
            <button class="cta">Añadir al carrito</button>
        </article>

        <article class="producto">
            <span class="etiqueta">OFERTA</span>
            <img src="https://picsum.photos/300/200?random=3" alt="Ratón gamer">
            <h3>Ratón Gamer</h3>
            <p class="precio">
                <span class="actual">45€</span>
                <span class="anterior">60€</span>
            </p>
            <button class="cta">Añadir al carrito</button>
        </article>

        <article class="producto">
            <img src="https://picsum.photos/300/200?random=4" alt="Webcam HD">
            <h3>Webcam HD</h3>
            <p class="precio"><span class="actual">55€</span></p>
            <button class="cta">Añadir al carrito</button>
        </article>

        <article class="producto">
            <img src="https://picsum.photos/300/200?random=5" alt="Soporte monitor">
            <h3>Soporte Monitor</h3>
            <p class="precio"><span class="actual">30€</span></p>
            <button class="cta">Añadir al carrito</button>
        </article>

        <article class="producto">
            <img src="https://picsum.photos/300/200?random=6" alt="Cable USB-C">
            <h3>Cable USB-C</h3>
            <p class="precio"><span class="actual">12€</span></p>
            <button class="cta">Añadir al carrito</button>
        </article>
    </main>
</body>
</html>
```

## Paso 2 — Contenedor flex con wrap

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    background: #f8f9fa;
    padding: 30px;
}

.galeria {
    display: flex;
    flex-wrap: wrap;             /* permite saltar de línea */
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: flex-start;
}
```

### `flex-wrap: wrap`

Por defecto los items no saltan de línea; intentan caber a costa de aplastarse. Con `flex-wrap: wrap`, cuando no caben pasan a la siguiente línea.

## Paso 3 — Cada tarjeta como flex item

```css
.producto {
    flex: 1 1 250px;             /* el atajo: grow shrink basis */
    background: white;
    border-radius: 10px;
    overflow: hidden;            /* recorta la imagen redondeada */
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    position: relative;          /* referencia para la etiqueta absolute */
    transition: transform 0.25s, box-shadow 0.25s;
    cursor: pointer;
}

.producto.destacado {
    flex: 2 1 500px;             /* el doble de espacio que los normales */
    background: #fff8e1;          /* fondo crema */
}
```

### Atajo `flex: 1 1 250px`

`flex` resume 3 propiedades en una:

| Posición | Propiedad | Significado |
|----------|-----------|-------------|
| 1ª | `flex-grow` | Cuánto crece si sobra espacio (peso relativo). |
| 2ª | `flex-shrink` | Cuánto se aplasta si falta espacio. |
| 3ª | `flex-basis` | Tamaño inicial antes de crecer/aplastarse. |

🔥 **Truco**: `flex: 1 1 250px` = "ocupa al menos 250px, pero crece si puede". Es el patrón mágico para galerías responsive sin media queries.

Para la tarjeta destacada `flex: 2 1 500px` significa "crece el doble que las normales y empieza con 500px de base".

### Por qué `overflow: hidden`

La tarjeta tiene `border-radius: 10px`. La imagen ocupa toda la anchura. Sin `overflow: hidden`, las esquinas de la imagen se salen del border-radius. Con él, la imagen se recorta a la forma del padre.

## Paso 4 — Etiqueta posicionada absoluta

```css
.etiqueta {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #dc3545;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    z-index: 2;                  /* por encima de la imagen */
}
```

### `position: absolute` necesita un padre `relative`

Sin un ancestro con `position: relative` (o `absolute`/`fixed`/`sticky`), `position: absolute` se posiciona respecto al `<html>` (toda la página). Por eso `.producto` tiene `position: relative`.

```
.producto { position: relative; }
   └─ .etiqueta { position: absolute; top: 10px; left: 10px; }
      ↑ esquina superior izquierda del .producto, no de la página
```

### `z-index` solo funciona en elementos posicionados

`z-index: 2` solo afecta a elementos con `position: relative | absolute | fixed | sticky`. En un elemento `position: static` (por defecto) se ignora.

## Paso 5 — Imagen y textos

```css
.producto img {
    width: 100%;
    height: 180px;
    object-fit: cover;           /* la imagen llena, recortada si hace falta */
    display: block;              /* quita el espacio fantasma inferior */
}

.producto h3 {
    padding: 12px 16px 4px;
    font-size: 16px;
    color: #212529;
}

.precio {
    padding: 0 16px 16px;
    font-size: 18px;
}

.precio .actual {
    color: #dc3545;
    font-weight: bold;
}

.precio .anterior {
    color: #6c757d;
    text-decoration: line-through;
    font-size: 14px;
    margin-left: 8px;
}
```

### Por qué `display: block` en `<img>`

`<img>` es `inline` por defecto. Eso añade un espacio fantasma debajo (4-5px) por el `line-height` de la línea. `display: block` lo elimina.

### `object-fit` (recordatorio)

- `cover` — llena la caja, recorta lo que sobre.
- `contain` — entra entera, deja huecos.
- `fill` — deforma (por defecto).
- `none` — tamaño real.

## Paso 6 — Botón oculto que aparece al hover

```css
.cta {
    display: block;
    width: calc(100% - 32px);
    margin: 0 16px 16px;
    padding: 10px;
    background: #0d6efd;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0;                  /* invisible */
    transform: translateY(10px); /* 10px hacia abajo */
    transition: all 0.3s;
}

.producto:hover .cta {
    opacity: 1;
    transform: translateY(0);
}
```

### `opacity: 0` vs `visibility: hidden` vs `display: none`

| Propiedad | ¿Se ve? | ¿Ocupa espacio? | ¿Recibe clicks? |
|-----------|---------|-----------------|-----------------|
| `display: none` | No | No (desaparece del flow) | No |
| `visibility: hidden` | No | Sí (deja hueco) | No |
| `opacity: 0` | No | Sí | **Sí (¡peligro!)** |

🔥 Si pones `opacity: 0` en algo, **sigue siendo clicable**. Si quieres que también desaparezca al click, añade `pointer-events: none`.

Para botones que aparecen suavemente, `opacity` + `transform` es lo correcto. Si solo usaras `display: none` → `display: block` no se podría animar (`display` no es animable).

## Paso 7 — Hover, focus y active

```css
.producto:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.producto:active {
    transform: scale(0.98);
}

.cta:focus-visible {
    outline: 3px solid #ffc107;
    outline-offset: 2px;
}
```

### `:hover` vs `:focus` vs `:active`

- `:hover` — ratón encima.
- `:focus` — tiene el foco (tab o clic).
- `:focus-visible` — focus pero **solo si llegó con teclado** (no aparece al hacer clic, sí al pulsar Tab). Más limpio visualmente.
- `:active` — durante el clic (mientras tienes el ratón pulsado).

### Combinando transformaciones

```css
transform: translateY(-5px) scale(1.02);
```

Se aplican en el orden escrito. Primero translate, luego scale. El orden importa (`scale(2) translate(10px)` mueve 20px, `translate(10px) scale(2)` mueve 10px).

### Transición con varias propiedades

```css
/* Una sola */
transition: transform 0.25s;

/* Varias */
transition: transform 0.25s, box-shadow 0.25s ease-in-out, opacity 0.3s 0.1s;
/*           prop      dur    prop      dur    timing       prop    dur delay */

/* Todas (no recomendado) */
transition: all 0.25s;
```

### Funciones de tiempo (timing)

- `ease` (por defecto) — empieza lento, acelera, frena al final.
- `linear` — velocidad constante.
- `ease-in` — empieza lento.
- `ease-out` — acaba lento (sensación natural).
- `cubic-bezier(...)` — control fino.

## Paso 8 — Pseudoelementos `::before` y `::after`

Añadamos una decoración en la primera tarjeta:

```css
.producto.destacado::before {
    content: "★";
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ffc107;
    font-size: 28px;
    z-index: 2;
}
```

### Diferencia `:before` y `::before`

- `:before` (1 dos puntos) → CSS2 (pseudoclases).
- `::before` (2 dos puntos) → CSS3 (pseudoelementos).

Ambos funcionan, pero la sintaxis correcta hoy es `::` para pseudoelementos.

🔥 **Pseudoelemento sin `content` no se ve**. `content: ""` (cadena vacía) es el mínimo.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| `position: absolute` sin padre relative | Se sale a la posición del `<html>` | Pon `position: relative` en el ancestro deseado. |
| `transition` definida en `:hover` | No se anima al salir | Defínela en el estado base, no en el hover. |
| `transform: all` (no existe) | Se ignora | `transition: all` sí existe, pero `transform: all` no. |
| `display: none` y animarlo | No se puede | Anima `opacity` + `visibility`, o usa `transform: scale(0)`. |
| Olvidar `pointer-events: none` con opacity 0 | Recibe clics fantasma | Añádelo. |
| `z-index` sin position | Se ignora silenciosamente | Pon `position: relative` (sin top/left). |
| `transform` afecta al `position: fixed` de un hijo | Sí, crea contexto de apilamiento — un fixed hijo se vuelve relativo al transform | Si lo quieres global, no lo metas en un transform. |
| `overflow: hidden` corta el `box-shadow` | La sombra fuera del border desaparece | Quita overflow o usa otra técnica. |
| `flex-basis: auto` ignora width | Por defecto `flex-basis` mira el `width`/`height` | Pon `flex-basis` explícito. |
| `flex-grow: 0` en una galería | Items se quedan a su tamaño inicial, dejan huecos | Pon `flex-grow: 1` para repartir el espacio. |
| Animar `width` o `height` | Provoca recalculo de layout (lento) | Anima `transform: scaleX()` mejor. |
| `transform: translate(50%, 50%)` para centrar | Funciona pero pierdes `top: 50%; left: 50%` | Combínalos: `top: 50%; left: 50%; transform: translate(-50%, -50%);`. |

## Código HTML completo

(Ver Paso 1.)

## CSS completo (comentado)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    background: #f8f9fa;
    padding: 30px;
}

/* ====== GALERÍA ====== */
.galeria {
    display: flex;
    flex-wrap: wrap;             /* salto de línea automático */
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* ====== TARJETA DE PRODUCTO ====== */
.producto {
    flex: 1 1 250px;             /* crece, se aplasta, base 250px */
    background: white;
    border-radius: 10px;
    overflow: hidden;            /* esquinas redondeadas afectan a la img */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    position: relative;          /* ancla para .etiqueta absolute */
    transition: transform 0.25s, box-shadow 0.25s;
    cursor: pointer;
}

.producto:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.producto:active {
    transform: scale(0.98);
}

/* Tarjeta destacada (la primera) */
.producto.destacado {
    flex: 2 1 500px;             /* doble de espacio */
    background: #fff8e1;
}

.producto.destacado::before {
    content: "★";
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ffc107;
    font-size: 28px;
    z-index: 2;
}

/* ====== ETIQUETA OFERTA ====== */
.etiqueta {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #dc3545;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    z-index: 2;
}

/* ====== IMAGEN ====== */
.producto img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;              /* quita espacio fantasma inline */
}

/* ====== TEXTOS ====== */
.producto h3 {
    padding: 12px 16px 4px;
    font-size: 16px;
    color: #212529;
}

.precio {
    padding: 0 16px 16px;
    font-size: 18px;
}

.precio .actual {
    color: #dc3545;
    font-weight: bold;
}

.precio .anterior {
    color: #6c757d;
    text-decoration: line-through;
    font-size: 14px;
    margin-left: 8px;
}

/* ====== BOTÓN OCULTO ====== */
.cta {
    display: block;
    width: calc(100% - 32px);
    margin: 0 16px 16px;
    padding: 10px;
    background: #0d6efd;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;        /* no clicable mientras invisible */
    transition: all 0.3s;
}

.producto:hover .cta {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;        /* clicable al aparecer */
}

.cta:hover {
    background: #0b5ed7;
}

.cta:focus-visible {
    outline: 3px solid #ffc107;
    outline-offset: 2px;
}
```

## Cómo verificar responsive

1. Abre `index.html`. Las 6 tarjetas se reparten en 4-5 por fila si tu pantalla es ancha.
2. Pasa el ratón por una tarjeta → se eleva, sombra fuerte, botón aparece desde abajo.
3. Mantén el clic → tarjeta se hace pequeñita (efecto presión).
4. Tab por las tarjetas → outline amarillo en el botón.
5. **F12** → modo móvil → 375px. Cada tarjeta ocupa toda la fila (`flex-basis: 250px` con ancho < 500px hace que solo quepa una). La destacada tiene `flex-basis: 500px` así que cabe perfecta.
6. **DevTools tip**: abre el inspector → busca `.producto` → en "Computed" mira `flex-grow`, `flex-shrink`, `flex-basis` calculados.

## Alternativas peores

### 1) `position: absolute` para el grid de tarjetas

```css
/* ❌ -- imposible responsive */
.producto:nth-child(1) { position: absolute; top: 0; left: 0; }
.producto:nth-child(2) { position: absolute; top: 0; left: 320px; }
/* ... */
```

Cualquier cambio de ancho rompe todo. `flex: 1 1 250px` se adapta solo.

### 2) Animar `width` o `height` en lugar de `transform`

```css
/* ❌ provoca relayout (lento) */
.producto:hover { width: 320px; }
```

```css
/* ✅ usa la GPU, suave */
.producto:hover { transform: scale(1.05); }
```

### 3) `display: none` para botón oculto

```css
/* ❌ no se anima */
.cta { display: none; }
.producto:hover .cta { display: block; }
```

`display` no es una propiedad animable. El botón aparece "POP". Anima `opacity` + `transform`.

### 4) `<button>` envuelto en `<a>`

```html
<!-- ❌ HTML inválido -->
<a href="/producto"><button>Añadir</button></a>
```

Anida un elemento interactivo dentro de otro. Lo correcto es uno u otro.

### 5) `overflow: hidden` y `position: absolute` peleando

```css
.producto { overflow: hidden; position: relative; }
.etiqueta { position: absolute; top: -10px; left: -10px; } /* la corta */
```

Si la etiqueta debe sobresalir, no uses `overflow: hidden` en el padre (o saca la etiqueta del padre).

### 6) Sombra animada haciéndose CADA hover

```css
.producto:hover { box-shadow: 0 0 50px black; }
```

Recalcular sombras es **caro**. Pre-renderiza con `will-change: box-shadow` si tienes muchos elementos.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| La etiqueta aparece en la esquina de la pantalla | Falta `position: relative` en `.producto` | Añádelo. |
| El botón aparece pero no desaparece suavemente | `display: none` en lugar de `opacity` | Cámbialo. |
| `:hover` no funciona en móvil | Los móviles no tienen ratón | Usa también `:focus` o `:active`. |
| Las tarjetas no se reparten | `flex-wrap: nowrap` (por defecto) | Pon `wrap`. |
| Una tarjeta muy ancha | `flex-grow` distinto entre tarjetas | Mismo `flex` para todas (salvo la destacada). |
| Sombra recortada por overflow | `overflow: hidden` en la tarjeta | Quita overflow del padre o usa otra estructura. |
| Botón clicable cuando no se ve | `opacity: 0` sin `pointer-events: none` | Añade `pointer-events: none`. |
| Imagen no se recorta circular | Falta `object-fit: cover` | Añádelo. |
| El precio anterior no se tacha | `text-decoration: line-through` mal escrito | Comprueba. |

## Lo que has aprendido

- `flex: grow shrink basis` (atajo).
- `flex-wrap` para saltos automáticos.
- `position: relative` como ancla, `position: absolute` posicionado dentro.
- `z-index` solo funciona en elementos posicionados.
- `overflow: hidden` para recortar (con cuidado de sombras).
- Pseudoclases `:hover`, `:focus`, `:active`, `:focus-visible`.
- Pseudoelementos `::before`, `::after` con `content`.
- `opacity` vs `visibility` vs `display: none`.
- `pointer-events: none` para hacer no clicable.
- `transform: translate / scale / rotate` y por qué es mejor que animar width/height.
- `transition` con múltiples propiedades y `cubic-bezier`.
- `object-fit: cover` para imágenes que se adaptan.
