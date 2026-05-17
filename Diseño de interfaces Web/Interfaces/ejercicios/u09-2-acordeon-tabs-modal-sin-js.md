# Ejercicio U9.2 — Acordeón, tabs y modal sin JavaScript

> 📚 Unidad 9 · Contenido interactivo
> ⏱️ Tiempo: 45-55 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: construir tres componentes interactivos clásicos usando **solo HTML + CSS** (sin JS).

## Enunciado

Página con 3 componentes interactivos puramente CSS:

1. **Acordeón** (FAQ con 4 preguntas, cada una se despliega al pulsar).
2. **Tabs** (3 pestañas que cambian de contenido al pulsar).
3. **Modal** (popup que aparece al pulsar un botón, se cierra con X o click fuera).

Todo con HTML semántico + CSS. Bonus: usa `<details>`/`<summary>` para el acordeón (nativo HTML5).

---

## ¿Qué vas a aprender?

- `<details>` y `<summary>` (acordeón nativo HTML5, sin trucos).
- Truco del `:target` para tabs (URL hash determina el tab activo).
- Truco del `:checked` + `<input type="radio">` para tabs sin JS.
- Truco del `:target` para modal.
- `:has(...)` (selector padre — el más nuevo de CSS).
- Animar `max-height` para transiciones de desplegado.
- Transiciones suaves al abrir/cerrar.
- Accesibilidad de cada patrón (cuándo NO usar el truco CSS y preferir JS).

## Cómo va a quedar (boceto ASCII)

```
ACORDEÓN
+---------------------------------------+
| ▶ ¿Cómo me registro?                  |
+---------------------------------------+
| ▼ ¿Cuáles son los métodos de pago?    |
|     Aceptamos tarjetas, PayPal y      |
|     transferencia bancaria.           |
+---------------------------------------+
| ▶ ¿Puedo cancelar mi suscripción?     |
+---------------------------------------+

TABS
+---------------------------------------+
| [ Descripción ] [ Specs ] [ Reseñas ]|
+---------------------------------------+
|  Contenido del tab activo             |
|  Lorem ipsum dolor sit amet.          |
+---------------------------------------+

MODAL
+---------------------------------------+
|                                       |
|   [ Abrir modal ]                     |
|                                       |
+---------------------------------------+
              ↓ pulsa
+---------------------------------------+
|                                       |
| ┌─────────────────────────────┐ ✕    |
| │  ¡Hola desde un modal!     │       |
| │                             │       |
| │  Contenido del popup.       │       |
| │                             │       |
| │  [Aceptar]   [Cancelar]    │       |
| └─────────────────────────────┘       |
|                                       |
+---------------------------------------+
```

---

## Paso 1 — Componente 1: Acordeón con `<details>`

```html
<section class="faq">
    <h2>Preguntas frecuentes</h2>

    <details>
        <summary>¿Cómo me registro?</summary>
        <p>Solo tienes que pulsar el botón "Crear cuenta" en la esquina superior derecha
           y rellenar el formulario.</p>
    </details>

    <details open>
        <summary>¿Cuáles son los métodos de pago?</summary>
        <p>Aceptamos tarjetas de crédito (Visa, MasterCard, Amex), PayPal y transferencia bancaria.</p>
    </details>

    <details>
        <summary>¿Puedo cancelar mi suscripción?</summary>
        <p>Sí, en cualquier momento desde tu perfil → "Suscripción" → "Cancelar".</p>
    </details>

    <details>
        <summary>¿Hay descuentos para estudiantes?</summary>
        <p>Sí, ofrecemos un 50% de descuento verificando tu email institucional (.edu).</p>
    </details>
</section>
```

### Por qué `<details>` y `<summary>` son joya

🔥 **HTML5 trae un acordeón NATIVO** sin trucos:

- `<details>` es el contenedor.
- `<summary>` es la cabecera siempre visible.
- El resto del contenido se muestra/oculta al hacer clic en el summary.
- El atributo `open` lo deja abierto por defecto.
- Es **accesible** sin nada extra (lectores de pantalla lo entienden).
- Funciona con teclado (Enter en el summary).

### Estilizarlo con CSS

```css
.faq {
    max-width: 600px;
    margin: 30px auto;
}

details {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    margin-bottom: 10px;
    overflow: hidden;
}

summary {
    padding: 15px 20px;
    font-weight: 600;
    cursor: pointer;
    list-style: none;          /* quita el triángulo por defecto */
    position: relative;
    padding-left: 40px;
}

/* Triángulo personalizado */
summary::before {
    content: "▶";
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s;
    color: #0d6efd;
}

details[open] summary::before {
    transform: translateY(-50%) rotate(90deg);
}

details > p {
    padding: 0 20px 15px;
    color: #495057;
    line-height: 1.6;
}

/* Quitar el triángulo nativo en Firefox y Safari */
summary::-webkit-details-marker { display: none; }
summary { list-style: none; }
```

