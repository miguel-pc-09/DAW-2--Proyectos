# Ejercicio U5.1 — Layout 3 columnas → 2 → 1 con media queries

> 📚 Unidad 5 · Diseño responsive
> ⏱️ Tiempo: 25-30 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: dominar las **media queries** y la estrategia de breakpoints.

## Enunciado

Página con 6 tarjetas de "Servicios". Comportamiento responsive:

- **Desktop** (≥ 992px): 3 columnas.
- **Tablet** (700-991px): 2 columnas.
- **Móvil** (< 700px): 1 columna.
- Tipografía y padding también se adaptan.
- Header con título centrado, también ajustable.

---

## ¿Qué vas a aprender?

- Qué es una **media query** (`@media`) y por qué existe.
- La etiqueta clave: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- Tipos de media features: `width`, `max-width`, `min-width`, `orientation`, `prefers-color-scheme`, `prefers-reduced-motion`.
- **Breakpoints** habituales (576, 768, 992, 1200) y cómo elegirlos.
- Diferencia entre **mobile-first** (`min-width`) y **desktop-first** (`max-width`).
- Unidades responsive: `%`, `vw`, `vh`, `vmin`, `vmax`, `em`, `rem`, `ch`.
- `clamp()` para valores fluidos sin media queries.
- Cómo usar el modo responsive del navegador.

## Cómo va a quedar (boceto ASCII)

```
DESKTOP (1200px)              TABLET (800px)           MÓVIL (375px)
┌────────────────────┐       ┌──────────────┐         ┌────────┐
│   NUESTROS SERV.   │       │ Servicios    │         │ Serv.  │
├────────────────────┤       ├──────────────┤         ├────────┤
│ ┌──┐ ┌──┐ ┌──┐    │       │ ┌──┐ ┌──┐    │         │ ┌──┐   │
│ │ 1│ │ 2│ │ 3│    │       │ │ 1│ │ 2│    │         │ │ 1│   │
│ └──┘ └──┘ └──┘    │       │ └──┘ └──┘    │         │ └──┘   │
│ ┌──┐ ┌──┐ ┌──┐    │       │ ┌──┐ ┌──┐    │         │ ┌──┐   │
│ │ 4│ │ 5│ │ 6│    │       │ │ 3│ │ 4│    │         │ │ 2│   │
│ └──┘ └──┘ └──┘    │       │ └──┘ └──┘    │         │ └──┘   │
└────────────────────┘       │ ┌──┐ ┌──┐    │         │ ┌──┐   │
                             │ │ 5│ │ 6│    │         │ │ 3│   │
                             │ └──┘ └──┘    │         │ └──┘   │
                             └──────────────┘         │ ...    │
                                                      └────────┘
```

---

## Paso 1 — La etiqueta `<meta viewport>` (sin esto NADA funciona)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Sin esta línea en el `<head>`, los móviles asumen que tu página está pensada para 980px y **la zoomean** hasta caber. Tus media queries `(max-width: 700px)` no se dispararían nunca porque el móvil "se cree" un desktop de 980px.

| Parte | Qué significa |
|-------|----------------|
| `name="viewport"` | Metadata del área visible. |
| `width=device-width` | El ancho del viewport = ancho real del dispositivo. |
| `initial-scale=1.0` | Sin zoom inicial. |

🔥 **Sin esta etiqueta el responsive no existe**. Es la primera línea que se revisa cuando algo no se ve bien en móvil.

## Paso 2 — HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios — Responsive</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <header>
        <h1>Nuestros Servicios</h1>
        <p>Lo que podemos hacer por ti</p>
    </header>

    <main class="grid-servicios">
        <article class="servicio">
            <div class="icono">📱</div>
            <h2>Desarrollo móvil</h2>
            <p>Apps iOS y Android nativas.</p>
        </article>
        <article class="servicio">
            <div class="icono">🌐</div>
            <h2>Web</h2>
            <p>Sitios responsive con HTML, CSS y JS.</p>
        </article>
        <article class="servicio">
            <div class="icono">🎨</div>
            <h2>Diseño UX/UI</h2>
            <p>Interfaces que enamoran.</p>
        </article>
        <article class="servicio">
            <div class="icono">⚙️</div>
            <h2>Backend</h2>
            <p>APIs y arquitectura escalable.</p>
        </article>
        <article class="servicio">
            <div class="icono">📊</div>
            <h2>Data</h2>
            <p>Analítica y visualización.</p>
        </article>
        <article class="servicio">
            <div class="icono">🔒</div>
            <h2>Seguridad</h2>
            <p>Auditoría y hardening.</p>
        </article>
    </main>
