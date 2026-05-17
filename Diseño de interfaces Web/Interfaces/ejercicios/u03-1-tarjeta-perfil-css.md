# Ejercicio U3.1 — Tarjeta de perfil con CSS desde cero

> 📚 Unidad 3 · Introducción a CSS
> ⏱️ Tiempo: 25-30 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: practicar selectores básicos, modelo de cajas y propiedades fundamentales.

## Enunciado

Crear una tarjeta de perfil con:

- Foto circular arriba.
- Nombre en grande.
- Cargo en gris debajo.
- 3 enlaces de redes sociales en línea.
- Borde, padding y sombra suaves.

Sin Flexbox, sin Grid, sin frameworks. Solo lo básico de CSS: selectores, modelo de cajas, tipografía, colores, fondos.

---

## ¿Qué vas a aprender?

- Las **tres formas** de aplicar CSS (en línea, interno, externo) y por qué solo se usa la externa en serio.
- **Selectores básicos**: de tipo (`h1`), de clase (`.tarjeta`), de id (`#perfil`), descendente (`.tarjeta p`).
- **Especificidad**: por qué `#perfil` gana a `.tarjeta`, y por qué `style="..."` gana a todo.
- **Cascada** y orden de aparición (la última regla equivalente gana).
- **Modelo de cajas**: `width`, `padding`, `border`, `margin`, `box-sizing`.
- **Tipografía**: `font-family`, `font-size`, `font-weight`, `line-height`, `color`.
- **Fondos**: `background-color`, `background-image`.
- **Bordes redondeados** con `border-radius` (incluido `50%` para círculos).

## Cómo va a quedar (boceto ASCII)

```
        ┌────────────────────────┐
        │                        │
        │         ╭───╮          │
        │        │ FOTO │         │
        │         ╰───╯          │
        │                        │
        │      Ana García        │
        │   Diseñadora UX/UI     │
        │                        │
        │  [GH]  [LI]  [TW]      │
        │                        │
        └────────────────────────┘
```

---

## Paso 1 — Estructura HTML

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta de Ana García</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <article class="tarjeta" id="perfil-ana">
        <img class="foto" src="https://i.pravatar.cc/150?img=5" alt="Foto de Ana García">

        <h1 class="nombre">Ana García</h1>
        <p class="cargo">Diseñadora UX/UI</p>

        <nav class="redes">
            <a href="https://github.com/ana" class="red">GH</a>
            <a href="https://linkedin.com/in/ana" class="red">LI</a>
            <a href="https://twitter.com/ana" class="red">TW</a>
        </nav>
    </article>
</body>
</html>
```

### Por qué cada cosa

- `<article>` porque la tarjeta es contenido **independiente** (podría reusarse en otro sitio).
- `class="tarjeta"` para reutilizar el estilo si tuvieras varias tarjetas.
- `id="perfil-ana"` para señalar **esta** tarjeta concreta (único en la página).
- `<nav>` envuelve los enlaces de redes porque son navegación.

## Paso 2 — CSS externo

`estilo.css`:

```css
/* 1) Reset suave + box-sizing global */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Qué hace `box-sizing: border-box`

Por defecto, en CSS:

- `width: 200px; padding: 20px; border: 2px solid;` → ancho total = 200 + 20·2 + 2·2 = **244px**.

Con `box-sizing: border-box`:

- mismo CSS → ancho total = **200px exactos** (el padding y el border van DENTRO).

🔥 Ponlo siempre globalmente con `* { box-sizing: border-box; }`. Te ahorra horas de bugs de layout.

## Paso 3 — Body: fondo y tipografía global

```css
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f0f2f5;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 20px;
}
```

| Propiedad | Por qué |
|-----------|---------|
| `font-family` con fallback | Si `Segoe UI` no está, prueba Arial; si no, cualquier sans-serif del sistema. |
| `background: #f0f2f5` | Gris muy claro. |
| `min-height: 100vh` | El body ocupa al menos el alto visible (necesario para centrar verticalmente). |
| `display: grid; place-items: center` | Truco para centrar cualquier hijo del body horizontal y verticalmente. |
| `padding: 20px` | Margen interior para que la tarjeta no toque los bordes en móvil. |

