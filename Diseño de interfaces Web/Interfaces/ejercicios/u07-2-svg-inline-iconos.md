# Ejercicio U7.2 — Iconos SVG inline con interacción CSS

> 📚 Unidad 7 · Multimedia: imágenes y SVG
> ⏱️ Tiempo: 35-45 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: dominar el SVG inline, modificarlo con CSS y entender sus ventajas frente a iconos PNG.

## Enunciado

Crear una barra de 5 iconos SVG inline (búsqueda, corazón, carrito, usuario, ajustes). Cada uno debe:

- Verse nítido en cualquier zoom (vectorial).
- Cambiar de color al pasar el ratón.
- Tener una animación suave (escalado o rotación).
- Ser accesible (lo lee un screen reader).
- Estar coloreado con `currentColor` para heredar del padre.

Bonus: dibujar un gráfico de "progreso circular" con SVG puro.

---

## ¿Qué vas a aprender?

- Qué es SVG y por qué es **vectorial** (no pixel-based).
- 3 formas de incluir SVG: `<img>`, `background-image`, `inline`.
- Estructura básica de SVG: `viewBox`, `width`, `height`, `fill`, `stroke`.
- Elementos: `<circle>`, `<rect>`, `<line>`, `<path>`, `<polygon>`, `<g>`.
- Colorear con CSS: `fill`, `stroke`, `currentColor`.
- Animaciones SVG con CSS (transitions, transforms).
- Accesibilidad SVG: `role="img"`, `aria-label`, `<title>`.
- `<symbol>` + `<use>` para reutilizar iconos.
- Optimización: SVGO, atributos innecesarios.

## Cómo va a quedar (boceto ASCII)

```
+----------------------------------------------------+
|                                                    |
|   🔍   ♥   🛒   👤   ⚙️                          |
|   ↑   ↑   ↑   ↑   ↑                              |
| iconos SVG inline, cambian de color al hover      |
|                                                    |
+----------------------------------------------------+

BONUS:
        ╭──────╮
       │  75%  │   ← círculo de progreso SVG
        ╰──────╯
```

---

## Paso 1 — ¿Por qué SVG?

| Propiedad | PNG / JPG | SVG |
|-----------|-----------|-----|
| Naturaleza | Píxeles | Vectores (matemáticas) |
| Zoom | Pixelado | Nítido |
| Tamaño | Crece con resolución | Constante |
| Editable con CSS | No | Sí |
| Animable con CSS | No | Sí |
| Mejor para | Fotos | Logos, iconos, gráficos |

🔥 Un PNG de 24×24 píxeles se ve pixelado a 96×96. Un SVG se ve perfecto en cualquier tamaño.

## Paso 2 — Las 3 formas de incluir SVG

### Forma A — Como imagen `<img>`

```html
<img src="icono.svg" alt="Buscar" width="24" height="24">
```

Ventajas: simple. Cacheado por el navegador.
**Desventajas**: NO puedes modificarlo con CSS (color, animación).

### Forma B — Como `background-image`

```css
.icono { background-image: url('icono.svg'); }
```

Igual que `<img>` — útil para iconos decorativos en backgrounds, sin acceso CSS.

### Forma C — Inline (incrustado en el HTML)

```html
<svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" stroke-width="2"/>
    <line x1="17" y1="17" x2="22" y2="22" stroke="currentColor" stroke-width="2"/>
</svg>
```

🔥 **Ventajas del inline**:

- Lo puedes estilar con CSS (`fill`, `stroke`).
- Lo puedes animar con CSS.
- `currentColor` hereda del color del padre.
- No hay request HTTP adicional.

**Desventajas**: hace el HTML más largo. No se cachea como recurso separado.

**Cuándo usar inline**: iconos que necesitas estilar dinámicamente (hover, dark mode, color de marca).

## Paso 3 — Estructura del SVG

```html
<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <!-- elementos aquí -->
</svg>
```

| Atributo | Para qué |
|----------|----------|
| `width`, `height` | Tamaño en píxeles cuando se renderiza. |
| `viewBox="x y w h"` | **Coordinada interna**: define el "lienzo" interno. |
| `xmlns` | Namespace XML. Solo obligatorio en SVGs standalone, no inline en HTML5. |

### `viewBox` — el concepto clave

`viewBox="0 0 100 100"` define un lienzo interno de 100×100 unidades. Cuando dibujas `<circle cx="50" cy="50" r="40"/>`, el círculo va al centro de ese lienzo.

