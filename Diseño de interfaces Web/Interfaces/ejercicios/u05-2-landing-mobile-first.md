# Ejercicio U5.2 — Landing page mobile-first completa

> 📚 Unidad 5 · Diseño responsive
> ⏱️ Tiempo: 50-60 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: construir una landing **mobile-first** con hero, features, testimonios y CTA — todo responsive con Grid + Flex + media queries.

## Enunciado

Una landing de "CursosPro" (plataforma de cursos online):

1. **Header**: logo + menú hamburguesa en móvil, menú horizontal en desktop.
2. **Hero**: título grande + texto + botón. En móvil texto centrado; en desktop, imagen a la derecha.
3. **Features**: 3 tarjetas con icono, título y descripción. Mobile: 1 columna. Tablet: 2. Desktop: 3.
4. **Testimonios**: 2 testimonios uno encima del otro en móvil, lado a lado en desktop.
5. **CTA final**: banner con botón "Empieza ya".
6. **Footer**: enlaces en 4 columnas en desktop, 2 columnas en tablet, 1 en móvil.

Sin frameworks. Solo HTML + CSS.

---

## ¿Qué vas a aprender?

- Construir una landing **completa** desde cero pensando primero el móvil.
- Menú hamburguesa **sin JavaScript** (truco del checkbox).
- Sección hero con dos layouts: vertical (móvil) y horizontal (desktop).
- Repartir tarjetas con `auto-fit` y `minmax` (sin tener que escribir media queries por cada layout).
- Tipografía fluida con `clamp()`.
- Footer multi-columna que colapsa.
- Patrón "stack-to-row" usado en TODA la web profesional.

## Cómo va a quedar (boceto ASCII)

```
MOBILE                           DESKTOP
┌──────────────────┐            ┌────────────────────────────────────────────┐
│ LOGO         [☰] │            │ LOGO    Cursos  Precios  Blog  [Entrar]    │
├──────────────────┤            ├────────────────────────────────────────────┤
│                  │            │                          │                 │
│  APRENDE A       │            │  APRENDE A PROGRAMAR    │   [imagen del   │
│  PROGRAMAR       │            │  COMO LOS PROS          │    chico        │
│  COMO PROS       │            │                          │    programando] │
│                  │            │  Lorem ipsum...          │                 │
│  Lorem...        │            │                          │                 │
│                  │            │  [Empezar gratis]        │                 │
│  [Empezar]       │            │                          │                 │
├──────────────────┤            ├────────────────────────────────────────────┤
│  ┌────────┐     │            │  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │ 🎓     │     │            │  │ 🎓     │  │ 💻     │  │ 🏆     │        │
│  │Feature │     │            │  │Feature │  │Feature │  │Feature │        │
│  │   1    │     │            │  │   1    │  │   2    │  │   3    │        │
│  └────────┘     │            │  └────────┘  └────────┘  └────────┘        │
│  ┌────────┐     │            ├────────────────────────────────────────────┤
│  │ 💻     │     │            │  ┌──────────────────┐  ┌──────────────────┐│
│  │Feature │     │            │  │"El mejor curso"  │  │"Cambié de carrera││
│  │   2    │     │            │  │ — Ana            │  │  gracias a esto" ││
│  └────────┘     │            │  └──────────────────┘  │ — Pedro          ││
│  ┌────────┐     │            │                        └──────────────────┘│
│  │ 🏆     │     │            ├────────────────────────────────────────────┤
│  │Feature │     │            │       ¿LISTO PARA EMPEZAR? [Empieza ya]   │
│  │   3    │     │            ├────────────────────────────────────────────┤
│  └────────┘     │            │ Producto | Empresa | Soporte | Legal       │
├──────────────────┤            └────────────────────────────────────────────┘
│ "El mejor"      │
│  — Ana          │
├──────────────────┤
│ "Cambié"        │
│  — Pedro        │
├──────────────────┤
│ ¿LISTO? [Empieza]│
├──────────────────┤
│ Producto         │
│ Empresa          │
│ Soporte          │
│ Legal            │
└──────────────────┘
```

