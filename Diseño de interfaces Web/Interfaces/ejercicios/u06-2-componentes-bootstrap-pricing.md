# Ejercicio U6.2 — Página de precios con componentes Bootstrap

> 📚 Unidad 6 · Bootstrap
> ⏱️ Tiempo: 40-50 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: usar **componentes** (navbar, cards, buttons, badges, alerts) y **utilidades** de Bootstrap para una página completa.

## Enunciado

Página de precios con:

- **Navbar responsive** con logo, enlaces y botón "Empezar".
- **Alert dismissible** arriba con un mensaje promocional.
- **Hero** con título grande, párrafo y CTA.
- **3 tarjetas de planes** (Free, Pro, Enterprise) con:
  - Badge "RECOMENDADO" en la del medio.
  - Precio grande.
  - Lista de features con tick.
  - Botón con estilo distinto en cada una.
  - La del medio se eleva visualmente (sombra mayor).
- **Tabla comparativa** de features (`<table class="table">`).
- **Footer** con enlaces.

Todo con clases Bootstrap, sin CSS propio (o casi).

---

## ¿Qué vas a aprender?

- **Navbar** Bootstrap responsive (con `navbar-expand-lg` y `navbar-toggler`).
- **Cards**: estructura completa (`card-header`, `card-body`, `card-footer`, `card-title`, `card-text`).
- **Buttons**: variantes (`btn-primary`, `btn-outline-*`, `btn-lg`, `btn-block`).
- **Badges**: `badge`, `bg-success`, `text-bg-warning`.
- **Alerts**: `alert`, `alert-dismissible`, botón de cerrar.
- **Tables**: `table`, `table-striped`, `table-hover`, `table-responsive`.
- **Utilidades de espaciado**: `m-*`, `p-*`, `mt-3`, `px-4`, `mb-auto`.
- **Utilidades de texto**: `text-center`, `text-muted`, `fs-1`, `fw-bold`.
- **Utilidades de display**: `d-flex`, `d-none d-md-block`.

## Cómo va a quedar (boceto ASCII)

```
┌──────────────────────────────────────────────────────────────────┐
│ MiSitio    Inicio  Precios  Blog            [   Empezar   ]    │
├──────────────────────────────────────────────────────────────────┤
│ ℹ️ Oferta limitada: -20% en el plan Pro          [×]            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│           Planes para todos los tamaños                          │
│        Empieza gratis y crece sin límites                        │
│              [Empezar gratis]                                     │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  ┌────────┐     ┌──────────────┐     ┌──────────┐               │
│  │  FREE  │     │ RECOMENDADO  │     │ ENTERPRISE│              │
│  │        │     │    PRO       │     │           │              │
│  │   0€   │     │    19€       │     │  Personal.│              │
│  │  /mes  │     │  /mes        │     │           │              │
│  │        │     │              │     │           │              │
│  │ ✓ 1 sit│     │ ✓ 10 sitios  │     │ ✓ ∞ sitios│              │
│  │ ✓ 5 GB │     │ ✓ 100 GB     │     │ ✓ ∞ GB    │              │
│  │ ✗ Soport│    │ ✓ Soporte    │     │ ✓ Dedicado│              │
│  │        │     │              │     │           │              │
│  │[Empezar]│    │[ Empezar  ]  │     │[Contactar]│              │
│  └────────┘     └──────────────┘     └──────────┘               │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  Comparativa completa                                            │
│  ┌──────────────┬──────┬──────┬──────────┐                       │
│  │ Feature      │ Free │ Pro  │Enterprise│                       │
│  ├──────────────┼──────┼──────┼──────────┤                       │
│  │ Sitios       │ 1    │ 10   │ ∞        │                       │
│  │ Almacenamto  │ 5 GB │100 GB│ ∞        │                       │
│  │ ...          │      │      │          │                       │
│  └──────────────┴──────┴──────┴──────────┘                       │
└──────────────────────────────────────────────────────────────────┘
```

---