Si luego pones `width="200"`, el SVG se renderiza a 200px pero el círculo **se escala**: ocupa los 200px porque los 100 internos se mapean al ancho real. ¡**Eso es lo que lo hace vectorial**!

```
viewBox="0 0 100 100"        Mismo SVG con width=24:    Con width=240:

       y                          24×24 nítido               240×240 nítido
   0 ───────► 100
   │                             [icono pequeño]            [icono grande]
   │  ●●●
   │ ●   ●                              ↑                          ↑
 100│  ●●●                       el mismo render            sin pixelado
   ▼
```

## Paso 4 — Elementos SVG básicos

```html
<svg viewBox="0 0 100 100" width="100" height="100">
    <!-- Círculo: centro (cx, cy), radio r -->
    <circle cx="50" cy="50" r="40" fill="red"/>

    <!-- Rectángulo: esquina (x, y), tamaño (width, height) -->
    <rect x="10" y="10" width="80" height="80" fill="blue"/>

    <!-- Línea: de (x1, y1) a (x2, y2) -->
    <line x1="0" y1="0" x2="100" y2="100" stroke="black" stroke-width="2"/>

    <!-- Polígono: lista de puntos -->
    <polygon points="50,10 90,90 10,90" fill="green"/>

    <!-- Path: comando complejo (M=mover, L=línea, A=arco, Z=cerrar) -->
    <path d="M 10 10 L 90 10 L 50 90 Z" fill="orange"/>

    <!-- Texto -->
    <text x="50" y="50" text-anchor="middle" fill="white">Hi!</text>

    <!-- Grupo (para aplicar atributos comunes) -->
    <g fill="purple" stroke="black">
        <circle cx="25" cy="50" r="10"/>
        <circle cx="75" cy="50" r="10"/>
    </g>
</svg>
```

### `fill` vs `stroke`

- `fill` = color de **relleno**.
- `stroke` = color del **borde**.
- `stroke-width` = grosor del borde.
- `fill="none"` = sin relleno (solo contorno).

## Paso 5 — Iconos: estructura básica

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iconos SVG</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <nav class="barra-iconos">

        <!-- 1. Buscar -->
        <a href="#" class="icono" aria-label="Buscar">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="17" y1="17" x2="22" y2="22"/>
            </svg>
        </a>

        <!-- 2. Corazón -->
        <a href="#" class="icono favorito" aria-label="Favoritos">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z"/>
            </svg>
        </a>

        <!-- 3. Carrito -->
        <a href="#" class="icono carrito" aria-label="Carrito">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
        </a>

        <!-- 4. Usuario -->
        <a href="#" class="icono usuario" aria-label="Mi cuenta">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
        </a>

        <!-- 5. Ajustes -->
        <a href="#" class="icono ajustes" aria-label="Ajustes">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
        </a>

    </nav>

    <!-- BONUS: progreso circular -->
    <div class="progreso-wrapper">
        <svg viewBox="0 0 120 120" width="120" height="120" class="progreso">
            <!-- círculo de fondo -->
            <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="10"/>
            <!-- círculo de progreso -->
            <circle cx="60" cy="60" r="50" fill="none" stroke="#0d6efd"
                    stroke-width="10" stroke-linecap="round"
                    stroke-dasharray="314"
                    stroke-dashoffset="78.5"
                    transform="rotate(-90 60 60)"/>
            <!-- texto centrado -->
            <text x="60" y="60" text-anchor="middle" dominant-baseline="central"
                  font-size="24" font-weight="bold" fill="#0d6efd">75%</text>
        </svg>
        <p>Progreso del curso</p>
    </div>
</body>
</html>
```

### `currentColor` — el truco mágico

```html
<svg stroke="currentColor"> ... </svg>
```

```css
.icono { color: blue; }   /* el SVG dentro será azul */
```

`currentColor` significa "el color de texto actual". Permite que cambies el color del SVG con la propiedad `color` del padre. Útil cuando el SVG es un icono dentro de un enlace o botón.

## Paso 6 — CSS para colorear y animar

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    padding: 40px;
    background: #f8f9fa;
    text-align: center;
}

/* Barra horizontal de iconos */
.barra-iconos {
    display: flex;
    justify-content: center;
    gap: 25px;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    max-width: 500px;
    margin: 0 auto;
}

.icono {
    color: #495057;             /* el SVG hereda con currentColor */
    display: flex;
    transition: color 0.25s, transform 0.25s;
}

.icono:hover {
    color: #0d6efd;
    transform: scale(1.15);
}

/* Variantes específicas */
.favorito:hover { color: #dc3545; }    /* corazón en rojo */
.carrito:hover  { color: #198754; }    /* carrito en verde */
.ajustes:hover svg {                    /* ajustes gira al hover */
    animation: girar 4s linear infinite;
}

@keyframes girar {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}

/* Activamos pulso solo en el favorito */
@keyframes latido {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.2); }
}

.favorito:hover svg {
    animation: latido 0.6s infinite;
}

/* Progreso */
.progreso-wrapper {
    margin-top: 40px;
}

.progreso {
    margin: 20px auto;
    display: block;
}
```

