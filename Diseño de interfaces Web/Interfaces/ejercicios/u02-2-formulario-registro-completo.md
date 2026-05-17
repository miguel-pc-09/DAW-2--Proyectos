# Ejercicio U2.2 — Formulario de registro con validación HTML5 completa

> 📚 Unidad 2 · HTML5: estructura, semántica y formularios
> ⏱️ Tiempo: 40-50 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: usar **todos** los tipos de input y atributos de validación de HTML5 sin escribir una línea de JavaScript.

## Enunciado

Diseñar el formulario de registro de una plataforma de cursos online. Debe pedir:

- Nombre y apellidos (texto, obligatorios).
- Email (con validación).
- Contraseña (mínimo 8 caracteres, debe contener una mayúscula, una minúscula y un número).
- Fecha de nacimiento (mayor de edad: mínimo 18 años, máximo 100).
- Teléfono (formato español: +34 seguido de 9 dígitos).
- País (select).
- Nivel de experiencia (radio: Principiante / Intermedio / Avanzado).
- Intereses (checkbox múltiple: Frontend, Backend, Mobile, Data).
- URL de portafolio (opcional, debe ser URL válida).
- Color favorito (input color).
- Avatar (input file, solo imágenes).
- Acepto condiciones (checkbox obligatorio).
- Botón Enviar.

Todo debe validarse **solo con HTML5**, sin JS.

---

## ¿Qué vas a aprender?

- Todos los `type` de input modernos: `email`, `password`, `tel`, `date`, `url`, `color`, `file`, `number`, `range`, `search`, `time`, `datetime-local`, `week`, `month`.
- Atributos de validación: `required`, `pattern`, `min`, `max`, `minlength`, `maxlength`, `step`.
- `<fieldset>` y `<legend>` para agrupar.
- `<datalist>` para autocompletado.
- `<output>` para mostrar el resultado de un cálculo.
- Asociar `<label>` con `for=""` e `id=""`.
- Atributos: `autocomplete`, `placeholder`, `inputmode`, `multiple`, `accept`.

## Cómo va a quedar (boceto ASCII)

```
┌─ Registro en CursosPro ──────────────────────┐
│                                              │
│ Datos personales                             │
│   Nombre*           [______________________] │
│   Apellidos*        [______________________] │
│   Email*            [______________________] │
│   Contraseña*       [••••••••••__________] 👁 │
│   Fecha nacimiento* [   /   /     ]          │
│   Teléfono          [+34 ___ ___ ___ ]       │
│                                              │
│ Localización                                 │
│   País              [España        ▾]        │
│                                              │
│ Perfil técnico                               │
│   Nivel             ◉ Principiante           │
│                     ○ Intermedio             │
│                     ○ Avanzado               │
│   Intereses         ☑ Frontend  ☐ Backend    │
│                     ☐ Mobile    ☐ Data       │
│   Portafolio        [https://___________]    │
│   Color favorito    [■■■]                    │
│   Avatar            [Seleccionar archivo]    │
│                                              │
│ ☐ Acepto las condiciones de uso*             │
│                                              │
│     [    Crear cuenta    ]                   │
└──────────────────────────────────────────────┘
```

---

## Paso 1 — Esqueleto del formulario

```html
<form action="/registro" method="post" novalidate-NO>
    <!-- contenido -->
    <button type="submit">Crear cuenta</button>
</form>
```

| Atributo | Para qué |
|----------|----------|
| `action="/registro"` | URL a la que se envía el formulario al hacer submit. |
| `method="post"` | Método HTTP. POST cuando hay datos sensibles (registro, login). GET para búsquedas. |
| `novalidate` | Si lo pones, desactivas la validación HTML5. **No lo pongas** salvo que vayas a validar con JS. |

🔥 **Importante**: si pulsas Enter dentro de un campo, el formulario se envía. Hay que diseñarlo contando con eso.

