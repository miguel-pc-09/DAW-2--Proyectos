# Ejercicio U10.2 — Formulario completamente accesible con ARIA

> 📚 Unidad 10 · Accesibilidad y usabilidad
> ⏱️ Tiempo: 45-55 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: construir un formulario que pase **WCAG AA 100%** con etiquetas, validación accesible, mensajes de error y navegación por teclado perfectos.

## Enunciado

Formulario de inscripción a un evento. Debe tener:

1. **Skip link** al contenido principal.
2. **Landmarks** correctos (header, nav, main, footer).
3. **Fieldset/legend** para agrupar campos relacionados.
4. **Labels** asociadas, mensajes de ayuda con `aria-describedby`.
5. **Validación accesible**: errores anunciados, `aria-invalid`, `aria-required`.
6. **Focus visible** estilizado.
7. **Mensajes en vivo** (live regions) cuando se envía.
8. **Botones** con label correcto.
9. **Contraste** WCAG AAA donde sea posible.
10. **Soporte teclado completo**.

---

## ¿Qué vas a aprender?

- `aria-label`, `aria-labelledby`, `aria-describedby`.
- `aria-invalid`, `aria-required`, `aria-live`.
- Roles ARIA: `alert`, `status`, `navigation`, `main`, `complementary`.
- Skip links (saltar al contenido principal).
- `tabindex` y orden de tabulación correcto.
- Mensajes de error accesibles (visible + anunciado).
- Live regions (`aria-live="polite"` / `assertive`).
- `lang` por sección si hay varios idiomas.
- `<fieldset>` y `<legend>` para grupos.
- Estado `:focus-visible` con contraste alto.
- Cuándo NO usar ARIA (regla 1 de ARIA).

## Cómo va a quedar (boceto ASCII)

```
[Saltar al contenido]   ← visible solo con Tab

+----------------------------------------------------+
| MiEvento                          [Inicio] [Cuenta]|   ← header + nav
+----------------------------------------------------+

  Inscripción al evento DevConf 2026

  ┌─ Datos personales ─────────────────────────────┐
  │ Nombre completo *                              │
  │ [____________________________]                 │
  │ Mínimo 2 caracteres                           │
  │                                                │
  │ Email *                                        │
  │ [____________________________]                 │
  │ ⚠ El correo no es válido                      │ ← error accesible
  │                                                │
  │ Teléfono                                       │
  │ [____________________________]                 │
  └────────────────────────────────────────────────┘

  ┌─ Preferencias ─────────────────────────────────┐
  │ Track preferido                                │
  │   ◉ Backend                                    │
  │   ○ Frontend                                   │
  │   ○ DevOps                                     │
  │                                                │
  │ Días que asistirás (selecciona uno o más)      │
  │   ☑ Lunes                                      │
  │   ☐ Martes                                     │
  │   ☑ Miércoles                                  │
  └────────────────────────────────────────────────┘

  [   Inscribirme   ]

  ✅ Inscripción registrada con éxito.           ← live region
                                                   (se anuncia al lector)
```

---

## Paso 1 — Skip link (saltar al contenido)

```html
<a href="#main" class="skip-link">Saltar al contenido principal</a>
```

```css
.skip-link {
    position: absolute;
    top: -100px;            /* oculto fuera de pantalla */
    left: 0;
    background: #0d6efd;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    font-weight: bold;
    z-index: 9999;
}

.skip-link:focus {
    top: 0;                 /* aparece al recibir foco con Tab */
}
```

### Por qué un skip link

Quien navega con teclado o lector de pantalla, al cargar la página, **vería primero todo el header y la navegación** antes de llegar al contenido. Para cada página. Es horrible.

El skip link es el **primer** elemento enfocable. Al pulsar Tab nada más cargar, recibe foco. Pulsa Enter → salta directo al `<main>`.

🔥 **Es obligatorio WCAG AA en sitios con navegación repetida**.

## Paso 2 — Estructura con landmarks

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscripción DevConf 2026</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <a href="#main" class="skip-link">Saltar al contenido principal</a>

    <header>
        <a href="/" class="logo">MiEvento</a>
        <nav aria-label="Navegación principal">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/cuenta">Cuenta</a></li>
            </ul>
        </nav>
    </header>

    <main id="main">
        <h1>Inscripción al evento DevConf 2026</h1>
        <!-- formulario aquí -->
    </main>

    <footer>
        <p>&copy; 2026 MiEvento</p>
    </footer>
