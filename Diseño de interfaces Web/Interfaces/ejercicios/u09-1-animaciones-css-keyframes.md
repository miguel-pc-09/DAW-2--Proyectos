# Ejercicio U9.1 — Animaciones CSS: spinner, fade-in y typewriter

> 📚 Unidad 9 · Contenido interactivo
> ⏱️ Tiempo: 30-40 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: dominar `@keyframes` y la propiedad `animation` con 3 animaciones clásicas.

## Enunciado

Página con 3 animaciones puramente CSS (sin JS):

1. **Spinner de carga** (círculo que rota infinitamente).
2. **Fade-in en cascada** (las tarjetas aparecen una tras otra al cargar la página).
3. **Typewriter** (texto que se escribe letra a letra).

Bonus: `prefers-reduced-motion` para usuarios sensibles.

---

## ¿Qué vas a aprender?

- Diferencia entre `transition` y `animation`.
- `@keyframes` (declaración) + `animation` (uso).
- Todas las propiedades de `animation`: name, duration, timing, delay, iteration-count, direction, fill-mode, play-state.
- Atajo `animation: ...` (orden).
- Funciones de timing: `linear`, `ease`, `cubic-bezier`, `steps()`.
- `transform-origin` para rotaciones desde un punto.
- Animaciones con `transform` (rendimiento GPU).
- `animation-delay` negativo (truco para sincronizar).
- `@media (prefers-reduced-motion)` para accesibilidad.

## Cómo va a quedar (boceto ASCII)

```
+------------------------------+
|                              |
|      ↺ (girando)            |   ← spinner infinito
|                              |
|      Cargando datos...       |
|                              |
+------------------------------+
|                              |
|  ┌──┐  ┌──┐  ┌──┐  ┌──┐     |   ← 4 tarjetas
|  │ 1│  │ 2│  │ 3│  │ 4│     |     aparecen con
|  └──┘  └──┘  └──┘  └──┘     |     delay 0.2s, 0.4s...
|                              |
+------------------------------+
|                              |
|  Hola, soy un texto que_     |   ← typewriter
|  se escribe solo|            |     (el cursor parpadea)
|                              |
+------------------------------+
```

---

## Paso 1 — `transition` vs `animation`

| Aspecto | `transition` | `animation` |
|---------|--------------|-------------|
| Cuándo se dispara | En un cambio de estado (hover, click, clase añadida) | Al cargar el elemento (o cuando le aplicas la animación) |
| Complejidad | De un valor inicial a uno final | Múltiples puntos intermedios |
| Bucle | No | Sí (`iteration-count: infinite`) |
| Control | Limitado | Total |
| Sintaxis | `transition: prop dur` | `@keyframes ... animation: name dur` |

🔥 Si **respondes a una acción del usuario** → transition. Si la animación es **independiente** (siempre activa o automática) → animation.

## Paso 2 — Animación 1: Spinner de carga

```html
<div class="loader-wrapper">
    <div class="spinner"></div>
    <p>Cargando datos...</p>
</div>
```

```css
.loader-wrapper {
    text-align: center;
    padding: 40px;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #e9ecef;       /* fondo gris claro */
    border-top-color: #0d6efd;        /* solo arriba: azul */
    border-radius: 50%;
    margin: 0 auto 20px;
    animation: girar 1s linear infinite;
}

@keyframes girar {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}
```

### Por qué funciona el truco

- 4 bordes del círculo: 3 grises, 1 azul.
- Al rotar 360°, parece que solo gira el "trozo azul" siguiendo el círculo.
- `border-radius: 50%` lo hace circular.

### La propiedad `animation` explicada

```css
animation: girar 1s linear infinite;
/*         ↑     ↑   ↑      ↑
           |     |   |      └─ iteration-count: infinite
           |     |   └──────── timing: linear (velocidad constante)
           |     └──────────── duration: 1 segundo
           └────────────────── name: el keyframe a usar
*/
```

Orden completo:

```css
animation: <name> <duration> <timing> <delay> <iteration-count> <direction> <fill-mode> <play-state>;
```

Versión expandida:

```css
.spinner {
    animation-name: girar;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
}
```

## Paso 3 — Animación 2: Fade-in en cascada

