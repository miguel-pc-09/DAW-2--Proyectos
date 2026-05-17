# Ejercicio U6.1 — Sistema de rejilla Bootstrap (grid system)

> 📚 Unidad 6 · Bootstrap
> ⏱️ Tiempo: 25-30 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: dominar `container`, `row` y `col-*` y los breakpoints de Bootstrap.

## Enunciado

Reproducir 4 layouts típicos con la grid de Bootstrap, **sin escribir CSS propio**, solo usando clases:

1. 12 columnas iguales (`col-1` cada una).
2. 3 columnas iguales que se apilan en móvil (`col-md-4`).
3. Layout sidebar: 3-9 en desktop, 12-12 en móvil.
4. Layout asimétrico responsive: 1 fila con 6-6 en tablet, 4-8 en desktop, 12 en móvil.

---

## ¿Qué vas a aprender?

- Qué es Bootstrap y por qué existe.
- Cómo cargarlo (CDN vs descarga).
- La regla de oro: `.container > .row > .col-*`.
- Sistema de 12 columnas y los breakpoints `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.
- Cómo combinar varios `col-*` para responsive (`col-12 col-md-6 col-lg-4`).
- `container` vs `container-fluid` vs `container-md`.
- `g-*` (gutters / espaciado entre columnas).
- `offset-*` y `order-*`.

## Cómo va a quedar (boceto ASCII)

```
1) 12 columnas iguales
   [1][1][1][1][1][1][1][1][1][1][1][1]

2) 3 columnas iguales (desktop)         3 columnas apiladas (móvil)
   [    4    ][    4    ][    4    ]    [          12          ]
                                        [          12          ]
                                        [          12          ]

3) Sidebar
   Desktop: [  3  ][        9         ]
   Móvil:   [          12          ]
            [          12          ]

4) Asimétrico
   Desktop: [    4    ][        8         ]
   Tablet:  [    6    ][    6    ]
   Móvil:   [          12          ]
            [          12          ]
```

---

## Paso 1 — Cargar Bootstrap (CDN)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid</title>
    <!-- CSS de Bootstrap 5.3 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- contenido -->

    <!-- JS de Bootstrap (solo si usas componentes interactivos: modal, dropdown, carousel...) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### CDN vs descarga vs npm

| Forma | Cuándo |
|-------|--------|
| **CDN** (link a jsdelivr) | Proyectos rápidos, prácticas, exámenes. Lo más simple. |
| **Descarga local** (`bootstrap.min.css` en tu carpeta) | Sin conexión / control de versión exacta. |
| **npm** (`npm install bootstrap`) | Proyectos con build system (webpack, vite, etc.). |

🔥 Para el examen: **CDN**. Una línea y listo.

🔥 **No olvides la versión**: pon la versión específica (`5.3.0`), no `@latest` (podría romperte el código si Bootstrap saca una versión nueva).

## Paso 2 — La regla de oro: container > row > col

Toda la grid de Bootstrap sigue siempre esta estructura:

```html
<div class="container">         <!-- ancho controlado -->
    <div class="row">           <!-- fila -->
        <div class="col">       <!-- columna -->
            contenido
        </div>
    </div>
</div>
```

### Por qué cada uno

| Elemento | Para qué |
|----------|----------|
| `.container` | Padre con ancho máximo controlado y márgenes laterales automáticos. |
| `.container-fluid` | Igual pero ocupa siempre el 100 % del ancho. |
| `.row` | Crea una fila. Internamente es `display: flex` con `flex-wrap: wrap`. |
| `.col-*` | Columna dentro de una row. La row entera son 12 unidades. |

⚠️ **No anides cols sin pasar por un row nuevo**. Si quieres "una col dentro de una col", el flujo es: `col > row > col`.

## Paso 3 — Layout 1: 12 columnas iguales

```html
<div class="container">
    <h2>1) 12 columnas iguales</h2>
    <div class="row">
        <div class="col-1 bg-primary text-white border">1</div>
        <div class="col-1 bg-primary text-white border">2</div>
        <div class="col-1 bg-primary text-white border">3</div>
        <div class="col-1 bg-primary text-white border">4</div>
        <div class="col-1 bg-primary text-white border">5</div>
        <div class="col-1 bg-primary text-white border">6</div>
        <div class="col-1 bg-primary text-white border">7</div>
        <div class="col-1 bg-primary text-white border">8</div>
        <div class="col-1 bg-primary text-white border">9</div>
        <div class="col-1 bg-primary text-white border">10</div>
        <div class="col-1 bg-primary text-white border">11</div>
        <div class="col-1 bg-primary text-white border">12</div>
    </div>
