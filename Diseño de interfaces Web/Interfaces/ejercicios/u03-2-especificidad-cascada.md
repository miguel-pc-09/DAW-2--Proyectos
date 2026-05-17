# Ejercicio U3.2 — Laboratorio de especificidad y cascada CSS

> 📚 Unidad 3 · Introducción a CSS
> ⏱️ Tiempo: 30-40 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: dominar la **especificidad**, la **cascada**, la **herencia** y el orden de aplicación.

## Enunciado

Vas a construir un menú de navegación con 5 enlaces. La parte interesante: el cliente quiere que el **3er enlace** sea de un color especial cuando es la página activa, pero hay **6 reglas CSS** que compiten por el color de los enlaces. Tu trabajo: ordenarlas y aplicar la especificidad correcta para que se vea como pide.

Estado deseado:

- Enlaces normales: gris oscuro (`#495057`).
- Al pasar el ratón: azul (`#0d6efd`).
- Enlace activo (3º): amarillo (`#ffc107`) y subrayado, con **mayor** especificidad que el `:hover`.
- Cuando el activo tiene hover: naranja (`#fd7e14`).

---

## ¿Qué vas a aprender?

- Cómo se **calcula la especificidad** (peso: inline, id, class/pseudoclass/attr, tipo).
- Por qué un selector con `!important` no es la solución mágica (es bomba de relojería).
- Diferencia entre **cascada** (orden) y **especificidad** (peso).
- Propiedades que se **heredan** (`color`, `font-family`, `line-height`) y las que **no** (`border`, `padding`, `margin`, `background`).
- Pseudoclases combinadas (`:hover` + `.activo`).
- `:nth-child()`, `:first-child`, `:last-child`.
- Selectores combinadores: descendente (`a b`), hijo directo (`a > b`), hermano adyacente (`a + b`), hermano general (`a ~ b`).
- Selectores de atributo (`[href^="https"]`, `[lang|="en"]`).

## Cómo va a quedar (boceto ASCII)

```
┌────────────────────────────────────────────────────────┐
│  Inicio | Productos | SERVICIOS | Blog | Contacto       │
│                       (amarillo)                        │
└────────────────────────────────────────────────────────┘

Hover sobre Inicio    → azul (#0d6efd)
Hover sobre Servicios → naranja (#fd7e14), porque es el activo
```

---

## Paso 1 — Estructura HTML del menú

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Especificidad CSS</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <nav id="menu-principal" class="navegacion">
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/servicios" class="activo">Servicios</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contacto" data-tipo="externo">Contacto</a></li>
        </ul>
    </nav>
</body>
</html>
```

### Observaciones

- `<nav>` con `id="menu-principal"` (único) y `class="navegacion"` (reutilizable).
- El 3er `<li>` tiene `<a class="activo">`.
- El 5º tiene `data-tipo="externo"` para practicar selectores de atributo.

## Paso 2 — Cómo calcula la especificidad el navegador

El navegador asigna a cada selector un "peso" en formato `(a, b, c)`:

| Posición | Cuenta | Ejemplo |
|----------|--------|---------|
| `a` | ids | `#menu-principal` → (1, 0, 0) |
| `b` | clases, pseudoclases, atributos | `.activo`, `:hover`, `[data-tipo]` → (0, 1, 0) |
| `c` | tipos y pseudoelementos | `a`, `nav`, `::before` → (0, 0, 1) |

Cuando dos reglas se aplican al mismo elemento, **gana la de mayor peso** comparando de izquierda a derecha.

Ejemplos:

| Selector | (a, b, c) | "Peso" en pseudo-decimal |
|----------|-----------|--------------------------|
| `a` | (0, 0, 1) | 1 |
| `nav a` | (0, 0, 2) | 2 |
| `.activo` | (0, 1, 0) | 10 |
| `nav .activo` | (0, 1, 1) | 11 |
| `nav ul li a:hover` | (0, 1, 4) | 14 |
| `#menu-principal a` | (1, 0, 1) | 101 |
| `#menu-principal .activo` | (1, 1, 0) | 110 |
| `#menu-principal a.activo:hover` | (1, 2, 1) | 121 |