---

## Paso 1 — Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CursosPro — Aprende programación</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <!-- HEADER con menú hamburguesa puro CSS -->
    <header class="header">
        <div class="contenedor header-inner">
            <a href="/" class="logo">CursosPro</a>

            <input type="checkbox" id="menu-toggle" class="menu-toggle">
            <label for="menu-toggle" class="hamburguesa" aria-label="Menú">
                <span></span><span></span><span></span>
            </label>

            <nav class="menu">
                <a href="#cursos">Cursos</a>
                <a href="#precios">Precios</a>
                <a href="#blog">Blog</a>
                <a href="/login" class="btn-secundario">Entrar</a>
            </nav>
        </div>
    </header>

    <!-- HERO -->
    <section class="hero">
        <div class="contenedor hero-inner">
            <div class="hero-texto">
                <h1>Aprende a programar como los pros</h1>
                <p>Más de 200 cursos sobre HTML, CSS, JavaScript, Python y mucho más.</p>
                <a href="#cursos" class="btn-primario">Empezar gratis</a>
            </div>
            <div class="hero-imagen">
                <img src="https://picsum.photos/600/400" alt="Persona programando">
            </div>
        </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
        <div class="contenedor">
            <h2>¿Por qué CursosPro?</h2>
            <div class="grid-features">
                <article class="feature">
                    <div class="icono">🎓</div>
                    <h3>Profesores expertos</h3>
                    <p>Aprende con quienes lo hacen cada día en empresas reales.</p>
                </article>
                <article class="feature">
                    <div class="icono">💻</div>
                    <h3>Proyectos reales</h3>
                    <p>Sale a la calle con un portafolio que impresione.</p>
                </article>
                <article class="feature">
                    <div class="icono">🏆</div>
                    <h3>Certificación</h3>
                    <p>Obtén un certificado oficial que añadir a tu LinkedIn.</p>
                </article>
            </div>
        </div>
    </section>

    <!-- TESTIMONIOS -->
    <section class="testimonios">
        <div class="contenedor">
            <h2>Lo que dicen nuestros alumnos</h2>
            <div class="grid-testi">
                <blockquote class="testi">
                    <p>"El mejor curso de programación que he hecho. Pasé de no saber nada a desarrollar mi primera app en 6 meses."</p>
                    <cite>— Ana, desarrolladora frontend</cite>
                </blockquote>
                <blockquote class="testi">
                    <p>"Cambié de carrera gracias a CursosPro. Ahora trabajo en una startup haciendo lo que me apasiona."</p>
                    <cite>— Pedro, backend developer</cite>
                </blockquote>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta">
        <div class="contenedor cta-inner">
            <h2>¿Listo para empezar?</h2>
            <a href="#cursos" class="btn-primario">Empieza ya</a>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="contenedor footer-inner">
            <div class="col">
                <h4>Producto</h4>
                <ul>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Precios</a></li>
                    <li><a href="#">Becas</a></li>
                </ul>
            </div>
            <div class="col">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Empleo</a></li>
                </ul>
            </div>
            <div class="col">
                <h4>Soporte</h4>
                <ul>
                    <li><a href="#">Centro de ayuda</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div class="col">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Términos</a></li>
                    <li><a href="#">Privacidad</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
        <p class="copyright">© 2026 CursosPro</p>
    </footer>
</body>
</html>
```

## Paso 2 — Base + contenedor

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
    /* Variables CSS — definidas una vez, reutilizadas en todo el CSS */
    --primario: #0d6efd;
    --primario-hover: #0b5ed7;
    --texto: #212529;
    --texto-sec: #6c757d;
    --bg: #f8f9fa;
    --blanco: white;
    --max-ancho: 1200px;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    color: var(--texto);
    background: var(--blanco);
    line-height: 1.6;
}

img { max-width: 100%; height: auto; display: block; }

a { color: var(--primario); text-decoration: none; }

.contenedor {
    max-width: var(--max-ancho);
    margin: 0 auto;
    padding: 0 16px;
}

/* Tipografía fluida */
h1 { font-size: clamp(1.8rem, 5vw, 3rem); line-height: 1.2; }
h2 { font-size: clamp(1.5rem, 4vw, 2.2rem); margin-bottom: 1rem; }
h3 { font-size: 1.25rem; }
```

