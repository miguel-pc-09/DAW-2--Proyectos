# Ejercicio U4.1 — Navbar responsive con Flexbox

> 📚 Unidad 4 · CSS avanzado y Flexbox
> ⏱️ Tiempo: 25-30 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: dominar `display: flex` con un ejemplo clásico — la barra de navegación.

## Enunciado

Construir una barra de navegación con:

- Logo a la izquierda ("MiSitio").
- Menú de 4 enlaces en el centro/derecha (Inicio, Productos, Blog, Contacto).
- Botón "Iniciar sesión" al extremo derecho.
- Todo alineado verticalmente al centro.
- Espacio uniforme entre los enlaces.

---

## ¿Qué vas a aprender?

- `display: flex` y qué hace al elemento padre.
- Eje principal (`flex-direction: row`) y eje cruzado.
- `justify-content` (eje principal): `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`.
- `align-items` (eje cruzado): `stretch`, `center`, `flex-start`, `flex-end`, `baseline`.
- `gap` (separación entre items, lo más limpio).
- `flex: 1` (el item crece para ocupar el espacio sobrante).
- `margin-left: auto` (truco para empujar UN elemento al final).

## Cómo va a quedar (boceto ASCII)

```
┌──────────────────────────────────────────────────────────────┐
│ MiSitio    Inicio  Productos  Blog  Contacto    [Iniciar]   │
└──────────────────────────────────────────────────────────────┘
   ↑                                                  ↑
 izda                                                dcha
```

---

## Paso 1 — HTML semántico

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar Flexbox</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <header class="navbar">
        <a href="/" class="logo">MiSitio</a>

        <nav class="menu">
            <a href="/">Inicio</a>
            <a href="/productos">Productos</a>
            <a href="/blog">Blog</a>
            <a href="/contacto">Contacto</a>
        </nav>

        <a href="/login" class="boton">Iniciar sesión</a>
    </header>

    <main style="padding: 40px;">
        <p>Contenido de la página.</p>
    </main>
</body>
</html>
```

### Por qué estos elementos

- `<header>` para la barra superior (semántico, accesible).
- `<a class="logo">` porque el logo siempre lleva al inicio.
- `<nav>` agrupa los enlaces del menú principal.
- El botón "Iniciar sesión" no va dentro de `<nav>` porque es una acción especial, separada.

## Paso 2 — Flexbox en el contenedor

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

.navbar {
    display: flex;
    align-items: center;          /* centra verticalmente */
    gap: 30px;                    /* separación entre logo, menú y botón */
    padding: 12px 24px;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.06);
}
```

### Qué ocurre con `display: flex`

Al poner `display: flex` en `.navbar`:

1. El `.navbar` se convierte en **flex container**.
2. Sus hijos directos (logo, nav, botón) se convierten en **flex items**.
3. Por defecto se colocan en una **fila horizontal** (`flex-direction: row`).
4. El **eje principal** es horizontal; el **eje cruzado** es vertical.

| Propiedad del contenedor | Para qué |
|--------------------------|----------|
| `display: flex` | Activa Flexbox. |
| `flex-direction: row` (por defecto) | Items en fila (izda a dcha). |
| `flex-direction: column` | Items en columna (arriba a abajo). |
| `justify-content` | Alineación en el eje **principal**. |
| `align-items` | Alineación en el eje **cruzado**. |
| `gap` | Separación entre items. |
| `flex-wrap` | Permite saltar de línea cuando no caben. |

## Paso 3 — Estilos del logo, menú y botón

```css
.logo {
    font-size: 20px;
    font-weight: bold;
    color: #0d6efd;
    text-decoration: none;
}

.menu {
    display: flex;                /* OTRO flex container, dentro del primero */
    gap: 20px;
}

.menu a {
    color: #495057;
    text-decoration: none;
    font-weight: 500;
    padding: 6px 0;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s, color 0.2s;
}

.menu a:hover {
    color: #0d6efd;
    border-bottom-color: #0d6efd;
}

.boton {
    background: #0d6efd;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    margin-left: auto;            /* el TRUCO */
    transition: background 0.2s;
}

.boton:hover {
    background: #0b5ed7;
}
```

### `margin-left: auto` — el truco más útil de Flexbox

```
ANTES (sin margin-left: auto en el botón):
[Logo]  [Menú]  [Botón]________  (gap entre todos igual)

DESPUÉS (con margin-left: auto):
[Logo]  [Menú]____________[Botón]
                ↑
         "el espacio sobrante se acumula a la izquierda del botón"
```

Equivalente a `justify-content: space-between` pero más quirúrgico: empuja **un solo elemento** a un extremo. Útil cuando los demás items quieren estar juntos.

🔥 Alternativa: en el `.menu` pones `margin-right: auto` y consigues el mismo efecto.

### Borde "fantasma" para evitar saltos