## Paso 2 — Datos personales con `<fieldset>`

```html
<fieldset>
    <legend>Datos personales</legend>

    <div class="campo">
        <label for="nombre">Nombre <span class="req">*</span></label>
        <input
            type="text"
            id="nombre"
            name="nombre"
            required
            minlength="2"
            maxlength="50"
            autocomplete="given-name"
            placeholder="María">
    </div>

    <div class="campo">
        <label for="apellidos">Apellidos <span class="req">*</span></label>
        <input
            type="text"
            id="apellidos"
            name="apellidos"
            required
            minlength="2"
            maxlength="100"
            autocomplete="family-name"
            placeholder="García López">
    </div>

    <div class="campo">
        <label for="email">Email <span class="req">*</span></label>
        <input
            type="email"
            id="email"
            name="email"
            required
            autocomplete="email"
            placeholder="ejemplo@correo.com">
    </div>

    <div class="campo">
        <label for="password">Contraseña <span class="req">*</span></label>
        <input
            type="password"
            id="password"
            name="password"
            required
            minlength="8"
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
            title="Mínimo 8 caracteres, con mayúscula, minúscula y número."
            autocomplete="new-password">
    </div>

    <div class="campo">
        <label for="nacimiento">Fecha de nacimiento <span class="req">*</span></label>
        <input
            type="date"
            id="nacimiento"
            name="nacimiento"
            required
            min="1925-01-01"
            max="2008-05-16">
        <!-- max = hoy - 18 años (mayor de edad) -->
    </div>

    <div class="campo">
        <label for="telefono">Teléfono</label>
        <input
            type="tel"
            id="telefono"
            name="telefono"
            pattern="\+34\s?\d{9}"
            placeholder="+34 600123456"
            inputmode="tel"
            autocomplete="tel">
    </div>
</fieldset>
```

### Por qué cada atributo

| Atributo | Por qué |
|----------|---------|
| `<fieldset>` + `<legend>` | Agrupa visualmente los campos y, sobre todo, **anuncia el grupo** a los lectores de pantalla ("Datos personales, formulario"). |
| `for="nombre"` + `id="nombre"` | Asocia label con input. Al hacer clic en el label, el foco va al input. Obligatorio para accesibilidad. |
| `required` | Si está vacío, el navegador no deja enviar el formulario. |
| `minlength="2"` | El usuario debe escribir al menos 2 caracteres. |
| `autocomplete="given-name"` | El navegador autocompleta con datos guardados (nombre, apellido, email...). Hay valores estándar (`given-name`, `family-name`, `email`, `tel`, `street-address`, `postal-code`...). |
| `type="email"` | Valida que tenga `@`. Además, en móvil sale teclado con `@`. |
| `type="password"` | Oculta el texto con puntos. |
| `pattern` | Expresión regular. El input solo es válido si lo cumple. |
| `title="..."` | El texto que aparece como tooltip y como mensaje de error si falla `pattern`. |
| `type="date"` | Selector de fecha nativo. `min` y `max` lo limitan. |
| `inputmode="tel"` | En móvil saca teclado numérico aunque el `type` no sea numérico. |

🔥 **Por qué `autocomplete="new-password"` y no `autocomplete="off"`**: los gestores de contraseñas (LastPass, 1Password, el de Chrome) lo necesitan para ofrecer una contraseña fuerte. `off` te los carga.

## Paso 3 — Select de país con `<datalist>` o `<select>`

Versión con `<select>` (lista cerrada):

```html
<fieldset>
    <legend>Localización</legend>

    <div class="campo">
        <label for="pais">País</label>
        <select id="pais" name="pais" required>
            <option value="">-- Selecciona país --</option>
            <option value="es">España</option>
            <option value="mx">México</option>
            <option value="ar">Argentina</option>
            <option value="co">Colombia</option>
            <option value="cl">Chile</option>
            <option value="pe">Perú</option>
        </select>
    </div>
</fieldset>
```