### Variables CSS (`:root`)

Definir colores y medidas como variables te permite cambiar todo el tema en un solo sitio:

```css
:root { --primario: #0d6efd; }

.boton { background: var(--primario); }
.titulo { color: var(--primario); }

/* Si quieres tema rosa, cambias UNA línea: */
:root { --primario: #e91e63; }
```

## Paso 3 — Header con menú hamburguesa CSS puro

```css
.header {
    background: var(--blanco);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
}

.logo {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--primario);
}

/* Checkbox truco invisible */
.menu-toggle {
    display: none;
}

/* Hamburguesa visible en móvil */
.hamburguesa {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    padding: 8px;
}

.hamburguesa span {
    display: block;
    width: 25px;
    height: 3px;
    background: var(--texto);
    border-radius: 2px;
    transition: all 0.3s;
}

/* Menú oculto en móvil */
.menu {
    display: none;
    flex-direction: column;
    width: 100%;
    background: var(--blanco);
    padding: 10px 0;
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.menu a {
    padding: 12px 20px;
    color: var(--texto);
}

.menu a:hover {
    background: var(--bg);
}

/* TRUCO: cuando el checkbox está marcado, mostrar el menú */
.menu-toggle:checked ~ .menu {
    display: flex;
}

/* Header relativo para que el menú absolute se posicione bien */
.header-inner { position: relative; }

/* === DESKTOP: ocultar hamburguesa, mostrar menú horizontal === */
@media (min-width: 768px) {
    .hamburguesa { display: none; }

    .menu {
        display: flex;
        flex-direction: row;
        gap: 30px;
        position: static;
        width: auto;
        background: transparent;
        padding: 0;
        box-shadow: none;
    }

    .menu a:hover { background: transparent; color: var(--primario); }

    .menu .btn-secundario {
        padding: 8px 16px;
        border: 1px solid var(--primario);
        border-radius: 4px;
        color: var(--primario);
    }
}
```

### El truco del checkbox

```html
<input type="checkbox" id="menu-toggle">
<label for="menu-toggle">☰</label>
<nav class="menu">...</nav>
```

```css
.menu-toggle { display: none; }
.menu-toggle:checked ~ .menu { display: flex; }
```

Cuando el usuario hace clic en el `<label>`, marca el checkbox. La pseudoclase `:checked` se activa y el selector `~` aplica estilos al hermano `.menu`. Resultado: menú abierto/cerrado **sin JavaScript**.

🔥 Funciona porque `<label for="x">` activa el checkbox `id="x"`.

## Paso 4 — Hero (cambia layout en desktop)

```css
.hero {
    padding: 40px 0;
    background: linear-gradient(135deg, #e3f2fd 0%, #fff 100%);
}

.hero-inner {
    display: flex;
    flex-direction: column;       /* móvil: vertical */
    align-items: center;
    gap: 30px;
    text-align: center;
}

.hero-texto {
    max-width: 500px;
}

.hero-texto h1 {
    margin-bottom: 1rem;
}

.hero-texto p {
    font-size: 1.1rem;
    color: var(--texto-sec);
    margin-bottom: 1.5rem;
}

.btn-primario {
    display: inline-block;
    background: var(--primario);
    color: white;
    padding: 12px 28px;
    border-radius: 6px;
    font-weight: 600;
    transition: background 0.2s;
}

.btn-primario:hover { background: var(--primario-hover); }

/* === DESKTOP: hero horizontal === */
@media (min-width: 768px) {
    .hero-inner {
        flex-direction: row;
        text-align: left;
        gap: 60px;
    }
    .hero-texto, .hero-imagen { flex: 1; }
}
```

