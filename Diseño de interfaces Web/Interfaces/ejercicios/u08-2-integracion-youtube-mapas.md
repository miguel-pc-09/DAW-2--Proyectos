# Ejercicio U8.2 — Integración de YouTube, Google Maps y iframes responsive

> 📚 Unidad 8 · Multimedia: audio, vídeo e integración
> ⏱️ Tiempo: 35-45 min
> 🟡 Dificultad: intermedia
> 🎯 Objetivo: incrustar contenido de terceros (YouTube, Maps, etc.) con `<iframe>` de manera responsive y segura.

## Enunciado

Página "Contacto y ubicación" con:

1. **Vídeo de YouTube** corporativo (incrustado, responsive 16:9).
2. **Mapa de Google Maps** mostrando la oficina.
3. **Spotify embed** con podcast.
4. **Galería de tweets** (Twitter/X embed) — opcional.
5. Todos los iframes deben ser responsive (no pixel-fixed).
6. Atributos de seguridad (`sandbox`, `loading="lazy"`, `referrerpolicy`).

---

## ¿Qué vas a aprender?

- El elemento `<iframe>` y sus atributos.
- Cómo incrustar YouTube con/sin controles, autoplay, tiempo de inicio.
- Cómo conseguir el embed code de servicios populares.
- Hacer iframes **responsive** con el "padding-bottom trick" o `aspect-ratio`.
- Atributos de seguridad: `sandbox`, `referrerpolicy`, `allow`, `loading="lazy"`.
- Privacidad: `youtube-nocookie.com` vs `youtube.com`.
- Cookies de terceros, GDPR y "click to load" patterns.

## Cómo va a quedar (boceto ASCII)

```
┌──────────────────────────────────────────────────────────────┐
│                    Contacto y ubicación                       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  📺 Nuestro vídeo corporativo                              │
│  ┌────────────────────────────────────┐                     │
│  │                                    │                     │
│  │      [YouTube embed 16:9]          │                     │
│  │            ▶                       │                     │
│  │                                    │                     │
│  └────────────────────────────────────┘                     │
│                                                              │
│  🗺️ Ven a vernos                                          │
│  ┌────────────────────────────────────┐                     │
│  │                                    │                     │
│  │       [Google Maps embed]          │                     │
│  │                                    │                     │
│  └────────────────────────────────────┘                     │
│                                                              │
│  🎙️ Nuestro podcast                                       │
│  ┌────────────────────────────────────┐                     │
│  │       [Spotify embed]              │                     │
│  └────────────────────────────────────┘                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Paso 1 — Anatomía de un `<iframe>`

```html
<iframe src="https://ejemplo.com/contenido"
        width="560" height="315"
        title="Descripción del contenido"
        frameborder="0"
        allow="..."
        sandbox="..."
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
```

| Atributo | Para qué |
|----------|----------|
| `src` | URL del contenido a incrustar. |
| `width`, `height` | Dimensiones en píxeles (mejor con CSS). |
| `title` | **OBLIGATORIO para accesibilidad** (lector de pantalla). |
| `frameborder` | Antiguo. Hoy se usa CSS `border: none`. |
| `allow` | Permisos: cámara, micro, autoplay, fullscreen... |
| `sandbox` | Restricciones de seguridad (ver más abajo). |
| `loading="lazy"` | Carga diferida. |
| `referrerpolicy` | Qué info de referrer se envía. |
| `allowfullscreen` | Permite pantalla completa. |

### Por qué `title` es obligatorio

Sin `title`, el lector de pantalla solo dice "iframe". Con `title="Vídeo corporativo de la empresa"`, dice eso. Es **WCAG AA**.

## Paso 2 — Cómo obtener el embed code

### YouTube

1. Ve al vídeo en youtube.com.
2. Botón **Compartir** → **Incorporar**.
3. Copias el código `<iframe>` que genera.

```html
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Título del vídeo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
```

🔥 Diferencia clave: la URL es `youtube.com/embed/ID`, NO `youtube.com/watch?v=ID`. Si pones la URL normal, **NO funciona** dentro del iframe.

### Parámetros útiles del embed de YouTube

```
https://www.youtube.com/embed/VIDEO_ID?param1=value&param2=value
```

| Parámetro | Para qué |
|-----------|----------|
| `autoplay=1` | Auto-play (requiere mute). |
| `mute=1` | Silenciado. |
| `controls=0` | Sin controles. |
| `loop=1&playlist=VIDEO_ID` | Bucle (el playlist debe ser el mismo ID). |
| `start=30` | Empieza en el segundo 30. |
| `end=120` | Termina en el segundo 120. |
| `modestbranding=1` | Quita el logo de YouTube. |
| `rel=0` | No muestra vídeos relacionados al final (solo del mismo canal). |
| `cc_load_policy=1` | Activa subtítulos por defecto. |
| `playsinline=1` | iOS no entra fullscreen. |

Ejemplo:

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ&modestbranding=1"
        title="Vídeo de fondo"
        allow="autoplay; encrypted-media"></iframe>
```