```css
.menu a {
    border-bottom: 2px solid transparent;
}
.menu a:hover {
    border-bottom-color: #0d6efd;
}
```

Si pusieras `border-bottom: 2px solid` solo en hover, al pasar el ratón **el texto saltaría 2px hacia arriba** porque la altura cambia. La técnica del borde transparente reserva el espacio desde el principio.

## Paso 4 — Las 6 variantes de `justify-content`

Cambia la línea `gap: 30px;` por estas y observa:

```css
/* Variante A: todo apretado a la izquierda */
.navbar { justify-content: flex-start; }

/* Variante B: todo apretado a la derecha */
.navbar { justify-content: flex-end; }

/* Variante C: centrado */
.navbar { justify-content: center; }

/* Variante D: extremos pegados a los bordes, espacio entre */
.navbar { justify-content: space-between; }

/* Variante E: cada item con espacio igual a su alrededor */
.navbar { justify-content: space-around; }

/* Variante F: espacio igual ENTRE items Y en los extremos */
.navbar { justify-content: space-evenly; }
```

### Diferencia visual

```
space-between:  [A]----[B]----[C]
space-around:    [A]--[B]--[C]    (medio espacio en cada borde)
space-evenly:    -[A]--[B]--[C]-  (espacio igual en todos lados)
```

## Paso 5 — `align-items` (eje cruzado)

```css
.navbar {
    height: 60px;
    align-items: stretch;     /* por defecto: todos a la misma altura */
    align-items: center;      /* todos centrados verticalmente */
    align-items: flex-start;  /* todos pegados arriba */
    align-items: flex-end;    /* todos pegados abajo */
    align-items: baseline;    /* alineados por la línea base del texto */
}
```

Si los items tienen alturas distintas (un botón alto, un texto corto), `center` los centra verticalmente. Sin esto, `stretch` los hace todos del mismo alto.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| `justify-content` no hace nada | El elemento no tiene `display: flex` | Verifica el padre. |
| Los items se apilan en vertical sin querer | Tienes `flex-direction: column` | Quítalo o pon `row`. |
| `flex: 1` y se rompe el layout | El item con `flex: 1` ocupa TODO el espacio sobrante | Aplica `flex: 1` con cuidado, solo a los que quieres que crezcan. |
| `align-items: center` no centra | El contenedor no tiene altura definida — no hay eje cruzado donde centrar | Define `height` o pon contenido. |
| `gap` no funciona en Safari viejo | Soporte irregular en versiones antiguas | Sustitúyelo por `margin` en los hijos. |
| `flex-wrap` no activado y se rompe en móvil | Por defecto `nowrap` → items se aplastan | Pon `flex-wrap: wrap`. |
| Mezclar `justify-content` y `margin: auto` | El `margin: auto` "gana" siempre | Decide uno u otro. |
| `<nav>` sin `flex` mostrando enlaces en columna | El `<a>` es inline pero el `<nav>` no es flex | Pon `display: flex` en `<nav>` o `<ul>`. |
| `flex-direction: row-reverse` y todo invertido | Invierte el orden visual pero NO el del DOM | El Tab sigue el DOM, así que pierdes orden lógico de teclado. |
| El logo se aplasta | Otros items absorben el espacio | Pon `flex-shrink: 0` al logo. |
| `align-self` no funciona | Solo aplica a hijos directos | El item debe ser hijo del flex container. |

## Paso 6 — Versión responsive (preview de unidad 5)

```css
@media (max-width: 700px) {
    .navbar {
        flex-direction: column;     /* todo en columna */
        gap: 15px;
        padding: 20px;
    }
    .menu {
        flex-direction: column;     /* enlaces en columna también */
        align-items: center;
    }
    .boton {
        margin-left: 0;             /* desactivamos el truco */
    }
}
```

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar Flexbox</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <header class="navbar">
        <a href="/" class="logo">MiSitio</a>
        <nav class="menu">
            <a href="/">Inicio</a>
            <a href="/productos">Productos</a>
            <a href="/blog">Blog</a>
            <a href="/contacto">Contacto</a>
        </nav>
        <a href="/login" class="boton">Iniciar sesión</a>
    </header>

    <main style="padding: 40px;">
        <p>Contenido de la página.</p>
    </main>
