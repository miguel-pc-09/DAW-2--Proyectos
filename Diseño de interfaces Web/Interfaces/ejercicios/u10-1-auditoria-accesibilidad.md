# Ejercicio U10.1 — Auditoría de accesibilidad: arregla esta página

> 📚 Unidad 10 · Accesibilidad y usabilidad
> ⏱️ Tiempo: 30-40 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: identificar y corregir los errores de accesibilidad más comunes.

## Enunciado

Te damos una página HTML con **10 problemas de accesibilidad**. Tu trabajo:

1. Identificar cada problema.
2. Corregirlo.
3. Validar con herramientas (WAVE, Lighthouse).

---

## ¿Qué vas a aprender?

- Las pautas WCAG 2.1 nivel AA (las básicas).
- Texto alternativo (`alt`) correcto.
- Contraste de colores mínimo (4.5:1 texto normal, 3:1 texto grande).
- Etiquetas semánticas HTML5 vs `<div>` para todo.
- `<label>` asociada a inputs.
- Atributo `lang` en `<html>`.
- Foco visible para navegación con teclado.
- Texto de enlaces descriptivo (no "click aquí").
- Jerarquía de encabezados sin saltos.
- Estructura con landmarks (header, nav, main, footer).
- Atributo `aria-label` para iconos.

## Cómo va a quedar (el ejercicio es un antes/después)

```
ANTES (página llena de errores)              DESPUÉS (corregida)
                                              ↓
+---------------------------------+          ✅ Pasa WCAG AA
| <div class="header">           |          ✅ Lighthouse 100/100
|   ...                           |          ✅ Navegable con teclado
| </div>                          |          ✅ Lector de pantalla la entiende
| <img src="hero.jpg">            |
| <p><a>click aquí</a></p>        |
| <h1>Bienvenido</h1>             |
| <h4>Sin h2 ni h3</h4>           |
+---------------------------------+
```

---

## Paso 1 — La página con 10 errores

`malo.html`:

```html
<!DOCTYPE html>
<html>                                                <!-- ❌ ERROR 1: sin lang -->
<head>
    <meta charset="UTF-8">
    <title>Mi tienda</title>
</head>
<body style="color: #ccc; background: white;">        <!-- ❌ ERROR 2: contraste -->

    <div class="header">                              <!-- ❌ ERROR 3: div en vez de header -->
        <h1>MiTienda</h1>
        <div class="nav">                             <!-- ❌ (también no semántico) -->
            <span onclick="ir('/')">Inicio</span>     <!-- ❌ ERROR 4: span clickable -->
            <span onclick="ir('/productos')">Productos</span>
        </div>
    </div>

    <img src="hero.jpg">                              <!-- ❌ ERROR 5: sin alt -->

    <h1>Ofertas de la semana</h1>                     <!-- ❌ ERROR 6: dos h1 -->
    <h4>Categoría: Electrónica</h4>                   <!-- ❌ ERROR 7: salto h1 → h4 -->

    <p>Para más información <a href="/info">haz click aquí</a>.</p>  <!-- ❌ ERROR 8 -->

    <form>
        <input type="email" placeholder="Tu email">   <!-- ❌ ERROR 9: sin label -->
        <button style="background: red; color: white;">×</button>  <!-- ❌ ERROR 10: icono sin aria -->
    </form>

    <style>
        *:focus { outline: none; }                    <!-- ❌ ERROR EXTRA: quita focus -->
    </style>

</body>
</html>
```

## Paso 2 — Identificación de los errores