## Paso 4 — La tarjeta

```css
.tarjeta {
    width: 320px;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
}
```

### Modelo de cajas en acción

```
                    ┌── margin (fuera, transparente)
                    │
        ┌───────────┼──────────────┐
        │ border    │              │
        │  ┌────────┼────────────┐ │
        │  │ padding│            │ │
        │  │   ┌────┼──────────┐ │ │
        │  │   │ contenido     │ │ │
        │  │   └────┼──────────┘ │ │
        │  └────────┼────────────┘ │
        └───────────┼──────────────┘
```

| Propiedad | Por qué |
|-----------|---------|
| `width: 320px` | Ancho fijo (responsive lo arreglamos al final). |
| `background: white` | Color de fondo. |
| `padding: 30px` | Espacio interior. Como tenemos `border-box`, el contenido cabe en 320 - 60 = 260px. |
| `border-radius: 12px` | Esquinas redondeadas. |
| `box-shadow: 0 4px 20px rgba(0,0,0,0.08)` | Sombra: 0 horizontal, 4px abajo, 20px desenfoque, negro 8 % opacidad. |
| `text-align: center` | Todo el contenido centrado horizontalmente. |

### Por qué la sombra con `rgba` y no con `gray`

`rgba(0,0,0,0.08)` te da control fino de la **opacidad**. Con `gray` (gris sólido) la sombra se ve dura y antinatural. La sombra elegante es **negro con muy poca opacidad**.

## Paso 5 — Foto circular

```css
.foto {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #0d6efd;
    margin-bottom: 15px;
}
```

| Propiedad | Por qué |
|-----------|---------|
| `width: 100px; height: 100px` | Tamaño cuadrado. |
| `border-radius: 50%` | Convierte el cuadrado en círculo (50% del lado más corto). |
| `object-fit: cover` | Si la imagen no es cuadrada, la **recorta** centrada para llenar. Sin esto se deforma. |
| `border: 3px solid #0d6efd` | Aro azul alrededor. |
| `margin-bottom: 15px` | Espacio antes del nombre. |

🔥 **Trampa**: `border-radius: 50%` solo da un círculo perfecto si `width == height`. Si la imagen es 100×200 y aplicas 50%, sale un óvalo.

## Paso 6 — Nombre y cargo

```css
.nombre {
    font-size: 22px;
    font-weight: 600;
    color: #212529;
    margin-bottom: 5px;
}

.cargo {
    font-size: 15px;
    color: #6c757d;
    margin-bottom: 20px;
}
```

### Selectores de clase

`.nombre` selecciona cualquier elemento con `class="nombre"`. Es **más reutilizable** que `h1` (que selecciona TODOS los h1 del documento).

### Especificidad básica

Si tuvieras:

```css
h1            { color: black; }    /* peso: 0,0,1 — tipo */
.nombre       { color: navy; }     /* peso: 0,1,0 — clase */
#perfil-ana   { color: red; }      /* peso: 1,0,0 — id */
```

Para `<h1 class="nombre" id="perfil-ana">` ganaría **rojo** (el id es lo más específico).

Si añadimos `style="color: green"` en el HTML, ganaría **verde** (los estilos en línea son los más específicos de todos los selectores normales).

Si añadimos `color: orange !important;` en una regla, ganaría **naranja** (el `!important` rompe la especificidad — por eso no se usa salvo emergencia).

🔥 **Mnemotecnia**: `!important` > inline > id > class > tipo.

## Paso 7 — Enlaces de redes

```css
.redes {
    display: block;
}

.red {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #e9ecef;
    color: #495057;
    text-decoration: none;
    border-radius: 50%;
    margin: 0 5px;
    font-weight: bold;
    font-size: 12px;
}

.red:hover {
    background: #0d6efd;
    color: white;
}
```

### Por qué `inline-block`

| `display` | Qué permite |
|-----------|-------------|
| `inline` | En línea con el texto. **NO** acepta `width`/`height`. |
| `block` | Salta de línea. Acepta width/height. Ocupa todo el ancho disponible. |
| `inline-block` | En línea pero acepta width/height. **Lo ideal aquí**. |