</div>
```

### Explicación

- `col-1` = 1 unidad de 12 = 8.33% del ancho.
- Las clases `bg-primary`, `text-white`, `border` son **utilidades** de Bootstrap (no es CSS propio, las trae el framework).

🔥 **Suma siempre 12**: 12 × `col-1` = 12. Si te pasas, el sobrante salta a la siguiente fila.

## Paso 4 — Layout 2: 3 columnas iguales con responsive

```html
<div class="container mt-4">
    <h2>2) 3 columnas iguales (responsive)</h2>
    <div class="row">
        <div class="col-12 col-md-4 bg-success text-white p-3 border">A</div>
        <div class="col-12 col-md-4 bg-success text-white p-3 border">B</div>
        <div class="col-12 col-md-4 bg-success text-white p-3 border">C</div>
    </div>
</div>
```

### Las clases `col-12 col-md-4` explicadas

| Clase | Significa |
|-------|-----------|
| `col-12` | En móvil (sin breakpoint), ocupa 12 unidades = ancho completo. |
| `col-md-4` | A partir de tablet (`md` = ≥ 768px), ocupa 4 unidades = 33% del ancho. |

🔥 **Mobile-first**: Bootstrap es mobile-first. `col-md-4` significa "**a partir de** medium". En pantallas más pequeñas, aplica lo que diga `col-*` sin breakpoint (o `col-12` por defecto).

### Tabla de breakpoints de Bootstrap 5

| Sufijo | min-width | Dispositivo |
|--------|-----------|-------------|
| (sin sufijo) | 0px | Móvil portrait |
| `sm` | ≥ 576px | Móvil landscape |
| `md` | ≥ 768px | Tablet portrait |
| `lg` | ≥ 992px | Desktop pequeño |
| `xl` | ≥ 1200px | Desktop grande |
| `xxl` | ≥ 1400px | Pantalla XL |

## Paso 5 — Layout 3: Sidebar + contenido

```html
<div class="container mt-4">
    <h2>3) Sidebar</h2>
    <div class="row">
        <aside class="col-12 col-lg-3 bg-warning p-3">
            <h4>Sidebar</h4>
            <ul>
                <li>Enlace 1</li>
                <li>Enlace 2</li>
                <li>Enlace 3</li>
            </ul>
        </aside>

        <main class="col-12 col-lg-9 bg-light p-3">
            <h4>Contenido principal</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </main>
    </div>
</div>
```

### Por qué `col-lg-3 col-lg-9`

- En móvil: ambos `col-12` → apilados.
- A partir de desktop pequeño (`lg`, 992px): sidebar 3/12 = 25%, main 9/12 = 75%.
- 3 + 9 = 12 ✅.

## Paso 6 — Layout 4: Asimétrico multibreakpoint

```html
<div class="container mt-4">
    <h2>4) Asimétrico</h2>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 bg-info p-3 border">Bloque A</div>
        <div class="col-12 col-md-6 col-lg-8 bg-info p-3 border">Bloque B</div>
    </div>
</div>
```

Aquí hay TRES estados:

| Pantalla | Bloque A | Bloque B |
|----------|----------|----------|
| Móvil | 12 (toda la fila) | 12 (toda la fila) |
| Tablet (md) | 6 (mitad) | 6 (mitad) |
| Desktop (lg) | 4 (33%) | 8 (66%) |

🔥 **Trampa**: `col-md-6 + col-lg-8` ≠ `col-md-6 + col-md-8`. En tablet sigues teniendo 6+6 porque `col-md-6` aplica desde `md` hacia arriba HASTA que sea sobrescrito por un breakpoint mayor (en este caso `col-lg-8` para el segundo bloque). En tablet (md), el segundo bloque tiene `col-md-6` (no se ha sobrescrito todavía).

## Paso 7 — Gutters (`g-*`) y offset

### Gutters: el espacio entre columnas

```html
<div class="row g-0">   <!-- sin espacio -->
<div class="row g-3">   <!-- espacio mediano (16px) -->
<div class="row g-5">   <!-- espacio grande (48px) -->

<div class="row gx-3">  <!-- solo horizontal -->
<div class="row gy-3">  <!-- solo vertical -->
```

### Offset: dejar columnas en blanco

```html
<div class="row">
    <div class="col-4 bg-danger">4</div>
    <div class="col-4 offset-4 bg-danger">4 (empieza en col 9)</div>
</div>
```

Útil cuando quieres centrar una columna:

```html
<div class="col-md-6 offset-md-3">centrada (6 unidades, dejando 3 a cada lado)</div>
```

### Order: cambiar el orden visual

```html
<div class="row">
    <div class="col order-2">Segundo visualmente</div>
    <div class="col order-1">Primero visualmente</div>
