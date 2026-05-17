# Ejercicio 2 · Página de producto con Bootstrap

> 📕 Origen: pregunta 2 del simulacro de Diseño de Interfaces.
> ⭐ Valor: 3,5 puntos.
> ⏱️ Tiempo: 30-40 min.
> 🗂️ Material: `Material/Interfaces/ej2/` tiene `ayuda2.html` (esqueleto), `sol2.html` (solución) y `auriculares.jpg`.

## Enunciado original

Construir una página de producto de "Auriculares Supreme" usando **Bootstrap** lo más posible. Estructura:

1. Encabezado con título "Auriculares Supreme" + subtítulo descriptivo.
2. Sección producto: 2 columnas (imagen + información) con precio, descripción y 2 botones (Comprar / Más info).
3. Sección "Características destacadas": 3 cards con icono emoji, título y descripción.
4. Footer con copyright.

Te dan el esqueleto HTML sin clases en `ayuda2.html`.

---

## ¿Qué vas a aprender?

- Sistema de **rejilla Bootstrap** (12 columnas con breakpoints).
- Clases de **espaciado** (`mt-`, `mb-`, `px-`, `g-`...).
- Clases de **flex** (`d-flex`, `justify-content-`, `align-items-`).
- Componente **card**.
- Botones (`btn-primary`, `btn-outline-primary`, `btn-lg`).
- Tipografía Bootstrap (`display-5`, `lead`, `fw-bold`).
- Imágenes responsive (`img-fluid`).

## Cómo va a quedar (boceto)

```
═══════════════════════════════════════════════════════════════
                      Auriculares Supreme
        Experiencia de sonido inigualable con cancelación...
───────────────────────────────────────────────────────────────
                                                                
   ┌─────────┐    Auriculares Inalámbricos                     
   │         │    $299.99                                      
   │  📸    │    Disfruta de 30 horas de batería, sonido...  
   │         │    Conectividad Bluetooth 5.0 y...              
   │         │                                                  
   └─────────┘    [ Comprar ahora ]  [ Más información ]       
                                                                
───────────────────────────────────────────────────────────────
              Características destacadas                       
                                                                
   ┌────────┐  ┌────────┐  ┌────────┐                          
   │  🎧    │  │  🔋    │  │  🎤    │                          
   │ Sonido │  │  30h   │  │ Cancel │                          
   │   HD   │  │batería │  │ ruido  │                          
   │  ...   │  │  ...   │  │  ...   │                          
   └────────┘  └────────┘  └────────┘                          
                                                                
═══════════════════════════════════════════════════════════════
       © 2026 Tienda de Tecnología. Todos los derechos...
```

---

## Paso 1 — Estructura

```
auriculares-bootstrap/
├── index.html
└── auriculares.jpg     (cópialo de Material/Interfaces/ej2/)
```

## Paso 2 — Plantilla base con Bootstrap por CDN

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auriculares Supreme</title>

    <!-- Bootstrap por CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <main class="container mt-4">
        <!-- (encabezado, sección producto, características, footer) -->
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Por qué `<main class="container">`

- `<main>` es semántica para "contenido principal".
- `container` (Bootstrap) le da:
  - Ancho máximo según el breakpoint (1140px en desktop).
  - Centrado automático (margin: 0 auto).
  - Padding horizontal.

`mt-4` = `margin-top` de tamaño 4 (≈ 1.5rem).

## Paso 3 — Encabezado

```html
<!-- Encabezado -->
<div class="mb-5 text-center text-md-start">
    <h1 class="display-5 fw-bold">Auriculares Supreme</h1>
    <p class="text-secondary fs-5">Experiencia de sonido inigualable con cancelación de ruido</p>
</div>
```

### Clases usadas

| Clase | Qué hace |
|-------|----------|
| `mb-5` | `margin-bottom: 5` (≈ 3rem). Separa del bloque siguiente. |
| `text-center` | En móvil, texto centrado. |
| `text-md-start` | A partir de tablet (`md` = 768px+), texto alineado a la izquierda. |
| `display-5` | Tamaño grande para títulos (más que `h1` normal). |
| `fw-bold` | `font-weight: bold`. |
| `text-secondary` | Color gris secundario de Bootstrap. |
| `fs-5` | Tamaño de fuente intermedio. |

### Texto responsive (`text-center text-md-start`)

Patrón muy útil: una clase para móvil y otra para tablet en adelante. La segunda **anula** la primera en su breakpoint.

## Paso 4 — Sección de producto (2 columnas)