Versión con `<datalist>` (autocompletado pero permite escribir cualquier cosa):

```html
<input list="paises" id="pais" name="pais">
<datalist id="paises">
    <option value="España">
    <option value="México">
    <option value="Argentina">
</datalist>
```

**Cuándo cada una**: `<select>` cuando solo puede elegir de una lista cerrada. `<datalist>` cuando puede elegir o escribir libremente.

## Paso 4 — Radio (excluyente) y checkbox (múltiple)

```html
<fieldset>
    <legend>Perfil técnico</legend>

    <fieldset class="grupo-radio">
        <legend>Nivel</legend>

        <div>
            <input type="radio" id="nivel-p" name="nivel" value="principiante" checked>
            <label for="nivel-p">Principiante</label>
        </div>
        <div>
            <input type="radio" id="nivel-i" name="nivel" value="intermedio">
            <label for="nivel-i">Intermedio</label>
        </div>
        <div>
            <input type="radio" id="nivel-a" name="nivel" value="avanzado">
            <label for="nivel-a">Avanzado</label>
        </div>
    </fieldset>

    <fieldset class="grupo-check">
        <legend>Intereses</legend>

        <div>
            <input type="checkbox" id="int-fe" name="intereses" value="frontend">
            <label for="int-fe">Frontend</label>
        </div>
        <div>
            <input type="checkbox" id="int-be" name="intereses" value="backend">
            <label for="int-be">Backend</label>
        </div>
        <div>
            <input type="checkbox" id="int-mb" name="intereses" value="mobile">
            <label for="int-mb">Mobile</label>
        </div>
        <div>
            <input type="checkbox" id="int-dt" name="intereses" value="data">
            <label for="int-dt">Data</label>
        </div>
    </fieldset>

    <div class="campo">
        <label for="portafolio">URL de portafolio</label>
        <input
            type="url"
            id="portafolio"
            name="portafolio"
            placeholder="https://miportafolio.dev"
            pattern="https?://.+">
    </div>

    <div class="campo">
        <label for="color">Color favorito</label>
        <input type="color" id="color" name="color" value="#0d6efd">
    </div>

    <div class="campo">
        <label for="avatar">Avatar</label>
        <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            multiple-NO>
    </div>
</fieldset>
```

### Trampa CLAVE de radios y checkboxes

🔥 **Todos los radios del mismo grupo deben compartir `name`**. Si dos radios tienen `name` distinto, son **dos grupos separados** y se pueden marcar ambos. Lo mismo cambia el comportamiento: si son grupos distintos, no son excluyentes.

```html
<!-- ❌ MAL: son independientes, se pueden marcar los dos -->
<input type="radio" id="n1" name="nivel1" value="p">
<input type="radio" id="n2" name="nivel2" value="i">

<!-- ✅ BIEN: mismo name, excluyentes -->
<input type="radio" id="n1" name="nivel" value="p">
<input type="radio" id="n2" name="nivel" value="i">
```

Para checkboxes, mismo `name` significa "envuelven en un array al servidor".

### Por qué los inputs especiales

| `type` | Para qué | Móvil |
|--------|----------|-------|
| `email` | Texto con `@` | Teclado con `@` |
| `tel` | Texto sin validación, semántica | Teclado numérico |
| `url` | Con `://` | Teclado con `.com` |
| `date` | Selector calendario | Picker nativo |
| `color` | Picker de color | Picker nativo |
| `file` | Subir archivo | Cámara/galería |
| `number` | Solo dígitos, flechas | Teclado numérico |
| `range` | Slider | Slider |
| `search` | Como text pero con X | Teclado búsqueda |
| `time` | Selector de hora | Picker hora |
| `datetime-local` | Fecha + hora | Picker completo |
| `month`, `week` | Mes / semana | Picker |

## Paso 5 — Condiciones y submit