🔥 **Truco**: aunque pongas 100 selectores de tipo, jamás superas a 1 clase. (0,0,100) < (0,1,0).

### Reglas que **rompen** la especificidad normal

1. **`!important`** — gana siempre, ignora el peso. Salvo que haya otro `!important` con más peso.
2. **`style="..."`** (inline) — equivale a peso (1,0,0,0). Gana a casi todo, excepto a `!important`.
3. **Orden en la cascada** — si hay empate de especificidad, la **última regla** declarada gana.

## Paso 3 — Aplicamos las reglas (en orden)

`estilo.css`:

```css
/* Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    padding: 40px;
    background: #f8f9fa;
}

/* 1) El menú: contenedor */
.navegacion {
    background: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.navegacion ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

/* 2) Regla A — todos los enlaces grises (peso 1) */
a {
    color: #495057;
    text-decoration: none;
    font-weight: 500;
}

/* 3) Regla B — específica para enlaces del menú (peso 11) */
.navegacion a {
    padding: 8px 4px;
}

/* 4) Regla C — hover normal (peso 11) */
a:hover {
    color: #0d6efd;
}

/* 5) Regla D — la clase activo (peso 10) */
.activo {
    color: #ffc107;
    text-decoration: underline;
}

/* 6) Regla E — el activo con hover (peso 21) */
.activo:hover {
    color: #fd7e14;
}
```

### Análisis de qué pasa con el 3er enlace

El `<a class="activo">` recibe simultáneamente:

| Regla | Selector | Peso | Color |
|-------|----------|------|-------|
| A | `a` | (0,0,1) = 1 | gris |
| B | `.navegacion a` | (0,1,1) = 11 | (no toca color) |
| D | `.activo` | (0,1,0) = 10 | amarillo |

Gana la D porque es la única que toca `color` con peso mayor que A.

Cuando además se hace **hover** sobre él:

| Regla | Selector | Peso | Color |
|-------|----------|------|-------|
| C | `a:hover` | (0,1,1) = 11 | azul |
| E | `.activo:hover` | (0,2,0) = 20 | naranja |

Gana la E → naranja.

### Trampa subliminal

Si la regla C estuviera **debajo** de la regla E:

```css
.activo:hover { color: #fd7e14; }  /* peso 20 */
a:hover       { color: #0d6efd; }  /* peso 11 — pierde aunque venga después */
```

🔥 **El orden NO importa si la especificidad es distinta**. Solo importa el orden cuando hay **empate** de pesos.

## Paso 4 — Selectores avanzados (para experimentar)

Sustituye la regla D por estas variantes y observa qué pasa:

### Variante 1: hijo n-ésimo

```css
.navegacion li:nth-child(3) a {
    color: #ffc107;
    text-decoration: underline;
}
```

Selecciona el **3er `<li>`** dentro de `.navegacion` y luego su `<a>` interno. Peso: (0,1,3) = 13.

### Variante 2: selector de atributo

```css
[href="/servicios"] {
    color: #ffc107;
}
```

Selecciona cualquier elemento con `href="/servicios"`. Útil cuando no controlas el HTML pero sí el atributo. Peso: (0,1,0) = 10.

### Variante 3: selectores de atributo más finos

```css
a[href^="https"]    { color: green; }       /* href empieza por https */
a[href$=".pdf"]     { color: red; }         /* href acaba en .pdf */
a[href*="github"]   { color: black; }       /* href contiene "github" */
[data-tipo="externo"] { font-style: italic; } /* data-attr exacto */
```

### Combinadores