### Por qué `list-style: none` y `::-webkit-details-marker`

Por defecto los navegadores ponen un triángulo:

- Firefox / Chrome modernos: `list-style` lo controla.
- Safari y Chrome antiguos: `::-webkit-details-marker` también.

Ponemos los dos para máxima compatibilidad.

### Animar el despliegue (limitación)

🔥 **`<details>` NO se puede animar fácilmente**: cambia de `display: none` a `display: block`, y `display` no es animable.

Workaround moderno (CSS reciente):

```css
details[open] > *:not(summary) {
    animation: fadeIn 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
}
```

Solo anima el contenido interno, no el "deslizamiento" del acordeón. Si quieres animación completa, necesitas JS.

## Paso 2 — Componente 2: Tabs con `:checked`

```html
<section class="tabs">
    <h2>Detalles del producto</h2>

    <!-- Radios INVISIBLES (un radio por tab) -->
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">
    <input type="radio" id="tab3" name="tabs">

    <!-- Labels VISIBLES (cabeceras de tab) -->
    <div class="tab-labels">
        <label for="tab1">Descripción</label>
        <label for="tab2">Specs</label>
        <label for="tab3">Reseñas</label>
    </div>

    <!-- Paneles de contenido -->
    <div class="tab-panels">
        <div class="panel" data-tab="1">
            <h3>Descripción</h3>
            <p>Producto premium con materiales de alta calidad...</p>
        </div>
        <div class="panel" data-tab="2">
            <h3>Especificaciones técnicas</h3>
            <ul>
                <li>Peso: 250g</li>
                <li>Material: aluminio</li>
                <li>Garantía: 2 años</li>
            </ul>
        </div>
        <div class="panel" data-tab="3">
            <h3>Reseñas de usuarios</h3>
            <p>★★★★★ (4.5 / 5 con 234 valoraciones)</p>
        </div>
    </div>
</section>
```

### CSS de los tabs

```css
.tabs {
    max-width: 600px;
    margin: 30px auto;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    overflow: hidden;
}

/* Radios ocultos visualmente pero accesibles */
.tabs input[type="radio"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

/* Labels como cabeceras */
.tab-labels {
    display: flex;
    border-bottom: 1px solid #dee2e6;
    background: #f8f9fa;
}

.tab-labels label {
    flex: 1;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    color: #6c757d;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
}

.tab-labels label:hover {
    color: #0d6efd;
    background: #e9ecef;
}

/* Activar visual al label cuando su radio está marcado */
#tab1:checked ~ .tab-labels label[for="tab1"],
#tab2:checked ~ .tab-labels label[for="tab2"],
#tab3:checked ~ .tab-labels label[for="tab3"] {
    color: #0d6efd;
    border-bottom-color: #0d6efd;
    background: white;
}

/* Paneles: ocultos por defecto */
.panel {
    display: none;
    padding: 30px;
}

/* Mostrar el panel correspondiente */
#tab1:checked ~ .tab-panels .panel[data-tab="1"],
#tab2:checked ~ .tab-panels .panel[data-tab="2"],
#tab3:checked ~ .tab-panels .panel[data-tab="3"] {
    display: block;
    animation: fadeIn 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
```

### Cómo funciona el truco

1. Cada tab tiene un `<input type="radio">` con `name="tabs"` (excluyentes).
2. Los radios están ocultos visualmente (`opacity: 0; pointer-events: none`).
3. Los `<label for="tabN">` son los que el usuario ve y pulsa. Al hacer clic, marcan el radio asociado.
4. El selector `:checked` detecta el radio marcado.
5. El combinador `~` selecciona hermanos siguientes → llegamos al label y al panel correspondiente.

🔥 **Limitación accesibilidad**: los lectores de pantalla pueden no interpretar bien este patrón como "tabs". Para aplicaciones serias, usa los **roles ARIA** apropiados y JavaScript. Pero como demo CSS, es elegante.

### `:has(...)` — versión moderna

Con `:has()` (todos los navegadores desde 2023) se simplifica:

```css
.tabs:has(#tab2:checked) .panel[data-tab="2"] { display: block; }
```

`:has()` es el "selector padre" que CSS nunca tuvo. Por fin.

## Paso 3 — Componente 3: Modal con `:target`

