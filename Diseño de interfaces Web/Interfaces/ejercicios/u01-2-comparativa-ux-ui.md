# Ejercicio U1.2 — Página comparativa: BIEN vs MAL diseño (UX/UI)

> 📚 Unidad 1 · Introducción al diseño de interfaces web
> ⏱️ Tiempo: 35-45 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: aplicar los **principios de UX/UI** comparando dos versiones de una misma página.

## Enunciado

Tu cliente tiene una página de "Suscríbete a la newsletter" muy mal diseñada. Tu trabajo es entregarle **dos versiones** lado a lado en la misma página HTML:

- **Versión MAL**: texto microscópico, sin contraste, sin jerarquía, formulario sin labels, botón sin estado *hover*, color rojo/verde como única indicación de éxito.
- **Versión BIEN**: tipografía legible, contraste WCAG AA, jerarquía clara, labels visibles, focus visible, mensajes accesibles.

Cada versión va en una columna con un encabezado "MAL ❌" y "BIEN ✅" para que se pueda comparar.

---

## ¿Qué vas a aprender?

- Principios básicos de **UX (User eXperience)** y **UI (User Interface)**.
- Qué es el **contraste WCAG** y por qué importa (4.5:1 mínimo para texto normal).
- **Jerarquía visual**: cómo guiar el ojo con tamaño, peso y espacio.
- Por qué las **labels** son obligatorias en formularios.
- Diferencia entre `color` como única indicación vs. color + texto + ícono.
- Estado **focus visible** para usuarios que navegan con teclado.

## Cómo va a quedar (boceto ASCII)

```
+--------------------------------+--------------------------------+
|          MAL ❌                |          BIEN ✅              |
+--------------------------------+--------------------------------+
|                                |                                |
|  Suscribite                    |    Suscríbete a               |
|  hjkdshdjsjs                   |    nuestra newsletter         |
|  ......                        |                                |
|                                |    Recibe artículos cada      |
|  [ tu email                ]   |    martes en tu correo.       |
|  [ SUBMIT ]                    |                                |
|                                |    Tu correo                   |
|  (texto gris claro 10px)       |    [ ejemplo@correo.com    ]   |
|                                |                                |
|                                |    [   Suscribirme        ]   |
+--------------------------------+--------------------------------+
```

---

## Paso 1 — Estructura HTML (2 columnas)

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UX/UI: bien vs mal</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="comparador">
        <!-- COLUMNA MAL -->
        <section class="columna mal">
            <h2>MAL ❌</h2>
            <div class="suscripcion-mal">
                <p class="titulo">Suscribite</p>
                <p class="cuerpo">hjkdshdjsjs informacion .........</p>
                <input type="text" placeholder="email">
                <button>SUBMIT</button>
            </div>
        </section>

        <!-- COLUMNA BIEN -->
        <section class="columna bien">
            <h2>BIEN ✅</h2>
            <form class="suscripcion-bien">
                <h3>Suscríbete a nuestra newsletter</h3>
                <p class="lead">Recibe artículos cada martes en tu correo.</p>

                <label for="email">Tu correo electrónico</label>
                <input id="email" type="email" placeholder="ejemplo@correo.com" required>

                <button type="submit">Suscribirme</button>
            </form>
        </section>
    </div>
</body>
</html>
```

### Por qué esta estructura

- Dos `<section>` lado a lado en un contenedor `.comparador` con `display: grid` de 2 columnas.
- En la versión MAL usamos a propósito etiquetas incorrectas (`<p class="titulo">` en lugar de `<h3>`, `<input type="text">` para email, sin `<label>`, sin `<form>`).
- En la versión BIEN todo es semántico: `<form>` envolviendo, `<label for="email">` enlazada con `id="email"`, `type="email"` para validación, `required` para obligatoriedad.

## Paso 2 — CSS de la versión MAL (anti-patrones a propósito)

```css
.suscripcion-mal {
    background: #ffff99;            /* amarillo chillón */
    padding: 20px;
    font-family: "Comic Sans MS", cursive;
    color: #ccc;                    /* gris claro sobre amarillo: contraste 1.5:1 */
}