| # | Error | Pauta WCAG |
|---|-------|------------|
| 1 | `<html>` sin `lang` | 3.1.1 Language of Page |
| 2 | Texto gris claro (#ccc) sobre blanco — contraste 1.6:1 | 1.4.3 Contrast |
| 3 | Layout con `<div>` en vez de etiquetas semánticas | 1.3.1 Info and Relationships |
| 4 | `<span onclick>` para acciones (no enfocable con teclado) | 2.1.1 Keyboard |
| 5 | `<img>` sin atributo `alt` | 1.1.1 Non-text Content |
| 6 | Dos `<h1>` en la misma página | 1.3.1 (recomendado) |
| 7 | Salto de jerarquía (`<h1>` → `<h4>`) | 1.3.1 |
| 8 | Texto del enlace "haz click aquí" sin contexto | 2.4.4 Link Purpose |
| 9 | `<input>` sin `<label>` asociada | 1.3.1 / 3.3.2 Labels |
| 10 | Botón con icono "×" sin texto accesible | 4.1.2 Name, Role, Value |
| + | `outline: none` quita el indicador de foco | 2.4.7 Focus Visible |

## Paso 3 — La página corregida

`bueno.html`:

```html
<!DOCTYPE html>
<html lang="es">                                      <!-- ✅ 1: lang -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiTienda — Ofertas semanales</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>                                                <!-- ✅ 2: contraste corregido en CSS -->

    <header>                                          <!-- ✅ 3: etiqueta semántica -->
        <h1>MiTienda</h1>
        <nav aria-label="Principal">
            <ul>
                <li><a href="/">Inicio</a></li>       <!-- ✅ 4: links de verdad -->
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <img src="hero.jpg"
             alt="Persona usando un portátil con muchos productos electrónicos a su alrededor"
             width="1200" height="400">              <!-- ✅ 5: alt descriptivo -->

        <h2>Ofertas de la semana</h2>                 <!-- ✅ 6: h2 (un h1 por página) -->

        <section>
            <h3>Electrónica</h3>                      <!-- ✅ 7: jerarquía consecutiva -->
            <p>
                Para más información sobre nuestras ofertas en electrónica,
                <a href="/info">consulta el catálogo completo</a>.   <!-- ✅ 8 -->
            </p>
        </section>

        <section>
            <h3>Suscríbete a la newsletter</h3>
            <form action="/suscribir" method="post">
                <label for="email">Tu correo electrónico</label>  <!-- ✅ 9 -->
                <input type="email" id="email" name="email" required
                       autocomplete="email" placeholder="ejemplo@correo.com">

                <button type="submit" aria-label="Suscribirse a la newsletter">
                    <span aria-hidden="true">→</span>            <!-- ✅ 10: aria-label -->
                </button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 MiTienda</p>
    </footer>

</body>
</html>
```

CSS asociado:

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    color: #212529;                  /* ✅ 2: contraste ~16:1 sobre blanco */
    background: white;
    line-height: 1.6;
}

header, main, footer {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 10px 0;
}

nav a {
    color: #0d6efd;
    text-decoration: none;
    font-weight: 600;
}

nav a:hover { text-decoration: underline; }

img {
    max-width: 100%;
    height: auto;
}