```html
<!-- Sección producto: 2 columnas -->
<div class="row g-4 mb-5 align-items-center">

    <!-- Columna imagen (5/12 en tablet, 4/12 en desktop) -->
    <div class="col-12 col-md-5 col-lg-4">
        <img src="auriculares.jpg"
             alt="Auriculares Supreme"
             class="img-fluid rounded-3 shadow">
    </div>

    <!-- Columna información (7/12 en tablet, 8/12 en desktop) -->
    <div class="col-12 col-md-7 col-lg-8">
        <h2 class="h1 mb-3">Auriculares Inalámbricos</h2>
        <div class="display-6 text-primary fw-bold mb-3">$299.99</div>
        <p class="text-secondary mb-4 lead">
            Disfruta de 30 horas de batería, sonido de alta fidelidad y comodidad
            durante todo el día. Conectividad Bluetooth 5.0 y compatibilidad con
            asistentes de voz.
        </p>

        <!-- Botones -->
        <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-primary btn-lg shadow">Comprar ahora</button>
            <button class="btn btn-outline-primary btn-lg">Más información</button>
        </div>
    </div>
</div>
```

### Sistema de rejilla Bootstrap

| Clase | Qué hace |
|-------|----------|
| `row` | Fila del grid. Por defecto sus hijos son flex y suman 12 unidades. |
| `g-4` | Gap entre columnas y filas (tamaño 4). |
| `align-items-center` | Centra verticalmente el contenido de las columnas. |
| `col-12 col-md-5 col-lg-4` | En móvil (xs) ocupa 12 (todo), en tablet (md) 5/12, en desktop (lg) 4/12. |

#### Cómo entender `col-12 col-md-5 col-lg-4`

Las columnas suman siempre 12 por fila. La columna de imagen ocupa:

- **Móvil** (`col-12`): 12 de 12 = todo el ancho. La de info queda debajo.
- **Tablet** (`col-md-5`): 5 de 12. La de info (`col-md-7`) queda al lado.
- **Desktop** (`col-lg-4`): 4 de 12. La de info (`col-lg-8`) más ancha.

> Móvil = una columna apilada. Tablet/Desktop = dos columnas.

### Imagen responsive

```html
<img src="auriculares.jpg" alt="..." class="img-fluid rounded-3 shadow">
```

| Clase | Qué hace |
|-------|----------|
| `img-fluid` | `max-width: 100%; height: auto;`. La imagen NO se sale del contenedor. |
| `rounded-3` | Bordes redondeados (escala 0-5). |
| `shadow` | Sombra estándar. |

### Tipografía

| Clase | Equivalente CSS |
|-------|-----------------|
| `h1` (como clase, no etiqueta) | Aplica el tamaño de h1 sin ser h1. |
| `display-6` | Aún más grande que h1 normal. Para el precio. |
| `lead` | `font-size: 1.25rem; font-weight: 300`. Para párrafos destacados. |
| `text-primary` | Azul Bootstrap. |

### Grupo de botones con flex

```html
<div class="d-flex gap-2 flex-wrap">
    <button class="btn btn-primary btn-lg shadow">Comprar ahora</button>
    <button class="btn btn-outline-primary btn-lg">Más información</button>
</div>
```

| Clase | Qué hace |
|-------|----------|
| `d-flex` | `display: flex`. Los botones van en horizontal. |
| `gap-2` | Espacio entre botones (tamaño 2). |
| `flex-wrap` | Si no caben, saltan a la siguiente línea (importante en móvil). |
| `btn btn-primary` | Botón azul sólido. |
| `btn-outline-primary` | Mismo color, pero borde en vez de relleno. |
| `btn-lg` | Tamaño grande. |
| `shadow` | Sombra. |

## Paso 5 — Sección de características (3 cards)

```html
<!-- Sección características -->
<h3 class="text-center mb-4">Características destacadas</h3>

<div class="row g-4 mb-5">

    <!-- Card 1 -->
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
                <div class="display-1 mb-3">🎧</div>
                <h5 class="card-title">Sonido HD</h5>
                <p class="card-text text-secondary">Audio de alta definición con graves profundos</p>
            </div>
        </div>
    </div>

    <!-- Card 2 -->
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
                <div class="display-1 mb-3">🔋</div>
                <h5 class="card-title">30h batería</h5>
                <p class="card-text text-secondary">Batería de larga duración con carga rápida</p>
            </div>
        </div>
    </div>

    <!-- Card 3 -->
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
                <div class="display-1 mb-3">🎤</div>
                <h5 class="card-title">Cancelación ruido</h5>
                <p class="card-text text-secondary">Aislamiento activo del ruido ambiental</p>
            </div>
        </div>
    </div>
</div>
```

