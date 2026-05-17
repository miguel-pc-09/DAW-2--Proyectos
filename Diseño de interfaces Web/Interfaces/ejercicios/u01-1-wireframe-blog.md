# Ejercicio U1.1 — Wireframe en ASCII de un blog personal

> 📚 Unidad 1 · Introducción al diseño de interfaces web
> ⏱️ Tiempo: 20-25 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: pensar el diseño **antes** de tocar HTML/CSS.

## Enunciado

Antes de escribir una sola línea de código vas a **diseñar** un blog personal con un wireframe (boceto de baja fidelidad). Después convertirás ese boceto en una página HTML con bloques `<div>` coloreados (sin contenido real) para verificar que la estructura encaja.

El blog tiene que tener:

- Cabecera con logo y nombre del blog.
- Barra de navegación horizontal con 4 enlaces (Inicio, Artículos, Sobre mí, Contacto).
- Contenido principal con 3 tarjetas de artículos en una fila.
- Barra lateral (aside) a la derecha con widgets ("Últimos posts" y "Categorías").
- Pie con copyright.

---

## ¿Qué vas a aprender?

- Qué es un **wireframe** y por qué dibujarlo antes de programar.
- La diferencia entre **wireframe** (estructura), **mockup** (apariencia) y **prototipo** (interactivo).
- Identificar **zonas funcionales** de una página (header, nav, main, aside, footer).
- Pensar en **jerarquía visual** (qué es más importante).
- Convertir un boceto en HTML usando divs con colores de fondo para visualizar el layout (esto se llama *blocking out*).

## Cómo va a quedar (boceto ASCII)

```
+----------------------------------------------------------+
|              LOGO   |   Mi Blog Personal                 |   ← header
+----------------------------------------------------------+
|  Inicio  |  Artículos  |  Sobre mí  |  Contacto          |   ← nav
+----------------------------------------------------------+
|                                          |               |
|  +--------+  +--------+  +--------+      |  Últimos     |
|  |Artículo|  |Artículo|  |Artículo|      |  posts       |
|  |   1    |  |   2    |  |   3    |      |  ───────     |
|  +--------+  +--------+  +--------+      |  Categorías  |
|                                          |               |
|              main                        |    aside      |
+----------------------------------------------------------+
|                © 2026 Mi Blog                            |   ← footer
+----------------------------------------------------------+
```

---

## Paso 1 — Dibuja el wireframe (papel o app)

Antes del HTML, dibuja a lápiz (o en una app como Excalidraw, Figma, Balsamiq) lo que ves arriba. **No** decidas colores ni tipografías todavía: solo **cajas y posiciones**.

### Por qué dibujar primero

Si te pones a programar sin diseño, lo que va a pasar es lo siguiente:

1. Empiezas con un `<div>` que pones a la izquierda.
2. Decides que el sidebar va a la derecha.
3. Cuando ya tienes 200 líneas de CSS te das cuenta de que el sidebar tiene que ser más pequeño en móvil y que el header debe ser sticky.
4. Vuelves a empezar.

El wireframe te ahorra esa iteración. Cuesta 10 minutos y te ahorra horas.

### Niveles de fidelidad

| Tipo | Qué tiene | Para qué |
|------|-----------|----------|
| **Wireframe** (baja fidelidad) | Cajas grises, texto "Lorem ipsum", sin color | Decidir **dónde** va cada cosa. |
| **Mockup** (alta fidelidad) | Colores, tipografías, imágenes reales | Decidir **cómo se ve**. |
| **Prototipo** | Interactivo, navegable | Probar el **flujo de uso**. |

En el examen te pueden pedir un wireframe. Casi siempre basta con el de baja fidelidad.