## Paso 1 — Setup

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Precios — MiSitio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons (gratuitos, opcionales) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>

    <!-- contenido -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

🔥 El JS de Bootstrap (`bootstrap.bundle.min.js`) es **obligatorio** para:

- Navbar colapsable (hamburguesa).
- Alert dismissible (botón cerrar).
- Modal, dropdown, tooltip, popover, carousel, tabs.

Si no usas ninguno de estos, puedes ahorrarte cargarlo.

## Paso 2 — Navbar responsive

```html
<nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
    <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#">MiSitio</a>

        <!-- Botón hamburguesa (solo se ve en móvil) -->
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#menuPrincipal"
                aria-controls="menuPrincipal" aria-expanded="false"
                aria-label="Abrir menú">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menú colapsable -->
        <div class="collapse navbar-collapse" id="menuPrincipal">
            <ul class="navbar-nav me-auto">
                <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Precios</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
            </ul>
            <a href="#" class="btn btn-primary">Empezar</a>
        </div>
    </div>
</nav>
```

### Anatomía de la navbar Bootstrap

| Clase | Para qué |
|-------|----------|
| `navbar` | Componente principal. |
| `navbar-expand-lg` | A partir de `lg` (≥992px) se expande horizontal. Antes, hamburguesa. |
| `navbar-brand` | El logo / nombre. |
| `navbar-toggler` | Botón hamburguesa. |
| `navbar-collapse` + `collapse` | El contenedor colapsable. |
| `navbar-nav` | Lista de enlaces. |
| `nav-item` + `nav-link` | Cada enlace. |
| `active` | Estado activo (página actual). |
| `me-auto` | margin-end auto (empuja los siguientes elementos a la derecha). |

### Atributos `data-bs-*` y ARIA

| Atributo | Para qué |
|----------|----------|
| `data-bs-toggle="collapse"` | Le dice a Bootstrap "este botón despliega/colapsa algo". |
| `data-bs-target="#menuPrincipal"` | Qué elemento despliega. |
| `aria-controls="menuPrincipal"` | Igual, pero para accesibilidad. |
| `aria-expanded="false"` | Estado actual (lo cambia el JS al pulsar). |
| `aria-label="Abrir menú"` | Texto leído por lector de pantalla (el botón es solo un icono). |

🔥 Bootstrap usa `data-bs-*` (con `bs` por Bootstrap 5). En BS4 era solo `data-*`.

## Paso 3 — Alert dismissible

```html
<div class="container mt-3">
    <div class="alert alert-info alert-dismissible fade show" role="alert">
        <i class="bi bi-info-circle me-2"></i>
        <strong>Oferta limitada:</strong> -20% en el plan Pro hasta fin de mes.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
</div>
```

| Clase | Para qué |
|-------|----------|
| `alert` | Componente de alerta. |
| `alert-info` | Variante (info, success, warning, danger). |
| `alert-dismissible` | Habilita el cierre. |
| `fade show` | Para animación al cerrar. |
| `btn-close` | El botón "×". |
| `data-bs-dismiss="alert"` | Le dice al JS qué cerrar. |
| `role="alert"` | Accesibilidad: lector de pantalla lo anuncia. |

## Paso 4 — Hero

```html
<section class="bg-light py-5 text-center">
    <div class="container">
        <h1 class="display-4 fw-bold">Planes para todos los tamaños</h1>
        <p class="lead text-muted mb-4">Empieza gratis y crece sin límites.</p>
        <a href="#planes" class="btn btn-primary btn-lg">Empezar gratis</a>
    </div>
</section>
```

| Utilidad | Para qué |
|----------|----------|
| `display-4` | Tipografía gigante (titulares hero). |
| `fw-bold` | font-weight: bold. |
| `lead` | Párrafo grande con estilo "subtítulo". |
| `text-muted` | Color gris claro. |
| `py-5` | padding vertical alto (top + bottom). |
| `mb-4` | margin-bottom mediano. |
| `btn-lg` | Botón grande. |

### Escala de espaciado

Bootstrap usa una escala de 0 a 5:

| Clase | Valor |
|-------|-------|
| `p-0` | 0 |
| `p-1` | 0.25rem (4px) |
| `p-2` | 0.5rem (8px) |
| `p-3` | 1rem (16px) |
| `p-4` | 1.5rem (24px) |
| `p-5` | 3rem (48px) |

Direcciones: `t` (top), `b` (bottom), `s` (start), `e` (end), `x` (horizontal), `y` (vertical).

Ejemplos: `mt-3`, `pb-5`, `px-4`, `mx-auto`.

## Paso 5 — Cards de planes

```html
<section id="planes" class="container py-5">
    <div class="row g-4">

        <!-- FREE -->
        <div class="col-12 col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <h3 class="card-title">Free</h3>
                    <p class="display-5 fw-bold my-3">0€<small class="fs-6 text-muted">/mes</small></p>
                    <ul class="list-unstyled mb-4">
                        <li><i class="bi bi-check-lg text-success"></i> 1 sitio web</li>
                        <li><i class="bi bi-check-lg text-success"></i> 5 GB almacenamiento</li>
                        <li><i class="bi bi-x-lg text-danger"></i> Sin soporte</li>
                    </ul>
                    <a href="#" class="btn btn-outline-primary w-100">Empezar gratis</a>
                </div>
            </div>
        </div>

        <!-- PRO (destacado) -->
        <div class="col-12 col-md-4">
            <div class="card h-100 shadow border-primary border-2 position-relative">
                <span class="badge bg-primary position-absolute top-0 start-50 translate-middle">
                    RECOMENDADO
                </span>
                <div class="card-body text-center">
                    <h3 class="card-title text-primary">Pro</h3>
                    <p class="display-5 fw-bold my-3">19€<small class="fs-6 text-muted">/mes</small></p>
                    <ul class="list-unstyled mb-4">
                        <li><i class="bi bi-check-lg text-success"></i> 10 sitios</li>
                        <li><i class="bi bi-check-lg text-success"></i> 100 GB almacenamiento</li>
                        <li><i class="bi bi-check-lg text-success"></i> Soporte por email</li>
                    </ul>
                    <a href="#" class="btn btn-primary w-100">Empezar prueba</a>
                </div>
            </div>
        </div>

        <!-- ENTERPRISE -->
        <div class="col-12 col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <h3 class="card-title">Enterprise</h3>
                    <p class="display-5 fw-bold my-3">A medida</p>
                    <ul class="list-unstyled mb-4">
                        <li><i class="bi bi-check-lg text-success"></i> Sitios ilimitados</li>
                        <li><i class="bi bi-check-lg text-success"></i> Almacenamiento ilimitado</li>
                        <li><i class="bi bi-check-lg text-success"></i> Soporte dedicado 24/7</li>
                    </ul>
                    <a href="#" class="btn btn-outline-dark w-100">Contactar</a>
                </div>
            </div>
        </div>

    </div>
</section>
```

### Trucos clave

- `h-100` en `.card`: todas las tarjetas a la misma altura (height: 100% del col).
- `shadow-sm` / `shadow` / `shadow-lg`: sombras predefinidas.
- `border-primary border-2`: borde azul de 2px.
- `position-relative` en la card + `position-absolute top-0 start-50 translate-middle` en el badge: badge centrado en el borde superior.
- `w-100`: width 100% (botón ocupa toda la tarjeta).
- `list-unstyled`: lista sin viñetas ni padding.
- `btn-outline-*`: botón con solo borde (sin fondo).

### Variantes de botón

| Clase | Estilo |
|-------|--------|
| `btn-primary` | Azul sólido. |
| `btn-secondary` | Gris. |
| `btn-success` | Verde. |
| `btn-danger` | Rojo. |
| `btn-warning` | Amarillo. |
| `btn-info` | Cian. |
| `btn-light` / `btn-dark` | Claro / oscuro. |
| `btn-link` | Como un enlace (sin fondo ni borde). |
| `btn-outline-*` | Solo borde, fondo transparente. |
| `btn-sm` / `btn-lg` | Tamaño pequeño / grande. |