</body>
</html>
```

### Landmarks

Los lectores de pantalla agrupan la página en "landmarks":

| Etiqueta | Rol implícito |
|----------|---------------|
| `<header>` (top-level) | `banner` |
| `<nav>` | `navigation` |
| `<main>` | `main` |
| `<aside>` | `complementary` |
| `<footer>` (top-level) | `contentinfo` |
| `<section>` (con `aria-label`) | `region` |
| `<form>` (con `aria-label`) | `form` |

🔥 El usuario de lector de pantalla puede pulsar una tecla (`D` en NVDA) para saltar de landmark en landmark. Sin landmarks, navega un párrafo a la vez.

### `aria-label` en `<nav>`

Si hay varios `<nav>` (principal, breadcrumb, footer...), distínguelos:

```html
<nav aria-label="Principal">...</nav>
<nav aria-label="Breadcrumb">...</nav>
<nav aria-label="Footer">...</nav>
```

Sin esto, el lector dice "navegación, navegación, navegación" para los tres.

## Paso 3 — Fieldset con legend

```html
<form action="/inscribir" method="post" novalidate>
    <fieldset>
        <legend>Datos personales</legend>

        <div class="campo">
            <label for="nombre">
                Nombre completo
                <span aria-hidden="true" class="req">*</span>
                <span class="visually-hidden">(obligatorio)</span>
            </label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                required
                minlength="2"
                aria-required="true"
                aria-describedby="nombre-help"
                autocomplete="name">
            <small id="nombre-help" class="ayuda">Mínimo 2 caracteres.</small>
        </div>

        <div class="campo">
            <label for="email">
                Email
                <span aria-hidden="true" class="req">*</span>
                <span class="visually-hidden">(obligatorio)</span>
            </label>
            <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                aria-describedby="email-help email-error"
                aria-invalid="false"
                autocomplete="email">
            <small id="email-help" class="ayuda">Te enviaremos las novedades.</small>
            <p id="email-error" class="error" role="alert" hidden>
                <span aria-hidden="true">⚠</span> El correo no es válido.
            </p>
        </div>

        <div class="campo">
            <label for="tel">Teléfono</label>
            <input
                type="tel"
                id="tel"
                name="tel"
                autocomplete="tel"
                aria-describedby="tel-help">
            <small id="tel-help" class="ayuda">Formato +34 600 000 000 (opcional).</small>
        </div>
    </fieldset>

    <!-- ... -->
</form>
```

### Atributos clave

| Atributo | Para qué |
|----------|----------|
| `<fieldset>` + `<legend>` | Agrupa visualmente y anuncia el grupo al lector. |
| `<label for="x">` + `id="x"` | Asocia label con input. Pulsar el label enfoca el input. |
| `required` | Validación HTML5. |
| `aria-required="true"` | Refuerzo ARIA (alguna versión de lector lo necesita). |
| `aria-describedby="id"` | Asocia el input con su mensaje de ayuda. El lector lo lee después del label. |
| `aria-invalid="false"` (inicial) | Estado de validación. Cambia a `true` cuando hay error. |
| `aria-describedby="help error"` | Múltiples descripciones separadas por espacio. |
| `role="alert"` en el mensaje de error | Hace que el lector lo anuncie inmediatamente al mostrarse. |
| `hidden` (atributo HTML5) | Oculta visualmente Y para lectores. |
| `autocomplete="name"` | Permite a navegador y password manager autocompletar. |

### Truco: `.visually-hidden`

```css
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

Oculta el texto visualmente pero los lectores lo leen. Útil para añadir contexto que solo necesitan ellos:

```html
<label>
    Email
    <span aria-hidden="true">*</span>            <!-- asterisco visible -->
    <span class="visually-hidden">(obligatorio)</span>   <!-- texto solo para lector -->
</label>
```

## Paso 4 — Radios y checkboxes accesibles