</body>
</html>
```

## Paso 3 — CSS base (mobile-first)

🔥 Estrategia **mobile-first**: empezamos con los estilos para móvil y vamos **añadiendo** reglas para pantallas más grandes con `min-width`.

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f8f9fa;
    color: #212529;
}

/* === HEADER === */
header {
    padding: 30px 20px;
    text-align: center;
    background: white;
    border-bottom: 1px solid #dee2e6;
}

header h1 {
    font-size: 1.5rem;            /* 24px en móvil */
    margin-bottom: 8px;
}

header p {
    color: #6c757d;
    font-size: 0.95rem;
}

/* === GRID DE SERVICIOS (móvil: 1 columna) === */
.grid-servicios {
    display: grid;
    grid-template-columns: 1fr;   /* una columna */
    gap: 16px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.servicio {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    text-align: center;
}

.icono {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.servicio h2 {
    font-size: 1.1rem;
    margin-bottom: 8px;
}

.servicio p {
    color: #6c757d;
    font-size: 0.9rem;
}
```

## Paso 4 — Media queries (añadiendo a partir de tablet)

```css
/* === TABLET: 2 columnas (a partir de 700px) === */
@media (min-width: 700px) {
    .grid-servicios {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 30px;
    }

    header h1 {
        font-size: 2rem;          /* 32px */
    }
}

/* === DESKTOP: 3 columnas (a partir de 992px) === */
@media (min-width: 992px) {
    .grid-servicios {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        padding: 40px;
    }

    header {
        padding: 50px 20px;
    }

    header h1 {
        font-size: 2.5rem;        /* 40px */
    }
}
```

### Por qué mobile-first

Sintaxis equivalente desktop-first:

```css
/* DESKTOP-FIRST (no recomendado) */
.grid-servicios { grid-template-columns: repeat(3, 1fr); }   /* base */

@media (max-width: 991px) {
    .grid-servicios { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 699px) {
    .grid-servicios { grid-template-columns: 1fr; }
}
```

Ambas funcionan, pero **mobile-first** tiene ventajas:

- El móvil carga menos CSS al inicio.
- Es más fácil añadir un nuevo breakpoint encima sin tocar lo de abajo.
- Filosofía moderna: el móvil ya no es la "excepción".

## Paso 5 — Breakpoints habituales

Los más usados (igual que Bootstrap):

| Nombre | min-width | Dispositivo típico |
|--------|-----------|--------------------|
| xs | 0 | Móvil portrait |
| sm | 576px | Móvil landscape |
| md | 768px | Tablet portrait |
| lg | 992px | Desktop pequeño |
| xl | 1200px | Desktop grande |
| xxl | 1400px | Desktop full HD |

🔥 **No los memorices a la fuerza**: lo importante es ELEGIR los breakpoints **donde tu diseño se rompe**, no donde te lo dice el manual. Si tu galería de 3 columnas se ve apretada a 850px, ahí va el breakpoint, no a 992.

## Paso 6 — Tipos de media queries útiles

### Por orientación

```css
@media (orientation: landscape) { ... }   /* horizontal */
@media (orientation: portrait)  { ... }   /* vertical */
```

### Por capacidades del usuario

```css
@media (prefers-color-scheme: dark) {
    body { background: #1a1a1a; color: white; }
}

@media (prefers-reduced-motion: reduce) {
    * { transition: none !important; animation: none !important; }
}

@media (hover: none) {                /* sin ratón = táctil */
    .menu a:hover { color: inherit; }
}
```

### Por densidad de pantalla

```css
@media (min-resolution: 2dppx) {     /* retina/HD */
    .logo { background-image: url('logo@2x.png'); }
}
```

### Combinadas con AND / OR