```css
/* Descendente: hijo a CUALQUIER profundidad */
.navegacion a { ... }

/* Hijo directo (>): solo hijos inmediatos */
.navegacion > ul > li { ... }

/* Hermano adyacente (+): el siguiente inmediato */
h2 + p { font-size: 18px; }  /* el primer <p> después de un <h2> */

/* Hermano general (~): todos los siguientes */
h2 ~ p { color: gray; }       /* todos los <p> que siguen al <h2> */
```

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Pensar que el orden manda | Solo si los pesos son iguales | Calcula primero la especificidad. |
| Confundir `>` y espacio | `div p` = todos los `<p>` descendientes. `div > p` = solo hijos directos | Memorízalo. |
| `:nth-child(odd)` vs `:nth-of-type(odd)` | `nth-child` mira posición entre TODOS los hermanos; `nth-of-type` solo entre del mismo tipo | Si solo quieres alternar `<p>` ignorando otros, usa `:nth-of-type(odd)`. |
| Heredar lo que NO se hereda | `background`, `border`, `margin`, `padding`, `width` no se heredan | Aplica explícitamente al hijo. |
| Especificidad ganada con `!important` | Funciona pero se complica luego | Reescribe la regla con peso suficiente. |
| Estilos inline ganando | Son peso (1,0,0,0) | Evita inline; usa clases. |
| Selectores en cadena | `body div ul li.activo span a:hover` → muy específico → difícil de sobrescribir | Usa clases pequeñas y descriptivas. |
| Reset que sobrescribe | `* { color: black; }` se aplica a todo, no es lo que quieres | Reset solo lo justo (margin, padding, box-sizing). |
| `inherit` mal entendido | Fuerza la herencia explícita: `border: inherit;` | Útil pero no abusar. |

## La cascada del navegador (orden completo)

🔥 Cuando dos reglas se "pelean" por aplicarse, el navegador decide así:

1. **Origen e importancia** (de menor a mayor prioridad):
   - User-agent (estilos del navegador)
   - User normal
   - Author normal (tu CSS)
   - Author `!important`
   - User `!important`
   - User-agent `!important`
2. **Especificidad**: el peso (a,b,c) calculado.
3. **Orden de aparición**: el último gana si hay empate.

Por eso `* { color: red !important; }` en tu CSS pierde frente a un `!important` del usuario en su navegador (lo usan personas con baja visión).

## Propiedades que se heredan

Estas se heredan del padre al hijo (a menos que el hijo las redefina):

- `color`
- `font-family`, `font-size`, `font-weight`, `font-style`
- `line-height`
- `text-align`, `text-indent`
- `visibility`
- `cursor`
- `list-style`

Estas **NO** se heredan (tienes que repetirlas):

- `background`, `background-color`
- `border`, `padding`, `margin`
- `width`, `height`
- `display`, `position`
- `text-decoration` (en navegadores modernos sí — atento)

Cómo forzar herencia o evitarla:

```css
.hijo { color: inherit; }       /* fuerza heredar */
.hijo { color: initial; }       /* valor por defecto del navegador */
.hijo { color: unset; }         /* inherit si se hereda, initial si no */
.hijo { all: inherit; }         /* hereda TODO (peligroso) */
```

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab de especificidad</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <nav id="menu-principal" class="navegacion">
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/servicios" class="activo">Servicios</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contacto" data-tipo="externo">Contacto</a></li>
        </ul>
    </nav>

    <article style="margin-top: 30px;">
        <h2>Demos de selectores</h2>
        <ul class="demo">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    </article>