```html
<fieldset>
    <legend>Preferencias</legend>

    <fieldset class="grupo">
        <legend>Track preferido</legend>

        <div class="opcion">
            <input type="radio" id="track-be" name="track" value="backend" checked>
            <label for="track-be">Backend</label>
        </div>
        <div class="opcion">
            <input type="radio" id="track-fe" name="track" value="frontend">
            <label for="track-fe">Frontend</label>
        </div>
        <div class="opcion">
            <input type="radio" id="track-do" name="track" value="devops">
            <label for="track-do">DevOps</label>
        </div>
    </fieldset>

    <fieldset class="grupo">
        <legend>Días que asistirás (selecciona uno o más)</legend>

        <div class="opcion">
            <input type="checkbox" id="dia-l" name="dias" value="lunes">
            <label for="dia-l">Lunes</label>
        </div>
        <div class="opcion">
            <input type="checkbox" id="dia-m" name="dias" value="martes">
            <label for="dia-m">Martes</label>
        </div>
        <div class="opcion">
            <input type="checkbox" id="dia-x" name="dias" value="miercoles">
            <label for="dia-x">Miércoles</label>
        </div>
    </fieldset>
</fieldset>
```

🔥 **Por qué `<fieldset>` anidado**: el grupo de radios y el grupo de checkboxes son sub-secciones del "Preferencias". Cada uno con su `<legend>` para que el lector anuncie "Track preferido, grupo de radios, Backend, seleccionado".

## Paso 5 — Botón y live region

```html
<button type="submit">Inscribirme</button>

<div id="resultado" role="status" aria-live="polite" class="resultado"></div>
```

```javascript
// Cuando el formulario se envía con éxito:
document.getElementById('resultado').textContent =
    '✅ Inscripción registrada con éxito.';
```

### `aria-live`

Una región **viva** es un sitio donde aparecen mensajes dinámicos. El lector los anuncia automáticamente.

| Valor | Cuándo se anuncia |
|-------|-------------------|
| `off` (default) | No se anuncia. |
| `polite` | Cuando el lector termine lo que está leyendo. **Casi siempre el bueno**. |
| `assertive` | Inmediatamente, interrumpiendo. Solo para urgencias. |

Equivalencias semánticas:

- `role="status"` → `aria-live="polite"` (mensaje informativo).
- `role="alert"` → `aria-live="assertive"` (urgente).
- `role="log"` → `aria-live="polite"` (log de mensajes).

🔥 **Trampa**: la live region DEBE existir antes (vacía) y luego rellenarse. Si la añades al DOM después con JS, algunos lectores no la oirán.

## Paso 6 — Validación accesible con JS

Cuando un input falla, además de mostrar el error visual:

```javascript
const email = document.getElementById('email');
const error = document.getElementById('email-error');

email.addEventListener('blur', () => {
    if (!email.validity.valid) {
        email.setAttribute('aria-invalid', 'true');
        error.removeAttribute('hidden');
    } else {
        email.setAttribute('aria-invalid', 'false');
        error.setAttribute('hidden', '');
    }
});
```

### Por qué `aria-invalid` Y mostrar el mensaje

- `aria-invalid="true"` → el lector anuncia "inválido" al enfocar el campo.
- El mensaje con `role="alert"` → se anuncia inmediatamente al aparecer.
- El mensaje visual → para quien ve.

Tres formas de informar = accesible para todos.

## Paso 7 — Focus visible bonito

```css
*:focus-visible {
    outline: 3px solid #ffc107;
    outline-offset: 3px;
    border-radius: 3px;
}

button:focus-visible {
    outline-offset: 4px;
}
```

`:focus-visible` (vs `:focus`) aplica **solo cuando el foco llega por teclado**, no por click. Más limpio visualmente.

🔥 NUNCA `*:focus { outline: none; }` sin alternativa. Si te empeñas en quitarlo, sustitúyelo:

```css
*:focus { outline: none; }
*:focus-visible {
    /* alguna indicación: border, box-shadow, background */
    box-shadow: 0 0 0 3px #ffc107;
}
```

## Paso 8 — CSS completo (accesible)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
    --primario: #0d4d99;       /* azul más oscuro = contraste AAA (8:1) sobre blanco */
    --error: #b00020;          /* rojo accesible */
    --texto: #1a1a1a;          /* casi negro */
    --gris: #495057;
    --foco: #ffc107;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    color: var(--texto);
    background: white;
    line-height: 1.6;
}

/* === SKIP LINK === */
.skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    background: var(--primario);
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    font-weight: bold;
    z-index: 9999;
}

.skip-link:focus {
    top: 0;
}