## Paso 2 — Estructura HTML (semántica, no decorativa)

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Blog — Wireframe</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <header class="bloque header">
        <div class="logo">LOGO</div>
        <h1>Mi Blog Personal</h1>
    </header>

    <nav class="bloque nav">
        <a href="#">Inicio</a>
        <a href="#">Artículos</a>
        <a href="#">Sobre mí</a>
        <a href="#">Contacto</a>
    </nav>

    <div class="contenedor">
        <main class="bloque main">
            <article class="tarjeta">Artículo 1</article>
            <article class="tarjeta">Artículo 2</article>
            <article class="tarjeta">Artículo 3</article>
        </main>

        <aside class="bloque aside">
            <h3>Últimos posts</h3>
            <hr>
            <h3>Categorías</h3>
        </aside>
    </div>

    <footer class="bloque footer">
        © 2026 Mi Blog
    </footer>
</body>
</html>
```

### Por qué etiquetas semánticas y no `<div>` para todo

`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, `<article>` son etiquetas semánticas de HTML5. Le dicen al navegador y a los lectores de pantalla **qué función** tiene cada bloque. Para una persona ciega, su lector de pantalla puede saltar directamente al `<main>` sin tener que oír la navegación cada vez. Si todo fuesen `<div class="header">`, el lector no podría hacerlo.

## Paso 3 — CSS de visualización (colores diferenciados)

`estilo.css`:

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body { font-family: Arial, sans-serif; }

.bloque {
    padding: 20px;
    color: white;
    text-align: center;
}