```css
@media (min-width: 700px) and (max-width: 991px) {
    /* solo entre 700 y 991 */
}

@media (max-width: 700px), (orientation: portrait) {
    /* menos de 700 O en portrait */
}
```

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Olvidar `<meta viewport>` | El móvil se cree desktop, media queries no disparan | Pon la meta SIEMPRE. |
| Mezclar `max-width` y `min-width` sin orden | Reglas se solapan, comportamiento errático | Elige UN enfoque (mobile o desktop first). |
| Breakpoints arbitrarios | Saltos visuales raros | Pon breakpoints donde **el diseño se rompe**. |
| `width: 100%` en imagen sin `height: auto` | Se deforma | `width: 100%; height: auto;` es la pareja clásica. |
| Tamaños en `px` sin clamp | Texto enorme en desktop o microscópico en móvil | Usa `rem`, `vw` o `clamp()`. |
| `100vh` en móvil | Incluye la barra del navegador → contenido tapado | Usa `100dvh` (dynamic viewport height) o cuenta con ello. |
| `min-width: 768px` en mobile-first y otro `max-width: 767px` | Se solapan en 767-768 | Define rangos exclusivos. |
| Esconder contenido con `display: none` en móvil | Mal SEO, mal accesibilidad | Asegúrate que esa info no es esencial. |
| Cargar imágenes pesadas en móvil | Datos del usuario, lentitud | Usa `<picture>` o `srcset` (próximo tema). |
| Olvidar el zoom del usuario | `user-scalable=no` se ignora en iOS y rompe accesibilidad | NUNCA pongas `user-scalable=no`. |
| Texto demasiado ancho en desktop | Más de 80 caracteres → cuesta leer | `max-width: 65ch` para párrafos. |

## `clamp()` — el santo grial del fluid design

`clamp(MIN, IDEAL, MAX)` te da un valor entre 3 límites:

```css
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
    /*           mínimo  ideal   máximo */
}
```

Significa: "queremos `4vw` (4% del ancho del viewport), pero nunca menor que 1.5rem ni mayor que 3rem". Resultado: tipografía fluida sin media queries.

Otros ejemplos:

```css
.contenedor {
    width: clamp(320px, 90%, 1200px);
    padding: clamp(15px, 3vw, 40px);
}
```

## Código HTML completo

(Ver Paso 2.)

## CSS completo (comentado)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f8f9fa;
    color: #212529;
}

/* ===== HEADER ===== */
header {
    padding: 30px 20px;
    text-align: center;
    background: white;
    border-bottom: 1px solid #dee2e6;
}

header h1 {
    /* clamp: nunca menor que 1.5rem, ideal 4vw, máximo 2.5rem */
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 8px;
}

header p {
    color: #6c757d;
    font-size: clamp(0.9rem, 2vw, 1.05rem);
}

