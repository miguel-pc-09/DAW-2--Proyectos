# Ejercicio 3 · Formulario de registro con Flexbox

> 📕 Origen: pregunta 3 del simulacro de Diseño de Interfaces.
> ⭐ Valor: 3,5 puntos.
> ⏱️ Tiempo: 25-30 min.
> 🗂️ Material: `Material/Interfaces/ej3/` tiene `ejercicio3.html` y `solucion3.css`.

## Enunciado original

Formulario "Crear cuenta" con:

- Título "Crear cuenta" + subtítulo "Completa tus datos para registrarte".
- Nombre + Apellido (en fila).
- Email (línea completa).
- Contraseña + Confirmar contraseña (en fila).
- Checkbox términos.
- Botón "Registrarse" (ancho completo).
- Enlace "¿Ya tienes cuenta? Inicia sesión".

**Restricción:** usar **Flexbox** para la disposición.

---

## ¿Qué vas a aprender?

- Diseñar un formulario con **Flexbox**.
- Layout en columna para apilar elementos.
- Filas de dos columnas con `flex: 1`.
- Estados `:focus` en inputs.
- Responsive: pasar de fila a columna en móvil con `@media`.
- Sombras y bordes redondeados.

## Cómo va a quedar (boceto)

```
        ┌─────────────────────────────────────────┐
        │                                          │
        │            Crear cuenta                  │
        │     Completa tus datos para registrarte  │
        │                                          │
        │     Nombre              Apellido         │
        │     ┌──────────┐       ┌──────────┐    │
        │     │ Juan     │       │ Pérez    │    │
        │     └──────────┘       └──────────┘    │
        │                                          │
        │     Correo electrónico                   │
        │     ┌─────────────────────────────────┐ │
        │     │ ejemplo@correo.com              │ │
        │     └─────────────────────────────────┘ │
        │                                          │
        │     Contraseña       Confirmar contraseña│
        │     ┌──────────┐    ┌──────────┐        │
        │     │ ••••••   │    │ ••••••   │        │
        │     └──────────┘    └──────────┘        │
        │                                          │
        │     ☐ Acepto los términos y condiciones │
        │                                          │
        │     ┌──────────────────────────────────┐│
        │     │           Registrarse             ││
        │     └──────────────────────────────────┘│
        │                                          │
        │     ¿Ya tienes cuenta? Inicia sesión    │
        │                                          │
        └─────────────────────────────────────────┘
```

En móvil (<480px), las dos filas de dos columnas pasan a apilarse verticalmente.

---

## Paso 1 — Estructura

```
form-registro/
├── index.html
└── estilo.css
```

## Paso 2 — HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear cuenta</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="form-card">
        <!-- Header -->
        <div class="form-header">
            <h1>Crear cuenta</h1>
            <p>Completa tus datos para registrarte</p>
        </div>

        <form>
            <!-- Fila: Nombre y Apellido -->
            <div class="name-row">
                <div class="input-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Juan">
                </div>
                <div class="input-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" placeholder="Pérez">
                </div>
            </div>

            <!-- Email (fila completa) -->
            <div class="input-group">
                <label for="email">Correo electrónico</label>
                <input type="email" id="email" placeholder="ejemplo@correo.com">
            </div>

            <!-- Fila: Contraseña y Confirmar -->
            <div class="password-row">
                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" placeholder="••••••••">
                </div>
                <div class="input-group">
                    <label for="confirm">Confirmar contraseña</label>
                    <input type="password" id="confirm" placeholder="••••••••">
                </div>
            </div>

            <!-- Términos -->
            <div class="terms-row">
                <input type="checkbox" id="terms">
                <label for="terms">Acepto los términos y condiciones y la política de privacidad</label>
            </div>

            <!-- Submit -->
            <button type="submit" class="btn-register">Registrarse</button>

            <!-- Enlace -->
            <div class="login-link">
                <p>¿Ya tienes cuenta? <a href="#">Inicia sesión</a></p>
            </div>
        </form>
    </div>
</body>
</html>
```

### Por qué esta estructura

- **`.form-card`**: contenedor exterior con sombra (la "tarjeta" blanca).
- **`.form-header`**: agrupa título y subtítulo para centrarlos.
- **`.input-group`**: par `<label>` + `<input>` apilados verticalmente.
- **`.name-row` y `.password-row`**: contenedores flex que ponen 2 `input-group` en fila.
- **`.terms-row`**: checkbox + label en línea horizontal.

## Paso 3 — CSS paso a paso

### 3.1 Reset

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### 3.2 Body con flex (centra la tarjeta)

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
```

| Propiedad | Para qué |
|-----------|----------|
| `min-height: 100vh` | Ocupa al menos toda la altura visible. |
| `display: flex` | El body es flex container. |
| `justify-content: center` + `align-items: center` | Centra a su único hijo (la tarjeta) horizontal y verticalmente. |
| `padding: 20px` | Que en móvil la tarjeta no toque los bordes. |

### 3.3 La tarjeta del formulario

```css
.form-card {
    background-color: white;
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    display: flex;
    flex-direction: column;
}
```