h2 { margin: 20px 0 10px; }
h3 { margin: 15px 0 8px; color: #495057; }
p { margin-bottom: 10px; }

a { color: #0d6efd; }

a:focus-visible,                     /* ✅ foco visible */
button:focus-visible,
input:focus-visible {
    outline: 3px solid #ffc107;
    outline-offset: 2px;
}

form {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    max-width: 400px;
}

label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
    flex-basis: 100%;
}

input[type="email"] {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ced4da;
    border-radius: 4px;
}

button {
    background: #0d6efd;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
}

button:hover { background: #0b5ed7; }
```

## Paso 4 — Las pautas WCAG resumidas

WCAG (Web Content Accessibility Guidelines) tiene 4 principios. Lo que un examen suele preguntar:

### POUR

| Principio | Significa |
|-----------|-----------|
| **P** Perceivable | El contenido debe ser perceptible por todos los sentidos (alt para imágenes, subtítulos para audio). |
| **O** Operable | Se puede manejar sin ratón (teclado, voz). |
| **U** Understandable | Lenguaje claro, errores explicados, comportamiento predecible. |
| **R** Robust | Funciona con cualquier tecnología asistiva. |

### Niveles

- **A** — mínimo absoluto.
- **AA** — el objetivo razonable (lo que pide la ley en muchos países).
- **AAA** — máximo, solo aplicable a ciertos contextos.

🔥 En España, la ley exige **AA** en webs del sector público (Real Decreto 1112/2018).

## Paso 5 — Comprobaciones obligatorias

### A) Teclado solo

Desconecta el ratón. Navega tu página solo con:

- `Tab` — siguiente elemento enfocable.
- `Shift + Tab` — anterior.
- `Enter` — activar enlace/botón.
- `Espacio` — activar checkbox/botón.
- `Flechas` — moverse en radio buttons, selects.

🔥 Si no puedes hacer **todo** lo importante (rellenar formulario, abrir menú, cerrar modal), tu página falla.

### B) Lector de pantalla

Activa NVDA (Windows, gratuito) o Narrador (Windows nativo, Win + Ctrl + Enter). Cierra los ojos. ¿Entiendes la estructura? ¿Sabes navegar?

### C) Zoom 200%

Ctrl + + hasta llegar al 200%. ¿Sigues viendo todo? ¿Sigue siendo usable? Es un requisito WCAG AA.

### D) Sin CSS

En DevTools, desactiva todos los stylesheets. ¿Sigue siendo legible? Si todo desaparece, tu HTML no es bueno.

### E) Contraste

Cada par texto/fondo:

- Texto normal (< 18pt): mínimo **4.5:1**.
- Texto grande (≥ 18pt o ≥ 14pt bold): mínimo **3:1**.

Comprueba con **WebAIM contrast checker** o el panel de DevTools (Chrome).

## Paso 6 — Herramientas

### Lighthouse (Chrome DevTools)

1. F12 → pestaña **Lighthouse**.
2. Marca solo "Accessibility".
3. Generate report.
4. Te da una puntuación de 0-100 y una lista de fallos con explicaciones.

🔥 **Objetivo**: 90+ para AA, 100 ideal.

### WAVE (extensión navegador)

1. Instala WAVE de WebAIM.
2. Pulsa el icono en la barra del navegador.
3. Te marca los errores **visualmente** sobre la página.

### axe DevTools (extensión)

Similar a Lighthouse pero más detallado en errores ARIA.

### Comprobador de contraste

https://webaim.org/resources/contrastchecker/

### Validador HTML

https://validator.w3.org/

Un HTML inválido suele tener problemas de accesibilidad asociados.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| `<div onclick>` para botones | No enfocable con teclado, lector dice "agrupación" | Usa `<button>`. |
| `alt="imagen.jpg"` | Lector lee "imagen jpg" (inútil) | Descriptivo o `alt=""`. |
| `placeholder` sustituye a label | Desaparece al escribir, mal accesible | Label visible siempre. |
| `outline: none` sin alternativa | Quien usa teclado se pierde | Mantén o sustituye por otro indicador. |
| Color como única indicación | Daltonismo | Color + texto + icono. |
| Texto "click aquí" / "más" | Sin contexto fuera del texto envolvente | "Descargar PDF del informe 2026". |
| Imagen con texto importante | Si no puede cargar, se pierde el mensaje | Usa texto real con CSS. |
| Audio/video sin transcripción | Personas sordas no acceden | Subtítulos + transcripción. |
| Tabla para layout | Lector anuncia "tabla, fila 1, celda 1..." | Tablas solo para datos. |
| Formulario sin `<fieldset>` para grupos | Lector no entiende relación entre radios | Agrupa con fieldset+legend. |
| Mensajes de error solo con color rojo | Daltonismo | Texto + icono. |
| Animaciones que no respetan `prefers-reduced-motion` | Personas con vértigo sufren | Detecta y reduce. |
| Tiempo límite para formularios | Estrés, exclusión | Ofrece extender el tiempo. |
| Texto en mayúsculas con `text-transform: uppercase` | Algunos lectores deletrean | Usa mayúsculas si el texto real lo es. |
| `<a href="#"` con `onclick` | Si JS falla, no funciona | Usa `<button>`. |

## Código HTML completo (versión corregida)

(Ver Paso 3.)

## Cómo verificar

1. Abre `bueno.html` en el navegador.
2. Pulsa **Tab** repetidamente → ves cómo el foco avanza por enlaces y formulario, siempre visible (halo amarillo).
3. **F12** → Lighthouse → ejecuta accesibilidad → 95+/100.
4. Instala **WAVE** → pulsa el icono → no debe haber errores rojos (warnings amarillos son OK).
5. **Contraste**: F12 → inspecciona el texto → en "Styles" verás la ratio (16:1 sobre blanco con `#212529`).
6. **Cierra los ojos**: con un lector de pantalla, navega → entiendes la estructura (anuncia "navegación principal", "encabezado nivel 2 Ofertas", "región contenido principal").

## Alternativas peores

### 1) "Lo arreglamos cuando termine el proyecto"

```
❌ Casi nunca se hace después. Lo bonito de accesible es que es BARATO de hacer desde el inicio y CARO retroactivamente.
```

### 2) "Pongo aria-label a todo"

```html
<!-- ❌ ARIA mal aplicado puede empeorar -->
<button aria-label="botón">×</button>
```

La primera regla de ARIA: **NO uses ARIA si HTML nativo ya lo da**. `<button>` ya es un botón; basta con que dentro haya texto significativo (`aria-label="Cerrar"`).

### 3) Overlay "Modo accesible"

```html
<!-- ❌ los overlays comerciales (UserWay, AccessiBe) -->
<script src="https://accessibe.com/..."></script>
```

Son **demandados constantemente** por no cumplir realmente. La accesibilidad se construye, no se "añade con un widget".

### 4) Tabindex enorme

```html
<!-- ❌ -->
<button tabindex="999">Botón</button>
```

`tabindex` positivo rompe el orden natural del DOM. Solo usa `tabindex="0"` (sí enfocable) y `tabindex="-1"` (solo programáticamente). Otros valores casi nunca.

### 5) `aria-hidden="true"` sobre elementos interactivos

```html
<!-- ❌ esconde el botón del lector PERO sigue siendo enfocable -->
<button aria-hidden="true">Enviar</button>
```

Resultado confuso: el usuario tabula a un elemento "invisible" para el lector.

### 6) Skip-link mal implementado

```html
<!-- ❌ se ve siempre, feo -->
<a href="#main">Saltar al contenido</a>
```

Lo común: ocultarlo visualmente y mostrarlo SOLO al recibir foco con teclado:

```css
.skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    background: black;
    color: white;
    padding: 10px;
}

.skip-link:focus {
    top: 0;
}
```

### 7) "Solo móvil" sin atributo lang

```html
<!-- ❌ -->
<html>
    ...
```

Sin `lang`, los lectores de pantalla pronuncian las palabras como si fueran inglés.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Lighthouse marca "Background and foreground colors do not have a sufficient contrast ratio" | Contraste insuficiente | Cambia el color (DevTools sugiere uno que pase). |
| "Image elements do not have alt attributes" | Faltan `alt` | Añádelos. |
| "Form elements do not have associated labels" | Inputs sin label | Asocia con `for="id"`. |
| "Buttons do not have an accessible name" | Botón con solo icono sin texto | `aria-label="..."` o texto oculto. |
| "Document does not have a meta description" | Falta `<meta name="description">` | Añádelo (SEO + accesibilidad). |
| "Heading elements are not in a sequentially-descending order" | Saltas niveles | h1 → h2 → h3 (sin saltarse). |
| "Links do not have a discernible name" | Solo iconos o vacíos | Aporta texto. |
| WAVE marca "empty link" | `<a href="">contenido vacío</a>` | Aporta texto o `aria-label`. |

## Lo que has aprendido

- WCAG 2.1 AA (objetivo razonable).
- Principios POUR: Perceivable, Operable, Understandable, Robust.
- 10 errores típicos y cómo arreglarlos.
- `<html lang="...">` obligatorio.
- Contraste 4.5:1 mínimo (texto normal) / 3:1 (texto grande).
- Etiquetas semánticas (header, nav, main, footer, section, article, aside).
- `<button>` para acciones, `<a>` para navegación.
- `<label for="id">` siempre asociada al input.
- `alt` descriptivo o vacío (decorativo), nunca redundante.
- Jerarquía de encabezados sin saltos.
- `aria-label` para iconos.
- Focus visible obligatorio.
- Texto de enlaces descriptivo (no "click aquí").
- Herramientas: Lighthouse, WAVE, axe, lector de pantalla, comprobador de contraste.
- La primera regla de ARIA: **NO uses ARIA si HTML nativo basta**.