```html
<a href="#mi-modal" class="btn">Abrir modal</a>

<div id="mi-modal" class="modal">
    <div class="modal-overlay">
        <a href="#" class="modal-cerrar-fuera"></a>
        <div class="modal-contenido">
            <a href="#" class="modal-cerrar" aria-label="Cerrar">×</a>
            <h2>¡Hola desde un modal!</h2>
            <p>Este modal está hecho solo con CSS y un poco de HTML.</p>
            <div class="modal-acciones">
                <a href="#" class="btn">Aceptar</a>
                <a href="#" class="btn btn-secundario">Cancelar</a>
            </div>
        </div>
    </div>
</div>
```

### CSS

```css
.btn {
    display: inline-block;
    background: #0d6efd;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    margin: 30px;
}

.btn-secundario {
    background: #6c757d;
}

/* Modal oculto por defecto */
.modal {
    display: none;
}

/* :target = cuando la URL tiene #mi-modal */
.modal:target {
    display: block;
    position: fixed;
    inset: 0;             /* top:0 right:0 bottom:0 left:0 */
    z-index: 1000;
}

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-cerrar-fuera {
    /* Capa transparente clicable para cerrar al hacer click fuera */
    position: absolute;
    inset: 0;
    text-decoration: none;
}

.modal-contenido {
    position: relative;          /* por encima del .modal-cerrar-fuera */
    background: white;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    z-index: 1;
    animation: aparecer 0.3s ease-out;
}

@keyframes aparecer {
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
}

.modal-cerrar {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 30px;
    color: #6c757d;
    text-decoration: none;
}

.modal-cerrar:hover {
    color: #212529;
}

.modal-acciones {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}
```

### Cómo funciona el truco

1. El botón "Abrir modal" es un `<a href="#mi-modal">`.
2. Al pulsarlo, la URL pasa a `tupagina.html#mi-modal`.
3. El selector `:target` detecta que `#mi-modal` está en la URL → muestra el modal.
4. La X "cerrar" es un `<a href="#">` (vuelve a la URL sin hash) → `:target` ya no aplica → modal oculto.

🔥 **Limitaciones**:

- Cambia la URL (con `#`). Si no quieres eso, usa `<input type="checkbox">` con `:checked`.
- Escape key no cierra (necesitaría JS).
- No bloquea el scroll del body (necesitaría JS).

## Paso 4 — `:target` vs `:checked` — cuándo cada uno

| Truco | Pros | Contras |
|-------|------|---------|
| `:target` | URL refleja el estado (compartible), navegación con Back funciona | Cambia la URL siempre |
| `:checked` con radio | Sin cambiar URL, ideal para tabs | Estado no se comparte |
| `:checked` con checkbox | Toggle on/off perfecto (menú hamburguesa) | Igual que radio |
| `<details>/<summary>` | Nativo, accesible | Solo para acordeones |

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Tabs sin `name` común en radios | No son excluyentes | Mismo `name` en todos. |
| `:checked` no funciona con `<button>` | Solo radios y checkboxes | Usa input+label. |
| `:target` con varios elementos | Solo afecta al que tiene id matching | Solo un elemento con cada `id`. |
| Modal con `position: absolute` | Se sale del flujo, pero NO ocupa todo el viewport | Usa `position: fixed`. |
| Olvidar `z-index` en el modal | Queda debajo del contenido | `z-index: 1000` o más. |
| `<details>` con `open` por defecto incorrecto | Está cerrado | Pon `open` en el HTML. |
| Trying to animar `display: none` ↔ `display: block` | No funciona | Usa `opacity` + `visibility` + delay. |
| Tabs CSS para apps serias | Mala accesibilidad | Usa JS con roles ARIA correctos. |
| Modal que no se cierra con Escape | El truco CSS no lo permite | Si necesitas, JS. |
| Acordeón con animación de altura | Difícil sin JS | Acepta que la apertura es instantánea. |
| `:has()` no funciona en navegador viejo | Soporte 2023+ | Comprueba caniuse antes. |
| Modal que deja el body scroleable | Truco CSS no lo bloquea | Necesitas JS para `body.style.overflow = 'hidden'`. |

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Componentes interactivos sin JS</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <main>

        <!-- ACORDEÓN -->
        <section class="faq">
            <h2>Preguntas frecuentes</h2>
            <details>
                <summary>¿Cómo me registro?</summary>
                <p>Pulsa "Crear cuenta" arriba a la derecha.</p>
            </details>
            <details open>
                <summary>¿Cuáles son los métodos de pago?</summary>
                <p>Visa, MasterCard, PayPal y transferencia bancaria.</p>
            </details>
            <details>
                <summary>¿Puedo cancelar mi suscripción?</summary>
                <p>Sí, desde tu perfil → Suscripción → Cancelar.</p>
            </details>
        </section>

        <!-- TABS -->
        <section class="tabs">
            <input type="radio" id="tab1" name="tabs" checked>
            <input type="radio" id="tab2" name="tabs">
            <input type="radio" id="tab3" name="tabs">

            <div class="tab-labels">
                <label for="tab1">Descripción</label>
                <label for="tab2">Specs</label>
                <label for="tab3">Reseñas</label>
            </div>

            <div class="tab-panels">
                <div class="panel" data-tab="1">
                    <h3>Descripción</h3>
                    <p>Producto premium...</p>
                </div>
                <div class="panel" data-tab="2">
                    <h3>Especificaciones</h3>
                    <ul><li>Peso: 250g</li><li>Material: aluminio</li></ul>
                </div>
                <div class="panel" data-tab="3">
                    <h3>Reseñas</h3>
                    <p>★★★★★ (4.5/5 — 234 reseñas)</p>
                </div>
            </div>
        </section>

        <!-- MODAL -->
        <section style="text-align: center; padding: 40px;">
            <a href="#mi-modal" class="btn">Abrir modal</a>
        </section>

        <div id="mi-modal" class="modal">
            <div class="modal-overlay">
                <a href="#" class="modal-cerrar-fuera" aria-label="Cerrar"></a>
                <div class="modal-contenido">
                    <a href="#" class="modal-cerrar" aria-label="Cerrar">×</a>
                    <h2>¡Hola desde un modal!</h2>
                    <p>Hecho solo con HTML + CSS.</p>
                    <div class="modal-acciones">
                        <a href="#" class="btn">Aceptar</a>
                        <a href="#" class="btn btn-secundario">Cancelar</a>
                    </div>
                </div>
            </div>
        </div>

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
    padding: 20px;
}