### Animación SVG con `@keyframes`

```css
@keyframes girar {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}

.ajustes svg {
    animation: girar 4s linear infinite;
    /*         nombre dur timing repeticiones */
}
```

| Parámetro | Para qué |
|-----------|----------|
| `nombre` | El `@keyframes` a usar. |
| `duración` | Cuánto dura cada ciclo (4s). |
| `timing` | `linear`, `ease`, `ease-in-out`, etc. |
| `iteration-count` | `infinite` o número. |
| `direction` | `normal`, `reverse`, `alternate`. |
| `delay` | Retraso antes de empezar. |

## Paso 7 — El círculo de progreso (explicación)

```html
<circle cx="60" cy="60" r="50" fill="none" stroke="#0d6efd"
        stroke-width="10" stroke-linecap="round"
        stroke-dasharray="314"
        stroke-dashoffset="78.5"
        transform="rotate(-90 60 60)"/>
```

| Atributo | Para qué |
|----------|----------|
| `r="50"` | Radio del círculo. |
| `stroke-dasharray="314"` | Perímetro = 2π·r ≈ 2·3.14·50 = 314. |
| `stroke-dashoffset="78.5"` | "Esconde" 78.5 unidades = 25% del perímetro. Por eso muestra el 75%. |
| `stroke-linecap="round"` | Extremos redondeados. |
| `transform="rotate(-90 60 60)"` | Gira -90° desde el centro (60,60), para empezar arriba en lugar de a la derecha. |

🔥 Truco: para animar `stroke-dashoffset` de 314 a 0 = animación de progreso de 0% a 100%.

## Paso 8 — `<symbol>` + `<use>` para reutilizar iconos

Si usas el mismo icono 20 veces, no lo escribas 20 veces. Defínelo una vez:

```html
<svg style="display: none">
    <symbol id="icono-corazon" viewBox="0 0 24 24">
        <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z"/>
    </symbol>
</svg>

<!-- Y úsalo así: -->
<svg width="24" height="24"><use href="#icono-corazon"/></svg>
<svg width="48" height="48"><use href="#icono-corazon"/></svg>
```