## Paso 5 — Features con `auto-fit` + `minmax`

```css
.features {
    padding: 60px 0;
    background: var(--bg);
    text-align: center;
}

.grid-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.feature {
    background: var(--blanco);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.feature .icono {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature h3 { margin-bottom: 0.5rem; }
.feature p { color: var(--texto-sec); font-size: 0.95rem; }
```

### `repeat(auto-fit, minmax(250px, 1fr))` — magia responsive sin media queries

Esta línea reemplaza media queries enteras:

- `auto-fit` = "rellena con tantas columnas como quepan".
- `minmax(250px, 1fr)` = "cada columna mínimo 250px, máximo 1 fracción del espacio".

Resultado:

- Pantalla 360px → 1 columna (de 360px).
- Pantalla 700px → 2 columnas (de 350px cada una).
- Pantalla 1100px → 4 columnas (de 275px cada una).
- Pantalla 1600px → 6 columnas (de 267px cada una).

🔥 Es la herramienta más útil de Grid para galerías.

### `auto-fit` vs `auto-fill`

- `auto-fit` — si hay menos items que columnas posibles, los items se **expanden** para llenar.
- `auto-fill` — los items se quedan a su tamaño y deja huecos.

Casi siempre quieres `auto-fit`.

## Paso 6 — Testimonios y CTA

```css
.testimonios {
    padding: 60px 0;
    text-align: center;
}

.grid-testi {
    display: grid;
    grid-template-columns: 1fr;     /* móvil */
    gap: 20px;
    margin-top: 30px;
}

.testi {
    background: var(--bg);
    padding: 30px;
    border-radius: 8px;
    border-left: 4px solid var(--primario);
    font-style: italic;
}

.testi cite {
    display: block;
    margin-top: 10px;
    font-style: normal;
    font-weight: 600;
    color: var(--texto-sec);
}

@media (min-width: 768px) {
    .grid-testi { grid-template-columns: 1fr 1fr; }
}

/* CTA */
.cta {
    background: var(--primario);
    color: white;
    padding: 60px 0;
    text-align: center;
}

.cta h2 { color: white; }

.cta .btn-primario {
    background: white;
    color: var(--primario);
    margin-top: 1rem;
}
.cta .btn-primario:hover { background: #e9ecef; }
```

## Paso 7 — Footer multi-columna

```css
.footer {
    background: #1f2937;
    color: #e5e7eb;
    padding: 40px 0 20px;
}

.footer-inner {
    display: grid;
    grid-template-columns: 1fr;     /* móvil: 1 columna */
    gap: 30px;
}

.footer h4 {
    color: white;
    margin-bottom: 12px;
}

.footer ul { list-style: none; }
.footer li { margin-bottom: 6px; }
.footer a { color: #d1d5db; }
.footer a:hover { color: white; }

.copyright {
    text-align: center;
    padding-top: 20px;
    margin-top: 30px;
    border-top: 1px solid #374151;
    color: #9ca3af;
    font-size: 0.9rem;
}

@media (min-width: 576px) {
    .footer-inner { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 992px) {
    .footer-inner { grid-template-columns: repeat(4, 1fr); }
}
```

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Diseñar primero el desktop y "luego adaptar" | Acabas haciendo media queries que pelean | Empieza por el móvil. |
| Menú hamburguesa con JS y sin fallback | Si JS falla, no hay menú | El truco del checkbox no necesita JS. |
| `position: sticky` sin `top` | No se pega | Pon `top: 0`. |
| `position: sticky` y el padre tiene `overflow: hidden` | Sticky deja de funcionar | Quita el overflow del padre. |
| Iconos como imágenes pesadas | Lento | Usa emoji, SVG inline o webfont. |
| `<img>` sin `max-width: 100%` | Se desborda en móvil | Aplica `img { max-width: 100%; height: auto; }` global. |
| Texto encima de imagen sin overlay | Mal legible si la imagen tiene zonas claras | Pon `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))` sobre. |
| Footer con `display: grid` y columnas fijas | Mal en móvil | Mobile-first: 1 columna, luego añade. |
| Olvidar `aria-label` en hamburguesa | Lector de pantalla no sabe qué es | Pon `aria-label="Menú"`. |
| `:hover` en móvil táctil | Se queda activo después del toque | Usa `@media (hover: hover)` para hovers no críticos. |
| Tipografía grande pegada al borde | Cuesta leer | `padding: 0 16px` en `.contenedor`. |