/* === VISUALLY HIDDEN === */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* === LAYOUT === */
header, main, footer {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #dee2e6;
    margin-bottom: 30px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: var(--primario);
    text-decoration: none;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav a {
    color: var(--primario);
    text-decoration: none;
    font-weight: 600;
}

nav a:hover { text-decoration: underline; }

/* === FORMULARIO === */
h1 { margin-bottom: 25px; color: var(--texto); }

fieldset {
    border: 1px solid #ced4da;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 25px;
}

legend {
    padding: 0 10px;
    font-weight: bold;
    color: var(--primario);
    font-size: 18px;
}

fieldset fieldset {
    border: none;
    padding: 0;
    margin-bottom: 15px;
}

fieldset fieldset legend {
    padding: 0;
    margin-bottom: 8px;
    font-size: 16px;
    color: var(--texto);
}

.campo { margin-bottom: 20px; }

label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
}

.req { color: var(--error); }

input[type="text"],
input[type="email"],
input[type="tel"] {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #ced4da;
    border-radius: 4px;
    background: white;
    color: var(--texto);
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus {
    border-color: var(--primario);
}

input[aria-invalid="true"] {
    border-color: var(--error);
    background: #fff5f5;
}

.ayuda {
    display: block;
    color: var(--gris);
    font-size: 14px;
    margin-top: 4px;
}

.error {
    color: var(--error);
    font-size: 14px;
    margin-top: 4px;
    font-weight: 600;
}

.opcion {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
}

.opcion label { margin: 0; font-weight: normal; }

button[type="submit"] {
    background: var(--primario);
    color: white;
    border: none;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background: #093a73;
}

/* === FOCUS VISIBLE === */
*:focus-visible {
    outline: 3px solid var(--foco);
    outline-offset: 3px;
    border-radius: 3px;
}

/* === LIVE REGION === */
.resultado {
    margin-top: 20px;
    padding: 12px;
    color: var(--texto);
    font-weight: 600;
}

.resultado:not(:empty) {
    background: #d4edda;
    border: 1px solid #28a745;
    border-radius: 4px;
}

footer {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid #dee2e6;
    color: var(--gris);
}
```

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| ARIA cuando hay HTML nativo | Empeora la accesibilidad | Usa primero HTML semántico. |
| `aria-label` en elementos con texto visible | El lector ignora el texto visible | Solo usa aria-label en elementos SIN texto. |
| `tabindex` positivo | Rompe el orden natural | Usa `0` y `-1`, no más. |
| `outline: none` sin alternativa | Quien usa teclado se pierde | Pon un `:focus-visible` reemplazo. |
| Live region añadida al DOM con JS | Algunos lectores no la oyen | Debe existir vacía desde el inicio. |
| `display: none` en mensaje de error que necesitas anunciar | El lector no lo lee | Usa `hidden` (atributo) o `aria-hidden=false` cuando aparece. |
| Skip link visible siempre | Mancha el diseño | Posición fuera de pantalla, aparece al focus. |
| `<button>` con un `<div>` dentro y `onclick` en el div | Doble clicable, confuso | Pon `onclick` en `<button>`. |
| Iconos sin texto accesible | Lector dice "botón" | `aria-label` o texto oculto. |
| Confiar solo en color para distinguir | Daltonismo | Color + texto + icono. |
| Múltiples `<nav>` sin etiquetar | "Navegación, navegación..." | `aria-label` en cada uno. |
| Falta `aria-required` | Algunos lectores no anuncian "obligatorio" | Combínalo con `required`. |
| Mensaje de error visible sin asociar al campo | El lector no lo enlaza | `aria-describedby="id-del-error"`. |
| Animación que provoca vértigo | Inaccesible | Respeta `prefers-reduced-motion`. |

## Cómo verificar

1. Abre `index.html`.
2. **Solo teclado**: cierra los ojos.
   - Tab → skip link aparece. Enter → salta al main.
   - Tab → recorre todos los campos en orden lógico.
   - Cada elemento tiene halo amarillo visible.
3. **Lector de pantalla** (NVDA gratis, o Narrador de Windows con Win+Ctrl+Enter):
   - Anuncia "navegación principal".
   - Anuncia "Datos personales, grupo".
   - Lee cada label y luego el campo y luego la ayuda.
   - Al enviar el form, anuncia "Inscripción registrada con éxito".
4. **Lighthouse → Accessibility**: 100/100.
5. **WAVE**: cero errores rojos.
6. **Contrast checker**: prueba `#1a1a1a` sobre blanco → 17.6:1 (AAA).
7. **Zoom 200%**: aumenta el texto, sigue siendo usable.
8. **Modo oscuro del SO**: prueba `prefers-color-scheme: dark` si lo implementas.

## Alternativas peores

### 1) ARIA en todos lados sin sentido

```html
<!-- ❌ -->
<button aria-label="botón" role="button">Enviar</button>
```

`<button>` ya es role button. Y el aria-label "botón" sobrescribe el texto "Enviar" → lector dice "botón" en vez de "Enviar".

### 2) Roles ARIA en elementos nativos

```html
<!-- ❌ redundante -->
<nav role="navigation">
<main role="main">
<header role="banner">
```

`<nav>` ya tiene `role="navigation"` implícito. Solo añadelo si usas `<div>` por alguna razón.

### 3) Inputs sin label "porque queda más limpio"

```html
<!-- ❌ -->
<input type="email" placeholder="Tu email">
```

Falla 1.3.1 y 3.3.2. Pon label visible o, como mínimo, `aria-label`.

### 4) Botones con `<a href="#">`

```html
<!-- ❌ -->
<a href="#" onclick="submitForm()">Enviar</a>
```

Si JS falla, el enlace no hace nada y el usuario está atrapado. Usa `<button type="submit">`.

### 5) Confiar solo en `placeholder`

El placeholder desaparece al escribir. Las personas con problemas cognitivos lo olvidan. La label es **obligatoria**.

### 6) Skip link "Saltar" sin destino

```html
<a href="#main">Saltar</a>
<!-- y no hay <main id="main"> -->
```

Verifica que el destino existe.

### 7) `<div role="button" tabindex="0" onclick>`

```html
<!-- ❌ requiere todo esto y aún falta soportar Enter Y Espacio -->
<div role="button" tabindex="0" onclick="..." onkeydown="if(event.key==='Enter'||event.key===' '){...}">
    Enviar
</div>
```

`<button>` te lo da todo gratis. **Primera regla de ARIA**: si hay HTML nativo, úsalo.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Lector lee "asterisco" al final del label | `*` literal | Ponlo con `aria-hidden="true"` y añade "(obligatorio)" oculto visualmente. |
| Error visible pero no anunciado | Falta `role="alert"` o no está conectado | Pon `role="alert"` y `aria-describedby` en el input. |
| El usuario tabula y "salta" el menú | `tabindex="-1"` por error | Quítalo. |
| `aria-label` no funciona | Está mal escrito o en lugar incorrecto | Comprueba sintaxis. |
| Skip link no aparece | Falta `:focus` con `top: 0` | Verifica CSS. |
| Submit no se procesa al pulsar Enter | Tienes `<button>` sin `type` o sin estar dentro de `<form>` | `type="submit"` y dentro del form. |
| El campo no asocia con el mensaje de error | `aria-describedby` apunta a id inexistente | Verifica IDs. |
| Lighthouse marca "Color contrast" en hover | El color de hover no contrasta | Ajusta también el estado hover. |
| Live region anuncia el contenido inicial | Estaba con texto al cargar | Empieza vacía. |

## Lo que has aprendido

- WCAG AA (objetivo profesional) y POUR.
- Skip link (`.skip-link` que aparece con focus).
- Landmarks HTML5 (header, nav, main, footer, aside) → roles implícitos.
- `aria-label` para distinguir varios `<nav>`.
- `<fieldset>` y `<legend>` (también anidados).
- `<label for="id">` siempre.
- `aria-required`, `aria-invalid`, `aria-describedby` para validación accesible.
- `role="alert"` para mensajes urgentes.
- `aria-live="polite"` / `assertive` (live regions).
- `role="status"` para mensajes de éxito.
- `.visually-hidden` para texto solo para lectores.
- `:focus-visible` para halo visible solo con teclado.
- `tabindex` solo con valores `0` y `-1`.
- Primera regla de ARIA: NO uses ARIA si HTML nativo basta.
- Cómo testear: solo teclado, NVDA, Lighthouse, WAVE, axe.
- Contraste AAA (7:1) cuando se pueda.