.header { background: #6c757d; display: flex; align-items: center; justify-content: center; gap: 20px; }
.nav    { background: #495057; display: flex; gap: 20px; justify-content: center; }
.nav a  { color: white; text-decoration: none; }
.main   { background: #0d6efd; flex: 1; display: flex; gap: 15px; }
.aside  { background: #fd7e14; width: 250px; }
.footer { background: #212529; }

.contenedor { display: flex; gap: 15px; padding: 15px; }

.tarjeta {
    background: rgba(255,255,255,0.2);
    padding: 30px;
    border: 2px dashed white;
    flex: 1;
}

.logo {
    background: white;
    color: black;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
}
```

### Por qué colores planos en el wireframe

Cada `bloque` es un color distinto solo para **verlo en pantalla**. En la versión final cambiarás a blanco/gris claro. Esta técnica se llama *blocking out* y sirve para ver de un vistazo si tu estructura es la correcta.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Diseñar directamente en código | Acabas reescribiendo todo varias veces | Wireframe primero, código después. |
| Wireframe demasiado detallado | Pierdes el tiempo eligiendo color en algo que vas a tirar | El wireframe **es gris**. La fidelidad llega después. |
| Olvidar el aside en móvil | En 360px de ancho un sidebar de 250px no cabe | Plantea desde el wireframe la versión móvil (otro boceto). |
| Pensar solo en desktop | El 60 % del tráfico es móvil | Dibuja **dos** wireframes: desktop y móvil. |
| Confundir wireframe y mockup | El wireframe **no tiene** colores ni fuentes definitivas | Si tu boceto se parece al diseño final, ya no es wireframe. |

## Código HTML completo (comentado)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Blog — Wireframe</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <!-- HEADER: logo + nombre del blog -->
    <header class="bloque header">
        <div class="logo">LOGO</div>
        <h1>Mi Blog Personal</h1>
    </header>

    <!-- NAVEGACIÓN PRINCIPAL -->
    <nav class="bloque nav">
        <a href="#">Inicio</a>
        <a href="#">Artículos</a>
        <a href="#">Sobre mí</a>
        <a href="#">Contacto</a>
    </nav>

    <!-- ZONA CENTRAL: main + aside lado a lado -->
    <div class="contenedor">
        <main class="bloque main">
            <article class="tarjeta">Artículo 1</article>
            <article class="tarjeta">Artículo 2</article>
            <article class="tarjeta">Artículo 3</article>
        </main>

        <aside class="bloque aside">
            <h3>Últimos posts</h3>
            <hr>
            <h3>Categorías</h3>
        </aside>
    </div>

    <!-- PIE -->
    <footer class="bloque footer">
        © 2026 Mi Blog
    </footer>
</body>
</html>
```

## CSS completo (comentado)

```css
/* Reset universal: elimina márgenes/padding por defecto y aplica box-sizing global */
* { margin: 0; padding: 0; box-sizing: border-box; }

body { font-family: Arial, sans-serif; }

/* Estilo común a todas las zonas del wireframe */
.bloque {
    padding: 20px;
    color: white;
    text-align: center;
}

/* Cada zona con un color para visualizarla */
.header { background: #6c757d; display: flex; align-items: center; justify-content: center; gap: 20px; }
.nav    { background: #495057; display: flex; gap: 20px; justify-content: center; }
.nav a  { color: white; text-decoration: none; }
.main   { background: #0d6efd; flex: 1; display: flex; gap: 15px; }
.aside  { background: #fd7e14; width: 250px; }
.footer { background: #212529; }

/* Contenedor que pone main y aside en fila */
.contenedor { display: flex; gap: 15px; padding: 15px; }

/* Las tarjetas de artículo: borde discontinuo para que parezcan placeholder */
.tarjeta {
    background: rgba(255,255,255,0.2);
    padding: 30px;
    border: 2px dashed white;
    flex: 1;
}

.logo {
    background: white;
    color: black;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
}
```

## Cómo verificar responsive

1. Abre `index.html` en el navegador.
2. **F12** para abrir DevTools.
3. Clic en el ícono de móvil/tablet (Toggle device toolbar).
4. Selecciona "iPhone 12 Pro" o pon el ancho a 375px.
5. **Observación esperada**: el aside de 250px hace que la zona central se rompa o salga del ancho. Esto es **información valiosa**: tu wireframe móvil tiene que apilar el aside debajo del main.

> El wireframe **no tiene** que ser responsive todavía — su utilidad aquí es **revelar** los problemas que tendrás que resolver en el diseño real.

## Alternativas peores

### 1) Saltarse el wireframe y empezar con HTML

```html
<!-- ❌ -->
<div>
  <div>...</div>
  <div>...</div>
</div>
<!-- ...y media hora después no sabes qué bloque es qué -->
```

Acabas reescribiendo el HTML 3 veces porque no tenías un mapa.

### 2) Usar `<table>` para el layout

```html
<!-- ❌ NUNCA -->
<table>
  <tr>
    <td colspan="2"><h1>Blog</h1></td>
  </tr>
  <tr>
    <td>Main</td>
    <td>Aside</td>
  </tr>
</table>
```

Era práctica común en 2002, pero hoy es un anti-patrón grave: **rompe la accesibilidad** (los lectores de pantalla anuncian "tabla, fila 1, columna 1") y no es responsive. Las tablas son para **datos tabulares**, no para layout.

### 3) Wireframe en Photoshop con colores y tipografías

```text
❌ Pierdes 2 horas eligiendo el azul exacto del header
   antes de saber si el header siquiera va en esa posición.
```

El wireframe es **gris**. La fidelidad llega cuando la estructura está validada.

### 4) Solo wireframe desktop

```text
❌ Diseñas para 1920×1080 y luego, en móvil, llega el desastre.
```

Mobile-first o, como mínimo, dos wireframes desde el principio.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El aside no aparece a la derecha | Falta `display: flex` en `.contenedor` | Añádelo. |
| El aside ocupa toda la altura | Es un comportamiento esperado de flex con `align-items: stretch` (por defecto) | Está bien así. |
| Las tarjetas no se reparten igual | Falta `flex: 1` en `.tarjeta` | Añádelo. |
| Los enlaces se ven azules y subrayados | Estilo por defecto del navegador | `text-decoration: none; color: white;` en `.nav a`. |
| Sale scroll horizontal en móvil | El aside fijo de 250px no entra | Es **lo esperado** del wireframe. Diseña la versión móvil aparte. |

## Lo que has aprendido

- Qué es un wireframe y por qué se hace antes del HTML.
- Diferencia entre wireframe, mockup y prototipo.
- Cómo traducir un boceto en una maqueta HTML semántica.
- Etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`).
- Técnica de *blocking out* con colores planos.
- Identificar problemas de layout antes de invertir tiempo en CSS final.