```html
<div class="grid">
    <div class="tarjeta">1</div>
    <div class="tarjeta">2</div>
    <div class="tarjeta">3</div>
    <div class="tarjeta">4</div>
</div>
```

```css
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 40px;
}

.tarjeta {
    background: #0d6efd;
    color: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    font-size: 24px;

    /* Estado inicial: invisible y desplazada */
    opacity: 0;
    transform: translateY(20px);

    /* La animación: */
    animation: aparecer 0.6s ease-out forwards;
}

.tarjeta:nth-child(1) { animation-delay: 0.0s; }
.tarjeta:nth-child(2) { animation-delay: 0.2s; }
.tarjeta:nth-child(3) { animation-delay: 0.4s; }
.tarjeta:nth-child(4) { animation-delay: 0.6s; }

@keyframes aparecer {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### El truco de `animation-fill-mode: forwards`

Por defecto, al **terminar** una animación, el elemento vuelve a su estado original (lo que dice el CSS sin animación).

| `fill-mode` | Qué hace |
|-------------|----------|
| `none` (default) | Antes y después: estado del CSS. |
| `forwards` | Al terminar, **mantiene** el estado final (`to`). |
| `backwards` | Antes de empezar (durante el delay), aplica el estado inicial (`from`). |
| `both` | Las dos cosas. |

🔥 Sin `forwards`, después del fade-in las tarjetas volverían a `opacity: 0`. Con `forwards`, se quedan visibles.

### `animation-delay` para crear cascadas

Cada tarjeta empieza 0.2s después que la anterior → efecto de "ola".

🔥 **Mejor con `--delay` variable**:

```css
.tarjeta {
    animation-delay: calc(var(--i) * 0.2s);
}
```

```html
<div class="tarjeta" style="--i: 1">1</div>
<div class="tarjeta" style="--i: 2">2</div>
<div class="tarjeta" style="--i: 3">3</div>
```

Así no escribes 4 selectores `nth-child`.

## Paso 4 — Animación 3: Typewriter

```html
<div class="typewriter">
    <h2>Hola, soy un texto que se escribe solo</h2>
</div>
```

```css
.typewriter h2 {
    font-family: 'Courier New', monospace;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #0d6efd;
    width: 0;
    animation:
        escribir 4s steps(40, end) forwards,
        cursor 0.7s step-end infinite;
}

@keyframes escribir {
    from { width: 0; }
    to   { width: 100%; }
}