## Paso 6 — Tabla comparativa

```html
<section class="container py-5">
    <h2 class="text-center mb-4">Comparativa completa</h2>

    <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" class="text-center">Free</th>
                    <th scope="col" class="text-center">Pro</th>
                    <th scope="col" class="text-center">Enterprise</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sitios web</td>
                    <td class="text-center">1</td>
                    <td class="text-center">10</td>
                    <td class="text-center">∞</td>
                </tr>
                <tr>
                    <td>Almacenamiento</td>
                    <td class="text-center">5 GB</td>
                    <td class="text-center">100 GB</td>
                    <td class="text-center">∞</td>
                </tr>
                <tr>
                    <td>Soporte</td>
                    <td class="text-center"><i class="bi bi-x-lg text-danger"></i></td>
                    <td class="text-center">Email</td>
                    <td class="text-center">24/7 dedicado</td>
                </tr>
                <tr>
                    <td>SSL gratuito</td>
                    <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
                    <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
                    <td class="text-center"><i class="bi bi-check-lg text-success"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
```

| Clase | Para qué |
|-------|----------|
| `table` | Estilo base de tabla. |
| `table-striped` | Filas alternas con fondo. |
| `table-hover` | Resalta la fila al pasar el ratón. |
| `align-middle` | Alinea verticalmente al centro. |
| `table-dark` (en `<thead>`) | Cabecera oscura. |
| `table-responsive` (wrapper) | En móvil añade scroll horizontal si no cabe. |

🔥 `table-responsive` es **CRUCIAL** en móvil. Sin ello, una tabla de 4 columnas con texto rompe el viewport.

## Paso 7 — Footer

```html
<footer class="bg-dark text-light py-4 mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-3 mb-md-0">
                <h5>MiSitio</h5>
                <p class="text-light-emphasis mb-0">Construyendo sitios desde 2020.</p>
            </div>
            <div class="col-md-6 text-md-end">
                <a href="#" class="text-light text-decoration-none me-3">Términos</a>
                <a href="#" class="text-light text-decoration-none me-3">Privacidad</a>
                <a href="#" class="text-light text-decoration-none">Contacto</a>
            </div>
        </div>
    </div>
</footer>
```

| Clase | Para qué |
|-------|----------|
| `text-md-end` | Alinea a la derecha solo a partir de `md`. |
| `text-decoration-none` | Quita el subrayado del enlace. |
| `mb-md-0` | margin-bottom 0 solo desde `md` (en móvil, mantiene). |

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Olvidar el JS de Bootstrap | Hamburguesa, dropdown, alert no funcionan | Carga `bootstrap.bundle.min.js`. |
| `data-toggle` (BS4) en lugar de `data-bs-toggle` (BS5) | Componentes no responden | Usa `data-bs-*` en BS5+. |
| Cards de distinta altura | Cada `.card` se ajusta a su contenido | `h-100` en `.card`. |
| Tabla rota en móvil | Sin `table-responsive` | Envuelve en `<div class="table-responsive">`. |
| Modal sin importar | Falta el JS | Carga `bundle.min.js`. |
| Hamburguesa siempre visible | `navbar-expand-XX` mal puesto | `navbar-expand-lg` = se expande desde lg. |
| `me-auto` / `ms-auto` no funcionan | Tu padre no es flex | Aplica dentro de un `.navbar-nav` o `.d-flex`. |
| Tu CSS no sobrescribe a Bootstrap | Cargas tu CSS antes | Carga tu CSS DESPUÉS de Bootstrap. |
| Badge no se posiciona arriba | Falta `position-relative` en el padre | Pon `position-relative` en la card. |
| Botón `btn-block` (BS4) | Quitado en BS5 | Usa `w-100` con `d-block`. |
| Mezclar Bootstrap 4 y 5 | Clases distintas | Verifica versión que estás usando. |
| Icono Bootstrap Icons no aparece | Falta cargar el CSS de los iconos | Añade el `<link>` de bootstrap-icons. |