### Google Maps

1. Ve a maps.google.com → busca la dirección.
2. Botón **Compartir** → **Insertar un mapa** → copia el código.

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037..."
        width="600" height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Mapa de nuestra oficina"></iframe>
```

### Spotify

1. Click derecho en una canción/playlist → **Compartir** → **Copiar código de inserción**.

```html
<iframe src="https://open.spotify.com/embed/episode/EPISODIO_ID?utm_source=generator"
        width="100%" height="232"
        frameBorder="0"
        title="Podcast de Lorem Ipsum"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
```

### Twitter/X

```html
<blockquote class="twitter-tweet">
    <a href="https://twitter.com/user/status/123"></a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js"></script>
```

Twitter usa `<blockquote>` + script, no iframe directo.

## Paso 3 — Iframes responsive (el "trick" del padding)

Por defecto, un `<iframe width="560" height="315">` es pixel-fixed: en móvil se desborda.

### Método antiguo (todavía válido): padding-bottom trick

```html
<div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```

```css
.video-responsive {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;     /* 9/16 = 0.5625 = 56.25% */
    height: 0;
    overflow: hidden;
}

.video-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### Por qué `padding-bottom: 56.25%`

- 16:9 → 9/16 = 0.5625 = 56.25%.
- `padding-bottom` en %% se calcula respecto al **ancho** del padre. Así, si el ancho cambia, el alto cambia proporcionalmente.
- El iframe absoluto rellena el padre.

🔥 Para 4:3 → `padding-bottom: 75%` (3/4). Para 1:1 → 100%. Para 21:9 → 42.86%.

### Método moderno (CSS reciente): `aspect-ratio`

```css
.video-responsive {
    aspect-ratio: 16 / 9;
}
.video-responsive iframe {
    width: 100%;
    height: 100%;
}
```

Mucho más limpio. Compatibilidad: ≥ 2021 (todos los navegadores modernos).

## Paso 4 — Página completa

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto y ubicación</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <main>
        <h1>Contacto y ubicación</h1>

        <!-- Vídeo de YouTube -->
        <section>
            <h2>Conoce nuestra empresa</h2>
            <div class="video-responsive">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0"
                    title="Vídeo corporativo de Acme Inc."
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </div>
        </section>

        <!-- Mapa de Google -->
        <section>
            <h2>Ven a vernos</h2>
            <p>Calle Mayor 12, 28013 Madrid</p>
            <div class="mapa-responsive">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123!2d-3.7038!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422897799d!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                    title="Ubicación de la oficina en Madrid"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    allowfullscreen></iframe>
            </div>
        </section>

        <!-- Spotify -->
        <section>
            <h2>Nuestro podcast</h2>
            <iframe
                src="https://open.spotify.com/embed/show/0Yk3DFcjqK7K3jJlnUEY3T?utm_source=generator"
                width="100%" height="232"
                frameborder="0"
                title="Podcast de Acme Inc."
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        </section>
    </main>