### Card de Bootstrap

```html
<div class="card">
    <img src="..." class="card-img-top">       (opcional)
    <div class="card-body">
        <h5 class="card-title">...</h5>
        <p class="card-text">...</p>
        <a href="#" class="btn btn-primary">...</a>
    </div>
</div>
```

| Clase | Qué hace |
|-------|----------|
| `card` | Caja con borde y fondo blanco. |
| `card-body` | Padding interno. |
| `card-title` | Estilo de título dentro de la card. |
| `card-text` | Estilo de párrafo dentro de la card. |
| `h-100` | `height: 100%`. Hace que todas las cards de la fila tengan la misma altura. |
| `shadow-sm` | Sombra suave. |

### Breakpoints en las cards

`col-12 col-md-6 col-lg-4` significa:

- Móvil: 1 card por fila (12/12).
- Tablet: 2 por fila (6/12 + 6/12).
- Desktop: 3 por fila (4/12 + 4/12 + 4/12).

### Icono como emoji

```html
<div class="display-1 mb-3">🎧</div>
```

`display-1` hace el emoji enorme (≈ 5rem). Es el truco rápido para no tener que cargar una librería de iconos.

## Paso 6 — Footer

```html
<!-- Footer -->
<hr class="mt-5">
<div class="text-center text-secondary small py-4">
    <p class="mb-0">&copy; 2026 Tienda de Tecnología. Todos los derechos reservados.</p>
</div>
```

| Clase | Qué hace |
|-------|----------|
| `mt-5` | Margin-top grande. |
| `text-center` | Texto centrado. |
| `text-secondary` | Gris secundario. |
| `small` | `font-size` reducido. |
| `py-4` | Padding vertical (top+bottom). |
| `mb-0` | Margin-bottom 0 (anula el margen por defecto del `<p>`). |

`&copy;` es el carácter ©. Se puede poner directamente, pero es buena práctica usar la entidad HTML.

## Paso 7 — Código HTML completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auriculares Supreme</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <main class="container mt-4">

        <!-- Encabezado -->
        <div class="mb-5 text-center text-md-start">
            <h1 class="display-5 fw-bold">Auriculares Supreme</h1>
            <p class="text-secondary fs-5">Experiencia de sonido inigualable con cancelación de ruido</p>
        </div>

        <!-- Producto -->
        <div class="row g-4 mb-5 align-items-center">
            <div class="col-12 col-md-5 col-lg-4">
                <img src="auriculares.jpg" alt="Auriculares Supreme"
                     class="img-fluid rounded-3 shadow">
            </div>
            <div class="col-12 col-md-7 col-lg-8">
                <h2 class="h1 mb-3">Auriculares Inalámbricos</h2>
                <div class="display-6 text-primary fw-bold mb-3">$299.99</div>
                <p class="text-secondary mb-4 lead">
                    Disfruta de 30 horas de batería, sonido de alta fidelidad y comodidad
                    durante todo el día. Conectividad Bluetooth 5.0 y compatibilidad con
                    asistentes de voz.
                </p>
                <div class="d-flex gap-2 flex-wrap">
                    <button class="btn btn-primary btn-lg shadow">Comprar ahora</button>
                    <button class="btn btn-outline-primary btn-lg">Más información</button>
                </div>
            </div>
        </div>

        <!-- Características -->
        <h3 class="text-center mb-4">Características destacadas</h3>
        <div class="row g-4 mb-5">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <div class="display-1 mb-3">🎧</div>
                        <h5 class="card-title">Sonido HD</h5>
                        <p class="card-text text-secondary">Audio de alta definición con graves profundos</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <div class="display-1 mb-3">🔋</div>
                        <h5 class="card-title">30h batería</h5>
                        <p class="card-text text-secondary">Batería de larga duración con carga rápida</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <div class="display-1 mb-3">🎤</div>
                        <h5 class="card-title">Cancelación ruido</h5>
                        <p class="card-text text-secondary">Aislamiento activo del ruido ambiental</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <hr class="mt-5">
        <div class="text-center text-secondary small py-4">
            <p class="mb-0">&copy; 2026 Tienda de Tecnología. Todos los derechos reservados.</p>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Paso 8 — Probar

1. Doble clic en `index.html` (o Live Server).
2. **Desktop**: imagen + info al lado, 3 cards en fila.
3. **F12 + móvil**: imagen arriba, info debajo, cards apiladas.
4. **Tablet** (entre medio): 2 cards por fila.