| Propiedad | Para qué |
|-----------|----------|
| `width: 100%` + `max-width: 500px` | Crece hasta 500px y luego no más. En móvil ocupa lo que pueda. |
| `border-radius: 12px` | Esquinas suaves. |
| `box-shadow: 0 10px 30px rgba(0,0,0,0.1)` | Sombra grande y suave. |
| `display: flex; flex-direction: column` | Sus hijos (header y form) se apilan verticalmente. |

### 3.4 Header

```css
.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 8px;
}

.form-header p {
    color: #666;
    font-size: 14px;
}
```

### 3.5 El form como flex column

```css
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
```

Cada hijo directo del `<form>` (cada `.input-group`, `.name-row`, etc.) será una "fila lógica" con 20px de separación entre ellas.

### 3.6 `.input-group` (label + input apilados)

```css
.input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
}

.input-group label {
    font-weight: 600;
    font-size: 14px;
    color: #444;
}

.input-group input {
    padding: 12px 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s;
    width: 100%;
}

.input-group input::placeholder {
    color: #aaa;
}
```

### 3.7 Estado focus (azul al hacer clic en el input)

```css
.input-group input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}
```

| Propiedad | Para qué |
|-----------|----------|
| `outline: none` | Quita el contorno azul por defecto del navegador. |
| `border-color: #007bff` | Cambia el borde a azul. |
| `box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1)` | Halo azul suave alrededor (sustituye al outline). |

> El `outline` por defecto del navegador es bueno para **accesibilidad** (los usuarios con teclado lo necesitan). Si lo quitas, **compénsalo** con otro indicador visual (border + shadow).

### 3.8 Filas de 2 columnas (la clave del ejercicio)

```css
.name-row,
.password-row {
    display: flex;
    gap: 15px;
    width: 100%;
}

.name-row .input-group,
.password-row .input-group {
    flex: 1;
}
```

| Propiedad | Para qué |
|-----------|----------|
| `display: flex` | Los hijos van en fila. |
| `gap: 15px` | Espacio entre los dos `input-group`. |
| `flex: 1` en los hijos | Ambos crecen para ocupar el mismo ancho. |

### `flex: 1` explicado

Es shorthand de:

```css
flex-grow: 1;          /* puede crecer */
flex-shrink: 1;        /* puede encogerse */
flex-basis: 0;         /* tamaño inicial 0 */
```

Resultado: ambos hijos reparten el espacio disponible por igual.

### 3.9 Checkbox de términos

```css
.terms-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0;
}

.terms-row input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.terms-row label {
    font-size: 14px;
    color: #555;
    cursor: pointer;
}
```

`align-items: center` alinea verticalmente el checkbox y el texto del label.

### 3.10 Botón Registrarse

```css
.btn-register {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 14px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 10px;
}

.btn-register:hover {
    background-color: #0056b3;
}
```

`width: 100%` hace que el botón ocupe TODO el ancho.

### 3.11 Enlace de "Inicia sesión"

```css
.login-link {
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    color: #666;
}

.login-link a {
    color: #007bff;
    text-decoration: none;
    font-weight: 600;
}

.login-link a:hover {
    text-decoration: underline;
}
```

### 3.12 Responsive (móvil)

```css
@media (max-width: 480px) {
    .form-card {
        padding: 20px;
    }

    .name-row,
    .password-row {
        flex-direction: column;
        gap: 15px;
    }
}
```

En pantallas pequeñas (≤480px), las dos filas de 2 columnas se convierten en filas de **1 columna apilada**.

Esto es el truco: solo cambiar `flex-direction` de `row` a `column`.

## Paso 4 — Código CSS completo

```css
/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/* Tarjeta */
.form-card {
    background-color: white;
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    display: flex;
    flex-direction: column;
}

/* Header */
.form-header {
    text-align: center;
    margin-bottom: 25px;
}
.form-header h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 8px;
}
.form-header p {
    color: #666;
    font-size: 14px;
}

/* Form como flex column */
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Grupo input + label */
.input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
}
.input-group label {
    font-weight: 600;
    font-size: 14px;
    color: #444;
}
.input-group input {
    padding: 12px 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s;
    width: 100%;
}
.input-group input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}
.input-group input::placeholder {
    color: #aaa;
}

/* Filas de 2 columnas */
.name-row,
.password-row {
    display: flex;
    gap: 15px;
    width: 100%;
}
.name-row .input-group,
.password-row .input-group {
    flex: 1;
}

/* Checkbox */
.terms-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0;
}
.terms-row input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
}
.terms-row label {
    font-size: 14px;
    color: #555;
    cursor: pointer;
}

/* Botón */
.btn-register {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 14px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 10px;
}
.btn-register:hover {
    background-color: #0056b3;
}

/* Enlace */
.login-link {
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    color: #666;
}
.login-link a {
    color: #007bff;
    text-decoration: none;
    font-weight: 600;
}
.login-link a:hover {
    text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
    .form-card {
        padding: 20px;
    }
    .name-row,
    .password-row {
        flex-direction: column;
        gap: 15px;
    }
}
```

## Paso 5 — Probar