</div>
```

🔥 Si lo combinas con breakpoints (`order-md-1`), puedes reordenar solo en desktop sin tocar el HTML.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| Olvidar `.container` o `.row` | El padding/margin se rompe, las cols se salen | SIEMPRE `container > row > col`. |
| `col-*` sin `row` | Las columnas no tienen el padding negativo necesario | Mete las cols en `<div class="row">`. |
| Sumar columnas > 12 | El sobrante salta a la siguiente fila | Suma exactamente 12 si quieres una fila. |
| `col-md-6` y esperar móvil | En móvil no tiene nada → ocupa el ancho disponible | Combina `col-12 col-md-6`. |
| `container-fluid` cuando querías `container` | Tu contenido va de borde a borde | Usa `container` para anchura limitada. |
| Olvidar `<meta viewport>` | Bootstrap no es responsive sin ella | SIEMPRE en `<head>`. |
| Cargar JS sin usar componentes interactivos | Peso extra inútil | Si no usas modal/dropdown/carousel, no cargues el JS. |
| Mezclar Bootstrap con CSS propio que pelea | `!important` battles | Aprende qué utilidades trae Bootstrap antes de escribir CSS. |
| Anidar `row` dentro de otra `row` | Padding se rompe | `row > col > row > col` (col padre, luego row hija). |
| Confundir `col-md-4` con `col-4` | Uno es responsive, otro siempre 4 | `col-4` siempre vale 4, `col-md-4` solo desde md. |
| `col-lg-12` y `col` en la misma fila | Mezcla ancho fijo con auto | Decide uno u otro. |
| Usar `col-auto` con contenido grande | Se ajusta al contenido y rompe el layout | Usa `col-*` numéricos para tamaños fijos. |

## Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid — Demos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">

    <!-- ============= 1) 12 columnas iguales ============= -->
    <div class="container mb-5">
        <h2>1) 12 columnas iguales (col-1)</h2>
        <div class="row text-white text-center">
            <div class="col-1 bg-primary border border-white p-2">1</div>
            <div class="col-1 bg-primary border border-white p-2">2</div>
            <div class="col-1 bg-primary border border-white p-2">3</div>
            <div class="col-1 bg-primary border border-white p-2">4</div>
            <div class="col-1 bg-primary border border-white p-2">5</div>
            <div class="col-1 bg-primary border border-white p-2">6</div>
            <div class="col-1 bg-primary border border-white p-2">7</div>
            <div class="col-1 bg-primary border border-white p-2">8</div>
            <div class="col-1 bg-primary border border-white p-2">9</div>
            <div class="col-1 bg-primary border border-white p-2">10</div>
            <div class="col-1 bg-primary border border-white p-2">11</div>
            <div class="col-1 bg-primary border border-white p-2">12</div>
        </div>
    </div>

    <!-- ============= 2) 3 columnas iguales responsive ============= -->
    <div class="container mb-5">
        <h2>2) 3 columnas iguales (responsive)</h2>
        <p class="text-muted">Móvil: apiladas. Tablet+: 3 columnas.</p>
        <div class="row g-3 text-white text-center">
            <div class="col-12 col-md-4">
                <div class="bg-success p-4">Columna A</div>
            </div>
            <div class="col-12 col-md-4">
                <div class="bg-success p-4">Columna B</div>
            </div>
            <div class="col-12 col-md-4">
                <div class="bg-success p-4">Columna C</div>
            </div>
        </div>
    </div>

    <!-- ============= 3) Sidebar + contenido ============= -->
    <div class="container mb-5">
        <h2>3) Sidebar + main</h2>
        <p class="text-muted">Móvil: apilados. Desktop (lg): 3/9.</p>
        <div class="row g-3">
            <aside class="col-12 col-lg-3">
                <div class="bg-warning p-3">
                    <h5>Sidebar</h5>
                    <ul class="mb-0">
                        <li>Enlace 1</li>
                        <li>Enlace 2</li>
                    </ul>
                </div>
            </aside>
            <main class="col-12 col-lg-9">
                <div class="bg-white p-3 border">
                    <h5>Contenido principal</h5>
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </main>
        </div>
    </div>

    <!-- ============= 4) Asimétrico multibreakpoint ============= -->
    <div class="container mb-5">
        <h2>4) Asimétrico</h2>
        <p class="text-muted">Móvil: 12-12. Tablet: 6-6. Desktop: 4-8.</p>
        <div class="row g-3 text-white text-center">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="bg-info p-4">A</div>
            </div>
            <div class="col-12 col-md-6 col-lg-8">
                <div class="bg-info p-4">B</div>
            </div>
        </div>
    </div>

    <!-- ============= 5) BONUS: offset ============= -->
    <div class="container mb-5">
        <h2>5) Bonus: offset (centrado)</h2>
        <div class="row">
            <div class="col-12 col-md-6 offset-md-3 bg-secondary text-white p-4 text-center">
                Columna centrada (6 unidades, offset 3)
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Cómo verificar responsive

1. Abre `index.html`.
2. **F12** → modo móvil (Ctrl + Shift + M).
3. Anchos a probar:
   - 360px: layout 2 apilado, sidebar arriba, asimétrico apilado.
   - 768px (md): layout 2 en 3 columnas, asimétrico 6-6.
   - 1200px (xl): sidebar 3-9, asimétrico 4-8.
4. **Inspecciona** un `col-md-4`: en DevTools verás el `width: 33.33%` calculado solo si la pantalla es ≥ 768px.

## Alternativas peores

### 1) Escribir tu CSS en vez de usar utilidades

```html
<!-- ❌ -->
<div class="row">
    <div class="col-4" style="background: green; color: white; padding: 20px;">...</div>