@keyframes cursor {
    from, to { border-color: transparent; }
    50%      { border-color: #0d6efd; }
}
```

### Por qué `steps(40, end)`

`steps(N, position)` es una función de timing **discreta**: en lugar de animar suavemente, lo hace en N "saltos". Para typewriter:

- 40 saltos = aproximadamente 40 caracteres → cada salto revela una letra.
- `end` = el salto ocurre al final de cada paso (la versión típica).
- `start` = el salto al principio (raro).

Sin `steps`, la animación sería suave (las letras "se deslizarían"). Con `steps`, parece máquina de escribir.

### Combinar varias animaciones

```css
animation:
    escribir 4s steps(40, end) forwards,
    cursor 0.7s step-end infinite;
```

Dos animaciones simultáneas, separadas por coma:

1. `escribir` — la del texto (4s, una vez).
2. `cursor` — la del parpadeo del borde derecho (0.7s, infinita).

🔥 **Limitación**: el typewriter solo funciona bien con una línea. Si el texto envuelve, se rompe. Para multi-línea hay que ser más creativo (o usar JS).

## Paso 5 — Funciones de timing

```css
animation: rebotar 1s ease-in-out infinite;
```

| Timing | Curva |
|--------|-------|
| `linear` | Velocidad constante (━━━━━). |
| `ease` (default) | Empieza lento, rápido en medio, frena al final. |
| `ease-in` | Empieza lento. |
| `ease-out` | Acaba lento (sensación natural). |
| `ease-in-out` | Lento al principio Y al final. |
| `cubic-bezier(0.x, 0.y, 0.x, 0.y)` | Personalizado (https://cubic-bezier.com). |
| `steps(N, end/start)` | Discreto, sin interpolar. |
| `step-end` | Equivale a `steps(1, end)`: salta al final. |
| `step-start` | Equivale a `steps(1, start)`: salta al inicio. |

Para botones, `ease-out` da una sensación natural ("se posa suavemente").

## Paso 6 — `prefers-reduced-motion` (accesibilidad)

Algunas personas tienen **vértigo o náuseas** con animaciones. El sistema operativo permite desactivarlas globalmente. Detéctalo:

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

Esta media query las desactiva todas (las hace ultra rápidas).

🔥 **Tu spinner sigue funcionando** porque se reemplaza por un círculo "estático" (no llega a girar). Pero el fade-in y el typewriter quedan instantáneos, mucho más cómodos.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Olvidar `@keyframes` | La animación no hace nada | Define los keyframes antes del `animation`. |
| Nombre de keyframe no coincide | Se ignora silenciosamente | Verifica que coinciden. |
| Sin `forwards` y elemento vuelve atrás | Comportamiento por defecto | Pon `animation-fill-mode: forwards`. |
| Animar `width`/`height` | Caro (relayout) | Anima `transform: scale()` mejor. |
| `transform-origin` no especificado | Rota desde la esquina | Pon `transform-origin: center`. |
| Spinner pesa el navegador | Anima `background` | Usa `transform`. |
| Typewriter con texto largo que envuelve | Se rompe | Pon `white-space: nowrap` y caracteres exactos. |
| `steps(20)` con texto de 30 letras | Solo aparecen 20 | Ajusta el número de pasos. |
| Animar `display` | No se puede animar | Anima `opacity` + `visibility`. |
| `animation: none` para reset | Cuidado si lo aplicas globalmente | Mejor `animation: anim 0s` para resetear. |
| Olvidar `prefers-reduced-motion` | Personas con vértigo sufren | Añade la media query. |
| `delay` muy largo y usuario espera | Mala UX | Mantén delays cortos (0.1-0.3s). |
| Animación infinita y dejar la pestaña abierta | Consume CPU sin parar | Pausar con `animation-play-state: paused` cuando no es visible. |

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animaciones CSS</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <main>

        <!-- 1. SPINNER -->
        <section class="loader-wrapper">
            <div class="spinner"></div>
            <p>Cargando datos...</p>
        </section>

        <!-- 2. FADE-IN EN CASCADA -->
        <section class="grid">
            <div class="tarjeta" style="--i: 1">1</div>
            <div class="tarjeta" style="--i: 2">2</div>
            <div class="tarjeta" style="--i: 3">3</div>
            <div class="tarjeta" style="--i: 4">4</div>
        </section>

        <!-- 3. TYPEWRITER -->
        <section class="typewriter">
            <h2>Hola, soy un texto que se escribe solo</h2>
        </section>

    </main>
</body>
</html>
```

## CSS completo (comentado)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    background: #f8f9fa;
}

main {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px;
}