.suscripcion-mal .titulo {
    font-size: 12px;                /* "titular" más pequeño que el cuerpo */
    color: #aaa;
}

.suscripcion-mal .cuerpo {
    font-size: 18px;                /* cuerpo más grande que el titular: jerarquía invertida */
}

.suscripcion-mal input {
    border: none;                   /* no se ve dónde escribir */
    background: #ffff99;
    color: #bbb;
}

.suscripcion-mal button {
    background: red;                /* rojo = error universalmente */
    color: white;
    border: none;
    padding: 5px;
}

/* sin :hover ni :focus */
```

### Qué está mal y por qué

| Anti-patrón | Por qué es malo |
|-------------|-----------------|
| **Comic Sans** | Tipografía no profesional, asociada a contextos infantiles. |
| `color: #ccc` sobre `#ffff99` | Contraste 1.5:1 — falla WCAG AA (mínimo 4.5:1). Las personas con baja visión no lo leen. |
| Titular de 12px y cuerpo de 18px | **Jerarquía invertida**: el ojo se va al cuerpo y se pierde el titular. |
| `input` sin borde y mismo color de fondo | El usuario no sabe que es un campo de texto. |
| `button` rojo | Rojo se asocia a peligro/borrar. Para "suscribirme" usamos azul/verde. |
| `placeholder="email"` y sin label | Cuando empiezas a escribir el placeholder desaparece; te olvidas de qué iba el campo. |
| Sin `:focus` visible | Quien navega con TAB no sabe dónde está. |

## Paso 3 — CSS de la versión BIEN

```css
.suscripcion-bien {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #212529;                 /* casi negro: máximo contraste */
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.suscripcion-bien h3 {
    font-size: 24px;                /* grande, jerarquía clara */
    color: #0d47a1;
    margin-bottom: 5px;
}

.suscripcion-bien .lead {
    font-size: 16px;
    color: #495057;                 /* contraste sobre blanco: 8.5:1 */
    line-height: 1.5;
}

.suscripcion-bien label {
    font-weight: 600;
    color: #212529;
    font-size: 14px;
}

.suscripcion-bien input {
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;                /* >=16px evita el zoom automático en iOS */
}

.suscripcion-bien input:focus {
    outline: 3px solid #0d47a1;     /* halo visible para navegación con teclado */
    outline-offset: 2px;
    border-color: #0d47a1;
}

.suscripcion-bien button {
    background: #0d47a1;
    color: white;
    border: none;
    padding: 14px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.suscripcion-bien button:hover {
    background: #1565c0;            /* feedback visual al pasar el ratón */
}

.suscripcion-bien button:focus {
    outline: 3px solid #ffc107;     /* color distinto para destacar */
    outline-offset: 2px;
}
```

### Por qué cada propiedad mejora la UX

- `font-size: 16px` en el `input` evita que iOS haga zoom automático al pulsarlo (UX móvil).
- `:focus` con `outline` visible permite navegación con teclado (accesibilidad — WAI-ARIA).
- `cursor: pointer` en el botón le dice al usuario "soy clicable".
- `transition` da feedback suave al pasar el ratón.
- Contraste de `#212529` sobre blanco: 16:1 (más que suficiente para WCAG AAA).

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Usar `placeholder` como label | Al escribir, desaparece. El usuario olvida qué pedía el campo. | Siempre `<label>` visible **además** del placeholder. |
| `outline: none` sin alternativa | Quitas el halo de foco → quien usa teclado se pierde | Si quitas `outline`, **pon otra** indicación de foco (border, box-shadow). |
| Texto sobre imagen sin overlay | Si la imagen tiene blancos, el texto blanco desaparece | Pon un overlay oscuro semitransparente. |
| Color como única indicación | Daltonismo rojo-verde: el usuario no distingue éxito/error | Color + texto + ícono. |
| Botones con `<div onclick="...">` | No es navegable con teclado, no es accesible | Usa `<button>`. |
| Fuente menor de 14-16px en cuerpo | Cuesta leerlo a partir de 40 años | 16px es el estándar. |
| Centrar texto en párrafos largos | Saltos de línea irregulares = cuesta seguir | Centra **titulares cortos**, no párrafos. |