1. Abre `index.html` con doble clic.
2. Verás la tarjeta centrada.
3. Cambia el tamaño del navegador a <480px → las dos filas pasan a una columna.
4. Haz clic en un input → borde azul + halo suave.
5. Pasa el ratón por el botón → cambia de color suavemente.

### Casos a probar

| Caso | Qué debe pasar |
|------|----------------|
| Tab por los inputs con teclado | Cada uno se enfoca (azul). |
| Pulsar el label del checkbox | El checkbox se marca/desmarca (porque `for=""` apunta al `id` del input). |
| Móvil (F12) | Filas de 2 columnas → 1 columna. |
| Cambiar el `max-width` de `.form-card` | La tarjeta se hace más ancha. |

## Paso 6 — Entrega

```
Apellidos_Nombre_interfaces/
└── Pregunta3_Flexbox/
    ├── index.html
    ├── estilo.css
    └── captura.png       (idealmente 2: desktop + móvil)
```

## Alternativas peores

### 1) Usar Grid en vez de Flexbox

```css
/* ❌ enunciado pide Flexbox */
.name-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
```

El enunciado dice EXPLÍCITAMENTE **flexbox**. Aunque Grid también funcione, pierdes puntos.

### 2) Anchos en %

```css
/* ❌ frágil con el gap */
.name-row .input-group {
    width: 50%;
}
.name-row {
    gap: 15px;
}
```

Si pones `width: 50%` + `gap: 15px`, los anchos suman 100% + 15px y se sale. `flex: 1` reparte respetando el `gap` automáticamente.

### 3) Olvidar `for` en los labels

```html
<!-- ❌ pierde accesibilidad -->
<label>Nombre</label>
<input type="text" id="nombre">
```

Sin `for="nombre"`, hacer clic en la palabra "Nombre" no enfoca el input. **Imprescindible**:

```html
<label for="nombre">Nombre</label>
<input type="text" id="nombre">
```

### 4) Olvidar `outline` alternativo

```css
/* ❌ inaccesible: usuarios con teclado no saben dónde están */
input:focus {
    outline: none;
}
```

Sin compensación, los usuarios que navegan con teclado pierden el indicador visual. **Siempre** que quites el outline, añade otro indicador (border + shadow).

### 5) Inputs sin `placeholder`

```html
<input type="text" id="nombre">
```

Mejor con placeholder de ejemplo: `placeholder="Juan"`. Ayuda a entender qué se espera.

### 6) Botón sin `type="submit"`

```html
<!-- ❌ -->
<button class="btn-register">Registrarse</button>
```

Por defecto los botones dentro de un form son `type="submit"`, así que funciona. Pero es buena práctica ser explícito:

```html
<button type="submit" class="btn-register">Registrarse</button>
```

Para botones que NO envíen el form: `type="button"`.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Filas de 2 cols no son iguales | Falta `flex: 1` en los hijos | Añádelo. |
| Inputs se desbordan en pantalla pequeña | Falta `width: 100%` o `box-sizing` no es border-box | Comprueba reset. |
| Click en label no enfoca el input | Falta `for="..."` con id correspondiente | Añádelo. |
| Borde de foco no se ve | Olvidaste poner alternativo después de `outline: none` | Añade `box-shadow`. |
| En móvil siguen 2 columnas | `@media` mal escrito | Revisa la sintaxis. |
| Botón demasiado pequeño | `width` no es `100%` | Añade `width: 100%`. |

## Resumen visual

```
body (flex centrado)
   │
   ▼
.form-card (flex column, max-width 500px, sombra)
   │
   ├── .form-header
   │     ├── h1 "Crear cuenta"
   │     └── p subtítulo
   │
   └── <form>  (flex column, gap 20px)
         │
         ├── .name-row (flex row, gap 15px)
         │      ├── .input-group (flex 1) → label + input "Nombre"
         │      └── .input-group (flex 1) → label + input "Apellido"
         │
         ├── .input-group → label + input "Email"
         │
         ├── .password-row (flex row, gap 15px)
         │      ├── .input-group (flex 1) → label + input "Contraseña"
         │      └── .input-group (flex 1) → label + input "Confirmar"
         │
         ├── .terms-row (flex row, align center)
         │      └── checkbox + label
         │
         ├── button.btn-register (width 100%)
         │
         └── .login-link (text-center)
               └── p + a

@media (max-width: 480px)
   ├── .name-row → flex-direction column
   └── .password-row → flex-direction column
```

## Lo que has aprendido

- ✅ Layout en columna con `flex-direction: column`.
- ✅ Filas con `display: flex; gap: 15px`.
- ✅ `flex: 1` para repartir espacio entre hijos.
- ✅ Estados `:focus` y compensar `outline: none`.
- ✅ Asociación `<label for="">` con `<input id="">`.
- ✅ Responsive intercambiando `flex-direction` en `@media`.
- ✅ Sombra suave y bordes redondeados para tarjetas.
- ✅ Botón ancho completo con `width: 100%`.

¡Has terminado los 3 ejercicios de Interfaces! 🎉

Vuelve al [README del módulo](../../README.md) o al [índice del simulacro](../simulacro-desarrollo.md).
