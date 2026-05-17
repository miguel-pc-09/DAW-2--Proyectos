# Ejercicio U8.1 — Reproductor de audio y vídeo HTML5

> 📚 Unidad 8 · Multimedia: audio, vídeo e integración
> ⏱️ Tiempo: 25-30 min
> 🟢 Dificultad: básica
> 🎯 Objetivo: incrustar audio y vídeo con `<audio>` y `<video>`, con fallbacks de formato.

## Enunciado

Página con dos reproductores:

1. **Audio**: una canción con controles, varios formatos (mp3, ogg) y fallback.
2. **Vídeo**: un clip con controles, poster (miniatura), subtítulos (`<track>`), y dos formatos (mp4 y webm).

---

## ¿Qué vas a aprender?

- Etiquetas `<audio>` y `<video>` con atributos clave.
- `controls`, `autoplay`, `loop`, `muted`, `preload`, `poster`.
- `<source>` para múltiples formatos.
- `<track>` para subtítulos (formato WebVTT).
- Por qué `autoplay` no funciona sin `muted`.
- Formatos compatibles: mp3 vs ogg, mp4 vs webm.
- Accesibilidad: subtítulos y transcripción.
- CSS para el video (responsive con `width: 100%`).

## Cómo va a quedar (boceto ASCII)

```
+----------------------------------------------------+
|                                                    |
|  🎵 Canción: "Lorem Ipsum"                        |
|  ▶ ━━━━━○━━━━━━━━━━  1:23 / 3:45                  |
|                                                    |
+----------------------------------------------------+
|                                                    |
|  🎬 Vídeo demo:                                   |
|  ┌────────────────────────────┐                    |
|  │                            │                    |
|  │     [reproductor]          │                    |
|  │                            │                    |
|  │       ▶                    │                    |
|  │                            │                    |
|  └────────────────────────────┘                    |
|  ▶ ━━━━━━━━━━━━○━━ 0:45 / 2:30  🔊 [CC] ⛶          |
|                                                    |
+----------------------------------------------------+
```

---

## Paso 1 — Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reproductores HTML5</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <main>
        <h1>Multimedia HTML5</h1>

        <!-- AUDIO -->
        <section>
            <h2>Canción</h2>
            <audio controls preload="metadata">
                <source src="cancion.mp3" type="audio/mpeg">
                <source src="cancion.ogg" type="audio/ogg">
                <p>Tu navegador no soporta audio HTML5.
                   <a href="cancion.mp3">Descargar canción</a>.</p>
            </audio>
        </section>

        <!-- VÍDEO -->
        <section>
            <h2>Vídeo demo</h2>
            <video controls preload="metadata"
                   poster="miniatura.jpg"
                   width="800" height="450">
                <source src="video.webm" type="video/webm">
                <source src="video.mp4" type="video/mp4">
                <track kind="subtitles" src="subs-es.vtt" srclang="es" label="Español" default>
                <track kind="subtitles" src="subs-en.vtt" srclang="en" label="English">
                <p>Tu navegador no soporta vídeo HTML5.
                   <a href="video.mp4">Descargar vídeo</a>.</p>
            </video>
        </section>
    </main>
</body>
</html>
```

## Paso 2 — Atributos de `<audio>` y `<video>`

| Atributo | Qué hace |
|----------|----------|
| `controls` | Muestra los controles nativos (play, pause, volumen, barra de progreso). |
| `autoplay` | Reproduce al cargar (con restricciones — ver más abajo). |
| `loop` | Reproducción en bucle. |
| `muted` | Empieza silenciado. |
| `preload="auto"` / `"metadata"` / `"none"` | Cuánto pre-carga: todo, solo metadatos (duración), nada. |
| `poster="..."` (vídeo) | Miniatura mientras no se reproduce. |
| `width` / `height` (vídeo) | Dimensiones. |
| `playsinline` (vídeo) | iOS NO entra en pantalla completa automáticamente. |

### `preload`

- `auto` — descarga todo de inmediato. Solo si sabes que el usuario va a verlo.
- `metadata` — solo duración y dimensiones. **Es el bueno por defecto**.
- `none` — nada. Solo descarga al pulsar play.

### Reglas del `autoplay` (importante en exámenes)

🔥 Los navegadores **bloquean** `autoplay` si no se cumple **alguna** de estas:

1. El vídeo está **muted** (silenciado).
2. El usuario YA ha interactuado con el sitio.
3. La página está en una lista del usuario (raro).

Conclusión: para autoplay funcional, **siempre `muted`**:

```html
<video autoplay muted loop playsinline>
    <source src="hero.mp4" type="video/mp4">