</body>
</html>
```

## Paso 5 — CSS

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    background: #f8f9fa;
    padding: 20px;
}

main {
    max-width: 900px;
    margin: 0 auto;
}

h1 { text-align: center; margin-bottom: 30px; }
h2 { margin-bottom: 15px; }
p { margin-bottom: 10px; color: #6c757d; }

section {
    background: white;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

/* === IFRAME RESPONSIVE (método moderno) === */
.video-responsive,
.mapa-responsive {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 6px;
    overflow: hidden;
}

.mapa-responsive {
    aspect-ratio: 4 / 3;     /* mapas suelen verse mejor en 4:3 */
}

.video-responsive iframe,
.mapa-responsive iframe {
    position: absolute;
    inset: 0;                /* atajo de top: 0; right: 0; bottom: 0; left: 0; */
    width: 100%;
    height: 100%;
    border: 0;
}
```

## Paso 6 — Seguridad: `sandbox` y `allow`

Por defecto, un iframe puede ejecutar scripts, abrir popups, navegar el top, etc. Eso es **peligroso** si incrustas contenido de terceros.

### `sandbox` (lista de permisos)

```html
<iframe src="..." sandbox></iframe>
<!-- sin ningún permiso: máxima seguridad pero quizás no funciona -->

<iframe src="..." sandbox="allow-scripts allow-same-origin"></iframe>
<!-- permite scripts y origen igual, nada más -->
```

| Valor | Permite |
|-------|---------|
| `allow-scripts` | Ejecutar JS. |
| `allow-same-origin` | Acceder a las cookies/storage del dominio padre. |
| `allow-forms` | Enviar formularios. |
| `allow-popups` | Abrir popups (window.open). |
| `allow-top-navigation` | Navegar la ventana padre (peligroso). |
| `allow-modals` | `alert()`, `confirm()`, `prompt()`. |
| `allow-presentation` | API de Presentation. |

🔥 **NO pongas `allow-scripts allow-same-origin` juntos para contenido no confiable** — el iframe podría quitar su propio sandbox.

### `allow` (Permissions Policy)

```html
<iframe allow="autoplay; encrypted-media; fullscreen"></iframe>
```

Controla qué APIs puede usar el iframe (camera, microphone, geolocation, etc.).

### `referrerpolicy`

Qué información de `Referer` se envía al sitio incrustado:

- `no-referrer` — nada.
- `origin` — solo el dominio (sin path).
- `strict-origin-when-cross-origin` — el más usado.

## Paso 7 — Privacidad: youtube-nocookie

```html
<!-- Cookies de YouTube cargadas inmediatamente -->
<iframe src="https://www.youtube.com/embed/ID"></iframe>

<!-- Cookies solo si el usuario pulsa play -->
<iframe src="https://www.youtube-nocookie.com/embed/ID"></iframe>
```

`youtube-nocookie.com` (también llamado YouTube en modo de privacidad mejorada) no instala cookies hasta que el usuario interactúa. Mejor para GDPR.

🔥 Para Europa y privacidad: usa `youtube-nocookie.com`.

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| URL `youtube.com/watch?v=` en iframe | "Vídeo no disponible" | Usa `youtube.com/embed/ID`. |
| Sin `title` en iframe | Falla WCAG | Pon `title="..."`. |
| `width="560" height="315"` fijo | Se desborda en móvil | CSS responsive (aspect-ratio o padding trick). |
| `frameborder="0"` deprecated | Sigue funcionando pero es viejo | Usa CSS `border: 0`. |
| `loading="lazy"` no soportado | OK — se ignora silencioso | Ponlo siempre. |
| Iframe sin `allow="..."` | Vídeo no se reproduce en fullscreen | Pon los permisos necesarios. |
| Mezclar HTTP y HTTPS | "Mixed content" → el navegador bloquea | Todo HTTPS. |
| Cargar 10 iframes pesados | Página lenta | `loading="lazy"` y solo carga los visibles. |
| Olvidar el `playlist=ID` en loop | No hace bucle | `loop=1&playlist=VIDEO_ID`. |
| Subtítulos no se ven en embed | `cc_load_policy` no activado | `&cc_load_policy=1`. |
| Twitter embed bloqueado por adblocker | Usuario no ve nada | Diseña graceful degradation. |
| Iframe sin `sandbox` para contenido de terceros | Riesgo XSS | Si no controlas la fuente, sandbox. |

## Cómo verificar