</body>
</html>
```

## CSS completo (comentado)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body { font-family: Arial, sans-serif; background: #f8f9fa; }

/* === NAVBAR === */
.navbar {
    display: flex;
    align-items: center;        /* centrado vertical */
    gap: 30px;
    padding: 12px 24px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

/* === LOGO === */
.logo {
    font-size: 20px;
    font-weight: bold;
    color: #0d6efd;
    text-decoration: none;
    flex-shrink: 0;              /* no se aplasta si falta espacio */
}

/* === MENU (otro flex container anidado) === */
.menu {
    display: flex;
    gap: 20px;
}

.menu a {
    color: #495057;
    text-decoration: none;
    font-weight: 500;
    padding: 6px 0;
    border-bottom: 2px solid transparent;  /* reserva el espacio */
    transition: border-color 0.2s, color 0.2s;
}

.menu a:hover {
    color: #0d6efd;
    border-bottom-color: #0d6efd;
}

/* === BOTÓN (empujado a la derecha) === */
.boton {
    background: #0d6efd;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    margin-left: auto;           /* el TRUCO */
    transition: background 0.2s;
}

.boton:hover {
    background: #0b5ed7;
}

/* === MÓVIL === */
@media (max-width: 700px) {
    .navbar {
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    }
    .menu {
        flex-direction: column;
        align-items: center;
    }
    .boton {
        margin-left: 0;
    }
}
```

## Cómo verificar

1. Abre `index.html` en navegador → la navbar se ve correcta.
2. **F12** → click derecho sobre `.navbar` → "Inspeccionar".
3. En Computed verás todas las propiedades flex calculadas.
4. **Truco DevTools**: junto a `display: flex` aparece un ícono pequeño con la palabra "flex" en azul. Haz click → se superpone una guía visual mostrando el contenedor flex y los ejes.
5. Cambia el ancho del navegador hasta < 700px → la navbar se reordena en columna.
6. Pasa el ratón por los enlaces → línea azul aparece sin saltos.

## Alternativas peores

### 1) `float: left` para layouts

```css
/* ❌ era 2010 — anti-patrón hoy */
.menu a { float: left; margin-right: 20px; }
```

`float` se inventó para que el texto envolviera imágenes, NO para layouts. Te obliga a usar `clearfix` y es frágil.

### 2) `display: table` para alinear verticalmente

```css
/* ❌ funciona pero raro */
.navbar { display: table; }
.navbar > * { display: table-cell; vertical-align: middle; }
```

Era el truco pre-flexbox. Hoy no hay razón para usarlo.

### 3) `position: absolute` para empujar a la derecha

```css
/* ❌ se desliga del flujo, problemas en móvil */
.navbar { position: relative; }
.boton { position: absolute; right: 24px; top: 12px; }
```

Hace que el botón se monte sobre el contenido si las cosas no caben. `margin-left: auto` es mejor.

### 4) `flex: 1` en todo

```css
/* ❌ el logo se estira y queda raro */
.navbar > * { flex: 1; }
```

`flex: 1` significa "ocupa todo el espacio disponible". Si lo pones a todo, los items se reparten igual independientemente de su contenido. Aplícalo solo donde lo necesitas.

### 5) Tablas para navbar

```html
<!-- ❌ -->
<table>
  <tr>
    <td>Logo</td>
    <td><a>Inicio</a></td>
    <td><a>Login</a></td>
  </tr>
</table>
```

Mismo argumento que en U2: las tablas son para datos tabulares.

### 6) `gap: 30px` y luego `margin-right: 30px` en cada item

```css
/* ❌ se acumulan */
.navbar { gap: 30px; }
.navbar > * { margin-right: 30px; }
```

Decide uno u otro. `gap` es más limpio.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| `justify-content` no se aplica | Falta `display: flex` | Ponlo en el padre. |
| Los hijos se ven verticalmente | `flex-direction: column` heredado | Pon `row` explícito. |
| El gap no aparece | Navegador muy antiguo (Safari < 14) | Usa `margin` como fallback. |
| El menú se sale por la derecha en móvil | No tienes `flex-wrap: wrap` ni media query | Añade uno u otro. |
| El logo desaparece | `flex-shrink: 1` (por defecto) y otro item lo apretó | Pon `flex-shrink: 0` al logo. |
| `align-items: center` no centra | El contenedor no tiene altura definida | Define `height` o el contenedor crece con el contenido. |
| Tab pasa por elementos en orden raro | Usaste `flex-direction: row-reverse` o `order` | Mantén el orden del DOM correcto. |
| El `:hover` mueve los enlaces | Cambias `border` solo en hover | Pon el border transparente desde el inicio. |
| El logo es clicable pero el resto no | `<a>` envuelve solo el logo en el HTML | Asegura `<a>` en todos los enlaces. |

## Lo que has aprendido

- `display: flex` y su efecto en el padre y los hijos.
- Ejes principal y cruzado.
- `justify-content` (eje principal): `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`.
- `align-items` (eje cruzado): `stretch`, `center`, `flex-start`, `flex-end`, `baseline`.
- `gap` para separación uniforme.
- `flex-direction: row | column | row-reverse | column-reverse`.
- `flex-wrap: wrap` para responsive natural.
- `margin-left: auto` como truco para empujar un elemento.
- `flex-shrink: 0` para evitar que un item se aplaste.
- Bordes transparentes para evitar saltos en hover.
- Anidamiento de flex containers.