section {
    background: white;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

/* ====== 1. SPINNER ====== */
.loader-wrapper {
    text-align: center;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #e9ecef;
    border-top-color: #0d6efd;
    border-radius: 50%;
    margin: 0 auto 20px;
    animation: girar 1s linear infinite;
}

@keyframes girar {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}

/* ====== 2. FADE-IN ====== */
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.tarjeta {
    background: #0d6efd;
    color: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    font-size: 24px;
    opacity: 0;
    transform: translateY(20px);
    animation: aparecer 0.6s ease-out forwards;
    animation-delay: calc(var(--i) * 0.15s);
}

@keyframes aparecer {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ====== 3. TYPEWRITER ====== */
.typewriter {
    text-align: center;
}

.typewriter h2 {
    display: inline-block;
    font-family: 'Courier New', monospace;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #0d6efd;
    width: 0;
    animation:
        escribir 4s steps(40, end) forwards,
        cursor 0.7s step-end infinite;
}

@keyframes escribir {
    from { width: 0; }
    to   { width: 100%; }
}

@keyframes cursor {
    from, to { border-color: transparent; }
    50%      { border-color: #0d6efd; }
}

/* ====== ACCESIBILIDAD ====== */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* ====== RESPONSIVE ====== */
@media (max-width: 700px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 400px) {
    .grid { grid-template-columns: 1fr; }
}
```

## Cómo verificar

1. Abre `index.html`. Al cargar:
   - Spinner gira sin parar.
   - Tarjetas aparecen una tras otra (delay creciente).
   - Texto se escribe con efecto máquina + cursor parpadeante.
2. **Recarga** (F5) → todas se reproducen otra vez (las que no son infinitas).
3. **F12 → Elements** → busca un `.tarjeta` y verás `animation-delay` calculado.
4. **DevTools Animations panel**: F12 → Esc para abrir drawer → activa "Animations" → puedes reducir velocidad o pausar globalmente.
5. **Cambia el SO a "reducir movimiento"** (Windows: Configuración → Accesibilidad → Efectos visuales → Animaciones). Recarga: animaciones casi instantáneas.

## Alternativas peores

### 1) Spinner con JS

```javascript
// ❌ JS para algo que se puede CSS
let deg = 0;
setInterval(() => {
    spinner.style.transform = `rotate(${deg++}deg)`;
}, 16);
```

CSS lo hace gratis y mejor (GPU).

### 2) Spinner con GIF

```html
<img src="loading.gif">
```

Funciona pero: pesa más, no escala, no se puede recolorear, los lectores de pantalla lo anuncian raro. Spinner CSS es 200 bytes.

### 3) Fade-in con JavaScript

```javascript
const elements = document.querySelectorAll('.tarjeta');
elements.forEach((el, i) => {
    setTimeout(() => el.style.opacity = 1, i * 200);
});
```

CSS lo hace solo con `nth-child` + delay.

### 4) Animar `top` o `left` para mover

```css
@keyframes mover {
    from { left: 0; }
    to   { left: 200px; }
}
```

Caro: provoca **relayout** en cada frame. Usa `transform: translate()` (GPU).

### 5) `animation: all 1s` (no existe)

```css
/* ❌ */
animation: all 1s;
```

`animation` necesita un nombre de keyframe, no funciona como transition.

### 6) Más de 60 fps

```css
/* ❌ inútil — el navegador refresca a 60 Hz típicamente */
animation: girar 16ms linear infinite;
```

16ms = 60 fps. Más rápido es indistinguible. Y rompe el rendimiento.

### 7) Animar 20 propiedades simultáneamente

```css
@keyframes mucho {
    from { width: 0; height: 0; background: red; left: 0; opacity: 0; }
    to   { width: 200px; height: 200px; background: blue; left: 100px; opacity: 1; }
}
```

Cuanto más complejo, más caro. Anima solo `transform` + `opacity` para máximo rendimiento.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| La animación no se ejecuta | `@keyframes` o nombre mal escrito | Verifica nomenclatura. |
| Elemento vuelve al estado inicial al acabar | Sin `forwards` | Pon `animation-fill-mode: forwards`. |
| Spinner rota desde la esquina | Sin `transform-origin: center` (por defecto en círculos OK) | Asegúrate de que es cuadrado. |
| Typewriter "salta" al final | El `width: 100%` puede sobrar texto | Calcula los `ch` exactos o usa `text-overflow`. |
| Tarjetas todas a la vez | Falta `animation-delay` distinto | Aplica delay por `nth-child` o `--i`. |
| Animación demasiado lenta o rápida | `duration` mal | Ajusta. |
| Bucle infinito consume CPU | Es lo esperado para spinner | Páusalo cuando no esté visible (usa IntersectionObserver con JS si quieres). |
| `prefers-reduced-motion` no detecta nada | Tu sistema no tiene activado el modo | Es opcional, te respeta cuando lo activa el usuario. |
| Animación parpadea en Safari | A veces `transform: translateZ(0)` ayuda (capa propia) | Añade `will-change: transform`. |

## Lo que has aprendido

- Diferencia clara entre `transition` y `animation`.
- `@keyframes` con `from`/`to` o `0%`/`50%`/`100%`.
- Propiedad `animation` completa con todas sus sub-propiedades.
- Orden de la shorthand: `name dur timing delay count direction fill-mode state`.
- Funciones de timing: `linear`, `ease`, `cubic-bezier`, `steps()`, `step-end`.
- `animation-fill-mode: forwards` para mantener el estado final.
- `animation-delay` para cascadas.
- `transform: rotate / scale / translate` para animar (GPU friendly).
- Combinar varias animaciones con coma.
- Variables CSS (`--i`) para delays escalables.
- `@media (prefers-reduced-motion: reduce)` para accesibilidad.
- Por qué NO usar JS para lo que CSS hace solo.