</video>
```

Esto se usa muchísimo en hero videos de landing pages.

## Paso 3 — Por qué `<source>` con varios formatos

Cada navegador soporta formatos distintos. Lo seguro:

| Formato | Soporte |
|---------|---------|
| **mp3** (audio) | Todos los navegadores modernos. |
| **ogg** (audio) | Firefox, Chrome. **NO Safari**. |
| **mp4** / **H.264** (vídeo) | Todos. |
| **webm** / **VP8/VP9** (vídeo) | Firefox, Chrome. **NO Safari** (viejo). |
| **ogv** / **Theora** (vídeo) | Firefox, Chrome viejo. |

```html
<video controls>
    <source src="video.webm" type="video/webm">    <!-- 1er intento -->
    <source src="video.mp4" type="video/mp4">      <!-- fallback -->
</video>
```

El navegador prueba en orden y usa la primera que entienda. Pon el formato más eficiente primero (webm) y el universal como fallback (mp4).

🔥 **Para examen**: mp3 + mp4 son los formatos universales. ogg + webm son los abiertos. El navegador elige por orden de `<source>`.

## Paso 4 — Subtítulos con `<track>`

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track kind="subtitles" src="subs-es.vtt" srclang="es" label="Español" default>
    <track kind="subtitles" src="subs-en.vtt" srclang="en" label="English">
    <track kind="captions" src="captions.vtt" srclang="es" label="Subtítulos completos">
    <track kind="descriptions" src="descr.vtt" srclang="es" label="Audiodescripción">
</video>
```

| Atributo | Para qué |
|----------|----------|
| `kind="subtitles"` | Traducción del audio. |
| `kind="captions"` | Subtítulos completos (incluye sonidos: "[música]", "[risa]"). Para personas sordas. |
| `kind="descriptions"` | Audiodescripción (descripción de lo visual). Para ciegos. |
| `kind="chapters"` | Marcadores de capítulos. |
| `src="..."` | Archivo .vtt |
| `srclang="es"` | Código de idioma. |
| `label="Español"` | Texto del menú de subtítulos. |
| `default` | Selección por defecto. |

### Formato WebVTT (.vtt)

```
WEBVTT

00:00:00.000 --> 00:00:02.500
Hola, bienvenido al curso.

00:00:03.000 --> 00:00:05.000
Hoy aprenderemos HTML5.

00:00:05.500 --> 00:00:08.000
- ¿Listo? -¡Sí!
```

Características:

- Empieza con `WEBVTT`.
- Cada bloque: marca temporal `inicio --> fin` + texto.
- Tiempo en formato `HH:MM:SS.mmm`.

## Paso 5 — CSS responsive

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: #f8f9fa;
}

main {
    max-width: 900px;
    margin: 0 auto;
}

h1 { margin-bottom: 30px; text-align: center; }
h2 { margin-bottom: 15px; }