main { max-width: 700px; margin: 0 auto; }

section { margin-bottom: 40px; }

h2 { margin-bottom: 15px; padding: 0 10px; }

/* ============ ACORDEÓN ============ */
details {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    margin-bottom: 10px;
    overflow: hidden;
}

summary {
    padding: 15px 20px 15px 40px;
    font-weight: 600;
    cursor: pointer;
    list-style: none;
    position: relative;
}

summary::-webkit-details-marker { display: none; }

summary::before {
    content: "▶";
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s;
    color: #0d6efd;
}

details[open] summary::before {
    transform: translateY(-50%) rotate(90deg);
}

details > p {
    padding: 0 20px 15px;
    color: #495057;
    line-height: 1.6;
}

/* ============ TABS ============ */
.tabs {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}

.tabs input[type="radio"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.tab-labels {
    display: flex;
    border-bottom: 1px solid #dee2e6;
    background: #f8f9fa;
}

.tab-labels label {
    flex: 1;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    color: #6c757d;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
}

.tab-labels label:hover {
    color: #0d6efd;
    background: #e9ecef;
}

#tab1:checked ~ .tab-labels label[for="tab1"],
#tab2:checked ~ .tab-labels label[for="tab2"],
#tab3:checked ~ .tab-labels label[for="tab3"] {
    color: #0d6efd;
    border-bottom-color: #0d6efd;
    background: white;
}

.panel { display: none; padding: 30px; }

#tab1:checked ~ .tab-panels .panel[data-tab="1"],
#tab2:checked ~ .tab-panels .panel[data-tab="2"],
#tab3:checked ~ .tab-panels .panel[data-tab="3"] {
    display: block;
    animation: fadeIn 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* ============ MODAL ============ */
.btn {
    display: inline-block;
    background: #0d6efd;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
}