### Por qué `line-height: 40px`

Truco viejo pero útil: si `height: 40px` y `line-height: 40px`, el texto queda **centrado verticalmente** en una sola línea.

### Selector descendente

```css
.tarjeta p { color: #6c757d; }
/*    ^ selecciona TODOS los <p> dentro de .tarjeta */
```

### Pseudoclase `:hover`

`.red:hover` se aplica cuando el ratón está encima. Otras pseudoclases comunes:

- `:focus` — cuando tiene el foco (TAB).
- `:active` — mientras se pulsa.
- `:visited` — ya visitado (solo enlaces).
- `:first-child`, `:last-child`, `:nth-child(n)` — por posición.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Olvidar `box-sizing: border-box` | Cálculos de ancho fallan (200px + padding 20 = 240px reales) | Ponlo SIEMPRE global. |
| Aplicar `width` a un elemento `inline` | Se ignora | Usa `inline-block` o `block`. |
| `border-radius: 50%` en imagen no cuadrada | Sale óvalo | Asegúrate width == height. |
| Olvidar `object-fit: cover` | La imagen se deforma | Combínalo con width/height fijos. |
| Confundir `margin` y `padding` | Padding está dentro del border, margin fuera | Memoriza el modelo de cajas. |
| `!important` por todas partes | Pierdes control de especificidad | Evítalo. Reescribe la regla con más peso natural. |
| Selector `*` con muchas propiedades | Más lento de renderizar | `*` solo para reset (margin, padding, box-sizing). |
| Una clase mal pensada | Tienes que cambiar 30 sitios para cambiar un color | Define **variables CSS** (`--color-primario: #0d6efd;`). |
| Colores en `red`, `blue`, `green` | Diferencias entre `red` (#FF0000) y `#dc3545` enormes | Usa códigos hex o RGB. |
| Sombra muy oscura | Aspecto cutre | Negro con 5-15 % de opacidad. |
| Olvidar `text-decoration: none` en enlaces | Sale subrayado azul por defecto | Quítalo en `.red`. |
| `font-size` en `px` muy pequeño | Cuesta leer | Mínimo 14-16 px. |

## Margin collapsing (la trampa CLÁSICA)

🔥 Esto entra en exámenes:

```html
<div class="caja">
    <h1>Título</h1>  <!-- margin-top: 30px -->
    <p>Texto</p>
</div>
```

```css
.caja { margin: 20px; padding: 0; }
h1 { margin: 30px 0; }
```

Esperarías que entre el borde de `.caja` y el `h1` haya `20 + 30 = 50px`. **NO**: los márgenes verticales adyacentes **se colapsan** y se queda el MAYOR de los dos (30px). En horizontal NO pasa.

Cómo evitarlo si te molesta:

- `padding: 1px;` en el padre (rompe el contacto).
- `overflow: hidden` en el padre.
- `display: flex` o `display: grid` en el padre (no hay margin collapsing dentro).

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta de Ana García</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <article class="tarjeta" id="perfil-ana">
        <img class="foto" src="https://i.pravatar.cc/150?img=5" alt="Foto de Ana García">
        <h1 class="nombre">Ana García</h1>
        <p class="cargo">Diseñadora UX/UI</p>
        <nav class="redes">
            <a href="https://github.com/ana" class="red">GH</a>
            <a href="https://linkedin.com/in/ana" class="red">LI</a>
            <a href="https://twitter.com/ana" class="red">TW</a>
        </nav>
    </article>
</body>
</html>
```

## CSS completo (comentado)

```css
/* Reset global + box-sizing */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body: tipografía y centrado */
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f0f2f5;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 20px;
}

/* Tarjeta */
.tarjeta {
    width: 320px;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
}

/* Foto circular */
.foto {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #0d6efd;
    margin-bottom: 15px;
}

/* Nombre y cargo */
.nombre {
    font-size: 22px;
    font-weight: 600;
    color: #212529;
    margin-bottom: 5px;
}

.cargo {
    font-size: 15px;
    color: #6c757d;
    margin-bottom: 20px;
}