</div>
```

```html
<!-- ✅ usa utilidades Bootstrap -->
<div class="col-4 bg-success text-white p-3">...</div>
```

Las utilidades (`bg-*`, `text-*`, `p-*`, `m-*`) están ya pensadas para el sistema.

### 2) Olvidar el `<meta viewport>`

Sin él, en móvil tu Bootstrap se ve como desktop. Las clases `col-md-*` no aplican porque el navegador "se cree" un ancho de 980px en desktop.

### 3) No combinar breakpoints

```html
<!-- ❌ en móvil queda con 4 unidades = solo 33% del ancho -->
<div class="col-md-4">contenido</div>
```

En móvil esto deja una columna estrecha (Bootstrap entiende `col-md-4` como "desde md" pero en móvil no le has dicho nada → toma `col` por defecto, que es "ocupa lo disponible" — está bien, pero **mejor explícito**: `col-12 col-md-4`).

### 4) Sumar > 12

```html
<div class="row">
    <div class="col-6">A</div>
    <div class="col-6">B</div>
    <div class="col-6">C</div>   <!-- ❌ esta salta a la siguiente fila -->
</div>
```

Si quieres 3 columnas iguales, son `col-4` cada una, no `col-6`.

### 5) Anidar rows mal

```html
<!-- ❌ row dentro de row sin pasar por col -->
<div class="row">
    <div class="row">...</div>
</div>
```

```html
<!-- ✅ -->
<div class="row">
    <div class="col-6">
        <div class="row">
            <div class="col-6">A</div>
            <div class="col-6">B</div>
        </div>
    </div>
</div>
```

### 6) Usar `<table>` cuando hay grid

Bootstrap tiene grid. Las tablas son para datos.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Las columnas no se ven | Falta `.row` envolviendo | Añade `<div class="row">`. |
| El layout no responde | Falta `<meta viewport>` | Ponla en `<head>`. |
| Sale scroll horizontal | Bootstrap usa padding negativo en `.row`; si lo metes fuera de `.container`, se salen 12px por cada lado | Mete row dentro de container. |
| `col-md-4` en móvil ocupa 4 unidades sospechosas | Es lo "por defecto" pero confuso | Pon `col-12 col-md-4` explícito. |
| Mis estilos sobre Bootstrap no aplican | Cargaste Bootstrap DESPUÉS de tu CSS | Tu CSS va después de Bootstrap. |
| `text-center` no centra el bloque | Centra el TEXTO dentro, no el bloque | Para bloque: `mx-auto` y `display: block`. |
| El padding entre filas no aparece | Falta `g-*` o `gap-*` | Añade `g-3` al `<div class="row">`. |
| `bg-primary` no es azul que yo quería | Es el azul por defecto de Bootstrap (#0d6efd) | Personaliza con CSS propio o variables Sass. |

## Lo que has aprendido

- Cargar Bootstrap por CDN.
- La regla `.container > .row > .col-*` (sagrada).
- Sistema de 12 columnas: `col-1` al `col-12`.
- Breakpoints: `sm` (576), `md` (768), `lg` (992), `xl` (1200), `xxl` (1400).
- Mobile-first: `col-md-4` aplica desde `md` para arriba.
- Combinar breakpoints: `col-12 col-md-6 col-lg-4`.
- `container` vs `container-fluid` vs `container-md`.
- `g-*` para gutters (`g-0`, `g-3`, `gx-3`, `gy-3`).
- `offset-*` para huecos.
- `order-*` para reordenar visualmente sin cambiar el HTML.
- Utilidades comunes: `bg-*`, `text-*`, `p-*`, `m-*`, `border`.