```html
<div class="campo">
    <input type="checkbox" id="condiciones" name="condiciones" required>
    <label for="condiciones">
        Acepto las <a href="/condiciones">condiciones de uso</a>
    </label>
</div>

<button type="submit">Crear cuenta</button>
```

### Botones del formulario

| `type` | Qué hace |
|--------|----------|
| `submit` | Envía el formulario (por defecto si no pones type en un button DENTRO de un form). |
| `reset` | Resetea todos los campos (evítalo: el usuario lo pulsa sin querer). |
| `button` | No hace nada (solo si lo manejas con JS). |

🔥 **Si tienes `<button>` dentro de `<form>` sin `type`**, por defecto es `submit`. Si quieres un botón que NO envíe (ej. "Mostrar/ocultar contraseña"), pon `type="button"` explícito.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Radios con `name` distinto | No son excluyentes, se marcan los dos | Mismo `name` para todos los del grupo. |
| Label sin `for` | Click en el label no enfoca el input | Pon `for="id-del-input"`. |
| Olvidar `name` en un input | Su valor NO se envía al servidor | Sin `name`, sin valor. |
| `<button>` sin `type` que no quieres que envíe | Pulsa Enter y envía el form | Pon `type="button"` explícito. |
| `required` en input oculto | El form no envía y no se ve por qué | Quita required cuando ocultas el campo. |
| `pattern` mal escrito | Siempre da error | Pruébalo en regex101.com. |
| `min`/`max` en `type="number"` | Si tienes `step="0.01"` y `max="100"`, válido `99.999`? Sí. | Considera `max` en el `type` adecuado. |
| `autocomplete="off"` en password | Los gestores de contraseñas se rompen | Usa `new-password` o `current-password`. |
| `accept="image/*"` y el usuario sube SVG malicioso | SVG puede contener `<script>` | Acepta solo png/jpg/webp. |
| `placeholder` como label | Desaparece al escribir, falla accesibilidad | Siempre `<label>` visible. |
| Submit con Enter dentro de `<textarea>` | Hace salto de línea, no envía | Es lo correcto, no lo cambies. |

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro en CursosPro</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <main>
        <h1>Crear cuenta</h1>

        <form action="/registro" method="post">
            <fieldset>
                <legend>Datos personales</legend>

                <div class="campo">
                    <label for="nombre">Nombre *</label>
                    <input type="text" id="nombre" name="nombre" required
                           minlength="2" maxlength="50" autocomplete="given-name">
                </div>

                <div class="campo">
                    <label for="apellidos">Apellidos *</label>
                    <input type="text" id="apellidos" name="apellidos" required
                           minlength="2" maxlength="100" autocomplete="family-name">
                </div>

                <div class="campo">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required
                           autocomplete="email">
                </div>

                <div class="campo">
                    <label for="password">Contraseña *</label>
                    <input type="password" id="password" name="password" required
                           minlength="8"
                           pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                           title="Mínimo 8 caracteres con mayúscula, minúscula y número"
                           autocomplete="new-password">
                </div>

                <div class="campo">
                    <label for="nacimiento">Fecha de nacimiento *</label>
                    <input type="date" id="nacimiento" name="nacimiento" required
                           min="1925-01-01" max="2008-05-16">
                </div>

                <div class="campo">
                    <label for="telefono">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono"
                           pattern="\+34\s?\d{9}"
                           placeholder="+34 600123456"
                           inputmode="tel" autocomplete="tel">
                </div>
            </fieldset>

            <fieldset>
                <legend>Localización</legend>

                <div class="campo">
                    <label for="pais">País</label>
                    <select id="pais" name="pais" required>
                        <option value="">-- Selecciona --</option>
                        <option value="es">España</option>
                        <option value="mx">México</option>
                        <option value="ar">Argentina</option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <legend>Perfil técnico</legend>

                <fieldset>
                    <legend>Nivel</legend>
                    <input type="radio" id="np" name="nivel" value="p" checked>
                    <label for="np">Principiante</label>
                    <input type="radio" id="ni" name="nivel" value="i">
                    <label for="ni">Intermedio</label>
                    <input type="radio" id="na" name="nivel" value="a">
                    <label for="na">Avanzado</label>
                </fieldset>

                <fieldset>
                    <legend>Intereses</legend>
                    <input type="checkbox" id="ife" name="intereses" value="fe">
                    <label for="ife">Frontend</label>
                    <input type="checkbox" id="ibe" name="intereses" value="be">
                    <label for="ibe">Backend</label>
                </fieldset>

                <div class="campo">
                    <label for="portafolio">URL portafolio</label>
                    <input type="url" id="portafolio" name="portafolio"
                           placeholder="https://miportafolio.dev">
                </div>

                <div class="campo">
                    <label for="color">Color favorito</label>
                    <input type="color" id="color" name="color" value="#0d6efd">
                </div>

                <div class="campo">
                    <label for="avatar">Avatar</label>
                    <input type="file" id="avatar" name="avatar"
                           accept="image/png, image/jpeg">
                </div>
            </fieldset>

            <div class="campo">
                <input type="checkbox" id="cond" name="cond" required>
                <label for="cond">Acepto las condiciones *</label>
            </div>

            <button type="submit">Crear cuenta</button>
        </form>
    </main>