## Código HTML completo

(Ver Pasos 1-7 ensamblados.)

## Cómo verificar

1. Abre `index.html` (con CDN funciona offline si has cacheado los recursos).
2. **F12** → modo móvil:
   - 360px: navbar colapsada, alert visible, planes apilados, tabla con scroll horizontal.
   - 768px (md): planes en 3 columnas.
   - 992px (lg): navbar horizontal.
3. Pulsa el icono "×" del alert → se cierra suavemente.
4. Pulsa la hamburguesa → menú desplegado.
5. Inspecciona una `.card` → verás `display: flex; flex-direction: column` (es lo que permite que `h-100` funcione).

## Alternativas peores

### 1) Escribir CSS propio para todo

```css
/* ❌ reinventando Bootstrap */
.mi-tarjeta { background: white; padding: 20px; border-radius: 8px; ... }
.mi-boton-azul { background: #0d6efd; color: white; ... }
```

Si vas a usar Bootstrap, **usa las utilidades**. Si no, no lo cargues.

### 2) Cargar Bootstrap y luego ignorarlo

Algunos cargan Bootstrap "por si acaso" y escriben todo el CSS a mano. Cargas un fichero de 200KB que no usas. Decide.

### 3) Olvidar `<meta viewport>`

Sin él, Bootstrap responsive no funciona.

### 4) Mezclar versiones

```html
<!-- ❌ -->
<link href="bootstrap@4.6.0">
<script src="bootstrap@5.3.0"></script>
```

CSS de 4 y JS de 5 → tag `data-toggle` no responde porque el JS espera `data-bs-toggle`.

### 5) Sobrescribir con `!important`

```css
.btn-primary { background: red !important; }
```

Si quieres personalizar Bootstrap, lo correcto es:

- Usar variables CSS de Bootstrap (`--bs-primary`).
- Compilar con Sass y sobrescribir variables Sass.

### 6) Cards con altura fija

```css
.card { height: 400px; }
```

Si una tarjeta tiene más contenido, se desborda. Mejor `h-100`: misma altura **relativa a la row**.

### 7) Hamburguesa custom + Bootstrap navbar

Si usas la navbar de Bootstrap, ya viene con hamburguesa. No mezcles con tu propia implementación.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Hamburguesa no abre el menú | Falta JS, o `data-bs-target` con ID erróneo | Carga JS, verifica IDs. |
| Alert no se cierra | `data-bs-dismiss` mal escrito | Usa `data-bs-dismiss="alert"`. |
| Iconos Bootstrap no aparecen | No has cargado el CSS de bootstrap-icons | Añade el link. |
| Tabla se sale del ancho en móvil | Falta `table-responsive` | Envuelve. |
| `text-end` no alinea a la derecha | Solo aplica en pantallas con breakpoint | Usa `text-end` solo (sin breakpoint). |
| Badge en mal sitio | Falta `position-relative` en padre o `translate-middle` | Comprueba ambos. |
| Cards de distintos tamaños | Falta `h-100` y/o cada col no tiene `d-flex` | `h-100` suele bastar dentro de `.row`. |
| Bootstrap no carga | URL del CDN mal | Copia desde la doc oficial. |

## Lo que has aprendido

- Cargar Bootstrap CSS + JS por CDN.
- Navbar responsive con `navbar-expand-lg`, hamburguesa.
- Alerts dismissible.
- Cards (estructura, sombras, alturas iguales con `h-100`).
- Buttons (variantes, outline, tamaños, `w-100`).
- Badges posicionados con `position-absolute` + `translate-middle`.
- Tables con `table-striped`, `table-hover`, `table-responsive`.
- Utilidades de espaciado (`m-*`, `p-*` con escala 0-5).
- Utilidades de display (`d-flex`, `d-none d-md-block`).
- Utilidades de texto (`text-center`, `text-muted`, `display-4`, `lead`).
- Iconos con Bootstrap Icons.
- `me-auto` / `ms-auto` para empujar elementos en flex.