## Paso 9 — Entrega

```
Apellidos_Nombre_interfaces/
└── Pregunta2_Bootstrap/
    ├── index.html
    ├── auriculares.jpg
    └── captura.png      (mejor 2: desktop + móvil)
```

## Alternativas peores

### 1) CSS personalizado en lugar de Bootstrap

```html
<!-- ❌ el enunciado pide Bootstrap -->
<div style="display: grid; grid-template-columns: 1fr 2fr">
```

El enunciado dice "**con Bootstrap todo lo posible**". Usar CSS propio resta puntos.

### 2) Olvidar `col-12` para móvil

```html
<!-- ❌ -->
<div class="col-md-5 col-lg-4">
```

En móvil no tiene clase explícita; Bootstrap heredará `col-md-5` que solo aplica a tablet+. En móvil cabrían dos columnas, lo que se rompe en pantallas estrechas. **Siempre empezar con `col-12`**.

### 3) Imágenes sin `img-fluid`

```html
<!-- ❌ se sale en móvil -->
<img src="auriculares.jpg">
```

Sin `img-fluid` la imagen mantiene su tamaño natural y desborda el contenedor en móvil.

### 4) `class="card"` sin `card-body`

```html
<!-- ❌ sin padding interno -->
<div class="card">
    <h5>Título</h5>
</div>
```

Sin `card-body` el contenido se pega al borde. Siempre `<div class="card"><div class="card-body">...</div></div>`.

### 5) `h-100` ausente cuando hay varias cards en fila

```html
<!-- ❌ alturas diferentes si los textos varían -->
<div class="card shadow-sm">
```

Si una card tiene texto largo y otra corto, salen alturas distintas (feo). `h-100` (en la card, no en `col`) las iguala.

### 6) Usar margin en lugar de `gap`

```html
<!-- ❌ margins en cada hijo -->
<div class="row">
    <div class="col" style="margin-right: 20px">...</div>
    ...
</div>
```

`g-4` en el row es Bootstrap idiomático.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Las columnas no se acomodan al móvil | Falta `col-12` (clase móvil) | Añádela. |
| La imagen se sale del contenedor | Falta `img-fluid` | Añádela. |
| Sale Bootstrap genérico, sin colores | El CDN no carga | Comprueba la URL en el `<link>`. |
| Sin separación entre botones | Falta `gap-2` en el contenedor flex | Añádela. |
| Los emojis se ven pequeños | No usaste `display-1` | Cámbialo. |
| Cards de alturas distintas | Falta `h-100` | Añádela. |

## Resumen visual

```
<main class="container mt-4">

    Encabezado (mb-5 text-center text-md-start)
        ├── h1.display-5.fw-bold
        └── p.text-secondary.fs-5

    Producto
    <div class="row g-4 mb-5 align-items-center">
        │
        ├── <div class="col-12 col-md-5 col-lg-4">
        │       └── img.img-fluid.rounded-3.shadow
        │
        └── <div class="col-12 col-md-7 col-lg-8">
                ├── h2.h1
                ├── div.display-6.text-primary.fw-bold  (precio)
                ├── p.lead.text-secondary
                └── <div class="d-flex gap-2 flex-wrap">
                        ├── button.btn.btn-primary.btn-lg
                        └── button.btn.btn-outline-primary.btn-lg

    Características
    <h3 class="text-center mb-4">
    <div class="row g-4 mb-5">
        │
        └── <div class="col-12 col-md-6 col-lg-4">  ×3
                └── <div class="card h-100 shadow-sm">
                        └── <div class="card-body text-center">
                                ├── div.display-1 (emoji)
                                ├── h5.card-title
                                └── p.card-text.text-secondary

    Footer (hr + text-center small)
</main>
```

## Lo que has aprendido

- ✅ Sistema de rejilla Bootstrap (`row`, `col-X-N`).
- ✅ Breakpoints: `md` (768px), `lg` (992px).
- ✅ Espaciado: `m`/`p` + `t`/`b`/`x`/`y` + tamaño (0-5).
- ✅ Flexbox utility (`d-flex`, `gap-N`, `flex-wrap`, `align-items-center`).
- ✅ Tipografía (`display-5`, `lead`, `fw-bold`, `text-secondary`).
- ✅ Componente `card` con `card-body`, `card-title`, `card-text`, `h-100`.
- ✅ Botones (`btn-primary`, `btn-outline-primary`, `btn-lg`).
- ✅ `img-fluid` para imágenes responsive.

Sigue con el [Ejercicio 3: Formulario con Flexbox](03-flexbox-formulario.md).