</body>
</html>
```

## CSS mínimo para que se vea decente

```css
* { box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    background: #f8f9fa;
    padding: 20px;
}

main {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 8px;
}

fieldset {
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 20px;
}

legend {
    padding: 0 10px;
    font-weight: bold;
    color: #0d6efd;
}

.campo {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="date"],
input[type="url"],
select {
    width: 100%;
    padding: 10px;
    font-size: 16px;          /* evita zoom iOS */
    border: 1px solid #ced4da;
    border-radius: 4px;
}

input:focus {
    outline: 3px solid #0d6efd;
    outline-offset: 2px;
    border-color: #0d6efd;
}

/* Inputs inválidos cuando el usuario YA los ha tocado */
input:invalid:not(:placeholder-shown) {
    border-color: #dc3545;
    background: #fff5f5;
}

button[type="submit"] {
    background: #0d6efd;
    color: white;
    border: none;
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background: #0b5ed7;
}
```

### Por qué `:invalid:not(:placeholder-shown)`

Si solo pones `input:invalid`, **TODOS** los inputs vacíos con `required` se ven rojos desde el principio (antes de que el usuario escriba). Combinado con `:not(:placeholder-shown)` solo se ponen rojos cuando el usuario los ha tocado.

## Cómo verificar

1. Abre `index.html`.
2. Pulsa "Crear cuenta" sin rellenar nada → el navegador te dice "Rellena este campo" en el primer campo obligatorio vacío.
3. Escribe un email inválido (`hola`) → "Introduce una dirección de correo válida".
4. Escribe contraseña `holahola` → no cumple el `pattern`, sale el `title` como mensaje.
5. En el `<input type="date">`, intenta una fecha posterior a hoy → no te deja.
6. **F12** → **Console** → escribe `document.querySelector('form').checkValidity()` → te devuelve `true` o `false`.
7. Abre la página en móvil (F12 → modo móvil): en el campo email aparece el teclado con `@`; en el campo tel, teclado numérico.

## Alternativas peores

### 1) Validar con JavaScript todo y desactivar HTML5

```html
<!-- ❌ extra trabajo, peor accesibilidad -->
<form novalidate>
```

```javascript
// ❌ reimplementando lo que HTML5 ya hace
function validarEmail(e) {
    if (!e.includes('@')) alert('Email inválido');
}
```

HTML5 ya valida. Tu JS solo debería **complementar** (ej. validación cruzada: "la contraseña y su confirmación deben coincidir") o mejorar mensajes.

### 2) `placeholder` sin `label`

```html
<!-- ❌ -->
<input type="text" placeholder="Nombre">
```

El usuario empieza a escribir, el placeholder desaparece, y a los 3 segundos no se acuerda qué pidió ese campo. Además, los lectores de pantalla no leen el placeholder de forma consistente.

### 3) Radios sin `name` común

```html
<!-- ❌ -->
<input type="radio" name="opcion1" value="a">
<input type="radio" name="opcion2" value="b">
```

Se pueden marcar los dos. Comparten `name` o no son excluyentes.

### 4) Botones con `<a href="#">` o `<div onclick>`

```html
<!-- ❌ -->
<a href="#" onclick="enviarForm()">Enviar</a>
<div class="btn" onclick="enviar()">Enviar</div>
```

Para acciones se usa `<button>`. Lo demás rompe accesibilidad (no son enfocables con Tab, no se anuncian como botón, requieren JS para algo que `<button type="submit">` hace solo).

### 5) `<input type="text">` para todo

```html
<!-- ❌ -->
<input type="text" name="email">
<input type="text" name="fecha">
<input type="text" name="telefono">
```

Pierdes:

- Validación gratuita (`type="email"`).
- Teclado optimizado en móvil.
- Picker nativo (date, color, time).

### 6) `<label>` envolviendo sin `for`

```html
<!-- también funciona pero menos compatible -->
<label>
    Nombre
    <input type="text">