/* ===== GRID DE SERVICIOS (mobile-first: 1 columna) ===== */
.grid-servicios {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.servicio {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    text-align: center;
    transition: transform 0.2s;
}

.servicio:hover {
    transform: translateY(-3px);
}

.icono {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.servicio h2 {
    font-size: 1.1rem;
    margin-bottom: 8px;
}

.servicio p {
    color: #6c757d;
    font-size: 0.9rem;
}

/* ===== TABLET (≥ 700px): 2 columnas ===== */
@media (min-width: 700px) {
    .grid-servicios {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 30px;
    }
}

/* ===== DESKTOP (≥ 992px): 3 columnas ===== */
@media (min-width: 992px) {
    .grid-servicios {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        padding: 40px;
    }

    header {
        padding: 50px 20px;
    }
}

/* ===== Bonus: dark mode automático ===== */
@media (prefers-color-scheme: dark) {
    body {
        background: #121212;
        color: #e0e0e0;
    }
    header, .servicio {
        background: #1f1f1f;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    }
    header p, .servicio p {
        color: #adb5bd;
    }
}
```

## Cómo verificar responsive (modo DevTools)

1. Abre `index.html` en Chrome o Edge.
2. **F12** para abrir DevTools.
3. Clic en el ícono de móvil/tablet en la barra superior (Toggle device toolbar) o **Ctrl + Shift + M**.
4. Modos:
   - **Responsive**: arrastra para cambiar ancho libremente. Útil para encontrar dónde se rompe.
   - **Dispositivos predefinidos**: iPhone, iPad, Galaxy, etc.
5. Pon el ancho a 375px → 1 columna.
6. Sube a 800px → 2 columnas.
7. Sube a 1200px → 3 columnas.
8. **Trucos**:
   - El número del ancho actual aparece en la parte superior.
   - Botón giratorio para alternar portrait/landscape.
   - Botón "throttling" para simular 3G lento.
   - DPR (Device Pixel Ratio) configurable.
9. **Prueba real**: abre tu IP local desde el móvil (`http://192.168.X.X:5500` con Live Server de VS Code).

## Alternativas peores

### 1) Sin `<meta viewport>`

```html
<head>
    <title>Mi web</title>
    <!-- ❌ falta el viewport -->
</head>
```

En móvil tu web se ve como desktop comprimido (texto microscópico, hay que zoomear). Las media queries no disparan.

### 2) `user-scalable=no`

```html
<!-- ❌ NO HACER -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1">
```

Esto impide al usuario hacer zoom. **Es un fallo grave de accesibilidad**: las personas con problemas de visión necesitan poder hacer zoom. iOS ignora `user-scalable=no` en iOS 13+ por esta razón.

### 3) Diseño desktop-first con media queries solapadas

```css
.grid { grid-template-columns: repeat(3, 1fr); }

@media (max-width: 991px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
@media (max-width: 768px) { .grid { gap: 10px; } }   /* SE SUPERPONE */
```

Funciona pero es difícil de mantener. Mobile-first lo simplifica.

### 4) Anchos fijos en `px`

```css
/* ❌ no es responsive */
.contenedor { width: 1200px; }
```

En cualquier pantalla < 1200px sale scroll horizontal. Usa `max-width: 1200px; width: 100%`.

### 5) Esconder contenido importante en móvil

```css
@media (max-width: 700px) {
    .sidebar { display: none; }
}
```

¿Y si la sidebar tiene info clave? El usuario móvil la pierde. Reorganiza, no escondas.

### 6) `vh` sin pensar en móvil

```css
.hero {
    height: 100vh;     /* en móvil esto incluye la barra del navegador */
}
```

Cuando aparece la barra de URL, el `100vh` cambia y tu hero "salta". Usa `100dvh` (dynamic) o asume el comportamiento.

### 7) Pegar 47 media queries idénticas

```css
@media (max-width: 1199px) { .a { ... } }
@media (max-width: 1199px) { .b { ... } }
@media (max-width: 1199px) { .c { ... } }
/* ... */
```

Agrupa todo lo que cambia en un mismo breakpoint dentro de UNA media query.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El móvil no aplica el responsive | Falta `<meta viewport>` | Añádela. |
| Las columnas no cambian | Selector mal escrito en la media query | Verifica selectores y unidades. |
| Salto raro entre 991 y 992 | Rangos solapados | Usa `min-width: 992px` y `max-width: 991px`. |
| Imágenes se deforman | Falta `height: auto` | Combínalo con `width: 100%`. |
| Scroll horizontal en móvil | Hay un elemento más ancho que el viewport | Busca con `*` y `outline: 1px solid red`. |
| El `clamp()` no se aplica | Navegador muy viejo | Cae al valor `max`. Ten un fallback `font-size: 1.5rem`. |
| Hover queda "pegado" en móvil táctil | El usuario tocó, se quedó el `:hover` | Usa `@media (hover: hover)` para los efectos hover. |
| El `prefers-color-scheme` no cambia | El sistema operativo no lo soporta o no está en modo oscuro | Es opcional, no esperes que dispare siempre. |

## Lo que has aprendido

- `<meta viewport>` (línea OBLIGATORIA).
- `@media (min-width)` para mobile-first.
- Breakpoints habituales (576, 768, 992, 1200).
- `prefers-color-scheme`, `prefers-reduced-motion`, `orientation`, `hover`.
- Unidades responsive: `%`, `vw`, `vh`, `em`, `rem`, `ch`, `dvh`.
- `clamp(min, ideal, max)` para fluid sin media queries.
- DevTools modo responsive (Ctrl + Shift + M).
- Por qué NO usar `user-scalable=no`.
- Anchos máximos con `max-width: 1200px; width: 100%`.