1. Abre `index.html`.
2. Los iframes cargan en su sitio.
3. **F12 → Network**: con `loading="lazy"`, el iframe inferior no carga hasta hacer scroll.
4. **Cambia ancho** (DevTools mobile) → vídeo y mapa se ajustan, no se desbordan.
5. **Pantalla completa** del vídeo de YouTube (botón en la esquina) → debe funcionar (allowfullscreen).
6. **Inspecciona el iframe** → ves el `<iframe>` pero NO el contenido interno (es un documento aparte, otra "ventana").
7. Si tienes adblocker, prueba a desactivarlo si algún iframe está vacío.

## Alternativas peores

### 1) Subir el vídeo a tu servidor en vez de YouTube

```html
<video src="video-1gb.mp4"></video>
```

Tu servidor no tiene CDN global, no tiene transcoding adaptativo, ni controla los formatos. YouTube hace todo eso gratis.

Cuándo SÍ subir tú: contenido privado, sin anuncios, control total.

### 2) Iframe con dimensiones fijas

```html
<!-- ❌ se desborda en móvil -->
<iframe width="800" height="450" src="..."></iframe>
```

Wrapper responsive siempre.

### 3) `<object>` o `<embed>` para vídeos

```html
<!-- ❌ pensado para Flash, hoy raramente útil -->
<object data="video.mp4" type="video/mp4"></object>
```

Usa `<video>` para vídeos propios, `<iframe>` para terceros.

### 4) Cargar Google Maps API con JS solo para mostrar un punto

```html
<script src="https://maps.googleapis.com/maps/api/js?key=API_KEY"></script>
<div id="map"></div>
<script>
    new google.maps.Map(...);
</script>
```

Si solo necesitas mostrar un mapa estático, usa el embed (`<iframe>`). La API es para mapas interactivos avanzados.

### 5) Iframe sin `loading="lazy"`

Cargas YouTube + Maps + Spotify + Twitter al inicio = ~5 MB y 30 requests. Performance horrible.

### 6) Olvidar el aspect-ratio

```html
<iframe src="..." style="width: 100%; height: 500px"></iframe>
```

En móvil con `height: 500px` el vídeo parece columna alta vacía con el vídeo en el centro. Usa aspect-ratio.

### 7) Confiar en `frameborder="0"`

```html
<iframe frameborder="0"></iframe>
```

Funciona pero está deprecated en HTML5. Mejor `style="border: 0"` o CSS.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| "Vídeo no disponible" en YouTube embed | URL `watch?v=` en vez de `/embed/` | Usa la URL correcta. |
| Fullscreen no funciona | Falta `allowfullscreen` | Añádelo. |
| Iframe responsive pero con barras negras | Aspect-ratio incorrecto | 16:9 = 56.25% padding-bottom. |
| Mapa muestra "Para uso desarrollo solamente" | Sin API key (algunos casos) | Usa el embed simple (no requiere API key). |
| Iframe no carga | Bloqueado por X-Frame-Options del sitio destino | No puedes incrustar — el sitio lo prohíbe. |
| Spotify embed cortado en móvil | Width no responsive | `width: 100%` en CSS. |
| Sandbox demasiado restrictivo | El iframe no funciona | Añade los `allow-*` necesarios. |
| `loading="lazy"` se ignora | Navegador antiguo | Funciona silencioso, no pasa nada. |
| Cookies de YouTube me siguen | Usa `youtube-nocookie.com` | Cambia el dominio. |

## Lo que has aprendido

- Estructura básica de `<iframe>` con atributos.
- Por qué `title` es obligatorio (accesibilidad).
- Cómo obtener embed code de YouTube, Maps, Spotify.
- URL `youtube.com/embed/ID` (NO `watch?v=`).
- Parámetros útiles de YouTube embed (autoplay, mute, controls, loop, start...).
- Iframe responsive con `aspect-ratio` o padding-bottom trick.
- 16:9 → 56.25% / 4:3 → 75% / 1:1 → 100%.
- `loading="lazy"` para carga diferida.
- `sandbox` y permisos (`allow-scripts`, `allow-forms`...).
- `allow` para Permissions Policy.
- `youtube-nocookie.com` para privacidad GDPR.
- Cuándo subir vídeo propio vs incrustar de YouTube.