/* Botones de redes */
.red {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #e9ecef;
    color: #495057;
    text-decoration: none;
    border-radius: 50%;
    margin: 0 5px;
    font-weight: bold;
    font-size: 12px;
    transition: all 0.2s;
}

.red:hover {
    background: #0d6efd;
    color: white;
    transform: scale(1.1);
}
```

## Cómo verificar responsive

1. Abre `index.html`.
2. F12 → modo móvil → 375px.
3. La tarjeta tiene `width: 320px` fijo, así que cabe en cualquier móvil.
4. **Mejora opcional**: cambia `width: 320px` por `max-width: 320px; width: 100%;` para que en móviles MUY pequeños (< 320px) se ajuste.

## Alternativas peores

### 1) CSS en línea

```html
<!-- ❌ -->
<div style="background: white; padding: 30px; border-radius: 12px;">
```

Problemas:

- **No reutilizable**: si tienes 5 tarjetas, copias y pegas 5 veces.
- **Mantenimiento horrible**: cambiar un color implica buscar y reemplazar en todo el HTML.
- **Máxima especificidad**: para sobrescribirlo necesitas `!important`.
- **Mezcla estructura y presentación**: la idea de CSS es separarlas.

### 2) CSS interno en `<style>`

```html
<head>
    <style>
        .tarjeta { ... }
    </style>
</head>
```

Mejor que inline pero peor que externo:

- Si tienes 10 páginas, repites el `<style>` 10 veces.
- No se puede cachear entre páginas.
- Se mezcla con el HTML.

✅ **CSS externo** (`.css` aparte): se cachea, se reutiliza, se mantiene en un solo sitio.

### 3) Selectores de tipo en lugar de clase

```css
/* ❌ rígido */
article {
    background: white;
    padding: 30px;
}
```

Si añades otro `<article>` (un comentario, una noticia), heredará el mismo estilo. Mejor `.tarjeta { ... }`.

### 4) `!important` para "ganar"

```css
.tarjeta { background: red !important; }
```

Mañana tendrás que sobrescribir esto con `!important !important`... no se puede. Mejor sube la especificidad de forma natural.

### 5) Anidamiento sin reutilizar

```css
.tarjeta h1 { font-size: 22px; }
.tarjeta p { font-size: 15px; }
.tarjeta a { ... }
```

Si reemplazas `<h1>` por `<h2>` en el HTML, dejan de aplicarse los estilos. Usa clases (`.nombre`, `.cargo`).

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El padding hace que la tarjeta sea más ancha de lo previsto | Falta `box-sizing: border-box` | Añádelo globalmente. |
| La foto sale ovalada | La imagen no es cuadrada y `border-radius: 50%` | Pon `object-fit: cover` y width = height. |
| Hay un hueco entre el body y el contenido sin querer | Margen por defecto del navegador | `* { margin: 0; }` global. |
| La sombra parece un cuadro negro | Opacidad demasiado alta | Baja a 0.05-0.15. |
| El `:hover` no se ve suave | Falta `transition` | Añade `transition: all 0.2s;`. |
| El texto del enlace sigue subrayado | Cargas un browser-default | `text-decoration: none;`. |
| El círculo no se ve circular en el aro | El border desplaza el contenido | Cuenta el border en `width` (mantén `box-sizing: border-box`). |
| Dos tarjetas pegadas | Margen colapsado | Añade `margin-bottom`, evita colapso con `padding` mínimo en el padre o `display: flex`. |

## Lo que has aprendido

- Tres formas de aplicar CSS y por qué se usa solo externo.
- Selectores de tipo, clase, id, descendente.
- Cascada y especificidad (style > id > class > tipo).
- Modelo de cajas: content, padding, border, margin.
- `box-sizing: border-box` (siempre).
- Tipografía: `font-family`, `font-size`, `font-weight`, `color`.
- Fondos: `background`, `background-color`.
- Bordes: `border`, `border-radius` (incluido `50%` para círculos).
- Sombras suaves con `rgba`.
- `display: block / inline / inline-block` y cuándo cada uno.
- Pseudoclase `:hover`.
- Trampa del margin collapsing.