## Cómo verificar responsive

1. Abre `index.html` → Ctrl + Shift + M (DevTools mobile).
2. Prueba estos anchos:
   - 360px (móvil pequeño) — menú hamburguesa, hero apilado, 1 columna features, footer 1 col.
   - 576px — footer pasa a 2 columnas.
   - 768px — menú horizontal aparece, hero horizontal, testimonios lado a lado.
   - 992px — footer 4 columnas.
   - 1200px — máximo.
3. Pulsa la hamburguesa (sin JS) → el menú se despliega.
4. **Validador**: https://validator.w3.org/ → pega tu HTML, debe pasar sin errores.

## Alternativas peores

### 1) Menú hamburguesa con `position: fixed` sin overflow

```css
.menu { position: fixed; top: 0; left: -100%; }
.menu.activo { left: 0; }
```

Funciona, pero necesita JS para añadir/quitar la clase. El truco del checkbox es CSS puro.

### 2) Hero con imagen como background

```css
.hero {
    background-image: url('imagen.jpg');
    background-size: cover;
}
```

Problemas: no se redimensiona bien con `<picture>`, el `alt` no existe (mal SEO/accesibilidad). Usa `<img>`.

### 3) Footer con tabla

```html
<!-- ❌ -->
<table class="footer">
  <tr>
    <td>Producto</td>
    <td>Empresa</td>
    ...
```

Pierdes responsive y semántica.

### 4) Iconos con imágenes PNG

```html
<img src="icono-graduado.png">
```

Pesa más, no escala bien. Usa emoji (`🎓`), SVG inline, o un icon font (Font Awesome).

### 5) Olvidar `min-width: 0` en flex con texto largo

Si dentro de un flex item tienes texto largo sin espacios (URL), puede romper el layout. Solución: `min-width: 0` en el flex item afectado.

### 6) `100vh` para el hero en móvil

```css
.hero { min-height: 100vh; }
```

En móvil incluye la barra del navegador → cuando esta se esconde/aparece, el hero "salta". Usa `100dvh` (dynamic) o asume `min-height: 80vh`.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El menú no se despliega al pulsar la hamburguesa | El checkbox y el menú no son hermanos | Asegúrate de que `<input>` está justo antes del `<label>` y `<nav>`. |
| Sticky header no se queda | Falta `top: 0` o el padre tiene `overflow` | Comprueba ambos. |
| Hero imagen demasiado grande en móvil | Imagen sin `max-width` | `img { max-width: 100%; height: auto; }`. |
| Tarjetas todas en 1 columna en desktop | `minmax(500px, 1fr)` muy grande | Baja el min a 250-300px. |
| Footer columnas pegadas | Falta `gap` | Añade `gap: 30px`. |
| Testimonios estirados verticalmente | Por defecto grid items estiran | Está bien, o pon `align-items: start`. |
| Cuando pulso fuera del menú, sigue abierto | El checkbox solo se activa con el label | Para cerrar al click fuera necesitas JS o un overlay. |

## Lo que has aprendido

- Diseño **mobile-first** completo.
- Menú hamburguesa con CSS puro (truco del checkbox).
- `position: sticky` para header pegajoso.
- Variables CSS (`:root` + `var(...)`).
- `repeat(auto-fit, minmax(250px, 1fr))` — galerías sin media queries.
- `auto-fit` vs `auto-fill`.
- Tipografía fluida con `clamp()`.
- Patrón "stack-to-row" (vertical en móvil, horizontal en desktop).
- Estructura completa: header, hero, features, testimonios, CTA, footer.
- Footer multi-columna que colapsa progresivamente.