</label>
```

Aunque funciona, la versión con `for=""` + `id=""` es la **estándar y siempre compatible**.

### 7) Validar fechas con regex

```html
<!-- ❌ -->
<input type="text" pattern="\d{2}/\d{2}/\d{4}">
```

`type="date"` ya valida. Y permite picker nativo.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El form se envía aunque hay errores | Tienes `novalidate` o `type="text"` donde debería ser `type="email"` | Quita `novalidate`, usa `type` correcto. |
| Pulsar Enter en un campo envía el form sin querer | Comportamiento por defecto | Es lo esperado. Si tienes 1 solo input visible, puedes deshabilitar Enter con JS. |
| El usuario rellena el form y se le pierde si recarga | El navegador a veces lo guarda, a veces no | Para experiencia premium, guarda en `localStorage` con JS. |
| El input file no acepta varios archivos | Falta `multiple` | Añade el atributo. |
| El input file deja subir cualquier cosa pese a `accept` | `accept` es **una sugerencia**, no obliga | Hay que validar en el servidor. |
| Pattern no funciona con `type="number"` | `pattern` se ignora si el tipo no es text-like | Usa `min`, `max`, `step` en number. |
| El select no me valida `required` | Tu primera `<option>` debe tener `value=""` | `<option value="">-- Selecciona --</option>`. |
| Los lectores de pantalla no anuncian el grupo | Falta `<fieldset>` y `<legend>` | Agrupa con fieldset. |
| `:invalid` colorea todo en rojo nada más cargar | Falta el truco `:not(:placeholder-shown)` o `:user-invalid` | Combina pseudoclases. |
| El input de fecha se ve diferente en cada navegador | Es nativo, depende del SO | Es lo esperado. Si quieres uniforme, librería JS. |

## Lo que has aprendido

- Todos los `type` de input de HTML5.
- Atributos de validación: `required`, `pattern`, `min`, `max`, `minlength`, `maxlength`, `step`.
- `<fieldset>` y `<legend>` para agrupar.
- `<label for="id">` asociada al input correspondiente.
- Diferencia entre radios (excluyentes con mismo `name`) y checkboxes (múltiples).
- `<select>` vs `<datalist>` (lista cerrada vs autocompletado).
- Atributos `autocomplete`, `placeholder`, `inputmode`, `multiple`, `accept`.
- `:invalid:not(:placeholder-shown)` para feedback visual sin agredir.
- Por qué la validación HTML5 es siempre el punto de partida (la del servidor sigue siendo obligatoria).
