# Simulacro · Test de Diseño de Interfaces Web

> Origen: `Material/Interfaces/Simulacro-FPADISTANCIA_Interfaces.pdf`.

## Preguntas

**1.** ¿Qué propiedad CSS se usa para cambiar la familia tipográfica de un texto?
- a) `font-size`
- b) `font-family`
- c) `font-style`
- d) `font-weight`

**2.** ¿Qué clase de Bootstrap se usa para añadir sombra a un elemento?
- a) `.shadow`
- b) `.box-shadow`
- c) `.sombra`
- d) `.shadow-sm, .shadow, .shadow-lg`

**3.** ¿Qué etiqueta HTML se usa para insertar un vídeo de YouTube en una página web?
- a) `<video>`
- b) `<embed>`
- c) `<iframe>`
- d) `<object>`

**4.** ¿Qué es un "prototipo" en diseño de interfaces?
- a) El código final de la web
- b) Un modelo interactivo de la interfaz antes de programarla
- c) Una imagen fija del diseño
- d) Un documento de requisitos

**5.** ¿Qué unidad de medida CSS es relativa al tamaño de la fuente del **elemento raíz**?
- a) `em`
- b) `rem`
- c) `px`
- d) `vh`

**6.** ¿Qué clase de Bootstrap crea un grupo de botones alineados?
- a) `.btn-group`
- b) `.button-group`
- c) `.group-buttons`
- d) `.btn-toolbar`

**7.** ¿Qué atributo de `<video>` muestra controles de reproducción (play, pausa, volumen)?
- a) `controls`
- b) `autoplay`
- c) `loop`
- d) `muted`

**8.** ¿Qué significa "usabilidad" en el contexto de un botón?
- a) Que tenga colores bonitos
- b) Que sea fácil de encontrar y entender su función
- c) Que tenga animaciones
- d) Que ocupe toda la pantalla

**9.** ¿Qué propiedad CSS se usa para cambiar el espacio entre líneas de texto?
- a) `letter-spacing`
- b) `word-spacing`
- c) `line-height`
- d) `text-indent`

**10.** ¿Qué clase de Bootstrap alinea los elementos en el centro de un contenedor flex?
- a) `.align-items-center`
- b) `.justify-content-center`
- c) A y B son correctas según el eje
- d) `.text-center`

**11.** ¿Qué formato de imagen moderno ofrece buena compresión y soporte de transparencia?
- a) JPG
- b) GIF
- c) WEBP
- d) BMP

**12.** ¿Qué principio de usabilidad dice que el sistema debe prevenir errores antes de que ocurran?
- a) Prevención de errores
- b) Consistencia
- c) Flexibilidad
- d) Diseño minimalista

**13.** ¿Qué clase de Bootstrap hace que un elemento ocupe todo el ancho de su contenedor?
- a) `.w-100`
- b) `.w-auto`
- c) `.w-50`
- d) `.max-width`

**14.** ¿Qué herramienta de Canva permite crear animaciones sencillas para redes sociales?
- a) Videos
- b) Presentaciones
- c) Elementos animados o "Animaciones" en diseños
- d) Filtros

**15.** ¿Qué propiedad CSS se usa para ocultar un elemento pero **manteniendo su espacio en el layout**?
- a) `display: none;`
- b) `visibility: hidden;`
- c) `opacity: 0;`
- d) `hidden: true;`

## Soluciones (oficiales del PDF)

| # | Correcta | Notas |
|---|----------|-------|
| 1 | **b) `font-family`** | `font-size` cambia tamaño; `font-style` italic/normal; `font-weight` grosor. |
| 2 | **d) `.shadow-sm, .shadow, .shadow-lg`** | Bootstrap tiene varias variantes; `.shadow` por sí sola también vale. |
| 3 | **c) `<iframe>`** | YouTube genera `<iframe src="…">` para incrustar. |
| 4 | **b) Modelo interactivo previo al código** | Prototipo ≠ mockup (imagen fija). |
| 5 | **b) `rem`** | `em` es relativo al **padre**; `rem` al `<html>` (raíz). |
| 6 | **a) `.btn-group`** | `.btn-toolbar` agrupa varios `.btn-group`. |
| 7 | **a) `controls`** | Atributo booleano: presente → muestra controles. |
| 8 | **b) Fácil de encontrar y entender** | Usabilidad = eficacia + eficiencia + satisfacción. |
| 9 | **c) `line-height`** | `letter-spacing` es entre letras; `word-spacing` entre palabras. |
| 10 | **c) A y B según el eje** | `justify-content` eje principal; `align-items` eje cruzado. |
| 11 | **c) WEBP** | Mejor que JPG y soporta transparencia (como PNG). |
| 12 | **a) Prevención de errores** | Heurística de Nielsen #5. |
| 13 | **a) `.w-100`** | Bootstrap: w-25, w-50, w-75, w-100, w-auto. |
| 14 | **c) Elementos animados** | En Canva: panel "Elementos" tiene categoría "Animaciones". |
| 15 | **b) `visibility: hidden`** | `display: none` quita del flow; `opacity: 0` lo deja pero invisible (clicable a veces). |

## Trampas frecuentes

- **`em` vs `rem`**: `em` se compone (un `em` dentro de otro `em` se multiplica). `rem` siempre se refiere al `<html>`.
- **`visibility: hidden` vs `display: none`**: el primero **reserva el hueco**, el segundo no.
- **`opacity: 0`**: invisible pero **clicable** y ocupa espacio. Bug típico.
- **`<iframe>` vs `<video>`**: `<video>` para archivos locales; `<iframe>` para servicios externos como YouTube.
- **WEBP**: combina compresión de JPG + transparencia de PNG + animación de GIF. AVIF es aún más moderno.
- **Bootstrap flex**: `justify-content-*` (eje principal, horizontal por defecto) vs `align-items-*` (eje cruzado).