Ventaja: HTML más limpio. Si cambias el `<symbol>`, todas las instancias se actualizan.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Sin `viewBox` | El SVG no escala bien | SIEMPRE pon `viewBox`. |
| `fill` y `stroke` en negro por defecto | No se ve si el fondo es negro | Pon `fill="currentColor"` o color explícito. |
| `<img src="icono.svg">` y querer cambiarle color con CSS | No se puede | Usa SVG inline. |
| SVG sin `aria-label` o `<title>` | Lector de pantalla lo ignora | Pon `role="img" aria-label="..."` o `<title>` interno. |
| Animación `transform` sin `transform-origin` | Gira desde la esquina | Pon `transform-origin: center`. |
| SVG inline gigantísimo en el HTML | Te peta el HTML a 50KB | Optimiza con SVGO (https://jakearchibald.github.io/svgomg/). |
| Usar SVG para fotos | Solo sirve para vectores | Usa JPG/WebP. |
| `<svg>` sin `width`/`height` | Toma 300×150 por defecto (raro) | Pónlos o usa `width: 100%`. |
| `currentColor` no aplica | El SVG tiene `fill="black"` explícito | Quita el fill o ponlo a `currentColor`. |
| Iconos de Bootstrap Icons sin cargar el CSS | No se ven | Carga `bootstrap-icons.css`. |
| SVG con `<script>` recibido de fuera | XSS | Acepta solo SVGs propios. |
| Olvidar `xmlns` en SVG standalone | El archivo .svg solo no se abre | En SVG inline en HTML5 no hace falta. |

## Código HTML completo

(Ver Paso 5.)

## CSS completo (comentado)

(Ver Paso 6.)

## Cómo verificar

1. Abre `index.html`. Los 5 iconos en línea.
2. Pasa el ratón por encima:
   - Búsqueda → azul, crece.
   - Corazón → rojo, late.
   - Carrito → verde, crece.
   - Usuario → azul, crece.
   - Ajustes → gira.
3. **Zoom** (Ctrl + +) hasta 500% → los SVGs siguen nítidos. Si los iconos fueran PNG, se pixelarían.
4. **F12** → inspecciona el `<svg>` inline. Puedes modificar `fill` en vivo y ver el cambio.
5. **Accesibilidad**: con NVDA o el lector de Windows, navega por los iconos → debe anunciar "Buscar, enlace", "Favoritos, enlace"...

## Alternativas peores

### 1) Iconos como `<img>` cuando necesitas cambiar color

```html
<!-- ❌ no puedes cambiar el color con CSS -->
<img src="corazon.svg" alt="Favorito">
```

```css
.icono:hover { color: red; }   /* no afecta al SVG dentro del <img> */
```

Para cambiar el color tendrías que generar 2 SVGs (rojo y gris). Mejor inline.

### 2) Iconos como background-image y `mask`

```css
.icono {
    background-image: url('corazon.svg');
    /* ❌ no se puede cambiar color */
}
```

```css
.icono {
    -webkit-mask: url('corazon.svg');
    background: red;  /* funciona pero CSS más complejo */
}
```

### 3) Iconos como webfonts (Font Awesome viejo)

```html
<!-- 🟡 funciona pero cargas un fichero de fuente entero (200KB+) -->
<i class="fa fa-heart"></i>
```

Cargas TODO el set aunque uses 3 iconos. Mejor SVG inline con solo lo necesario.

### 4) PNG transparente con varios tamaños

```html
<img src="icono-16.png">   <!-- pequeño -->
<img src="icono-32.png">   <!-- mediano -->
<img src="icono-64.png">   <!-- grande -->
```

Necesitas un PNG por tamaño y por DPR (2x retina). Un solo SVG cubre todo.

### 5) SVG inline sin optimizar

Un SVG exportado de Illustrator puede tener `width="200px" height="200px" xmlns="..." xmlns:xlink="..." enable-background="..." id="..." y muchas otras cosas inútiles. Optimízalo con SVGO antes de pegarlo.

### 6) Animaciones SVG con JS cuando se puede con CSS

```javascript
// ❌ overkill para una rotación
function rotar() { ... }
```

```css
/* ✅ */
@keyframes girar { from { transform: rotate(0); } to { transform: rotate(360deg); } }
.icono { animation: girar 2s linear infinite; }
```

### 7) Subir un SVG con texto sin convertirlo a path

Si tu SVG usa una fuente que el navegador no tiene, el texto se renderiza con otra fuente. Para garantizar pixel-perfect, convierte el texto a `<path>` antes.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El SVG no se ve | Faltan `width`/`height` y el padre tampoco da medida | Pon `width="24" height="24"` o CSS. |
| El SVG se ve negro y no responde a `color` | Tiene `fill="black"` explícito | Cambia a `fill="currentColor"`. |
| `transform` rota desde una esquina | Sin `transform-origin: center` | Añádelo. |
| Animación pesa el navegador | Animar `path` o `d` es caro | Anima `transform` (GPU). |
| `<use href="#icono">` no funciona | Faltan los `<symbol>` o `id` mal escrito | Comprueba ID. |
| Iconos negros sobre fondo negro | No has definido color | `color: white` en el padre. |
| Lector de pantalla ignora el SVG | Falta `aria-label` o `<title>` | Añade uno. |
| El SVG se ve aplastado | `width` y `height` rompen la proporción del viewBox | Usa solo uno y deja el otro `auto`. |

## Lo que has aprendido

- Qué es SVG y por qué es vectorial.
- 3 formas de incluirlo: `<img>`, `background`, inline.
- Estructura: `viewBox`, `width`, `height`, `fill`, `stroke`.
- Elementos básicos: `<circle>`, `<rect>`, `<line>`, `<path>`, `<polygon>`, `<text>`, `<g>`.
- `currentColor` para que el SVG herede el `color` del padre.
- Animaciones CSS sobre SVG con `@keyframes`.
- Trucos de `stroke-dasharray` y `stroke-dashoffset` para círculos de progreso.
- `<symbol>` + `<use>` para reutilizar iconos.
- Accesibilidad: `role="img"`, `aria-label`, `<title>`.
- Optimización con SVGO.