.btn-secundario { background: #6c757d; }

.modal {
    display: none;
}

.modal:target {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1000;
}

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-cerrar-fuera {
    position: absolute;
    inset: 0;
}

.modal-contenido {
    position: relative;
    background: white;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    z-index: 1;
    animation: pop 0.3s ease-out;
}

@keyframes pop {
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
}

.modal-cerrar {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 30px;
    color: #6c757d;
    text-decoration: none;
    line-height: 1;
}

.modal-cerrar:hover { color: #212529; }

.modal-acciones {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}
```

## Cómo verificar

1. Abre `index.html`.
2. **Acordeón**: pulsa una pregunta → se despliega. Pulsa otra → la anterior **sigue abierta** (porque `<details>` no son excluyentes). Para que solo una esté abierta, ver siguiente paso.
3. **Tabs**: pulsa cada pestaña → cambia el contenido. La pestaña activa se subraya en azul.
4. **Modal**: pulsa "Abrir modal" → aparece centrado, fondo oscurecido. Pulsa la "×", el fondo, "Aceptar" o "Cancelar" → se cierra.
5. **URL**: cuando el modal está abierto, la URL tiene `#mi-modal`. Si pulsas Back, el modal se cierra (es navegable!).
6. **F12**: inspecciona los radios ocultos → siguen accesibles con Tab (importante).

### Acordeón excluyente

Si quieres que solo una pregunta esté abierta a la vez (estilo radio), añade `name`:

```html
<details name="faq">
    <summary>Pregunta 1</summary>
    ...
</details>
<details name="faq">
    <summary>Pregunta 2</summary>
    ...
</details>
```

Soportado en navegadores modernos (2023+).

## Alternativas peores

### 1) Modal con `display: none` ↔ `display: block` con JS

```javascript
// ❌ overkill si no necesitas lógica
function abrirModal() {
    document.getElementById('modal').style.display = 'block';
}
```

Si solo es abrir/cerrar, el truco `:target` te lo da gratis.

### 2) Tabs con `display: none` controlado por JS

```javascript
// ❌
function cambiarTab(n) {
    document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
    document.querySelector(`.panel-${n}`).style.display = 'block';
}
```

El truco del radio + label hace lo mismo sin JS.

### 3) Acordeón con `<div>` + `onclick`

```html
<!-- ❌ -->
<div class="acordeon" onclick="toggle(this)">Pregunta 1</div>
<div class="contenido oculto">Respuesta</div>
```

`<details>`/`<summary>` lo hacen nativo, accesible y sin JS.

### 4) Botón modal con `<div onclick>`

```html
<!-- ❌ no es accesible -->
<div onclick="abrirModal()">Abrir</div>
```

Usa `<button>` o `<a href="#modal">`.

### 5) Tabs CSS para aplicaciones críticas

El patrón input+label funciona, pero los lectores de pantalla no lo identifican como "tabs". Para una app seria, usa los roles ARIA `tab`, `tablist`, `tabpanel` y JS apropiado.

### 6) Modal sin focus management

Si abres un modal con el truco `:target`, el focus se queda donde estaba. En un modal accesible, el focus debe ir AL modal y quedar atrapado dentro hasta que se cierre. Eso requiere JS.

### 7) `<select>` para tabs

```html
<!-- 🟡 funciona pero UX raro en desktop -->
<select onchange="cambiarTab(this.value)">
    <option value="1">Descripción</option>
    ...
</select>
```

En móvil sí se usa a veces (más pequeño que tabs).

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Acordeón siempre abierto/cerrado | `<summary>` mal colocado | Debe ser el PRIMER hijo de `<details>`. |
| Tabs no cambian | Selector `~` no encuentra el panel | El input radio debe ser hermano del `.tab-panels`. |
| Modal no se ve | Falta `position: fixed` o `z-index` | Comprueba ambos. |
| Modal aparece sin click | `:target` activo desde el inicio | Quita el hash de la URL inicial. |
| El triángulo del summary doble | Tienes `::before` pero también el marker nativo | `list-style: none` y `::-webkit-details-marker { display: none }`. |
| Modal cubre todo cuando está cerrado | `display: none` no funciona | Verifica que el selector base es `.modal { display: none }` (no `:target`). |
| Tabs Tab key no funciona | Tienes `pointer-events: none` sin más | `position: absolute; opacity: 0;` mantienen accesibilidad. |
| Tabs mantienen el estado al recargar | Bien — `:checked` persiste si pones `checked` en HTML | Recuerda el atributo. |
| Modal abre pero scroll del body sigue activo | Limitación del truco CSS | Necesitas JS para `body { overflow: hidden }`. |
| `:target` no funciona en algún navegador | Es estándar desde 2007 | Funciona, comprueba el id. |

## Lo que has aprendido

- `<details>` y `<summary>` (acordeón nativo HTML5).
- Atributo `open` y `name` en `<details>`.
- Truco del `<input type="radio" :checked>` + `<label>` para tabs.
- Combinador hermano `~` con `:checked`.
- Truco del `:target` para modal navegable por URL.
- `:has()` (selector padre moderno).
- `position: fixed; inset: 0; z-index: 1000` para overlays.
- Por qué `display: none` ↔ `block` no se puede animar.
- Cuándo aceptar limitaciones CSS y cuándo migrar a JS.
- Accesibilidad: lo que el truco CSS NO te da (focus trap, escape key, scroll lock).
