# Explicación pregunta por pregunta · Test Diseño de Interfaces

> Haz el [simulacro-test.md](simulacro-test.md) sin mirar. Vuelve aquí.

## 1. Propiedad CSS para cambiar la familia tipográfica

**Correcta: b) `font-family`**

- ✅ `font-family: "Arial", sans-serif;` define la fuente con fallback.
- ❌ a) `font-size` cambia el tamaño.
- ❌ c) `font-style` define italic/normal.
- ❌ d) `font-weight` define el grosor (bold, normal, 100-900).

> Buena práctica: lista varias fuentes, terminando con genérico (`sans-serif`, `serif`, `monospace`).

## 2. Clase Bootstrap para sombra

**Correcta: d) `.shadow-sm`, `.shadow`, `.shadow-lg`**

- ✅ Bootstrap tiene 4 niveles: `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`.
- ❌ a) `.shadow` es UNA de las opciones, pero no la única.
- ❌ b) `.box-shadow` no existe en Bootstrap (sería CSS puro).
- ❌ c) `.sombra` no existe (Bootstrap está en inglés).

## 3. Etiqueta para insertar vídeo de YouTube

**Correcta: c) `<iframe>`**

- ✅ YouTube genera un código `<iframe src="https://www.youtube.com/embed/ID">`.
- ❌ a) `<video>` es para archivos de vídeo locales (.mp4, .webm).
- ❌ b) `<embed>` está obsoleto para vídeos.
- ❌ d) `<object>` también obsoleto.

> Truco: en YouTube → Compartir → Insertar → te da el código `<iframe>`.

## 4. Qué es un "prototipo"

**Correcta: b) Un modelo interactivo de la interfaz antes de programarla**

- ✅ Prototipo = simulación clicable que permite probar el flujo de usuario antes de codificar.
- ❌ a) El código final no es un prototipo.
- ❌ c) Una imagen FIJA es un **mockup**, no prototipo.
- ❌ d) Documento de requisitos es **especificación funcional**.

> Herramientas: Figma, Adobe XD, Sketch, InVision.

## 5. Unidad CSS relativa al elemento raíz

**Correcta: b) `rem`**

- ✅ `rem` (root em) = relativo al `font-size` del `<html>`.
- ❌ a) `em` = relativo al **padre directo**.
- ❌ c) `px` = absoluto.
- ❌ d) `vh` = relativo a la altura de la ventana.

> Si `<html>` tiene `font-size: 16px`: 1rem = 16px, 1.5rem = 24px.
> Truco: poner `html { font-size: 62.5%; }` hace que 1rem = 10px (más fácil).

## 6. Clase Bootstrap para grupo de botones

**Correcta: a) `.btn-group`**

- ✅ `<div class="btn-group">` agrupa botones unidos.
- ❌ b/c) No existen.
- ❌ d) `.btn-toolbar` agrupa varios `.btn-group` (un nivel superior).

## 7. Atributo `<video>` para mostrar controles

**Correcta: a) `controls`**

- ✅ `<video controls>` muestra play/pausa/volumen/pantalla completa.
- ❌ b) `autoplay` reproduce automáticamente.
- ❌ c) `loop` reproduce en bucle.
- ❌ d) `muted` silencia el audio.

> Atributos booleanos en HTML: presentes = activados. `<video controls autoplay muted loop>` es típico para vídeos de cabecera.

## 8. Usabilidad en un botón

**Correcta: b) Que sea fácil de encontrar y entender su función**

- ✅ Usabilidad = eficacia + eficiencia + satisfacción del usuario.
- ❌ a) Estética ≠ usabilidad.
- ❌ c) Animaciones pueden ayudar o estorbar.
- ❌ d) Tamaño excesivo es contraproducente.

> 10 heurísticas de Nielsen son la base de la usabilidad.

## 9. Propiedad CSS para espacio entre líneas

**Correcta: c) `line-height`**

- ✅ `line-height: 1.5` o `line-height: 24px` define el alto de cada línea.
- ❌ a) `letter-spacing` = entre LETRAS.
- ❌ b) `word-spacing` = entre PALABRAS.
- ❌ d) `text-indent` = sangría de la primera línea.