## Paso 4 — CSS del layout comparativo

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body { font-family: Arial, sans-serif; background: #f8f9fa; padding: 20px; }

.comparador {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.columna {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.columna h2 {
    text-align: center;
    margin-bottom: 20px;
    padding: 10px;
    border-bottom: 2px solid #dee2e6;
}

.mal h2 { color: #dc3545; }
.bien h2 { color: #28a745; }

@media (max-width: 700px) {
    .comparador { grid-template-columns: 1fr; }
}
```

## Cómo verificar responsive

1. Abre `index.html`. Verás 2 columnas.
2. **F12** → modo móvil → 375px.
3. Las columnas pasan a 1 sola apilada gracias al `@media`.
4. **Prueba de teclado**: pulsa `Tab` repetidamente. En la versión BIEN ves un halo amarillo/azul claro alrededor del campo y botón. En la versión MAL no se ve nada → fallo de accesibilidad.
5. **Prueba de contraste**: DevTools → click en el texto gris claro de la versión MAL → en el panel "Styles" verás la ratio de contraste. Cualquier valor < 4.5 es un suspenso WCAG AA.

## Alternativas peores

### 1) Solo cambiar colores y olvidar la semántica

```html
<!-- ❌ se ve bonito pero sigue siendo inaccesible -->
<div onclick="enviar()" class="boton-bonito">Suscribirme</div>
```

`<div>` no es enfocable con teclado, no se anuncia como botón al lector de pantalla. **Usa `<button>`** siempre que sea una acción.

### 2) Confiar solo en el color

```css
/* ❌ las personas daltónicas no distinguen rojo/verde */
.error { color: red; }
.exito { color: green; }
```

```html
<!-- ✅ color + ícono + texto -->
<p class="error">❌ Error: el email no es válido.</p>
<p class="exito">✅ Suscripción correcta.</p>
```

### 3) Diseñar pensando solo en "lo que se ve"

UX no es solo bonito, es:

- **Útil**: el usuario consigue su objetivo.
- **Usable**: lo consigue rápido y sin confusiones.
- **Deseable**: le apetece volver.
- **Accesible**: todo el mundo puede usarlo.
- **Encontrable**: la información está donde se busca.
- **Creíble**: inspira confianza.

Los 6 principios de **Peter Morville** (panal de UX). Memorízalos.

### 4) Quitar `outline` para que "quede limpio"

```css
/* ❌ */
*:focus { outline: none; }
```

Te cargas la navegación por teclado. Si no te gusta el outline azul por defecto:

```css
/* ✅ */
*:focus { outline: 3px solid #0d47a1; outline-offset: 2px; }
```

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El contraste sigue siendo bajo aunque cambié colores | El comprobador mide texto sobre **fondo real** (no transparencia) | Mide la combinación final con DevTools o WebAIM contrast checker. |
| El focus visible no aparece | Tienes `outline: none` heredado de un reset | Quítalo o sobreescribe con `outline: 3px solid ...`. |
| El campo email no valida | Pusiste `type="text"` | Cambia a `type="email"`. |
| El placeholder se ve igual que el texto | Color del placeholder muy oscuro | Es lo correcto: el placeholder debe verse **más claro** que el texto real. |
| iOS hace zoom al pulsar el input | `font-size` < 16px | Pon `font-size: 16px` en `input`. |

## Lo que has aprendido

- Principios de UX (Morville): útil, usable, deseable, accesible, encontrable, creíble.
- Contraste WCAG AA (4.5:1 texto normal, 3:1 texto grande).
- Jerarquía visual con tamaño y peso.
- Labels obligatorias en formularios (no usar placeholder como sustituto).
- Estado focus visible para navegación con teclado.
- No confiar solo en el color (daltonismo, accesibilidad).
- `type="email"`, `required`, `cursor: pointer`, `transition`.