section {
    background: white;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

audio {
    width: 100%;
}

video {
    width: 100%;
    height: auto;
    border-radius: 6px;
    background: black;       /* ANTES de cargar, fondo negro */
}
```

### Truco: vídeo responsive

```css
video { width: 100%; height: auto; }
```

Esto mantiene el aspect ratio del vídeo. Si pones `height: auto`, el navegador calcula la altura proporcional.

🔥 Si NO conoces el aspect ratio: `aspect-ratio: 16 / 9` (CSS moderno).

```css
video {
    width: 100%;
    aspect-ratio: 16 / 9;
}
```

## Trampas frecuentes

| Trampa | Qué pasa | Cómo evitarla |
|--------|----------|---------------|
| `autoplay` sin `muted` | Navegador lo bloquea (sin sonido y sin avisar) | Pon `muted`. |
| Vídeo en iOS abre pantalla completa | Comportamiento por defecto | Añade `playsinline`. |
| Solo mp4 (sin webm/ogg) | OK en mayoría, pero pierdes eficiencia y dependes de patentes | Da varios `<source>`. |
| `<video>` sin `width`/`height` | Layout shift al cargar | Pon dimensiones. |
| Vídeo gigante en móvil | Datos del usuario, lentitud | Usa varios bitrates/resoluciones (HLS para serio). |
| Olvidar fallback `<p>` dentro | Si el formato falla, no hay mensaje | Pon contenido entre `<source>` y `</video>`. |
| `controls` falta | El usuario no puede reproducir | Pon `controls` si no lo manejas con JS. |
| Subtítulos no aparecen | El archivo `.vtt` no está bien formateado | Empieza con `WEBVTT`, marcas correctas. |
| `<track>` desde otro dominio sin CORS | Bloqueado por seguridad | Sirve el .vtt del mismo dominio o configura CORS. |
| `poster` muy pesado | Carga inicial lenta | Optimiza (JPG comprimido). |
| Vídeo HD para fondo decorativo | Datos | Usa SD o GIF/webp animado. |
| Subir un vídeo de 200 MB | No es práctico | Comprime con HandBrake o usa YouTube embed (siguiente ejercicio). |

## Código HTML completo

(Ver Paso 1.)

## Subtítulo `.vtt` de ejemplo

`subs-es.vtt`:

```
WEBVTT

00:00:00.000 --> 00:00:03.000
Hola, bienvenido al tutorial.

00:00:04.000 --> 00:00:07.000
Hoy aprenderemos a usar HTML5 multimedia.

00:00:08.000 --> 00:00:12.000
- ¿Estás listo?
- ¡Por supuesto!

00:00:13.000 --> 00:00:15.000
[música de fondo]

00:00:16.000 --> 00:00:20.000
Empezamos con el elemento &lt;audio&gt;.
```

## Cómo verificar

1. Abre `index.html`. Ves los reproductores nativos.
2. **Pulsa play en el audio** → debe sonar.
3. **Pulsa play en el vídeo** → debe verse.
4. Activa los **subtítulos** (botón CC en el reproductor) → aparece el texto cronometrado.
5. **F12 → Network**: solo se carga el formato compatible (no descarga los dos).
6. Si tienes Safari (Mac), prueba con webm → no funciona; carga el mp4.
7. **Pantalla completa**: doble clic en el vídeo (depende del navegador).

## Alternativas peores

### 1) GIF para "vídeos"

```html
<!-- ❌ pesa 8 MB -->
<img src="explicacion.gif" alt="Explicación">
```

```html
<!-- ✅ pesa 500 KB y mejor calidad -->
<video autoplay muted loop playsinline>
    <source src="explicacion.mp4" type="video/mp4">
</video>
```

### 2) Embeber Flash (recordatorio histórico)

```html
<!-- ❌ Flash murió en 2020 -->
<embed src="video.swf">
```

Adobe Flash dejó de funcionar el 31/12/2020. Cualquier `.swf` ya no se reproduce.

### 3) Cargar el vídeo entero al inicio

```html
<!-- ❌ con preload="auto" en video de 50 MB -->
<video preload="auto"><source src="big.mp4"></video>
```

El usuario solo va a hacer scroll y se descarga TODO. Usa `preload="metadata"` o `preload="none"`.

### 4) Vídeo sin controles ni interacción

```html
<!-- ❌ usuario no puede pausar -->
<video autoplay loop>...</video>
```

A menos que sea un fondo decorativo, da `controls` al usuario.

### 5) Audio en autoplay con sonido

Lo bloquea Chrome/Safari. Y aunque no, es horrible UX (el usuario te cerrará la pestaña).

### 6) Subtítulos quemados en el vídeo

Hard-subs (subtítulos directamente en la imagen del vídeo) no se pueden desactivar ni cambiar de idioma. Usa `<track>` para soft-subs.

### 7) Vídeo único sin alternativas

```html
<video><source src="video.webm" type="video/webm"></video>
```

Safari no lo soportaría. Da `<source>` mp4 también.

## Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Vídeo aparece como bloque negro | Falta `poster` o el navegador no encuentra `<source>` | Verifica rutas, añade poster. |
| Audio no suena en Safari | Solo le diste OGG | Añade source MP3. |
| Autoplay no funciona | Sin `muted` | Añade `muted` y `playsinline`. |
| Subtítulos no se ven | Falta `default` o tipo de track erróneo | Pon `default` en el track deseado. |
| Vídeo abre fullscreen en iPhone | Sin `playsinline` | Añádelo. |
| Vídeo no responsive | `width="800"` fijo sin CSS | Pon `width: 100%; height: auto;` en CSS. |
| `.vtt` no carga | Servidor no envía con `text/vtt` MIME | Configura el servidor. |
| Audio en bucle infinito sin querer | Tienes `loop` | Quítalo. |
| Vídeo carga muy lento | `preload="auto"` o vídeo enorme | Cambia a `metadata`, comprime. |

## Lo que has aprendido

- Etiquetas `<audio>` y `<video>` con todos sus atributos.
- `controls`, `autoplay`, `loop`, `muted`, `preload`, `poster`, `playsinline`.
- Por qué `autoplay` requiere `muted` en navegadores modernos.
- `<source>` con varios formatos (mp3 + ogg, mp4 + webm).
- Compatibilidad de formatos en distintos navegadores.
- `<track>` para subtítulos (subtitles, captions, descriptions).
- Formato WebVTT (.vtt).
- Vídeo responsive con `width: 100%; aspect-ratio: 16/9`.
- Fallback con texto y link de descarga.
- Buenas prácticas de UX: nunca autoplay con sonido.