> Recomendado para legibilidad: `line-height: 1.5` o `1.6`.

## 10. Clase Bootstrap para centrar en flex

**Correcta: c) A y B son correctas según el eje**

- ✅ `justify-content-center` centra en el **eje principal** (horizontal por defecto). `align-items-center` centra en el **eje cruzado** (vertical por defecto).
- ❌ a/b individuales no son completas.
- ❌ d) `text-center` centra TEXTO, no items flex.

> Para centrar perfectamente: `d-flex justify-content-center align-items-center`.

## 11. Formato de imagen moderno con compresión y transparencia

**Correcta: c) WEBP**

- ✅ WEBP combina compresión de JPG + transparencia de PNG. Soporte casi universal hoy.
- ❌ a) JPG comprime bien pero NO tiene transparencia.
- ❌ b) GIF tiene transparencia pero compresión pobre y solo 256 colores.
- ❌ d) BMP no comprime (archivos enormes).

> Aún más moderno: AVIF (mejor compresión que WEBP).

## 12. Principio de usabilidad: prevenir errores

**Correcta: a) Prevención de errores**

- ✅ Heurística #5 de Nielsen: mejor diseñar para evitar errores que para corregirlos.
- ❌ b) Consistencia = mismas acciones, mismo resultado.
- ❌ c) Flexibilidad = adaptarse a expertos y novatos.
- ❌ d) Diseño minimalista = solo lo necesario.

> Ejemplo: confirmar antes de borrar; deshabilitar el botón Submit hasta que el form sea válido.

## 13. Clase Bootstrap para 100% de ancho

**Correcta: a) `.w-100`**

- ✅ Bootstrap: w-25, w-50, w-75, w-100, w-auto.
- ❌ b) `.w-auto` deja el ancho natural.
- ❌ c) `.w-50` ocupa la mitad.
- ❌ d) `.max-width` no es una clase de Bootstrap.

> También hay h-25, h-50, h-75, h-100 para altura.

## 14. Herramienta Canva para animaciones

**Correcta: c) Elementos animados o "Animaciones" en diseños**

- ✅ Canva tiene un panel "Elementos" con categoría animaciones, y un menú "Animar" para aplicar a cualquier elemento.
- ❌ a/b/d) No es lo específico para animaciones simples.

## 15. Ocultar manteniendo el espacio

**Correcta: b) `visibility: hidden`**

- ✅ El elemento desaparece visualmente PERO **mantiene su espacio** en el layout.
- ❌ a) `display: none` quita del flujo: como si no existiera.
- ❌ c) `opacity: 0` lo deja invisible Y ocupa espacio Y SIGUE siendo clicable (problemático).
- ❌ d) `hidden: true` no es CSS válido (sí existe el atributo HTML `hidden` pero no es CSS).

> Tabla rápida:
> - `display: none` → invisible, NO ocupa espacio, NO clicable.
> - `visibility: hidden` → invisible, OCUPA espacio, NO clicable.
> - `opacity: 0` → invisible, OCUPA espacio, **SÍ clicable**.

---

## Trampas frecuentes

1. **`em` (padre) vs `rem` (raíz)**: rem es más predecible.
2. **`<iframe>` para YouTube**, NO `<video>`.
3. **Prototipo (interactivo) vs mockup (imagen fija)**.
4. **`visibility: hidden`** mantiene el espacio; `display: none` no.
5. **WEBP** es mejor que JPG/PNG en muchos casos.
6. **`line-height` no `text-spacing`**.
7. **`.w-100` no `.width-100`** en Bootstrap.

## Cómo aprovechar este fichero

1. Haz el [simulacro-test.md](simulacro-test.md) sin mirar.
2. Compara con esta explicación.
3. Cada concepto que falles, mira la sección en [pasos-desarrollo.md](../teoria/pasos-desarrollo.md) o el [primer de Interfaces](../ejercicios/00-interfaces-primer.md).