</body>
</html>
```

## CSS completo (comentado con peso)

```css
/* === RESET === */
* {                           /* peso (0,0,0)   = 0  */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {                        /* peso (0,0,1)   = 1  */
    font-family: Arial, sans-serif;
    padding: 40px;
    background: #f8f9fa;
}

/* === MENU === */
.navegacion {                 /* (0,1,0) = 10 */
    background: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.navegacion ul {              /* (0,1,1) = 11 */
    list-style: none;
    display: flex;
    gap: 20px;
}

/* === ENLACES === */
a {                           /* (0,0,1) = 1 */
    color: #495057;
    text-decoration: none;
    font-weight: 500;
}

.navegacion a {               /* (0,1,1) = 11 */
    padding: 8px 4px;
    transition: color 0.2s;
}

a:hover {                     /* (0,1,1) = 11 */
    color: #0d6efd;
}

.activo {                     /* (0,1,0) = 10 — gana a "a" en color */
    color: #ffc107;
    text-decoration: underline;
}

.activo:hover {               /* (0,2,0) = 20 — gana a "a:hover" */
    color: #fd7e14;
}

/* === DEMO: nth-child === */
.demo li:nth-child(odd) {     /* impares fondo gris */
    background: #e9ecef;
}

.demo li:nth-child(2n+1) {    /* otra forma de impares */
    color: #0d6efd;
}

.demo li:first-child {        /* primer hijo */
    font-weight: bold;
}

.demo li:last-child {         /* último hijo */
    font-style: italic;
}

/* === DEMO: selectores de atributo === */
[data-tipo="externo"] {       /* atributo exacto */
    font-style: italic;
    color: #6f42c1;
}

a[href^="https"] {            /* href empieza por https (los demás no) */
    /* color especial si quieres */
}
```

## Cómo verificar

1. Abre `index.html`. El 3er enlace ("Servicios") debe estar amarillo y subrayado.
2. Pasa el ratón por encima de "Servicios" → debe ponerse naranja.
3. Pasa el ratón por "Inicio" → debe ponerse azul.
4. **F12** → click derecho sobre "Servicios" → "Inspeccionar". En el panel de Styles ves todas las reglas que se aplican. Las **tachadas** son las que se han sobrescrito.
5. Haz click en "Computed" → ves el `color` final calculado.
6. Pasa el ratón por "Contacto" → si tienes `[data-tipo="externo"]` aplicado, sale en cursiva morado.

## Alternativas peores

### 1) `!important` para todo

```css
/* ❌ */
.activo { color: yellow !important; }
.activo:hover { color: orange !important; }
```

Funciona pero te quedas sin herramientas para sobrescribir mañana. Y `!important` over `!important` es ilegible.

### 2) IDs en CSS

```css
/* ❌ poco reutilizable */
#menu-principal-link-3 { color: yellow; }
```

Los IDs son tan específicos que cuesta sobrescribirlos. Usa clases.

### 3) Selectores larguísimos

```css
/* ❌ */
body > div.contenedor > nav#menu-principal.navegacion > ul.lista > li.item:nth-child(3) > a.activo {
    color: yellow;
}
```

Es frágil (si añades un wrapper se rompe), específico (cuesta sobrescribir) y lento. Mejor `.activo { color: yellow; }`.

### 4) `style="color: yellow"` inline

Sale gigante. Inline pesa (1,0,0,0): para sobrescribir necesitas un selector con `!important`.

### 5) Inventarse "cascada inversa"

No existe. Si la regla A pesa más que la B, A gana **siempre** — el orden no importa.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Mi `.activo` no aplica el color | Hay un selector más específico antes | Usa DevTools "Computed" para ver qué regla gana. |
| Pongo `!important` y aún no funciona | Hay otro `!important` con más peso | Sube la especificidad del selector. |
| `nth-child(odd)` no me cuadra | Cuenta TODOS los hermanos, no solo del mismo tipo | Prueba `nth-of-type(odd)`. |
| El hover no se ve | El selector `:hover` no aplica al elemento esperado | Revisa el HTML — quizás el `<a>` está dentro de un `<span>`. |
| Heredado un `color` que no quiero | El padre lo define | Pon `color: inherit` o el color explícito en el hijo. |
| El `background` del padre no se hereda | No es heredable | Aplícalo explícitamente al hijo si lo necesitas. |
| `style="..."` no se puede quitar | Pesa (1,0,0,0) | O quitas el style o usas `!important`. |

## Lo que has aprendido

- Cálculo de especificidad: (ids, clases/pseudo/attr, tipos).
- Cascada: orden vs especificidad (orden solo cuando hay empate).
- `!important` y por qué es la opción de última instancia.
- Pseudoclases: `:hover`, `:focus`, `:active`, `:first-child`, `:last-child`, `:nth-child(n)`, `:nth-of-type(n)`.
- Combinadores: descendente (espacio), hijo (`>`), hermano adyacente (`+`), hermano general (`~`).
- Selectores de atributo: `[attr]`, `[attr="x"]`, `[attr^="x"]`, `[attr$="x"]`, `[attr*="x"]`.
- Propiedades que se heredan vs las que no.
- `inherit`, `initial`, `unset`, `all`.
- Por qué los IDs en CSS son un anti-patrón.
