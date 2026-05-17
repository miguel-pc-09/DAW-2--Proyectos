# Diseño de Interfaces Web

> **Apuntes completos — 2º DAW, curso 2025-2026**
> Profesor del módulo: José Manuel Prieto.
> Reconstruido a partir de 15 transcripciones de clase (Tema 1 → Tema 5 + simulacro de examen).
>
> **Cómo usar estos apuntes.** Están escritos asumiendo que partes de cero. Cada tema
> va de menos a más: primero los conceptos, luego la explicación detallada, después
> mucho código comentado y, al final, **ejercicios resueltos** tipo examen. Si solo
> tienes una noche, ve al [Cheatsheet](#cheatsheet), a las
> [Preguntas de autoevaluación](#preguntas-de-autoevaluación) y al
> [Repaso del simulacro](#repaso-simulacro-de-examen); pero para nota necesitas haber
> escrito el código de los ejercicios resueltos con tus manos.
>
> **Este módulo es 100% código HTML y CSS.** Por eso, en estos apuntes **cada
> concepto va acompañado de su bloque de código** mostrando exactamente cómo se
> escribe: cada etiqueta HTML, cada selector, cada propiedad CSS, cada valor de
> Flexbox... tiene su ejemplo real y comentado. No te quedes solo con la teoría:
> abre el editor y reprodúcelo.
>
> Convenciones: `[reconstrucción]` = código que el profe escribió/dictó en vivo y se ha
> pasado a sintaxis real. ❓ = punto donde la transcripción es dudosa. 🔥 = el profe dijo
> explícitamente que es importante o que cae en el examen. 📺 = momento de la clase
> donde se enseñó algo visual que conviene revisar en la grabación.

---

## Índice

- [1. Introducción al diseño de interfaces web](#1-introducción-al-diseño-de-interfaces-web)
- [2. HTML5: estructura, semántica y formularios](#2-html5-estructura-semántica-y-formularios)
- [3. Introducción a CSS](#3-introducción-a-css)
- [4. CSS avanzado y Flexbox](#4-css-avanzado-y-flexbox)
- [5. Diseño de interfaces: layout y diseño responsive](#5-diseño-de-interfaces-layout-y-diseño-responsive)
- [6. Bootstrap](#6-bootstrap)
- [7. Multimedia: imágenes y SVG](#7-multimedia-imágenes-y-svg)
- [8. Multimedia: audio, vídeo e integración](#8-multimedia-audio-vídeo-e-integración)
- [9. Contenido interactivo](#9-contenido-interactivo)
- [10. Accesibilidad y usabilidad](#10-accesibilidad-y-usabilidad)
- [Glosario](#glosario)
- [Cheatsheet](#cheatsheet)
- [Preguntas de autoevaluación](#preguntas-de-autoevaluación)
- [Pendientes de revisar](#pendientes-de-revisar)
- [Repaso: simulacro de examen](#repaso-simulacro-de-examen)
- [Recursos externos recomendados](#recursos-externos-recomendados)
- [Admin](#admin)

---

## 1. Introducción al diseño de interfaces web

> **TL;DR.** El módulo "Diseño de Interfaces Web" es la parte **visual** de la programación web: decidir cómo se ve y cómo se presenta una página. Se sostiene sobre dos lenguajes —**HTML** (estructura/contenido) y **CSS** (presentación/aspecto)—, con **JavaScript** aportando el comportamiento (eso se ve de pasada y se da a fondo en otro módulo). No hay programación lógica: es "programación visual". El entorno de trabajo es mínimo: un **editor de código** (VS Code o Notepad++), un **navegador** y sus **herramientas de desarrollo**. Todo lo construirás reconstruyendo HTML y CSS reales. Los lenguajes los regula un organismo neutral, el **W3C**, para que no dependan de ninguna empresa concreta.

### Conceptos clave

- **Interfaz web (UI):** la capa visual de una página con la que interactúa el usuario: textos, botones, formularios, colores, distribución. Es "cómo queremos visualizar nuestras páginas".
- **HTML (HyperText Markup Language):** lenguaje de **marcas** que define la **estructura y el contenido** de la página (qué es un título, qué es un párrafo, qué es una imagen). Nació en **1990**.
- **CSS (Cascading Style Sheets / Hojas de Estilo en Cascada):** lenguaje que define la **presentación**: colores, tipografías, tamaños, bordes, posicionamiento, distribución.
- **JavaScript:** lenguaje de programación que aporta el **comportamiento** y la interactividad (eventos, cambios en tiempo real). En este módulo solo se toca al final; se da en profundidad en Programación en Cliente.
- **Cliente vs. servidor:** la web tiene una "pata cliente" (HTML + CSS + JS, lo que se ejecuta en el navegador) y una "pata servidor" (muchos lenguajes). Este módulo es 100 % parte cliente y, dentro de ella, la parte **visual**.
- **Editor de código:** programa donde escribes HTML y CSS (VS Code, Notepad++, Sublime, Atom...).
- **Navegador:** programa que **interpreta** el HTML y el CSS y los **renderiza** (los dibuja) en pantalla: Chrome, Edge, Firefox, Safari, Opera.
- **Herramientas de desarrollo (DevTools):** panel integrado en el navegador (tecla **F12**) para inspeccionar el HTML, ver y editar el CSS en vivo y depurar.
- **Estándar web:** norma común que define cómo deben funcionar HTML y CSS, para que todos los navegadores se comporten igual.
- **W3C (World Wide Web Consortium):** organización que **establece esos estándares**. Es neutral: la tecnología no depende de Microsoft, Google ni Adobe.
- **Etiqueta (tag):** unidad básica de HTML, escrita entre `< >`, que marca un trozo de contenido (`<p>`, `<h1>`, `<img>`...).
- **Regla CSS:** instrucción de estilo formada por un **selector** y un conjunto de **propiedad: valor**.
- **HTML5 y CSS3:** las versiones actuales de ambos lenguajes; lo que se trabaja en la primera evaluación.

### Explicación detallada

#### 1.1. ¿Qué es esto del diseño de interfaces?

Estás en un ciclo de **Desarrollo de Aplicaciones Web**. Una aplicación web tiene tres "patas" en la parte que ve el usuario (el cliente):

1. **HTML** → la **estructura**. Es el esqueleto: aquí hay un título, aquí un párrafo, aquí una lista, aquí un formulario.
2. **CSS** → la **presentación**. Es la ropa y el maquillaje: este título es rojo, esta letra es grande, este bloque va a la derecha.
3. **JavaScript** → el **comportamiento**. Es el movimiento: cuando hago clic aquí, pasa esto; valida este formulario; cambia ese color al pasar el ratón.

🔥 **Este módulo cubre las dos patas VISUALES: HTML y CSS.** No hay programación lógica (no hay bucles ni algoritmos como en otros módulos); el profesor lo llama **"programación visual"**: decides cómo se ve la web. JavaScript solo aparece al final del curso (eventos y manipulación de estilos en tiempo real) y se da a fondo en otro módulo (Programación en Cliente, con Borja).

La analogía clásica que conviene tener clarísima para el examen:

```text
HTML  = estructura  → el esqueleto / los huesos de la casa (paredes, habitaciones)
CSS   = presentación → la pintura, los muebles, la decoración
JS    = comportamiento → la electricidad, los interruptores, lo que "hace cosas"
```

#### 1.2. Por qué importa el diseño de interfaces

Una página puede tener un contenido excelente, pero si la interfaz es confusa, fea o no se entiende, el usuario se va. El diseño de interfaces se ocupa de que la web sea **clara, usable y agradable**. Además, no todas las personas usan la web igual: hay usuarios ciegos o sordos, y existen normas de **accesibilidad y usabilidad** (se ven al final del módulo) para que la web la pueda usar todo el mundo. Por ejemplo, la ONCE tiene un navegador que **lee la web en voz alta** a personas ciegas; para que eso funcione bien, la web debe estar construida de cierta manera. 🔥 El diseño de interfaces no es "ponerlo bonito": es **comunicar y dar acceso**.

#### 1.3. Breve historia: por qué existen los estándares y el W3C

HTML **nació en 1990**. Las páginas de los 90 no se parecen en nada a las de hoy: HTML y CSS han ido **evolucionando** y siguen saliendo cosas nuevas constantemente.

El problema: ¿quién decide cómo evoluciona el lenguaje? Si lo decidiera una empresa (Microsoft, Google...), tu tecnología quedaría **atada a esa empresa**. Eso ya pasó con **Flash** (de Adobe): para ver webs y minijuegos hechos en Flash necesitabas un **plugin** propietario instalado en el navegador. Era espectacular, pero dependías de Adobe. Y en informática **no podemos depender de una sola empresa**.

🔥 Por eso existe el **W3C (World Wide Web Consortium)**: una organización **neutral** que define los **estándares** de HTML y CSS. Los navegadores (Edge, Chrome, Safari, Opera, Firefox) **se adaptan a esa normativa**. Así, una web bien hecha se ve igual en todos. Es la diferencia entre un lenguaje **abierto y estándar** y uno **propietario y cerrado** como era Flash.

#### 1.4. El entorno de trabajo

Montar el entorno para este módulo es muy sencillo. Necesitas tres cosas:

**a) Un editor de código.** Donde escribes HTML y CSS. Opciones que mencionó el profesor:

- **Visual Studio Code (VS Code)** — el de Microsoft, gratuito, con **muchísimos plugins/extensiones** (autocompletado, etiquetas HTML5, CSS, JS...). Es el que casi todo el mundo usa y el que se usará en clase.
- **Notepad++** — muy ligero y gratuito, sirve para varios lenguajes, pero **casi no tiene ayudas ni plugins** (no autocompleta). El profesor lo usa para enseñar porque es limpio.
- Otros válidos: Sublime Text, Atom, incluso editores con IA como Cursor.
- ❓ **NetBeans / IntelliJ / Eclipse**: se usan más para Java; para HTML/CSS no hacen falta. Si los usaste el año pasado, se recomienda instalar mejor VS Code o Notepad++ porque "ocupan poquísimo y no ralentizan el ordenador".

⚠️ Un editor de código **no es** Word ni un procesador de textos: guarda **texto plano** y entiende la sintaxis del lenguaje (lo colorea, lo indenta, lo autocompleta).

**b) Un navegador web.** Chrome, Edge, Firefox, Safari u Opera. Es el programa que **lee tu HTML/CSS y lo dibuja en pantalla** (lo "renderiza"). Conviene tener al menos uno para ir comprobando cómo queda la página.

**c) Las herramientas de desarrollo del navegador (DevTools).** Se abren con **F12** (o clic derecho → *Inspeccionar*). Permiten:

- Ver el **HTML real** que está interpretando el navegador (pestaña *Elements* / *Elementos*).
- Ver y **modificar el CSS en vivo** sin tocar el archivo (panel *Styles* / *Estilos*).
- Probar la web en distintos tamaños de pantalla (móvil, tablet) con el modo responsive.
- Ver errores y la consola.

🔥 Las DevTools son tu mejor amiga para **entender por qué algo no se ve como esperabas**.

El flujo de trabajo básico es siempre el mismo:

```text
1. Escribo el código en el editor (archivo .html y archivo .css)
2. Guardo el archivo
3. Abro (o recargo con F5) el archivo .html en el navegador
4. Si algo no cuadra, abro DevTools (F12) e inspecciono
5. Corrijo en el editor, guardo, recargo. Repito.
```

#### 1.5. La estructura mínima de un documento HTML

Todo archivo HTML parte de un **esqueleto fijo** que siempre es igual. Estos son los elementos imprescindibles (se detallan y comentan en la sección siguiente):

- `<!DOCTYPE html>` → declara que el documento es HTML5.
- `<html>` → la etiqueta raíz, lo envuelve todo. Conviene indicar el idioma con `lang`.
- `<head>` → la "cabecera": información que **no se ve** en la página (metadatos, título de la pestaña, enlace al CSS).
- `<body>` → el "cuerpo": **todo lo que se ve** en la ventana del navegador.

🔥 Esa estructura `DOCTYPE → html → head + body` es **obligatoria** y entra fijo en cualquier examen práctico. Si te falta, la web puede renderizarse mal.

#### 1.6. Cómo se enlaza el CSS: las tres formas

El CSS se puede conectar al HTML de **tres maneras distintas**. Hay que conocer las tres (entra en el tipo test razonado):

1. **CSS en línea (*inline*)** → con el atributo `style=""` dentro de la propia etiqueta. Afecta solo a esa etiqueta.
2. **CSS interno (*embedded*)** → dentro de una etiqueta `<style>` en el `<head>`. Afecta a todo ese documento.
3. **CSS externo** → en un archivo `.css` aparte, enlazado desde el `<head>` con `<link>`. Afecta a todas las páginas que lo enlacen.

🔥 La forma **recomendada y profesional es el CSS externo**: separa estructura (HTML) de presentación (CSS), permite reutilizar el mismo estilo en muchas páginas y mantenerlo en un solo sitio. Las otras dos se usan en casos puntuales. El código completo de las tres está en la sección de sintaxis.

### Sintaxis y ejemplos comentados

#### Estructura mínima de un documento HTML5

```html
<!DOCTYPE html>
<!-- ↑ Declara que este documento usa HTML5. SIEMPRE va en la primera línea. -->

<html lang="es">
<!-- ↑ Etiqueta raíz: envuelve TODO el documento.
     El atributo lang="es" indica que el contenido está en español
     (ayuda a buscadores y a lectores de pantalla / accesibilidad). -->

  <head>
    <!-- ↑ CABECERA: información que NO se ve en la página.
         Aquí van metadatos, el título de la pestaña y los enlaces a CSS. -->

    <meta charset="UTF-8">
    <!-- ↑ Codificación de caracteres. UTF-8 permite tildes, ñ, € sin problemas.
         Si falta, pueden salir símbolos raros (Ã±, Ã©...). -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ↑ Hace que la página se adapte al ancho del dispositivo (móvil/tablet). -->

    <title>Mi primera página web</title>
    <!-- ↑ Texto que aparece en la PESTAÑA del navegador. No se ve en el cuerpo. -->

    <link rel="stylesheet" href="estilos.css">
    <!-- ↑ Enlace al archivo CSS externo (ver más abajo). -->
  </head>

  <body>
    <!-- ↑ CUERPO: TODO lo que se ve en la ventana del navegador. -->

    <h1>Hola, mundo</h1>
    <!-- ↑ Encabezado de nivel 1: el título más importante de la página. -->

    <p>Esto es mi primer párrafo de texto.</p>
    <!-- ↑ Párrafo de texto normal. -->

  </body>
</html>
<!-- ↑ Se cierra la etiqueta raíz. Fin del documento. -->
```

> Guarda esto como `index.html`, ábrelo en el navegador y verás "Hola, mundo" en grande y un párrafo debajo. La pestaña pondrá "Mi primera página web".

#### Forma 1 — CSS en línea (inline)

```html
<!-- El estilo va DENTRO de la etiqueta, en el atributo style.
     Solo afecta a ESTA etiqueta concreta. -->
<p style="color: red; font-size: 20px;">
  Este párrafo es rojo y de 20 píxeles.
</p>

<!-- Otra etiqueta sin style: NO se ve afectada. -->
<p>Este párrafo sale con el estilo por defecto.</p>
```

> Útil para una prueba rápida y puntual. **No recomendado** en proyectos reales: mezcla estructura y presentación y no se puede reutilizar.

#### Forma 2 — CSS interno (en el `<head>` con `<style>`)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>CSS interno</title>

    <style>
      /* ↑ Todo lo que va dentro de <style> es CSS.
         Afecta a TODO este documento HTML. */

      body {
        background-color: lightyellow;  /* color de fondo de la página */
      }

      h1 {
        color: darkblue;   /* todos los <h1> de esta página serán azul oscuro */
      }

      p {
        font-size: 18px;   /* todos los <p> de esta página, a 18px */
      }
    </style>
  </head>
  <body>
    <h1>Título azul</h1>
    <p>Párrafo a 18 píxeles sobre fondo amarillo claro.</p>
  </body>
</html>
```

> Útil cuando es **una sola página** y el estilo no se va a reutilizar. Si tienes varias páginas, tendrías que copiar el `<style>` en todas: poco práctico.

#### Forma 3 — CSS externo (RECOMENDADA) 🔥

Son **dos archivos** en la misma carpeta:

**Archivo `index.html`:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>CSS externo</title>

    <link rel="stylesheet" href="estilos.css">
    <!-- ↑ ESTA es la línea clave que enlaza el CSS externo:
         rel="stylesheet" → indica que el archivo enlazado es una hoja de estilos.
         href="estilos.css" → ruta al archivo CSS (aquí, misma carpeta).
         Va siempre dentro del <head>. -->
  </head>
  <body>
    <h1>Título con estilo externo</h1>
    <p>Este texto recibe el estilo del archivo estilos.css</p>
  </body>
</html>
```

**Archivo `estilos.css`** (en la misma carpeta que el HTML):

```css
/* estilos.css — archivo de hoja de estilos externa.
   Aquí NO se escribe HTML, solo reglas CSS.

   Anatomía de una regla CSS:

   selector {
     propiedad: valor;
   }
*/

body {
  background-color: #f0f0f0;   /* fondo gris muy claro (color en hexadecimal) */
  font-family: Arial, sans-serif;  /* tipografía de toda la página */
}

h1 {
  color: #2c3e50;   /* color del texto del título */
  text-align: center;   /* texto centrado */
}

p {
  color: #333333;   /* gris oscuro para los párrafos */
  font-size: 16px;  /* tamaño de letra */
}
```

> 🔥 Ventajas del CSS externo: **separa estructura y presentación**, el mismo `estilos.css` lo pueden enlazar **20 páginas** y, si cambias un color, lo cambias **en un único sitio**. Es lo que se usa en el mundo profesional.

#### Anatomía de una regla CSS (memorízala)

```css
/*  SELECTOR   →  a qué elemento(s) afecta
      ↓
    h1 {
      color: red;          ←  declaración: PROPIEDAD : VALOR ;
      font-size: 32px;     ←  otra declaración
    }
      ↑
    Las { } encierran el BLOQUE de declaraciones.
    Cada declaración termina en ;
*/

h1 {
  color: red;
  font-size: 32px;
}
```

### Ejercicios resueltos

**Ejercicio 1 — Conceptual: ¿quién hace qué? (tipo test razonado).**
Indica qué lenguaje (HTML, CSS o JavaScript) es responsable de cada tarea y por qué:
a) Que un párrafo aparezca en pantalla con su texto.
b) Que ese párrafo tenga el fondo amarillo y la letra grande.
c) Que al hacer clic en un botón el párrafo se oculte.

**Solución:**
- a) **HTML** → es estructura/contenido. El párrafo se crea con la etiqueta `<p>Texto</p>`.
- b) **CSS** → es presentación. El aspecto (color de fondo, tamaño de letra) se controla con reglas como `p { background-color: yellow; font-size: 24px; }`.
- c) **JavaScript** → es comportamiento/interactividad. Reaccionar a un clic y modificar la página en tiempo real es lógica, no estructura ni estilo.

**Explicación:** la clave del módulo es esta separación de responsabilidades. HTML = estructura, CSS = presentación, JS = comportamiento. El examen pregunta justamente esto: "¿qué usarías para...?". Si la respuesta implica **qué hay** en la página → HTML; **cómo se ve** → CSS; **qué pasa cuando el usuario hace algo** → JavaScript.

---

**Ejercicio 2 — Conceptual: estándares y W3C (tipo test razonado).**
Un compañero dice: "Da igual cómo escriba el HTML, total, cada navegador hace lo que quiere, y antes con Flash funcionaba todo perfecto". Corrige razonadamente las dos afirmaciones.

**Solución:**
1. **No da igual cómo escribas el HTML.** Existe el **W3C**, un organismo neutral que define los **estándares** de HTML y CSS. Los navegadores (Chrome, Edge, Firefox, Safari, Opera) **se adaptan a esa normativa**. Si escribes HTML/CSS estándar, la web se ve igual en todos. Si escribes "a tu manera", el resultado es impredecible.
2. **Flash no era una buena solución.** Flash era una tecnología **propietaria de Adobe** que necesitaba un **plugin** en el navegador. Eso ataba la web a una sola empresa, y en informática no se puede depender de un único proveedor. Por eso Flash desapareció y hoy se usan HTML5 y CSS3, que son **estándares abiertos** mantenidos por el W3C.

**Explicación:** el motivo de que existan los estándares es la **independencia tecnológica**. El caso Flash es el ejemplo histórico que ilustra por qué un estándar abierto y neutral es mejor que una tecnología cerrada de una empresa.

---

**Ejercicio 3 — Práctico: montar un HTML mínimo.**
Crea un documento HTML5 completo y válido, con la estructura mínima, cuya pestaña ponga "Mi web" y cuyo cuerpo muestre un título de nivel 1 con el texto "Bienvenido" y un párrafo con el texto "Mi primera página".

**Solución:**

```html
<!DOCTYPE html>
<!-- Declara HTML5 -->
<html lang="es">
<!-- Etiqueta raíz, idioma español -->
  <head>
    <meta charset="UTF-8">
    <!-- Codificación UTF-8 para tildes y ñ -->
    <title>Mi web</title>
    <!-- Texto de la pestaña del navegador -->
  </head>
  <body>
    <!-- Todo lo visible va dentro del body -->
    <h1>Bienvenido</h1>
    <!-- Título de nivel 1 -->
    <p>Mi primera página</p>
    <!-- Párrafo de texto -->
  </body>
</html>
```

**Explicación:** se reproduce el esqueleto obligatorio `DOCTYPE → html → head + body`. El `<title>` va en el `<head>` (no se ve en la página, sale en la pestaña). `<h1>` y `<p>` van en el `<body>` porque son contenido visible. Guardándolo como `index.html` y abriéndolo en el navegador, se ve "Bienvenido" grande y "Mi primera página" debajo.

---

**Ejercicio 4 — Práctico: enlazar un CSS externo.**
Partiendo del HTML del ejercicio anterior, enlaza una hoja de estilos externa llamada `estilos.css` que ponga el fondo de la página de color azul claro y el `<h1>` centrado y de color blanco. Entrega los dos archivos.

**Solución:**

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi web</title>
    <link rel="stylesheet" href="estilos.css">
    <!-- ↑ Línea que enlaza el CSS externo:
         rel="stylesheet" indica que es una hoja de estilos
         href="estilos.css" es la ruta al archivo (misma carpeta)
         DEBE ir dentro del <head> -->
  </head>
  <body>
    <h1>Bienvenido</h1>
    <p>Mi primera página</p>
  </body>
</html>
```

`estilos.css` (mismo directorio que el HTML):

```css
/* Hoja de estilos externa */

body {
  background-color: lightblue;   /* fondo azul claro de toda la página */
}

h1 {
  color: white;        /* texto del título en blanco */
  text-align: center;  /* título centrado horizontalmente */
}
```

**Explicación:** la conexión entre ambos archivos es la etiqueta `<link rel="stylesheet" href="estilos.css">` dentro del `<head>`. El navegador lee el HTML, encuentra el `<link>`, descarga `estilos.css` y aplica sus reglas. Como ambos archivos están en la misma carpeta, basta con poner el nombre del archivo en `href`. Esta es la forma **recomendada** de trabajar con CSS.

---

**Ejercicio 5 — Conceptual/práctico: las tres formas de enlazar CSS.**
Escribe un fragmento que ponga un `<h1>` de color verde usando **las tres formas** de aplicar CSS. Indica cuál es la recomendada y por qué.

**Solución:**

```html
<!-- FORMA 1: CSS en línea (inline) -->
<h1 style="color: green;">Título verde (inline)</h1>


<!-- FORMA 2: CSS interno → en el <head> -->
<head>
  <style>
    h1 { color: green; }   /* afecta a todos los h1 de este documento */
  </style>
</head>


<!-- FORMA 3: CSS externo → en el <head> -->
<head>
  <link rel="stylesheet" href="estilos.css">
</head>
```

```css
/* contenido de estilos.css (FORMA 3) */
h1 { color: green; }
```

**Explicación:** las tres aplican el mismo estilo. La **recomendada es la forma 3 (CSS externo)** porque separa estructura (HTML) y presentación (CSS), permite reutilizar la hoja en muchas páginas y centraliza los cambios en un solo archivo. La forma 1 (inline) mezcla todo y no se reutiliza; la forma 2 (interno) sirve para una sola página puntual.

### Visuales a revisar

- [📺 01_Presentación.md, aprox. 38:00] — el profesor abre el Campus Virtual y muestra la estructura del curso (guía de aprendizaje, programación, planificación del trimestre, calendario con clases en naranja).
- [📺 01_Presentación.md, aprox. 52:00] — vista de la sección de apuntes/presentaciones del Campus: cómo se subirán las presentaciones (apuntes) y los ejercicios resueltos por unidades.
- [📺 01_Presentación.md, aprox. 1:05:00] — recorrido por la web de **Bootstrap** (versión 5): documentación, ejemplos de botones, plantillas de webs y gráficos. Es lo de la 2ª evaluación, pero da idea de qué es un framework CSS.
- [📺 01_Presentación.md, aprox. 1:40:00] — el profesor abre **Notepad++** en su ordenador y muestra un ejercicio real: un **formulario de registro en HTML**, con el editor en fondo blanco. Sirve para ver cómo se ve código HTML real en un editor.
- [📺 01_Presentación.md, aprox. 1:45:00] — comparación entre **Notepad++** (editor ligero, sin plugins ni autocompletado) y **VS Code** (editor de Microsoft con muchísimas extensiones).

### Cubierto en

- Clase del 01 (Presentación + intro Tema 1) — `01_Presentación.md`

### Pitfalls y buenas prácticas

- **Pitfall — pensar que esto "no es programar".** El profesor lo llama "programación visual": no hay lógica ni algoritmos, pero sí hay sintaxis estricta y reglas. Y el examen es **práctico**, no teórico: no te preguntan "qué significan las siglas CSS", te preguntan "qué regla CSS usarías para poner el fondo rojo". Hay que **practicar picando código**, no memorizar definiciones.
- **Pitfall — no repasar HTML y CSS de Lenguaje de Marcas.** El profesor avisa explícitamente: **no parte de cero**. Da por sabido HTML básico (etiquetas, enlaces, formularios, `<div>`) y CSS básico (color de fondo, tipografía, bordes, tamaño y posicionamiento de `<div>`: relativo, absoluto, fijo). Si llegas en blanco, la siguiente clase "suena a chino".
- **Pitfall — olvidar el esqueleto mínimo del HTML.** Sin `<!DOCTYPE html>`, sin `<head>` o sin `<body>` el documento puede renderizarse mal. Memoriza la estructura `DOCTYPE → html → head + body`.
- **Pitfall — olvidar `<meta charset="UTF-8">`.** Sin él, las tildes y la ñ pueden salir como símbolos raros.
- **Pitfall — colocar el `<link>` del CSS fuera del `<head>` o con la ruta mal.** El `<link rel="stylesheet" href="...">` va **dentro del `<head>`** y el `href` debe apuntar correctamente al archivo `.css` (si está en la misma carpeta, basta el nombre). Si la ruta falla, el navegador no aplica ningún estilo y no avisa de forma evidente.
- **Pitfall — abusar del CSS inline.** El `style=""` dentro de las etiquetas mezcla estructura y presentación, no se reutiliza y es difícil de mantener. Úsalo solo para pruebas puntuales.
- **Buena práctica — usar CSS externo siempre que puedas.** Separa HTML y CSS en archivos distintos: estructura por un lado, presentación por otro. Es lo profesional.
- **Buena práctica — comentar el código.** El profesor comenta sus ejemplos para que se puedan estudiar después. Usa `<!-- comentario -->` en HTML y `/* comentario */` en CSS para explicar qué hace cada parte.
- **Buena práctica — apoyarte en las DevTools (F12).** Inspeccionar el HTML y trastear el CSS en vivo en el navegador es la forma más rápida de entender por qué algo no se ve como esperabas.
- **Buena práctica — instalar VS Code con extensiones.** Aunque Notepad++ vale, VS Code con sus plugins de HTML5/CSS (autocompletado) hace el trabajo mucho más cómodo. No ralentiza el ordenador.
- **Buena práctica — usar las webs de consulta, no memorizarlas.** El profesor recomienda webs de referencia y la documentación oficial (de Bootstrap, etc.): son **de consulta**, para mirar lo que necesites en cada momento, no para aprenderlas de memoria.
- **Buena práctica — los apuntes (presentaciones) son la base.** El libro de McGraw-Hill es solo de consulta y puede estar algo desactualizado; en informática hay que estar al día. La fuente principal son las presentaciones del profesor y los ejemplos de código.

---

## 2. HTML5: estructura, semántica y formularios

> **TL;DR.** HTML5 es el lenguaje de marcas con el que damos *estructura* a una página web (la presentación visual llegará después con CSS). Un documento siempre arranca con `<!DOCTYPE html>` y se organiza en `<html>` → `<head>` (parte no visible: `<meta>`, `<title>`, enlaces a CSS/JS) y `<body>` (parte visible: textos, listas, enlaces, imágenes, tablas, formularios). Las etiquetas se abren y se cierran, se anidan formando un árbol y pueden llevar atributos (`id`, `class`, `href`, `src`...). HTML no da errores: el navegador se lo "traga" todo e intenta pintar lo que puede. 🔥 HTML cae seguro en el examen práctico: maquetación semántica, tablas con `colspan`/`rowspan` y formularios completos.

### Conceptos clave

- **HTML5**: *HyperText Markup Language*, versión actual del lenguaje de marcas para crear documentos web. No es un lenguaje de programación (no necesita compilador ni intérprete propio, solo un navegador). Deriva de **SGML** (un metalenguaje: un lenguaje para crear otros lenguajes).
- **Estándar de la W3C**: el consorcio (World Wide Web Consortium) que decide hacia dónde evoluciona el lenguaje. No podemos inventarnos nuestro propio HTML.
- **Etiqueta (tag)**: la "instrucción" de HTML. Normalmente va en pareja —apertura `<p>` y cierre `</p>`—, salvo las etiquetas vacías que solo hacen una cosa (`<br>`, `<hr>`, `<img>`), que pueden autocerrarse.
- **Atributo**: información extra que afina lo que hace la etiqueta. Formato `nombre="valor"`. Pueden ser opcionales, requeridos (obligatorios si quieres que funcione) o **globales** (`id`, `class`, `style`, válidos en casi todas las etiquetas).
- **Anidamiento**: meter etiquetas dentro de otras formando un **árbol**. Toda etiqueta tiene un "padre" (la única huérfana es `<html>`). Hay que cerrar en el orden correcto. 🔥 Si el HTML está bien anidado, el CSS funcionará bien después (la "cascada" hereda del padre al hijo).
- **`<head>` vs `<body>`**: el `head` es "la cabeza", la parte no visible/inteligente (metadatos, título, CSS, scripts). El `body` es "el cuerpo", la parte visible (la estructura).
- **HTML no da errores**: a diferencia de JavaScript, PHP o Python, si te equivocas el navegador no se para; intenta seguir pintando. Esto facilita escribir pero dificulta detectar fallos.
- **XHTML**: versión de HTML basada en XML, más estricta (sí es *case sensitive*, exige comillas dobles...). No la vamos a usar; usamos **HTML5**.
- **Modelo de cajas**: todo elemento HTML es una "caja" rectangular. Hay elementos **de bloque** (ocupan toda la línea: `<h1>`, `<p>`, listas, tablas, `<div>`...) y elementos **en línea** (ocupan solo su contenido: `<strong>`, `<em>`, `<a>`, `<img>`, `<span>`...).
- **Web semántica**: etiquetas HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`) que sustituyen a los `<div>` genéricos dando *significado* a cada zona.
- **Herramientas**: un editor/IDE (Visual Studio Code, Notepad++, Sublime, NetBeans, Eclipse, Aptana...) y **varios navegadores** (Chrome, Firefox, Edge, Opera, Safari, Brave) para comprobar que la web se ve parecida en todos. 🔥 El mismo código NO se ve idéntico en todos los navegadores.

### Explicación detallada

#### 2.1. Qué es HTML5 y por qué no es programación

HTML significa *HyperText Markup Language*: lenguaje de marcas de hipertexto. Sirve para **formatear documentos** que vamos a intercambiar con otra persona, normalmente a través de enlaces o formularios dentro del modelo cliente-servidor.

No se considera lenguaje de programación porque para visualizar el contenido **solo necesitas un navegador**: no hay compilador ni intérprete. Otra consecuencia importante: **HTML no genera errores de sintaxis**. Si te dejas una etiqueta sin cerrar o escribes mal un atributo, el navegador no se detiene, simplemente intenta pintar lo que entiende y sigue. CSS sí avisa de algunas cosas y JavaScript se para en seco ante un error; HTML no.

HTML5 es la versión actual (la primera especificación es de 2012), pero está **en evolución continua**: la W3C va publicando novedades cada año, sobre todo en formularios y en CSS.

#### 2.2. Reglas básicas del lenguaje

- Las etiquetas suelen ir en **pareja**: apertura `<p>` y cierre `</p>`.
- Las etiquetas que solo hacen una cosa y no tienen contenido son **vacías** y se pueden autocerrar con `/` al final: `<br />`, `<hr />`, `<img />`.
- Las etiquetas se **anidan** (unas dentro de otras), formando un árbol. Hay que cerrarlas en el **orden correcto** (la última que abro es la primera que cierro).
- En HTML5 no importa mayúsculas/minúsculas (`<P>` = `<p>`), pero por convenio escribimos **todo en minúsculas**. En XHTML sí sería *case sensitive*.
- Los valores de atributos van entre comillas. El profesor permite **comillas dobles o simples** indistintamente.
- El **anidamiento máximo** teórico es de 256 niveles, pero jamás llegaremos ni de lejos: si algo se vuelve tan complejo, está mal planteado.

```html
<!-- Etiqueta con apertura y cierre -->
<p>Esto es un párrafo.</p>

<!-- Etiqueta vacía: no tiene contenido, se autocierra -->
<br />

<!-- Atributo: nombre="valor" -->
<p id="primero">Párrafo con el atributo id valiendo "primero".</p>

<!-- Anidamiento correcto: la i se abre y cierra DENTRO de la b -->
<p>Hola <b>mundo <i>nuevo</i></b></p>
```

#### 2.3. La estructura obligatoria de un documento HTML5

🔥 Esta estructura es **obligatoria** y hay que aprenderla. Es como el "Hola mundo" de HTML: la base de toda página.

```html
<!DOCTYPE html>          <!-- Indica al navegador la versión: HTML5. NO es una etiqueta. Va SIEMPRE en la 1ª línea -->
<html lang="es">         <!-- Etiqueta raíz: el "padre" de todo. lang="es" indica el idioma -->
  <head>                 <!-- Cabeza: parte NO visible (metadatos, título, enlaces a CSS/JS) -->
    <meta charset="UTF-8" />  <!-- Juego de caracteres: UTF-8 admite ñ, acentos... (español) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Adaptación al dispositivo -->
    <title>Venta de coche</title>  <!-- Texto que aparece en la PESTAÑA del navegador, no en la página -->
  </head>
  <body>                 <!-- Cuerpo: parte VISIBLE (todo lo que ve el usuario) -->
    <h1>¡Hola, mundo!</h1>
    <p>Mi primera página web.</p>
  </body>
</html>
```

**Qué hace el `<!DOCTYPE html>`.** Indica la versión de HTML que usamos. Así el navegador no "elige" él la versión, se la decimos nosotros. Mejora la página y la validación. Va siempre en la **primera línea** y **no es una etiqueta** HTML. En páginas antiguas verás otros DOCTYPE (HTML 4.01 del 99, XHTML...); nosotros usamos siempre el de HTML5, que es el corto.

```html
<!-- HTML5 (el que usamos NOSOTROS) -->
<!DOCTYPE html>

<!-- [reconstrucción] HTML 4.01 - páginas antiguas, NO usar -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- [reconstrucción] XHTML 1.0 - versión XML, más estricta, NO usar -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

**La extensión del archivo** puede ser `.htm` o `.html`. Antiguamente solo se permitían 3 caracteres (`.htm`); hoy se usa `.html`, que es la más extendida.

**El árbol HTML.** Mentalmente, el documento es un árbol: dentro de `<html>` están `<head>` y `<body>`; dentro de `<head>`, `<meta>` y `<title>`; dentro de `<body>`, `<h1>`, `<p>`, etc. Toda etiqueta tiene un padre (no hay etiquetas huérfanas salvo `<html>`).

#### 2.4. La etiqueta `<head>` y los metadatos

En el `<head>` va la parte "inteligente" y no visible. Sus etiquetas más habituales:

```html
<head>
  <!-- meta charset: define el alfabeto. UTF-8 = español (ñ, tildes) -->
  <meta charset="UTF-8" />

  <!-- meta viewport: controla la escala/ancho para adaptarse al dispositivo -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- meta para SEO: descripción y palabras clave para los buscadores. NO se ve en la web -->
  <meta name="description" content="Página de venta de coches de segunda mano" />
  <meta name="keywords" content="coches, venta, segunda mano, Ford Mustang" />

  <!-- title: texto de la PESTAÑA del navegador -->
  <title>Venta de coche</title>

  <!-- base: directorio o URL base del proyecto -->
  <base href="https://www.misitio.com/" />

  <!-- link: enlaza un archivo externo, normalmente la hoja de estilos CSS -->
  <link rel="stylesheet" href="estilos.css" />

  <!-- style: CSS escrito dentro del propio documento -->
  <style>
    /* aquí irían reglas CSS - se verá en el Tema de CSS */
  </style>

  <!-- script: enlaza o escribe código JavaScript -->
  <script>
    alert("Hola");
  </script>
</head>
```

> ❓ `<style>`, `<link>`, `<base>` y `<script>` se explicarán a fondo en el tema de CSS y en programación en cliente; aquí solo se nombran como integrantes del `<head>`.

#### 2.5. La etiqueta `<body>`: la parte visible

En el `<body>` va todo lo que ve el usuario: textos, imágenes, enlaces, tablas, listas, formularios. Históricamente `<body>` tenía atributos como `bgcolor` (color de fondo) o `background` (imagen de fondo); aparecen como *deprecated* pero el navegador aún los soporta.

```html
<!-- bgcolor: color de fondo de toda la página (forma ANTIGUA, hoy se hace con CSS) -->
<body bgcolor="red">
  <h1>Página con fondo rojo</h1>
</body>

<!-- background: imagen de fondo (forma ANTIGUA, hoy se hace con CSS) -->
<body background="fondo.jpg">
  <p>Página con imagen de fondo</p>
</body>
```

🔥 Buena práctica: los colores y fondos se harán con **CSS**, no con atributos HTML. El profesor solo los pide así en alguna práctica inicial para que veas que existen.

#### 2.6. Etiquetas de texto: párrafos, saltos y separadores

- **`<p>`** crea un **párrafo**. Al cerrarlo con `</p>` se produce el salto de línea. Si no lo cierras, el párrafo no termina y el texto continúa.
- **`<br>`** (de *break*, romper) hace un **salto de línea** simple, una línea en blanco. Es una etiqueta vacía.
- **`<hr>`** (de *horizontal rule*, regla horizontal) dibuja una **línea horizontal** separadora. También admite ancho y color.
- **`<pre>`** (preformateado) respeta los **espacios múltiples**. HTML normalmente colapsa varios espacios en uno solo; dentro de `<pre>` se mantienen.

```html
<p>Este es el primer párrafo. Al cerrarlo con la etiqueta de cierre,
   el navegador hará un salto de línea.</p>

<p>Este es el segundo párrafo, ya separado del anterior.</p>

<p>Una línea<br />y otra línea debajo gracias al br.</p>

<hr />  <!-- línea horizontal separadora -->

<pre>
Aquí     SÍ     se respetan
los      espacios     múltiples
</pre>
```

#### 2.7. Encabezados `<h1>` a `<h6>`

Los **headings** o encabezados van del `<h1>` (el más importante, el título principal) al `<h6>` (el menos importante). El navegador les da por defecto distintos tamaños según su importancia. Sirven además para dar *significado* y jerarquía al contenido.

```html
<h1>Venta de coche - Ford Mustang 2020</h1>  <!-- título principal de la página -->
<h2>Descripción del coche</h2>               <!-- subtítulo -->
<h3>Características técnicas</h3>             <!-- sub-subtítulo -->
<h4>Motor</h4>
<h5>Cilindrada</h5>
<h6>Detalle menor</h6>
```

#### 2.8. Etiquetas de formato de texto

```html
<p>Texto en <b>negrita con b</b>.</p>
<p>Texto en <strong>negrita semántica con strong</strong> (importante).</p>
<p>Texto en <i>cursiva con i</i>.</p>
<p>Texto <em>enfatizado con em</em> (énfasis semántico, se ve en cursiva).</p>
```

> 🔥 Diferencia clave: `<b>` y `<i>` son puramente visuales (negrita/cursiva); `<strong>` y `<em>` son **semánticos** (indican que el contenido es *importante* o *enfatizado*) y se recomiendan en HTML5. Visualmente se parecen, pero significan cosas distintas.

La etiqueta **`<font>`** (deprecated, pero aún funciona) permite cambiar tipo de letra, color y tamaño:

```html
<!-- font: forma ANTIGUA de dar estilo. face=tipo de letra, color, size=tamaño -->
<font face="Arial" color="red" size="2">Hola clase</font>
```

⚠️ Cuidado con `size`: NO es como el tamaño de Word. HTML solo admite tamaños del **1 al 7**; si pones 8, 88... no crece más (HTML no da error, simplemente lo ignora). Hoy esto se hace con CSS.

#### 2.9. Listas: ordenadas, no ordenadas y de definición

**Lista no ordenada `<ul>`** (*unordered list*): elementos sin orden, marcados con un símbolo (viñeta). Cada elemento es un `<li>` (*list item*).

```html
<!-- ul: lista no ordenada. type cambia el símbolo: disc (defecto), circle, square -->
<ul type="circle">
  <li>Madrid</li>
  <li>Salamanca</li>
  <li>Santander</li>
  <li>Valencia</li>
  <li>Santiago</li>
</ul>
```

**Lista ordenada `<ol>`** (*ordered list*): elementos numerados en un orden predeterminado. Cada elemento es un `<li>`. Atributos: `type` (1, A, a, I, i), `start` (número de inicio), `reversed` (al revés).

```html
<!-- ol: lista ordenada. type="A" usa letras; start="5" empieza en el 5 -->
<ol type="A" start="5">
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>

<!-- type="I": números romanos; reversed: cuenta al revés -->
<ol type="I" reversed>
  <li>Uno</li>
  <li>Dos</li>
  <li>Tres</li>
</ol>
```

⚠️ En `type` solo valen valores reconocidos (`1`, `A`, `a`, `I`, `i`). Si pones `type="j"`, HTML no da error pero no hace nada de lo que esperas.

**Listas anidadas**: meter una lista dentro de un `<li>` de otra. 🔥 Se usan para **menús y submenús**. Se pueden mezclar `<ul>` y `<ol>` siempre que el anidamiento se cierre bien.

```html
<ul>
  <li>Inicio</li>
  <li>Sobre mí</li>
  <li>Servicios            <!-- este li NO se cierra aún: contiene un submenú -->
    <ul>
      <li>Diseño web</li>
      <li>Programación</li>
    </ul>
  </li>                    <!-- aquí SÍ se cierra Servicios, antes de Testimonios -->
  <li>Testimonios</li>
</ul>
```

**Lista de definición `<dl>`** (*definition list*): tipo diccionario. `<dt>` es el término y `<dd>` cada definición (puede haber varias `<dd>` por término). HTML las tabula. Existen "desde siempre" pero en la práctica casi no se usan.

```html
<dl>
  <dt>HTML</dt>                                  <!-- término -->
    <dd>Lenguaje de marcas para estructurar páginas web.</dd>  <!-- definición -->
  <dt>CSS</dt>
    <dd>Lenguaje de hojas de estilo.</dd>
    <dd>Sirve para la presentación visual.</dd>  <!-- un término puede tener varias dd -->
</dl>
```

#### 2.10. Enlaces `<a>` y el atributo `href`

El enlace (ancla, *link*) se crea **solo** con la etiqueta `<a>` (de *anchor*). El atributo **`href`** indica a dónde queremos ir; es **obligatorio de facto**: sin él, el enlace no enlaza a nada y no sirve (aunque HTML no dé error). Hay que **cerrar** la etiqueta `<a>` y en medio va el texto (o una imagen) sobre el que se hace clic.

```html
<!-- Enlace externo: href con la URL COMPLETA, incluyendo http:// o https:// -->
<a href="https://www.marca.com">Ir al periódico Marca</a>

<!-- La s de https indica protocolo SEGURO -->
<a href="https://es.lipsum.com">Ir a la web de Lorem Ipsum</a>

<!-- Enlace a un correo electrónico (poco usado hoy): abre el gestor de correo -->
<a href="mailto:contacto@ejemplo.com">Escríbenos</a>
```

🔥 Consejo: pon siempre el protocolo `https://` delante. Si pones solo `www.sitio.com`, en unos sitios funciona y en otros no. Lo más seguro es copiar la URL completa desde la barra del navegador.

#### 2.11. Imágenes `<img>` con `src` y `alt`

La imagen se inserta con la etiqueta vacía **`<img>`**. El atributo obligatorio es **`src`** (de *source*, fuente/origen): el nombre del archivo y su extensión. **`alt`** (alternativo) es el texto que se muestra si la imagen no se puede cargar (y aporta accesibilidad). `width` y `height` cambian ancho y alto en píxeles.

```html
<!-- src: ruta de la imagen (obligatorio). alt: texto alternativo si no carga -->
<img src="coche.jpg" alt="Ford Mustang rojo de 2020" />

<!-- width y height en píxeles. Si pones SOLO uno, la imagen escala proporcionalmente -->
<img src="coche.jpg" alt="Ford Mustang" width="300" />

<!-- Si pones AMBOS y no respetan la proporción, la imagen se deforma -->
<img src="coche.jpg" alt="Ford Mustang" width="300" height="100" />
```

HTML5 admite muchísimos formatos: `.jpg`/`.jpeg`, `.png`, `.gif`, `.webp`, etc. 🔥 Buena práctica: las imágenes web deben pesar **lo menos posible** (en bytes); una imagen grande ralentiza la carga de la página.

#### 2.12. Tablas: `<table>`, `<tr>`, `<td>`, `<th>`

Una tabla es una estructura rectangular de **filas y columnas**; el cruce de fila y columna es una **celda** (que HTML llama "dato"). Etiquetas básicas:

- **`<table>`**: etiqueta padre de la tabla.
- **`<tr>`** (*table row*): una fila.
- **`<td>`** (*table data*): una celda/columna de datos dentro de una fila.
- **`<th>`** (*table header*): celda de **cabecera**; el navegador la pinta en negrita y centrada.

La tabla se construye **de arriba abajo** (filas) y, dentro de cada fila, **de izquierda a derecha** (celdas). Por defecto HTML **no pinta el borde**: hay que ponerlo con `border` en `<table>`.

```html
<!-- border="1" para que se vea el borde. width="100%" para que ocupe todo el ancho -->
<table border="1" width="100%">
  <tr>                          <!-- primera fila: cabecera, con th -->
    <th>Producto</th>
    <th>Características</th>
    <th>Precio</th>
    <th>Disponible</th>
  </tr>
  <tr>                          <!-- segunda fila: datos, con td -->
    <td>Televisor</td>
    <td>Lenovo</td>
    <td>677.99</td>
    <td>Sí</td>
  </tr>
  <tr bgcolor="red">            <!-- bgcolor en tr: color de fondo de toda la fila -->
    <td>Televisor</td>
    <td>Sony</td>
    <td bgcolor="green">499.00</td>  <!-- bgcolor en td: color de una sola celda -->
    <td>No</td>
  </tr>
</table>
```

**Agrupadores semánticos `<thead>` y `<tbody>`.** Permiten separar la cabecera del cuerpo de la tabla:

```html
<table border="1">
  <thead>                       <!-- zona de cabecera de la tabla -->
    <tr>
      <th>Mes</th>
      <th>Ventas</th>
    </tr>
  </thead>
  <tbody>                        <!-- zona del cuerpo de datos -->
    <tr>
      <td>Enero</td>
      <td>1200</td>
    </tr>
    <tr>
      <td>Febrero</td>
      <td>1500</td>
    </tr>
  </tbody>
</table>
```

**`colspan` y `rowspan`** sirven para **unir celdas**:

- `colspan="N"`: una celda se expande **N columnas** (a lo ancho).
- `rowspan="N"`: una celda se expande **N filas** (a lo alto).

🔥 Importante: al usar `colspan`/`rowspan` hay que partir de una tabla **completa y cuadrada**, y luego **quitar** las celdas que sobran (las que ahora ocupa la celda expandida); si no, la tabla se descuadra.

```html
<table border="1">
  <tr>
    <!-- Esta celda ocupa 2 columnas: por eso esta fila tiene 3 td y no 4 -->
    <th colspan="2">Televisor</th>
    <th>Precio</th>
    <th>Disponible</th>
  </tr>
  <tr>
    <!-- Esta celda ocupa 3 filas: en las 2 filas siguientes se OMITE la 1ª celda -->
    <td rowspan="3">Electrónica</td>
    <td>Lenovo</td>
    <td>677.99</td>
    <td>Sí</td>
  </tr>
  <tr>
    <!-- Fila sin la 1ª celda porque la de arriba la ocupa con rowspan -->
    <td>Sony</td>
    <td>499.00</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Smartwatch</td>
    <td>122.00</td>
    <td>No</td>
  </tr>
</table>
```

> Durante años las tablas se usaron para **maquetar** páginas enteras. En 2025 ya no se hace (se maqueta con CSS), pero las tablas siguen siendo muy potentes para mostrar **datos tabulares** (un horario, un calendario, una lista de precios).

#### 2.13. El modelo de cajas: elementos de bloque y en línea

HTML usa el **modelo de cajas**: cada elemento es un rectángulo con un borde imaginario (visible o no).

- **Elementos de bloque**: ocupan **toda la línea**, de margen a margen. Por defecto producen salto de línea. Ejemplos: `<h1>`-`<h6>`, `<p>`, `<ul>`/`<ol>`, `<table>`, `<div>`.
- **Elementos en línea**: ocupan **solo su contenido**, no toda la anchura. Ejemplos: `<b>`/`<strong>`, `<i>`/`<em>`, `<a>`, `<img>`, las celdas, `<span>`.

⚠️ Regla a respetar: un elemento **en línea no debería contener un elemento de bloque** (no tiene sentido que algo pequeño contenga algo que ocupa todo el ancho); puede dar problemas de visualización.

#### 2.14. `<div>` y `<span>`

- **`<div>`**: el contenedor genérico **de bloque** por defecto. Es "un folio en blanco": no tiene estilo propio, le das tú toda la estructura. Es la etiqueta clásica para crear bloques.
- **`<span>`**: el contenedor genérico **en línea** por defecto. Es lo mismo que `<div>` pero para contenido en línea. No tiene significado propio.

```html
<!-- div: bloque genérico, ocupa toda la línea -->
<div>
  <h2>Sección de noticias</h2>
  <p>Contenido de la noticia...</p>
</div>

<!-- span: en línea, ocupa solo su contenido. Útil para marcar un trozo de texto -->
<p>El precio es <span>677,99 €</span> con IVA incluido.</p>
```

> 🔥 `<div>` y `<span>` cobran todo su sentido con CSS: se les aplicará fondo, bordes, posicionamiento, opacidad, etc. Por eso aquí solo se explican como teoría.

#### 2.15. Etiquetas semánticas de HTML5

Con la **web semántica** aparecieron etiquetas que sustituyen a los `<div>` genéricos dando *significado* a cada zona. Funcionan igual que un `<div>` (son elementos de bloque), pero el nombre describe su función:

- **`<header>`**: cabecera de la página o de una sección (logo, título, menú superior).
- **`<nav>`**: zona de navegación (el menú de enlaces).
- **`<main>`**: contenido principal de la página (único por documento).
- **`<section>`**: una sección temática del contenido.
- **`<article>`**: un contenido autónomo y reutilizable (una noticia, un post, una ficha de producto).
- **`<aside>`**: contenido secundario o lateral (barra lateral, anuncios, enlaces relacionados).
- **`<footer>`**: pie de página o de sección (copyright, contacto, enlaces legales).
- **`<figure>`**: agrupa una imagen (u otro contenido gráfico) con su descripción; suele acompañarse de `<figcaption>`.

```html
<body>
  <header>                       <!-- cabecera: logo + título -->
    <h1>Mi Blog de Tecnología</h1>
    <nav>                        <!-- navegación: el menú -->
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>                         <!-- contenido principal -->
    <section>                    <!-- una sección temática -->
      <h2>Últimas noticias</h2>
      <article>                  <!-- contenido autónomo: una noticia -->
        <h3>HTML5 sigue evolucionando</h3>
        <p>La W3C publica nuevas mejoras cada año...</p>
        <figure>                 <!-- imagen + su descripción -->
          <img src="html5.png" alt="Logo de HTML5" />
          <figcaption>El logotipo oficial de HTML5.</figcaption>
        </figure>
      </article>
    </section>

    <aside>                      <!-- contenido secundario / lateral -->
      <h2>Enlaces de interés</h2>
      <ul>
        <li><a href="https://www.w3.org">W3C</a></li>
      </ul>
    </aside>
  </main>

  <footer>                       <!-- pie de página -->
    <p>&copy; 2026 Mi Blog. Todos los derechos reservados.</p>
  </footer>
</body>
```

#### 2.16. Atributos globales: `id`, `class`, `style`

Son atributos válidos en casi todas las etiquetas y se usan sobre todo de cara a CSS y JavaScript:

- **`id`**: identificador **único** de un elemento en toda la página (no se debe repetir). En JavaScript se accede con `getElementById`.
- **`class`**: clasifica el elemento; **se puede repetir** en varios elementos (todos los que comparten estilo).
- **`style`**: permite escribir CSS en línea directamente sobre la etiqueta (se verá en el tema de CSS).

```html
<!-- id: único en toda la página -->
<p id="introduccion">Este es el párrafo de introducción.</p>

<!-- class: repetible, varios elementos pueden compartir la misma clase -->
<p class="destacado">Párrafo destacado 1.</p>
<p class="destacado">Párrafo destacado 2.</p>

<!-- style: CSS en línea (se profundiza en el Tema de CSS) -->
<p style="color: blue;">Párrafo azul.</p>
```

> ❓ El profesor comenta que usará `id` y `name` según el caso: `name` para manejar formularios y `id` para acceder a controles con `getElementById` en JavaScript.

#### 2.17. Comentarios en HTML

Los comentarios son texto que el navegador **ignora**; sirven para que el programador se oriente y acote zonas del código. Se escriben entre `<!--` y `-->`.

```html
<!-- Esto es un comentario: el navegador NO lo muestra -->

<!-- ===== CABECERA DE LA WEB ===== -->
<header>
  <h1>Mi web</h1>
</header>
<!-- ===== FIN CABECERA ===== -->
```

🔥 Buena práctica: comenta tu código, sobre todo en documentos largos, para marcar dónde empieza la cabecera, el menú, el formulario, etc.

#### 2.18. Entidades HTML

Las **entidades** representan caracteres especiales que de otra forma confundirían al navegador (por ejemplo `<` o `>`) o que no están fácilmente en el teclado. Se escriben `&nombre;` o `&#número;`.

```html
<p>Para escribir una etiqueta sin que se interprete: &lt;p&gt; muestra el texto p entre signos.</p>
<p>Un espacio que NO se colapsa: A&nbsp;&nbsp;&nbsp;B</p>
<p>Símbolo de copyright: &copy;  -  Marca registrada: &reg;</p>
<p>Comillas y ampersand: &quot; comillas &quot; y &amp; el símbolo and</p>
<p>Euro: &euro;  -  Acento via entidad: cami&oacute;n</p>
```

| Entidad | Resultado | Para qué |
|---|---|---|
| `&lt;` | `<` | Signo "menor que" |
| `&gt;` | `>` | Signo "mayor que" |
| `&amp;` | `&` | Ampersand (and) |
| `&nbsp;` | espacio | Espacio que no se colapsa |
| `&quot;` | `"` | Comillas dobles |
| `&copy;` | © | Copyright |
| `&euro;` | € | Euro |

#### 2.19. Formularios: `<form>` y sus controles

El **formulario** es la fuente de entrada de datos del usuario: la forma de que se registre, te escriba, compre algo, elija opciones. 🔥 El profesor pide **siempre** un formulario en las prácticas.

La etiqueta padre es **`<form>`** (con apertura y cierre). Sus atributos principales:

- **`action`**: a dónde se envían los datos (a qué página/script los procesa). El profesor no lo exige en esta asignatura (se ve en Programación en Servidor).
- **`method`**: cómo se envían. Dos métodos:
  - **`get`**: los datos viajan **en la URL**, separados por `&` (ampersand). Se cachean, se pueden guardar en el historial y marcar como favoritos. Tiene límite de tamaño. Algo "peligroso" para datos sensibles (contraseñas, precios).
  - **`post`**: los datos viajan "ocultos", no en la URL. No se guardan en historial ni se pueden marcar. Es el adecuado para datos sensibles.

```html
<!-- form: contenedor del formulario. method puede ser "get" o "post" -->
<form action="procesar.php" method="post">
  <!-- aquí van todos los controles del formulario -->
</form>
```

**La etiqueta `<label>`**: indica que el texto que la acompaña es la *etiqueta* de un campo (Nombre, Apellido, Contraseña...). No da estilo, pero tiene valor **semántico** y de accesibilidad. No es obligatoria, pero HTML5 (y el profesor) recomiendan usarla.

**La etiqueta `<input>`**: el control más versátil. Su comportamiento depende del atributo **`type`**. Atributos comunes: `name` (nombre del dato que se envía), `value` (valor), `placeholder` (texto de ayuda dentro del campo), `required` (campo obligatorio), `min`/`max` (mínimo/máximo en números, fechas y horas).

🔥 Todos los tipos de `<input>` con su código:

```html
<form action="#" method="post">

  <!-- TEXT: campo de texto normal -->
  <label>Nombre:</label>
  <input type="text" name="nombre" placeholder="Escribe tu nombre" required />
  <br />

  <!-- PASSWORD: contraseña, se ve con puntos/asteriscos al escribir -->
  <label>Contraseña:</label>
  <input type="password" name="clave" required />
  <br />

  <!-- EMAIL: campo de correo, valida que tenga formato de email -->
  <label>Correo:</label>
  <input type="email" name="correo" placeholder="usuario@dominio.com" />
  <br />

  <!-- NUMBER: solo números, con mínimo y máximo -->
  <label>Edad:</label>
  <input type="number" name="edad" min="0" max="120" />
  <br />

  <!-- DATE: selector de fecha, con mínimo y máximo -->
  <label>Fecha de contrato:</label>
  <input type="date" name="fecha" min="1900-01-01" max="2030-12-31" />
  <br />

  <!-- TIME: selector de hora, con mínimo y máximo -->
  <label>Hora de fichar:</label>
  <input type="time" name="hora" min="08:00" max="20:00" />
  <br />

  <!-- COLOR: selector de color (novedad de HTML5) -->
  <label>Color favorito:</label>
  <input type="color" name="color" />
  <br />

  <!-- RANGE: barra deslizante entre un mínimo y un máximo -->
  <label>Nivel:</label>
  <input type="range" name="nivel" min="0" max="10" />
  <br />

  <!-- CHECKBOX: casillas, se pueden marcar VARIAS a la vez -->
  <label>Aficiones:</label>
  <input type="checkbox" name="aficion" value="teatro" /> Teatro
  <input type="checkbox" name="aficion" value="cine" /> Cine
  <input type="checkbox" name="aficion" value="montana" /> Montaña
  <br />

  <!-- RADIO: botones de opción, solo se puede elegir UNO (mismo name) -->
  <label>Tu edad:</label>
  <input type="radio" name="grupoedad" value="menor" /> Menor de edad
  <input type="radio" name="grupoedad" value="adulto" /> Adulto
  <input type="radio" name="grupoedad" value="abuelo" /> Abuelo
  <br />

  <!-- FILE: adjuntar un archivo -->
  <label>Adjunta tu CV:</label>
  <input type="file" name="cv" />
  <br />

  <!-- SUBMIT: botón que ENVÍA el formulario -->
  <input type="submit" value="Enviar datos" />

  <!-- RESET: botón que RESETEA el formulario (lo vacía) sin enviarlo -->
  <input type="reset" value="Borrar" />
</form>
```

> 🔥 Diferencia clave **checkbox vs radio**: `checkbox` permite marcar **varias** opciones (cuadrado con tick); `radio` solo permite **una** (círculo). Para que los `radio` funcionen como grupo, todos deben compartir el mismo `name`.

**`<textarea>`**: caja de texto de varias líneas (como el cuerpo de un correo de Gmail). Se le indican `rows` (filas) y `cols` (columnas/caracteres). Lo que escribas entre las etiquetas es su valor por defecto; si lo dejas vacío, aparece vacío.

```html
<!-- textarea: caja de texto multilínea. rows=filas, cols=ancho en caracteres -->
<label>Comentarios:</label>
<textarea name="comentarios" rows="4" cols="70" placeholder="Escribe aquí tu mensaje"></textarea>
```

**`<select>` y `<option>`**: menú desplegable. Cada opción es un `<option>` con un atributo **`value`** (lo que se *envía*); el texto entre `<option>` y `</option>` es lo que se *ve*. Se pueden agrupar opciones con `<optgroup>` y deshabilitar con `disabled`.

```html
<!-- select: desplegable. option: cada opción. value = lo que se ENVÍA -->
<label>Provincia:</label>
<select name="provincia">
  <option value="madrid">Madrid</option>     <!-- se ve "Madrid", se envía "madrid" -->
  <option value="sevilla">Sevilla</option>
  <option value="valencia">Valencia</option>
</select>

<!-- optgroup: agrupa opciones. disabled: grupo deshabilitado (gris, no seleccionable) -->
<select name="curso">
  <optgroup label="Primero">
    <option value="1daw">1º DAW</option>
    <option value="1dam">1º DAM</option>
  </optgroup>
  <optgroup label="Segundo">
    <option value="2daw">2º DAW</option>
  </optgroup>
  <optgroup label="Otros" disabled>
    <option value="x">No disponible</option>
  </optgroup>
</select>
```

**`<button>`**: botón genérico. Admite eventos (`onclick`, `ondblclick`...) que se programan con JavaScript. También existe `<button type="reset">` para resetear.

```html
<!-- button: botón genérico, se le pueden asociar eventos JavaScript -->
<button type="button">Haz clic aquí</button>

<!-- button de reset: vacía el formulario -->
<button type="reset">Resetear</button>

<!-- button de submit: envía el formulario -->
<button type="submit">Enviar</button>
```

### Sintaxis y ejemplos comentados

**Documento HTML5 completo y ejecutable** (estructura + texto + enlaces + imagen):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Página de ejemplo del Tema 2 de Interfaces" />
  <title>Mi primera web</title>
</head>
<body>
  <!-- Título principal de la página -->
  <h1>Bienvenido a mi web</h1>
  <h2>Una subsección</h2>

  <!-- Párrafo con formato de texto -->
  <p>Este es un párrafo con una palabra en <strong>negrita semántica</strong>
     y otra en <em>cursiva enfatizada</em>.</p>

  <hr />  <!-- línea separadora horizontal -->

  <!-- Enlace externo -->
  <p>Visita la <a href="https://www.w3.org">página de la W3C</a> para saber más.</p>

  <!-- Imagen con texto alternativo -->
  <img src="logo.png" alt="Logotipo de la web" width="200" />
</body>
</html>
```

### Ejercicios resueltos

**Ejercicio 1 — Maquetar una página con estructura semántica.** Crea una página completa de un blog usando `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Blog de Cocina</title>
</head>
<body>
  <header>                                <!-- cabecera de la página -->
    <h1>Blog de Cocina Casera</h1>
    <nav>                                 <!-- menú de navegación -->
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="recetas.html">Recetas</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>                                  <!-- contenido principal -->
    <section>                             <!-- sección de recetas -->
      <h2>Recetas del día</h2>
      <article>                           <!-- una receta = contenido autónomo -->
        <h3>Tortilla de patatas</h3>
        <p>La receta tradicional española paso a paso.</p>
      </article>
      <article>
        <h3>Gazpacho andaluz</h3>
        <p>Refrescante y muy fácil de preparar.</p>
      </article>
    </section>
    <aside>                               <!-- contenido lateral -->
      <h2>Lo más visto</h2>
      <ul>
        <li><a href="#">Paella valenciana</a></li>
        <li><a href="#">Croquetas de jamón</a></li>
      </ul>
    </aside>
  </main>

  <footer>                                <!-- pie de página -->
    <p>&copy; 2026 Blog de Cocina Casera.</p>
  </footer>
</body>
</html>
```

*Explicación:* cada zona usa la etiqueta semántica adecuada en lugar de un `<div>` genérico. `<header>` engloba título y menú; `<nav>` contiene la lista de enlaces; `<main>` es el contenido único central; `<section>` agrupa por tema; cada `<article>` es una receta independiente; `<aside>` es contenido secundario; `<footer>` cierra con el copyright (usando la entidad `&copy;`).

---

**Ejercicio 2 — Crear una tabla de datos.** Crea una tabla con borde que muestre 3 productos con sus columnas: Producto, Marca, Precio y Disponible. La primera fila debe ser de cabecera.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Catálogo de productos</title>
</head>
<body>
  <h1>Catálogo</h1>
  <table border="1" width="100%">
    <thead>                          <!-- cabecera de la tabla -->
      <tr>
        <th>Producto</th>
        <th>Marca</th>
        <th>Precio</th>
        <th>Disponible</th>
      </tr>
    </thead>
    <tbody>                          <!-- cuerpo de datos -->
      <tr>
        <td>Televisor</td>
        <td>Lenovo</td>
        <td>677,99 &euro;</td>       <!-- entidad &euro; para el símbolo del euro -->
        <td>Sí</td>
      </tr>
      <tr>
        <td>Portátil</td>
        <td>Sony</td>
        <td>899,00 &euro;</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Smartwatch</td>
        <td>Garmin</td>
        <td>122,00 &euro;</td>
        <td>Sí</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

*Explicación:* `<table border="1">` hace visible el borde (HTML no lo pone por defecto). `<thead>` agrupa la fila de cabecera, donde las celdas son `<th>` (negrita y centradas automáticamente). `<tbody>` agrupa las filas de datos, donde las celdas son `<td>`. Cada `<tr>` es una fila completa.

---

**Ejercicio 3 — Crear un formulario de registro completo.** Diseña un formulario de registro con: nombre, correo, contraseña, fecha de nacimiento, sexo (una sola opción), aficiones (varias opciones), provincia (desplegable), comentarios y botones de enviar y borrar.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Formulario de registro</title>
</head>
<body>
  <h1>Registro de usuario</h1>
  <form action="#" method="post">

    <!-- Campo de texto obligatorio con texto de ayuda -->
    <label>Nombre completo:</label>
    <input type="text" name="nombre" placeholder="Nombre y apellidos" required />
    <br /><br />

    <!-- Campo de correo: valida el formato -->
    <label>Correo electrónico:</label>
    <input type="email" name="correo" placeholder="tucorreo@dominio.com" required />
    <br /><br />

    <!-- Contraseña: se oculta al escribir -->
    <label>Contraseña:</label>
    <input type="password" name="clave" required />
    <br /><br />

    <!-- Fecha de nacimiento -->
    <label>Fecha de nacimiento:</label>
    <input type="date" name="nacimiento" />
    <br /><br />

    <!-- Sexo: radio button, solo se puede elegir UNO (mismo name) -->
    <label>Sexo:</label>
    <input type="radio" name="sexo" value="hombre" /> Hombre
    <input type="radio" name="sexo" value="mujer" /> Mujer
    <input type="radio" name="sexo" value="otro" /> Otro
    <br /><br />

    <!-- Aficiones: checkbox, se pueden elegir VARIAS -->
    <label>Aficiones:</label>
    <input type="checkbox" name="aficion" value="deporte" /> Deporte
    <input type="checkbox" name="aficion" value="musica" /> Música
    <input type="checkbox" name="aficion" value="lectura" /> Lectura
    <br /><br />

    <!-- Desplegable de provincia -->
    <label>Provincia:</label>
    <select name="provincia">
      <option value="madrid">Madrid</option>
      <option value="barcelona">Barcelona</option>
      <option value="sevilla">Sevilla</option>
    </select>
    <br /><br />

    <!-- Área de texto multilínea -->
    <label>Comentarios:</label><br />
    <textarea name="comentarios" rows="4" cols="50" placeholder="Cuéntanos algo..."></textarea>
    <br /><br />

    <!-- Botones de envío y reseteo -->
    <input type="submit" value="Registrarme" />
    <input type="reset" value="Borrar" />
  </form>
</body>
</html>
```

*Explicación:* `<form>` envuelve todos los controles con `method="post"` (datos no visibles en la URL). Cada campo lleva su `<label>`. `required` hace obligatorios nombre, correo y contraseña. Los `radio` de sexo comparten `name="sexo"`, así solo se puede elegir uno; los `checkbox` de aficiones comparten `name="aficion"` pero permiten varios. `<select>` da el desplegable y `<textarea>` la caja multilínea.

---

**Ejercicio 4 — Página con listas anidadas y enlaces (un menú).** Crea un menú de un sitio web con secciones y subsecciones usando listas anidadas, donde cada elemento sea un enlace.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Menú del sitio</title>
</head>
<body>
  <h1>Servicios profesionales</h1>
  <nav>
    <ul>                                          <!-- lista principal -->
      <li><a href="index.html">Inicio</a></li>
      <li><a href="sobre.html">Sobre mí</a></li>
      <li><a href="servicios.html">Servicios</a>  <!-- este li contiene un submenú -->
        <ul>                                      <!-- lista anidada (submenú) -->
          <li><a href="web.html">Diseño web</a></li>
          <li><a href="seo.html">Posicionamiento SEO</a>
            <ol>                                  <!-- se pueden mezclar ul y ol -->
              <li><a href="#">SEO básico</a></li>
              <li><a href="#">SEO avanzado</a></li>
            </ol>
          </li>
          <li><a href="apps.html">Aplicaciones móviles</a></li>
        </ul>
      </li>
      <li><a href="contacto.html">Contacto</a></li>
    </ul>
  </nav>
</body>
</html>
```

*Explicación:* el `<ul>` principal contiene los apartados de primer nivel. El `<li>` de "Servicios" **no se cierra** inmediatamente: dentro lleva otro `<ul>` (el submenú), y este a su vez contiene un `<ol>` anidado. Lo importante es **cerrar cada lista y cada `<li>` en el orden correcto**. Cada elemento es un enlace `<a href="...">`.

---

**Ejercicio 5 — Galería de imágenes.** Crea una galería con cuatro imágenes, cada una dentro de un `<figure>` con su descripción, y donde al hacer clic en la imagen se abra un enlace.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Galería de fotos</title>
</head>
<body>
  <h1>Galería de paisajes</h1>
  <section>
    <!-- Cada figura: imagen enlazada + su pie de foto -->
    <figure>
      <a href="montana.html">
        <img src="montana.jpg" alt="Montaña nevada al atardecer" width="250" />
      </a>
      <figcaption>Montaña nevada</figcaption>
    </figure>

    <figure>
      <a href="playa.html">
        <img src="playa.jpg" alt="Playa de arena blanca" width="250" />
      </a>
      <figcaption>Playa tropical</figcaption>
    </figure>

    <figure>
      <a href="bosque.html">
        <img src="bosque.jpg" alt="Bosque de pinos en otoño" width="250" />
      </a>
      <figcaption>Bosque en otoño</figcaption>
    </figure>

    <figure>
      <a href="desierto.html">
        <img src="desierto.jpg" alt="Dunas del desierto del Sáhara" width="250" />
      </a>
      <figcaption>Dunas del desierto</figcaption>
    </figure>
  </section>
</body>
</html>
```

*Explicación:* cada imagen va dentro de un `<figure>` (agrupa contenido gráfico) y se acompaña de `<figcaption>` (su descripción). La `<img>` está envuelta en un `<a>`, así toda la imagen es clicable. Todas llevan `alt` (texto alternativo y accesibilidad) y `width="250"` para que escalen proporcionalmente al mismo tamaño.

---

**Ejercicio 6 — Tabla de horario con `colspan` y `rowspan`.** Crea un horario semanal donde la asignatura "Bases de Datos" ocupe dos columnas seguidas un día, y el "Recreo" sea una única celda que cruce toda la fila.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Horario semanal</title>
</head>
<body>
  <h1>Horario de 2º DAW</h1>
  <table border="1" width="100%">
    <tr>                                   <!-- fila de cabecera -->
      <th>Hora</th>
      <th>Lunes</th>
      <th>Martes</th>
      <th>Miércoles</th>
    </tr>
    <tr>
      <td>9:00 - 10:00</td>
      <!-- colspan="2": esta celda ocupa 2 columnas (Lunes y Martes) -->
      <td colspan="2">Bases de Datos</td>
      <td>Interfaces</td>
    </tr>
    <tr>
      <!-- colspan="4": el recreo cruza TODA la fila (las 4 columnas) -->
      <td colspan="4" bgcolor="yellow">RECREO</td>
    </tr>
    <tr>
      <td>10:30 - 11:30</td>
      <!-- rowspan="2": "Servidor" ocupa 2 filas a lo alto -->
      <td rowspan="2">Servidor</td>
      <td>Interfaces</td>
      <td>Empresa</td>
    </tr>
    <tr>
      <td>11:30 - 12:30</td>
      <!-- ESTA fila NO lleva celda de Lunes: la ocupa el rowspan de arriba -->
      <td>Empresa</td>
      <td>Interfaces</td>
    </tr>
  </table>
</body>
</html>
```

*Explicación:* se parte de una tabla cuadrada de 4 columnas. `colspan="2"` une dos columnas en horizontal (Bases de Datos ocupa Lunes+Martes); `colspan="4"` hace que el recreo ocupe la fila entera. `rowspan="2"` une dos filas en vertical (Servidor). 🔥 Clave: en la fila de abajo del `rowspan` hay que **omitir** la celda que la de arriba ya ocupa, o la tabla se descuadra.

### Visuales a revisar

- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 00:00] — Introducción a la asignatura: qué es una interfaz web, satisfacción del usuario, diseño responsive.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 08:00] — Diapositivas del proceso de diseño: objetivo, público, análisis de la competencia, mockups, prototipos, pruebas de usuario, iteración, lanzamiento.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 18:00] — Qué es HTML5, SGML como metalenguaje, diagrama de lenguajes derivados de SGML, línea temporal de versiones de HTML.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 30:00] — Reglas del lenguaje: etiquetas de apertura/cierre, anidamiento, diagrama del árbol HTML (head/body) tomado de la W3C.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 38:00] — Estructura obligatoria del documento: `<!DOCTYPE html>`, ejemplos de DOCTYPE antiguos, extensiones `.htm`/`.html`.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 48:00] — Etiquetas del `<head>`: `<title>` en la pestaña del navegador, `<meta charset>`, `<meta>` para SEO, `<base>`, `<link>`, `<style>`, `<script>`.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 58:00] — `<body>` y atributos `bgcolor`/`background`; demostración en vivo del fondo rojo y la imagen de fondo.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 1:05:00] — Etiquetas de texto: `<p>`, `<br>`, `<hr>`, encabezados `<h1>`-`<h6>` con el ejemplo "Venta de coche - Ford Mustang 2020".
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 1:15:00] — Etiquetas de formato (`<b>`, `<em>`, `<i>`), etiqueta `<font>` (face, color, size) y `<pre>` para espacios múltiples.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 1:25:00] — Enlaces `<a>` con `href`: demostración de enlace al periódico Marca y a Lorem Ipsum, error al equivocarse en `.co`/`.com`.
- [📺 `02_Tema1_ HTML5 _parte1.md`, aprox. 1:35:00] — Imágenes `<img>` con `src` y `alt`, `width`/`height`, deformación de imagen; web HTML Colors para códigos RGB/hexadecimal.
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 00:00] — Listas: `<dl>`/`<dt>`/`<dd>` (definición), `<ol>`/`<li>` ordenadas con `type`, `start`, `reversed`.
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 12:00] — Listas no ordenadas `<ul>` con `type` (disc, circle, square) y listas anidadas mezclando `<ul>` y `<ol>` (ejemplo del menú de servicios).
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 25:00] — Modelo de cajas: elementos de bloque vs en línea, `<div>` y `<span>`.
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 35:00] — Tablas: construcción en vivo con `<table>`, `<tr>`, `<td>`, `<th>`, `border`, `width`, `bgcolor`; ejemplo del catálogo de productos.
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 50:00] — `colspan` y `rowspan`: demostración en vivo de expansión de columnas y filas, ejemplo del horario coloreado.
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 1:05:00] — Formularios: métodos `get` vs `post`, etiqueta `<form>`, `action`.
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 1:15:00] — Controles del formulario: `<input>` (text, password, email, number, date, time, color, range, checkbox, radio, file), `<label>`, `<textarea>`, `<select>`/`<option>`/`<optgroup>`, `<button>`, submit/reset.
- [📺 `03_Tema1_HTML5_parte2.md`, aprox. 1:30:00] — Comparativa en vivo del mismo formulario en Chrome, Firefox, Edge y Opera: los controles HTML5 (date, time, color) NO se ven igual en todos.

### Cubierto en

- Clase 02 (Tema 1, HTML5 parte 1) — `02_Tema1_ HTML5 _parte1.md`
- Clase 03 (Tema 1, HTML5 parte 2) — `03_Tema1_HTML5_parte2.md`

### Pitfalls y buenas prácticas

**Errores comunes**

- **Olvidar `<!DOCTYPE html>` o no ponerlo en la primera línea.** Aunque la página "funcione", el navegador puede entrar en modo de compatibilidad antiguo. Va siempre en la línea 1 y no es una etiqueta.
- **No cerrar las etiquetas o cerrarlas en mal orden.** Como HTML no da error, el navegador intenta pintar igualmente y el resultado se descontrola: un `<p>` sin cerrar "se come" el resto del documento. Cierra en orden inverso al de apertura.
- **Creer que HTML "te avisa" de los fallos.** No lo hace. Si el enlace no va a ningún sitio, si la imagen no carga, si `type="j"` en una lista no existe... no hay mensaje de error, simplemente no funciona. Hay que revisar visualmente.
- **Poner `href` mal escrito o sin protocolo.** `www.sitio.com` sin `https://` puede no funcionar; `.co` en vez de `.com` lleva a un error de página no encontrada. Copia la URL completa desde el navegador.
- **Olvidar el atributo `alt` en las imágenes.** Si la imagen no carga no se ve nada, y se pierde la accesibilidad. `alt` siempre.
- **Usar tablas para maquetar la página entera.** Se hacía hace años, pero en 2025 no. Las tablas son solo para **datos tabulares** (horarios, precios, calendarios).
- **Descuadrar la tabla con `colspan`/`rowspan`.** Si una celda se expande N posiciones, hay que **quitar** las N-1 celdas que ahora ocupa; si no, sobran celdas y la tabla se rompe. Parte siempre de una tabla cuadrada.
- **Meter un elemento de bloque dentro de uno en línea.** Por ejemplo un `<div>` dentro de un `<span>` o un `<a>`. No tiene sentido y da problemas de visualización.
- **Esperar que `<input type="date">`, `time` o `color` se vean idénticos en todos los navegadores.** No es así: Chrome, Firefox, Edge y Opera los pintan distinto. Hay que probar en varios navegadores.
- **Confundir `checkbox` y `radio`.** `checkbox` = varias opciones; `radio` = una sola. Y los `radio` solo funcionan como grupo si comparten el mismo `name`.
- **Pensar que `<font size>` funciona como Word.** HTML solo admite tamaños del 1 al 7; valores mayores se ignoran.

**Buenas prácticas**

- **Escribe siempre la estructura completa**: `<!DOCTYPE html>`, `<html lang="es">`, `<head>` con `<meta charset="UTF-8">` y `<title>`, y `<body>`. Aunque a veces "no pase nada" por omitir algo, obligarse mejora la página.
- **Usa `UTF-8`** como charset: es el que admite ñ, tildes y caracteres del español.
- **Cierra las etiquetas a medida que las abres.** El propio profesor lo hace: nada más escribir `<table>` escribe `</table>`, y luego rellena dentro. Evita olvidos.
- **Indenta y comenta el código.** Usa `<!-- ... -->` para marcar zonas (cabecera, menú, formulario...). Imprescindible en documentos largos.
- **Prioriza las etiquetas semánticas** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) sobre los `<div>` genéricos: dan significado y mejoran SEO y accesibilidad.
- **Prefiere `<strong>` y `<em>`** frente a `<b>` e `<i>`: son semánticos (importante / enfatizado), no solo visuales.
- **Separa estructura de presentación.** El HTML da la estructura; los colores, fondos, tamaños y posiciones se harán con **CSS** (próximo tema). Atributos como `bgcolor`, `background` o la etiqueta `<font>` están obsoletos.
- **Pon siempre `<label>`** en los campos de formulario: HTML5 lo recomienda, aporta semántica y accesibilidad. El `placeholder` es un buen complemento (texto de ayuda dentro del campo), muy útil sobre todo en móvil porque no ocupa espacio.
- **Marca como `required`** los campos de formulario que son obligatorios.
- **Optimiza el peso de las imágenes**: que pesen lo menos posible en bytes para no ralentizar la carga.
- **Prueba tus páginas en varios navegadores** (Chrome, Firefox, Edge, Opera): el mismo código no se ve píxel a píxel igual en todos, y conviene que se vea *parecido* en todos.

---

## 3. Introducción a CSS

> **TL;DR.** CSS (Cascading Style Sheets, hojas de estilo en cascada) es el lenguaje que da la **apariencia** a un documento HTML: colores, tamaños, posiciones, tipografías... mientras que HTML aporta la **estructura y el contenido**. Una regla CSS tiene la forma `selector { propiedad: valor; }`. Se puede aplicar de tres formas (en línea, interno con `<style>` y externo con `<link>` o `@import`), siendo el fichero externo el ideal en proyectos serios. Sus pilares son los **selectores** (etiqueta, clase `.`, id `#`, universal `*`, descendiente, hijo `>`...), la **cascada** y la **herencia** (los hijos heredan estilos del padre salvo que se sobrescriban), las **unidades** (px, %, em, rem, vw, vh), los **colores** (nombres, hex, rgb/rgba, hsl) y, sobre todo, el **modelo de caja** (`content` + `padding` + `border` + `margin`): si entiendes el modelo de caja, CSS está chupado. 🔥

### Conceptos clave

- **CSS = Cascading Style Sheets** = hojas de estilo en cascada. Lenguaje del lado del cliente, igual que HTML, pero **CSS no es HTML**: son dos lenguajes distintos con sintaxis distinta.
- **Separación contenido / presentación.** HTML = contenido y estructura. CSS = apariencia. Aplicamos el principio *divide y vencerás*: el proyecto es más fácil de mantener y de depurar.
- **Regla CSS.** Unidad básica: `selector { propiedad: valor; }`. Cada par `propiedad: valor;` se llama **declaración** y termina **obligatoriamente** en punto y coma.
- **Tres formas de aplicar CSS:** en línea (`style="..."`), interno (`<style>` en el `<head>`) y externo (fichero `.css` enlazado con `<link>` o importado con `@import`).
- **Selectores.** Lo que indica *a qué elementos* se aplica el estilo: de etiqueta, de clase (`.`), de id (`#`), universal (`*`), descendiente (espacio), de hijo directo (`>`), agrupado (`,`), de atributo (`[ ]`), pseudoclases (`:hover`, `:first-child`) y pseudoelementos (`::before`, `::first-line`).
- **Cascada.** El navegador lee el CSS de arriba abajo; ante reglas en conflicto se aplica la última (y manda la especificidad). Hay tres orígenes de estilo: navegador < usuario < autor (nosotros). `!important` rompe el orden normal.
- **Herencia.** Los elementos hijos heredan ciertos estilos del padre (sobre todo de texto/color) salvo que se les cambie. Es la *columna vertebral* de CSS.
- **Unidades.** Absolutas (px, cm, mm, pt, pc, in) y relativas (%, em, rem, vw, vh). Se recomienda **empezar con px** y luego pasar a unidades relativas para que la web sea fluida.
- **Colores.** Nombres en inglés (`red`), hexadecimal (`#ff0000`), `rgb()`/`rgba()`, `hsl()`/`hsla()`. `rgba` y `hsla` añaden canal alfa (transparencia, 0 a 1).
- **Modelo de caja (box model).** Todo elemento HTML es una caja con cuatro capas: `content`, `padding`, `border`, `margin`. `box-sizing` controla cómo se calcula el tamaño total.
- **`display`.** Define el tipo de caja: `block`, `inline`, `inline-block`, `none`.
- **Tipografía y texto:** `font-family`, `font-size`, `font-weight`, `color`, `text-align`, `line-height`, `text-decoration`, `text-shadow`...
- **Fondos:** `background-color`, `background-image`, `background-size`, `background-position`, `background-repeat`.
- **Bordes y sombras:** `border`, `border-radius`, `box-shadow`.

### Explicación detallada

#### 3.1 ¿Qué es CSS y por qué lo necesitamos?

Llevamos varias clases de HTML y ya os habéis dado cuenta de algo: **HTML es poco flexible**. Sirve para estructurar (títulos, párrafos, listas, tablas, formularios), pero se adapta muy mal a los distintos dispositivos, resoluciones y a lo que el usuario espera. Una web tiene que ser amigable y adaptarse a diferentes pantallas: eso va directamente ligado a la **experiencia de usuario**. Hay webs (banco, Netflix, Amazon...) que se sienten mejor que otras, y eso se trabaja con CSS.

CSS significa **Cascading Style Sheets**, *hojas de estilo en cascada*. Lo creó la **W3C** porque HTML, a partir de la versión 4 (y reforzado en HTML5), quería que **separásemos contenido de presentación**. Es tecnología del **lado del cliente**, igual que HTML, y siempre va unido a HTML: **CSS sin HTML no es nada**.

¿Por qué *en cascada*? Porque va relacionado con el **DOM** (la estructura de etiquetas que generamos). Aparecen los conceptos de **padre e hijo**: las etiquetas que contienen a otras. La idea clave es que **los hijos heredan los estilos del padre salvo que los cambiemos**. Eso es la cascada: el estilo "cae" hacia abajo por el árbol de etiquetas hasta que tú lo detienes.

Un poco de historia: la primera versión de CSS no aparece hasta 1996. La versión que usamos, **CSS3**, tiene su primer borrador (*working draft*) en el año 2000 y técnicamente sigue evolucionando. Existe un borrador de CSS4 (2011) pero **ningún navegador lo soporta a nivel comercial**, así que nosotros trabajamos con **CSS3**. CSS3 es **compatible hacia atrás**: incluye todo lo de CSS2 y CSS1, así que aprendiendo CSS3 sabes los tres.

🔥 Idea fundamental: yo modificando **solo el CSS** (sin tocar el HTML) cambio el estilo; y si toco **solo el HTML** cambio el contenido, no el estilo.

#### 3.2 La sintaxis de una regla CSS

CSS se basa en **reglas**. Una regla tiene esta estructura:

```css
/* ESTRUCTURA DE UNA REGLA CSS */
selector {              /* 1. SELECTOR: a qué elemento(s) afecta */
  propiedad: valor;     /* 2. DECLARACIÓN: propiedad + ':' + valor + ';' */
  otra-propiedad: valor;/* puedes poner todas las declaraciones que quieras */
}                       /* las llaves abren y cierran el bloque de declaraciones */
```

- El **selector** es a lo que le vamos a dar estilo. Va antes de las llaves.
- Las **llaves** `{ }` abren y cierran el bloque de declaraciones.
- Cada **declaración** es `propiedad: valor;` y **termina obligatoriamente en punto y coma**.
- Las **propiedades** NO te las inventas: son la nomenclatura de CSS (`color`, `font-size`, `background-color`...). Los **valores** tampoco: deben tener sentido para esa propiedad (a `color` le pones un color, no la palabra "pepito").

Ejemplo real estilando todos los párrafos del documento:

```css
/* 'p' es la etiqueta HTML de los párrafos.        */
/* Esta regla afecta a TODOS los <p> del documento. */
p {
  color: #333333;            /* color del TEXTO */
  text-align: justify;       /* alineación del texto */
  font-family: Arial, sans-serif; /* tipo de letra */
  font-size: 16px;           /* tamaño de letra */
  font-weight: bold;         /* grosor (negrita) */
  background-color: #f0f0f0; /* color de FONDO */
}
```

CSS **ignora los saltos de línea y los espacios**: podrías poner toda la regla en una sola línea. Pero el consejo del profesor es **una declaración por línea** para que sea legible y fácil de depurar.

🔥 **Comentarios en CSS.** Se escriben con `/* ... */` (no existe `//` para una sola línea como en otros lenguajes):

```css
/* Esto es un comentario CSS. Sirve para documentar tu hoja de estilo. */
h1 {
  color: navy; /* también puedes comentar al final de una línea */
}
```

🔥 **Considera esto** (la cascada dentro de una misma regla): si por error repites una propiedad, **gana siempre la última**:

```css
h2 {
  color: red;    /* esta NO se aplica */
  color: green;  /* esta NO se aplica */
  color: blue;   /* GANA esta: es la última, el navegador lee de arriba abajo */
}
```

#### 3.3 Las tres formas de aplicar CSS

**1. CSS en línea (*inline style*).** Con el atributo `style` dentro de la propia etiqueta. Es el **menos flexible**: solo afecta a ESA etiqueta. Se intenta **evitar**.

```html
<!-- Solo este párrafo concreto recibe el estilo -->
<p style="color: black; font-family: Verdana;">Texto con estilo en línea.</p>
```

**2. CSS interno (*internal style*).** Dentro de la etiqueta `<style>`, que va en el `<head>` (la *cabeza*) del documento. Útil para una práctica o una interfaz suelta.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CSS interno</title>
  <style>
    /* Todo el CSS de esta página va aquí dentro */
    body  { background-color: white; }
    p     { color: blue; }
    h3    { color: red; }
  </style>
</head>
<body>
  <h3>Título</h3>
  <p>Párrafo afectado por el CSS interno.</p>
</body>
</html>
```

**3. CSS externo (*external stylesheet*).** 🔥 La forma **recomendada para proyectos grandes**: un fichero con extensión **`.css`** que se enlaza desde el HTML. Tocas un fichero y se modifican las 20, 30 o 40 páginas del proyecto. Hay dos maneras de incluirlo:

```html
<!-- Opción A: con la etiqueta <link> en el <head> -->
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
  <!-- rel  = relación: es una hoja de estilo                       -->
  <!-- type = tipo MIME del fichero                                 -->
  <!-- href = ruta al fichero .css (mejor en la misma carpeta)      -->
</head>
```

```css
/* Opción B: con la regla @import dentro de un <style> o de otro .css */
@import url("estilos.css");
/* @import es una regla de CSS3; usa la función url() para localizar el recurso. */
```

Y el fichero `estilos.css` contiene directamente las reglas, sin etiquetas HTML:

```css
/* estilos.css  -- fichero externo, extensión .css OBLIGATORIA */
body      { background-color: #ffffff; }
.container{ width: 960px; margin: 0 auto; }
.border-box { border: 1px solid #ccc; }
```

#### 3.4 Selectores

El selector indica **a qué elementos** se aplica el estilo. Estos son los que vemos en el tema:

**Selector de etiqueta** (de tipo). Afecta a todas las etiquetas de ese tipo.

```css
p   { color: blue; }   /* todos los <p>   */
h3  { color: red; }    /* todos los <h3>  */
div { background-color: #eee; }
span{ color: green; }
```

**Selector de clase** (`.`). 🔥 Una clase **se puede repetir** en varios elementos. En el CSS empieza **obligatoriamente por punto**; en el HTML se pone sin punto.

```css
/* CSS: la clase 'destacado' lleva punto delante */
.destacado {
  color: orange;
  font-weight: bold;
}
```
```html
<!-- HTML: el atributo class va SIN punto, y puede repetirse -->
<p class="destacado">Primer párrafo destacado.</p>
<h2 class="destacado">Un título también destacado.</h2>
<li class="destacado">Y un elemento de lista.</li>
```

**Selector de id** (`#`). 🔥 Un id, *en teoría*, identifica a **un único elemento**. En el CSS empieza por **almohadilla** (`#`).

```css
/* CSS: el id 'aviso' lleva almohadilla delante */
#aviso {
  color: red;
}
```
```html
<!-- HTML: el atributo id va SIN almohadilla -->
<p>Párrafo normal (azul si los <p> son azules).</p>
<p id="aviso">Párrafo de aviso (rojo por el id).</p>
```

> Diferencia id vs class: la **class se aplica a varios elementos**, el **id a uno solo**. CSS3 muchas veces "perdona" repetir un id, pero la buena práctica es: id → uno; class → varios. En la práctica se usan **clases casi siempre**.

**Selector universal** (`*`). El comodín: afecta a **todos los elementos** del documento. Útil para aplicar algo por defecto.

```css
/* Aplica el color rojo a TODOS los elementos, salvo que se sobrescriba */
* {
  color: red;
}
```

**Selector descendiente** (espacio). Afecta a un elemento que esté **dentro** de otro (a cualquier nivel de profundidad).

```css
/* Solo los <p> que estén DENTRO de un <div> (hijos, nietos...) */
div p {
  color: purple;
}
```

**Selector de hijo directo** (`>`). Solo afecta a los **hijos directos**, no a nietos.

```css
/* Solo los <li> que sean hijos DIRECTOS de un <ul> */
ul > li {
  list-style: square;
}
```

**Selector agrupado** (`,`). Aplica las mismas declaraciones a varios selectores a la vez.

```css
/* h1, h2 y h3 comparten estas reglas */
h1, h2, h3 {
  font-family: Georgia, serif;
  color: #222;
}
```

**Selector de atributo** (`[ ]`). Selecciona elementos según un atributo y su valor. Muy usado en formularios.

```css
/* Solo los <input> cuyo type es "text" */
input[type="text"] {
  border: 1px solid #999;
  padding: 6px;
}
/* Solo los <input> cuyo type es "email" */
input[type="email"] {
  border: 1px solid #36c;
}
```

**Pseudoclases** (`:`). Seleccionan un elemento según su **estado** o su **posición**.

```css
a:link    { color: blue; }      /* enlace NO visitado            */
a:visited { color: purple; }    /* enlace YA visitado            */
a:hover   { color: red; }       /* cuando el ratón pasa POR ENCIMA 🔥 */
a:active  { color: orange; }    /* justo en el momento del clic   */

li:first-child { font-weight: bold; }  /* el primer <li> de su lista */
li:last-child  { color: gray; }        /* el último <li> de su lista */
```

**Pseudoelementos** (`::`). Estilan una **parte** de un elemento o **generan contenido**.

```css
p::first-line   { color: navy; }            /* la primera LÍNEA del párrafo  */
p::first-letter { font-size: 2em; color: red; } /* la primera LETRA (capital) */

/* ::before genera contenido ANTES del contenido del elemento */
.nota::before {
  content: "→ ";   /* la propiedad content es obligatoria en ::before/::after */
  color: green;
}
```

> ❓ En la transcripción los pseudoelementos `first-line`/`first-letter` aparecen escritos con **dos puntos** (`:first-line`). La sintaxis CSS2 admitía un solo `:` y la CSS3 recomienda dos `::` para distinguir pseudoelementos de pseudoclases. Ambas funcionan; aquí se usa `::` por ser la forma actual.

#### 3.5 La cascada, la especificidad y la herencia

**La cascada.** El navegador procesa el CSS **de arriba abajo**. Si dos reglas chocan, decide cuál gana. Hay **tres orígenes** de hojas de estilo, en orden de prioridad creciente:

1. **Hoja del navegador** (la que menos manda): cada navegador tiene un estilo por defecto. Si tú no escribes CSS, se aplica este (por eso tus prácticas de HTML "ya tenían estilo").
2. **Hoja del usuario**: configuración que el usuario aplica a su navegador (zoom, modo oscuro...).
3. **Hoja del autor** (la que más manda): la que escribimos nosotros como diseñadores/programadores.

🔥 **`!important`.** Palabra reservada que hace que una declaración mande **por encima de todo**, rompiendo el orden normal. El profesor recomienda **usarla lo mínimo posible**: si todo es importante, nada lo es.

```css
p {
  color: red !important; /* GANA esta por el !important */
  color: blue;           /* aunque sea la última, NO gana frente a !important */
}
```

**La especificidad.** Cuando varias reglas afectan al mismo elemento y ninguna lleva `!important`, gana la **más específica**. De menos a más peso: selector universal `*` < selector de etiqueta < selector de clase / atributo / pseudoclase < selector de id. Y el estilo **en línea** pesa más que todos. A igualdad de especificidad, gana la última (la cascada).

```css
/* Supongamos este HTML:  <p id="aviso" class="destacado">Hola</p> */

p          { color: black;  }  /* etiqueta  -> peso bajo   */
.destacado { color: green;  }  /* clase     -> peso medio  */
#aviso     { color: red;    }  /* id        -> peso ALTO -> GANA: el texto es ROJO 🔥 */
```

```css
/* Otro ejemplo: misma especificidad (las dos son de clase) -> gana la ÚLTIMA */
.caja { background-color: yellow; } /* no se aplica */
.caja { background-color: lime; }   /* GANA: es la última con igual especificidad */
```

**La herencia.** Los elementos hijos **heredan** del padre ciertas propiedades (sobre todo de texto: `color`, `font-family`, `font-size`...). Si el hijo define su propio valor, **no hereda**: se queda con el suyo. Las propiedades de caja (`margin`, `padding`, `border`) NO se heredan.

```css
body {
  color: blue;            /* azul */
  font-family: Arial;
}
/* <p> es hijo de <body>: HEREDA color azul y la fuente Arial.
   Pero le añadimos su propio fondo:                          */
p {
  background-color: black; /* propiedad propia, no heredada */
}
/* <h3> es hijo de <body> pero define su PROPIO color:
   NO hereda el azul del body.                                */
h3 {
  color: red;             /* gana lo suyo */
}
```

> Detalle de la clase: una etiqueta **sin contenido** (un `<ul>` vacío que no aparece renderizado) no muestra estilo, porque no hay nada que pintar. Para ver el estilo aplicado tiene que haber contenido dentro de la etiqueta.

#### 3.6 Unidades de medida

CSS tiene **muchísimas** unidades. Se dividen en absolutas y relativas.

**Absolutas** (tamaño fijo): `px` (píxeles), `cm`, `mm`, `pt` (puntos), `pc` (picas), `in` (pulgadas).

```css
.caja-fija {
  width: 300px;   /* 300 píxeles: medida fija, no se adapta a la pantalla */
  height: 5cm;    /* 5 centímetros */
  border-width: 2pt; /* 2 puntos */
}
```

**Relativas** (se adaptan al contexto): `%`, `em`, `rem`, `vw`, `vh` (y `ex`, `ch`...).

```css
.caja-fluida {
  width: 80%;        /* 80% del ancho del contenedor padre              */
  font-size: 1.5em;  /* 1.5 veces el tamaño de letra del ELEMENTO PADRE */
  padding: 2rem;     /* 2 veces el font-size de la RAÍZ <html>          */
  height: 50vh;      /* 50% del alto de la ventana (viewport height)    */
  max-width: 90vw;   /* 90% del ancho de la ventana (viewport width)    */
}
```

🔥 Diferencia clave **px vs unidades relativas**: si pones `width: 100px`, se ve igual de grande en una pantalla de 800 px que en una de 1900 px (no se adapta). Si usas medidas relativas (`em`, `%`, `vw`...), el tamaño es **relativo al contexto** y la web se adapta. Diferencia `em` vs `rem`: `em` es relativo al padre (se "encadena" y puede acumularse); `rem` siempre es relativo a la raíz `<html>` (más predecible). Consejo del profesor: **empieza con `px`** porque se ve rápido cómo se coloca o descoloca algo; **luego pasa a unidades relativas**.

#### 3.7 Colores

CSS ofagrece muchísimas formas de indicar un color:

```css
.ejemplos-color {
  /* 1. NOMBRE en inglés */
  color: red;

  /* 2. HEXADECIMAL: #RRGGBB (2 cifras hex por canal rojo/verde/azul) */
  color: #ff0000;        /* rojo */
  color: #333;           /* forma corta de #333333 */

  /* 3. rgb(): 3 valores 0-255 de rojo, verde, azul */
  background-color: rgb(255, 0, 0);

  /* 4. rgba(): igual que rgb + canal ALFA (transparencia) de 0 a 1 */
  background-color: rgba(255, 0, 0, 0.5); /* rojo al 50% de opacidad */

  /* 5. hsl(): tono (0-360), saturación (%), luminosidad (%) */
  border-color: hsl(0, 100%, 50%);        /* rojo */

  /* 6. hsla(): hsl + alfa de 0 a 1 (1 = opaco, 0 = transparente) */
  border-color: hsla(0, 100%, 50%, 0.3);
}
```

> En `rgba` y `hsla` el **último valor es la opacidad**: `1` es sin transparencia, `0` es totalmente transparente, y entre medias se juega con decimales. Para elegir colores son muy útiles las webs de paletas (htmlcolorcodes y similares), que te dan el código en hex, rgb y hsl.

#### 3.8 El modelo de caja (box model) 🔥

🔥 Esto es **lo más importante de CSS**: *si entiendes el modelo de caja, CSS está chupado*. **Todo elemento HTML es una caja** para CSS, con cuatro capas de dentro hacia fuera:

1. **`content`** — el contenido (texto, imagen...). Su tamaño lo dan `width` y `height`.
2. **`padding`** — relleno interno: espacio **entre el contenido y el borde**. Área "limpia".
3. **`border`** — el borde de la caja.
4. **`margin`** — margen externo: separación **entre esta caja y las de fuera**. Área "limpia", normalmente transparente.

```css
.caja {
  /* CONTENT: tamaño del contenido */
  width: 300px;
  height: 200px;

  /* PADDING: relleno interno (contenido <-> borde) */
  padding: 10px;          /* 10px en los 4 lados */

  /* BORDER: borde de la caja */
  border: 1px solid red;  /* grosor | estilo | color */

  /* MARGIN: separación con las cajas vecinas */
  margin: 15px;           /* 15px en los 4 lados */

  background-color: lightblue;
}
```

🔥 **El tamaño real NO es `width` x `height`.** Con la caja de arriba, uno pensaría que ocupa 300x200, pero hay que **sumar** padding, border y margin:

```
Ancho real = margin-izq + border-izq + padding-izq + width + padding-der + border-der + margin-der
           =   15       +    1       +    10       + 300   +    10       +    1       +   15      = 352 px
Alto real  =   15       +    1       +    10       + 200   +    10       +    1       +   15      = 252 px
```

Puedes trabajar la caja **completa** (los 4 lados a la vez) o **lado a lado**:

```css
.caja-por-lados {
  /* PADDING lado a lado */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;

  /* MARGIN lado a lado */
  margin-top: 5px;
  margin-right: auto;   /* 'auto' a izq+der centra la caja horizontalmente */
  margin-bottom: 5px;
  margin-left: auto;
}

.caja-abreviada {
  /* Forma REDUCIDA: orden de las agujas del reloj -> top, right, bottom, left */
  padding: 10px 20px 10px 20px;  /* equivale al bloque de arriba */
  margin:  5px auto;             /* 2 valores = (top/bottom) (left/right) */
}
```

> `width`/`height` sin especificar valen **`auto`**: lo que ocupe el contenido más lo que decida el navegador. Los márgenes de cajas vecinas **se suman** (tanto horizontales como verticales), y puede haber **overflow** (solapamiento) si el contenido no cabe.

🔥 **`box-sizing`.** Cambia *cómo se calcula* el tamaño de la caja:

```css
/* content-box (POR DEFECTO): width = solo el contenido.
   El padding y el border SE SUMAN aparte -> la caja crece. */
.caja-a { box-sizing: content-box; width: 300px; padding: 20px; border: 5px solid; }
/* Ocupa 300 + 20+20 + 5+5 = 350px de ancho */

/* border-box: width = contenido + padding + border TODO INCLUIDO.
   La caja mide EXACTAMENTE lo que pones. Mucho más cómodo. 🔥 */
.caja-b { box-sizing: border-box; width: 300px; padding: 20px; border: 5px solid; }
/* Ocupa EXACTAMENTE 300px de ancho */
```

**`overflow`** decide qué pasa cuando el contenido no cabe en la caja:

```css
.caja-overflow {
  width: 200px;
  height: 100px;
  overflow: hidden;  /* el contenido que sobra se OCULTA          */
  /* overflow: scroll;  saca barras de desplazamiento             */
  /* overflow: auto;    saca barras solo si hace falta            */
}
```

> Ni `hidden` ni `scroll` son soluciones "bonitas" (sobre todo en móvil); si te aparece overflow, normalmente conviene replantear el diseño. `hidden` sí es útil para "recortar" imágenes o hacer máscaras.

#### 3.9 `display`: tipos de caja

🔥 `display` define cómo se comporta la caja respecto a las demás:

```css
/* BLOCK: ocupa todo el ancho disponible y provoca un salto de línea.
   Por defecto: <div>, <p>, <h1>...<h6>, <ul>, <li>...                */
.es-bloque { display: block; }

/* INLINE: ocupa solo lo que ocupa su contenido, NO salta de línea.
   Por defecto: <span>, <a>, <em>, <strong>...
   width y height NO le hacen efecto.                                 */
.es-linea  { display: inline; }

/* INLINE-BLOCK: fluye en línea (como inline) PERO admite width/height,
   margin y padding como un bloque. Lo mejor de los dos mundos.        */
.es-mixto  { display: inline-block; width: 120px; height: 40px; }

/* NONE: el elemento NO se muestra y NO ocupa espacio (desaparece).    */
.oculto    { display: none; }
```

> Un **elemento de bloque** (`<div>`, `<p>`) ocupa toda la línea y hace salto de línea automático. Un **elemento de línea** (`<span>`, `<em>`) ocupa solo lo que necesita. Con `display` puedes convertir uno en otro.

#### 3.10 `width`, `height`, bordes y `border-radius`

```css
.dimensiones {
  width: 400px;       /* ancho del contenido            */
  height: 250px;      /* alto del contenido             */
  min-width: 200px;   /* nunca más estrecho que 200px   */
  max-width: 100%;    /* nunca más ancho que su padre   */
}

.bordes {
  /* Propiedades individuales del borde */
  border-width: 3px;          /* grosor: px o thin/medium/thick */
  border-style: solid;        /* solid, dotted, dashed, double... */
  border-color: #36c;         /* color: nombre, hex, rgb, hsl... */

  /* Propiedad abreviada: grosor | estilo | color */
  border: 3px solid #36c;

  /* Borde lado a lado */
  border-top: 1px dashed gray;
  border-bottom: 4px double red;

  /* BORDER-RADIUS: esquinas redondeadas */
  border-radius: 10px;        /* las 4 esquinas redondeadas 10px */
  /* border-radius: 50%;  -> convierte un cuadrado en círculo    */
}
```

Valores de `border-style`: `solid` (sólido), `dotted` (punteado), `dashed` (a rayas/trazos), `double` (doble), entre otros.

> **`outline`** (CSS3) es un contorno que se dibuja **por fuera del borde** y **NO ocupa espacio** en el modelo de caja (no empuja a los elementos vecinos). No confundir con `border`: son complementarios. Útil para resaltes y para la navegación con tabulador.
> ```css
> .resalte { outline: 2px dotted green; }  /* contorno fino verde punteado, fuera del borde */
> ```

#### 3.11 Tipografía y propiedades de texto

```css
/* PROPIEDADES DE FUENTE (font-*) */
.tipografia {
  font-family: Arial, Helvetica, sans-serif; /* lista de fuentes con alternativas */
  font-size: 18px;        /* tamaño de letra        */
  font-weight: bold;      /* grosor: normal, bold, 100-900 */
  font-style: italic;     /* normal | italic | oblique */
  font-variant: small-caps;
  /* Propiedad abreviada 'font': estilo variant peso tamaño/interlineado familia */
  font: italic bold 18px/1.5 Arial, sans-serif;
}

/* PROPIEDADES DE TEXTO (no de fuente) */
.texto {
  color: #222;               /* color del texto                 */
  text-align: center;        /* left | right | center | justify */
  line-height: 1.5;          /* interlineado (alto de línea)     */
  text-decoration: underline;/* underline | none | line-through */
  letter-spacing: 2px;       /* espaciado entre letras           */
  text-indent: 30px;         /* sangría de la primera línea      */
  text-transform: uppercase; /* MAYÚSCULAS                       */
}
```

🔥 **Fuentes web.** Antes el usuario tenía que tener instalada la fuente. Con `@font-face` y servicios como **Google Fonts** podemos usar cualquier fuente:

```css
/* Opción A: fuente local que tú te has descargado (.woff, .ttf...) */
@font-face {
  font-family: "MiFuente";          /* nombre con el que la usarás */
  src: url("fuentes/mifuente.woff"); /* ruta al fichero            */
}
.con-fuente-local { font-family: "MiFuente", sans-serif; }

/* Opción B: fuente de Google Fonts. En el HTML pegas el <link> que te da
   Google ('get embed code') y luego la usas por su nombre:           */
.con-google-font { font-family: "Indie Flower", cursive; }
```

#### 3.12 Fondos

```css
.fondos {
  /* COLOR de fondo */
  background-color: #f5f5f5;

  /* IMAGEN de fondo (con la función url()) */
  background-image: url("imagenes/fondo.jpg");

  /* REPETICIÓN: por defecto la imagen se repite en mosaico */
  background-repeat: no-repeat;   /* 'no-repeat' = NO se repite */

  /* POSICIÓN de la imagen dentro de la caja */
  background-position: center top; /* horizontal | vertical; admite px y % */

  /* TAMAÑO de la imagen de fondo */
  background-size: cover;   /* cubre toda la caja sin deformar         */
  /* background-size: contain;  cabe entera dentro de la caja          */
  /* background-size: 200px 100px;  ancho y alto concretos             */

  /* Propiedad abreviada 'background': color image repeat position */
  background: #fff url("imagenes/fondo.jpg") no-repeat center / cover;
}
```

#### 3.13 Sombras: `box-shadow` y `text-shadow`

```css
/* SOMBRA DE CAJA: desplazamiento-X | desplazamiento-Y | desenfoque | color */
.tarjeta {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  /*          |   |    |      |
              |   |    |      +-- color de la sombra (con transparencia)
              |   |    +--------- desenfoque (cuanto mayor, más difusa)
              |   +-------------- desplazamiento vertical (hacia abajo)
              +------------------ desplazamiento horizontal (hacia la derecha) */
}

/* SOMBRA DE TEXTO: color | desplazamiento-X | desplazamiento-Y | desenfoque */
.titulo-con-sombra {
  text-shadow: gray 2px 2px 3px;
  /*           |    |   |   |
               |    |   |   +-- claridad/desenfoque de la sombra
               |    |   +------ coordenada Y
               |    +---------- coordenada X
               +--------------- color de la sombra */
}
```

> ❓ En la transcripción el `text-shadow` se describe como "primero el color, luego X, luego Y, luego claridad". CSS admite el color al principio o al final; aquí se respeta el orden que dijo el profesor.

### Sintaxis y ejemplos comentados

Recopilatorio compacto de **cada selector** y **cada propiedad** con su sintaxis real.

```css
/* ====================== SELECTORES ====================== */
*               { margin: 0; }            /* universal: TODOS los elementos     */
p               { color: blue; }          /* de etiqueta                        */
.clase          { color: green; }         /* de clase (punto)                   */
#identificador  { color: red; }           /* de id (almohadilla)                */
div p           { color: purple; }        /* descendiente (espacio)             */
ul > li         { color: teal; }          /* hijo directo (>)                   */
h1, h2, h3      { font-family: serif; }   /* agrupado (coma)                    */
input[type="text"] { border: 1px solid; } /* de atributo ([ ])                  */
a:hover         { color: orange; }        /* pseudoclase de estado              */
li:first-child  { font-weight: bold; }    /* pseudoclase de posición            */
p::first-letter { font-size: 2em; }       /* pseudoelemento                     */
.aviso::before  { content: "⚠ "; }        /* pseudoelemento generador           */

/* ====================== TEXTO Y FUENTE ====================== */
.t {
  font-family: Arial, sans-serif;  /* tipo de letra con alternativas */
  font-size: 16px;                 /* tamaño                         */
  font-weight: bold;               /* grosor                         */
  font-style: italic;              /* cursiva                        */
  color: #333;                     /* color del texto                */
  text-align: justify;             /* alineación                     */
  line-height: 1.6;                /* interlineado                   */
  text-decoration: none;           /* sin subrayado                  */
  letter-spacing: 1px;             /* espaciado entre letras         */
  text-transform: capitalize;      /* Primera Letra En Mayúscula     */
  text-shadow: #999 1px 1px 2px;   /* sombra de texto                */
}

/* ====================== MODELO DE CAJA ====================== */
.c {
  box-sizing: border-box;          /* tamaño incluyendo padding+border */
  width: 320px;                    /* ancho del contenido              */
  height: 180px;                   /* alto del contenido               */
  padding: 16px;                   /* relleno interno                  */
  border: 2px solid #444;          /* grosor estilo color              */
  border-radius: 8px;              /* esquinas redondeadas             */
  margin: 24px auto;               /* margen externo (auto = centrar)  */
  overflow: hidden;                /* recorta el contenido que sobra   */
  outline: 1px dotted red;         /* contorno fuera del borde         */
}

/* ====================== DISPLAY Y DIMENSIONES ====================== */
.d1 { display: block; }            /* salto de línea, ancho completo  */
.d2 { display: inline; }           /* en línea, sin width/height      */
.d3 { display: inline-block; }     /* en línea PERO con width/height  */
.d4 { display: none; }             /* no se muestra ni ocupa espacio  */

/* ====================== FONDOS ====================== */
.f {
  background-color: #fafafa;
  background-image: url("img/fondo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* ====================== SOMBRA DE CAJA ====================== */
.s { box-shadow: 0 6px 12px rgba(0,0,0,0.25); }
```

### Ejercicios resueltos

🔥 CSS cae seguro en el examen. Estos ejercicios son del estilo que pondrá el profesor.

---

**Ejercicio 1 — Estilar una página entera con CSS interno.**
Crea una página con un título `<h1>`, dos párrafos y una lista. Pon el fondo de la página gris claro, el texto en Arial, los párrafos justificados y el `<h1>` centrado y de color azul marino.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejercicio 1</title>
  <style>
    /* El body es el padre de todo: lo que pongamos aquí se HEREDA */
    body {
      background-color: #eeeeee;        /* fondo gris claro          */
      font-family: Arial, sans-serif;   /* fuente heredada por todos */
      color: #333333;                   /* color de texto heredado   */
    }
    /* El h1 sobrescribe el color heredado y se centra */
    h1 {
      color: navy;          /* azul marino       */
      text-align: center;   /* título centrado   */
    }
    /* Los párrafos se justifican y se les da interlineado */
    p {
      text-align: justify;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Mi primera página con estilo</h1>
  <p>Primer párrafo de ejemplo con texto suficiente para ver la justificación.</p>
  <p>Segundo párrafo, que hereda la fuente y el color del body.</p>
  <ul>
    <li>Elemento uno</li>
    <li>Elemento dos</li>
  </ul>
</body>
</html>
```

**Explicación:** El `body` aporta fuente, color y fondo; gracias a la **herencia**, los párrafos y la lista usan esa fuente y color sin repetirlos. El `<h1>` define su **propio** `color`, así que no hereda el del body. `text-align` y `line-height` solo se aplican a los `<p>`.

---

**Ejercicio 2 — Tarjeta con sombra y bordes redondeados.**
Crea una "tarjeta" (`<div class="tarjeta">`) con un título y un texto. Debe tener fondo blanco, esquinas redondeadas, un padding interior cómodo, un ancho de 300px, estar centrada y tener sombra.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tarjeta</title>
  <style>
    body { background-color: #d0d0d0; font-family: Arial, sans-serif; }

    .tarjeta {
      box-sizing: border-box;              /* el ancho incluye padding y borde */
      width: 300px;                        /* ancho fijo de la tarjeta         */
      background-color: #ffffff;           /* fondo blanco                     */
      padding: 20px;                       /* relleno interno cómodo           */
      border: 1px solid #cccccc;           /* borde gris fino                  */
      border-radius: 12px;                 /* esquinas redondeadas             */
      margin: 40px auto;                   /* 40px arriba/abajo, centrada      */
      box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* sombra suave hacia abajo      */
    }
    .tarjeta h2 { color: navy; margin-top: 0; }
    .tarjeta p  { color: #555; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="tarjeta">
    <h2>Título de la tarjeta</h2>
    <p>Contenido de la tarjeta con sombra y bordes redondeados.</p>
  </div>
</body>
</html>
```

**Explicación:** `border-radius` redondea las esquinas; `box-shadow` con `0 8px 16px` desplaza la sombra 8px hacia abajo y la difumina 16px; `margin: 40px auto` centra la caja horizontalmente (`auto` reparte el margen izquierdo y derecho). `box-sizing: border-box` hace que la tarjeta mida exactamente 300px aunque tenga padding y borde.

---

**Ejercicio 3 — Aplicar selectores variados.**
En un mismo documento: todos los párrafos azules; un párrafo concreto (id `aviso`) en rojo; los elementos con clase `destacado` en negrita naranja; los `<li>` que estén dentro de un `<ul>` con viñeta cuadrada.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Selectores</title>
  <style>
    p              { color: blue; }                 /* selector de etiqueta */
    #aviso         { color: red; }                  /* selector de id       */
    .destacado     { color: orange; font-weight: bold; } /* selector de clase */
    ul > li        { list-style: square; }          /* hijo directo         */
    a:hover        { color: green; }                /* pseudoclase de estado */
  </style>
</head>
<body>
  <p>Párrafo normal (azul).</p>
  <p id="aviso">Párrafo de aviso (rojo, gana el id por especificidad).</p>
  <p class="destacado">Párrafo destacado (naranja y negrita).</p>
  <ul>
    <li>Viñeta cuadrada</li>
    <li class="destacado">Viñeta cuadrada y además destacada</li>
  </ul>
  <a href="#">Enlace: ponme el ratón encima.</a>
</body>
</html>
```

**Explicación:** El segundo párrafo está afectado por `p` (azul) y por `#aviso` (rojo); gana `#aviso` porque el **id tiene más especificidad** que la etiqueta. La clase `.destacado` se reutiliza en un `<p>` y en un `<li>` (las clases se repiten). `ul > li` solo afecta a los `<li>` hijos directos de `<ul>`. `a:hover` cambia el color solo mientras el ratón está encima.

---

**Ejercicio 4 — Jugar con el modelo de caja.**
Crea una caja de 200x100 px con padding 30px, margen 50px y borde de 3px. Calcula su tamaño real y luego conviértela a `box-sizing: border-box` para que mida exactamente 200px de ancho.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Modelo de caja</title>
  <style>
    .caja-a {
      width: 200px;
      height: 100px;
      padding: 30px;
      border: 3px solid darkblue;
      margin: 50px;
      background-color: lightblue;
    }
    /* Ancho real de .caja-a:
       50 + 3 + 30 + 200 + 30 + 3 + 50 = 366px de espacio total ocupado
       (de los cuales el "borde visible" mide 3+30+200+30+3 = 266px)      */

    .caja-b {
      box-sizing: border-box;  /* AHORA width incluye padding y borde */
      width: 200px;            /* mide EXACTAMENTE 200px               */
      height: 100px;
      padding: 30px;
      border: 3px solid darkred;
      margin: 50px;
      background-color: pink;
    }
  </style>
</head>
<body>
  <div class="caja-a">Caja A (content-box)</div>
  <div class="caja-b">Caja B (border-box)</div>
</body>
</html>
```

**Explicación:** En `.caja-a` (modo `content-box` por defecto) `width: 200px` es solo el contenido; el padding (30+30) y el borde (3+3) **se suman**, así que la parte visible mide 266px de ancho, y con los márgenes ocupa 366px. En `.caja-b`, `box-sizing: border-box` hace que esos 200px **ya incluyan** padding y borde: la caja mide exactamente 200px y solo el contenido se encoge.

---

**Ejercicio 5 — Menú de navegación con `:hover`.**
Crea un menú horizontal de 4 enlaces. Quita el subrayado, ponlos en cajas con fondo, y al pasar el ratón por encima que cambien de color de fondo.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Menú con hover</title>
  <style>
    .menu a {
      display: inline-block;        /* en línea PERO admite padding/width */
      padding: 10px 20px;           /* caja cómoda para clicar            */
      margin-right: 4px;            /* separación entre enlaces           */
      background-color: #34495e;    /* fondo oscuro por defecto           */
      color: white;                 /* texto blanco                      */
      text-decoration: none;        /* SIN subrayado                     */
      border-radius: 4px;           /* esquinas ligeramente redondeadas   */
    }
    /* Pseudoclase :hover -> estilo SOLO cuando el ratón pasa por encima */
    .menu a:hover {
      background-color: #e67e22;    /* el fondo cambia a naranja          */
    }
  </style>
</head>
<body>
  <nav class="menu">
    <a href="#">Inicio</a>
    <a href="#">Productos</a>
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
  </nav>
</body>
</html>
```

**Explicación:** `display: inline-block` coloca los enlaces uno al lado de otro pero permitiéndoles tener `padding` y `border-radius` (un `inline` puro ignoraría esos tamaños). `text-decoration: none` elimina el subrayado típico de los enlaces. La regla `.menu a:hover` solo se activa **mientras el ratón está encima**, cambiando el fondo a naranja.

---

**Ejercicio 6 — Colores, transparencia y fondo con imagen.**
Crea una caja con una imagen de fondo que no se repita y cubra toda la caja, y encima un cuadro de texto semitransparente usando `rgba`.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Fondos y transparencia</title>
  <style>
    .hero {
      width: 100%;
      height: 300px;
      background-image: url("imagenes/paisaje.jpg");
      background-repeat: no-repeat;     /* la imagen NO se repite      */
      background-size: cover;           /* cubre toda la caja          */
      background-position: center;      /* centrada                    */
      /* La caja es flexible (100%) en vez de un ancho fijo en px      */
    }
    .cuadro {
      width: 250px;
      padding: 20px;
      margin: 0 auto;                   /* centrado horizontal         */
      background-color: rgba(0, 0, 0, 0.5); /* negro al 50% -> se ve el fondo detrás */
      color: white;
      border: 2px solid hsla(0, 0%, 100%, 0.8); /* borde blanco casi opaco */
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="hero">
    <div class="cuadro">
      <p>Texto sobre fondo semitransparente.</p>
    </div>
  </div>
</body>
</html>
```

**Explicación:** `background-image` con `url()` carga la imagen; `no-repeat` evita el mosaico; `cover` la escala para cubrir toda la caja sin deformarla; `center` la centra. El cuadro usa `rgba(0,0,0,0.5)`: negro con **opacidad 0.5**, así se ve la imagen a través de él. El borde usa `hsla` con alfa `0.8`. Se usa `width: 100%` en `.hero` en lugar de un tamaño fijo para que la caja sea fluida.

---

### Visuales a revisar

- [📺 `04_Tema2_Intro_CSS.md`, aprox. 00:02] — diapositiva inicial: qué es CSS, *Cascading Style Sheets*, comparación HTML (contenido) vs CSS (apariencia).
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 00:12] — imagen sacada de internet con el esquema "contenido (HTML) + apariencia (CSS) → navegador".
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 00:20] — línea temporal de versiones: CSS1 (1996), CSS3 (working draft 2000), CSS4 (2011, sin soporte comercial).
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 00:30] — anatomía de una regla: selector, llaves, declaración (`propiedad: valor;`), punto y coma obligatorio; ejemplo con `p`.
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 00:42] — diapositiva de las medidas de CSS (px, em, cm, mm, pt, picas, in) y notación funcional (`rgb()`, `url()`, `calc()`).
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 00:50] — propiedad abreviada de `margin` (4 valores vs valor único, sentido de las agujas del reloj).
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 00:58] — selector universal `*` y comentarios `/* */`.
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 01:05] — las 3 formas de incluir CSS: inline, interno con `<style>`, externo con `<link>`/`@import` (recuadro rojo sobre el interno).
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 01:18] — diagrama de la cascada: orígenes navegador < usuario < autor; ejemplo de `!important`.
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 01:30] — herencia: árbol padre/hijo/nieto y cómo cae el estilo.
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 01:45] — ejercicios de clase abiertos en el editor: `body`/`p`/`h3` con colores por nombre; ejercicio del id `aviso`; selector universal; clase vs id (ejercicio 6).
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 01:55] — web de paletas de colores: tonalidades en hex, rgb, hsl, con transparencia; ejemplos `rgba`/`hsla`.
- [📺 `04_Tema2_Intro_CSS.md`, aprox. 02:00] — chuletas (*cheat sheets*) de HTML y de CSS en dos hojas, permitidas en el examen.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 00:05] — imagen del **box model** de la W3C: content, padding, border, margin.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 00:12] — desglose de la clase `.box` (300x200 + padding 10 + border 1 + margin 15 → 352px reales).
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 00:20] — elemento de bloque vs elemento de línea; ejemplo `<p>` (bloque) y `<strong>`/`titanic` (línea).
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 00:28] — valores de `border-style` (dotted, dashed, solid, double) y tamaños (thin, medium, thick).
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 00:38] — `padding` vs `margin`; propiedad global y por lados (top/right/bottom/left).
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 00:48] — `outline`: ejemplo `green dotted thick`, dibujado por fuera del borde; comparación con `border`.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 00:55] — `overflow`: ejemplos con `hidden` y `scroll` (máscaras).
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 01:05] — tipos de posicionamiento (normal, relativo, absoluto, fijo, flotante) — se trata en el tema de posicionamiento.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 01:35] — diapositiva de unidades: %, in, cm, mm, pt, pc, em, ex, ch; comparación px vs relativas.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 01:42] — propiedades `font-*` (family, size, style, variant, weight) y la abreviada `font`.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 01:48] — Google Fonts en el navegador: elegir fuente, *get font*, *get embed code*; `@font-face`.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 01:55] — propiedades de texto: `color`, `direction`, `letter-spacing`, `line-height`, `text-align`, `text-indent`, `text-shadow`.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 02:00] — pseudoelementos `::first-line` y `::first-letter`; estilo de enlaces (`:link`, `:visited`, `:hover`, `:active`) con `text-decoration` y `background-color`.
- [📺 `05_Tema2_Intro_CSS_parte2.md`, aprox. 02:05] — ejercicios resueltos: medidas relativas (1em/1ex/1ch), caja con todas las propiedades, bordes `dotted`/`dashed`, fuentes web, listas con imagen, tablas y formulario estilado con `border-radius`.

### Cubierto en
- Clase 04 (Tema 2, Intro CSS parte 1) — `04_Tema2_Intro_CSS.md`
- Clase 05 (Tema 2, Intro CSS parte 2) — `05_Tema2_Intro_CSS_parte2.md`

### Pitfalls y buenas prácticas

**Errores comunes (pitfalls):**

- **Olvidar el punto y coma.** Cada declaración termina en `;`. Si lo olvidas, la siguiente declaración puede no aplicarse. `color: red` → mal; `color: red;` → bien.
- **Confundir el punto de la clase y la almohadilla del id.** En el **CSS** la clase lleva `.` y el id lleva `#`; en el **HTML** los atributos `class` e `id` van **sin** esos símbolos. Es un error clásico que hace que "no se aplique nada".
- **Confundir CSS con HTML.** Son dos lenguajes distintos con sintaxis distinta. CSS no se parece a HTML ni a JavaScript.
- **Pensar que `width` es el tamaño total.** No: hay que sumar `padding` + `border` + `margin`. Una caja de `width: 300px` puede ocupar 352px reales. Solución: usar `box-sizing: border-box`.
- **Repetir una propiedad por error dentro de una regla.** Gana siempre la **última** (por la cascada). Si ves un color que "no cambia", revisa si lo has declarado dos veces.
- **No darse cuenta de que el problema es la herencia/cascada.** "Llevo media hora y no encuentro qué pasa": muchas veces el CSS se está aplicando *bien*, pero te has equivocado en un id o una clase y el estilo cae por herencia desde otro sitio.
- **Abusar de `!important`.** Rompe la cascada y hace el CSS inmantenible. Si todo es importante, nada lo es. Si se puede hacer sin él, hazlo sin él.
- **Abusar del CSS en línea (`style="..."`).** Es el menos flexible, no se reutiliza y mezcla contenido con presentación.
- **Olvidar el `padding`.** Es "el gran olvidado": el `margin` se pone solo, pero el `padding` (separación interna contenido-borde) suele faltar y la web queda apretada.
- **Confiar en `overflow: hidden`/`scroll` como solución.** Ninguna de las dos queda bien, sobre todo en móvil. Si te aparece overflow, replantea el diseño.
- **Esperar estilo de una etiqueta vacía.** Si una etiqueta no tiene contenido, no se ve nada aunque tenga reglas: para ver el estilo tiene que haber contenido.
- **Atarse a `px` para todo.** Una web con tamaños fijos en píxeles no se adapta a las distintas resoluciones. `px` está bien para *aprender*, pero el objetivo es usar unidades relativas.

**Buenas prácticas:**

- **CSS externo siempre que sea posible.** Un fichero `.css` enlazado con `<link>`: tocas un fichero y actualizas todo el proyecto (*divide y vencerás*).
- **Una declaración por línea.** Aunque CSS ignore los saltos de línea, así es legible y fácil de depurar.
- **Comentar el CSS** con `/* ... */`: cabecera del fichero (web, versión, autor, fecha) y comentarios por secciones.
- **Nombres significativos** para clases e ids: que digan qué son (`.tarjeta`, `#aviso`), no `.cosa1`.
- **Acordar convenciones de equipo** antes de empezar: orden de las reglas (alfabético o por tipo de propiedad: posición → display/caja → fuente → color → fondos/bordes), estándares de código y de nombres.
- **Usar clases para lo reutilizable** y reservar los ids para identificar elementos únicos.
- **Aprovechar la herencia** de forma inteligente: define en el `body` lo común (fuente, color base) y solo sobrescribe lo que cambia. Ahorra código.
- **Empezar con `px`** para coger soltura y ver rápido cómo se coloca todo; **migrar después** a `%`, `em`, `rem`, `vw`/`vh` para un diseño fluido.
- **Usar `box-sizing: border-box`** para que las cajas midan lo que dices y los cálculos sean predecibles.
- **Validar el CSS** con el validador de la W3C (admite URL o subida de fichero) y plantearse un *reset* / *normalize.css* para neutralizar los estilos por defecto del navegador.
- **Tener a mano la chuleta de CSS** (*cheat sheet*): es un resumen de casi todas las reglas y está permitida en exámenes y prácticas.
- **Separar HTML y CSS** desde el principio: más fácil de mantener y de encontrar errores que tenerlo todo entremezclado.

---

## 4. CSS avanzado y Flexbox

> **TL;DR.** CSS3 amplió enormemente a CSS 2.1: animaciones, transiciones, media queries, bordes redondeados, transparencias y, sobre todo, **Flexbox**, un modelo de cajas *flexible* que coloca los elementos sobre dos ejes (principal y transversal) y reparte el espacio de forma automática. En este tema repasamos primero el **posicionamiento** (`position` y `z-index`) y `float`/`clear` (legado), entramos **a fondo en Flexbox** (el contenedor con `display:flex` y todas sus propiedades, y las propiedades de los hijos), echamos un vistazo a **Grid**, **transiciones**, **transformaciones**, **animaciones con `@keyframes`**, **variables CSS** y **media queries**. 🔥 Flexbox cae seguro en el examen: el año pasado uno de los dos ejercicios a elegir era maquetar una web con Flexbox.

### Conceptos clave

- **CSS3 vs navegadores.** CSS3 evoluciona por un lado y los navegadores por otro: una propiedad puede existir en la especificación pero no estar implementada (o estarlo a medias) en todos los navegadores. Por eso hay que **probar siempre las prácticas en varios navegadores**.
- **Vendors / prefijos de fabricante.** Prefijos que cada navegador añade a propiedades aún no estandarizadas: `-webkit-` (Chrome, Safari), `-moz-` (Firefox), `-o-` (Opera), `-ms-` (Internet Explorer / Edge). Hoy, con frameworks (Bootstrap, Tailwind) esto se gestiona solo.
- **Web semántica (HTML5).** Etiquetas `header`, `nav`, `article`, `section`, `aside`, `footer`. Semánticamente indican *qué* es cada zona, pero técnicamente **son `div`** (cajas). Se les pueden añadir clases, IDs, pseudoclases, etc.
- **Posicionamiento (`position`).** Saca un elemento del flujo normal o lo desplaza: `static`, `relative`, `absolute`, `fixed`, `sticky`, controlado con `top`/`right`/`bottom`/`left` y apilado con `z-index`.
- **`float` / `clear`.** Modelo antiguo de maquetación: flotar cajas a izquierda/derecha. Hoy es **legado**, lo sustituye Flexbox.
- **Flexbox.** Modelo de cajas *flexible* basado en **dos ejes**: el **eje principal** (*main axis*) y el **eje transversal** (*cross axis*). Hay un **contenedor flex** (*flex container*) y dentro **ítems flex** (*flex items*). Se activa con `display: flex` o `display: inline-flex`.
- **Grid.** Sistema de rejilla bidimensional (filas *y* columnas a la vez).
- **Transiciones / transformaciones / animaciones.** `transition` interpola cambios de propiedad; `transform` mueve, rota o escala; `@keyframes` + `animation` crean animaciones por fotogramas.
- **Variables CSS.** Valores reutilizables: se declaran con `--nombre` y se usan con `var(--nombre)`.
- **Media queries.** Reglas que aplican CSS según el dispositivo (sobre todo el **ancho de pantalla**), para que la web se adapte (diseño *responsive*).

---

### Explicación detallada

#### 4.1. De CSS 2.1 a CSS3: qué cambió

CSS3 no es "un CSS nuevo", es CSS 2.1 al que se le han ido **añadiendo módulos**: animaciones, transiciones, media queries, Flexbox, Grid, bordes redondeados (`border-radius`), transparencias (`opacity`, `rgba`), degradados, sombras... y siguen apareciendo cosas nuevas constantemente.

El problema: **la especificación va por delante de los navegadores**. Una propiedad puede estar definida en CSS3 pero un navegador concreto todavía no la entiende, o la entiende solo con su prefijo de fabricante. Por eso el profesor insiste todo el curso: **abre tus ejercicios en Chrome, Edge, Firefox...** y comprueba que se ven igual.

Los **vendors** (prefijos) son la solución antigua a ese desfase:

```css
/* La misma propiedad escrita con los prefijos de cada navegador. */
/* Se ponen ANTES de la versión estándar, y la estándar la última. */
.caja {
  -webkit-box-shadow: 0 0 10px black; /* Chrome y Safari (motor WebKit) */
     -moz-box-shadow: 0 0 10px black; /* Firefox (motor Mozilla)       */
       -o-box-shadow: 0 0 10px black; /* Opera                         */
      -ms-box-shadow: 0 0 10px black; /* Internet Explorer / Edge      */
          box-shadow: 0 0 10px black; /* Versión estándar (la última)  */
}
```

> ❓ El profesor cita los prefijos como `-webkit-`, `-moz-`, `-o-` y para IE menciona "MMS o el filter"; lo reconstruyo como `-ms-` y la propiedad `filter`, que es lo estándar. Hoy, con frameworks, **no escribes prefijos a mano**.

##### Web semántica de HTML5

CSS va de la mano de la **estructura semántica**. HTML5 introdujo etiquetas que dan *sentido* a las zonas de la página:

```html
<!-- Estructura semántica típica de una página HTML5. -->
<!-- OJO: todas estas etiquetas son, técnicamente, DIVs (cajas). -->
<body>
  <header>Cabecera: logo, título...</header>
  <nav>Barra de navegación: menú de enlaces</nav>
  <main>
    <article>La noticia / el contenido principal que "vendemos"</article>
    <aside>Menú complementario o contenido lateral</aside>
  </main>
  <footer>Pie de página: avisos legales, contacto...</footer>
</body>
```

CMS como **WordPress** o **Moodle** se basan en esta estructura. Cualquier web "seria" (un hospital, un ayuntamiento, un colegio) intenta mantenerla porque detrás lleva un framework que la organiza así. A estas etiquetas les puedes añadir cualquier selector CSS (clases, IDs, pseudoclases...).

---

#### 4.2. Posicionamiento: la propiedad `position`

Antes de Flexbox, el posicionamiento se hacía con `position` y con `float`. Conviene conocerlo porque sigue siendo útil (por ejemplo, para colocar un *badge*, un menú fijo o un modal).

La propiedad `position` cambia **cómo se coloca un elemento respecto al flujo normal del documento**. Acepta 5 valores. Cuatro de ellos se complementan con `top`, `right`, `bottom`, `left` (desplazamientos).

##### `position: static` (valor por defecto)

```css
/* static: el elemento sigue el flujo normal. Es el valor por defecto. */
/* top/right/bottom/left NO tienen ningún efecto aquí. */
.caja {
  position: static;
}
```
**Efecto visual:** el elemento se coloca donde le toca según el orden del HTML. No se mueve.

##### `position: relative`

```css
/* relative: el elemento se coloca en su sitio normal, */
/* pero LUEGO se desplaza respecto a esa posición original. */
.caja {
  position: relative;
  top: 20px;   /* baja 20px desde donde estaría */
  left: 30px;  /* se mueve 30px hacia la derecha */
}
```
**Efecto visual:** el elemento se desplaza, **pero el hueco que ocupaba sigue reservado** (los demás elementos no se recolocan). 🔥 Muy importante: `position: relative` se usa muchísimo como **ancla** para hijos con `position: absolute`.

##### `position: absolute`

```css
/* absolute: el elemento SALE del flujo normal (deja de ocupar hueco). */
/* Se posiciona respecto al ANCESTRO posicionado más cercano */
/* (el primer padre con position relative/absolute/fixed/sticky). */
/* Si no hay ninguno, se posiciona respecto a <html>. */
.contenedor {
  position: relative; /* <- ancla para el hijo absolute */
}
.badge {
  position: absolute;
  top: 0;
  right: 0;   /* pegado a la esquina superior derecha del contenedor */
}
```
**Efecto visual:** el elemento "flota" colocado en coordenadas exactas y **no reserva hueco**: los demás elementos se comportan como si no existiera.

##### `position: fixed`

```css
/* fixed: sale del flujo y se posiciona respecto a la VENTANA del navegador. */
/* No se mueve al hacer scroll: queda "clavado" en pantalla. */
.boton-arriba {
  position: fixed;
  bottom: 20px;
  right: 20px; /* botón siempre visible abajo a la derecha */
}
```
**Efecto visual:** el elemento queda fijo en la pantalla aunque hagas scroll. Útil para barras de navegación fijas, botones flotantes, etc.

##### `position: sticky`

```css
/* sticky: mezcla de relative y fixed. */
/* Se comporta como relative hasta que llega a un umbral de scroll, */
/* y entonces se queda "pegado" como fixed. */
.menu {
  position: sticky;
  top: 0; /* se pega arriba cuando el scroll llega a él */
}
```
**Efecto visual:** una cabecera que baja con el contenido y, al llegar arriba del todo, se queda pegada.

##### `z-index`: el apilamiento

```css
/* z-index controla qué elemento queda POR ENCIMA de otro */
/* cuando se solapan. Solo funciona en elementos posicionados */
/* (position distinto de static). Número mayor = más arriba. */
.fondo  { position: absolute; z-index: 1; }
.modal  { position: absolute; z-index: 100; } /* se ve por encima del fondo */
```
**Efecto visual:** controla la "profundidad". El elemento con `z-index` mayor tapa al de `z-index` menor.

---

#### 4.3. `float` y `clear` (modelo legado)

`float` saca un elemento del flujo y lo "flota" a izquierda o derecha; el contenido que sigue lo rodea. Era **la** forma de maquetar columnas antes de Flexbox.

```css
/* float: flota el elemento a un lado; el resto del contenido lo rodea. */
.imagen {
  float: left;   /* la imagen se va a la izquierda, el texto la rodea */
  margin-right: 15px;
}

/* clear: impide que un elemento se coloque al lado de elementos flotados; */
/* lo "baja" hasta que no haya floats a su lado. */
.pie {
  clear: both;   /* both = ni a la izquierda ni a la derecha */
}
```
**Efecto visual de `float`:** la caja se pega a un lado y lo demás la rodea.
**Efecto visual de `clear`:** "rompe" el rodeo y obliga a empezar debajo de los flotados.

> 🔥 Para examen: hoy `float` se considera **legado** y **se sustituye por Flexbox**. El profesor dice literalmente que el posicionamiento relativo/absoluto/flotante "está bien haberlo visto", pero que Flexbox "le da un cambio tremendo, ya se usa más".

---

#### 4.4. Flexbox a fondo 🔥

Esta es **la parte estrella del tema**. Flexbox es un **modelo de cajas flexible**: el modelo de caja de siempre, pero pensado para que el contenido **se adapte al dispositivo** según unas normas que tú indicas, aprovechando y rellenando el espacio lo mejor posible. Evita desbordamientos (*overflows*) que antes había que controlar a mano, y permite incluso **cambiar el orden de los elementos en tiempo de ejecución**.

##### La estructura: contenedor, ítems y dos ejes

Flexbox se basa en **dos ejes**, como una tabla pero **sin ser una tabla**:

- **Eje principal** (*main axis*): el sentido en el que se colocan los ítems. Va de **main-start** (inicio) a **main-end** (fin).
- **Eje transversal** (*cross axis*): el eje perpendicular al principal. Va de **cross-start** a **cross-end**.

Y dos piezas:

- **Flex container** (contenedor flex): el padre al que le pones `display: flex`.
- **Flex items** (ítems flex): cada hijo directo del contenedor (un párrafo, una imagen, un `div`...).

```
                 cross-start
   main-start  ┌───┬───┬───┐  main-end
       ──────► │ 1 │ 2 │ 3 │  ──────►   (eje principal: horizontal por defecto)
               └───┴───┴───┘
                  cross-end
```

##### Paso 1: activar Flexbox con `display: flex` / `display: inline-flex`

Igual que cualquier elemento CSS, un contenedor flex puede ser **de bloque** o **de línea**:

```css
/* display: flex -> el contenedor es un ELEMENTO DE BLOQUE: */
/* ocupa todo el ancho disponible de la página. */
.contenedor-bloque {
  display: flex;
}

/* display: inline-flex -> el contenedor es un ELEMENTO DE LÍNEA: */
/* ocupa solo lo necesario para su contenido, y si no cabe en una */
/* línea, intenta colocarse como pueda (salto de línea). */
.contenedor-linea {
  display: inline-flex;
}
```

```html
<!-- HTML de referencia que usaremos en TODOS los ejemplos: -->
<!-- un div con 4 párrafos. -->
<div class="contenedor">
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>
  <p>Tercer párrafo</p>
  <p>Cuarto párrafo</p>
</div>
```

**Efecto visual:** en cuanto pones `display: flex`, los 4 párrafos (que normalmente se apilarían uno debajo de otro, porque `<p>` es de bloque) **se colocan en fila**. Con `inline-flex` pasa lo mismo pero el contenedor solo ocupa lo justo. Recuerda: *Flexbox no es magia*, hace lo que el espacio le permita.

##### Paso 2: `flex-direction` — la dirección del eje principal

Elige **en qué dirección** se colocan los ítems. 4 valores:

```css
.contenedor {
  display: flex;
  /* row: por defecto. En fila, de IZQUIERDA a DERECHA. */
  flex-direction: row;

  /* row-reverse: en fila, de DERECHA a IZQUIERDA. */
  /* flex-direction: row-reverse; */

  /* column: en columna, de ARRIBA a ABAJO. */
  /* flex-direction: column; */

  /* column-reverse: en columna, de ABAJO a ARRIBA. */
  /* flex-direction: column-reverse; */
}
```
**Efecto visual:** con `column-reverse`, los párrafos empiezan abajo y suben hacia arriba (el "Primer párrafo" queda abajo del todo). `row` es lo mismo que no poner nada.

##### Paso 3: `flex-wrap` — ¿una línea o varias?

```css
.contenedor {
  display: flex;
  /* nowrap: por defecto. Todos los ítems en UNA SOLA línea, */
  /* aunque tengan que encogerse o se corten. */
  flex-wrap: nowrap;

  /* wrap: si no caben en una línea, SALTAN a la siguiente. */
  /* flex-wrap: wrap; */

  /* wrap-reverse: igual que wrap, pero las líneas se apilan al revés. */
  /* flex-wrap: wrap-reverse; */
}
```
**Efecto visual:** con `wrap`, al reducir el ancho los ítems se van repartiendo en varias filas. Con `nowrap` se aprietan en una sola y no saltan. 🔥 `flex-wrap: wrap` es clave para **galerías responsive**.

##### Paso 4: `flex-flow` — atajo de `flex-direction` + `flex-wrap`

```css
.contenedor {
  display: flex;
  /* flex-flow es la versión RESUMIDA de las dos anteriores. */
  /* Hay que poner los DOS valores (es obligatorio). */
  /* Aquí NO importa el orden: no hay ambigüedad. */
  flex-flow: row wrap;
  /* equivale a:  flex-direction: row;  flex-wrap: wrap; */
}
```
**Efecto visual:** ninguno nuevo; es solo una forma corta de escribir lo mismo.

##### Paso 5: `justify-content` — alineación en el EJE PRINCIPAL

Coloca/justifica los ítems a lo largo del eje principal y decide dónde van los espacios sobrantes:

```css
.contenedor {
  display: flex;
  /* flex-start: por defecto. Pegados al inicio del eje principal. */
  justify-content: flex-start;

  /* flex-end: pegados al final. */
  /* justify-content: flex-end; */

  /* center: centrados en el eje principal. */
  /* justify-content: center; */

  /* space-between: primero y último pegados a los bordes, */
  /* el espacio sobrante se reparte ENTRE los ítems. */
  /* justify-content: space-between; */

  /* space-around: cada ítem tiene el mismo espacio a su alrededor. */
  /* justify-content: space-around; */
}
```
**Efecto visual:** con `center` los ítems quedan en el centro con hueco a izquierda y derecha; con `space-between`, el primero pegado a la izquierda, el último a la derecha y el hueco repartido entre medias.

##### Paso 6: `align-items` — alineación en el EJE TRANSVERSAL

```css
.contenedor {
  display: flex;
  height: 300px; /* hace falta altura para apreciar el efecto */
  /* stretch: por defecto. Los ítems se estiran para ocupar todo el cross axis. */
  align-items: stretch;

  /* flex-start: alineados al inicio del eje transversal (arriba si la fila es horizontal). */
  /* align-items: flex-start; */

  /* flex-end: alineados al final (abajo). */
  /* align-items: flex-end; */

  /* center: centrados en el eje transversal. */
  /* align-items: center; */

  /* baseline: alineados según la línea base del texto. */
  /* align-items: baseline; */
}
```
**Efecto visual:** con `align-items: center` los ítems quedan centrados verticalmente (si la fila es horizontal). 🔥 `justify-content: center` + `align-items: center` = **centrado perfecto**.

##### Paso 7: `align-content` — alineación de VARIAS LÍNEAS

Solo tiene efecto cuando hay **varias líneas** (es decir, con `flex-wrap: wrap`):

```css
.contenedor {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  /* Distribuye el espacio sobrante ENTRE LAS LÍNEAS (no entre los ítems). */
  align-content: flex-start;   /* líneas pegadas al inicio */
  /* align-content: flex-end;     líneas pegadas al final   */
  /* align-content: center;      líneas centradas          */
  /* align-content: space-between; */
  /* align-content: space-around;  */
  /* align-content: stretch;      por defecto: las líneas se estiran */
}
```
**Efecto visual:** si tienes 3 filas de tarjetas y sobra altura, `align-content` decide si esas filas se pegan arriba, abajo, al centro o se reparten.

> 🔥 Diferencia clave para examen: `align-items` alinea **los ítems dentro de su línea**; `align-content` alinea **las líneas entre sí** (y necesita `wrap`).

##### Paso 8: `gap` — separación entre ítems

```css
.contenedor {
  display: flex;
  flex-wrap: wrap;
  /* gap: hueco entre ítems, sin necesidad de margin. */
  gap: 20px;            /* 20px de hueco en filas y columnas */
  /* gap: 20px 10px;      20px entre filas, 10px entre columnas */
}
```
**Efecto visual:** separa los ítems de forma limpia, sin tener que pelearte con `margin` y los bordes.

##### Propiedades de los HIJOS (los flex items)

Hasta aquí, todo era del **contenedor**. Estas se ponen en **cada ítem**:

**`flex-basis` — tamaño inicial del ítem**

```css
.contenedor p {
  /* flex-basis: tamaño INICIAL del ítem en el eje principal, */
  /* antes de repartir el espacio libre. */
  flex-basis: 25%;   /* cada párrafo parte de un 25% del ancho */
  /* flex-basis: auto;      lo determinan width/height si los hay */
  /* flex-basis: content;   lo determina el contenido (por defecto) */
  /* flex-basis: 100px;     una medida absoluta también vale */
}
```
**Efecto visual:** con `25%` y 4 párrafos, ocupan el 100% del ancho. Con `15%`, ocupan 15% cada uno y **sobra espacio**. Es el tamaño de partida.

**`flex-grow` — factor de expansión (crecimiento)**

```css
.contenedor p {
  /* flex-grow: cuánto CRECE un ítem para repartirse el espacio sobrante. */
  /* Es un número entero, funciona como un MULTIPLICADOR/proporción. */
  flex-grow: 1;   /* todos crecen por igual */
}
.contenedor p.mayor {
  flex-grow: 2;   /* este crece el DOBLE que los de flex-grow: 1 */
}
```
**Efecto visual:** el párrafo con `flex-grow: 2` ocupa el doble de espacio sobrante que los de `flex-grow: 1`. Si pones `0`, el ítem no crece.

**`flex-shrink` — factor de compresión**

```css
.contenedor p {
  /* flex-shrink: lo contrario de grow. Cuánto SE ENCOGE un ítem */
  /* cuando NO cabe el contenido. Número entero. */
  flex-shrink: 1;   /* por defecto: todos se encogen por igual */
}
.contenedor p.menor {
  flex-shrink: 0;   /* este NO se encoge (mantiene su tamaño) */
}
```
**Efecto visual:** cuando el espacio se queda corto, los ítems con `flex-shrink` mayor ceden más; con `0`, ese ítem se queda firme y son los demás los que se aprietan.

**`flex` — atajo de `grow` + `shrink` + `basis`**

```css
.contenedor p {
  /* flex es la versión RESUMIDA. AQUÍ EL ORDEN SÍ IMPORTA: */
  /* flex: <grow> <shrink> <basis>; */
  flex: 1 1 200px;
  /* equivale a:  flex-grow: 1;  flex-shrink: 1;  flex-basis: 200px; */

  /* atajos habituales: */
  /* flex: 1;      ->  1 1 0   (crece y se encoge, base 0)  */
  /* flex: auto;   ->  1 1 auto                              */
  /* flex: none;   ->  0 0 auto (ni crece ni se encoge)      */
}
```
**Efecto visual:** ninguno nuevo; controla los tres comportamientos de golpe. 🔥 `flex: 1` en varios ítems = todos del mismo tamaño repartiéndose el ancho.

**`align-self` — alinear UN solo ítem en el eje transversal**

```css
.contenedor {
  display: flex;
  align-items: flex-start; /* casi todos arriba... */
  height: 300px;
}
.contenedor p.especial {
  /* align-self sobreescribe align-items SOLO para este ítem. */
  align-self: center;   /* ...pero este queda centrado */
  /* valores: auto | flex-start | flex-end | center | baseline | stretch */
}
```
**Efecto visual:** un solo ítem rompe la alineación común del contenedor.

**`order` — cambiar el orden visual**

```css
.contenedor p {
  /* order: cambia el ORDEN en que se muestran los ítems, */
  /* sin tocar el HTML. Por defecto vale 0. Admite negativos. */
  order: 0;
}
.contenedor p.primero {
  order: -1;   /* este ítem se va al principio (antes que los de order 0) */
}
.contenedor p.ultimo {
  order: 1;    /* este se va al final (después que los de order 0) */
}
```
**Efecto visual:** con `order: -1` el cuarto párrafo del HTML aparece el primero en pantalla. Es útil para **reordenar en tiempo de ejecución** con JavaScript/PHP, aunque normalmente programas el HTML en el orden que quieres.

---

#### 4.5. CSS Grid (vistazo)

Mientras Flexbox organiza en **un eje** (fila *o* columna), **Grid** organiza en **dos a la vez** (filas *y* columnas), como una rejilla.

```css
.rejilla {
  display: grid;
  /* 3 columnas: la del medio el doble de ancha que las laterales. */
  grid-template-columns: 1fr 2fr 1fr;
  /* 2 filas de alturas concretas. */
  grid-template-rows: 100px 300px;
  /* gap también funciona en grid. */
  gap: 15px;
}
```

```css
/* grid-area permite nombrar zonas y colocar los hijos por nombre. */
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "cabecera cabecera"
    "menu     contenido"
    "pie      pie";
}
.layout header { grid-area: cabecera; }
.layout nav    { grid-area: menu; }
.layout main   { grid-area: contenido; }
.layout footer { grid-area: pie; }
```
**Efecto visual:** colocas el `header` ocupando las dos columnas de arriba, el `nav` y el `main` en la fila de en medio, y el `footer` abajo ocupando todo.

> ❓ La transcripción no desarrolla Grid (el profesor se centra en Flexbox); lo incluyo como `[reconstrucción]` por completitud, ya que es el complemento natural de Flexbox.

---

#### 4.6. Transiciones (`transition`)

```css
.boton {
  background: steelblue;
  /* transition: interpola (anima suavemente) el cambio de una propiedad. */
  /* sintaxis: transition: <propiedad> <duración> <tipo> <retardo>; */
  transition: background 0.3s ease-in-out;
}
.boton:hover {
  background: darkorange; /* el cambio NO es brusco: tarda 0.3s en hacerse */
}
```
**Efecto visual:** al pasar el ratón, el botón cambia de color de forma suave en 0,3 segundos en vez de instantáneamente.

---

#### 4.7. Transformaciones (`transform`)

```css
.caja {
  /* translate: mueve el elemento (x, y) sin afectar al flujo. */
  transform: translate(50px, 20px);
  /* rotate: rota el elemento. */
  /* transform: rotate(45deg); */
  /* scale: escala (agranda/encoge). 1 = tamaño normal. */
  /* transform: scale(1.5); */
  /* se pueden combinar varias: */
  /* transform: translate(10px, 0) rotate(15deg) scale(1.2); */
}
```
**Efecto visual:** `translate` desplaza, `rotate` gira, `scale` agranda o encoge. Muy usado junto a `transition` y `:hover`.

---

#### 4.8. Animaciones (`@keyframes` + `animation`)

```css
/* 1) Se define la animación con @keyframes: los "fotogramas". */
@keyframes aparecer {
  from { opacity: 0; transform: translateY(-30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* También se pueden usar porcentajes para más fotogramas: */
@keyframes latido {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* 2) Se aplica con la propiedad animation: */
.titulo {
  /* animation: <nombre> <duración> <tipo> <retardo> <repeticiones>; */
  animation: aparecer 0.6s ease-out;
}
.corazon {
  animation: latido 1s ease-in-out infinite; /* infinite = bucle */
}
```
**Efecto visual:** el `.titulo` entra desvaneciéndose desde arriba; el `.corazon` "late" en bucle infinito.

---

#### 4.9. Variables CSS (`--var` y `var()`)

```css
/* Las variables se declaran normalmente en :root (alcance global). */
:root {
  --color-principal: #2c3e50;
  --color-acento: #e67e22;
  --espaciado: 16px;
}

/* Se usan con la función var(). */
.boton {
  background: var(--color-principal);
  padding: var(--espaciado);
}
.boton:hover {
  background: var(--color-acento);
}
```
**Efecto visual:** ninguno directo, pero si cambias `--color-principal` en un sitio, **cambia en toda la web**. Evita repetir valores y facilita el mantenimiento.

---

#### 4.10. Media queries (diseño responsive)

Otra forma de que la web se adapte al dispositivo. Aplican CSS según las características del medio, **sobre todo el ancho de pantalla**. CSS 2.1 ya tenía algunas; CSS3 añadió muchas más.

```css
/* media screen -> solo para pantallas (no impresoras ni otros dispositivos). */

/* Pantallas de hasta 800px de ancho: fondo azul. */
@media screen and (max-width: 800px) {
  body { background-color: blue; }
}

/* Pantallas entre 801px y 900px: fondo light coral. */
@media screen and (min-width: 801px) and (max-width: 900px) {
  body { background-color: lightcoral; }
}

/* Pantallas de 900px o más: fondo verde. */
@media screen and (min-width: 900px) {
  body { background-color: green; }
}
```
**Efecto visual:** al estrechar/ensanchar la ventana, el fondo cambia de color al cruzar cada umbral. En la práctica se usa para reorganizar el layout: en móvil las cosas se apilan en vertical (scroll hacia abajo, como una red social) y en escritorio se expanden a lo ancho.

> 🔥 Para examen / proyecto: "una de las cosas que se os pide en los proyectos es que vuestra web se adapte al contenedor": que se vea bien tanto en escritorio como en móvil. Hoy esto lo suele resolver el framework, pero hay que entenderlo a mano.

---

### Sintaxis y ejemplos comentados

#### Layout completo de página con Flexbox (header / main / footer)

```html
<!-- index.html -->
<body>
  <header>Cabecera</header>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
  </nav>
  <main>
    <article>Contenido principal de la página...</article>
    <aside>Menú lateral / complementario</aside>
  </main>
  <footer>© 2026 Mi web</footer>
</body>
```

```css
/* RESET mínimo para que no molesten márgenes por defecto. */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* El body es un contenedor flex en COLUMNA: */
/* header arriba, main en medio, footer abajo. */
body {
  display: flex;
  flex-direction: column;   /* apila verticalmente */
  min-height: 100vh;        /* ocupa al menos toda la altura de la ventana */
}

header, footer {
  background: #2c3e50;
  color: white;
  padding: 20px;
}

/* El nav es OTRO contenedor flex, esta vez en FILA. */
nav {
  display: flex;
  gap: 20px;                /* separación entre enlaces */
  justify-content: center;  /* enlaces centrados */
  background: #34495e;
  padding: 10px;
}
nav a { color: white; text-decoration: none; }

/* main crece para empujar el footer hacia abajo. */
/* Y es a su vez un contenedor flex en fila: article + aside. */
main {
  flex: 1;                  /* 🔥 main ocupa todo el espacio sobrante */
  display: flex;
  gap: 20px;
  padding: 20px;
}
main article { flex: 3; background: #ecf0f1; padding: 15px; } /* 3 partes */
main aside   { flex: 1; background: #bdc3c7; padding: 15px; } /* 1 parte  */
```
**Qué produce:** una página clásica con cabecera arriba, barra de navegación centrada, zona central dividida en contenido (3/4) y lateral (1/4), y un footer **siempre pegado abajo** aunque haya poco contenido (gracias a `flex: 1` en `main`).

#### Galería de tarjetas responsive con `flex-wrap`

```html
<div class="galeria">
  <div class="tarjeta">Tarjeta 1</div>
  <div class="tarjeta">Tarjeta 2</div>
  <div class="tarjeta">Tarjeta 3</div>
  <div class="tarjeta">Tarjeta 4</div>
  <div class="tarjeta">Tarjeta 5</div>
  <div class="tarjeta">Tarjeta 6</div>
</div>
```

```css
.galeria {
  display: flex;
  flex-wrap: wrap;          /* 🔥 si no caben, saltan a la fila siguiente */
  gap: 20px;                /* hueco entre tarjetas */
  justify-content: center;  /* tarjetas centradas */
  padding: 20px;
}
.tarjeta {
  /* flex: crece(1), se encoge(1), parte de 250px. */
  /* Resultado: tarjetas de ~250px que rellenan el ancho disponible. */
  flex: 1 1 250px;
  background: steelblue;
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}
```
**Qué produce:** una galería que en pantalla ancha muestra varias tarjetas por fila y, al estrechar la ventana, va reduciendo tarjetas por fila hasta quedar una sola columna. **Responsive sin escribir una sola media query.**

---

### Ejercicios resueltos

**Ejercicio 1 — Centrar un elemento con Flexbox.**
Centra una caja (horizontal y verticalmente) dentro de un contenedor que ocupe toda la pantalla.

**Solución:**
```html
<div class="pantalla">
  <div class="caja">¡Centrado!</div>
</div>
```
```css
* { margin: 0; }
.pantalla {
  display: flex;
  justify-content: center; /* centra en el eje principal (horizontal) */
  align-items: center;     /* centra en el eje transversal (vertical) */
  height: 100vh;           /* toda la altura de la ventana */
  background: #ecf0f1;
}
.caja {
  background: steelblue;
  color: white;
  padding: 40px;
}
```
**Explicación:** el truco clásico de Flexbox. `justify-content: center` + `align-items: center` en el contenedor centran el hijo en los dos ejes. Hace falta que el contenedor tenga **altura** (`100vh`) para ver el centrado vertical.

---

**Ejercicio 2 — Barra de navegación con Flexbox.**
Crea una barra con el logo a la izquierda y los enlaces a la derecha, todo alineado verticalmente.

**Solución:**
```html
<nav class="barra">
  <div class="logo">MiLogo</div>
  <ul class="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
```
```css
* { margin: 0; padding: 0; list-style: none; }
.barra {
  display: flex;
  justify-content: space-between; /* logo a un extremo, menú al otro */
  align-items: center;            /* todo centrado verticalmente */
  background: #2c3e50;
  padding: 15px 30px;
}
.logo { color: white; font-weight: bold; font-size: 20px; }
.menu {
  display: flex;   /* el propio menú es otro contenedor flex */
  gap: 25px;       /* separación entre enlaces */
}
.menu a { color: white; text-decoration: none; }
```
**Explicación:** `justify-content: space-between` empuja logo y menú a los extremos opuestos. `align-items: center` los alinea verticalmente. El `<ul>` es a su vez un contenedor flex para poner los enlaces en fila con `gap`.

---

**Ejercicio 3 — Galería de tarjetas responsive con `flex-wrap`.**
Muestra 6 tarjetas que se reorganicen solas según el ancho de la pantalla.

**Solución:**
```html
<div class="galeria">
  <div class="tarjeta">1</div>
  <div class="tarjeta">2</div>
  <div class="tarjeta">3</div>
  <div class="tarjeta">4</div>
  <div class="tarjeta">5</div>
  <div class="tarjeta">6</div>
</div>
```
```css
.galeria {
  display: flex;
  flex-wrap: wrap;          /* permite varias filas */
  gap: 15px;
  padding: 15px;
}
.tarjeta {
  flex: 1 1 200px;          /* base 200px, crecen y se encogen */
  background: #e67e22;
  color: white;
  padding: 40px;
  text-align: center;
  border-radius: 6px;
}
```
**Explicación:** `flex-wrap: wrap` hace que las tarjetas salten de fila cuando no caben. `flex: 1 1 200px` da a cada tarjeta un tamaño base de 200px pero las deja crecer para rellenar la fila. Al estrechar la ventana, caben menos por fila automáticamente.

---

**Ejercicio 4 — Layout de página completo (header/main/footer) con Flexbox.**
Maqueta una página con cabecera, contenido en dos columnas y pie pegado abajo.

**Solución:**
```html
<body>
  <header>Cabecera</header>
  <main>
    <section class="contenido">Contenido principal</section>
    <aside class="lateral">Lateral</aside>
  </main>
  <footer>Pie de página</footer>
</body>
```
```css
* { margin: 0; box-sizing: border-box; }
body {
  display: flex;
  flex-direction: column;  /* header / main / footer en vertical */
  min-height: 100vh;
}
header { background: #2c3e50; color: #fff; padding: 20px; }
footer { background: #2c3e50; color: #fff; padding: 20px; }
main {
  flex: 1;                 /* main absorbe el espacio sobrante */
  display: flex;
  gap: 20px;
  padding: 20px;
}
.contenido { flex: 3; background: #ecf0f1; padding: 20px; }
.lateral   { flex: 1; background: #bdc3c7; padding: 20px; }
```
**Explicación:** el `body` es flex en columna; `flex: 1` en `main` lo hace crecer y **empuja el footer al fondo** aunque haya poco contenido (*sticky footer*). Dentro, `main` vuelve a ser flex en fila y reparte el ancho 3:1 entre contenido y lateral.

---

**Ejercicio 5 — Posicionar un badge con `position: absolute`.**
Coloca una etiqueta "NUEVO" en la esquina superior derecha de una tarjeta de producto.

**Solución:**
```html
<div class="producto">
  <span class="badge">NUEVO</span>
  <img src="zapatilla.jpg" alt="Zapatilla">
  <p>Zapatilla running</p>
</div>
```
```css
.producto {
  position: relative;   /* 🔥 ANCLA: el badge se posiciona respecto a esto */
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
}
.badge {
  position: absolute;   /* sale del flujo */
  top: 8px;             /* a 8px del borde superior del .producto */
  right: 8px;           /* a 8px del borde derecho del .producto */
  background: crimson;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}
```
**Explicación:** la clave es `position: relative` en el padre (`.producto`): convierte la tarjeta en el **sistema de referencia** del hijo `absolute`. El `.badge` con `position: absolute` y `top`/`right` se "clava" en la esquina sin desplazar al resto del contenido.

---

**Ejercicio 6 — Animación con `@keyframes`.**
Haz que un título aparezca desvaneciéndose desde abajo al cargar la página, y que un botón crezca suavemente al pasar el ratón.

**Solución:**
```html
<h1 class="titulo">Bienvenido</h1>
<button class="boton">Pulsa aquí</button>
```
```css
/* Animación de entrada con fotogramas. */
@keyframes entrada {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
.titulo {
  animation: entrada 0.8s ease-out;  /* se ejecuta una vez al cargar */
}

/* Transición + transform para el hover del botón. */
.boton {
  padding: 12px 24px;
  background: steelblue;
  color: white;
  border: none;
  transition: transform 0.2s ease, background 0.2s ease; /* suaviza el cambio */
}
.boton:hover {
  transform: scale(1.1);   /* crece un 10% */
  background: darkorange;
}
```
**Explicación:** `@keyframes entrada` define dos fotogramas (invisible y desplazado abajo → visible y en su sitio) y `animation` lo aplica al título. Para el botón se combina `transition` con `transform: scale(1.1)` en `:hover`: el crecimiento es gradual gracias a la transición.

---

**Ejercicio 7 — Reordenar ítems con `order` y crecer con `flex-grow`.**
Tienes 4 párrafos. Haz que el cuarto se muestre el primero y que el segundo ocupe el doble de espacio que los demás.

**Solución:**
```html
<div class="contenedor">
  <p>Párrafo 1</p>
  <p class="grande">Párrafo 2</p>
  <p>Párrafo 3</p>
  <p class="primero">Párrafo 4</p>
</div>
```
```css
.contenedor {
  display: flex;
}
.contenedor p {
  flex-grow: 1;        /* todos crecen por igual... */
  background: #ddd;
  margin: 5px;
  padding: 15px;
}
.contenedor p.grande {
  flex-grow: 2;        /* ...salvo este, que crece el DOBLE */
  background: #f39c12;
}
.contenedor p.primero {
  order: -1;           /* este se coloca el PRIMERO (order por defecto = 0) */
  background: #2ecc71;
}
```
**Explicación:** `order: -1` adelanta el "Párrafo 4" delante de todos (los demás tienen `order: 0`). `flex-grow: 2` en `.grande` hace que reciba el doble de espacio sobrante que los `flex-grow: 1`. Importante: el HTML no se toca, solo cambia la presentación.

---

### Visuales a revisar

- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 03:00] — diapositiva de navegadores y **vendors/prefijos** (`-webkit-`, `-moz-`, `-o-`, `-ms-`).
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 08:30] — esquema de la **web semántica HTML5** (header, nav, article, aside, footer) y cómo lo usan WordPress/Moodle.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 18:00] — diagrama de Flexbox: **flex container, flex items, main axis, cross axis, main-start/main-end**.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 25:00] — ejercicios 1 y 2 en Edge: `display: flex` vs `display: inline-flex` (bloque vs línea), con el zoom al 200% mostrando el salto de línea.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 33:00] — demo de **`flex-direction`**: `column-reverse`, `row`, `row-reverse` con los dos divs de 4 párrafos.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 42:00] — demo de **`flex-wrap`**: `wrap`, `nowrap`, `wrap-reverse` haciendo zoom.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 50:00] — **`flex-flow`** (atajo) y **`order`** con la clase `.primero { order: -1 }` y prueba con `order: 1`.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 58:00] — **`flex-basis`**: pruebas con 15%, 25% (ocupa el 100%) y 5%.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 1:08:00] — **`flex-grow`** (clase `.mayor` con `flex-grow: 2`, ocupa el doble) y **`flex-shrink`** (clase con factor de compresión menor).
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 1:18:00] — **`justify-content`**: `center` y `space-between`; y **`align-items`** con `flex-end`.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 1:30:00] — ejemplo de **media query** con cambio de color de fondo según ancho (azul / lightcoral / verde) y JavaScript mostrando el ancho actual.
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 1:42:00] — enunciado del **ejercicio práctico voluntario**: maquetar una web con Flexbox (HTML e imágenes dados, solo hay que escribir el CSS).
- [📺 06_Tema3_CSS_Avanzado_FLEXBOX.md, aprox. 1:52:00] — generadores de CSS, generadores de gradientes, **Paletton** (armonía de color) e introducción a **frameworks** (Bootstrap, Tailwind, jQuery UI).

### Cubierto en

- Clase 06 (Tema 3, CSS Avanzado / Flexbox) — `06_Tema3_CSS_Avanzado_FLEXBOX.md`

### Pitfalls y buenas prácticas

**Errores comunes**

- **Olvidar `position: relative` en el padre al usar `position: absolute`.** Si el hijo es `absolute` y ningún ancestro está posicionado, se coloca respecto a `<html>` y se va a la esquina de la página entera, no de su tarjeta. 🔥 El padre que sirve de referencia necesita `position: relative` (o `absolute`/`fixed`/`sticky`).
- **Esperar que `top`/`left` funcionen con `position: static`.** No hacen nada. Solo tienen efecto en `relative`, `absolute`, `fixed` y `sticky`.
- **Confundir `align-items` con `align-content`.** `align-items` alinea los ítems dentro de su línea; `align-content` alinea **las líneas entre sí** y **solo funciona con `flex-wrap: wrap`** y varias líneas.
- **No darle altura al contenedor y esperar centrado vertical.** `align-items: center` no centra verticalmente si el contenedor no tiene altura (`height`, `min-height`, `100vh`...).
- **Equivocarse con el orden de `flex`.** En `flex: 1 1 200px` el orden es **grow, shrink, basis** y **sí importa** (a diferencia de `flex-flow`, donde no importa).
- **Usar Flexbox para rejillas 2D complejas.** Flexbox es de **un eje**. Si necesitas filas *y* columnas alineadas a la vez, usa **Grid**.
- **Abusar de `float` para maquetar.** Es legado y da problemas (colapso de altura del padre, necesidad de `clear`). Usa Flexbox.
- **`z-index` que "no funciona".** `z-index` solo afecta a elementos **posicionados** (`position` distinto de `static`).
- **Probar solo en un navegador.** Como recuerda el profesor durante todo el curso: revisa los ejercicios en **varios navegadores**.

**Buenas prácticas**

- **Haz Flexbox a mano para entenderlo.** Aunque luego Elementor o un framework lo hagan por ti, el profesor insiste: hazlo a mano para comprenderlo. Y se puede **anidar** Flexbox dentro de Flexbox (un contenedor en columnas con un flex en fila dentro de cada una) — solo hay que cerrar bien las etiquetas.
- **Usa `gap` en vez de `margin`** para separar ítems flex: es más limpio y predecible.
- **`flex: 1` para repartir el ancho a partes iguales** entre varios ítems; combínalo con `flex-basis` para tarjetas responsive (`flex: 1 1 250px`).
- **`min-height: 100vh` + `flex: 1` en `main`** para conseguir el footer siempre pegado abajo.
- **Define colores y espaciados con variables CSS** en `:root`: cambias un valor y se actualiza toda la web.
- **Usa las etiquetas semánticas** (`header`, `nav`, `main`, `article`, `aside`, `footer`) en lugar de `div` a secas siempre que tengan sentido.
- **Suaviza los cambios con `transition`** en lugar de cambios bruscos en `:hover`.
- **Haz tu web responsive** (`flex-wrap` + media queries): es un requisito típico del proyecto, que se vea bien en escritorio y en móvil.
- 🔥 **Practica el ejercicio voluntario de Flexbox.** El profesor avisa: el año pasado uno de los dos ejercicios a elegir en el examen era maquetar una web con Flexbox, muy parecido a ese.

---

## 5. Diseño de interfaces: layout y diseño responsive

> **TL;DR.** Diseñar una interfaz web no es solo "que quede bonita": es decidir **antes de programar** la estructura, los colores, la tipografía y el comportamiento de la web para que sea **simple, coherente y funcional**. Esa fase de decisión se apoya en **wireframes, mockups y prototipos** (con herramientas como Figma). Una vez decidido, se construye con HTML y CSS aplicando **principios de diseño** (jerarquía visual, contraste, espacio en blanco, proximidad, consistencia) y un **layout** clásico de cabecera + menú + contenido + pie, normalmente sobre una **rejilla**. Para que esa interfaz funcione en móvil, tablet y escritorio se usa el **diseño responsive** con enfoque **mobile-first**, **media queries**, **unidades relativas** (%, em, rem, vw, vh), **imágenes flexibles** y el **meta viewport**. ⚠️ El profe avisó: la parte de *herramientas de diseño* (Figma, Adobe XD…) **no entra en examen**, pero los conceptos de interfaz y todo el HTML/CSS sí son la base del módulo.

### Conceptos clave

- **Interfaz web (UI):** la capa visual con la que el usuario interactúa. Define *cómo se ve* y *cómo se estructura* el contenido (formularios, imágenes, tamaños, formatos, desplazamientos, efectos).
- **UX (experiencia de usuario) vs UI (interfaz de usuario):** la UX es *cómo se siente* el usuario al usar la web (¿encuentra lo que busca?, ¿tiene el control?); la UI es *el aspecto concreto* (colores, botones, tipografía). Son complementarias.
- **Simplicidad y coherencia:** 🔥 las dos ideas que más repitió el profe. Una web debe ser sencilla (no un folleto sobrecargado) y mantener el mismo estilo en todas sus páginas.
- **Principios de diseño:** jerarquía visual, contraste, alineación, espacio en blanco, consistencia, ley de proximidad, reducción del ruido visual, reutilización de componentes.
- **Wireframe → Mockup → Prototipo:** las tres fases del diseño previo. Del esquema en blanco y negro al modelo navegable.
- **Layout:** la disposición de los bloques grandes de la página (cabecera, menú, contenido, pie).
- **Sistema de rejilla (grid):** dividir la página en columnas/filas regulares para alinear el contenido.
- **Diseño responsive:** que la misma web se adapte a cualquier tamaño de pantalla.
- **Mobile-first:** diseñar primero para móvil y *ampliar* hacia pantallas grandes.
- **Media query:** regla CSS (`@media`) que aplica estilos solo si se cumple una condición de pantalla.
- **Breakpoint:** punto de ancho donde el layout "cambia" (por ejemplo, 768px).
- **Unidades relativas:** `%`, `em`, `rem`, `vw`, `vh` — escalan según contexto en lugar de ser fijas como `px`.
- **Meta viewport:** etiqueta `<meta name="viewport">` imprescindible para que el responsive funcione en móviles reales.
- **Herramientas de diseño:** Figma, Adobe XD, Sketch, Atomic, Gravit, iOS Design Kit.

---

### Explicación detallada

#### 5.1. Qué es la interfaz web y por qué decidirla antes de programar

La asignatura se llama "Diseño de Interfaces Web" porque trata de **cómo se visualiza** nuestra página: la estructura de cada contenido y la parte gráfica. Antes de escribir una sola línea de HTML hay que **tomar decisiones**: cómo se ve un formulario, cómo se muestran las imágenes (estructura, tamaño, formato), qué desplazamientos, sombras, colores y efectos vamos a usar.

🔥 La idea central: cuando entras en una web grande (Amazon, un periódico, Netflix…), **toda la web mantiene la misma estructura**. Eso no es casualidad: es una decisión de diseño tomada al principio para que todos los programadores del equipo trabajen en la misma línea. El profe lo refleja en sus prácticas pidiendo siempre las mismas "partes tipo": un **index** (portada), una **noticia/producto** y un **formulario**.

Esto se consigue con **estándares** (HTML5, CSS3, convenciones de UI) que dan funcionalidad al usuario y permiten al programador trabajar de forma rápida y cómoda, sin que el contenido parezca obsoleto.

> ❓ El profe menciona que se pueden usar **plantillas** (plantillas CSS, de WordPress, de PrestaShop…) como atajo profesional, pero aclara que en clase **no** vamos a usar plantillas: aprenderemos a construir desde cero con HTML y CSS, y más adelante con frameworks (Bootstrap, Tailwind CSS).

#### 5.2. Principios de un buen diseño de interfaz

El profe enumeró varias buenas prácticas. Las agrupo y las traduzco a CSS siempre que se pueda.

**a) Simplicidad.** 🔥 "Que sea lo más simple y coherente posible." Una web no es un folleto: no metas 1500 cosas en la portada ni 800 colores "para lucir los degradados". Ejemplo del profe: **Google** lleva 25 años con la misma portada minimalista; Idealista o Fotocasa se han vuelto más minimalistas (un buscador o un mapa, no 800 pisos de golpe).

```css
/* Simplicidad aplicada: poca cosa, mucho aire. */
body {
  max-width: 1100px;   /* limitamos el ancho: no ocupamos toda la pantalla */
  margin: 0 auto;      /* centramos el contenido */
  font-family: system-ui, sans-serif; /* una sola familia tipográfica */
}
```

**b) Coherencia / consistencia.** 🔥 Mantener el mismo tipo de letra, los mismos colores y la misma separación en toda la web. Queda "superfeo" que cada página use una tipografía distinta. En CSS esto se logra centralizando los valores en **variables CSS** y reutilizándolas:

```css
/* Definimos UNA VEZ la identidad visual y la reutilizamos en toda la web. */
:root {
  --color-principal: #1a5276;
  --color-acento:    #e67e22;
  --color-texto:     #2c3e50;
  --fuente-base:     'Segoe UI', Roboto, sans-serif;
  --espacio:         16px;
  --radio-borde:     8px;
}

h1, h2, h3 { color: var(--color-principal); font-family: var(--fuente-base); }
.boton     { background: var(--color-acento); border-radius: var(--radio-borde); }
```

**c) Jerarquía visual.** Ordenar los elementos por importancia: lo más importante, más grande y más destacado. El profe dice que la teoría profunda es más de diseño gráfico, pero a nivel de programación se consigue con **tamaño**, **peso** y **color**:

```css
h1 { font-size: 2.5rem; font-weight: 700; }  /* lo más importante: grande y grueso */
h2 { font-size: 1.6rem; font-weight: 600; }  /* segundo nivel */
p  { font-size: 1rem;   font-weight: 400;    /* texto normal: ni destaca ni estorba */
     color: #555; }
```

**d) El color atrae la atención.** Úsalo con intención: donde pongas color, ahí va la mirada del usuario. Por eso un botón de "Comprar" suele ser el elemento más coloreado de la página.

**e) El contraste administra la atención.** Donde haya más contraste, ahí mira el usuario. Además el contraste es clave de **legibilidad**: texto oscuro sobre fondo claro (o viceversa).

```css
/* Botón de acción primaria: máximo contraste para que "llame". */
.boton-primario {
  background: #e67e22;   /* naranja fuerte */
  color: #ffffff;        /* texto blanco: contraste alto */
  padding: 12px 24px;
  border: none;
}
/* Acción secundaria: bajo contraste, "no estorba". */
.boton-secundario {
  background: transparent;
  color: #888;
  border: 1px solid #ccc;
}
```

**f) El espacio en blanco relaciona y separa.** El "aire" entre elementos no es espacio desperdiciado: agrupa lo que va junto y separa lo que no. Cuidado también con el **espaciado entre letras** (`letter-spacing`) y entre líneas (`line-height`).

```css
.tarjeta {
  padding: 24px;          /* aire interior: el contenido "respira" */
  margin-bottom: 32px;    /* aire exterior: separa una tarjeta de la siguiente */
}
p { line-height: 1.6; }   /* interlineado generoso = más legible */
```

**g) Ley de proximidad.** 🔥 Los elementos que están **cerca** se perciben como **relacionados**. Por eso una etiqueta de formulario va pegada a su campo, y los campos del mismo grupo van juntos con poco margen entre ellos y más margen respecto a otros grupos.

```css
/* Proximidad: etiqueta y campo MUY juntos (son una unidad)... */
label { display: block; margin-bottom: 4px; }
input { margin-bottom: 24px; } /* ...y separación AMPLIA respecto al siguiente grupo */
```

**h) El usuario debe sentir que tiene el control.** Las personas se sienten seguras si creen que ellas gestionan la aplicación (ejemplo del profe: las apps de banca antiguas "daban vértigo"). En la práctica: estados visibles (`:hover`, `:focus`), botones claros, mensajes de confirmación, posibilidad de volver atrás.

**i) Acciones primarias y secundarias.** Distinguir visualmente lo importante de lo accesorio (un botón "Pagar" destacado frente a un enlace de "cookies" discreto).

**j) Estabilidad funcional.** Una web no solo tiene que ser bonita: tiene que **funcionar**. Si dices que vendes, vendes; si dices que hay carrito, hay carrito. Esto depende más de la parte de servidor, pero el profe insiste: nada de errores continuos ni formularios rotos.

**k) Reducir el ruido visual y reutilizar.** Eliminar lo innecesario, minimizar publicidad y elementos sobrecargados, y reutilizar componentes (botones, formatos, colores) en lugar de inventar uno nuevo cada vez.

#### 5.3. UX vs UI

| | **UI — Interfaz de usuario** | **UX — Experiencia de usuario** |
|---|---|---|
| Qué es | El aspecto visual concreto | La sensación global de uso |
| Ejemplos | Colores, botones, tipografía, iconos | ¿Encuentra lo que busca?, ¿se siente seguro?, ¿es fácil? |
| Herramienta | HTML + CSS | Análisis, pruebas con usuarios, wireframes |

El profe aclara que existe **otra usabilidad** distinta de la "estética": la **accesibilidad** (que personas ciegas, sordas o con cualquier discapacidad puedan usar la web). Eso lo define la **W3C** y se ve en un tema final del curso. En este tema hablamos de la usabilidad "de sorprender y agradar".

#### 5.4. Wireframes, mockups y prototipos

🔥 Tres fases del diseño **previo** a programar (el profe avisa que a veces se entremezclan, pero en los apuntes van separadas):

1. **Wireframe.** El esquema/boceto de la web: dónde va cada bloque y cómo se navega entre páginas. Normalmente **en blanco y negro**, sin colores ni tipografía definida. Es el "plano".
2. **Mockup.** La evolución del wireframe: ya incluye **tipografías, tamaños de fuente y colores**. Se puede enseñar como si fuera el producto casi final, adaptado a distintos dispositivos (Windows, Linux, iOS, Android, web).
3. **Prototipo.** El **modelo navegable** para enseñar una demostración rápida al cliente o a los compañeros. Es lo que el profe suele pedir como práctica: no el proyecto final, sino el modelo de 3 webs (index, producto/noticia, formulario).

#### 5.5. Herramientas de diseño

⚠️ El profe dijo literalmente que **esto NO entra en el examen** y que la clase de herramientas es "previa", no de programación. Aun así hay que conocerlas:

- **Figma** 🔥 — la que más recomendó. Plataforma **online** (no instalas nada), **colaborativa**, en la nube, con curva de aprendizaje sencilla e IA incluida. Versión gratuita con 3 proyectos (vas borrando para crear nuevos). Exporta a **PDF, PNG y JPG**. En 2022 la compró **Adobe**. Es la continuación de **Adobe XD**.
- **Adobe XD** — potente, pero la versión gratuita dura ~30 días y hay que instalar software de Adobe.
- **Sketch** — uso profesional, requiere cierto manejo de programas de diseño.
- **Atomic (atomic.io)** — sigue la metodología *atomic design*: primero **átomos** (un botón), luego **moléculas**, luego plantillas y páginas. Curva de aprendizaje más dura.
- **Gravit** — similar a Figma, gratuita y multiplataforma, exporta bocetos.
- **iOS Design Kit (iosdesignkit.io)** — kit de plantillas pensado para iPhone/iPad.

Estas herramientas también ayudan con **paletas de colores coherentes**: te sugieren combinaciones. El profe matiza que muchas veces hay **colores corporativos** impuestos por el cliente (el verde de El Corte Inglés, el blanco del Real Madrid) y que la decisión de color final no es del programador, sino de marketing.

#### 5.6. El layout clásico de una página web

El **layout** es la disposición de los bloques grandes. El patrón más habitual:

```
┌─────────────────────────────────────┐
│              HEADER                 │  ← logo + identidad
├─────────────────────────────────────┤
│               NAV                   │  ← menú de navegación
├──────────┬──────────────────────────┤
│          │                          │
│  ASIDE   │         MAIN             │  ← contenido principal
│ (lateral)│  (artículos / productos) │
│          │                          │
├──────────┴──────────────────────────┤
│              FOOTER                  │  ← pie: contacto, legal
└─────────────────────────────────────┘
```

HTML5 da **etiquetas semánticas** para cada bloque, lo que hace el código autoexplicativo:

```html
<body>
  <header>...</header>   <!-- cabecera: logo, título del sitio -->
  <nav>...</nav>         <!-- navegación: el menú -->
  <main>                 <!-- contenido principal y único de la página -->
    <aside>...</aside>   <!-- contenido lateral secundario -->
    <article>...</article> <!-- una unidad de contenido (noticia, producto) -->
  </main>
  <footer>...</footer>  <!-- pie de página -->
</body>
```

Para colocar estos bloques en pantalla usamos **CSS Flexbox** o **CSS Grid** (que se ven en detalle en otros temas, aquí los usamos como herramienta de layout).

#### 5.7. Sistemas de rejilla (grid)

Un **sistema de rejilla** divide la página en columnas regulares (clásicamente 12) para alinear todo. Es la base de frameworks como Bootstrap. Con **CSS Grid** se hace nativo:

```css
.rejilla {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12 columnas iguales */
  gap: 20px;                              /* separación entre celdas */
}
.ocupa-8 { grid-column: span 8; }  /* este bloque ocupa 8 de 12 columnas */
.ocupa-4 { grid-column: span 4; }  /* este, las 4 restantes */
```

#### 5.8. El diseño responsive y el enfoque mobile-first

🔥 **Diseño responsive** = la misma web se **adapta** a cualquier pantalla (móvil, tablet, portátil, monitor grande) sin necesidad de hacer páginas distintas. Hoy es obligatorio: la mayoría del tráfico es móvil.

Dos enfoques:

- **Desktop-first:** diseñas para escritorio y vas *reduciendo* con `@media (max-width: ...)`.
- **Mobile-first** 🔥 (el recomendado): diseñas primero para móvil (lo más simple) y vas *ampliando* con `@media (min-width: ...)`. Encaja con el principio de simplicidad.

Los tres pilares técnicos del responsive son: **meta viewport**, **unidades relativas** y **media queries**.

#### 5.9. El meta viewport

🔥 Sin esta etiqueta, un móvil **finge** ser una pantalla ancha (~980px) y "encoge" la página: el responsive no funciona aunque tengas media queries. Va siempre en el `<head>`:

```html
<head>
  <meta charset="UTF-8">
  <!-- width=device-width: el ancho del viewport = ancho REAL del dispositivo -->
  <!-- initial-scale=1.0: nivel de zoom inicial al 100% -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi web responsive</title>
</head>
```

#### 5.10. Unidades relativas para responsive

Las unidades **fijas** (`px`) no escalan. Las **relativas** sí:

| Unidad | Relativa a... | Uso típico |
|---|---|---|
| `%` | el tamaño del **elemento padre** | anchos de contenedores y columnas |
| `em` | el `font-size` del **elemento actual/padre** | espaciados que escalan con el texto |
| `rem` | el `font-size` de la **raíz** (`<html>`) | 🔥 tipografía y espaciados consistentes |
| `vw` | 1% del **ancho** del viewport | anchos a pantalla completa, tipografía fluida |
| `vh` | 1% del **alto** del viewport | secciones "a pantalla completa" |

```css
html { font-size: 16px; }   /* 1rem = 16px en toda la web */

.contenedor { width: 90%; max-width: 1200px; } /* 90% del padre, tope 1200px */
h1   { font-size: 2.5rem; }  /* 2.5 × 16 = 40px, escala si cambias la raíz */
.hero { height: 100vh; }     /* la sección ocupa toda la altura visible */
p    { margin-bottom: 1.5em; } /* 1.5 × tamaño de letra del propio párrafo */
.titulo-fluido { font-size: 5vw; } /* crece/encoge con el ancho de pantalla */
```

#### 5.11. Las media queries

Una **media query** aplica un bloque de CSS **solo si se cumple una condición** de pantalla. Sintaxis:

```css
@media (max-width: 768px) {
  /* Estas reglas SOLO se aplican si el viewport mide 768px o MENOS */
}
@media (min-width: 769px) {
  /* Estas SOLO si mide 769px o MÁS */
}
```

- `max-width`: "hasta este ancho" → enfoque desktop-first.
- `min-width`: "a partir de este ancho" → enfoque mobile-first.

Los **breakpoints** son los anchos donde el diseño cambia. Valores orientativos habituales:

```css
/* Móvil: estilos base, SIN media query (mobile-first) */

@media (min-width: 576px)  { /* móvil grande / phablet */ }
@media (min-width: 768px)  { /* tablet                 */ }
@media (min-width: 992px)  { /* portátil               */ }
@media (min-width: 1200px) { /* escritorio grande      */ }
```

#### 5.12. Imágenes responsive

Una imagen con tamaño fijo se desborda en móvil. La regla de oro:

```css
img {
  max-width: 100%;  /* nunca más ancha que su contenedor */
  height: auto;     /* mantiene la proporción (no se deforma) */
  display: block;   /* elimina el hueco fantasma de debajo */
}
```

Y en HTML se puede servir distinta imagen según la pantalla con `srcset` y `<picture>`:

```html
<!-- El navegador elige la imagen según el ancho del dispositivo -->
<img src="foto-800.jpg"
     srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Producto">

<!-- O cambiar de imagen por completo según el breakpoint -->
<picture>
  <source media="(max-width: 600px)" srcset="movil.jpg">
  <source media="(min-width: 601px)" srcset="escritorio.jpg">
  <img src="escritorio.jpg" alt="Cabecera">
</picture>
```

---

### Sintaxis y ejemplos comentados

#### Ejemplo A — Esqueleto completo de una página responsive mobile-first

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <!-- 🔥 Sin esto el responsive NO funciona en móviles reales -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página responsive</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <header class="cabecera">Mi Tienda</header>

  <nav class="menu">
    <a href="#">Inicio</a>
    <a href="#">Productos</a>
    <a href="#">Contacto</a>
  </nav>

  <main class="contenido">
    <article class="principal">Contenido principal de la página.</article>
    <aside class="lateral">Información secundaria.</aside>
  </main>

  <footer class="pie">© 2026 Mi Tienda</footer>
</body>
</html>
```

```css
/* ===== ESTILOS BASE = MÓVIL (mobile-first) =====
   No hay media query: esto es lo que ve un móvil por defecto. */
* { box-sizing: border-box; margin: 0; padding: 0; } /* reset básico */

body { font-family: system-ui, sans-serif; line-height: 1.6; }

.cabecera, .pie {
  background: #1a5276;
  color: #fff;
  padding: 16px;
  text-align: center;
}

/* En móvil el menú va en COLUMNA: cada enlace en su fila */
.menu {
  display: flex;
  flex-direction: column;       /* apilados verticalmente */
  background: #2874a6;
}
.menu a {
  color: #fff;
  padding: 14px 16px;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,.2);
}

/* En móvil el contenido también va en COLUMNA: article encima, aside debajo */
.contenido {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
}
.principal, .lateral { padding: 16px; border-radius: 8px; }
.principal { background: #f4f6f7; }
.lateral   { background: #eaeded; }

/* ===== TABLET Y ESCRITORIO: a partir de 768px AMPLIAMOS ===== */
@media (min-width: 768px) {
  /* El menú pasa a FILA horizontal */
  .menu { flex-direction: row; justify-content: center; }
  .menu a { border-bottom: none; }

  /* El contenido pasa a DOS COLUMNAS: article ancho, aside estrecho */
  .contenido { flex-direction: row; }
  .principal { flex: 3; }  /* ocupa 3 partes */
  .lateral   { flex: 1; }  /* ocupa 1 parte */
}

/* ===== ESCRITORIO GRANDE: limitamos el ancho para no "estirar" ===== */
@media (min-width: 1200px) {
  body { max-width: 1140px; margin: 0 auto; }
}
```

#### Ejemplo B — Galería que cambia el número de columnas según la pantalla con CSS Grid

```css
.galeria {
  display: grid;
  /* auto-fill + minmax: el navegador mete TANTAS columnas como quepan,
     cada una de mínimo 200px. Es responsive SIN escribir media queries. */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}
.galeria img {
  width: 100%;
  height: 180px;
  object-fit: cover;  /* recorta sin deformar */
  border-radius: 8px;
}
```

---

### Ejercicios resueltos

**Ejercicio 1 — Layout que pasa de columnas a filas en móvil.**
Crea una página con tres tarjetas que se muestren en **una fila** en escritorio y **apiladas en columna** en pantallas de 600px o menos.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarjetas responsive</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .fila {
      display: flex;
      flex-direction: row;   /* por defecto (escritorio): en fila */
      gap: 20px;
      padding: 20px;
    }
    .tarjeta {
      flex: 1;               /* las tres ocupan el mismo ancho */
      background: #d6eaf8;
      padding: 24px;
      text-align: center;
      border-radius: 8px;
    }
    /* 🔥 En móvil cambiamos la dirección del flex a columna */
    @media (max-width: 600px) {
      .fila { flex-direction: column; }
    }
  </style>
</head>
<body>
  <div class="fila">
    <div class="tarjeta">Tarjeta 1</div>
    <div class="tarjeta">Tarjeta 2</div>
    <div class="tarjeta">Tarjeta 3</div>
  </div>
</body>
</html>
```

*Explicación:* el truco es `flex-direction`. En escritorio vale `row` (en fila); dentro de la media query `max-width: 600px` lo cambiamos a `column` y las tarjetas se apilan. Como `box-sizing: border-box` está activo, el `padding` no rompe los anchos.

---

**Ejercicio 2 — Menú de navegación responsive.**
Un menú que en escritorio se ve horizontal y centrado, y en móvil (≤768px) se ve en columna ocupando todo el ancho.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú responsive</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    nav ul {
      list-style: none;
      display: flex;
      justify-content: center;   /* escritorio: horizontal y centrado */
      background: #1a5276;
    }
    nav a {
      display: block;
      color: #fff;
      padding: 14px 22px;
      text-decoration: none;
    }
    nav a:hover { background: #2874a6; }  /* feedback: el usuario "tiene el control" */

    @media (max-width: 768px) {
      nav ul { flex-direction: column; }  /* móvil: en columna */
      nav a  { text-align: center; border-bottom: 1px solid #2874a6; }
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Sobre nosotros</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</body>
</html>
```

*Explicación:* la `<ul>` es un contenedor flex. `justify-content: center` centra los enlaces en escritorio. En la media query cambiamos a `flex-direction: column` y los `<a>` (que son `display: block`) ocupan todo el ancho. El `:hover` da feedback visual, aplicando el principio de "control del usuario".

---

**Ejercicio 3 — Galería de imágenes responsive.**
Una galería que muestre 4 columnas en escritorio, 2 en tablet y 1 en móvil.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galería responsive</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .galeria {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* escritorio: 4 columnas */
      gap: 12px;
      padding: 12px;
    }
    .galeria img {
      width: 100%;          /* 🔥 imagen responsive */
      height: 160px;
      object-fit: cover;    /* recorta sin deformar */
      display: block;
      border-radius: 6px;
    }
    /* Tablet: 2 columnas */
    @media (max-width: 992px) {
      .galeria { grid-template-columns: repeat(2, 1fr); }
    }
    /* Móvil: 1 columna */
    @media (max-width: 600px) {
      .galeria { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="galeria">
    <img src="https://picsum.photos/id/10/400/300" alt="Foto 1">
    <img src="https://picsum.photos/id/20/400/300" alt="Foto 2">
    <img src="https://picsum.photos/id/30/400/300" alt="Foto 3">
    <img src="https://picsum.photos/id/40/400/300" alt="Foto 4">
    <img src="https://picsum.photos/id/50/400/300" alt="Foto 5">
    <img src="https://picsum.photos/id/60/400/300" alt="Foto 6">
  </div>
</body>
</html>
```

*Explicación:* con CSS Grid declaramos el número de columnas con `grid-template-columns: repeat(N, 1fr)`. Cada media query (de mayor a menor ancho, estilo desktop-first) redefine ese número. `object-fit: cover` evita que las imágenes se deformen al forzar `width: 100%`.

---

**Ejercicio 4 — Menú hamburguesa solo con CSS.**
Crea un menú que en móvil aparezca colapsado tras un icono "☰" y se despliegue al pulsarlo, **sin JavaScript**.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú hamburguesa CSS</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: sans-serif; }

    /* El checkbox real lo ocultamos: solo lo usamos como "interruptor" */
    #toggle { display: none; }

    /* La etiqueta del icono hamburguesa: oculta en escritorio */
    .icono-hamburguesa {
      display: none;
      font-size: 28px;
      color: #fff;
      cursor: pointer;
      padding: 14px 20px;
      background: #1a5276;
    }

    .menu {
      list-style: none;
      display: flex;            /* escritorio: menú horizontal visible */
      background: #1a5276;
    }
    .menu a {
      display: block;
      color: #fff;
      padding: 14px 20px;
      text-decoration: none;
    }
    .menu a:hover { background: #2874a6; }

    /* ===== MÓVIL ===== */
    @media (max-width: 768px) {
      .icono-hamburguesa { display: block; } /* mostramos el icono */

      .menu {
        flex-direction: column;
        max-height: 0;          /* colapsado: altura 0 = invisible */
        overflow: hidden;
        transition: max-height .3s ease;
      }

      /* 🔥 Selector clave: cuando el checkbox está marcado (:checked),
         el .menu que viene DESPUÉS (~) se despliega. */
      #toggle:checked ~ .menu {
        max-height: 300px;      /* lo "abrimos" */
      }
    }
  </style>
</head>
<body>
  <!-- 1. El checkbox interruptor (oculto) -->
  <input type="checkbox" id="toggle">
  <!-- 2. La etiqueta visible que activa el checkbox al pulsarla -->
  <label for="toggle" class="icono-hamburguesa">☰</label>
  <!-- 3. El menú, que reacciona al estado del checkbox -->
  <ul class="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Productos</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</body>
</html>
```

*Explicación:* el truco "checkbox hack". Un `<input type="checkbox">` oculto guarda el estado abierto/cerrado. Su `<label>` (el icono ☰) lo activa al pulsarlo porque comparten el `for`/`id`. El selector `#toggle:checked ~ .menu` aplica estilos al menú **solo cuando el checkbox está marcado**. Animamos `max-height` para que se despliegue suave. En escritorio el icono está oculto y el menú siempre visible.

---

**Ejercicio 5 — Tipografía y espaciado con unidades relativas.**
Maqueta un artículo cuyo texto y márgenes escalen con unidades relativas, con el cuerpo más ancho en escritorio y estrecho en móvil.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Artículo con unidades relativas</title>
  <style>
    /* 🔥 La raíz define 1rem. Si la cambias aquí, escala TODA la web. */
    html { font-size: 16px; }

    body {
      font-family: Georgia, serif;
      line-height: 1.7;          /* interlineado relativo al font-size */
      color: #2c3e50;
    }

    .articulo {
      width: 90%;                /* 90% del padre: nunca toca los bordes */
      max-width: 700px;          /* tope de ancho: legibilidad en escritorio */
      margin: 2rem auto;         /* 2rem = 32px arriba/abajo, centrado */
      padding: 1.5rem;
    }

    .articulo h1 { font-size: 2.5rem; margin-bottom: 1rem; }  /* 40px */
    .articulo h2 { font-size: 1.6rem; margin: 1.5rem 0 .5rem; }
    .articulo p  { font-size: 1rem;  margin-bottom: 1.2em; }  /* em: relativo al propio párrafo */

    /* En móvil reducimos un poco la raíz: TODO encoge proporcionalmente */
    @media (max-width: 600px) {
      html { font-size: 14px; }
      .articulo { width: 100%; padding: 1rem; }
    }
  </style>
</head>
<body>
  <article class="articulo">
    <h1>Diseño responsive</h1>
    <p>Las unidades relativas permiten que la interfaz escale sin reescribir el CSS.</p>
    <h2>Por qué usar rem</h2>
    <p>Con <code>rem</code> todo el sistema tipográfico depende de un único valor raíz.</p>
  </article>
</body>
</html>
```

*Explicación:* `html { font-size }` fija el valor de `1rem`. Títulos y márgenes en `rem` escalan todos a la vez si cambias la raíz dentro de la media query. `width: 90%` + `max-width: 700px` da un cuerpo de texto cómodo en cualquier pantalla. `em` en el margen del párrafo lo hace relativo al tamaño de ese párrafo concreto.

---

**Ejercicio 6 — Análisis de una interfaz aplicando principios de diseño.**
Te dan la portada de una tienda online con: 9 colores distintos, 3 tipografías, el botón "Comprar" del mismo gris que el de "Cookies", textos pegados a los bordes y banners de publicidad parpadeando. Identifica los fallos y propón la corrección en CSS.

**Solución:**

| Fallo detectado | Principio incumplido | Corrección |
|---|---|---|
| 9 colores | Coherencia / simplicidad | Reducir a paleta de 3 (principal, acento, neutro) con variables CSS |
| 3 tipografías | Consistencia | Una sola familia (`--fuente-base`) en toda la web |
| "Comprar" = "Cookies" | Jerarquía / acciones primarias-secundarias | "Comprar" con color de acento y contraste alto; "Cookies" discreto |
| Texto pegado a bordes | Espacio en blanco | Añadir `padding` a los contenedores |
| Publicidad parpadeando | Reducir ruido visual | Eliminar o minimizar banners |

```css
:root {
  --principal: #1a5276;
  --acento:    #e67e22;
  --neutro:    #95a5a6;
  --fuente:    'Segoe UI', sans-serif;
}
body { font-family: var(--fuente); }            /* una sola tipografía */

.contenido { padding: 24px; }                   /* aire: texto despegado del borde */

.btn-comprar {                                  /* acción primaria: destaca */
  background: var(--acento);
  color: #fff;
  padding: 14px 28px;
  border: none;
  font-weight: 700;
}
.btn-cookies {                                  /* acción secundaria: discreta */
  background: transparent;
  color: var(--neutro);
  border: 1px solid var(--neutro);
  padding: 6px 12px;
  font-size: .85rem;
}
```

*Explicación:* el ejercicio conecta los principios abstractos del apartado 5.2 con código real. La clave: centralizar la identidad visual en `:root` (coherencia), usar el contraste y el color para crear jerarquía entre acción primaria y secundaria, y dar espacio en blanco con `padding`.

---

### Visuales a revisar

- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 00:30] — Presentación del tema: la asignatura "partida en trocitos", fin de HTML5/CSS3 y paso a frameworks (Bootstrap, Tailwind).
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 06:00] — Concepto de interfaz web: decidir estructura, imágenes, formularios y parte gráfica antes de programar.
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 18:00] — Ejemplos de simplicidad y coherencia: Google con la misma portada en 25 años, Idealista/Fotocasa minimalistas.
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 35:00] — Principios técnicos: color que atrae, contraste que administra la atención, espacio en blanco, reducción del ruido visual.
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 48:00] — Wireframes, mockups y prototipos: las tres fases del diseño previo.
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 58:00] — Demostración de Figma en el navegador: precios, versión gratuita de 3 proyectos, IA incluida, propiedad de Adobe desde 2022.
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 1:08:00] — Atomic (atomic.io) y la metodología atomic design: átomos → moléculas → plantillas.
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 1:15:00] — Gravit e iOS Design Kit; encargo de la semana: probar Figma con una web propia.
- [📺 07_Tema4_Diseño_Interfaces.md, aprox. 1:25:00] — Aclaración: este tema NO entra en el examen; cierre de la clase con dudas de calendario.

### Cubierto en

- Clase 07 (Tema 4, Diseño de Interfaces) — `07_Tema4_Diseño_Interfaces.md`

### Pitfalls y buenas prácticas

**Errores comunes**

- **Olvidar el `<meta name="viewport">`.** 🔥 El fallo nº1 del responsive. Sin él, el móvil renderiza la página como si fuera un escritorio de ~980px y la "encoge": tus media queries no se disparan. Va siempre en el `<head>`.
- **Maquetar todo con `px`.** Los píxeles fijos no escalan. Si el cuerpo de texto y los contenedores están en `px`, la web no se adapta. Usa `%`, `rem`, `em`, `vw`, `vh`.
- **Imágenes sin `max-width: 100%`.** Una imagen con ancho fijo mayor que la pantalla provoca **scroll horizontal** en móvil, uno de los defectos que más "afea" una web.
- **No usar `box-sizing: border-box`.** Sin él, `padding` y `border` se *suman* al `width`, y los layouts de columnas se descuadran al reducir la pantalla.
- **Sobrecargar la portada.** El profe insistió: la web no es un folleto. 1500 elementos, 800 colores y mil banners ahuyentan al usuario.
- **Incoherencia visual entre páginas.** Distinta tipografía o distintos colores en cada página da sensación de web "rota" o desactualizada (ejemplo del profe: webs de banca antiguas que "dan vértigo").
- **No distinguir acción primaria de secundaria.** Si "Comprar" y "Aceptar cookies" se ven igual, el usuario se pierde.
- **Breakpoints arbitrarios y caóticos.** Mete media queries solo donde el *contenido* lo pida, y mantén un conjunto ordenado y consistente.
- **Confundir UX con UI.** Una web puede ser preciosa (UI) y a la vez frustrante de usar (UX). Hay que cuidar las dos.

**Buenas prácticas**

- **Enfoque mobile-first** 🔥: escribe los estilos base para móvil (lo más simple) y amplía con `@media (min-width: ...)`. Encaja con el principio de simplicidad.
- **Centraliza la identidad visual** en variables CSS (`:root`): un único sitio para colores, tipografía y espaciados → coherencia garantizada.
- **Reutiliza componentes:** define una clase `.boton`, `.tarjeta`, etc., y reúsala en lugar de inventar estilos nuevos cada vez.
- **Limita el ancho del contenido** en pantallas grandes con `max-width` + `margin: 0 auto`: el texto a todo lo ancho de un monitor es ilegible.
- **Diseña primero el wireframe**, luego el mockup y por último programa. Decidir estructura y estilo *antes* de escribir CSS ahorra reescrituras.
- **Da feedback al usuario:** estados `:hover`, `:focus` y `:active` para que sienta que "tiene el control".
- **Aplica espacio en blanco generoso:** `padding`, `margin` y `line-height` holgados mejoran la legibilidad y agrupan por proximidad.
- **Prueba en varios tamaños:** redimensiona el navegador o usa las herramientas de desarrollador (modo dispositivo) para verificar cada breakpoint.
- **Usa HTML semántico** (`header`, `nav`, `main`, `aside`, `footer`): el layout queda autoexplicativo y es más accesible.
- **Prueba Figma** (encargo del profe) para wireframes y mockups colaborativos — aunque ⚠️ recuerda que esa parte no se evalúa en el examen.

---

## 6. Bootstrap

> **TL;DR.** Bootstrap es un *framework* de HTML, CSS y JavaScript creado originalmente por Twitter para construir interfaces web responsive de forma rápida. Tú no escribes CSS: solo escribes HTML y le aplicas **clases** ya hechas que el framework te da. Se incluye con dos enlaces de CDN (un `<link>` para el CSS y un `<script>` para el JS). Su pilar es el **sistema de rejilla** de 12 columnas (`container` > `row` > `col`) y la filosofía **mobile first** (el móvil es lo primero). Trae además clases de utilidad (márgenes, colores, display) y componentes listos (botones, tarjetas, navbar, formularios, carruseles, modales...). 🔥 Cae seguro en el examen y la práctica evaluable de la 2ª evaluación es con Bootstrap.

### Conceptos clave

- **Framework**: una librería de código ya hecho. En vez de programar el CSS desde cero, usas las clases que el framework te ofrece. "Yo no tengo que hacer nada", solo el HTML con la clase correspondiente.
- **Bootstrap 5**: versión más estable a día de hoy, salió en 2021. Usa **Vanilla JavaScript** (JS puro), ya **no necesita jQuery** (a diferencia de Bootstrap 4).
- **Mobile first**: metodología propia de Bootstrap. El móvil es lo primero; el diseño se construye pensando primero en pantallas pequeñas y luego se adapta hacia arriba.
- **Responsive design**: que la web se adapte a cualquier dispositivo (móvil, tablet, ordenador). Es la característica más importante de Bootstrap.
- **Viewport**: la zona visible que usamos para dibujar la página web. Hay un viewport real y un viewport virtual.
- **Sistema de rejilla (grid)**: estructura mental de filas y columnas, como una tabla invisible. Cada fila tiene hasta **12 casillas (columnas)**.
- **Container**: contenedor obligatorio que envuelve los elementos de Bootstrap. **No se pueden anidar** contenedores.
- **Breakpoints**: puntos de corte por tamaño de pantalla, nombrados como tallas de camiseta: `sm`, `md`, `lg`, `xl`, `xxl`.
- **Clases de utilidad**: clases sueltas para márgenes, padding, colores, alineación, display, etc.
- **Componentes**: elementos visuales completos que unen CSS y JavaScript (botones, tarjetas, navbar, carruseles, modales...).
- **Colores contextuales / semánticos**: `primary`, `secondary`, `success`, `info`, `warning`, `danger`... no solo dan color, dan **significado**.

### Explicación detallada

#### 6.1. ¿Qué es Bootstrap y para qué sirve?

Bootstrap es un **framework** unido a la parte de CSS. Fue creado en principio por **Twitter** (ahora X): los desarrolladores de la parte visual de Twitter pensaron en crear un framework que funcionara de manera más o menos estable y manejable. Apareció en **2011** (hace unos 15 años).

Un framework es como una **librería**: tú usas el código que ya está hecho. No tienes que generar más código que el HTML con la clase correspondiente. Bootstrap trae muchísimas plantillas para generar interfaces de cualquier tipo de web: HTML, CSS, tipografías, formas, botones, fondos, barras de navegación... muchísimas clases y estructuras ya preparadas.

Es un framework **orientado a programadores**, no tanto a diseñadores, porque requiere cierta habilidad con HTML y CSS. Aun así, el profe insiste: usar Bootstrap **es más fácil que usar CSS** directamente; lo que pasa es que al principio resulta raro.

**Ventajas:**
- Es muy fácil y rápido construir webs.
- Da enseguida un aspecto profesional.
- Es **responsive design**: se adapta a cualquier dispositivo.
- Compatible con el 99 % de los navegadores.
- Es **software libre**: no hay que pagar licencias. Depende de la fundación de desarrolladores, no de una empresa.

**Inconvenientes:**
- Da la sensación de que todas las webs hechas con Bootstrap **se parecen entre sí**.
- No es muy fácil añadirle personalizaciones de estilo: el código de Bootstrap se enreda y mezclarlo con tu propio CSS a veces se complica.

#### 6.2. Bootstrap 4 vs Bootstrap 5 🔥

| Característica | Bootstrap 4 | Bootstrap 5 |
|---|---|---|
| Motor JavaScript | Usa **jQuery** | Usa **Vanilla JavaScript** (ya no necesita jQuery) |
| Breakpoints | 5 niveles: `xs`, `sm`, `md`, `lg`, `xl` | 6 niveles: añade `xxl` |
| Internet Explorer | Todavía funciona | Se eliminan los códigos de compatibilidad: IE ya no se soporta |
| Iconos | Se cargaban con una **librería externa** | Vienen incluidos en su propia librería (Bootstrap Icons) |

Sigue siendo importante conocer Bootstrap 4 porque hay mucho código en GitHub y en librerías hecho con esa versión.

#### 6.3. Cómo incluir Bootstrap 🔥

Para usar Bootstrap necesitas incluir **dos cosas**: el CSS y el JavaScript. La forma habitual es por **CDN** (enlaces a un servidor externo), copiados desde la web oficial `getbootstrap.com` en su apartado de inicio rápido.

Además, hay que definir el **viewport** con una etiqueta `<meta>`: es la "página en blanco" que nos da Bootstrap para empezar nuestro lienzo HTML, y le indica al navegador que use el viewport virtual para que la web sea responsive.

Existen versiones **mínimas** de la librería (los archivos con `.min.css` y `.min.js` traen el mínimo de funcionalidades para que funcione) y versiones más completas. Para clase, con la mínima sobra.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <!-- VIEWPORT: imprescindible para que la web sea responsive (mobile first) -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mi primer Bootstrap</title>

  <!-- 1) CSS de Bootstrap por CDN (versión 5.3) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- (Opcional) Aquí podría ir TU propio CSS, después del de Bootstrap -->
  <link href="css/estilos.css" rel="stylesheet">
</head>
<body>

  <!-- Aquí va el contenido: container, row, col... -->
  <div class="container">
    <h1>¡Hola Mundo con Bootstrap!</h1>
  </div>

  <!-- 2) JavaScript de Bootstrap por CDN (al final del body) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

También se puede **descargar** la librería y enlazarla en local en vez de usar el CDN; el `<link>` y el `<script>` apuntarían entonces a archivos de tu propio proyecto.

> 🔥 Regla de oro: el CSS de Bootstrap va en el `<head>`; el JS va al **final del `<body>`**. Si añades tu propio CSS, ponlo **después** del de Bootstrap para que pueda sobrescribirlo.

#### 6.4. El sistema de rejilla (grid) 🔥🔥

Esta es la base de Bootstrap. La estructura mental: la pantalla se divide en **filas y columnas**, como una tabla invisible. La intersección es la **celda**, y el ancho de la celda se mide en **casillas**. Cada fila tiene hasta **12 casillas**.

La jerarquía es siempre la misma: **`container` → `row` → `col`**.

- **`container`**: contenedor obligatorio. Hay dos clases:
  - `container`: contenedor **fijo**, deja márgenes a los lados.
  - `container-fluid`: contenedor **fluido**, ocupa el 100 % del ancho, sin márgenes laterales (como hacen los dispositivos móviles).
  - ⚠️ Los contenedores **no se pueden anidar**: no metas un `container` dentro de otro. Si necesitas otro, lo cierras y abres uno nuevo.
- **`row`**: una fila. Dentro de ella van las columnas.
- **`col`**: una columna. La suma de los anchos de las columnas de una fila debe dar **12**.

**Cómo se reparten las 12 columnas:** tú, como programador, decides. Si pones `col-1 col-1 col-1 ...` (doce veces uno) suma 12. Si pones `col-2 col-4 col-6` suma 12. Si pones `col-6 col-6` suma 12. `col-12` ocupa toda la fila. Si en una fila no pones tamaño (`col` a secas), Bootstrap reparte el espacio a partes iguales automáticamente.

**Los breakpoints (tamaños de pantalla):** las columnas pueden llevar un sufijo de tamaño. La idea (mobile first): el estilo se aplica **desde ese breakpoint hacia arriba**.

| Clase | Para pantallas... | Tamaño aproximado |
|---|---|---|
| `col-*` | extra pequeñas (móvil) | menos de ~576 px |
| `col-sm-*` | pequeñas | ≥ 576 px |
| `col-md-*` | medianas (tablet) | ≥ 768 px |
| `col-lg-*` | grandes | ≥ 992 px |
| `col-xl-*` | extra grandes | ≥ 1200 px |
| `col-xxl-*` | extra extra grandes (Bootstrap 5) | ≥ 1400 px |

Como CSS es **en cascada**, si pones varias clases de tamaño a la vez (`col-12 col-sm-6 col-md-4 col-lg-2`), Bootstrap intenta aplicar el estilo que corresponda al dispositivo: usa la regla del tamaño más grande que encaje, y si no, baja al siguiente. En un ordenador caben las 12 casillas en fila; en una tablet, el mismo elemento puede colocarse 6 y 6; en un móvil, 4-4-4 o lo que quepa, **apilándose** cuando no cabe.

```html
<!-- GRID BÁSICO: container > row > col -->
<div class="container">           <!-- contenedor fijo, con márgenes -->
  <div class="row">               <!-- una fila -->
    <div class="col">Columna 1</div>   <!-- 3 columnas iguales -->
    <div class="col">Columna 2</div>   <!-- Bootstrap reparte 4+4+4 -->
    <div class="col">Columna 3</div>
  </div>
</div>
```

```html
<!-- GRID CON ANCHOS EXPLÍCITOS: cada fila suma 12 -->
<div class="container">
  <div class="row">
    <!-- 12 columnas de ancho 1 cada una -> 1x12 = 12 -->
    <div class="col-1">1</div><div class="col-1">1</div><div class="col-1">1</div>
    <div class="col-1">1</div><div class="col-1">1</div><div class="col-1">1</div>
    <div class="col-1">1</div><div class="col-1">1</div><div class="col-1">1</div>
    <div class="col-1">1</div><div class="col-1">1</div><div class="col-1">1</div>
  </div>
  <div class="row">
    <div class="col-2">2</div>   <!-- 2 + 4 + 6 = 12 -->
    <div class="col-4">4</div>
    <div class="col-6">6</div>
  </div>
  <div class="row">
    <div class="col-4">4</div>   <!-- 4 + 4 + 4 = 12 -->
    <div class="col-4">4</div>
    <div class="col-4">4</div>
  </div>
  <div class="row">
    <div class="col-6">6</div>   <!-- 6 + 6 = 12 -->
    <div class="col-6">6</div>
  </div>
  <div class="row">
    <div class="col-12">12 (ocupa toda la fila)</div>
  </div>
</div>
```

```html
<!-- GRID RESPONSIVE: una columna que cambia de ancho según el dispositivo -->
<div class="container">
  <div class="row">
    <!-- En móvil ocupa 12 (toda la fila). En tablet 6. En grande 4. -->
    <div class="col-12 col-md-6 col-lg-4">Bloque A</div>
    <div class="col-12 col-md-6 col-lg-4">Bloque B</div>
    <div class="col-12 col-md-6 col-lg-4">Bloque C</div>
  </div>
</div>
```

#### 6.5. Clases de utilidad

Bootstrap trae clases sueltas para tareas concretas. Estas son las que el profe enseñó y las habituales:

**Márgenes (`m-*`) y padding (`p-*`):** el formato es `{propiedad}{lado}-{tamaño}`. La propiedad es `m` (margin) o `p` (padding); el lado es `t` (top), `b` (bottom), `s` (start/izquierda), `e` (end/derecha), `x` (izq+der), `y` (arriba+abajo) o nada (los cuatro lados); el tamaño va de `0` a `5` (y `auto` para márgenes).

```html
<div class="m-3 p-4">Caja con margen 3 y padding 4 en todos los lados</div>
<div class="mt-5 mb-0">Margen arriba grande, sin margen abajo</div>
<div class="mx-auto" style="width:200px;">Caja centrada horizontalmente con mx-auto</div>
<div class="px-2 py-4">Padding horizontal pequeño, vertical grande</div>
```

**Colores de texto (`text-*`) y de fondo (`bg-*`):** usan los **colores contextuales (semánticos)**.

```html
<!-- Colores de TEXTO -->
<p class="text-primary">Texto primario (azul de Twitter)</p>
<p class="text-secondary">Texto secundario (gris)</p>
<p class="text-success">Texto de éxito (verde)</p>
<p class="text-danger">Texto de peligro (rojo)</p>
<p class="text-warning">Texto de aviso (amarillo)</p>
<p class="text-info">Texto informativo (azul claro)</p>
<p class="text-white bg-dark">Texto blanco sobre fondo oscuro</p>

<!-- Colores de FONDO -->
<div class="bg-primary text-white p-3">Fondo primario</div>
<div class="bg-success text-white p-3">Fondo verde de éxito</div>
<div class="bg-warning p-3">Fondo amarillo de aviso</div>
<div class="bg-light p-3">Fondo claro</div>
<div class="bg-dark text-white p-3">Fondo oscuro</div>
```

**Display:** controlan la propiedad `display` y, muy importante, sirven para **ocultar** elementos según el dispositivo.

```html
<!-- d-none oculta SIEMPRE; d-md-block lo muestra A PARTIR de tamaño md -->
<div class="d-none d-md-block">
  Esto se OCULTA en móvil y se MUESTRA en tablet/escritorio (ideal para publicidad)
</div>
<span class="d-inline">Soy inline</span>
<div class="d-block">Soy block</div>
```

**Flex utilities:** Bootstrap integra flexbox con clases. Sirven sobre todo para **alinear** (horizontal y vertical).

```html
<!-- Contenedor flex con el contenido centrado horizontalmente -->
<div class="d-flex justify-content-center">
  <div>Estoy centrado</div>
</div>
<div class="d-flex justify-content-start">...alineado al inicio</div>
<div class="d-flex justify-content-end">...alineado al final</div>
<div class="d-flex justify-content-between">A — B — C separados</div>

<!-- Alineación vertical -->
<div class="d-flex align-items-center" style="height:150px;">
  <div>Centrado verticalmente</div>
</div>
```

#### 6.6. Tipografía y display headings

Bootstrap da formato automático a la tipografía. Las tipografías que trae son muy parecidas entre sí (Twitter/X no las ha cambiado mucho). Para títulos grandes están las clases `display-1` a `display-6` (los típicos `<h_>` más vistosos). También clases para tamaño de fuente, cursiva, mayúsculas, negrita, etc.

```html
<!-- Display headings: títulos grandes y llamativos -->
<h1 class="display-1">Display 1</h1>
<h1 class="display-4">Display 4</h1>

<!-- Utilidades de texto -->
<p class="fs-1">Tamaño de fuente 1 (grande)</p>
<p class="fs-6">Tamaño de fuente 6 (pequeño)</p>
<p class="fw-bold">Negrita</p>
<p class="fst-italic">Cursiva</p>
<p class="text-uppercase">todo en mayúsculas</p>
<p class="text-center">Texto centrado</p>
<p class="text-start">Texto al inicio</p>
<p class="text-end">Texto al final</p>
<p class="lead">Párrafo destacado (lead)</p>
```

> ❓ No hay que saberse las clases de memoria. En el examen podrás consultar la web `getbootstrap.com` todo el rato; lo importante es **saber buscar** en su documentación.

#### 6.7. Iconos

Bootstrap 5 incluye su propia librería de iconos, **Bootstrap Icons** (en `icons.getbootstrap.com`). En Bootstrap 4 los iconos se cargaban con una librería externa; ahora vienen incluidos.

```html
<!-- En el head, incluir la hoja de iconos -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

<!-- Uso: una etiqueta <i> con la clase del icono -->
<i class="bi bi-house"></i> Inicio
<i class="bi bi-search"></i> Buscar
<button class="btn btn-primary"><i class="bi bi-cart"></i> Comprar</button>
```

### Sintaxis y ejemplos comentados

#### Botones — `btn btn-*` 🔥

La clase base es `btn`. Luego se le añade una **segunda clase semántica** (`btn-primary`, `btn-success`...) que es la que coge la cascada para darle el color.

```html
<!-- Botón = type button + clase base btn + clase de color -->
<button type="button" class="btn btn-primary">Primary (azul de Twitter)</button>
<button type="button" class="btn btn-secondary">Secondary (gris)</button>
<button type="button" class="btn btn-success">Success (verde)</button>
<button type="button" class="btn btn-danger">Danger (rojo)</button>
<button type="button" class="btn btn-warning">Warning (amarillo)</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-link">Link (parece un enlace)</button>

<!-- Botones "outline": solo el borde coloreado, se rellenan al pasar el ratón -->
<button type="button" class="btn btn-outline-primary">Outline primary</button>
<button type="button" class="btn btn-outline-success">Outline success</button>

<!-- Botón deshabilitado -->
<button type="button" class="btn btn-primary" disabled>Deshabilitado</button>
```

#### Grupos de botones — `btn-group` / `btn-group-vertical`

Sirven para juntar botones, y también para crear **menús**.

```html
<!-- Grupo HORIZONTAL de botones, tamaño pequeño (sm), todos success -->
<div class="btn-group btn-group-sm" role="group">
  <button type="button" class="btn btn-success">Izquierda</button>
  <button type="button" class="btn btn-success">Centro</button>
  <button type="button" class="btn btn-success">Derecha</button>
</div>

<!-- Grupo VERTICAL: misma idea, pero apilados -->
<div class="btn-group-vertical" role="group">
  <button type="button" class="btn btn-success">Arriba</button>
  <button type="button" class="btn btn-success">Medio</button>
  <button type="button" class="btn btn-success">Abajo</button>
</div>
```

#### Menús desplegables — `dropdown`

Se crea la clase `dropdown`, un botón que lo abre, una lista `dropdown-menu` y dentro los `dropdown-item`.

```html
<!-- 'dropdown' = el menú se despliega hacia abajo -->
<div class="dropdown">
  <!-- Botón que abre el menú (gris porque es btn-secondary) -->
  <button class="btn btn-secondary dropdown-toggle" type="button"
          data-bs-toggle="dropdown" aria-expanded="false">
    Opciones
  </button>
  <!-- La lista de opciones -->
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Opción 1</a></li>
    <li><a class="dropdown-item" href="#">Opción 2</a></li>
    <li><a class="dropdown-item" href="#">Opción 3</a></li>
  </ul>
</div>
```

#### Imágenes

Bootstrap añade clases para redondear, recuadrar o hacer fluida una imagen.

```html
<!-- rounded: esquinas redondeadas con el contorno por defecto -->
<img src="img/coche1.jpg" class="rounded" alt="Coche 1">

<!-- rounded-circle: la convierte en círculo -->
<img src="img/coche2.jpg" class="rounded-circle" alt="Coche 2">

<!-- img-thumbnail: estilo miniatura, con borde -->
<img src="img/coche3.jpg" class="img-thumbnail" alt="Coche 3">

<!-- img-fluid: 🔥 imagen FLUIDA, se adapta al ancho del contenedor sin pasarse.
     Sin esta clase la imagen NO se adapta y se sale del contenedor. -->
<img src="img/coche1.jpg" class="img-fluid" alt="Coche fluido">
```

#### Tablas — `table`

Clase base `table` y modificadores. Es una parte "menos currada" de Bootstrap (con CSS puede quedar mejor).

```html
<!-- table = base; table-striped = filas alternadas; table-bordered = bordes;
     table-hover = resalta la fila al pasar el ratón; table-dark = oscura -->
<table class="table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <th>#</th><th>Producto</th><th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Coche A</td><td>20.000 €</td></tr>
    <tr><td>2</td><td>Coche B</td><td>25.000 €</td></tr>
    <tr><td>3</td><td>Coche C</td><td>30.000 €</td></tr>
  </tbody>
</table>
```

#### Tarjetas — `card` 🔥

Una de las cosas más típicas de Bootstrap (antes, en versiones anteriores, se llamaban *panels*). Crea una estructura con **cabecera**, **cuerpo** y **pie**.

```html
<!-- card = la tarjeta; w-25 = ancho del 25% -->
<div class="card w-25">
  <!-- Cabecera de la tarjeta -->
  <div class="card-header">Cabecera</div>

  <!-- Imagen fluida para que no se salga del ancho de la tarjeta -->
  <img src="img/coche1.jpg" class="img-fluid" alt="Producto">

  <!-- Cuerpo: título, texto y un botón -->
  <div class="card-body">
    <h3 class="card-title">Título del producto</h3>
    <p class="card-text">Descripción breve del producto.</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>

  <!-- Pie de la tarjeta -->
  <div class="card-footer">Pie de la tarjeta</div>
</div>
```

#### Formularios — `form-control`

La clase `form-control` se aplica a inputs y selects: les da el estilo y ayuda con el control de errores. Para checkbox y radios se usa `form-check-input` dentro de un `form-check`.

```html
<form>
  <!-- Campo de texto: label + input con form-control -->
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" placeholder="Tu nombre">
  </div>

  <!-- Campo email -->
  <div class="mb-3">
    <label for="correo" class="form-label">Correo</label>
    <input type="email" class="form-control" id="correo" required>
  </div>

  <!-- Campo contraseña -->
  <div class="mb-3">
    <label for="pass" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="pass" required>
  </div>

  <!-- Checkbox: form-check + form-check-input + form-check-label -->
  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" id="acepto">
    <label class="form-check-label" for="acepto">Acepto las condiciones</label>
  </div>

  <!-- Radio buttons -->
  <div class="form-check">
    <input class="form-check-input" type="radio" name="plan" id="plan1">
    <label class="form-check-label" for="plan1">Plan básico</label>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="radio" name="plan" id="plan2">
    <label class="form-check-label" for="plan2">Plan premium</label>
  </div>

  <button type="submit" class="btn btn-success">Enviar</button>
</form>
```

#### Alertas — `alert`

```html
<!-- alert = base; alert-{color} = tipo semántico -->
<div class="alert alert-success" role="alert">¡Operación correcta!</div>
<div class="alert alert-danger" role="alert">Ha ocurrido un error.</div>
<div class="alert alert-warning" role="alert">Cuidado con esto.</div>
<div class="alert alert-info" role="alert">Información para el usuario.</div>

<!-- Alerta que se puede cerrar -->
<div class="alert alert-primary alert-dismissible" role="alert">
  Mensaje cerrable
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

#### Badges (etiquetas) — `badge`

```html
<!-- Pequeña etiqueta de color, útil para contadores o estados -->
<h3>Mensajes <span class="badge bg-danger">4</span></h3>
<span class="badge bg-success">Nuevo</span>
<span class="badge bg-secondary">Borrador</span>
<button class="btn btn-primary">Notificaciones <span class="badge bg-light text-dark">9</span></button>
```

#### Barras de progreso — `progress`

```html
<!-- progress = la barra; progress-bar = el relleno; w-50 = al 50% -->
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>

<!-- Con color de éxito -->
<div class="progress">
  <div class="progress-bar bg-success" style="width: 75%;">75%</div>
</div>

<!-- Rojo (danger) y rayada/animada -->
<div class="progress">
  <div class="progress-bar bg-danger progress-bar-striped" style="width: 25%;">25%</div>
</div>
```

#### Carrusel — `carousel` 🔥

Cinta de fotografías que se desplazan horizontalmente, con título y texto, que puede pasar sola cada 5 segundos.

```html
<!-- carousel + slide = avanza solo; carousel-light = controles claros.
     id necesario para que los botones sepan a qué carrusel apuntan -->
<div id="miCarrusel" class="carousel slide carousel-light" data-bs-ride="carousel">

  <!-- carousel-inner contiene todos los items -->
  <div class="carousel-inner">

    <!-- Cada diapositiva es un carousel-item. El primero lleva 'active' -->
    <div class="carousel-item active">
      <img src="img/coche1.jpg" class="d-block w-100" alt="Coche 1">
      <div class="carousel-caption">
        <h3>Coche 1</h3>
        <p>Texto descriptivo del coche 1</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="img/coche2.jpg" class="d-block w-100" alt="Coche 2">
      <div class="carousel-caption">
        <h3>Coche 2</h3>
        <p>Texto descriptivo del coche 2</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="img/coche3.jpg" class="d-block w-100" alt="Coche 3">
      <div class="carousel-caption">
        <h3>Coche 3</h3>
        <p>Texto descriptivo del coche 3</p>
      </div>
    </div>
  </div>

  <!-- Botón ANTERIOR (control-prev) -->
  <button class="carousel-control-prev" type="button" data-bs-target="#miCarrusel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>

  <!-- Botón SIGUIENTE (control-next) -->
  <button class="carousel-control-next" type="button" data-bs-target="#miCarrusel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

#### Modales — `modal`

Ventana emergente. Necesita el JS de Bootstrap incluido.

```html
<!-- Botón que abre el modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
  Abrir modal
</button>

<!-- El modal en sí -->
<div class="modal" id="miModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Contenido de la ventana emergente.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
```

#### Navbar — barra de navegación 🔥

Lo más "pesado" de crear. Necesita un `<nav>` con `navbar`, un logo (`navbar-brand`), un botón hamburguesa para móvil, y la lista de enlaces.

```html
<!-- navbar = base; navbar-expand-lg = se despliega a partir de lg, antes hamburguesa;
     navbar-dark bg-dark = tema oscuro -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">

    <!-- Logo / marca -->
    <a class="navbar-brand" href="#">
      <img src="img/coche1.jpg" width="30" alt="Logo"> MiWeb
    </a>

    <!-- Botón hamburguesa: aparece en móvil para desplegar el menú -->
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Contenido colapsable: enlaces -->
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Productos</a></li>

        <!-- Menú desplegable dentro de la navbar (una lista dentro de la lista) -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Más</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Opción A</a></li>
            <li><a class="dropdown-item" href="#">Opción B</a></li>
          </ul>
        </li>

        <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
      </ul>

      <!-- Formulario de búsqueda dentro de la navbar -->
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar">
        <button class="btn btn-outline-light" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
```

### Ejercicios resueltos

🔥 Bootstrap cae en el examen. En el examen podrás consultar la web oficial; lo que se evalúa es que sepas estructurar y aplicar las clases.

**Ejercicio 1 — Maquetar una página con el grid de Bootstrap.**
Crea una página con cabecera (ancho 12), un contenido principal de 3 columnas iguales y un pie (ancho 12).

**Solución:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Maquetación con grid</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <!-- Cabecera: ocupa toda la fila -->
    <div class="row">
      <div class="col-12 bg-primary text-white p-3">Cabecera</div>
    </div>
    <!-- Contenido: 3 columnas de 4 (4+4+4 = 12) -->
    <div class="row">
      <div class="col-4 bg-light p-3">Columna 1</div>
      <div class="col-4 bg-light p-3">Columna 2</div>
      <div class="col-4 bg-light p-3">Columna 3</div>
    </div>
    <!-- Pie: ocupa toda la fila -->
    <div class="row">
      <div class="col-12 bg-dark text-white p-3">Pie de página</div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```
**Explicación:** todo va dentro de un único `container`. Cada bloque es una `row`. La cabecera y el pie usan `col-12` (toda la fila). El contenido usa tres `col-4` que suman 12. Se añaden clases de utilidad `bg-*`, `text-white` y `p-3` para que se vea.

---

**Ejercicio 2 — Galería de tarjetas responsive.**
Crea una galería de 4 tarjetas de producto que en móvil se vean a 1 por fila, en tablet a 2 por fila y en escritorio a 4 por fila.

**Solución:**
```html
<div class="container">
  <div class="row">
    <!-- col-12 (móvil) / col-md-6 (tablet) / col-lg-3 (escritorio) -->
    <div class="col-12 col-md-6 col-lg-3 mb-3">
      <div class="card">
        <img src="img/coche1.jpg" class="img-fluid" alt="Coche 1">
        <div class="card-body">
          <h3 class="card-title">Coche 1</h3>
          <p class="card-text">Descripción del coche 1.</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 mb-3">
      <div class="card">
        <img src="img/coche2.jpg" class="img-fluid" alt="Coche 2">
        <div class="card-body">
          <h3 class="card-title">Coche 2</h3>
          <p class="card-text">Descripción del coche 2.</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 mb-3">
      <div class="card">
        <img src="img/coche3.jpg" class="img-fluid" alt="Coche 3">
        <div class="card-body">
          <h3 class="card-title">Coche 3</h3>
          <p class="card-text">Descripción del coche 3.</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 mb-3">
      <div class="card">
        <img src="img/coche1.jpg" class="img-fluid" alt="Coche 4">
        <div class="card-body">
          <h3 class="card-title">Coche 4</h3>
          <p class="card-text">Descripción del coche 4.</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  </div>
</div>
```
**Explicación:** la clave está en `col-12 col-md-6 col-lg-3`: 12 (1 por fila en móvil), 6 (2 por fila en tablet, 6+6=12), 3 (4 por fila en escritorio, 3+3+3+3=12). Cada tarjeta usa `card` + `img-fluid` para que la imagen no se salga + `card-body`. El `mb-3` separa las filas cuando se apilan.

---

**Ejercicio 3 — Formulario de registro con `form-control`.**
Crea un formulario de registro con nombre, email, contraseña, un checkbox de aceptación y un botón de enviar.

**Solución:**
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 mx-auto">
      <h2 class="text-center mb-4">Registro</h2>
      <form>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre completo</label>
          <input type="text" class="form-control" id="nombre" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="pass" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="pass" required>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="acepto" required>
          <label class="form-check-label" for="acepto">Acepto las condiciones</label>
        </div>
        <button type="submit" class="btn btn-success w-100">Crear cuenta</button>
      </form>
    </div>
  </div>
</div>
```
**Explicación:** el formulario se centra con `col-md-6 mx-auto` (ocupa media fila y se centra). Cada campo va envuelto en un `div` con `mb-3` para separarlos. Los inputs llevan `form-control`; el checkbox usa `form-check` + `form-check-input` + `form-check-label`. El botón `btn btn-success w-100` ocupa todo el ancho. El atributo `required` activa la validación de HTML5 que Bootstrap acompaña visualmente.

---

**Ejercicio 4 — Navbar responsive.**
Crea una barra de navegación oscura con logo, tres enlaces y que en móvil se colapse en un botón hamburguesa.

**Solución:**
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MiTienda</a>
    <!-- Botón hamburguesa: visible solo cuando el menú está colapsado (móvil) -->
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Catálogo</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
      </ul>
    </div>
  </div>
</nav>
```
**Explicación:** `navbar-expand-lg` hace que el menú se muestre completo a partir del breakpoint `lg`; por debajo de eso, se colapsa y aparece el `navbar-toggler` (hamburguesa). El `data-bs-target="#navMenu"` conecta el botón con el `div` colapsable. ⚠️ Necesita el `<script>` de Bootstrap incluido para que el botón funcione.

---

**Ejercicio 5 — Layout de 3 columnas que se apilan en móvil.**
Crea un layout con menú lateral, contenido central y barra de anuncios; en escritorio van en 3 columnas (3-6-3) y en móvil se apilan.

**Solución:**
```html
<div class="container">
  <div class="row">
    <!-- Menú lateral: 12 en móvil, 3 en escritorio -->
    <div class="col-12 col-lg-3 bg-light p-3">
      <h4>Menú</h4>
      <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
      </ul>
    </div>
    <!-- Contenido central: 12 en móvil, 6 en escritorio -->
    <div class="col-12 col-lg-6 p-3">
      <h2>Contenido principal</h2>
      <p>Texto del artículo...</p>
    </div>
    <!-- Anuncios: se OCULTAN en móvil (d-none) y se ven en escritorio (d-lg-block) -->
    <div class="col-12 col-lg-3 bg-warning p-3 d-none d-lg-block">
      <h4>Publicidad</h4>
      <p>Anuncio aquí</p>
    </div>
  </div>
</div>
```
**Explicación:** `col-12 col-lg-3/6/3` da 3-6-3 en escritorio (suma 12) y apilado en móvil. Además, la columna de anuncios usa `d-none d-lg-block`: se oculta en móvil y solo aparece en pantallas grandes, justo el caso de uso de publicidad que explicó el profe.

---

**Ejercicio 6 — Tarjeta de producto con badge, alerta y botón.**
Crea una tarjeta de producto con una etiqueta "Oferta", una alerta de stock y un botón de compra.

**Solución:**
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4 mx-auto">
      <div class="card">
        <div class="card-header">
          Producto destacado <span class="badge bg-danger">Oferta</span>
        </div>
        <img src="img/coche1.jpg" class="img-fluid" alt="Producto">
        <div class="card-body">
          <h3 class="card-title">Coche deportivo</h3>
          <p class="card-text">Un coche increíble a buen precio.</p>
          <div class="alert alert-success" role="alert">¡En stock!</div>
          <a href="#" class="btn btn-primary w-100">Comprar ahora</a>
        </div>
        <div class="card-footer text-center text-muted">Envío gratis</div>
      </div>
    </div>
  </div>
</div>
```
**Explicación:** combina varios componentes: `card` con `card-header`/`card-body`/`card-footer`, un `badge bg-danger` dentro de la cabecera, una `alert alert-success` dentro del cuerpo y un `btn btn-primary w-100`. La imagen lleva `img-fluid` para no salirse. Todo centrado con `col-md-4 mx-auto`.

---

**Ejercicio 7 — Grid de 12 columnas demostrativo.**
Muestra en una sola página filas que sumen 12 de distintas maneras: 12, 6+6, 4+4+4, 3+3+3+3 y 2+4+6.

**Solución:**
```html
<div class="container">
  <div class="row"><div class="col-12 bg-primary text-white p-2">col-12</div></div>
  <div class="row">
    <div class="col-6 bg-success text-white p-2">col-6</div>
    <div class="col-6 bg-success text-white p-2">col-6</div>
  </div>
  <div class="row">
    <div class="col-4 bg-info p-2">col-4</div>
    <div class="col-4 bg-info p-2">col-4</div>
    <div class="col-4 bg-info p-2">col-4</div>
  </div>
  <div class="row">
    <div class="col-3 bg-warning p-2">col-3</div>
    <div class="col-3 bg-warning p-2">col-3</div>
    <div class="col-3 bg-warning p-2">col-3</div>
    <div class="col-3 bg-warning p-2">col-3</div>
  </div>
  <div class="row">
    <div class="col-2 bg-danger text-white p-2">col-2</div>
    <div class="col-4 bg-danger text-white p-2">col-4</div>
    <div class="col-6 bg-danger text-white p-2">col-6</div>
  </div>
</div>
```
**Explicación:** cada `row` reparte las 12 casillas de forma distinta, pero **todas suman 12**. Es exactamente el primer ejercicio que enseñó el profe en clase para entender el reparto del grid.

---

### Visuales a revisar

- [📺 `08_Tema4_Boostrap_1.md`, aprox. 00:30] — explicación de qué es Bootstrap, sus orígenes en Twitter y la filosofía mobile first.
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 12:00] — tabla comparativa Bootstrap 4 vs 5 (jQuery vs Vanilla JS, breakpoints, IE, iconos).
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 18:00] — la web oficial `getbootstrap.com`: apartado de inicio rápido, los dos códigos a copiar (CSS y JS) y la documentación.
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 28:00] — concepto de viewport y viewport virtual; el diseño basado en grid.
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 42:00] — primer ejercicio del grid: filas que suman 12 (1×12, 2+4+6, 4+4+4, 5+7, 6+6, 12) y cómo se adaptan al cambiar el tamaño de ventana.
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 52:00] — `container` vs `container-fluid` en el mismo ejercicio; demostración de cómo el fluido ocupa todo el ancho.
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 1:02:00] — ocultación de elementos con `d-none` y `d-md-block` (ejemplo "publicidad 1 / publicidad 2").
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 1:12:00] — alineación: `text-start/center/end`, `justify-content-*`, tamaños con porcentajes (w-75, h-50).
- [📺 `08_Tema4_Boostrap_1.md`, aprox. 1:25:00] — tipografías, clases `display`, colores de texto (`text-success`, `text-white`, `text-warning`) y fondos `bg-*`.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 02:00] — repaso de componentes y colores contextuales/semánticos.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 10:00] — botones: `btn` + clase de color; botones outline; grupos de botones horizontales y verticales.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 22:00] — menús desplegables con `dropdown` / `dropdown-menu` / `dropdown-item`.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 32:00] — imágenes: `rounded`, `rounded-circle`, `img-thumbnail`, `img-fluid`; demostración de imagen fluida vs no fluida.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 42:00] — tablas: `table`, `table-striped`, `table-bordered`, `table-hover`.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 52:00] — tarjetas (`card`): `card-header`, `card-body`, `card-footer`, `w-25`, imagen fluida dentro.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 1:02:00] — formularios: `form-control`, `form-check-input`, validación al enviar.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 1:15:00] — carruseles: `carousel slide`, `carousel-inner`, `carousel-item`, `active`, botones prev/next, paso automático cada 5 s.
- [📺 `09_Tema4_Boostrap_2.md`, aprox. 1:28:00] — barras de progreso (`progress`/`progress-bar`) y navbar con menú desplegable y buscador.

### Cubierto en

- Clase 08 (Tema 4, Bootstrap parte 1) — `08_Tema4_Boostrap_1.md`
- Clase 09 (Tema 4, Bootstrap parte 2) — `09_Tema4_Boostrap_2.md`

### Pitfalls y buenas prácticas

**Errores comunes:**

- **Anidar contenedores.** No metas un `container` dentro de otro `container`: no funcionará bien y los elementos se desalinean. Si necesitas otro contenedor, cierra el anterior y abre uno nuevo.
- **Que las columnas de una `row` no sumen 12.** Si te pasas de 12, las columnas sobrantes se van a la fila siguiente; si te quedas corto, sobra hueco. Comprueba siempre la suma.
- **Olvidar el `<meta name="viewport">`.** Sin esa etiqueta el responsive no funciona y la web se ve mal en móvil.
- **Olvidar el `<script>` de Bootstrap.** Los componentes con JavaScript (carrusel, modal, dropdown, navbar colapsable, alertas cerrables) no funcionan sin el JS incluido al final del `<body>`.
- **No cerrar bien los contenedores.** Igual que con las etiquetas HTML, si un `container`, `row` o `card` queda sin cerrar, la estructura se descoloca.
- **Olvidar `img-fluid` en las imágenes.** Las imágenes sin esa clase **no se adaptan** al contenedor y se salen del diseño (como le pasó al profe en clase).
- **El `carousel-item` activo.** Hay que poner `active` en una diapositiva (lo habitual es la primera); si no, el carrusel puede dar error o no mostrar nada.
- **Pelearte con Bootstrap para personalizar.** Bootstrap no te deja hacer absolutamente todo. Forzar personalizaciones con un CSS de "override" gigante enreda mucho el proyecto.

**Buenas prácticas:**

- **Sabe buscar en la documentación.** No hay que memorizar las clases: en el examen podrás consultar `getbootstrap.com`. Lo que se valora es que sepas estructurar y encontrar la clase que necesitas.
- **Practica con ejercicios pequeños.** "Una vez que te sabes las 10 clases que usas todo el rato, todo es igual". Haz 3-4 ejercicios de cada componente.
- **Respeta la jerarquía `container > row > col`.** No te saltes pasos: siempre contenedor, luego fila, luego columna.
- **Usa los breakpoints encadenados** (`col-12 col-md-6 col-lg-4`) cuando no sepas desde qué dispositivo se verá la web: así se adapta a todos.
- **Usa los colores semánticos correctamente.** `success` para algo correcto, `danger` para errores/peligro, `warning` para avisos. No solo dan color, dan significado, y eso mejora la accesibilidad y la semántica.
- **Coherencia con el resto de tecnologías.** Para la práctica evaluable, el profe quiere que el código sea tuyo en un 90-99 %: usa Bootstrap "puro" y no mezcles tecnologías (Bootstrap + CSS propio + Tailwind) salvo necesidad real.
- **Prueba siempre en móvil.** El profe corrige la práctica evaluable en un dispositivo pequeño para comprobar que se adapta. Reduce la ventana del navegador o usa las herramientas de desarrollador para verlo.
- **El CSS propio, después del de Bootstrap.** Si añades estilos tuyos, enlázalos después del `<link>` de Bootstrap para que la cascada te deje sobrescribir.

---

## 7. Multimedia: imágenes y SVG

> **TL;DR.** La web moderna mezcla texto, vídeo, audio e imágenes, y como programadores front necesitamos saber **insertarlos bien**. En este tema vemos los formatos de imagen (JPG, PNG, GIF, WebP, SVG), la diferencia entre **mapa de bits** y **vectorial**, la etiqueta `<img>` a fondo (`src`, `alt`, `width`, `height`, `loading="lazy"`), las imágenes **responsive** (`srcset`, `sizes` y la etiqueta `<picture>` con `<source>`), `<figure>`/`<figcaption>`, imágenes de fondo en CSS y, sobre todo, **SVG**: un lenguaje de marcas (mezcla de HTML y XML) que dibuja imágenes vectoriales en tiempo real con `<rect>`, `<circle>`, `<line>`, `<polygon>`, `<path>`, `<text>`... Cerramos con optimización de imágenes y derechos de autor.

### Conceptos clave

- 🔥 **Mapa de bits (raster)**: la imagen es una rejilla de píxeles, cada uno con su color. Al ampliarla se "pixela" (pierde calidad). Formatos: JPG, PNG, GIF, WebP.
- 🔥 **Vectorial**: la imagen es una serie de **instrucciones matemáticas** (dibuja un círculo aquí, una línea allá). Se genera en tiempo real y **no pierde calidad** al escalar. Formato: SVG.
- **`<img>`**: la etiqueta clásica de toda la vida para insertar una imagen. Sigue siendo válida.
- **`<picture>` + `<source>`**: evolución de `<img>` (HTML 5.1). Permite ofrecer **varias versiones** de la misma imagen y que el navegador elija la mejor según formato o tamaño de pantalla.
- **`srcset` y `sizes`**: atributos para imágenes **responsive** (la imagen se adapta al dispositivo).
- **`<figure>` / `<figcaption>`**: etiquetas semánticas para una imagen (u otro contenido) con su pie de foto.
- 🔥 **SVG** = *Scalable Vector Graphics* (gráfico vectorial escalable). Lenguaje de marcas parecido a XML. Licencia Creative Commons → las imágenes que generes son de dominio público.
- **`viewBox`**: el "folio" o zona visible de un SVG. Define dónde empieza el dibujo y su ancho/alto.
- **Optimización**: a igualdad de calidad, una imagen más ligera carga más rápido → mejor experiencia y mejor SEO.
- **Derechos de autor**: las imágenes son de alguien. Para uso real necesitas licencia. Excepciones: docencia y parodia (sin ánimo de lucro).

### Explicación detallada

#### 7.1 Multimedia en la web: el contexto

Nosotros no somos diseñadores, somos **programadores**, pero como desarrolladores front tenemos que saber **incrustar multimedia** en nuestras interfaces: imágenes, vídeo, audio, animaciones. Hoy en día prácticamente toda web lo lleva: una tienda online (piensa en IKEA, con muebles que giras en 3D), un periódico digital con vídeos y galerías de fotos, o tu propio *layout* con un logo.

La multimedia web ha **evolucionado** mucho. Hace 20 años dominaba **Flash** (de Adobe); hoy está prácticamente en desuso. Con la llegada de **HTML5 y CSS3**, todo (vídeo, gráficos, animaciones) se puede hacer con HTML + CSS + JavaScript, sin plugins. El auge de las redes sociales con vídeo (Instagram, TikTok) ha empujado aún más esta evolución.

> **Ojo a los derechos de autor** 🔥. Las imágenes, vídeos y audios **tienen propietario**. La *Ley de Propiedad Intelectual* (en España) protege al autor. No puedes descargar una imagen de cualquier sitio y ponerla en tu web sin licencia que lo permita. Dos excepciones donde sí se puede usar sin consentimiento: **docencia/investigación** (citando la fuente) y **parodia/comedia** (siempre que quede claro y no haya riesgo de confusión). En ambos casos, **sin ánimo de lucro**. Si tu proyecto lo vas a vender, ya estás en terreno legal delicado. Existen licencias **copyleft** (como Creative Commons) que permiten redistribuir y modificar; Linux funciona así desde hace décadas.

#### 7.2 Mapa de bits vs vectorial

Esta es **la** distinción fundamental del tema:

- **Mapa de bits (bitmap / raster)**: la imagen se guarda como una **cuadrícula de píxeles**, cada píxel con su color. Una foto de tu móvil es esto. Problema: si la amplías más allá de su resolución, se ve "pixelada" (pierde calidad), porque no hay más información que inventar. Formatos: **JPG, PNG, GIF, WebP**.
- **Vectorial**: la imagen NO guarda píxeles, guarda **instrucciones**: "dibuja un círculo de radio 50 en la posición (60,60) y rellénalo de rojo". El navegador la **genera en tiempo real**. Como es matemática pura, puedes escalarla a cualquier tamaño **sin perder calidad**. Formato: **SVG**.

```text
MAPA DE BITS (JPG/PNG/GIF/WebP)        VECTORIAL (SVG)
- rejilla de píxeles                   - instrucciones matemáticas
- se pixela al ampliar                 - escalable sin perder calidad
- pesa más a igual calidad             - suele pesar menos
- ideal para fotografías               - ideal para logos, iconos, gráficos
- la genera una cámara/editor          - la genera el navegador en tiempo real
```

#### 7.3 Los formatos de imagen para web

El profe da una "pincelada" de cada uno. Hay muchos más, pero estos son los que te vas a encontrar trabajando en web:

- **JPG / JPEG** (*Joint Photographic Experts Group*). Pensado por gente de fotografía, no de web. El **99 %** de las fotos del mundo están en este formato. Norma ISO aprobada en el año 2000, actualizada en 2019. Usa **compresión con pérdida** (se descarta información para que pese menos). **Cuándo usarlo**: fotografías, imágenes con muchos colores y degradados. **No** soporta transparencia.
- **GIF** (*Graphics Interchange Format*). Muy antiguo, de **1987**. Solo **256 colores** (2⁸ = 1 byte de colores). Permite **animaciones** (desde los 90) y transparencia básica. **Cuándo usarlo**: hoy casi nada; algún gif animado puntual. Mala opción para fotografías.
- **PNG** (*Portable Network Graphics*). Apareció como alternativa libre a GIF y compitiendo con JPG. Soporta **muchísimos más colores**, **transparencia** (canal alfa) y mejor compresión **sin pérdida**. Formato libre (sin pagar licencia). **Cuándo usarlo**: logos, iconos, capturas, imágenes con transparencia o con texto/bordes nítidos.
- **WebP**. Formato moderno de **mapa de bits** impulsado por **Google**. Sirve para imágenes estáticas y animadas, con buena compresión. **Cuándo usarlo**: cuando quieras imágenes ligeras y el navegador lo soporte (hoy casi todos). Todavía algo minoritario.
- **SVG** (*Scalable Vector Graphics*). El único **vectorial** de la lista. Es un **lenguaje de marcas**. **Cuándo usarlo**: logos, iconos, gráficos, ilustraciones planas, cualquier cosa que deba escalar perfectamente.

> ❓ El profe también nombra de pasada **JPEG 2000** y **JPEG XR** ("es lo mismo pero de diferente empresa") y "APNG" como alternativa animada a GIF. No entra en detalle. Si no estás seguro de que un formato sea compatible con un navegador, simplemente **pruébalo** o búscalo.

🔥 **Regla práctica de qué formato usar**:
- ¿Es una **foto**? → JPG (o WebP).
- ¿Tiene **transparencia** o es un logo/icono con bordes nítidos? → PNG (o SVG si es vectorial).
- ¿Es un **logo, icono o gráfico** que debe escalar sin pixelarse? → SVG.
- ¿Quieres el **menor peso** posible y el navegador lo soporta? → WebP.

#### 7.4 La etiqueta `<img>` a fondo

`<img>` es la etiqueta de **toda la vida** para insertar imágenes. Es una etiqueta **vacía** (no tiene cierre). Sus atributos clave:

- **`src`** 🔥: la ruta (URL) del archivo de imagen. Obligatorio.
- **`alt`** 🔥: **texto alternativo**. Se muestra si la imagen no carga y lo leen los lectores de pantalla (accesibilidad) y los buscadores (SEO). **Nunca lo omitas.**
- **`width`** y **`height`**: ancho y alto. Puedes usar las unidades de siempre (píxeles, porcentaje, `em`...). Indicarlos ayuda al navegador a **reservar el hueco** antes de cargar la imagen (evita "saltos" en la maquetación).
- **`loading="lazy"`** 🔥: **carga diferida**. La imagen no se descarga hasta que el usuario está a punto de verla al hacer scroll. Mejora mucho el rendimiento en páginas con muchas imágenes.

```html
<!-- Imagen básica con todos los atributos importantes -->
<img src="imagenes/gato.jpg"        <!-- ruta del archivo -->
     alt="Gato naranja durmiendo"   <!-- texto alternativo: accesibilidad + SEO -->
     width="400"                    <!-- ancho en píxeles -->
     height="300"                   <!-- alto en píxeles -->
     loading="lazy">                <!-- no se carga hasta que se va a ver -->
```

#### 7.5 Imágenes responsive: `srcset`, `sizes` y `<picture>`

El problema: una foto enorme de 2000 px se ve bien en un monitor, pero en un móvil es un **desperdicio de datos**. Solución: ofrecer **varias versiones** y que el navegador elija.

**Opción A — `srcset` y `sizes` dentro de `<img>`**: das una lista de imágenes con su anchura real y el navegador escoge.

```html
<!-- El navegador elige la imagen según el ancho del dispositivo -->
<img src="foto-800.jpg"                              <!-- imagen por defecto (fallback) -->
     srcset="foto-400.jpg 400w,                      <!-- versión de 400px de ancho -->
             foto-800.jpg 800w,                      <!-- versión de 800px de ancho -->
             foto-1200.jpg 1200w"                    <!-- versión de 1200px de ancho -->
     sizes="(max-width: 600px) 100vw, 50vw"          <!-- cuánto espacio ocupará la imagen -->
     alt="Paisaje de montaña">
```

**Opción B — la etiqueta `<picture>`** 🔥. Apareció en **HTML 5.1**. Es la "evolución" de `<img>`. Contiene una o varias etiquetas **`<source>`** y, **obligatoriamente al final, un `<img>`** como respaldo (fallback) por si ningún `<source>` aplica. El navegador recorre los `<source>` de arriba abajo y usa **el primero que cumpla la condición**.

Dos usos típicos:

1. **Por formato**: ofreces la misma imagen en WebP, PNG... y el navegador coge la que mejor sepa mostrar.

```html
<!-- El navegador usa WebP si lo soporta; si no, baja al PNG; si no, al <img> -->
<picture>
  <source srcset="logo.webp" type="image/webp">   <!-- 1ª opción: WebP -->
  <source srcset="logo.png"  type="image/png">    <!-- 2ª opción: PNG -->
  <img src="logo.png" alt="Logotipo de la empresa"><!-- respaldo obligatorio -->
</picture>
```

2. **Por tamaño de pantalla** (con el atributo `media`): según el ancho del dispositivo se carga una imagen u otra. Es una "adaptación al dispositivo".

```html
<!-- Imagen distinta según el ancho de la ventana -->
<picture>
  <source media="(min-width: 1000px)" srcset="banner-grande.jpg">  <!-- pantallas grandes -->
  <source media="(min-width: 600px)"  srcset="banner-medio.jpg">   <!-- tablets -->
  <img src="banner-pequeno.jpg" alt="Banner promocional">          <!-- móviles / respaldo -->
</picture>
```

> 🔥 Atributos de `<source>`: **`srcset`** (la imagen o lista de imágenes), **`type`** (el tipo MIME del formato), **`media`** (una *media query*, con `min-width` / `max-width`), **`sizes`** (tamaños). Esto se llama tener un **"portfolio" de imágenes**: la misma imagen creada en varias calidades/formatos para adaptarla a las circunstancias.

> El profe se confiesa "clásico": él sigue usando `<img>`. Pero a partir de ahora **puedes usar las dos**, y `<picture>` es lo recomendado para responsive.

#### 7.6 `<figure>` y `<figcaption>`

`<figure>` es una etiqueta **semántica** que agrupa un contenido (normalmente una imagen, pero puede ser código, un diagrama...) que se referencia desde el texto. `<figcaption>` es su **pie de foto** o leyenda, y puede ir al principio o al final del `<figure>`.

```html
<!-- Imagen con su pie de foto, semánticamente correcta -->
<figure>
  <img src="imagenes/coliseo.jpg" alt="El Coliseo de Roma al atardecer">
  <figcaption>El Coliseo de Roma, año 80 d.C. Fuente: Wikimedia Commons.</figcaption>
</figure>
```

Ventaja: el navegador y los buscadores entienden que esa imagen y ese texto **van juntos**. Además es buen sitio para **citar la fuente** del autor (recuerda los derechos de autor).

#### 7.7 Imágenes de fondo en CSS

Además de `<img>` (que es **contenido**), puedes poner una imagen como **fondo decorativo** de cualquier elemento con la propiedad CSS `background-image`. Regla práctica: si la imagen es **información** usa `<img>` (con su `alt`); si es **decoración**, usa `background-image`.

```css
/* Imagen de fondo de una sección, controlada por completo desde CSS */
.cabecera {
  background-image: url("imagenes/fondo.jpg"); /* la ruta de la imagen */
  background-size: cover;        /* la imagen cubre todo el elemento sin deformarse */
  background-position: center;   /* se centra */
  background-repeat: no-repeat;  /* no se repite en mosaico */
  height: 400px;                 /* el div necesita altura para que se vea el fondo */
}
```

#### 7.8 SVG: gráficos vectoriales escalables

🔥 **SVG** = *Scalable Vector Graphics*. Es un **lenguaje de marcas**, una mezcla entre HTML y XML. No guarda píxeles: guarda **instrucciones de dibujo** que el navegador ejecuta **en tiempo real**, dentro del propio documento HTML, **sin depender de ninguna aplicación externa**.

**Ventajas del SVG** 🔥:
- **Escalable**: no pierde calidad nunca, lo amplíes lo que lo amplíes.
- **Ligero**: a igualdad de calidad ocupa menos que un mapa de bits.
- **Editable / indexable**: si la imagen tiene texto (`<text>`), los buscadores (Google, Bing...) pueden **indexarlo** → ayuda al SEO.
- **No depende de otra app**: solo del navegador y de HTML.
- **Licencia Creative Commons**: las imágenes que generes son de **dominio público**.

**Inconvenientes**:
- Tienes que **aprender un lenguaje nuevo**.
- Con **muchos elementos** se vuelve **lento** (un elemento solo es instantáneo).
- **Aumenta la complejidad** del proyecto (ya tienes HTML, CSS, JS... y le sumas otro lenguaje).

**El "folio" de SVG** 🔥. SVG trabaja sobre un **plano infinito**. El punto central es el `(0,0)`. A la **izquierda** y **hacia arriba** los números son **negativos**; a la **derecha** y **hacia abajo**, **positivos**. Las coordenadas son **invisibles** (no las ves dibujadas). **No hace falta poner unidades**: si no las pones usa **píxeles**.

La etiqueta raíz es **`<svg>`** y necesita:
- **`version`**: la versión del lenguaje. El profe usa la **1.1** (existe la 2, pero es más compleja).
- **`xmlns`** (espacio de nombres): **siempre** `http://www.w3.org/2000/svg`. Indica de dónde "coge" el lenguaje.
- **`width`** y **`height`**: ancho y alto de la imagen que se va a generar.
- **`viewBox`** 🔥: define el "folio" o **zona visible**. Lleva **4 valores**: `min-x min-y ancho alto`. Los dos primeros dicen **dónde se coloca el cursor** (esquina superior izquierda del folio); los dos últimos, el **ancho y alto** del folio. Si pones `viewBox="-200 -200 400 400"` el dibujo queda **centrado** en el `(0,0)`.
- Opcionalmente una etiqueta **`<style>`** con reglas CSS.

> 🔥 **Lo que se sale del folio NO se ve.** Si dibujas un círculo más grande que el `viewBox`, solo verás la parte que cae dentro del folio; el resto "se queda en la mesa" y no aparece en la página.

**Formas básicas que dibujas dentro del `<svg>`**:

- **`<rect>`** — rectángulo. Atributos: `x`, `y` (esquina superior izquierda), `width`, `height`, y opcionalmente `rx`/`ry` para **esquinas redondeadas**.
- **`<circle>`** — círculo. Funciona "como un compás": `cx`, `cy` (centro) y `r` (radio).
- **`<line>`** — línea recta. `x1`, `y1` (punto inicial) y `x2`, `y2` (punto final).
- **`<polygon>`** — polígono cerrado (p. ej. una estrella). Atributo `points` con la lista de puntos `x,y`.
- **`<polyline>`** — línea quebrada (varios segmentos), no se cierra.
- **`<ellipse>`** — elipse (`cx`, `cy`, `rx`, `ry`).
- **`<path>`** — el más potente: dibuja **cualquier forma** mediante comandos en su atributo `d`.
- **`<text>`** — texto dentro del SVG (indexable por buscadores).

**Atributos de estilo comunes a las formas**:
- **`fill`**: color de **relleno**.
- **`stroke`**: color de la **línea / borde / trazo**.
- **`stroke-width`**: **grosor** de la línea.

**SVG como imagen externa**. No tienes por qué escribir el SVG dentro del HTML. Puedes guardarlo en un archivo `.svg` e insertarlo **igual que cualquier imagen**, con `<img src="dibujo.svg">`. El profe lo enseña así: un `ejemplo.html` que hace `<img src="circulo.svg">`. También se puede escribir **SVG inline** (el `<svg>` directamente dentro del HTML), que permite manipularlo con CSS y JavaScript.

> ❓ El profe nombra **`<canvas>`** como "primo" del SVG: también dibuja gráficos, pero `<canvas>` **necesita JavaScript** para programar el dibujo; SVG no lo necesita (aunque puede combinarse). SVG sí permite **animaciones** (que algo parezca que se mueve), pero **no scripts maliciosos**: solo puede dibujar dentro de su lienzo; no se puede "meter un virus en la imagen".

> ❓ El profe también menciona los **mapas de imágenes** (`<map>` / `<area>` con `<img usemap>`): trocear una imagen en zonas (rectángulos, círculos, polígonos) que son **enlaces**. Al hacer clic en una zona te lleva a otra página (ejemplo: el mapa de España de la web del tiempo). Funciona con cualquier formato de imagen, incluido SVG. No es materia de examen, pero es buena idea para croquis (mesas de un restaurante, asientos de un tren...).

### Sintaxis y ejemplos comentados

#### `<img>` — todos los atributos

```html
<!-- src: ruta obligatoria. alt: texto si no carga + accesibilidad + SEO -->
<!-- width/height: reservan el hueco. loading="lazy": carga diferida -->
<img src="fotos/playa.jpg"
     alt="Atardecer en una playa de arena blanca"
     width="600"
     height="400"
     loading="lazy">
```

#### `<picture>` con `<source>` por formato

```html
<picture>
  <!-- source 1: si el navegador soporta WebP, usa esta y para de buscar -->
  <source srcset="producto.webp" type="image/webp">
  <!-- source 2: si no soportó WebP, prueba PNG -->
  <source srcset="producto.png" type="image/png">
  <!-- <img> SIEMPRE al final: respaldo obligatorio y aquí van alt/width -->
  <img src="producto.png" alt="Zapatilla deportiva azul" width="300">
</picture>
```

#### `<picture>` con `media` (responsive por tamaño)

```html
<picture>
  <!-- media: media query. Si la ventana mide 992px o más, carga la grande -->
  <source media="(min-width: 992px)" srcset="hero-desktop.jpg">
  <!-- entre 600 y 991px, la mediana -->
  <source media="(min-width: 600px)"  srcset="hero-tablet.jpg">
  <!-- por debajo de 600px (o si nada aplica), la pequeña -->
  <img src="hero-movil.jpg" alt="Imagen principal de la portada">
</picture>
```

#### `<figure>` + `<figcaption>`

```html
<figure>
  <img src="grafico-ventas.png" alt="Gráfico de barras de ventas anuales">
  <!-- figcaption: el pie de foto. Puede ir antes o después del <img> -->
  <figcaption>Figura 1. Ventas por trimestre en 2025. Fuente: departamento financiero.</figcaption>
</figure>
```

#### Imagen de fondo en CSS

```css
.tarjeta {
  background-image: url("img/textura.png"); /* ruta de la imagen de fondo */
  background-repeat: no-repeat;             /* sin mosaico */
  background-size: cover;                   /* cubre el elemento, recortando si hace falta */
  background-position: center center;       /* centrada horizontal y verticalmente */
}
```

#### SVG inline — estructura base

```html
<!-- version: 1.1. xmlns: SIEMPRE esta URL. width/height: tamaño de la imagen -->
<!-- viewBox: "min-x min-y ancho alto" -> aquí queda centrado en el (0,0) -->
<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     width="400" height="200"
     viewBox="-200 -100 400 200">
  <!-- <style> opcional: se puede meter CSS dentro del SVG -->
  <style>
    circle { stroke: black; stroke-width: 2; }
  </style>
  <!-- aquí dentro van las formas -->
  <circle cx="0" cy="0" r="50" fill="red"></circle>
</svg>
```

#### `<circle>` — círculo (el "compás")

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="120" height="120" viewBox="0 0 120 120">
  <!-- cx,cy: centro del círculo. r: radio. fill: color de relleno -->
  <circle cx="60" cy="60" r="50" fill="red"></circle>
</svg>
```

#### Varios `<circle>` (y cómo te sales del folio)

```html
<!-- viewBox pequeño: 100x100 centrado en el (0,0) -> de -50 a +50 -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="100" height="100" viewBox="-50 -50 100 100">
  <!-- estos círculos están en el borde: parte de ellos SE SALE del folio
       y esa parte NO se verá (se queda "en la mesa") -->
  <circle cx="-50" cy="0" r="25" fill="blue"></circle>   <!-- mitad fuera por la izquierda -->
  <circle cx="50"  cy="0" r="25" fill="green"></circle>  <!-- mitad fuera por la derecha -->
  <circle cx="0"   cy="0" r="25" fill="orange"></circle> <!-- este sí cabe entero -->
</svg>
```

#### `<rect>` — rectángulo (con esquinas redondeadas)

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="200" height="120" viewBox="0 0 200 120">
  <!-- x,y: esquina superior izquierda. width,height: tamaño -->
  <!-- rx,ry: radio de las esquinas redondeadas (opcional) -->
  <rect x="20" y="20" width="160" height="80" rx="15" ry="15" fill="red"></rect>
</svg>
```

#### `<line>` — línea recta

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="200" height="100" viewBox="0 0 200 100">
  <!-- x1,y1: punto inicial. x2,y2: punto final -->
  <!-- una línea NECESITA stroke (color) para verse; fill no le afecta -->
  <line x1="10" y1="10" x2="190" y2="90" stroke="black" stroke-width="3"></line>
</svg>
```

#### `<polygon>` — una estrella

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="200" height="200" viewBox="-100 -100 200 200">
  <!-- points: lista de puntos "x,y" que se van uniendo. El polígono se cierra solo -->
  <polygon points="0,-80 23,-25 80,-25 35,12 50,68 0,35 -50,68 -35,12 -80,-25 -23,-25"
           fill="gold" stroke="orange" stroke-width="3"></polygon>
</svg>
```

#### `<text>` dentro del SVG (indexable por buscadores)

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="300" height="100" viewBox="0 0 300 100">
  <!-- x,y: posición del texto. fill: color del texto -->
  <text x="20" y="55" fill="navy" font-size="30">Hola SVG</text>
</svg>
```

#### `<path>` — la forma libre

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="100" height="100" viewBox="0 0 100 100">
  <!-- d: comandos de dibujo. M = mover el lápiz, L = línea hasta, Z = cerrar -->
  <path d="M10 10 L90 10 L50 90 Z" fill="purple"></path> <!-- un triángulo -->
</svg>
```

#### SVG como imagen externa

```html
<!-- el archivo circulo.svg se inserta como CUALQUIER otra imagen -->
<img src="circulo.svg" alt="Círculo rojo dibujado en SVG" width="120">
```

### Ejercicios resueltos

**Ejercicio 1 — Galería de imágenes responsive con `<picture>`.**
Crea una galería de 2 imágenes. Cada imagen debe servirse en **WebP** si el navegador lo soporta y en **JPG** como respaldo. Además, una de ellas debe cambiar de versión según el ancho de pantalla.

**Solución:**

```html
<section class="galeria">
  <h2>Galería de viaje</h2>

  <!-- Imagen 1: por formato (WebP con respaldo JPG) -->
  <figure>
    <picture>
      <source srcset="img/montana.webp" type="image/webp">
      <source srcset="img/montana.jpg"  type="image/jpeg">
      <img src="img/montana.jpg" alt="Montaña nevada al amanecer"
           width="500" loading="lazy">
    </picture>
    <figcaption>Los Alpes en invierno.</figcaption>
  </figure>

  <!-- Imagen 2: por tamaño de pantalla (responsive con media) -->
  <figure>
    <picture>
      <source media="(min-width: 900px)" srcset="img/playa-grande.jpg">
      <source media="(min-width: 500px)" srcset="img/playa-media.jpg">
      <img src="img/playa-peque.jpg" alt="Playa tropical con palmeras"
           width="500" loading="lazy">
    </picture>
    <figcaption>Playa del Caribe.</figcaption>
  </figure>
</section>
```

**Explicación:** cada `<picture>` recorre sus `<source>` de arriba abajo y usa el primero que aplica; el `<img>` final es el respaldo obligatorio (y lleva `alt` y `loading="lazy"`). El primer bloque elige por **formato** (`type`), el segundo por **tamaño** (`media`). Todo envuelto en `<figure>`/`<figcaption>` para que sea semántico.

---

**Ejercicio 2 — Dibujar formas con SVG inline.**
Crea un SVG de 200×200 con el `viewBox` centrado en el `(0,0)` que dibuje: un rectángulo azul, un círculo rojo y una línea negra.

**Solución:**

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="200" height="200" viewBox="-100 -100 200 200">

  <!-- Rectángulo azul: esquina superior izq en (-80,-80), 60x60 -->
  <rect x="-80" y="-80" width="60" height="60" fill="blue"></rect>

  <!-- Círculo rojo: centro en (40,-50), radio 35 -->
  <circle cx="40" cy="-50" r="35" fill="red"></circle>

  <!-- Línea negra: del (-90,80) al (90,30), grosor 4 -->
  <line x1="-90" y1="80" x2="90" y2="30" stroke="black" stroke-width="4"></line>

</svg>
```

**Explicación:** el `viewBox="-100 -100 200 200"` hace que el `(0,0)` quede en el centro del folio, por lo que usamos coordenadas negativas para la mitad izquierda/superior. `<rect>` usa `x,y` (esquina), `<circle>` usa `cx,cy` (centro) y `r`, y `<line>` necesita `stroke` para verse (con `fill` no se vería).

---

**Ejercicio 3 — Un icono SVG (una "casa").**
Diseña un icono sencillo de una casa combinando un rectángulo (la fachada) y un polígono (el tejado), como archivo `casa.svg`, e insértalo en el HTML.

**Solución:**

`casa.svg`:
```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="100" height="100" viewBox="0 0 100 100">

  <!-- Tejado: triángulo con polygon (3 puntos) -->
  <polygon points="50,15 90,50 10,50" fill="brown"></polygon>

  <!-- Fachada: rectángulo bajo el tejado -->
  <rect x="20" y="50" width="60" height="40" fill="orange"></rect>

  <!-- Puerta: un rectángulo pequeño dentro de la fachada -->
  <rect x="42" y="65" width="16" height="25" fill="saddlebrown"></rect>

</svg>
```

HTML:
```html
<!-- el icono se usa como una imagen normal -->
<img src="casa.svg" alt="Icono de una casa" width="64">
```

**Explicación:** un icono SVG no es más que varias formas combinadas. Como es vectorial, ese mismo `casa.svg` se ve nítido tanto a 16 px como a 500 px. Lo insertamos con `<img>` igual que cualquier otra imagen.

---

**Ejercicio 4 — Imagen con `<figure>` y `<figcaption>` y cita de la fuente.**
Inserta una fotografía con su pie de foto, citando al autor (recuerda los derechos de autor).

**Solución:**

```html
<figure>
  <!-- alt describe la imagen; loading lazy por rendimiento -->
  <img src="fotos/coliseo.jpg"
       alt="El Coliseo de Roma iluminado de noche"
       width="600" loading="lazy">
  <!-- figcaption: pie de foto + fuente del autor -->
  <figcaption>
    El Coliseo de Roma. Fotografía de Ana Pérez, publicada bajo licencia
    Creative Commons en Wikimedia Commons.
  </figcaption>
</figure>
```

**Explicación:** `<figure>` agrupa imagen + leyenda como una unidad semántica. El `<figcaption>` es el lugar natural para **citar la fuente**, algo obligatorio cuando usas imágenes de terceros (salvo que sean tuyas o de dominio público). El `alt` sigue siendo imprescindible para accesibilidad y SEO.

---

**Ejercicio 5 — Comparar el peso de los formatos.**
Explica, mediante una tabla, qué formato elegirías para cada caso de una web y por qué, teniendo en cuenta el peso.

**Solución:**

```html
<table>
  <thead>
    <tr><th>Caso</th><th>Formato</th><th>Motivo</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Foto de portada (paisaje)</td>
      <td>JPG o WebP</td>
      <td>Muchos colores y degradados; JPG comprime bien las fotos. WebP pesa aún menos.</td>
    </tr>
    <tr>
      <td>Logotipo de la empresa</td>
      <td>SVG</td>
      <td>Vectorial: escala sin pixelarse y pesa muy poco. PNG si fuera necesario raster.</td>
    </tr>
    <tr>
      <td>Icono de menú</td>
      <td>SVG</td>
      <td>Nítido a cualquier tamaño, ligero e indexable si lleva texto.</td>
    </tr>
    <tr>
      <td>Captura con transparencia</td>
      <td>PNG</td>
      <td>Soporta canal alfa (transparencia) y bordes nítidos; JPG no tiene transparencia.</td>
    </tr>
    <tr>
      <td>Animación corta y graciosa</td>
      <td>GIF (o WebP animado)</td>
      <td>GIF permite animación, aunque solo 256 colores; WebP animado pesa menos.</td>
    </tr>
  </tbody>
</table>
```

**Explicación:** a igualdad de calidad visual, **el formato más ligero gana**, porque la página carga más rápido. La clave es: **fotos → JPG/WebP** (compresión con pérdida, muchos colores); **logos e iconos → SVG** (vectorial, ligero, escalable); **transparencias → PNG**; **animaciones simples → GIF/WebP**. Elegir mal el formato es uno de los errores que más ralentizan una web.

---

**Ejercicio 6 — SVG: varias formas y un texto en un mismo lienzo.**
Crea un SVG que dibuje una "diana": dos círculos concéntricos y un texto debajo con la palabra "DIANA".

**Solución:**

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="200" height="240" viewBox="0 0 200 240">

  <!-- Círculo exterior rojo -->
  <circle cx="100" cy="100" r="80" fill="red"></circle>

  <!-- Círculo interior blanco con borde negro -->
  <circle cx="100" cy="100" r="35" fill="white"
          stroke="black" stroke-width="3"></circle>

  <!-- Texto centrado debajo de los círculos -->
  <text x="55" y="220" fill="black" font-size="28">DIANA</text>

</svg>
```

**Explicación:** al ser concéntricos, ambos `<circle>` comparten `cx` y `cy`; el orden importa (el segundo se dibuja **encima** del primero). El `<text>` se posiciona con `x,y` (la `y` es la línea base del texto) y, al ser SVG, ese texto es **seleccionable e indexable** por los buscadores, a diferencia de un texto "quemado" dentro de un JPG.

### Visuales a revisar

- [📺 10_Tema5_Multimedia_SVG.md, aprox. 03:00] — Introducción: multimedia en la web, evolución desde Flash hasta HTML5/CSS3.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 09:30] — Derechos de autor: Ley de Propiedad Intelectual, excepciones (docencia y parodia), licencias copyleft / Creative Commons.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 18:00] — La etiqueta `<img>` clásica y las unidades de medida.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 22:00] — `<picture>` y `<source>`: imágenes responsive por formato y por `media` (`min-width`/`max-width`).
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 30:00] — Diapositiva resumen de formatos de imagen: PNG, JPG, GIF, WebP, SVG, JPEG 2000, JPEG XR.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 36:00] — Detalle de cada formato: JPG, GIF (1987, 256 colores), PNG, WebP (Google).
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 48:00] — Mapas de imágenes en directo: la web del tiempo, el mapa de España troceado en zonas-enlace.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 56:00] — Iframes: incrustar un vídeo de YouTube con `<iframe>`, atributos (`width`, `height`, `autoplay`).
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 01:05:00] — Introducción a SVG: lenguaje de marcas, plano infinito, el `(0,0)` central, ejes positivos/negativos.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 01:14:00] — Estructura del `<svg>`: `version`, `xmlns`, `width`, `height`, `viewBox`, `<style>`.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 01:22:00] — `<circle>` en vivo: ejemplo `circulo.svg` insertado con `<img>`, colorear con `fill`.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 01:30:00] — Varios círculos: demostración de cómo lo que se sale del `viewBox` no se ve.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 01:38:00] — `<rect>` con esquinas redondeadas y `<polygon>` (la estrella), `<line>`, `<polyline>`, `<ellipse>`.
- [📺 10_Tema5_Multimedia_SVG.md, aprox. 01:48:00] — Preguntas de clase: mapas de imágenes con SVG, animaciones, `<canvas>` y JavaScript.

### Cubierto en

- Clase 10 (Tema 5, Multimedia y SVG) — `10_Tema5_Multimedia_SVG.md`

### Pitfalls y buenas prácticas

**Errores comunes:**

- ❌ **Omitir el `alt` en `<img>`.** Sin `alt` rompes la accesibilidad (los lectores de pantalla no pueden describir la imagen) y pierdes SEO. Si la imagen es puramente decorativa, pon `alt=""` (vacío, pero presente).
- ❌ **Usar el formato equivocado.** Poner una foto en PNG (pesa muchísimo) o un logo en JPG (se pixela y no tiene transparencia). Foto → JPG/WebP; logo/icono → SVG; transparencia → PNG.
- ❌ **Olvidar el `<img>` final dentro de `<picture>`.** El `<img>` es **obligatorio** y es el respaldo: si falta y ningún `<source>` aplica, no se ve nada.
- ❌ **En SVG, dibujar fuera del `viewBox`.** Todo lo que se salga del folio simplemente **no aparece**. Si "falta" un trozo de tu dibujo, revisa las coordenadas y el `viewBox`.
- ❌ **Poner `fill` a una `<line>` esperando que se vea.** Una línea solo se ve con `stroke` (y `stroke-width`); `fill` no le afecta.
- ❌ **Olvidar el atributo `xmlns` en `<svg>`.** Sin el espacio de nombres `http://www.w3.org/2000/svg` el navegador puede no renderizar el SVG. Es **siempre el mismo**, cópialo tal cual.
- ❌ **Confundir `<circle>` con `<rect>`.** `<circle>` usa `cx,cy` (el **centro**); `<rect>` usa `x,y` (la **esquina superior izquierda**). Mezclarlos descoloca el dibujo.
- ❌ **Usar imágenes de internet sin licencia** en un proyecto real. Te pueden denunciar. Comprueba siempre la licencia o usa bancos de imágenes libres.
- ❌ **Imágenes gigantes sin optimizar.** Subir una foto de 5 MB cuando se ve en un recuadro de 300 px dispara el tiempo de carga.

**Buenas prácticas:**

- ✅ **Siempre `alt` descriptivo** en `<img>`: describe lo que se ve, brevemente.
- ✅ **Indica `width` y `height`** (o reserva el espacio por CSS): evita los "saltos" de la maquetación mientras carga la imagen.
- ✅ **Usa `loading="lazy"`** en imágenes que estén por debajo del primer pantallazo: cargan solo cuando hacen falta.
- ✅ **Optimiza las imágenes** antes de subirlas: redúcelas al tamaño real al que se mostrarán y comprímelas. A igualdad de calidad, **menos peso = mejor**.
- ✅ **Usa `<picture>` para responsive**: ofrece varias versiones (formato y/o tamaño) y deja que el navegador elija; tener ese "portfolio" de imágenes mejora rendimiento y calidad.
- ✅ **Elige SVG para logos e iconos**: escala perfecto, pesa poco y, si lleva `<text>`, los buscadores lo indexan.
- ✅ **Usa `<figure>` + `<figcaption>`** cuando una imagen tenga pie de foto, y **cita la fuente** del autor ahí.
- ✅ **Distingue contenido de decoración**: imagen informativa → `<img>` con `alt`; imagen decorativa → `background-image` en CSS.
- ✅ **En SVG empieza por la estructura**: `version`, `xmlns`, `width`, `height`, `viewBox`; luego dibuja dentro. Es obligatorio crear el "folio" antes de meter formas.
- ✅ **Prueba la compatibilidad** de un formato si no estás seguro: insértalo y mira si el navegador lo entiende.
- ✅ **No abuses del SVG con muchísimos elementos**: con muchos nodos se vuelve lento; para imágenes muy complejas, mejor un mapa de bits.

---

## 8. Multimedia: audio, vídeo e integración

> **TL;DR.** HTML5 trae soporte **nativo** para audio y vídeo: ya no hace falta Flash ni plugins de terceros. Con `<audio>` insertas sonido y con `<video>` insertas vídeo, ambos con atributos como `controls`, `autoplay`, `loop`, `muted` o `poster`. Como no todos los navegadores entienden todos los formatos, usamos varias etiquetas `<source>` (MP3/OGG/WAV para audio; MP4/WebM/OGG para vídeo) y el navegador elige la que sabe reproducir. Para incrustar contenido de fuera (YouTube, mapas) usamos `<iframe>`; `<embed>` y `<object>` son alternativas más antiguas (y `<object>` es la vía para los viejos Flash `.flv`). Todo esto, bien hecho, mejora rendimiento, accesibilidad, compatibilidad móvil y hasta el SEO.

### Conceptos clave

- **Multimedia**: audio, vídeo e imágenes incluidos dentro de una web. Es un **valor añadido**, no es obligatorio en todas las webs (el profe ni lo pide en el proyecto ni en la práctica final, pero hay que saber hacerlo).
- **Soporte nativo (HTML5 media)** 🔥: las versiones antiguas de HTML **no** sabían reproducir audio/vídeo por sí solas; necesitaban una aplicación de terceros (un *plugin*) como **Adobe Flash**. HTML5 incorpora las etiquetas `<audio>` y `<video>` que el navegador entiende **sin instalar nada**.
- **Códec**: el algoritmo de **compresión/descompresión** del audio y del vídeo. Un fichero "bit a bit" sin comprimir ocupa muchísimo; el códec lo reduce para que se pueda mover por la web.
- **Formato (extensión)**: el "envoltorio" del fichero (`.mp3`, `.ogg`, `.mp4`, `.webm`, `.ogv`, `.wav`). Un mismo contenido puede existir en varios formatos.
- **Estándar**: los formatos de HTML5 son estándares abiertos; no dependes de una empresa externa ni de pagar licencias.
- **`<source>`** 🔥: etiqueta hija de `<audio>`/`<video>` que ofrece el **mismo** medio en **varios formatos**; el navegador prueba de arriba a abajo y se queda con el primero que sabe reproducir.
- **Compatibilidad entre navegadores**: no todos los navegadores soportan todos los formatos. Para comprobarlo se usa la web **Can I Use** (`caniuse.com`).
- **Contenido incrustado / embebido**: traer a tu web algo que vive en **otro** servidor (un vídeo de YouTube, un mapa de Google) mediante `<iframe>`, `<embed>` u `<object>`.
- **`poster`**: imagen-fotograma que se ve en un `<video>` **antes** de darle al play (en lugar de la pantalla negra).
- **`<track>`**: etiqueta para añadir **subtítulos / pistas de texto** a un vídeo. ❓ El profe la nombra de pasada al hablar de subtítulos como función "avanzada"; aquí se reconstruye.
- **Accesibilidad multimedia**: que el contenido sea usable por todo el mundo (controles visibles, mensaje alternativo si el navegador no soporta el formato, subtítulos, etc.).
- **Bibliotecas externas**: Video.js, MediaElement.js... librerías JavaScript (en GitHub) que añaden funciones avanzadas que HTML5 no trae. No se piden en la asignatura, solo se mencionan.

### Explicación detallada

#### 8.1. ¿Por qué multimedia nativa? De Flash a HTML5

Estás acostumbrado a usar audio y vídeo todos los días: podcasts, radio online, audiolibros, vídeos de YouTube, etc. Lo que vamos a ver aquí es cómo **tú**, como desarrollador, metes ese contenido **dentro de tu propia web**.

Ojo a una distinción importante: empresas como Netflix, Telecinco o RTVE tienen **sus propios servidores multimedia** y aplicaciones propias; no tienen por qué usar HTML para reproducir. Pero si haces una web "normal" (la web de un hotel, un manual explicativo paso a paso, un restaurante, una visita 3D de un piso tipo Idealista/Fotocasa...), ahí sí que te interesa incrustar audio y vídeo con HTML.

Antes de HTML5, los navegadores **no sabían** reproducir audio/vídeo de forma nativa. Hacía falta un **plugin** de terceros, típicamente **Adobe Flash**. Eso significaba que el navegador y el programa externo "se tenían que poner de acuerdo", y tú dependías de ese software. La W3C decidió que eso no podía seguir así (cada vez se usa más multimedia) e introdujo en **HTML5** los llamados *media formats*: las etiquetas `<audio>` y `<video>` que el navegador entiende solito.

**Beneficios de usar el soporte nativo** 🔥:

1. **Rendimiento**: tiempos de carga y descarga mejores que con una aplicación que tiene que ejecutarse a la vez que el navegador.
2. **Accesibilidad**: el contenido es accesible para todo el mundo.
3. **Experiencia de usuario**: al usuario no le gusta que una web le pida descargar o instalar cosas (parece sospechosa, con "demasiada publi"). Con HTML5 ve el vídeo sin instalar nada.
4. **Compatibilidad con móviles**: HTML5 funciona en navegadores y apps de móvil, con pantalla completa y opciones táctiles.
5. **SEO**: usar código nativo (en vez de librerías) posiciona mejor tu web en Google, Bing, etc.

**Limitaciones** del soporte nativo:

- **No es compatible con todos los formatos** de audio y vídeo; solo con ciertos formatos estándar (la lista va creciendo con los años).
- **No tiene funciones avanzadas** tipo reproductor de Netflix/HBO: no te genera por sí mismo selección de idiomas, capítulos en carpetas, etc. Para eso necesitarías una aplicación o librería externa (Video.js, MediaElement.js...).

#### 8.2. Formatos de audio: MP3, OGG, WAV

Los tres formatos de audio que maneja HTML5 que cita el profe:

- **MP3** (`.mp3`) 🔥: estándar de hace muchísimos años, el más conocido. Es lo que hay detrás de las aplicaciones de música. Soportado prácticamente en todos los navegadores.
- **OGG** (`.ogg`) 🔥: formato creado para **no estar sujeto a ninguna patente**: quien genera un audio (podcast, música...) no tiene que pagar derechos. Es **libre**. Cuidado: navegadores antiguos como Safari o Internet Explorer pueden no aceptarlo.
- **WAV** (`.wav`): el formato "de los CD". Es el que **más ocupa** y, por tanto, el que hace que la web vaya más lenta.

#### 8.3. Formatos de vídeo: MP4, WebM, OGG

Los tres formatos de vídeo que cita el profe:

- **MP4** (`.mp4`) 🔥: el más universal. Chrome y Opera lo reconocen sin problema.
- **WebM** (`.webm`) 🔥: formato **gratuito**, apoyado por las mismas asociaciones que OGG.
- **OGG para vídeo** (`.ogv`) 🔥: mismo formato libre que el OGG de audio, pero con extensión **`.ogv`** y usando otro códec. También gratuito y liberado.

> ❓ El profe dice que "OGG de vídeo tiene la misma extensión... perdón, la extensión `.ogv`". O sea: el OGG de **audio** es `.ogg` y el OGG de **vídeo** es `.ogv`. Reconstrucción a partir de su corrección en directo.

#### 8.4. Compatibilidad entre navegadores: Can I Use

Como no todos los navegadores soportan todos los formatos, existe la web **`caniuse.com`** ("Can I Use" = "¿puedo usar?"). Buscas una característica (por ejemplo, `audio` o `video`) y te dice, **por navegador y por versión**, si funciona:

- A la **izquierda** salen los navegadores de **PC** (Chrome, Edge, Safari, Firefox, Opera); a la **derecha**, los de **móvil/tablet**.
- Aparecen las **versiones** y a partir de cuál funciona la característica.
- **Verde** = soportado. **Rojo** = cuidado, puede no funcionar (por ejemplo, soporte retirado desde 2015 en navegadores muy antiguos).
- Para vídeo hay **menos** versiones soportadas que para audio: necesitas un navegador bastante actualizado. Chrome y Opera reconocen los 3 formatos de vídeo; Safari y Firefox, unos sí y otros no.

La consecuencia práctica: **por eso usamos varios `<source>`**, para que cada navegador coja el formato que sí entiende.

#### 8.5. La etiqueta `<audio>`

Es muy sencilla. Funciona parecido a insertar una imagen.

**Versión básica (un solo fichero)**: pones `<audio>` con el atributo `src` apuntando al fichero (nombre + extensión) y cierras con `</audio>`.

```html
<!-- Versión más simple: un único fichero de audio -->
<audio src="cancion.mp3"></audio>
<!-- OJO: así NO se ven controles; si el usuario no le da al play, no suena -->
```

**Atributos de `<audio>`** 🔥:

- **`src`**: ruta/nombre del fichero de audio.
- **`controls`**: muestra los **controles** del reproductor (play, volumen, segundos...). Es un atributo **booleano**: se pone o no se pone, no lleva valor. Sin `controls`, el audio existe pero no se ve nada y solo sonaría si se reproduce por otra vía.
- **`autoplay`**: el audio se reproduce **automáticamente** al cargar la página.
- **`loop`**: el audio se repite en **bucle**, no para.
- **`muted`**: el audio arranca **silenciado**.
- **`preload`**: decide si el navegador **precarga** el fichero. Con `preload="none"` el navegador **sabe que el fichero está ahí pero no descarga nada** (irá más lento al darle al play, pero no gastas datos por adelantado). Hay opiniones a favor y en contra de precargar.

> 🔥 Nota cultural: hace ~15 años era habitual entrar en una web y que sonara una "musiquita" de fondo (tiendas online, webs de videojuegos). Hoy casi ninguna web lo hace porque resulta estresante. El profe recomienda **no** poner audio de fondo.

**Versión con `<source>` (varios formatos)**: en lugar de `src` en la propia etiqueta, metes dentro varias etiquetas `<source>`, una por formato, en el **orden** en que quieres que se intenten cargar. El navegador prueba el primero; si lo sabe reproducir, ya no mira los demás.

```html
<!-- Versión recomendada: varios formatos con <source> -->
<audio controls>                       <!-- controls para que se vean play/volumen -->
  <source src="audio.ogg" type="audio/ogg">  <!-- 1º intenta OGG (libre, ligero) -->
  <source src="audio.mp3" type="audio/mpeg"> <!-- 2º intenta MP3 (universal) -->
  <source src="audio.wav" type="audio/wav">  <!-- 3º intenta WAV (el que más ocupa) -->
</audio>
```

El atributo **`type`** del `<source>` indica el tipo MIME del fichero. **No es obligatorio**: se puede no poner. Ayuda al navegador a decidir sin descargar el fichero.

#### 8.6. La etiqueta `<video>`

Igual que `<audio>` es para sonido, `<video>` es para vídeo. También es muy sencilla. El profe insiste: lo bueno de las nuevas versiones de HTML es que las etiquetas nuevas son fáciles de manejar.

**Versión básica (un solo formato)**:

```html
<!-- Versión simple: un único fichero de vídeo -->
<video src="pelicula.mp4" controls width="640" height="360"></video>
```

**Atributos de `<video>`** 🔥:

- **`src`**: ruta/nombre del fichero de vídeo.
- **`width`** y **`height`**: ancho y alto de la "pantallita" del reproductor, en **píxeles** o en **porcentaje**.
- **`controls`**: muestra/oculta los controles (booleano).
- **`autoplay`**: el vídeo arranca **automáticamente**.
- **`loop`**: el vídeo se repite en **bucle**.
- **`muted`**: el vídeo arranca **silenciado** (combinado con `autoplay` es lo habitual: muchos navegadores solo dejan autoplay si está muteado).
- **`preload`**: igual que en `<audio>` (decide si se precarga).
- **`poster`** 🔥: imagen que se muestra como **fotograma inicial** antes de darle al play (en vez de pantalla negra). Es lo que ves en casi todos los vídeos de YouTube. El fichero de imagen tiene que estar en la misma carpeta o indicar su ruta.

**Versión con `<source>`** (varios formatos), y además el **mensaje alternativo**:

```html
<!-- Versión completa de <video> con varios formatos y texto alternativo -->
<video width="640" height="360" controls poster="portada.jpg">
  <source src="video.mp4"  type="video/mp4">   <!-- 1º MP4 (el más compatible) -->
  <source src="video.webm" type="video/webm">  <!-- 2º WebM (gratuito) -->
  <source src="video.ogv"  type="video/ogg">   <!-- 3º OGG de vídeo (.ogv, libre) -->
  <!-- Si el navegador NO soporta ningún formato, muestra este texto: -->
  <p>Tu navegador no soporta el formato de vídeo HTML5.</p>
</video>
```

🔥 Ese **mensaje de respaldo** (aquí un `<p>`) se escribe **después del último `<source>`** y solo se muestra si el navegador no es capaz de reproducir ninguno de los formatos ofrecidos. El profe lo enseña en `<video>` pero dice que **vale igual para `<audio>`**.

#### 8.7. Subtítulos con `<track>`

> ❓ [reconstrucción] El profe menciona que el soporte nativo "no te permite añadir idiomas, subtítulos, capítulos..." como funciones avanzadas tipo Netflix, y el enunciado del tema pide cubrir `<track>`. En HTML5 sí existe la etiqueta `<track>` para subtítulos básicos; se reconstruye aquí su sintaxis estándar.

`<track>` es una etiqueta hija de `<video>` que añade **pistas de texto temporizadas** (subtítulos, descripciones, capítulos). Apunta a un fichero **`.vtt`** (WebVTT).

```html
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <!-- Subtítulos en español, marcados como predeterminados -->
  <track src="subtitulos-es.vtt" kind="subtitles" srclang="es"
         label="Español" default>
  <!-- Otra pista de subtítulos en inglés (no predeterminada) -->
  <track src="subtitulos-en.vtt" kind="subtitles" srclang="en"
         label="English">
</video>
```

Atributos de `<track>`:
- **`src`**: ruta del fichero de subtítulos (`.vtt`).
- **`kind`**: tipo de pista (`subtitles`, `captions`, `descriptions`, `chapters`).
- **`srclang`**: idioma de la pista (`es`, `en`...).
- **`label`**: texto que ve el usuario en el menú de subtítulos.
- **`default`**: marca esta pista como la activada por defecto (booleano).

#### 8.8. Incrustar contenido externo con `<iframe>`

Un **`<iframe>`** ("marco en línea") incrusta **otra página web dentro de la tuya**. Es la forma de meter un vídeo de YouTube, un mapa de Google, un Teams en directo, etc. — contenido que vive en **otro servidor**.

El profe distingue: insertar un vídeo **tuyo** que tienes en tu servidor se hace con `<video>`; insertar un vídeo de **YouTube** se hace con `<iframe>` (y dice "eso ya sabéis hacerlo").

```html
<!-- Incrustar un vídeo de YouTube -->
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/ID_DEL_VIDEO"
        title="Vídeo de YouTube"
        frameborder="0"
        allowfullscreen></iframe>
```

```html
<!-- Incrustar un mapa de Google Maps -->
<iframe src="https://www.google.com/maps/embed?pb=..."
        width="600" height="450"
        style="border:0;"
        allowfullscreen
        loading="lazy"></iframe>
```

Atributos típicos de `<iframe>`: **`src`** (URL embebida), **`width`/`height`** (tamaño del marco), **`title`** (texto accesible que describe el contenido), **`allowfullscreen`** (permite pantalla completa), **`loading="lazy"`** (carga diferida para no ralentizar la página). 🔥 Para YouTube, fíjate en que la URL es la de **`/embed/`**, no la URL normal del navegador.

> El profe comenta que insertar **YouTube live, Twitch, Facebook live, TikTok, Instagram** de forma totalmente nativa todavía no se puede; se hace con la **API** de cada plataforma (algunas gratuitas, otras de pago con tokens limitados). No entra ni en examen ni en la práctica.

#### 8.9. Las etiquetas `<embed>` y `<object>`

Son formas más **antiguas** de incrustar contenido. Hoy `<iframe>` ha ganado la partida para casi todo, pero conviene conocerlas porque te las puedes encontrar.

- **`<embed>`**: etiqueta de **autocierre** que incrusta un recurso externo (un PDF, un SWF antiguo, otra página...).

```html
<!-- <embed>: incrustar un recurso externo, etiqueta de autocierre -->
<embed src="documento.pdf" type="application/pdf"
       width="600" height="400">
```

- **`<object>`** 🔥: el profe la describe como un **"cajón de sastre"**: permite incluir varias cosas. Es **la** etiqueta con la que se cargaban los viejos ficheros **Flash `.flv`** (Adobe Flash, muy de moda entre 2000 y 2010, cámaras que grababan en `.flv`, cursos de formación antiguos...). **No es estándar de HTML5** y está **en desuso**, pero así se hacía:

```html
<!-- <object>: forma antigua de cargar un vídeo Flash .flv (EN DESUSO) -->
<!-- Hay que indicar el objeto y repetir parámetros con <param>, es engorroso -->
<object width="640" height="480">
  <param name="movie" value="video.flv">     <!-- el fichero Flash -->
  <param name="allowFullScreen" value="true">
  <embed src="video.flv"                      <!-- repetido como respaldo -->
         type="application/x-shockwave-flash"
         width="640" height="480"
         allowfullscreen="true">
</object>
```

🔥 Resumen para el examen: los `.flv` (Flash) **no son estándar HTML5**, se cargaban con `<object>` (+ `<param>` + `<embed>` repetido, "un poco raruno"), y hoy están obsoletos. Para tus vídeos usa `<video>`; para contenido externo, `<iframe>`.

#### 8.10. El elemento `<canvas>`

`<canvas>` ("lienzo") es un **"folio en blanco"** sobre el que se **dibuja**: gráficos, formas, animaciones, incluso pequeños videojuegos. En sí mismo no produce información: solo crea la estructura (un *bitmap*) y a partir de ahí dibujas tú.

- Se gestiona habitualmente **con JavaScript** (el dibujo real se hace por código JS).
- Permite renderizar en **2D** y **3D**.
- El profe lo dio en una clase anterior (la de imágenes) y aquí solo lo enlaza con multimedia como "un paso más".

```html
<!-- <canvas>: define el lienzo. Width/height en píxeles. -->
<canvas id="miLienzo" width="400" height="300">
  <!-- Texto alternativo si el navegador no soporta canvas -->
  Tu navegador no soporta el elemento canvas.
</canvas>

<script>
  // El dibujo se hace con JavaScript sobre el "contexto" 2D
  const lienzo = document.getElementById("miLienzo");
  const ctx = lienzo.getContext("2d");   // contexto de dibujo 2D
  ctx.fillStyle = "blue";                // color de relleno
  ctx.fillRect(50, 50, 150, 100);        // dibuja un rectángulo (x, y, ancho, alto)
</script>
```

#### 8.11. Accesibilidad en multimedia

Que el contenido multimedia sea **usable por todo el mundo**:

- **Mostrar los controles** (`controls`): que el usuario pueda pausar, ajustar volumen, etc. El profe lo recomienda explícitamente; un vídeo o audio de fondo sin control "es un rollo".
- **Mensaje alternativo**: texto de respaldo dentro de `<video>`/`<audio>`/`<canvas>` por si el navegador no soporta el formato/elemento.
- **Subtítulos** con `<track>`: para personas sordas o con el sonido apagado.
- **`title`** en los `<iframe>`: describe el contenido incrustado para lectores de pantalla.
- **No autoplay con sonido**: arrancar sonido de golpe es mala experiencia y un problema de accesibilidad; si usas `autoplay`, combínalo con `muted`.
- **Optimizar** los ficheros (bajar peso/calidad razonablemente) para que carguen rápido también en conexiones lentas y en móvil.

### Sintaxis y ejemplos comentados

**1) `<audio>` con un solo fichero y con controles:**

```html
<!-- Sin controls no se ve nada; CON controls aparece el reproductor -->
<audio src="podcast.mp3" controls></audio>
```

**2) `<audio>` con todos los atributos booleanos:**

```html
<audio src="ambiente.mp3"
       controls      <!-- muestra play, volumen, tiempo... -->
       autoplay      <!-- empieza solo al cargar la página -->
       loop          <!-- se repite en bucle infinito -->
       muted         <!-- arranca silenciado -->
       preload="auto"><!-- precarga el fichero (none = no descargar nada) -->
</audio>
```

**3) `<audio>` multiformato con `<source>`:**

```html
<audio controls>
  <!-- El navegador prueba de arriba a abajo y se queda con el 1º que entienda -->
  <source src="tema.ogg" type="audio/ogg">   <!-- libre, ligero -->
  <source src="tema.mp3" type="audio/mpeg">  <!-- universal -->
  <source src="tema.wav" type="audio/wav">   <!-- el que más ocupa -->
  <p>Tu navegador no soporta audio HTML5.</p><!-- mensaje de respaldo -->
</audio>
```

**4) `<video>` con un solo fichero:**

```html
<!-- width/height en píxeles; controls para ver el reproductor -->
<video src="tutorial.mp4" width="640" height="360" controls></video>
```

**5) `<video>` completo con `poster`, varios `<source>` y mensaje alternativo:**

```html
<video width="800" height="450"
       controls                 <!-- controles visibles -->
       poster="miniatura.jpg"    <!-- fotograma inicial antes del play -->
       preload="metadata">       <!-- solo precarga datos básicos -->
  <source src="clip.mp4"  type="video/mp4">   <!-- 1º MP4 -->
  <source src="clip.webm" type="video/webm">  <!-- 2º WebM -->
  <source src="clip.ogv"  type="video/ogg">   <!-- 3º OGG de vídeo (.ogv) -->
  <p>Tu navegador no soporta el formato de vídeo HTML5.</p>
</video>
```

**6) `<video>` de fondo (autoplay + muted + loop):**

```html
<!-- Caso típico de vídeo de cabecera: arranca solo, sin sonido, en bucle -->
<video autoplay muted loop width="100%">
  <source src="fondo.mp4" type="video/mp4">
  <source src="fondo.webm" type="video/webm">
</video>
```

**7) `<video>` con subtítulos `<track>`:**

```html
<video width="640" height="360" controls>
  <source src="charla.mp4" type="video/mp4">
  <track src="charla-es.vtt" kind="subtitles" srclang="es"
         label="Español" default>  <!-- subtítulos en español por defecto -->
</video>
```

**8) `<iframe>` para YouTube:**

```html
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"  <!-- URL /embed/ -->
        title="Vídeo explicativo"  <!-- texto accesible -->
        allowfullscreen></iframe>  <!-- permite pantalla completa -->
```

**9) `<iframe>` para un mapa:**

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18..."
        width="600" height="450"
        style="border:0;"
        loading="lazy"          <!-- carga diferida -->
        allowfullscreen></iframe>
```

**10) `<embed>` y `<object>`:**

```html
<!-- <embed>: recurso externo, etiqueta de autocierre -->
<embed src="manual.pdf" type="application/pdf" width="600" height="400">

<!-- <object>: cajón de sastre, vía antigua para Flash .flv (OBSOLETO) -->
<object width="640" height="480">
  <param name="movie" value="antiguo.flv">
  <embed src="antiguo.flv" type="application/x-shockwave-flash"
         width="640" height="480">
</object>
```

### Ejercicios resueltos

**Ejercicio 1 — Reproductor de vídeo con varios formatos.**
Inserta en una página un reproductor de vídeo de 640×360 px, con controles, una imagen de portada (`portada.jpg`) y soporte para MP4, WebM y OGG. Si el navegador no entiende ninguno, debe mostrar un mensaje.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Reproductor de vídeo</title>
</head>
<body>
  <h1>Mi vídeo</h1>

  <video width="640" height="360" controls poster="portada.jpg">
    <source src="video.mp4"  type="video/mp4">   <!-- 1º: el más compatible -->
    <source src="video.webm" type="video/webm">  <!-- 2º: gratuito -->
    <source src="video.ogv"  type="video/ogg">   <!-- 3º: OGG de vídeo (.ogv) -->
    <p>Tu navegador no soporta el formato de vídeo HTML5.</p>
  </video>

</body>
</html>
```

**Explicación:** se ofrecen tres `<source>` ordenados por compatibilidad; el navegador prueba MP4, luego WebM, luego OGV. `poster` evita la pantalla negra inicial. El `<p>` final solo se ve si fallan los tres formatos: es la parte de **accesibilidad**.

---

**Ejercicio 2 — Reproductor de audio con OGG y MP3.**
Crea un reproductor de audio con controles que ofrezca el sonido en OGG y, como alternativa, en MP3.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Reproductor de audio</title>
</head>
<body>
  <h1>Escucha el podcast</h1>

  <audio controls>                              <!-- controls: se ve el reproductor -->
    <source src="podcast.ogg" type="audio/ogg">  <!-- 1º: formato libre -->
    <source src="podcast.mp3" type="audio/mpeg"> <!-- 2º: formato universal -->
    <p>Tu navegador no soporta audio HTML5.</p>
  </audio>

</body>
</html>
```

**Explicación:** `<audio controls>` sin `src` propio + dos `<source>`. Se pone OGG primero (libre y ligero) y MP3 como respaldo casi universal. Sin `controls` el usuario no podría reproducirlo.

---

**Ejercicio 3 — Incrustar un vídeo de YouTube.**
Incrusta en tu web el vídeo de YouTube cuyo ID es `abc123XYZ`, a 560×315 px y permitiendo pantalla completa.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Vídeo de YouTube</title>
</head>
<body>
  <h1>Vídeo destacado</h1>

  <!-- Para YouTube se usa <iframe> con la URL /embed/ y el ID del vídeo -->
  <iframe width="560" height="315"
          src="https://www.youtube.com/embed/abc123XYZ"
          title="Vídeo de YouTube"
          allowfullscreen></iframe>

</body>
</html>
```

**Explicación:** YouTube vive en otro servidor, así que **no** se usa `<video>` sino `<iframe>`. La clave es la URL `https://www.youtube.com/embed/ID`. `allowfullscreen` habilita el botón de pantalla completa; `title` aporta accesibilidad.

---

**Ejercicio 4 — Incrustar un mapa.**
Incrusta un mapa de Google en una sección "Cómo llegar", a 600×450 px, con carga diferida.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cómo llegar</title>
</head>
<body>
  <h2>Cómo llegar</h2>

  <!-- El mapa también es contenido externo: se incrusta con <iframe> -->
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!CODIGO_DEL_MAPA"
          width="600" height="450"
          style="border:0;"        <!-- quita el borde del marco -->
          loading="lazy"           <!-- no carga hasta que hace falta -->
          allowfullscreen
          title="Mapa de ubicación"></iframe>

</body>
</html>
```

**Explicación:** mismo patrón que YouTube: `<iframe>` apuntando al código de inserción que da Google Maps. `loading="lazy"` mejora el rendimiento porque el mapa no se descarga hasta que el usuario llega a esa zona.

---

**Ejercicio 5 — Página multimedia completa.**
Monta una página que combine: un vídeo propio multiformato con `poster`, un reproductor de audio multiformato, un vídeo de YouTube incrustado y un mapa.

**Solución:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página multimedia</title>
</head>
<body>

  <h1>Hotel Las Olas</h1>

  <!-- 1) VÍDEO PROPIO (en mi servidor) -> etiqueta <video> -->
  <h2>Visita virtual</h2>
  <video width="800" height="450" controls poster="hotel.jpg" preload="metadata">
    <source src="visita.mp4"  type="video/mp4">
    <source src="visita.webm" type="video/webm">
    <p>Tu navegador no soporta vídeo HTML5.</p>
  </video>

  <!-- 2) AUDIO MULTIFORMATO -> etiqueta <audio> -->
  <h2>Audioguía</h2>
  <audio controls>
    <source src="guia.ogg" type="audio/ogg">
    <source src="guia.mp3" type="audio/mpeg">
    <p>Tu navegador no soporta audio HTML5.</p>
  </audio>

  <!-- 3) VÍDEO EXTERNO (YouTube) -> <iframe> con URL /embed/ -->
  <h2>Reportaje en YouTube</h2>
  <iframe width="560" height="315"
          src="https://www.youtube.com/embed/abc123XYZ"
          title="Reportaje del hotel"
          allowfullscreen></iframe>

  <!-- 4) MAPA -> <iframe> -->
  <h2>Cómo llegar</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!CODIGO"
          width="600" height="450"
          style="border:0;"
          loading="lazy"
          title="Ubicación del hotel"></iframe>

</body>
</html>
```

**Explicación:** la página deja clarísima la **regla de oro** 🔥: contenido **propio** → `<video>`/`<audio>` con `<source>`; contenido **externo** (YouTube, mapas) → `<iframe>`. Cada bloque incluye su mensaje/`title` por accesibilidad.

---

**Ejercicio 6 — Vídeo de fondo silenciado en bucle.**
Crea un vídeo de cabecera que ocupe el 100 % de ancho, arranque automáticamente, sin sonido y en bucle infinito.

**Solución:**

```html
<!-- autoplay solo funciona de forma fiable si va con muted -->
<video autoplay muted loop width="100%">
  <source src="cabecera.mp4"  type="video/mp4">
  <source src="cabecera.webm" type="video/webm">
  Tu navegador no soporta vídeo HTML5.
</video>
```

**Explicación:** combinación `autoplay` + `muted` + `loop`. Se omite `controls` a propósito (es decoración de fondo), pero se mantiene el texto alternativo. Es un caso válido de `autoplay` porque va silenciado.

---

**Ejercicio 7 — Vídeo accesible con subtítulos.**
Inserta un vídeo con controles y una pista de subtítulos en español activada por defecto.

**Solución:**

```html
<video width="640" height="360" controls>
  <source src="conferencia.mp4" type="video/mp4">
  <!-- <track> añade subtítulos; .vtt es el formato de la pista de texto -->
  <track src="conferencia-es.vtt" kind="subtitles" srclang="es"
         label="Español" default>
  <p>Tu navegador no soporta vídeo HTML5.</p>
</video>
```

**Explicación:** `<track>` cuelga de `<video>` y apunta a un fichero `.vtt`. `kind="subtitles"`, `srclang="es"` y `label="Español"` describen la pista; `default` la activa de entrada. Es la mejora de **accesibilidad** clave para multimedia.

---

### Visuales a revisar

- [📺 `11_Tema5_Audio_Video.md`, aprox. 04:30] — Diapositiva resumen de qué se considera multimedia (audio, vídeo, imágenes) y ejemplos de uso (podcasts, audiolibros).
- [📺 `11_Tema5_Audio_Video.md`, aprox. 09:00] — Diapositiva de los *media formats* de HTML5, concepto de códec y comparación con Flash/plugins.
- [📺 `11_Tema5_Audio_Video.md`, aprox. 14:00] — Diapositiva de beneficios (rendimiento, accesibilidad, móvil) y limitaciones (formatos, funciones avanzadas).
- [📺 `11_Tema5_Audio_Video.md`, aprox. 22:00] — Demo en vivo de la web **Can I Use** (`caniuse.com`) buscando `audio`: navegadores, versiones, colores verde/rojo.
- [📺 `11_Tema5_Audio_Video.md`, aprox. 28:00] — Tabla resumen de formatos de audio (MP3, OGG, WAV) y demo de Can I Use con `video` (MP4, OGG, WebM).
- [📺 `11_Tema5_Audio_Video.md`, aprox. 33:00] — Diapositiva de la etiqueta `<audio>`: versión simple con `src` y propiedades (`controls`, `autoplay`, `loop`, `preload`).
- [📺 `11_Tema5_Audio_Video.md`, aprox. 38:00] — Recorte del aspecto del control de audio en el navegador (play, volumen, segundos).
- [📺 `11_Tema5_Audio_Video.md`, aprox. 41:00] — Diapositiva de `<audio>` con varios `<source>` (OGG, MP3, WAV) y el atributo `type`.
- [📺 `11_Tema5_Audio_Video.md`, aprox. 46:00] — Diapositiva de la etiqueta `<video>`: atributos `width`, `height`, `controls`, `autoplay`, `loop`, `poster` y mensaje alternativo.
- [📺 `11_Tema5_Audio_Video.md`, aprox. 52:00] — Diapositiva "formato ampliado": Flash `.flv` con `<object>` / `<param>` / `<embed>` (en desuso).
- [📺 `11_Tema5_Audio_Video.md`, aprox. 58:00] — Diapositiva "hacia dónde vamos": IA, realidad aumentada, APIs de TikTok/Twitch/YouTube Live.
- [📺 `12_Multimedia.md`, aprox. 01:00] — Repaso introductorio de la parte audiovisual y enlace con la generación de interfaz.

### Cubierto en

- Clase 11 (Tema 5, Audio y Vídeo) — `11_Tema5_Audio_Video.md`
- Clase 12 (Tema 5, Multimedia) — `12_Multimedia.md`

### Pitfalls y buenas prácticas

**Errores comunes (pitfalls):**

- **Poner `<audio>` o `<video>` sin `controls` y esperar que se vea el reproductor.** Sin `controls` el elemento existe pero no se muestra ningún botón; si el usuario no tiene forma de darle al play, no suena/no se ve. 🔥 Es un fallo típico de examen.
- **Asumir que un formato funciona en todos los navegadores.** No es así: Safari y navegadores antiguos pueden no reproducir OGG; el vídeo necesita versiones más actualizadas que el audio. Solución: varios `<source>`.
- **Olvidar el mensaje alternativo.** Si no pones texto de respaldo dentro de `<video>`/`<audio>` y el navegador no soporta el formato, el usuario ve un hueco vacío sin saber qué pasa.
- **Usar `<video>` para un vídeo de YouTube.** YouTube vive en otro servidor: se incrusta con `<iframe>` (URL `/embed/`), no con `<video>`. Al revés, usar `<iframe>` para un vídeo propio tampoco tiene sentido.
- **`autoplay` con sonido.** Molesta al usuario y muchos navegadores lo bloquean. Si usas `autoplay`, combínalo siempre con `muted`.
- **Confundir extensiones de OGG.** El OGG de **audio** es `.ogg`; el OGG de **vídeo** es `.ogv`. Usar la extensión equivocada hace que el navegador no lo reconozca.
- **Abusar de WAV.** Es el formato que más ocupa; ponerlo el primero en la lista de `<source>` ralentiza la web. Va siempre el último, como último recurso.
- **Meter audio de fondo con `autoplay` y `loop`.** Era moda hace 15 años y hoy resulta estresante; espanta al usuario.
- **Usar `<object>`/`<embed>` con Flash `.flv`.** Está obsoleto y no es estándar HTML5; ningún navegador moderno lo reproduce.

**Buenas prácticas:**

- **Elegir el formato correcto** y ordenar los `<source>` de más a menos compatible/ligero (vídeo: MP4 → WebM → OGV; audio: OGG/MP3 → WAV el último).
- **Optimizar** el peso/calidad del audio y del vídeo para que carguen rápido, también en móvil. Si tarda muchísimo en cargar, baja la calidad.
- **Proporcionar controles** (`controls`): el profe recomienda añadirlos siempre; un vídeo/audio de fondo sin control "es un rollo".
- **Incluir siempre el texto alternativo** dentro de `<video>`/`<audio>`/`<canvas>` por accesibilidad.
- **Añadir `title`** a los `<iframe>` para describir el contenido a lectores de pantalla.
- **Usar `poster`** en los vídeos para evitar la pantalla negra inicial y dar mejor imagen.
- **Preferir código nativo HTML5** frente a librerías/plugins: mejora rendimiento, accesibilidad, compatibilidad móvil y **SEO**.
- **Considerar librerías externas (Video.js, MediaElement.js)** solo si necesitas funciones avanzadas que HTML5 no da; asegúrate de que el navegador es compatible. No es obligatorio en la asignatura.
- **Consultar `caniuse.com`** antes de decidir qué formatos ofrecer, según el público objetivo de la web.
- **Usar `loading="lazy"`** en `<iframe>` de mapas/vídeos para no ralentizar la carga inicial de la página.

---

## 9. Contenido interactivo

> **TL;DR.** El contenido interactivo es todo aquello de la web que *reacciona* a lo que hace el usuario: que se pliegue, se despliegue, se oculte, cambie de color o muestre un aviso. En clase se vio sobre todo la librería **jQuery** (eventos de ratón, teclado y ventana + efectos como `show`/`hide`/`fadeIn`/`slideUp`) y la sub-librería **jQuery UI** para hacer elementos arrastrables. Pero buena parte de esa interactividad se puede conseguir **sin JavaScript**, solo con HTML y CSS: elementos nativos como `<details>`/`<summary>`, `<dialog>`, `<progress>` y `<meter>`, y trucos con pseudoclases (`:hover`, `:focus`, `:checked`, `:valid`/`:invalid`) más `transition`. El profe avisó: este tema **no entra en la parte práctica** del examen, pero **sí puede caer en el test**. 🔥

### Conceptos clave

- **Contenido interactivo:** porciones de la web que cambian o responden ante una acción del usuario (clic, paso del ratón, escritura, scroll...). Lo contrario es el **contenido estático**.
- **Plantearlo con sentido:** el profe insistió mucho en esto. La interactividad **no se mete porque sí**. Una web con demasiados popups, animaciones y formularios que reaccionan a todo resulta **estresante y cansina**. Antiguamente (época de Adobe Flash) *todo* era interactivo y quedó en desuso.
- **Dónde tiene más sentido:** sobre todo en **formularios** (alta de usuario, carrito de la compra, opiniones), y en webs que "hacen algo" (videojuegos web, configuradores, etc.).
- **Tres formas de conseguir interactividad:**
  1. **HTML nativo** → elementos que ya son interactivos solos (`<details>`, `<dialog>`, `<progress>`, `<meter>`, formularios HTML5).
  2. **HTML + CSS** → pseudoclases de estado (`:hover`, `:focus`, `:active`, `:checked`) + `transition`/`animation`. Sin una línea de JS.
  3. **JavaScript / jQuery / Bootstrap** → cuando la lógica es más compleja. En clase se vio **jQuery**.
- **jQuery:** librería de JavaScript que facilita manejar el **DOM** (los elementos de la página) de forma interactiva. Trae eventos y efectos ya programados.
- **DOM:** el árbol de elementos de la página. `document` es el elemento padre. Tanto JS puro (`getElementById`, `getElementsByClassName`) como jQuery trabajan sobre él.
- **Evento:** algo que ocurre (clic, tecla pulsada, ratón encima...). A cada evento le asociamos una **función** que ejecuta el código que queremos.
- **Pseudoclase de estado:** selector CSS que apunta a un elemento *según su estado* (`:hover` = ratón encima, `:checked` = marcado, `:focus` = con el foco...).
- **Validación nativa HTML5:** el navegador valida formularios *él solo* con atributos como `required`, `pattern`, `min`, `max`, `type="email"`... sin JavaScript.
- **CDN vs descarga:** una librería se puede enlazar por **CDN** (URL externa, se actualiza sola, necesita Internet) o **descargar** el fichero al proyecto (funciona en local sin conexión, pero lo actualizas tú a mano).

### Explicación detallada

#### 9.1. ¿Qué es el contenido interactivo y por qué con cuidado?

Dentro del temario de "Diseño de Interfaces" nos toca contar algo de contenido interactivo. El profe reconoce que "se queda un poco raro" en esta asignatura, porque antes de meter interactividad **hay que plantearse si la web la necesita**. No es lo mismo la experiencia de usuario de una tienda online china, una americana o una española: se notan diferencias, y muchas vienen del grado y tipo de interacción.

Idea 🔥: la interactividad debe **tener sentido dentro de tu web** (cerrar una caja, ocultar información de un producto, plegar una sección de ayuda...). Demasiada interactividad **cansa**. Es una decisión de diseño, no un adorno.

#### 9.2. La vía nativa: elementos HTML interactivos `[reconstrucción]`

> ⚠️ En la transcripción de clase el profe se centró en jQuery y mencionó que "esto se podría hacer de manera más interna con HTML, CSS y JavaScript", pero **no desarrolló los elementos nativos**. Lo que sigue en 9.2–9.5 es **reconstrucción** del estándar HTML/CSS que da contexto al tema y que es lo más probable que caiga en el test. El bloque jQuery (9.6 en adelante) sí es lo que se explicó literalmente.

**`<details>` y `<summary>` — acordeón nativo.** El elemento `<details>` crea un bloque plegable/desplegable **sin JavaScript**. Dentro lleva un `<summary>` que es la parte siempre visible (el "título" en el que se hace clic); el resto del contenido aparece y desaparece al pulsar.

```html
<!-- Acordeón 100% nativo: el navegador gestiona abrir/cerrar él solo -->
<details>
  <summary>¿Qué es el contenido interactivo?</summary>
  <p>Es todo aquello de la web que reacciona a lo que hace el usuario.</p>
</details>

<!-- Con el atributo "open" arranca ya desplegado -->
<details open>
  <summary>Este empieza abierto</summary>
  <p>Porque lleva el atributo open.</p>
</details>
```

**`<dialog>` — ventana modal nativa.** Representa un cuadro de diálogo / modal. Con el atributo `open` se muestra; lo normal es abrirlo/cerrarlo con un pelín de JS (`.showModal()` / `.close()`), pero el elemento en sí es HTML nativo.

```html
<dialog id="aviso">
  <p>Mensaje del modal.</p>
  <form method="dialog">
    <!-- un botón dentro de un form method="dialog" cierra el dialog sin JS -->
    <button>Cerrar</button>
  </form>
</dialog>

<button onclick="document.getElementById('aviso').showModal()">Abrir modal</button>
```

**`<progress>` — barra de progreso.** Muestra cuánto se ha completado de una tarea. `value` = valor actual, `max` = valor máximo.

```html
<!-- Llevamos 70 de 100 -> barra al 70 % -->
<progress value="70" max="100"></progress>

<!-- Sin value -> barra "indeterminada" (animación de cargando) -->
<progress></progress>
```

**`<meter>` — medidor escalar.** Representa un valor dentro de un rango conocido (uso de disco, nota, nivel de batería...). No es "progreso", es una **medida**. Acepta `min`, `max`, `low`, `high`, `optimum` para que el navegador lo coloree (verde/amarillo/rojo).

```html
<!-- Nivel de disco: 6 de 10. Por debajo de low=2 o por encima de high=8 cambia de color -->
<meter min="0" max="10" low="2" high="8" optimum="5" value="6">6 de 10</meter>
```

Diferencia 🔥: `<progress>` = "voy por aquí en una tarea". `<meter>` = "este es el valor en una escala".

#### 9.3. Interactividad solo con HTML + CSS `[reconstrucción]`

La idea es usar **pseudoclases de estado** para que el CSS reaccione sin JS.

**Menú desplegable con `:hover`.** Al pasar el ratón por encima de un elemento del menú, mostramos su submenú.

```css
.menu ul ul { display: none; }          /* submenú oculto por defecto */
.menu li:hover > ul { display: block; } /* al pasar el ratón, se muestra */
```

**Acordeón con `:checked` — el "truco del checkbox".** Un `<input type="checkbox">` oculto guarda el estado abierto/cerrado. Un `<label>` asociado actúa de botón. Con el selector hermano `~` o `+` mostramos el contenido cuando el checkbox está `:checked`.

```html
<input type="checkbox" id="faq1" class="acc-toggle">
<label for="faq1">¿Pregunta?</label>
<div class="acc-panel"><p>Respuesta.</p></div>
```
```css
.acc-toggle { display: none; }                       /* checkbox invisible */
.acc-panel  { display: none; }                       /* panel oculto */
.acc-toggle:checked ~ .acc-panel { display: block; } /* al marcar, se ve */
```

**Pestañas (tabs) solo CSS.** Mismo truco pero con `radio` (solo una activa a la vez).

**Tooltip con CSS.** Un `::after` con el texto, oculto, que aparece con `:hover`.

```css
.tip { position: relative; }
.tip::after {
  content: attr(data-tip);   /* el texto sale del atributo data-tip */
  position: absolute;
  opacity: 0;                /* oculto */
  transition: opacity .2s;
}
.tip:hover::after { opacity: 1; } /* al pasar el ratón, aparece */
```

#### 9.4. Transiciones y animaciones aplicadas a la interactividad `[reconstrucción]`

Lo interesante no es solo que algo cambie, sino que cambie **suavemente**. Para eso está `transition`: define qué propiedad anima, cuánto tarda y con qué curva. Se combina con las pseudoclases `:hover`, `:focus`, `:active`.

```css
.boton {
  background: #3498db;
  transition: background .3s ease, transform .3s ease; /* anima estos cambios */
}
.boton:hover  { background: #2980b9; transform: scale(1.05); } /* ratón encima */
.boton:active { transform: scale(0.95); }                      /* mientras se pulsa */
.boton:focus  { outline: 3px solid orange; }                   /* con el foco (teclado) */
```

#### 9.5. Formularios interactivos y validación nativa HTML5 `[reconstrucción]`

El propio HTML5 valida formularios **sin JavaScript** mediante atributos. Si el dato no cumple, el navegador muestra su mensaje y no deja enviar.

- `required` → campo obligatorio.
- `type="email"`, `type="url"`, `type="number"` → exige un formato concreto.
- `pattern="..."` → expresión regular que el valor debe cumplir.
- `min` / `max` / `minlength` / `maxlength` → límites de valor o longitud.
- Las pseudoclases `:valid` e `:invalid` permiten **estilar** el campo según si es correcto.

```html
<form>
  <input type="email" required placeholder="tu@correo.com">
  <input type="text" pattern="[0-9]{5}" title="5 dígitos" required>
  <input type="number" min="18" max="99" required>
  <button>Enviar</button>
</form>
```
```css
input:invalid { border: 2px solid red; }
input:valid   { border: 2px solid green; }
```

#### 9.6. La vía con librería: jQuery (lo que se explicó en clase) 🔥

Aquí empieza lo que el profe **sí desarrolló**. **jQuery** es una librería de JavaScript que se va actualizando con el tiempo (en clase mencionó tener descargada la 1.9/2.x y el proyecto va ya por la 3.7 / 4.x / 5.x). Su gran ventaja: **maneja el DOM de forma interactiva** porque trae **eventos y métodos ya programados**. Lo que con JS puro harías con `getElementById` o `getElementsByClassName`, jQuery te lo da hecho.

Qué te aporta jQuery:
- Manejo del DOM ya programado (solo lo usas).
- **Eventos interactivos**: clic del ratón, teclas, desplazamientos, pulsaciones.
- **Animaciones y efectos** visuales: desplazamientos, fundidos, ocultaciones, cambios de tamaño.
- Usa **AJAX** por debajo: modificar la web **sin recargar** la página completa (de forma asíncrona).

**Tamaños de la librería:** como Bootstrap, jQuery viene en dos versiones:
- **Minificada** (`.min.js`) → para **producción** (entregar al cliente). Pesa lo mínimo, casi ilegible.
- **Normal / de desarrollo** → para trabajar; con comentarios y código legible.

El fichero pesa poco (la 3.7 que tenía el profe, unos **86 KB**).

**Cómo incluir jQuery.** Es JavaScript, así que se mete como cualquier `<script>`. Dos opciones:
- **Descarga**: el `.js` dentro del proyecto. Funciona en local sin Internet, pero lo actualizas tú.
- **CDN**: enlace directo a la URL. Se actualiza solo, pero necesita conexión.

```html
<!-- Opción CDN: jQuery minificado desde la URL -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Opción descarga: el fichero está en tu proyecto -->
<script src="js/jquery-3.7.1.min.js"></script>
```

#### 9.7. Estructura básica de jQuery

Todo parte del **DOM**, por tanto de `document` (el padre). A `document` se le añaden los eventos a controlar, y a cada evento, la función con el código a ejecutar. jQuery dijo: "`document` no es obligatorio", y nació el atajo del **símbolo dólar `$`**.

La sintaxis general 🔥:

```js
$(selector).evento(function() {
  // código que quiero ejecutar cuando ocurra el evento
});
```

- `$` → acceso directo a jQuery.
- `selector` → qué elemento del DOM modifico. Es un **selector HTML normal**: una etiqueta (`"p"`), una clase (`".click"`), un id (`"#caja"`), un formulario completo...
- `evento` → qué acción escucho (`click`, `dblclick`, `hover`...).
- `function() { ... }` → el código tuyo. jQuery te da el "envoltorio"; lo de dentro lo pones tú.

Ejemplo de arranque que enseñó el profe — al cargar el documento, oculta todos los párrafos:

```html
<h1>Título</h1>
<h2>Subtítulo</h2>
<button>Botón</button>
<p>Párrafo 1</p>
<p>Párrafo 2</p>
<a href="#">Enlace</a>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  // $(document).ready -> "cuando el DOM esté cargado"
  $(document).ready(function() {
    $("p").hide();   // selector "p" = TODOS los párrafos; hide() los oculta
    // $("p").show();   // (estaban comentados en clase para descomentar y probar)
  });
</script>
```

> ⚠️ Controlar **todos los párrafos** (`$("p")`) no es lo habitual. Lo normal es apuntar a una **clase** o un **id** concretos. El profe lo hizo así solo para los ejemplos de clase.

#### 9.8. Eventos de ratón

jQuery separa la interactividad por tipo. En tablets y pantallas táctiles, el manejo con el dedo equivale al del ratón.

- **`click` / `dblclick`** → clic y doble clic. Se controlan por separado o juntos, e incluso pueden hacer lo mismo.
- **`mouseenter` / `mouseleave`** → el puntero **entra** sobre un elemento / el **instante** en que lo abandona. Útil para marketing, publicidad, ocultar precios o categorías de un producto...
- **`hover`** → 🔥 especial: admite **dos funciones** separadas por coma dentro del paréntesis. La **primera** se ejecuta al **entrar** el puntero; la **segunda** al **salir**.
- **`mousedown` / `mouseup`** → `mousedown` = mientras mantienes pulsado el botón (izquierdo o derecho); `mouseup` = el instante justo tras **soltar**. No es lo mismo que `click`: permite reacciones distintas antes y después del clic (muy útil en videojuegos).

```js
// click y doble clic sobre clases distintas
$(".click").click(function() {
  alert("jQuery");           // ventana emergente al hacer clic
});
$(".doubleclick").dblclick(function() {
  alert("doble clic");
});

// mouseenter / mouseleave usando this ($(this) = el propio elemento)
$(".puntero").mouseenter(function() {
  $(this).css("color", "red");    // al entrar el ratón -> texto rojo
});
$(".puntero").mouseleave(function() {
  $(this).css("color", "blue");   // al salir -> texto azul
});

// hover con DOS funciones: entrar y salir
$(".caja").hover(
  function() { $(this).css("background", "yellow"); },  // entra el puntero
  function() { $(this).css("background", "white"); }    // sale el puntero
);
```

`$(this)` 🔥: palabra de programación orientada a objetos. Se refiere a **sí mismo**, al elemento concreto sobre el que se está produciendo el evento en ese instante.

#### 9.9. Eventos de teclado

- **`keydown`** → instante en que se **presiona** una tecla (se haya soltado o no).
- **`keyup`** → instante en que se **deja de presionar**.
- **`keypress`** → la **acción de mantener/pulsar** una tecla; se puede pulsar varias veces. Es al teclado lo que `click` es al ratón.

`keydown`/`keyup` son los "hermanos" de teclado de `mousedown`/`mouseup`.

```js
// cambia el texto de un elemento según se pulse o se suelte una tecla
$(document).keydown(function() {
  $("#estado").html("tecla pulsada");     // .html() cambia el contenido HTML
});
$(document).keyup(function() {
  $("#estado").html("tecla sin pulsar");
});
```

#### 9.10. Eventos de ventana

Como el DOM incluye la ventana del navegador, también se pueden controlar sus eventos:

- **`scroll`** → cuando aparecen/se mueven las barras de desplazamiento. Permite cambiar colores, fijar elementos al bajar, etc.
- **`resize`** → cuando se redimensiona la ventana a otra resolución/tamaño.

```js
$(window).scroll(function() {
  // qué hago cuando el usuario hace scroll
});
$(window).resize(function() {
  // qué hago cuando cambia el tamaño de la ventana
});
```

#### 9.11. Efectos predeterminados de jQuery

jQuery no solo te da los eventos: trae **efectos visuales ya hechos** (desvanecimiento, deslizamiento, cambio de tamaño...) para que la página interactúe de forma más profesional sin programarlos tú. Los que usó el profe:

- **`hide()` / `show()`** → ocultar / mostrar un elemento. Las dos caras de la moneda. (Si haces `show()` de algo ya visible, el efecto se lanza pero no se nota.)
- **`toggle()`** → hace las dos: si está visible lo oculta, si está oculto lo muestra. Alterna verdadero/falso.
- **`fadeIn()` / `fadeOut()`** → cambian la **opacidad**: de 0 a 100 % o de 100 a 0 %.
- **`slideUp()` / `slideDown()`** → ocultan/muestran con un **movimiento vertical** (se desvanece deslizándose).
- **Duración / *easing*:** se le puede pasar el **tiempo en milisegundos** (1000 ≈ 1 segundo). `fadeIn` necesita que le indiques el tiempo.

```js
$(".btn-ocultar").click(function() { $("#caja").hide(1000); });   // oculta en 1 s
$(".btn-mostrar").click(function() { $("#caja").show(1000); });   // muestra en 1 s
$(".btn-toggle").click(function()  { $("#caja").toggle(); });     // alterna
$(".btn-fade").click(function()    { $("#caja").fadeIn(300); });  // fundido en 0,3 s
$(".btn-slide").click(function()   { $("#caja").slideUp(500); }); // se pliega arriba
```

#### 9.12. `bind` / `unbind`: unir varios eventos en una función

`bind` permite asociar **varios eventos** a una **misma función**: no repites código, queda más legible y más corto. `unbind` los **quita** (por ejemplo, bajo una condición).

```js
// los 3 eventos lanzan la MISMA función -> sin repetir código
$(".elemento").bind("click mouseenter mouseleave", function() {
  $(this).css("color", "rgb(0,0,255)");
});

$(".elemento").unbind("click");  // deja de escuchar el clic
```

#### 9.13. Modificar el CSS en tiempo real

Se puede tocar el DOM/CSS en caliente. Existe `innerHTML` y el CSS normal, pero jQuery trae funciones que lo hacen aún más sencillo:

- **`addClass()` / `removeClass()`** → añadir o quitar una clase CSS de un elemento en tiempo real.
- **`.css("propiedad", "valor")`** → cambiar directamente una propiedad CSS.

```js
$("#caja").addClass("destacado");          // le añade la clase "destacado"
$("#caja").removeClass("destacado");       // se la quita
$("#caja").css("background-color", "red"); // cambia una propiedad directamente
```

#### 9.14. Librerías de jQuery (plugins)

jQuery tiene un **núcleo** que se actualiza solo, y además **librerías** que añaden funcionalidades concretas. Hay librerías **del propio jQuery** y de **terceros** (algunas gratuitas, otras de pago). Suelen estar bien documentadas, mantenidas por la comunidad y optimizadas. Las que mencionó el profe:

- **jQuery UI** → interfaz de usuario, muchísimos efectos visuales. Es la que más encaja con esta asignatura (crear una interfaz amigable).
- **jQuery Mobile** → desarrollo para **dispositivos móviles**.
- **jQuery Validation** → **validación de formularios** (uno de los grandes quebraderos de cabeza en las empresas).
- **Slick** → carruseles, galerías de imágenes, adaptación de vídeo/audio (lo que ya trae Bootstrap), muy personalizable.

#### 9.15. Ejemplo de clase: elemento arrastrable con jQuery UI

El "ejemplo 1" del profe: un `<div>` "caja" con dos imágenes (una tortuga y un conejo) que se pueden **arrastrar** dentro de la caja, sin poder salirse de ella. Usa la clase `.ui-draggable` y el método `draggable()` de jQuery UI.

```html
<head>
  <!-- jQuery + jQuery UI por CDN -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
</head>
<body>
  <div class="caja">
    <img src="img/conejo.png"  class="dragables" alt="conejo"  width="80">
    <img src="img/tortuga.png" class="dragables" alt="tortuga" width="80">
  </div>

  <script>
    $(".dragables").draggable({
      containment: ".caja", // no puede salir de la caja
      scroll: false,        // no hace scroll al arrastrar
      stack: "img"          // gestiona el apilado (z-index) de las img
    });
  </script>
</body>
```
```css
.caja {
  width: 1000px;
  height: 300px;
  background-color: #eee;
  position: relative;       /* las img van con position relative dentro */
}
.dragables { position: relative; cursor: move; }
```

### Ejercicios resueltos

**Ejercicio 1 — Acordeón de FAQ con `<details>`.** Crea una sección de preguntas frecuentes plegables **sin una sola línea de JavaScript**. La primera debe aparecer ya abierta.

**Solución:**
```html
<section class="faq">
  <h2>Preguntas frecuentes</h2>

  <details open> <!-- "open" -> arranca desplegada -->
    <summary>¿El tema de contenido interactivo entra en el examen práctico?</summary>
    <p>No. Solo puede caer en el test teórico.</p>
  </details>

  <details>
    <summary>¿Qué es jQuery?</summary>
    <p>Una librería de JavaScript que facilita manejar el DOM con eventos y efectos ya hechos.</p>
  </details>

  <details>
    <summary>¿CDN o descarga?</summary>
    <p>CDN se actualiza solo pero necesita Internet; la descarga funciona en local pero la actualizas tú.</p>
  </details>
</section>
```
```css
.faq details {
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: .5rem;
  padding: .5rem 1rem;
}
.faq summary {
  cursor: pointer;       /* indica que es pulsable */
  font-weight: bold;
}
```
**Explicación:** `<details>` es interactivo por sí mismo: el navegador gestiona abrir/cerrar al hacer clic en el `<summary>`. El atributo `open` lo deja desplegado de inicio. `cursor: pointer` en el `summary` es buena práctica para que se note que es clicable. Cero JavaScript.

---

**Ejercicio 2 — Menú desplegable solo con CSS.** Una barra de navegación donde, al pasar el ratón por "Productos", se despliega un submenú.

**Solución:**
```html
<nav class="menu">
  <ul>
    <li><a href="#">Inicio</a></li>
    <li>
      <a href="#">Productos</a>
      <ul>
        <li><a href="#">Camisetas</a></li>
        <li><a href="#">Pantalones</a></li>
        <li><a href="#">Zapatos</a></li>
      </ul>
    </li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
```
```css
.menu ul { list-style: none; margin: 0; padding: 0; }
.menu > ul > li { display: inline-block; position: relative; } /* items en fila */

.menu ul ul {                 /* el submenú... */
  display: none;              /* ...empieza oculto */
  position: absolute;         /* se coloca bajo su padre */
  top: 100%; left: 0;
  background: #fff;
  border: 1px solid #ccc;
  min-width: 150px;
}
.menu li:hover > ul {         /* al pasar el ratón por el li padre... */
  display: block;             /* ...se muestra el submenú */
}
.menu a { display: block; padding: .5rem 1rem; text-decoration: none; }
```
**Explicación:** la clave es `.menu li:hover > ul { display: block; }`. El submenú está `display:none` por defecto y solo se muestra mientras el ratón esté sobre su `<li>` padre. `position: relative` en el `<li>` y `absolute` en el submenú lo colocan justo debajo. Ni JS ni jQuery.

---

**Ejercicio 3 — Pestañas (tabs) solo con CSS.** Tres pestañas; al pulsar una, se ve su contenido y se ocultan los demás. Usa el truco del `radio`.

**Solución:**
```html
<div class="tabs">
  <!-- los radios comparten el atributo name -> solo uno activo a la vez -->
  <input type="radio" name="tab" id="t1" checked>
  <label for="t1">Pestaña 1</label>
  <input type="radio" name="tab" id="t2">
  <label for="t2">Pestaña 2</label>
  <input type="radio" name="tab" id="t3">
  <label for="t3">Pestaña 3</label>

  <div class="panel" id="p1">Contenido de la pestaña 1.</div>
  <div class="panel" id="p2">Contenido de la pestaña 2.</div>
  <div class="panel" id="p3">Contenido de la pestaña 3.</div>
</div>
```
```css
.tabs input { display: none; }            /* radios invisibles */
.tabs label {                             /* las "pestañas" visibles */
  display: inline-block;
  padding: .5rem 1rem;
  cursor: pointer;
  background: #ddd;
}
.tabs .panel { display: none; padding: 1rem; border: 1px solid #ddd; } /* paneles ocultos */

/* al estar marcado un radio, se muestra SU panel (selector hermano ~) */
#t1:checked ~ #p1,
#t2:checked ~ #p2,
#t3:checked ~ #p3 { display: block; }

/* y se resalta SU label */
#t1:checked ~ label[for="t1"],
#t2:checked ~ label[for="t2"],
#t3:checked ~ label[for="t3"] { background: #fff; font-weight: bold; }
```
**Explicación:** los `<input type="radio">` con el mismo `name` garantizan que solo uno esté `:checked` a la vez. El `<label>` con `for` permite marcar el radio haciendo clic en la pestaña visible. El selector hermano general `~` enlaza cada radio marcado con su panel para mostrarlo. Es el mismo "truco del checkbox/radio" que el de los acordeones.

---

**Ejercicio 4 — Formulario con validación HTML5 nativa.** Formulario de alta con email obligatorio, código postal de 5 dígitos y edad entre 18 y 99. El navegador debe validar solo, y los campos correctos/incorrectos deben verse en verde/rojo.

**Solución:**
```html
<form class="alta">
  <label>Email:
    <!-- type="email" + required: obliga a un email válido -->
    <input type="email" name="email" required placeholder="tu@correo.com">
  </label>

  <label>Código postal:
    <!-- pattern: exactamente 5 dígitos. title: mensaje de ayuda -->
    <input type="text" name="cp" pattern="[0-9]{5}" title="5 dígitos" required>
  </label>

  <label>Edad:
    <!-- min/max: el navegador no deja enviar fuera de rango -->
    <input type="number" name="edad" min="18" max="99" required>
  </label>

  <button type="submit">Darse de alta</button>
</form>
```
```css
.alta input:invalid { border: 2px solid red; }    /* campo incorrecto */
.alta input:valid   { border: 2px solid green; }  /* campo correcto */
.alta label { display: block; margin-bottom: .75rem; }
```
**Explicación:** sin JavaScript, `required`, `type="email"`, `pattern` y `min`/`max` hacen que el navegador **bloquee el envío** y muestre su mensaje si algo no cumple. Las pseudoclases `:valid` e `:invalid` permiten dar **feedback visual** inmediato al usuario mientras escribe. `title` aporta el texto de ayuda del `pattern`.

---

**Ejercicio 5 — Galería interactiva con `:hover` y `transition`.** Una galería de imágenes que, al pasar el ratón por una, la agranda suavemente y oscurece las demás.

**Solución:**
```html
<div class="galeria">
  <img src="img/1.jpg" alt="Foto 1">
  <img src="img/2.jpg" alt="Foto 2">
  <img src="img/3.jpg" alt="Foto 3">
  <img src="img/4.jpg" alt="Foto 4">
</div>
```
```css
.galeria { display: flex; gap: 10px; }
.galeria img {
  width: 200px;
  transition: transform .3s ease, filter .3s ease; /* anima escala y filtro */
}
/* al pasar el ratón por la galería, oscurece TODAS las imágenes */
.galeria:hover img { filter: brightness(0.6); }
/* ...pero la que está bajo el ratón se agranda y recupera brillo */
.galeria img:hover {
  transform: scale(1.15);
  filter: brightness(1);
}
```
**Explicación:** `transition` en cada `img` hace que los cambios sean **suaves**, no bruscos. `.galeria:hover img` oscurece todo el conjunto, y `.galeria img:hover` (más específico para la imagen concreta) la destaca. Efecto de galería interactiva profesional con cero JavaScript.

---

**Ejercicio 6 — Mostrar/ocultar un panel con jQuery.** Dos botones, "Ocultar" y "Mostrar", que esconden y muestran una caja con un efecto de 1 segundo. (Estilo del "ejemplo 2" del profe.)

**Solución:**
```html
<button id="ocultar">Ocultar</button>
<button id="mostrar">Mostrar</button>
<button id="alternar">Alternar</button>
<div id="caja">Soy una caja de contenido.</div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  $(document).ready(function() {
    // #ocultar -> selector id; click -> evento; hide(1000) -> efecto en 1 s
    $("#ocultar").click(function() {
      $("#caja").hide(1000);
    });
    $("#mostrar").click(function() {
      $("#caja").show(1000);
    });
    // toggle: alterna mostrar/ocultar según el estado actual
    $("#alternar").click(function() {
      $("#caja").toggle(1000);
    });
  });
</script>
```
**Explicación:** se sigue al pie de la letra la estructura `$(selector).evento(function(){...})`. `hide()` y `show()` son las dos caras de la moneda; `toggle()` decide automáticamente cuál aplicar. El `1000` es la duración del *easing* en milisegundos (1 segundo). Todo dentro de `$(document).ready()` para asegurar que el DOM ya está cargado.

---

**Ejercicio 7 — Cambiar estilos al pasar el ratón con `hover` de jQuery.** Una caja que se pone amarilla al entrar el ratón y blanca al salir, usando las **dos funciones** de `hover`.

**Solución:**
```html
<div class="caja-hover">Pasa el ratón por encima</div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  $(document).ready(function() {
    $(".caja-hover").hover(
      function() {                                  // 1ª función: ENTRA el ratón
        $(this).css("background-color", "yellow");
      },
      function() {                                  // 2ª función: SALE el ratón
        $(this).css("background-color", "white");
      }
    );
  });
</script>
```
**Explicación:** `hover` es especial porque admite **dos funciones separadas por coma** dentro del paréntesis: la primera para cuando el puntero entra, la segunda para cuando sale. `$(this)` se refiere al **propio elemento** sobre el que ocurre el evento. Esto mismo se podría hacer en CSS puro con `.caja-hover:hover`, pero el ejercicio practica la sintaxis de jQuery.

### Visuales a revisar

- [📺 13_Contenido_Interactivo.md, aprox. 00:30] — Introducción: calendario del curso, aviso de que este tema y el de usabilidad **no entran en la parte práctica** del examen.
- [📺 13_Contenido_Interactivo.md, aprox. 04:00] — Reflexión sobre interactividad "con sentido": época de Adobe Flash, webs estresantes con demasiados popups, dónde encaja (formularios, carrito, opiniones).
- [📺 13_Contenido_Interactivo.md, aprox. 12:00] — Presentación de jQuery: qué es, qué aporta (DOM, eventos, efectos, AJAX).
- [📺 13_Contenido_Interactivo.md, aprox. 22:00] — Tamaños de la librería (minificada vs desarrollo), inclusión por CDN o descarga, el fichero de 86 KB en la carpeta de ejemplos.
- [📺 13_Contenido_Interactivo.md, aprox. 32:00] — Estructura `$(selector).evento(function(){})`, el atajo `$`, ejemplo de `$(document).ready` que oculta los párrafos.
- [📺 13_Contenido_Interactivo.md, aprox. 45:00] — Eventos de ratón: `click`, `dblclick`, `mouseenter`/`mouseleave`, `hover` con dos funciones, `mousedown`/`mouseup`, uso de `$(this)`.
- [📺 13_Contenido_Interactivo.md, aprox. 58:00] — Eventos de teclado (`keydown`, `keyup`, `keypress`) y de ventana (`scroll`, `resize`).
- [📺 13_Contenido_Interactivo.md, aprox. 1:08:00] — Efectos predeterminados: `show`/`hide`, `toggle`, `fadeIn`/`fadeOut`, `slideUp`/`slideDown`, *easing*/duración.
- [📺 13_Contenido_Interactivo.md, aprox. 1:18:00] — `bind`/`unbind` para unir varios eventos; modificar CSS en tiempo real con `addClass`/`removeClass`/`.css()`.
- [📺 13_Contenido_Interactivo.md, aprox. 1:28:00] — Librerías de jQuery: jQuery UI, Mobile, Validation, Slick.
- [📺 13_Contenido_Interactivo.md, aprox. 1:40:00] — Demo del "ejemplo 1": caja con tortuga y conejo arrastrables con jQuery UI (`draggable`, `containment`, `stack`).
- [📺 13_Contenido_Interactivo.md, aprox. 1:52:00] — Demo del "ejemplo 2": recorrido por los eventos en una página de resumen; cierre y aviso de que esto solo cae en el test.

### Cubierto en
- Clase 13 (Contenido Interactivo) — `13_Contenido_Interactivo.md`

### Pitfalls y buenas prácticas

**Pitfalls (errores comunes):**

- **Meter interactividad porque sí.** El error que más recalcó el profe. Demasiados popups, animaciones y reacciones hacen la web **cansina y estresante**. Cada elemento interactivo debe justificar su presencia.
- **Olvidar `$(document).ready()`** en jQuery. Si el `<script>` se ejecuta antes de que el DOM esté cargado, los selectores no encuentran nada y "no funciona".
- **Cargar jQuery DESPUÉS del código que lo usa.** El `<script src="...jquery...">` debe ir **antes** de tu script; si no, `$` no existe todavía.
- **Confundir `<progress>` y `<meter>`.** `<progress>` = avance de una tarea; `<meter>` = una medida dentro de una escala. No son intercambiables.
- **Apuntar a una etiqueta genérica** (`$("p")`, `$("div")`) cuando querías un elemento concreto. El profe avisó: lo normal es usar **clases o ids**, no etiquetas.
- **Confundir `mousedown`/`mouseup` con `click`.** No son lo mismo: `click` es el clic completo; `mousedown`/`mouseup` son los instantes de pulsar y soltar, y permiten reacciones distintas.
- **Olvidar el `for` del `<label>`** en los acordeones/tabs solo-CSS. Sin el `for` apuntando al `id` del input, hacer clic en la etiqueta no marca nada y el truco no funciona.
- **Esperar que `:checked` o `:hover` lleguen "hacia arriba".** Los selectores `~` y `+` solo alcanzan **hermanos posteriores**: el panel a mostrar debe ir **después** del input en el HTML.
- **Validar formularios solo en el cliente.** La validación nativa HTML5 mejora la experiencia, pero **no sustituye la validación en el servidor**: el usuario puede saltársela.
- **Usar la versión `.min.js` para desarrollar.** Es ilegible. La minificada es para **producción**; en desarrollo usa la versión comentada.

**Buenas prácticas:**

- **Plantea antes de programar.** Decide qué partes de la web necesitan interactividad y por qué, antes de escribir código.
- **Prefiere lo nativo cuando baste.** `<details>`, `<dialog>`, validación HTML5 y pseudoclases CSS resuelven mucho **sin JavaScript**: menos código, menos peso, más accesible.
- **Usa `transition` para suavizar.** Los cambios de estado (`:hover`, `:focus`, `:checked`) quedan profesionales si se animan; los cambios bruscos cansan.
- **No olvides `:focus`.** Mucha gente solo estiliza `:hover`, pero `:focus` es imprescindible para quien navega con teclado (accesibilidad).
- **CDN vs descarga, con criterio.** CDN si la web siempre tiene Internet (se actualiza solo); descarga si debe funcionar en local.
- **Reutiliza con `bind`** cuando varios eventos hagan lo mismo: menos repetición, código más legible y más corto.
- **Da feedback visual en formularios** con `:valid`/`:invalid` para que el usuario sepa al momento si el dato es correcto.
- **`cursor: pointer`** en los elementos clicables (`summary`, `label` de tabs) para que se note que son interactivos.
- **Practica los ejercicios.** El profe lo pidió expresamente: aunque no entre en el práctico, **puede caer en el test** y es útil de cara al mundo laboral.

---

## 10. Accesibilidad y usabilidad

> **TL;DR.** La **accesibilidad web** consiste en que *cualquier* persona —con discapacidad visual, auditiva, motora o cognitiva, y con cualquier tecnología— pueda usar tu web. La marca el **W3C** a través de la **WAI** y sus pautas **WCAG**, que se resumen en los 4 principios **POUR**: Perceptible, Operable, Comprensible (*Understandable*) y Robusto. La base técnica es **HTML semántico** bien etiquetado: `alt` en imágenes, `<label>` en formularios, atributos **ARIA**, navegación por **teclado**, **contraste de color** suficiente, **subtítulos** y jerarquía de encabezados correcta. La **usabilidad** es algo distinto: que la web sea *fácil de usar* (personas mayores, gente con poca experiencia). Se mide con las **heurísticas de Nielsen** y se mejora con **diseño centrado en el usuario**. Hay 3 niveles de conformidad WCAG: **A, AA y AAA**, y herramientas (validadores W3C, lectores de pantalla, Lighthouse) para comprobarlo.

### Conceptos clave

- **Accesibilidad web** 🔥: que cualquier persona con cualquier discapacidad y con cualquier forma de acceder a la tecnología sea capaz de usar el sitio web.
- **W3C** (*World Wide Web Consortium*): organismo que crea los estándares de la web. Dentro de él, la **WAI** (*Web Accessibility Initiative*) se ocupa de la accesibilidad.
- **WCAG** (*Web Content Accessibility Guidelines*) 🔥: las pautas oficiales de accesibilidad. No las inventa el programador; las dicta el W3C y se van actualizando.
- **POUR** 🔥: los 4 principios de la accesibilidad — **P**erceptible, **O**perable, comprensible (*Understandable*) y **R**obusto.
- **HTML semántico**: usar etiquetas que describen el *significado* del contenido (`<header>`, `<nav>`, `<article>`, `<footer>`...) en lugar de `<div>` para todo. Es la base de la accesibilidad.
- **Tecnología de asistencia**: software o hardware que ayuda a personas con discapacidad. El ejemplo típico es el **lector de pantalla** (navegador para ciegos que va leyendo el HTML en voz alta).
- **Texto alternativo (`alt`)**: descripción textual de una imagen, que el lector de pantalla lee en voz alta.
- **ARIA** (*Accessible Rich Internet Applications*): conjunto de atributos (`role`, `aria-label`, `aria-hidden`...) que añaden información de accesibilidad cuando el HTML semántico no llega.
- **Navegación por teclado**: poder recorrer toda la web con `Tab`, `Shift+Tab`, `Enter` y los cursores, sin ratón.
- **Contraste de color**: diferencia de luminosidad entre texto y fondo, para que se lea bien (sobre todo personas con baja visión).
- **Niveles de conformidad** 🔥: **A** (básico), **AA** (intermedio, el habitual y obligatorio en webs públicas) y **AAA** (máximo).
- **Usabilidad**: facilidad con la que *cualquier* usuario puede usar la web. Va dirigida sobre todo a personas mayores o sin experiencia con la tecnología.
- **Heurísticas de Nielsen**: principios clásicos de buen diseño de interfaz (consistencia, retroalimentación, prevención de errores...).
- **Diseño centrado en el usuario** / **UX** (*experiencia de usuario*): diseñar partiendo de las necesidades, emociones y percepciones reales de las personas.

### Explicación detallada

#### Qué es la accesibilidad y por qué importa

Cuando hablamos de un **sitio web accesible** nos referimos a que **cualquier persona, con cualquier discapacidad y con cualquier forma de acceder a la tecnología, sea capaz de "ver" —entre comillas— y de acceder al sitio web**. Las discapacidades pueden ser:

- **Visuales**: ceguera total o baja visión.
- **Auditivas**: sordera total o parcial.
- **Motoras**: dificultad o imposibilidad para usar el ratón, mover una mano, etc.
- **Cognitivas**: dificultades de comprensión, atención o memoria.

No solo cambia la persona: también cambia **la tecnología con la que accede**. Existen navegadores para ciegos (por ejemplo, los de la **Fundación ONCE** ❓) que se dedican a **ir leyendo el HTML** —las etiquetas concretas— y, por ejemplo, en una tienda online van leyendo los productos con sus precios. Suelen ser de pago. Por eso en accesibilidad no basta con dominar el lenguaje y las tecnologías: hay que pensar **con qué navegadores** se va a consumir la web y probarla en ellos.

La idea de fondo es **ética y moral**: Internet nació para que **todo el mundo** tuviera acceso a la información, con igualdad de oportunidades, independientemente de su capacidad o de su dinero (es la idea original de **Tim Berners-Lee**, el inventor de la World Wide Web). No siempre se cumple —depende del presupuesto de la empresa, porque hacer una web que cumpla estándares avanzados cuesta dinero y tiempo—, pero como profesionales debemos al menos **conocerlo y tenerlo en cuenta**. No es solo accesibilidad: es **inclusión y equidad**, que nadie se sienta excluido.

#### El W3C, la WAI y las pautas WCAG

Los principios de accesibilidad **no los decide el programador ni el diseñador**: los marca el **W3C** (*World Wide Web Consortium*). El W3C publica las **WCAG** (*Web Content Accessibility Guidelines*, "Pautas de Accesibilidad para el Contenido Web"): una serie de **recomendaciones y pautas** que tu web debe cumplir si quieres que sea accesible. Estas pautas **se van modificando y actualizando** con el tiempo.

#### Los 4 principios: POUR 🔥

El W3C resume la accesibilidad en **cuatro principios**. En inglés sus iniciales forman la palabra **POUR**:

1. **Perceptible** — El contenido debe poder *percibirse* independientemente de las capacidades sensoriales del usuario. Una persona ciega o sorda no percibe igual que una sin discapacidad; hay que ofrecer el contenido de forma que, al menos, sepa **dónde está** y **qué puede contener** esa web (texto alternativo, subtítulos, etc.).
2. **Operable** — El usuario debe poder *interactuar* con la web: usar los menús, los botones, los enlaces... aunque no use ratón.
3. **Comprensible** (*Understandable*) — El contenido debe ser **fácil de entender** para todos los usuarios: textos claros, mensajes de error legibles, comportamiento predecible.
4. **Robusto** — La web debe ser **compatible con las tecnologías de asistencia** y no perder calidad por ello: no puede "caerse", no puede perder seguridad. Hacerla accesible **no** puede hacerla frágil.

#### Cómo conseguir que la web sea accesible (recomendaciones generales)

El profesor da una lista de ideas prácticas, "actualizable en el tiempo":

- **Diseño con estructura clara y sencilla** (con Flexbox, Bootstrap, CSS... lo que sea). Mejor sencillo que supercomplejo.
- **Crear textos alternativos para las imágenes** — lo que el lector de pantalla lee a las personas con discapacidad visual: el contenido del atributo `alt`.
- **Contraste de color adecuado**, sobre todo para personas con baja visión (no ciegas del todo).
- **Etiquetar correctamente los elementos**: `name`, `id` correctos y lo más **semánticos** posible.
- **Probar la web con diferentes tecnologías de asistencia** y navegadores.

Y algunos ejemplos concretos que recomienda el W3C: usar **etiquetas semánticas** (`<article>`, `<footer>`...), colores de fondo y texto con contraste adecuado, diseño claro y sencillo, barras de búsqueda fáciles de entender, **enlaces internos** para mejorar la experiencia, diseño **responsive** (importante para quien necesita hacer mucho **zoom**), y **optimizar la carga** de la página. Además: **evitar Flash y frames** (ya prácticamente no se usan).

#### HTML semántico como base de la accesibilidad

La accesibilidad **empieza** por escribir HTML que *signifique* algo. Un lector de pantalla puede anunciar "navegación", "encabezado", "artículo", "pie de página" si usas las etiquetas correctas. Si todo son `<div>`, no puede.

```html
<!-- ❌ NO accesible: todo son <div>, el lector de pantalla no sabe qué es cada cosa -->
<div class="cabecera">...</div>
<div class="menu">...</div>
<div class="contenido">...</div>
<div class="pie">...</div>

<!-- ✅ Accesible: etiquetas semánticas, el lector de pantalla anuncia cada zona -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

#### Jerarquía correcta de encabezados

Los lectores de pantalla permiten **saltar de encabezado en encabezado** para hacerse un índice mental de la página. Por eso la jerarquía `<h1>` → `<h6>` debe ser **lógica y sin saltos**: un `<h1>` por página, y no pasar de `<h2>` a `<h4>` saltándose el `<h3>`. **No uses encabezados por su tamaño** —para eso está el CSS—, sino por su jerarquía.

```html
<!-- ❌ NO accesible: se usa h4 solo porque "se ve más pequeño", hay saltos -->
<h1>Mi blog</h1>
<h4>Primera noticia</h4>
<h2>Detalle</h2>

<!-- ✅ Accesible: jerarquía lógica, sin saltos -->
<h1>Mi blog</h1>
  <h2>Primera noticia</h2>
    <h3>Detalle</h3>
  <h2>Segunda noticia</h2>
```

#### Landmarks (regiones de la página)

Los **landmarks** son las "regiones" que el lector de pantalla reconoce y por las que el usuario puede saltar directamente. Los obtienes **gratis** usando las etiquetas semánticas (`<header>` → *banner*, `<nav>` → *navigation*, `<main>` → *main*, `<footer>` → *contentinfo*, `<aside>` → *complementary*). Cuando no puedes usar la etiqueta, los simulas con `role`.

```html
<!-- Landmarks "gratis" gracias a las etiquetas semánticas -->
<header>   <!-- landmark: banner -->
  <nav aria-label="Menú principal"> <!-- landmark: navigation -->
    ...
  </nav>
</header>
<main>     <!-- landmark: main (contenido principal) -->
  <article>...</article>
  <aside>...</aside>   <!-- landmark: complementary -->
</main>
<footer>   <!-- landmark: contentinfo -->
  ...
</footer>
```

#### El atributo `alt` en las imágenes 🔥

Una persona con discapacidad visual no ve la imagen: el navegador le **lee el contenido del atributo `alt`**. Por eso **toda imagen con contenido** debe tener un `alt` que **describa lo que muestra**. El `alt` también se ve si la imagen no carga.

- Si la imagen **aporta información** → `alt` con una descripción útil.
- Si la imagen es **puramente decorativa** → `alt=""` (vacío, pero el atributo presente) para que el lector la **ignore**.

#### Etiquetas `<label>` asociadas a inputs 🔥

Cada campo de un formulario necesita una etiqueta `<label>` **asociada** a él. Así el lector de pantalla, al llegar al campo, **anuncia qué hay que escribir**; y además, al pulsar sobre el texto de la etiqueta, el foco salta al campo (área de clic más grande, mejor usabilidad). La asociación se hace con `for` (en el `<label>`) + `id` (en el `<input>`), y deben coincidir.

#### Atributos ARIA

**ARIA** (*Accessible Rich Internet Applications*) son atributos que **añaden información de accesibilidad** cuando el HTML por sí solo no es suficiente (componentes hechos a mano, iconos, etc.). Regla de oro: **primero HTML semántico; ARIA solo cuando no hay alternativa**. Los más habituales:

- **`role`** — indica *qué es* un elemento (`role="navigation"`, `role="button"`, `role="alert"`...).
- **`aria-label`** — da un nombre accesible a un elemento que no tiene texto visible (un botón que solo es un icono).
- **`aria-hidden="true"`** — oculta un elemento a las tecnologías de asistencia (típico en iconos decorativos), aunque siga visible en pantalla.
- **`aria-describedby`** — asocia un elemento con otro que lo *describe* (por ejemplo, un input con su texto de ayuda o su mensaje de error). Recibe el `id` del elemento descriptor.
- **`aria-labelledby`** — como `aria-label`, pero apuntando al `id` de un texto visible que ya existe.

#### Navegación por teclado y `tabindex`

Mucha gente **no usa ratón** (discapacidad motora, o simplemente preferencia). Deben poder recorrer toda la web con **`Tab`** (avanzar), **`Shift+Tab`** (retroceder), **`Enter`/`Espacio`** (activar) y los cursores. Para ello:

- Usa elementos **nativamente interactivos** (`<a>`, `<button>`, `<input>`): ya son enfocables y operables con teclado.
- **`tabindex="0"`** — incluye un elemento en el orden natural de tabulación (útil si has hecho un componente con `<div>`, aunque es mejor evitarlo).
- **`tabindex="-1"`** — el elemento **no** se alcanza con `Tab`, pero sí se le puede dar foco por JavaScript.
- **Evita `tabindex` con números positivos** (`tabindex="3"`): rompen el orden lógico y son una mala práctica.
- Los botones y enlaces deben estar **bien colocados** para que sean fáciles de manejar con el teclado.

#### Contraste de color

El **contraste** es la diferencia entre el color del texto y el del fondo. Si es bajo, las personas con **baja visión** (no ciegas del todo) no pueden leer. El profesor reconoce que el color "se le escapa" y recomienda **fiarse de herramientas** que te dan combinaciones con contraste adecuado (UI Colors, Coolors, Tailwind...). Como referencia, WCAG nivel AA pide un contraste mínimo de **4.5:1** para texto normal ❓.

#### Texto alternativo, subtítulos y transcripciones

Las personas con discapacidad auditiva **no consumen el contenido multimedia como el resto**. Por eso:

- **Vídeos** → **subtítulos** (con `<track>`).
- **Audios** → **transcripción** textual.
- Usar **reproductores accesibles** (los hay).
- En el nivel más alto, incluso **lengua de signos** para los vídeos.

Es algo que ya hacemos a diario sin darnos cuenta: TikTok, Instagram y demás ya incluyen subtítulos casi siempre.

#### Los 3 niveles de conformidad WCAG 🔥

WCAG define **tres niveles** de cumplimiento:

| Nivel | Qué cubre |
|-------|-----------|
| **A** (básico) | Necesidades básicas: **texto alternativo** en imágenes, **navegación por teclado** sencilla (Tab + cursores). |
| **AA** (intermedio) | Todo lo de A **más**: **subtítulos** en vídeos, evita que los elementos **parpadeen**, compatible con navegadores de asistencia. Es el nivel **habitual y obligatorio** para webs de ministerios, ayuntamientos y entornos públicos. |
| **AAA** (máximo) | El nivel más alto: cubre las necesidades de **cualquier** usuario, ofrece **lengua de signos** en vídeos, compatibilidad máxima con casi todos los navegadores. |

🔥 **Dato de examen**: las webs de **administraciones públicas** (ayuntamientos, ministerios) **están obligadas por ley** a cumplir cierto nivel de accesibilidad, porque cualquier persona —ciega, sorda, con discapacidad motora— tiene que poder hacer sus gestiones (descargar el padrón, usar el certificado digital, etc.).

#### Qué es la usabilidad (y en qué se diferencia de la accesibilidad) 🔥

La **usabilidad** es **la facilidad con la que cualquier usuario puede usar tu web**. ⚠️ **No es lo mismo que la accesibilidad**:

- **Accesibilidad** → pensada sobre todo para personas con **discapacidad** y para que funcione con **tecnologías de asistencia**.
- **Usabilidad** → pensada para personas a las que **les cuesta más** usar la web aunque no tengan discapacidad: **personas mayores**, o gente joven que **nunca** ha tenido acceso a la tecnología y se enfrenta a ella por primera vez.

El ejemplo clásico: los **cajeros y apps de los bancos**. Hubo una época en que se volvieron muy difíciles y las personas mayores no podían sacar dinero ni hacer una transferencia. Una web **usable** es aquella en la que tu madre de 80 años puede hacer esa transferencia sin ayuda.

#### Principios y heurísticas de usabilidad

El profesor menciona varios principios de usabilidad que coinciden con las **heurísticas de Nielsen** (los 10 principios clásicos de diseño de interfaz de Jakob Nielsen):

- **Navegación intuitiva**: la persona encuentra **sin esfuerzo** lo que busca.
- **Consistencia**: que la interfaz sea **familiar y predecible** — no cambies la aplicación todo el rato. Las actualizaciones, poco a poco.
- **Retroalimentación** (*feedback*): el usuario debe entender **qué le está pasando**. Si comete un error en un formulario (código postal mal, IBAN incorrecto), díselo **en lenguaje claro** — no "Error 27", que solo le sirve al programador.
- **Prevención de errores**, **reconocer mejor que recordar**, **flexibilidad**, **diseño minimalista**, **ayuda y documentación**... (el resto del decálogo de Nielsen) ❓.

#### Diseño centrado en el usuario y UX

El **diseño centrado en el usuario** consiste en diseñar partiendo de las necesidades reales de las personas, **probando** la interfaz con usuarios e **iterando**. Ejemplos que da el profesor:

- **Airbnb**: rediseñó su web a partir de pruebas de usabilidad y **simplificó mucho el proceso de reserva**.
- **Google Maps**: mejora la usabilidad **continuamente** a partir de la retroalimentación de los usuarios.
- **Slack**: diseñado teniendo en cuenta las preferencias del usuario.

Unida a la accesibilidad y la usabilidad está la **experiencia de usuario (UX)**: las **emociones, sentimientos y percepciones** que el usuario tiene al interactuar con una aplicación. No es estrictamente parte del módulo (es más de marketing), pero conviene conocerla. Ejemplos de buena UX: **Google** (sencilla, minimalista, igual desde hace 25 años), **Amazon** (alta usabilidad: encuentras, sabes el precio y la fecha de entrega, no engaña) y **Wikipedia** (sencilla, sabes qué es y para qué sirve).

#### Herramientas de validación

Para comprobar accesibilidad y usabilidad existen herramientas:

- **Validadores de accesibilidad**: el propio W3C ofrece herramientas; también **AChecker**, **TAW**, **WAVE** ❓ — pones una URL o un fichero y te dice los problemas.
- **Lectores de pantalla**: para probar la web "a ciegas" (NVDA, JAWS, VoiceOver) ❓.
- **Lighthouse**: auditoría integrada en las DevTools de Chrome que da una **puntuación de accesibilidad** (y de rendimiento, SEO...).
- **Herramientas de color**: **UI Colors**, **Coolors**, generador de colores de **Tailwind** — te recomiendan paletas con contraste adecuado.
- **Probar en varios navegadores y dispositivos**: Chrome, Firefox, Opera... y los navegadores de asistencia.

### Sintaxis y ejemplos comentados

#### 1. `alt` en imágenes — NO accesible vs accesible

```html
<!-- ❌ NO ACCESIBLE -->
<!-- Sin alt: el lector de pantalla lee el nombre del archivo o "imagen", inútil. -->
<img src="grafico-ventas-2025.png">
<!-- alt vacío en una imagen con contenido: se pierde información. -->
<img src="grafico-ventas-2025.png" alt="">
<!-- alt redundante: el lector ya dice "imagen", no hace falta repetirlo. -->
<img src="grafico-ventas-2025.png" alt="imagen del grafico">

<!-- ✅ ACCESIBLE -->
<!-- alt descriptivo: transmite la MISMA información que la imagen. -->
<img src="grafico-ventas-2025.png"
     alt="Gráfico de barras: las ventas suben de 10.000 € en enero a 45.000 € en diciembre">

<!-- Imagen DECORATIVA (un adorno, una línea): alt VACÍO para que el lector la ignore. -->
<img src="adorno-floral.png" alt="">
```

#### 2. `<label>` en formularios — NO accesible vs accesible

```html
<!-- ❌ NO ACCESIBLE -->
<!-- El texto NO es un <label>, solo un texto suelto: no está asociado al input. -->
<!-- El lector de pantalla, al llegar al campo, dice solo "cuadro de texto". -->
<p>Nombre</p>
<input type="text">

<!-- El placeholder NO sustituye al label: desaparece al escribir y muchos
     lectores de pantalla no lo anuncian de forma fiable. -->
<input type="text" placeholder="Nombre">

<!-- ✅ ACCESIBLE -->
<!-- for + id COINCIDEN: el label queda asociado al input. -->
<!-- Ventajas: el lector anuncia "Nombre, cuadro de texto"
     y al hacer clic en la palabra "Nombre" el foco salta al campo. -->
<label for="nombre">Nombre</label>
<input type="text" id="nombre" name="nombre">

<!-- Alternativa: el input ENVUELTO por el label (también válido). -->
<label>
  Correo electrónico
  <input type="email" name="email">
</label>

<!-- Campo con texto de ayuda asociado mediante aria-describedby. -->
<label for="pass">Contraseña</label>
<input type="password" id="pass" name="pass" aria-describedby="ayuda-pass">
<small id="ayuda-pass">Mínimo 8 caracteres, una mayúscula y un número.</small>
<!-- El lector lee: "Contraseña, ... , Mínimo 8 caracteres, una mayúscula y un número". -->
```

#### 3. Atributos ARIA — cada uno con su ejemplo

```html
<!-- role: indica QUÉ es un elemento cuando no es semántico de por sí. -->
<!-- ❌ <div> sin rol: el lector no sabe que es un menú. -->
<div class="menu"> ... </div>
<!-- ✅ con role (mejor aún: usar <nav>, que ya tiene el rol "navigation"). -->
<div class="menu" role="navigation"> ... </div>

<!-- aria-label: nombre accesible para un control SIN texto visible. -->
<!-- ❌ botón que solo es un icono: el lector dice "botón", sin más. -->
<button>✖</button>
<!-- ✅ con aria-label: el lector dice "Cerrar, botón". -->
<button aria-label="Cerrar">✖</button>

<!-- aria-hidden="true": oculta a las tecnologías de asistencia
     algo que es DECORATIVO (un icono que acompaña a un texto). -->
<button>
  <span aria-hidden="true">🔍</span> <!-- el icono se ignora -->
  Buscar                              <!-- el texto sí se lee -->
</button>

<!-- aria-describedby: asocia un elemento con su DESCRIPCIÓN (recibe un id). -->
<label for="cp">Código postal</label>
<input type="text" id="cp" aria-describedby="error-cp">
<span id="error-cp">Debe tener 5 cifras.</span>

<!-- aria-labelledby: el nombre accesible viene de OTRO elemento visible (por id). -->
<h2 id="titulo-seccion">Noticias destacadas</h2>
<section aria-labelledby="titulo-seccion"> ... </section>

<!-- role="alert": el lector ANUNCIA el contenido en cuanto aparece (errores). -->
<p role="alert">El formulario contiene errores.</p>
```

#### 4. Navegación por teclado y `tabindex`

```html
<!-- ❌ NO ACCESIBLE: un <div> usado como botón. -->
<!-- No se alcanza con Tab, no responde a Enter: inutilizable sin ratón. -->
<div class="boton" onclick="enviar()">Enviar</div>

<!-- ✅ ACCESIBLE: usar el elemento NATIVO, que ya es enfocable y operable. -->
<button type="button" onclick="enviar()">Enviar</button>

<!-- Si POR FUERZA usas un <div> interactivo, hazlo enfocable y dale rol. -->
<div class="boton" role="button" tabindex="0" onclick="enviar()">Enviar</div>
<!-- tabindex="0"  -> entra en el orden natural de tabulación. -->

<!-- tabindex="-1": NO se alcanza con Tab, pero se le puede dar foco por JS
     (típico para mover el foco a un mensaje de error tras enviar). -->
<div id="resumen-errores" tabindex="-1"> ... </div>

<!-- ❌ MALA PRÁCTICA: tabindex positivo, rompe el orden lógico. -->
<input tabindex="3"> <input tabindex="1"> <input tabindex="2">
```

```css
/* El foco del teclado DEBE verse. Nunca hagas esto: */
/* ❌ :focus { outline: none; }  <- la persona que tabula se pierde */

/* ✅ Personaliza el foco, pero que se vea claramente */
a:focus,
button:focus,
input:focus {
  outline: 3px solid #1a73e8;
  outline-offset: 2px;
}
```

#### 5. Subtítulos en vídeo y enlaces descriptivos

```html
<!-- Vídeo con subtítulos mediante <track>. -->
<video controls>
  <source src="tutorial.mp4" type="video/mp4">
  <!-- kind="subtitles" + el archivo .vtt con los textos sincronizados -->
  <track src="subtitulos-es.vtt" kind="subtitles" srclang="es" label="Español" default>
</video>

<!-- Enlaces: el texto debe describir el DESTINO. -->
<!-- ❌ "enlace" o "aquí" no dicen nada (un lector lista los enlaces sueltos). -->
<a href="noticia.html">enlace</a>
<a href="ofertas.html">aquí</a>
<!-- ✅ texto claro y descriptivo. -->
<a href="noticia.html">Leer la noticia completa sobre el eclipse</a>
<a href="ofertas.html">Ver las ofertas de primavera</a>

<!-- Si el enlace abre una ventana nueva, AVISA (no abras ventanas sin avisar). -->
<a href="manual.pdf" target="_blank">
  Descargar el manual (PDF, se abre en una pestaña nueva)
</a>
```

#### 6. Atributo `lang` y estructura de página accesible completa

```html
<!doctype html>
<!-- lang="es": el lector de pantalla usa la pronunciación correcta. -->
<html lang="es">
<head>
  <meta charset="utf-8">
  <!-- viewport: imprescindible para responsive y para el zoom. -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Periódico Local — Portada</title>
</head>
<body>
  <!-- "Skip link": permite saltar directo al contenido sin tabular todo el menú. -->
  <a href="#contenido" class="skip-link">Saltar al contenido principal</a>

  <header>
    <img src="logo.png" alt="Periódico Local">
    <nav aria-label="Menú principal">
      <ul>
        <li><a href="/">Portada</a></li>
        <li><a href="/deportes">Deportes</a></li>
      </ul>
    </nav>
  </header>

  <main id="contenido">
    <h1>Portada del día</h1>
    <article>
      <h2>El ayuntamiento renueva el parque</h2>
      <img src="parque.jpg" alt="Vista del parque municipal con los nuevos bancos">
      <p>...</p>
      <a href="parque.html">Leer la noticia completa sobre el parque</a>
    </article>
  </main>

  <footer>
    <p>© 2026 Periódico Local</p>
  </footer>
</body>
</html>
```

### Ejercicios resueltos

**Ejercicio 1 — Corregir una página inaccesible.**
El siguiente código tiene **al menos 5 problemas de accesibilidad**. Identifícalos y corrígelos.

```html
<html>
<body>
  <div class="cabecera"><img src="logo.png"></div>
  <div class="menu">
    <span onclick="ir('inicio')">Inicio</span>
    <span onclick="ir('blog')">Blog</span>
  </div>
  <h3>Bienvenido</h3>
  <h1>Mi web</h1>
  <a href="blog.html">aquí</a>
</body>
</html>
```

**Solución:**

```html
<!doctype html>
<html lang="es">                                  <!-- 1. faltaba lang -->
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mi web</title>
</head>
<body>
  <header>                                       <!-- 2. <div> -> etiqueta semántica -->
    <img src="logo.png" alt="Mi web - logotipo"> <!-- 3. faltaba el alt -->
  </header>
  <nav aria-label="Menú principal">              <!-- 2. <div> -> <nav> -->
    <ul>
      <!-- 4. <span> con onclick -> enlaces nativos, enfocables con teclado -->
      <li><a href="inicio.html">Inicio</a></li>
      <li><a href="blog.html">Blog</a></li>
    </ul>
  </nav>
  <main>
    <h1>Mi web</h1>            <!-- 5. la jerarquía: el h1 va PRIMERO -->
    <h2>Bienvenido</h2>        <!--    y el h3 pasa a h2 (sin saltos) -->
    <!-- 6. texto del enlace descriptivo, no "aquí" -->
    <a href="blog.html">Ir al blog</a>
  </main>
</body>
</html>
```

**Explicación:** los `<div>` sin significado se sustituyen por `<header>`, `<nav>` y `<main>` (landmarks); los `<span onclick>` no se alcanzan con `Tab` ni con `Enter`, así que pasan a ser `<a>` nativos; la imagen necesita `alt`; la jerarquía de encabezados estaba invertida (`<h3>` antes que `<h1>`); el texto "aquí" no dice a dónde lleva; y faltaba `lang="es"` para que el lector de pantalla pronuncie bien.

---

**Ejercicio 2 — Etiquetar correctamente un formulario.**
Convierte este formulario de registro en uno **accesible**. Debe tener nombre, email y un campo de contraseña con texto de ayuda.

```html
<form>
  Nombre <input type="text"><br>
  Email <input type="text" placeholder="Email"><br>
  Contraseña <input type="password"><br>
  <div onclick="enviar()">Registrarse</div>
</form>
```

**Solución:**

```html
<form>
  <!-- label asociado con for + id; name para enviar el dato -->
  <p>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" required>
  </p>

  <!-- type="email" da validación y teclado adecuado; sin depender del placeholder -->
  <p>
    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email" required>
  </p>

  <!-- aria-describedby enlaza el campo con su texto de ayuda -->
  <p>
    <label for="pass">Contraseña</label>
    <input type="password" id="pass" name="pass"
           aria-describedby="ayuda-pass" required>
    <small id="ayuda-pass">Mínimo 8 caracteres, una mayúscula y un número.</small>
  </p>

  <!-- <button>, no <div>: enfocable con Tab y se activa con Enter -->
  <button type="submit">Registrarse</button>
</form>
```

**Explicación:** cada campo gana un `<label>` asociado por `for`/`id`, de modo que el lector de pantalla anuncia qué se pide y el área de clic crece. El `placeholder` deja de usarse como etiqueta (desaparece al escribir). El texto de ayuda de la contraseña se asocia con `aria-describedby` para que el lector lo lea junto al campo. Y el `<div onclick>` pasa a `<button type="submit">`, operable con teclado.

---

**Ejercicio 3 — Añadir ARIA a un componente.**
Tienes un botón de "cerrar" que solo es un icono y una franja de notificación. Hazlos accesibles con ARIA.

```html
<div class="cerrar" onclick="cerrar()">✖</div>
<div class="aviso">Cambios guardados correctamente</div>
```

**Solución:**

```html
<!-- Botón de icono: usamos <button> nativo + aria-label porque NO hay texto visible.
     aria-hidden="true" en el icono para que el lector no intente leer "✖". -->
<button type="button" class="cerrar" aria-label="Cerrar" onclick="cerrar()">
  <span aria-hidden="true">✖</span>
</button>

<!-- Notificación: role="status" hace que el lector ANUNCIE el mensaje
     en cuanto aparece, sin interrumpir bruscamente al usuario.
     (Para errores graves se usaría role="alert".) -->
<div class="aviso" role="status">Cambios guardados correctamente</div>
```

**Explicación:** un control sin texto visible necesita `aria-label` para tener "nombre accesible"; sin él, el lector solo diría "botón". El icono `✖` se marca `aria-hidden="true"` porque es decorativo: el nombre ya lo da el `aria-label`. La notificación recibe `role="status"` (una *live region*): cuando su contenido cambia, el lector lo lee automáticamente, así una persona ciega se entera de que la acción tuvo éxito.

---

**Ejercicio 4 — Análisis de usabilidad (teórico razonado).**
Una app de banca online muestra, cuando un usuario mayor se equivoca al introducir el IBAN, el mensaje: **"Error 27"**. La interfaz, además, cambia de aspecto y de posición de los botones cada dos semanas. Analiza qué principios de usabilidad se incumplen y propón mejoras.

**Solución:**

| Problema | Principio incumplido | Mejora propuesta |
|----------|---------------------|------------------|
| "Error 27" no significa nada para el usuario | **Retroalimentación** clara / mensajes de error comprensibles | Mensaje en lenguaje natural: *"El IBAN debe tener 24 caracteres y empezar por ES. Revísalo."* |
| Los botones cambian de sitio cada dos semanas | **Consistencia** y experiencia **familiar y predecible** | Mantener la interfaz estable; introducir cambios poco a poco y avisando |
| No se previene el error de entrada | **Prevención de errores** | Validar el formato del IBAN mientras se escribe e indicar visualmente el campo correcto/incorrecto |

**Explicación:** este caso ilustra la diferencia entre accesibilidad y **usabilidad**: el usuario mayor no tiene ninguna discapacidad, pero la interfaz le resulta difícil. Las **heurísticas de Nielsen** afectadas son la **consistencia** (la interfaz debe ser predecible, no cambiar constantemente), la **visibilidad del estado / retroalimentación** (el sistema debe informar de lo que ocurre **en un lenguaje que el usuario entienda**, no códigos internos) y la **prevención de errores**. La solución pasa por aplicar **diseño centrado en el usuario**: probar la app con usuarios reales —incluidas personas mayores— e iterar a partir de su retroalimentación, como hizo Airbnb con su proceso de reserva.

---

**Ejercicio 5 — Pregunta teórica tipo test razonada.**
Explica la diferencia entre los niveles de conformidad **A**, **AA** y **AAA** de las WCAG y di cuál es obligatorio en una web de un ayuntamiento.

**Solución:** las WCAG definen tres niveles. El **nivel A** es el básico: cubre lo imprescindible, como el **texto alternativo** en imágenes y la **navegación por teclado** sencilla. El **nivel AA** incluye todo lo de A y añade requisitos como **subtítulos** en vídeos, **evitar parpadeos** y compatibilidad con navegadores de asistencia; es el nivel que se considera estándar. El **nivel AAA** es el máximo: pretende cubrir las necesidades de **cualquier** usuario e incluye, por ejemplo, **lengua de signos** en los vídeos. En las webs de **administraciones públicas** (ayuntamientos, ministerios) la accesibilidad **es obligatoria por ley**, y el nivel exigido es el **AA**, porque cualquier ciudadano —con o sin discapacidad— debe poder hacer sus gestiones.

### Visuales a revisar

- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 00:30] — Definición de sitio web accesible: tipos de discapacidad (visual, auditiva, motora, cognitiva) y la idea de Internet "para todo el mundo" (Tim Berners-Lee).
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 06:00] — Diapositiva con los principios del W3C: contenido **Perceptible, Operable, Comprensible y Robusto** (POUR).
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 12:00] — Lista de recomendaciones para hacer la web accesible: estructura clara, texto alternativo, contraste, etiquetado correcto, probar con tecnologías de asistencia.
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 20:00] — Ejemplos de adaptación por tipo de discapacidad y mención a inclusión y equidad.
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 30:00] — Ejemplo de web sencilla y accesible: logo, título, menú claro, texto de tamaño adecuado, enlace a la noticia.
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 42:00] — Recorrido por elementos HTML: tamaño de letra, texto justificado, contraste, `alt`, enlaces descriptivos, ventanas emergentes, multimedia con subtítulos.
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 55:00] — Los **3 niveles de conformidad** A / AA / AAA y la obligatoriedad en webs públicas.
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 1:05:00] — Concepto de **usabilidad** vs accesibilidad: ejemplo de los cajeros y apps de banca para personas mayores; principios de navegación, consistencia y retroalimentación.
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 1:18:00] — Ejemplos de usabilidad y UX: Airbnb, Google Maps, Slack, Google, Amazon, Wikipedia.
- [📺 14.-Accesiblidad_Usabilidad.md, aprox. 1:28:00] — Herramientas de verificación: validadores de accesibilidad (AChecker, TAW), Lighthouse, y herramientas de color (UI Colors, Coolors, Tailwind).

### Cubierto en
- Clase 14 (Accesibilidad y Usabilidad) — `14.-Accesiblidad_Usabilidad.md`

### Pitfalls y buenas prácticas

**Errores comunes (pitfalls):**

- **Olvidar el atributo `alt`** en las imágenes. Es el error más típico —el propio profesor lo admite—. Sin `alt`, una persona ciega no sabe qué hay en la imagen. 🔥
- **Poner `alt=""` en imágenes con contenido** o, al revés, **describir imágenes decorativas**. El `alt` vacío es solo para adornos; las imágenes informativas necesitan descripción.
- **Usar el `placeholder` como si fuera un `<label>`**. El placeholder desaparece al escribir y no es fiable con lectores de pantalla. Siempre `<label>` asociado por `for`/`id`.
- **Maquetar con `<div>` para todo**. Pierdes los landmarks y la semántica. Usa `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.
- **Usar `<div>` o `<span>` con `onclick` como botones**. No se alcanzan con `Tab` ni con `Enter`. Usa `<button>` o `<a>` nativos.
- **Romper la jerarquía de encabezados** (saltar de `<h1>` a `<h4>`, o elegir el nivel por el tamaño visual). El tamaño se controla con CSS, no con el nivel del encabezado.
- **Quitar el `outline` del foco** (`:focus { outline: none }`). Quien navega con teclado deja de ver dónde está.
- **`tabindex` con números positivos**. Rompen el orden lógico de tabulación.
- **Enlaces con texto "aquí" o "enlace"**. No dicen a dónde llevan; los lectores listan los enlaces sueltos.
- **Abusar de ARIA**. ARIA mal puesto es peor que no poner nada. Primero HTML semántico; ARIA solo cuando no hay alternativa.
- **Mensajes de error tipo "Error 27"**. Le sirven al programador, no al usuario.
- **Cambiar la interfaz constantemente**. Rompe la consistencia y la previsibilidad.
- **Contraste insuficiente** entre texto y fondo, o **abrir ventanas sin avisar**.

**Buenas prácticas:**

- **`alt` descriptivo** en imágenes con contenido y **`alt=""`** en las decorativas.
- **HTML semántico siempre** como base: te da landmarks y estructura gratis.
- **Jerarquía de encabezados lógica**: un `<h1>` por página, sin saltos.
- **Todo campo de formulario con su `<label>`** asociado por `for`/`id`; ayuda y errores con `aria-describedby`.
- **Elementos nativos interactivos** (`<a>`, `<button>`, `<input>`): ya son accesibles por teclado.
- **Foco visible**: personaliza el `:focus` pero que se vea.
- **ARIA con moderación**: `aria-label` para iconos sin texto, `aria-hidden="true"` para decorativos, `role` solo si la etiqueta semántica no existe.
- **Subtítulos** en vídeos (`<track>`) y **transcripción** en audios.
- **`lang="es"`** en `<html>` y **`<meta viewport>`** para responsive y zoom.
- **Contraste adecuado**: apóyate en herramientas de color.
- **Mensajes de error claros** en lenguaje natural.
- **Consistencia**: interfaz predecible, cambios graduales y avisados.
- **Probar de verdad**: validadores del W3C, **Lighthouse**, lectores de pantalla y varios navegadores/dispositivos.
- **Apuntar al nivel AA** de las WCAG como objetivo razonable (y obligatorio en webs públicas). 🔥

---

## Glosario

> Ordenado alfabéticamente. Cada término técnico va con su sintaxis cuando aplica.

| Término | Definición |
|---|---|
| **Accesibilidad** | Diseñar webs que pueda usar cualquier persona, incluidas las que tienen discapacidad. La regulan las pautas **WCAG** del W3C. |
| **`alt`** | Atributo de `<img>` con el texto alternativo que se lee si la imagen no carga o la usa un lector de pantalla: `<img src="x.jpg" alt="Descripción">`. |
| **ARIA** | Conjunto de atributos (`role`, `aria-label`, `aria-hidden`...) que añaden semántica de accesibilidad cuando el HTML nativo no basta. |
| **`background`** | Familia de propiedades CSS para el fondo: `background-color`, `background-image: url(...)`, `background-size`, `background-position`, `background-repeat`. |
| **Bootstrap** | Framework CSS con clases predefinidas y un sistema de rejilla de 12 columnas. Se incluye por CDN con `<link>` y `<script>`. |
| **`box-sizing`** | Propiedad CSS que decide si `width`/`height` incluyen o no el padding y el borde. `box-sizing: border-box;` los incluye (lo recomendado). |
| **Breakpoint** | Anchura de pantalla a partir de la cual una media query cambia el diseño. Bootstrap usa `sm/md/lg/xl/xxl`. |
| **Cascada** | El mecanismo por el que CSS decide qué regla gana cuando varias afectan al mismo elemento (según origen, especificidad y orden). |
| **`class`** | Atributo HTML para agrupar elementos y estilarlos en CSS con el selector `.nombre`. Se puede repetir y combinar. |
| **Container (Bootstrap)** | Clase `container` (ancho fijo por breakpoint) o `container-fluid` (100% de ancho) que envuelve la rejilla. |
| **CSS** | *Cascading Style Sheets*. Lenguaje de presentación: define cómo se ve el HTML. Regla: `selector { propiedad: valor; }`. |
| **DOCTYPE** | Primera línea de un documento HTML5: `<!DOCTYPE html>`. Indica al navegador la versión de HTML. |
| **Especificidad** | "Peso" de un selector para resolver conflictos: id (`#`) > clase (`.`) > etiqueta. El estilo inline gana a casi todo. |
| **Etiqueta semántica** | Etiqueta HTML5 que describe el *significado* del contenido: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. |
| **`<figure>` / `<figcaption>`** | Agrupan una imagen (u otro contenido) con su pie de foto: `<figure><img...><figcaption>Pie</figcaption></figure>`. |
| **Flexbox** | Modelo de CSS para distribuir elementos en una dimensión. Se activa con `display: flex;` en el contenedor. |
| **`flex-direction`** | Propiedad del contenedor flex: dirección del eje principal — `row` (defecto), `row-reverse`, `column`, `column-reverse`. |
| **`float`** | Propiedad CSS antigua para flotar un elemento a izquierda/derecha. Hoy se prefiere Flexbox o Grid. |
| **`@font-face` / `font-family`** | `font-family` elige la tipografía; `@font-face` permite cargar una fuente personalizada. |
| **`<form>`** | Etiqueta que agrupa campos de entrada. Atributos: `action` (a dónde se envían los datos) y `method` (GET/POST). |
| **`gap`** | Propiedad que define el espacio entre elementos en Flexbox y Grid: `gap: 20px;`. |
| **Grid (CSS Grid)** | Modelo de CSS para layouts en dos dimensiones (filas y columnas). Se activa con `display: grid;`. |
| **HTML** | *HyperText Markup Language*. Lenguaje de marcado que define la **estructura** y el contenido de una página. |
| **`id`** | Atributo HTML identificador **único** en la página. Se estila en CSS con `#nombre`. |
| **`<iframe>`** | Etiqueta que incrusta otra página web dentro de la actual (YouTube, mapas...): `<iframe src="..."></iframe>`. |
| **`<img>`** | Etiqueta de imagen. Atributos esenciales: `src` (ruta) y `alt` (texto alternativo). Es una etiqueta vacía (sin cierre). |
| **`justify-content`** | Propiedad del contenedor flex: alinea los elementos en el **eje principal** — `flex-start`, `center`, `space-between`, `space-around`, `space-evenly`. |
| **`align-items`** | Propiedad del contenedor flex: alinea los elementos en el **eje secundario** — `stretch`, `center`, `flex-start`, `flex-end`, `baseline`. |
| **`<label>`** | Etiqueta de texto asociada a un campo de formulario. Asociar con `for="idDelInput"` mejora la accesibilidad. |
| **`<link>`** | Etiqueta del `<head>` que enlaza un recurso externo, normalmente la hoja de estilos: `<link rel="stylesheet" href="estilo.css">`. |
| **Media query** | Regla CSS que aplica estilos según las características del dispositivo: `@media (max-width: 768px) { ... }`. Base del diseño responsive. |
| **`<meta>`** | Etiqueta del `<head>` con metadatos. Clave: `<meta charset="UTF-8">` y `<meta name="viewport" content="width=device-width, initial-scale=1">`. |
| **Modelo de caja** | Toda etiqueta es una caja con 4 capas: `content`, `padding` (relleno interior), `border` (borde), `margin` (margen exterior). |
| **Mobile-first** | Estrategia de diseño: se diseña primero para móvil y luego se amplía a pantallas grandes con media queries. |
| **`position`** | Propiedad CSS de posicionamiento: `static` (defecto), `relative`, `absolute`, `fixed`, `sticky`. Se combina con `top/right/bottom/left`. |
| **Pseudoclase** | Selector que apunta a un estado de un elemento: `:hover`, `:focus`, `:active`, `:checked`, `:first-child`. |
| **Pseudoelemento** | Selector que apunta a una parte de un elemento: `::before`, `::after`, `::first-line`. |
| **Responsive** | Diseño que se adapta al tamaño de pantalla del dispositivo. Herramientas: media queries, unidades relativas, `<meta viewport>`. |
| **Row / Col (Bootstrap)** | Dentro de un `container`, `row` crea una fila y `col` / `col-md-*` las columnas (12 por fila). |
| **Selector** | La parte de una regla CSS que indica a qué elementos se aplica: de etiqueta (`p`), de clase (`.x`), de id (`#x`), descendiente (`div p`), etc. |
| **SVG** | *Scalable Vector Graphics*. Imágenes vectoriales definidas con código XML: `<svg>` con formas `<rect>`, `<circle>`, `<line>`, `<path>`. |
| **`<source>`** | Etiqueta dentro de `<audio>`, `<video>` o `<picture>` que ofrece varios formatos del recurso para que el navegador elija. |
| **`<table>`** | Tabla de datos. Estructura: `<table>` > `<thead>`/`<tbody>` > `<tr>` (fila) > `<th>` (cabecera) / `<td>` (celda). |
| **`tabindex`** | Atributo HTML que controla el orden de navegación por teclado de un elemento. |
| **`transform`** | Propiedad CSS que transforma un elemento: `translate()`, `rotate()`, `scale()`, `skew()`. |
| **`transition`** | Propiedad CSS que anima el cambio de un valor: `transition: all 0.3s ease;`. |
| **Unidades CSS** | Absolutas: `px`. Relativas: `%`, `em` (respecto al padre), `rem` (respecto a la raíz), `vw`/`vh` (respecto al viewport). |
| **Usabilidad** | Lo fácil, eficiente y satisfactorio que resulta usar una interfaz. Distinta de la accesibilidad (aunque relacionada). |
| **`<video>` / `<audio>`** | Etiquetas para incrustar vídeo/audio. Atributos: `controls`, `autoplay`, `loop`, `muted`, `poster` (vídeo), más `<source>`. |
| **Viewport** | El área visible de la página en el dispositivo. Se configura con `<meta name="viewport">` para que el responsive funcione. |
| **W3C** | *World Wide Web Consortium*. Organismo que define los estándares de la web (HTML, CSS, WCAG...). |
| **WCAG** | *Web Content Accessibility Guidelines*. Las pautas de accesibilidad del W3C. Niveles de conformidad: A, AA, AAA. |
| **`z-index`** | Propiedad CSS que controla el orden de apilamiento (qué elemento queda "encima") de elementos posicionados. |

---

## Cheatsheet

> Repaso ultracondensado para la noche antes del examen. Este módulo es código: el cheatsheet es **referencia de sintaxis**.
>
> 🔥 **Recuerda:** el examen es **práctico** (maquetación). **Flexbox cayó el año pasado.** El profe dijo que el Tema 4 "Diseño de Interfaces" (principios, wireframes, Figma) **no entra en el examen**; lo demás (HTML, CSS, Flexbox, Bootstrap, multimedia) sí.

### Estructura mínima de un documento HTML5
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Título de la página</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <!-- contenido -->
</body>
</html>
```

### Las 3 formas de aplicar CSS
```html
<p style="color: red;">Inline (la menos recomendada)</p>     <!-- 1. inline -->
<style> p { color: red; } </style>                           <!-- 2. interno, en el <head> -->
<link rel="stylesheet" href="estilo.css">                    <!-- 3. externo (recomendado) -->
```

### HTML — etiquetas esenciales
```html
<h1>...</h1> ... <h6>...</h6>          <!-- encabezados -->
<p>párrafo</p>  <br>  <hr>
<strong>negrita</strong>  <em>cursiva</em>
<ul><li>...</li></ul>                  <!-- lista desordenada -->
<ol><li>...</li></ol>                  <!-- lista ordenada -->
<a href="https://...">enlace</a>
<img src="foto.jpg" alt="descripción">
<!-- Etiquetas semánticas -->
<header> <nav> <main> <section> <article> <aside> <footer> <figure>
<div>  <span>                          <!-- contenedores sin semántica -->
<!-- Tabla -->
<table>
  <thead><tr><th>Cab</th></tr></thead>
  <tbody><tr><td>Dato</td></tr></tbody>
</table>
```

### HTML — formularios
```html
<form action="procesar.php" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
  <input type="email"    name="correo">
  <input type="password" name="pass">
  <input type="number"   name="edad" min="0" max="120">
  <input type="date"     name="fecha">
  <input type="checkbox" name="acepto"> <input type="radio" name="sexo">
  <input type="file"     name="foto">
  <textarea name="comentario"></textarea>
  <select name="curso">
    <option value="daw">DAW</option>
  </select>
  <button type="submit">Enviar</button>
</form>
```

### CSS — selectores
```css
p { }              /* de etiqueta */
.clase { }         /* de clase */
#id { }            /* de id */
* { }              /* universal */
div p { }          /* descendiente */
div > p { }        /* hijo directo */
h1, h2, p { }      /* agrupado */
a:hover { }        /* pseudoclase */
p::first-line { }  /* pseudoelemento */
input[type="text"] { }  /* de atributo */
```

### CSS — modelo de caja
```css
.caja {
  width: 300px;
  padding: 20px;          /* relleno interior */
  border: 2px solid #333; /* borde */
  margin: 10px;           /* margen exterior */
  box-sizing: border-box; /* width incluye padding y borde (recomendado) */
}
* { box-sizing: border-box; margin: 0; padding: 0; }  /* reset habitual */
```

### CSS — propiedades más usadas
```css
.elemento {
  color: #333;                       /* color de texto */
  background-color: rgba(0,0,0,0.5);  /* fondo */
  font-family: Arial, sans-serif;
  font-size: 16px;  font-weight: bold;
  text-align: center;  line-height: 1.5;
  display: block;        /* block | inline | inline-block | flex | grid | none */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
```

### CSS — Flexbox 🔥
```css
.contenedor {
  display: flex;
  flex-direction: row;            /* row | column | row-reverse | column-reverse */
  justify-content: center;        /* flex-start | center | space-between | space-around | space-evenly */
  align-items: center;            /* stretch | center | flex-start | flex-end | baseline */
  flex-wrap: wrap;                /* nowrap | wrap */
  gap: 20px;
}
.hijo {
  flex-grow: 1;     /* cuánto crece */
  flex-shrink: 1;   /* cuánto encoge */
  flex-basis: 200px;/* tamaño base */
  flex: 1;          /* atajo de grow/shrink/basis */
  align-self: flex-end;  /* sobrescribe align-items para este hijo */
  order: -1;        /* cambia el orden visual */
}
/* Centrar cualquier cosa: */
.centrado { display: flex; justify-content: center; align-items: center; }
```

### CSS — posicionamiento
```css
.relativo { position: relative; top: 10px; left: 20px; }
.absoluto { position: absolute; top: 0; right: 0; }   /* respecto al ancestro posicionado */
.fijo     { position: fixed; bottom: 0; }             /* respecto a la ventana */
.pegajoso { position: sticky; top: 0; }
.encima   { z-index: 10; }
```

### CSS — responsive
```css
/* media query: estilos para pantallas estrechas */
@media (max-width: 768px) {
  .contenedor { flex-direction: column; }
}
/* unidades relativas */
.responsive { width: 90%; font-size: 1.2rem; padding: 2vw; }
img { max-width: 100%; height: auto; }   /* imágenes que no se desbordan */
```

### CSS — transiciones y animaciones
```css
.boton { transition: background-color 0.3s ease; }
.boton:hover { background-color: tomato; }
.girado { transform: rotate(45deg) scale(1.2); }
@keyframes aparecer {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.animado { animation: aparecer 1s ease-in-out; }
```

### Bootstrap — esquema rápido
```html
<!-- CDN en el <head> y antes de </body> -->
<link href=".../bootstrap.min.css" rel="stylesheet">
<script src=".../bootstrap.bundle.min.js"></script>

<div class="container">
  <div class="row">
    <div class="col-md-6">Media fila en pantallas medianas+</div>
    <div class="col-md-6">La otra media</div>
  </div>
</div>
<!-- Utilidades: m-3 p-2 text-center bg-primary text-white d-none d-md-block -->
<!-- Componentes: btn btn-primary | card | navbar | alert alert-danger | form-control -->
```

### Multimedia
```html
<picture>
  <source srcset="foto.webp" type="image/webp">
  <img src="foto.jpg" alt="descripción">
</picture>

<video controls width="600" poster="portada.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Tu navegador no soporta vídeo.
</video>

<audio controls>
  <source src="cancion.mp3" type="audio/mpeg">
</audio>

<!-- SVG inline -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red" stroke="black" stroke-width="2"/>
  <rect x="10" y="10" width="50" height="30" fill="blue"/>
</svg>

<iframe src="https://www.youtube.com/embed/ID" width="560" height="315"></iframe>
```

### Accesibilidad — lo mínimo
```html
<html lang="es">                               <!-- idioma de la página -->
<img src="x.jpg" alt="texto significativo">   <!-- alt siempre -->
<label for="email">Email:</label>
<input id="email" type="email">                <!-- label asociado al input -->
<button aria-label="Cerrar">X</button>          <!-- ARIA cuando el texto no basta -->
<!-- Jerarquía correcta de encabezados: un solo h1, sin saltarse niveles -->
```

### 🔥 Examen
- **Práctico**: maquetación con HTML + CSS (y Bootstrap). Se entrega comprimido.
- **Test** de ~15 preguntas teóricas + ejercicios de desarrollo (eliges 2 de 3).
- **Flexbox cayó el año pasado.** Domínalo.
- El **Tema 4 "Diseño de Interfaces"** (principios, wireframes, Figma) **no entra** en el examen — el resto sí.
- IAs prohibidas en el examen. Se da un fichero de ayuda con HTML ya hecho.

---

## Preguntas de autoevaluación

<details><summary>1. ¿Cuál es la diferencia entre HTML y CSS? ¿Y las 3 formas de aplicar CSS a una página?</summary>

**HTML** define la **estructura y el contenido** (qué hay: títulos, párrafos, imágenes). **CSS** define la **presentación** (cómo se ve: colores, tamaños, posición). Es la separación entre contenido y diseño.

Las 3 formas de aplicar CSS:
```html
<!-- 1. Inline: en el atributo style del elemento (poco recomendable) -->
<p style="color: red;">Texto</p>

<!-- 2. Interno: en una etiqueta <style> dentro del <head> -->
<style> p { color: red; } </style>

<!-- 3. Externo: en un .css aparte enlazado con <link> (RECOMENDADO) -->
<link rel="stylesheet" href="estilo.css">
```
El externo es el recomendado: separa código, se reutiliza en varias páginas y se cachea.
</details>

<details><summary>2. Escribe la estructura mínima de un documento HTML5 y explica para qué sirve cada parte.</summary>

```html
<!DOCTYPE html>                <!-- declara que es HTML5 -->
<html lang="es">               <!-- raíz del documento; lang ayuda a accesibilidad y SEO -->
<head>                         <!-- metadatos: NO se ve en la página -->
  <meta charset="UTF-8">       <!-- codificación de caracteres (tildes, ñ) -->
  <meta name="viewport" content="width=device-width, initial-scale=1">  <!-- responsive -->
  <title>Mi página</title>     <!-- texto de la pestaña del navegador -->
  <link rel="stylesheet" href="estilo.css">  <!-- hoja de estilos -->
</head>
<body>                         <!-- todo el contenido visible va aquí -->
  <h1>Hola</h1>
</body>
</html>
```
🔥 El `<meta viewport>` es imprescindible para que el diseño responsive funcione en móvil.
</details>

<details><summary>3. ¿Qué son las etiquetas semánticas de HTML5? Nombra al menos 6 y di por qué se prefieren a usar <code>&lt;div&gt;</code> para todo.</summary>

Son etiquetas que describen el **significado** del contenido que envuelven, no solo lo agrupan. Las principales: `<header>` (cabecera), `<nav>` (navegación), `<main>` (contenido principal), `<section>` (sección temática), `<article>` (contenido autónomo), `<aside>` (contenido lateral), `<footer>` (pie).

Se prefieren a `<div>` porque: (1) **accesibilidad** — los lectores de pantalla las usan para navegar; (2) **SEO** — los buscadores entienden mejor la página; (3) **mantenibilidad** — el código se lee solo. Un `<div class="header">` y un `<header>` se ven igual, pero el segundo *significa* algo.
</details>

<details><summary>4. Explica el modelo de caja de CSS. Si una caja tiene <code>width: 200px; padding: 20px; border: 5px solid</code>, ¿cuánto ocupa de ancho real? ¿Y con <code>box-sizing: border-box</code>?</summary>

El **modelo de caja** dice que toda etiqueta es una caja con 4 capas, de dentro a fuera: **content** (el contenido), **padding** (relleno interior), **border** (borde) y **margin** (margen exterior).

Por defecto (`box-sizing: content-box`), `width` solo mide el **contenido**. Así que el ancho real sería:
`200 (content) + 20·2 (padding) + 5·2 (border) = 250px`.

Con `box-sizing: border-box`, `width` incluye padding y borde, así que el ancho real es **exactamente 200px** (el contenido se encoge para que quepa todo). Por eso casi siempre se pone `* { box-sizing: border-box; }` al principio del CSS: es mucho más predecible.
</details>

<details><summary>5. ¿Qué es la especificidad en CSS? Ordena de más a menos prioridad: selector de id, inline, selector de clase, selector de etiqueta.</summary>

La **especificidad** es el "peso" que CSS asigna a cada selector para decidir cuál gana cuando varias reglas afectan al mismo elemento. De **más a menos** prioridad:

1. **Estilo inline** (`style="..."` en el HTML) — el más fuerte.
2. **Selector de id** (`#cabecera`).
3. **Selector de clase** (`.destacado`), de atributo y pseudoclase.
4. **Selector de etiqueta** (`p`, `div`) — el más débil.

A igualdad de especificidad, gana la regla que aparece **más abajo** en el CSS (la cascada). `!important` lo salta todo, pero es mala práctica abusar de él.
</details>

<details><summary>6. Tienes 3 cajas dentro de un <code>&lt;div&gt;</code> y quieres ponerlas en fila, separadas y centradas verticalmente. Escribe el CSS con Flexbox.</summary>

```css
.contenedor {
  display: flex;                   /* activa Flexbox */
  flex-direction: row;             /* en fila (es el valor por defecto) */
  justify-content: space-between;  /* separadas en el eje principal (horizontal) */
  align-items: center;             /* centradas en el eje secundario (vertical) */
  gap: 20px;                       /* separación mínima garantizada */
}
```

```html
<div class="contenedor">
  <div class="caja">1</div>
  <div class="caja">2</div>
  <div class="caja">3</div>
</div>
```

Claves: `justify-content` actúa en el **eje principal** (horizontal si `flex-direction: row`), `align-items` en el **eje secundario** (vertical). Para centrar algo perfectamente: `justify-content: center` + `align-items: center`.
</details>

<details><summary>7. ¿Cuál es la diferencia entre <code>position: relative</code>, <code>absolute</code> y <code>fixed</code>?</summary>

- **`relative`**: el elemento se desplaza respecto a **su posición original**, pero deja su hueco. Se usa mucho como "ancla" para hijos `absolute`.
- **`absolute`**: el elemento se saca del flujo (no deja hueco) y se posiciona respecto al **ancestro posicionado más cercano** (el que tenga `position` distinto de `static`); si no hay ninguno, respecto a la página.
- **`fixed`**: se saca del flujo y se posiciona respecto a la **ventana del navegador**; se queda fijo aunque hagas scroll (típico de cabeceras o botones flotantes).

Truco habitual: contenedor con `position: relative` + hijo con `position: absolute` para colocar el hijo dentro del contenedor con `top/right/bottom/left`.
</details>

<details><summary>8. Escribe una media query que, en pantallas de 768px o menos, cambie un menú de fila a columna. Explica el <code>&lt;meta viewport&gt;</code>.</summary>

```css
.menu {
  display: flex;
  flex-direction: row;       /* en escritorio: en fila */
}

@media (max-width: 768px) {
  .menu {
    flex-direction: column;  /* en móvil/tablet: en columna */
  }
}
```

El `<meta name="viewport" content="width=device-width, initial-scale=1">` (en el `<head>`) le dice al navegador móvil que use el **ancho real del dispositivo** y no haga zoom-out para fingir una pantalla de escritorio. **Sin este meta, las media queries no funcionan en móvil**: la página se vería diminuta. Es el primer requisito del diseño responsive.
</details>

<details><summary>9. ¿Qué es el sistema de rejilla de Bootstrap? Escribe un layout de 3 columnas iguales que se apilen en móvil.</summary>

Bootstrap divide cada fila en **12 columnas**. Pones un `container`, dentro un `row`, y dentro las `col-*`. Los números de las `col` deben sumar 12 por fila.

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Columna 1</div>
    <div class="col-md-4">Columna 2</div>
    <div class="col-md-4">Columna 3</div>
  </div>
</div>
```

`col-md-4` significa "ocupa 4 de 12 columnas **a partir** del breakpoint `md` (≈768px)". Por debajo de ese ancho, cada columna pasa a ocupar el 100% → se **apilan** automáticamente. Eso es el comportamiento mobile-first de Bootstrap: sin `md`, en móvil se apilan solas.
</details>

<details><summary>10. ¿Qué diferencia hay entre una imagen de mapa de bits (JPG, PNG) y una vectorial (SVG)? ¿Cuándo usar cada una?</summary>

- **Mapa de bits (raster)**: la imagen es una rejilla de píxeles (JPG, PNG, GIF, WebP). Al **ampliarla se pixela**. El peso depende de la resolución.
- **Vectorial (SVG)**: la imagen se define con fórmulas matemáticas (puntos, líneas, curvas). **Escala a cualquier tamaño sin perder calidad** y suele pesar poco.

Cuándo usar cada una:
- **JPG**: fotografías (muchos colores, sin transparencia).
- **PNG**: imágenes con transparencia o detalles nítidos (logos, capturas).
- **WebP**: alternativa moderna a JPG/PNG, pesa menos.
- **SVG**: logos, iconos, ilustraciones planas, gráficos — todo lo que deba escalar nítido.
</details>

<details><summary>11. Escribe el código para incrustar un vídeo con controles que ofrezca dos formatos (MP4 y WebM) y una imagen de portada.</summary>

```html
<video controls width="640" poster="portada.jpg">
  <source src="video.mp4"  type="video/mp4">
  <source src="video.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de vídeo.
</video>
```

- `controls`: muestra los botones de play/pausa/volumen.
- `poster`: imagen que se ve antes de darle al play.
- Los `<source>` se ofrecen **en orden de preferencia**: el navegador usa el **primero que sepa reproducir**. Por eso se ofrecen varios formatos: la compatibilidad varía entre navegadores.
- El texto suelto dentro del `<video>` es el **mensaje alternativo** si el navegador no soporta la etiqueta.
</details>

<details><summary>12. Dibuja con SVG inline un círculo rojo de radio 40 con borde negro, dentro de un lienzo de 100x100. Explica los atributos.</summary>

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red" stroke="black" stroke-width="3"/>
</svg>
```

- El `<svg>` es el "lienzo": `width` y `height` son sus dimensiones.
- `<circle>` dibuja un círculo:
  - `cx` / `cy`: coordenadas del **centro** (50,50 = el centro de un lienzo de 100x100).
  - `r`: el **radio** (40).
  - `fill`: color de **relleno** (rojo).
  - `stroke`: color del **borde** (negro).
  - `stroke-width`: grosor del borde.

Otras formas SVG: `<rect>` (rectángulo), `<line>` (línea), `<polygon>` (polígono), `<path>` (trazado libre), `<text>` (texto).
</details>

<details><summary>13. ¿Por qué el atributo <code>alt</code> de las imágenes es importante para la accesibilidad? ¿Y qué hace <code>&lt;label for="..."&gt;</code>?</summary>

El **`alt`** es el texto alternativo de una imagen. Es importante porque: (1) los **lectores de pantalla** lo leen en voz alta a las personas ciegas — sin `alt`, la imagen "no existe" para ellas; (2) se muestra si la imagen **no carga**; (3) ayuda al SEO. El `alt` debe **describir el contenido** de la imagen (`alt="Gráfico de ventas de 2025"`), no decir "imagen".

El **`<label for="idDelInput">`** asocia una etiqueta de texto a un campo de formulario. Beneficios: (1) el lector de pantalla anuncia qué campo es al enfocarlo; (2) al **hacer clic en el texto del label**, se activa/enfoca el campo (más fácil de pulsar, sobre todo en checkboxes y radios). El `for` debe coincidir con el `id` del input.
</details>

<details><summary>14. Te dan esta tarjeta y debes maquetarla: imagen arriba, título y texto debajo, con borde redondeado y sombra. Escribe el HTML + CSS.</summary>

```html
<div class="tarjeta">
  <img src="producto.jpg" alt="Auriculares inalámbricos">
  <div class="contenido">
    <h3>Auriculares Pro</h3>
    <p>Sonido envolvente y 30 h de batería.</p>
  </div>
</div>
```

```css
.tarjeta {
  width: 280px;
  border-radius: 12px;                       /* esquinas redondeadas */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);   /* sombra suave */
  overflow: hidden;                          /* recorta la imagen a las esquinas redondeadas */
  font-family: Arial, sans-serif;
}
.tarjeta img {
  width: 100%;        /* la imagen ocupa todo el ancho de la tarjeta */
  display: block;     /* elimina el hueco fantasma debajo de la imagen */
}
.tarjeta .contenido {
  padding: 16px;      /* aire alrededor del texto */
}
.tarjeta h3 { margin: 0 0 8px; }
.tarjeta p  { margin: 0; color: #555; }
```

Claves de examen: `box-shadow: x y desenfoque color`, `border-radius` + `overflow: hidden` para que la imagen también se redondee, y `img { width: 100%; display: block; }` que es el patrón estándar de imagen en tarjeta.
</details>

<details><summary>15. ¿Qué es un acordeón/FAQ y cómo se hace SOLO con HTML, sin JavaScript?</summary>

Un acordeón es un bloque que se **despliega y pliega** al hacer clic (típico en FAQs). HTML5 lo trae nativo con `<details>` y `<summary>`:

```html
<details>
  <summary>¿Cuál es el horario?</summary>
  <p>De lunes a viernes, de 9:00 a 14:00.</p>
</details>

<details>
  <summary>¿Hay aparcamiento?</summary>
  <p>Sí, gratuito para clientes.</p>
</details>
```

`<summary>` es la parte siempre visible (la pregunta); el resto del `<details>` es el contenido que se muestra/oculta al hacer clic. **No necesita ni una línea de JavaScript ni de CSS** para funcionar. Se le puede dar estilo, e incluso abrir uno por defecto con `<details open>`.
</details>

<details><summary>16. ¿Qué diferencia hay entre accesibilidad y usabilidad? Pon un ejemplo de cada una.</summary>

- **Accesibilidad**: que la web la pueda usar **cualquier persona, incluidas las que tienen una discapacidad** (visual, auditiva, motora, cognitiva). Ejemplo: poner `alt` a las imágenes para que un ciego con lector de pantalla sepa qué muestran; asegurar contraste de color suficiente.
- **Usabilidad**: lo **fácil, eficiente y agradable** que resulta usar la interfaz para *cualquier* usuario. Ejemplo: que el botón de "comprar" sea visible y esté donde se espera; que un formulario no tenga 30 campos.

Están relacionadas (una web accesible suele ser más usable) pero no son lo mismo: una web puede ser muy usable para la mayoría y aun así inaccesible para una persona ciega.
</details>

<details><summary>17. Maqueta una barra de navegación horizontal con el logo a la izquierda y los enlaces a la derecha, usando Flexbox.</summary>

```html
<nav class="navbar">
  <div class="logo">MiWeb</div>
  <ul class="enlaces">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;  /* logo a un extremo, enlaces al otro */
  align-items: center;             /* todo centrado verticalmente */
  padding: 12px 24px;
  background-color: #222;
}
.logo { color: white; font-weight: bold; font-size: 1.4rem; }
.enlaces {
  display: flex;        /* los <li> también en fila */
  gap: 20px;
  list-style: none;     /* quita los puntos de la lista */
  margin: 0; padding: 0;
}
.enlaces a { color: white; text-decoration: none; }
.enlaces a:hover { color: tomato; }
```

Patrón clásico de examen: `justify-content: space-between` empuja el logo y el menú a los extremos; el `<ul>` se hace también `flex` para alinear sus `<li>` en fila.
</details>

<details><summary>18. ¿Qué es una pseudoclase? Escribe un botón que cambie de color al pasar el ratón y otro estilo al estar enfocado.</summary>

Una **pseudoclase** es un selector que apunta a un **estado** de un elemento (no a un elemento en sí). Se escribe con un solo `:`.

```css
.boton {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;   /* anima el cambio de color */
}
.boton:hover {                /* cuando el ratón está encima */
  background-color: #2980b9;
}
.boton:focus {                /* cuando está enfocado (clic o teclado) */
  outline: 3px solid #f1c40f;
}
.boton:active {               /* mientras se está pulsando */
  transform: scale(0.97);
}
```

Pseudoclases típicas: `:hover`, `:focus`, `:active`, `:checked`, `:first-child`, `:last-child`, `:nth-child()`. No confundir con los **pseudoelementos** (`::before`, `::after`), que llevan `::` y apuntan a una *parte* del elemento.
</details>

<details><summary>19. El examen es práctico. Te piden una página con cabecera, dos columnas (contenido + barra lateral) y pie, responsive. Plantea la estructura HTML + el CSS con Flexbox.</summary>

```html
<body>
  <header class="cabecera">Cabecera</header>
  <div class="cuerpo">
    <main class="contenido">Contenido principal</main>
    <aside class="lateral">Barra lateral</aside>
  </div>
  <footer class="pie">Pie de página</footer>
</body>
```

```css
* { box-sizing: border-box; margin: 0; padding: 0; }

.cabecera, .pie { background: #333; color: white; padding: 20px; text-align: center; }

.cuerpo {
  display: flex;
  gap: 20px;
  padding: 20px;
}
.contenido { flex: 3; background: #f4f4f4; padding: 20px; }  /* ocupa 3 partes */
.lateral   { flex: 1; background: #ddd;   padding: 20px; }   /* ocupa 1 parte */

/* Responsive: en móvil, las dos columnas se apilan */
@media (max-width: 768px) {
  .cuerpo { flex-direction: column; }
}
```

Es el layout más típico de examen: estructura semántica (`header`/`main`/`aside`/`footer`), el cuerpo en `display: flex` con `flex: 3` y `flex: 1` para el reparto, y una media query que cambia a `flex-direction: column` en móvil.
</details>

<details><summary>20. ¿Qué entra y qué no entra en el examen de este módulo, y qué estrategia de estudio seguirías?</summary>

Según lo que dijo el profe:
- **Examen práctico de maquetación**: HTML, CSS (incluido **Flexbox**, que cayó el año pasado) y **Bootstrap**. También multimedia (imágenes, SVG, audio/vídeo).
- **El Tema 4 "Diseño de Interfaces"** (principios de diseño, wireframes, Figma, UX/UI teórica) **NO entra** en el examen práctico — el profe lo dijo explícitamente.
- Hay un **test teórico** además de los ejercicios prácticos.

**Estrategia:** el grueso de la práctica con el teclado debe ir a **maquetar páginas completas con HTML + CSS + Flexbox + Bootstrap** (es lo que se evalúa). Repasa el simulacro a fondo. Para el test, estudia los conceptos del cheatsheet y la teoría de accesibilidad. No pierdas demasiado tiempo memorizando la teoría de diseño del Tema 4. ❓ Confirma este reparto con el profe, que puede variar entre convocatorias.
</details>

---

## Pendientes de revisar

> Puntos donde la transcripción es dudosa (❓), donde el contenido se ha reconstruido, o donde conviene contrastar con el profe / Canvas.

- ❓ **El Tema 1 (presentación) es casi todo administrativo.** La transcripción de la primera clase apenas tiene contenido técnico: la estructura mínima de HTML, las 3 formas de enlazar CSS y las DevTools que aparecen en el Tema 1 de estos apuntes están **reconstruidas** como contenido estándar que el profe anunció para la clase siguiente. Contrasta con sus diapositivas.
- ❓ **El Tema 4 "Diseño de Interfaces" no entra en el examen.** El profe lo dijo explícitamente y la clase fue introductoria (principios de diseño, Figma, wireframes). Además, **toda la parte técnica de CSS responsive** del Tema 5 de estos apuntes (media queries, breakpoints, viewport, unidades) está reconstruida como estándar del módulo — **no estaba en esa transcripción**. Confírmalo.
- ❓ **CSS Grid apenas se vio.** El profe se centró en **Flexbox** (que sí cayó en el examen del año pasado). La parte de Grid del Tema 4 está marcada como reconstrucción/ampliación: dale prioridad a Flexbox.
- ❓ **El archivo "12_Multimedia" trataba sobre todo de animaciones CSS.** Pese a su nombre, ese archivo cubría `transform`, `transition`, `@keyframes`, `animation` y librerías de animación (Animate.css, AniJS, Bounce), no audio/vídeo. Ese contenido de animaciones está cubierto en el **Tema 4 (CSS avanzado)**; las librerías de animación apenas se tocan en estos apuntes. Si entran en el examen, amplía.
- ❓ **El Tema 9 "Contenido Interactivo" trataba casi todo de jQuery.** La clase real fue de jQuery (eventos, efectos `show`/`hide`/`fadeIn`, jQuery UI). Los elementos nativos HTML/CSS (`<details>`, `<dialog>`, validación HTML5, trucos solo-CSS) que aparecen en ese tema son **ampliación reconstruida**, no se dieron en clase. Mira si el examen pide jQuery o técnicas nativas.
- ❓ **El Tema 10 (Accesibilidad) es conceptual.** El profe dijo que esa clase no tiene práctica y no mostró código. Todos los ejemplos de código accesible son reconstrucción didáctica estándar.
- ❓ **Sintaxis de pseudoelementos y `text-shadow`.** En el Tema 3 quedaron dudosos: la sintaxis `:` vs `::` de los pseudoelementos y el orden de los argumentos de `text-shadow`. Usa la referencia de MDN para confirmar.
- ❓ **`<track>` para subtítulos.** El profe lo nombró de pasada al hablar de vídeo pero no mostró su sintaxis; está reconstruido con el estándar WebVTT.
- ❓ **Datos administrativos sin confirmar.** No aparecían en las transcripciones: el correo del profe, los validadores W3C concretos, MDN/W3Schools/caniuse por nombre, el peso exacto del test en la nota, el procedimiento de revisiones, la web de repaso ni la editorial del libro. Míralo en Canvas.
- 📺 **Momentos visuales sin capturar.** Hay muchas demos de maquetación en vivo en el navegador y el editor. Cada tema lista las más relevantes en "Visuales a revisar" con marca de tiempo estimada; si algo no te cuadra solo con el texto, ve a la grabación.

---

## Repaso: simulacro de examen

En la clase del simulacro José Manuel presentó un ejercicio de práctica que reproduce **exactamente la estructura del examen final** de Diseño de Interfaces Web. No es entregable y no cuenta para nota: su única función es que te familiarices con el formato y te cronometres.

### Formato del examen (reconstruido a partir del simulacro)

- 🔥 El examen es **presencial**, en el ordenador del alumno, y dura **90 minutos**.
- Se entrega un **fichero `.zip` o `.rar`** que contiene una carpeta con tu **nombre, apellidos y nombre de la asignatura**. Crea la carpeta *antes* de comprimir para que todo quede ordenado dentro.
- Dentro del comprimido van **los 2 ejercicios prácticos que hayas elegido**, con **todo lo necesario** (imágenes, archivos CSS, etc.).
- Si te da tiempo, incluye también **alguna captura de pantalla** de la solución (no hace falta vídeo).
- El examen tiene dos partes:
  - **Tipo test: 15 preguntas, vale 3 puntos** (0,2 puntos cada pregunta). Es **autocorregible**: lo corrige la plataforma (Canvas), no va en el PDF.
  - **Parte práctica: 3 ejercicios planteados, de los que eliges y entregas 2** (7 puntos en total).
- 🔥 Para cada ejercicio práctico recibes un **fichero de ayuda**: normalmente el **HTML ya hecho** (sin el CSS), la **imagen del enunciado** (cómo debe quedar) y los **recursos** (imágenes, iconos). **Nunca empiezas de cero**; si algún ejercicio empieza de cero es porque su HTML es trivial.
- Puedes **modificar libremente el HTML de ayuda** e incluso destrozarlo y empezar de cero: es solo una ayuda para que no pierdas tiempo. Lo que se evalúa es el **producto final** que el profe se descarga y visualiza.
- 🔥 **Material permitido**: cualquier cosa que tengas en tu equipo (tus chuletas, resúmenes, código de prácticas anteriores) y la **documentación de Bootstrap abierta en la web**. **Prohibidas las IAs** o herramientas similares: el ejercicio será nuevo, no visto en clase.
- No tiene que quedar **perfecto**. Si algún margen se descuadra un poco, no pasa nada; no tendrás un 10, pero tampoco hay que obsesionarse. Siempre "lo mejor posible".
- Consejo de método: empezar **retocando el HTML** (poner clases e IDs) y luego ir construyendo el CSS poco a poco. El orden HTML-primero o CSS-primero no se valora.
- 🔥 El test es lo que más cuesta a la gente ("sabemos hacer las cosas pero nos cuesta cómo nos lo preguntan"). Las preguntas salen del **recopilatorio de preguntas** y de los ejercicios hechos en clase: es un popurrí, no habrá nada "raro" ni "a pillar".

### Estructura de la parte práctica

Los 3 ejercicios siempre representan los **tres tipos de interfaz típicos**:

1. Un **marcador / contador** de una web (un dashboard de cifras).
2. La **ficha de un producto** de una tienda (producto + características).
3. Un **formulario**.

🔥 **Garantizado**: habrá un ejercicio de **CSS** y un ejercicio de **Bootstrap**. El tercero es la "sorpresa": puede ser **Flexbox**, o algo de **multimedia** (audio, vídeo) o **Canvas** (imágenes generadas con código). Audio y vídeo son "muy chorra" (básicamente colocarlos); Canvas requiere algo más.

---

### Ejercicio 1 — Marcador de usuarios (solo CSS3)

**Enunciado.** Partiendo del HTML proporcionado (un bloque con tres indicadores: *Usuarios*, *Ventas* y *Visitas*, cada uno con su número), maquétalo **únicamente con CSS3** (no se permite ninguna otra herramienta) para que tenga:

- Un **borde** que cambia con la estructura.
- **Padding / margin** para separar los bloques.
- Una **sombra** (`box-shadow`) en el borde.
- **Texto centrado**.
- **Tamaño de letra distinto** para las etiquetas (*usuarios*, *ventas*, *visitas*) y para los números.
- Un **tipo de colocación** a elegir. El profe **no obliga** a usar Flexbox pero **tampoco lo prohíbe**: puedes usar Flexbox o Grid si quieres (Carlos lo resolvió con Grid y le resultó más sencillo).

**Solución completa (HTML + CSS comentado).**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Marcador de usuarios</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <!-- Contenedor del marcador: HTML "de ayuda" que se da en el examen -->
  <section class="marcador">
    <div class="indicador">
      <span class="etiqueta">Usuarios</span>
      <span class="numero">1.024</span>
    </div>
    <div class="indicador">
      <span class="etiqueta">Ventas</span>
      <span class="numero">312</span>
    </div>
    <div class="indicador">
      <span class="etiqueta">Visitas</span>
      <span class="numero">8.940</span>
    </div>
  </section>
</body>
</html>
```

```css
/* estilos.css — resuelto SOLO con CSS3 */

/* El contenedor coloca los 3 indicadores en fila.
   Se elige Flexbox como "tipo de colocación" (Grid también valdría). */
.marcador {
  display: flex;
  justify-content: center; /* centra el grupo horizontalmente */
  gap: 20px;               /* separación entre indicadores */
  padding: 30px;           /* aire alrededor del conjunto */
}

/* Cada tarjeta-indicador: borde, sombra, padding y texto centrado */
.indicador {
  border: 2px solid #2c3e50;        /* borde visible */
  border-radius: 8px;               /* esquinas redondeadas */
  padding: 20px 30px;               /* separación interior (padding) */
  margin: 10px;                     /* separación exterior (margin) */
  text-align: center;               /* texto centrado */
  box-shadow: 0 4px 8px rgba(0,0,0,0.3); /* sombra del borde */
  background-color: #ffffff;
}

/* La etiqueta (Usuarios / Ventas / Visitas): letra más pequeña */
.indicador .etiqueta {
  display: block;
  font-size: 14px;
  color: #7f8c8d;
  text-transform: uppercase;
}

/* El número: letra más grande y destacada */
.indicador .numero {
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #2c3e50;
}
```

---

### Ejercicio 2 — Ficha de producto: auriculares (solo Bootstrap)

**Enunciado.** Partiendo del fichero de ayuda (HTML inicial, la **imagen de unos auriculares** y los **iconos** incluidos), construye **íntegramente con Bootstrap** la ficha de un producto: imagen del producto, título, descripción/características, precio y botón de compra. El HTML de ayuda solo es un punto de partida; lo importante es **acertar con las clases de Bootstrap**. No es un ejercicio largo si coges la estructura (fila/columna, tarjeta `card`, botones, formato de texto).

**Solución completa (HTML con Bootstrap 5).**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ficha de producto - Auriculares</title>
  <!-- CSS de Bootstrap 5 (en el examen se puede consultar la web de Bootstrap) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Iconos de Bootstrap, incluidos en el fichero de ayuda -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body class="bg-light">

  <!-- container centra el contenido; row/col organizan la maquetación -->
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">

        <!-- card: la tarjeta de producto de Bootstrap -->
        <div class="card shadow-sm">
          <!-- Imagen del producto (la da el profe en el fichero de ayuda) -->
          <img src="auriculares.jpg" class="card-img-top" alt="Auriculares">

          <div class="card-body">
            <h5 class="card-title">Auriculares inalámbricos</h5>
            <p class="card-text text-muted">
              Auriculares Bluetooth con cancelación de ruido y 30 h de batería.
            </p>

            <!-- Lista de características con iconos de Bootstrap -->
            <ul class="list-unstyled">
              <li><i class="bi bi-check-circle text-success"></i> Cancelación activa de ruido</li>
              <li><i class="bi bi-check-circle text-success"></i> Batería de 30 horas</li>
              <li><i class="bi bi-check-circle text-success"></i> Conexión Bluetooth 5.0</li>
            </ul>

            <!-- Precio y botón: d-flex para colocarlos en la misma fila -->
            <div class="d-flex justify-content-between align-items-center">
              <span class="h4 mb-0">79,99 €</span>
              <button class="btn btn-primary">
                <i class="bi bi-cart"></i> Comprar
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</body>
</html>
```

Claves de Bootstrap que el profe destaca: tener siempre clara la **fila (`row`) y la columna (`col`)**, saber **crear `card`** (tarjeta de producto) y saber **hacer un formulario con Bootstrap** (es muy fácil y es "otra cosa típica").

---

### Ejercicio 3 — Formulario (obligatorio con Flexbox)

**Enunciado.** Partiendo del HTML de un formulario (sin el CSS enlazado), maquétalo **obligatoriamente con Flexbox**. Este ejercicio el año pasado se planteó para poderlo hacer con Bootstrap *o* con Flexbox; este año se exige Flexbox explícitamente. Solo hay que escribir el CSS del formato; se pueden tocar las clases y los `input`.

**Solución completa (HTML + CSS con Flexbox, comentado).**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de registro</title>
  <link rel="stylesheet" href="formulario.css">
</head>
<body>
  <!-- HTML de ayuda: el formulario sin estilos -->
  <form class="formulario">
    <h2>Registro</h2>

    <div class="campo">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre">
    </div>

    <div class="campo">
      <label for="email">Correo electrónico</label>
      <input type="email" id="email" name="email">
    </div>

    <div class="campo">
      <label for="password">Contraseña</label>
      <input type="password" id="password" name="password">
    </div>

    <div class="acciones">
      <button type="reset">Cancelar</button>
      <button type="submit">Enviar</button>
    </div>
  </form>
</body>
</html>
```

```css
/* formulario.css — maquetado con FLEXBOX */

/* Centramos el formulario en la página con flexbox sobre el body */
body {
  display: flex;
  justify-content: center; /* centrado horizontal */
  align-items: center;     /* centrado vertical */
  min-height: 100vh;
  background-color: #ecf0f1;
  font-family: Arial, sans-serif;
}

/* El formulario es un contenedor flex en COLUMNA:
   cada campo se apila debajo del anterior */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;               /* separación entre campos */
  width: 320px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Cada campo: label encima del input, también en columna */
.campo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.campo label {
  font-size: 14px;
  font-weight: bold;
  color: #2c3e50;
}

.campo input {
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
}

/* Zona de botones: flex en FILA, separados a los extremos */
.acciones {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.acciones button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.acciones button[type="submit"] {
  background-color: #2980b9;
  color: #ffffff;
}

.acciones button[type="reset"] {
  background-color: #e0e0e0;
  color: #2c3e50;
}
```

### Pitfalls del simulacro

Errores y avisos que señaló el profe durante la clase:

- **Leer mal el enunciado.** El ejercicio 3 pide Flexbox *explícitamente*; Carlos lo hizo con los formularios de Bootstrap por no leerlo bien. 🔥 Lee los 3 enunciados enteros antes de elegir y de empezar.
- **Sobrepensar la solución.** Confundir un `border` con un `box-shadow` (el típico `offset 0`), buscar soluciones complejísimas para algo simple. La solución más sencilla suele ser la adecuada; nadie pone nada "a pillar".
- **Olvidar cómo se hace algo concreto.** Le pasó con `border` (poner el borde arriba/abajo/derecha): no era difícil, pero no se acordaba. Solución: usar las **chuletas de CSS** que dio el profe y tu propio resumen.
- **Empezar de cero sin necesidad.** El HTML de ayuda existe para que no pierdas tiempo; el tiempo corre en tu contra. Úsalo como punto de partida.
- **Obsesionarse con que quede perfecto.** Si un margen no cuadra exactamente, no pasa nada. No habrá un 10, pero no hay que rayarse.
- **Generar un CSS enorme.** 🔥 Si en el examen te sale un código muy grande, "algo estás haciendo regular": son 4-6 clases, no va a ser largo. En las prácticas el CSS sí es largo (header, body, main, secciones...), pero el examen no.
- **El test cuesta más que la práctica.** Acostúmbrate a la forma de preguntar repasando el recopilatorio de preguntas.
- **No cronometrarse.** Cada ejercicio práctico está pensado para ~30 minutos. Hazlo en casa con el reloj puesto para ir tranquilo el día del examen.
- **(Aviso para Entorno Servidor, mismo formato):** la base de datos te la da el profe (no se crea en el momento), pero hay que **tener Apache arrancado antes** de empezar el examen.

---

## Recursos externos recomendados

> Material curado para complementar estos apuntes. Los enlaces de documentación son
> URLs oficiales y estables. Para vídeo doy el **nombre del canal** y **qué buscar**
> exactamente — los canales son estables aunque los vídeos concretos cambien de URL.

### Documentación oficial (la fuente de verdad)
- **MDN Web Docs** — https://developer.mozilla.org/es/docs/Web/HTML y https://developer.mozilla.org/es/docs/Web/CSS — la referencia definitiva de cada etiqueta HTML y cada propiedad CSS. Si dudas de cómo se usa algo, se mira aquí.
- **Bootstrap** — https://getbootstrap.com/docs/ — documentación oficial; cada componente trae su código listo para copiar (tema 6).
- **web.dev** — https://web.dev/learn/ — cursos oficiales de Google: "Learn HTML", "Learn CSS", "Learn Accessibility". Muy bien hechos.
- **Can I use** — https://caniuse.com/ — comprobar qué navegadores soportan una propiedad CSS o etiqueta HTML.

### Canales de YouTube (en español)
- **Bluuweb** — busca *"Curso HTML y CSS desde cero"* — uno de los mejores cursos de maquetación para principiantes en español.
- **midudev** — busca *"CSS"*, *"Flexbox"*, *"CSS Grid"* — explicaciones modernas y claras.
- **Fazt / Fazt Code** — busca *"HTML y CSS"*, *"Bootstrap"* — con proyectos prácticos de maquetación.
- **Soy Dalto** — busca *"HTML CSS"* — proyectos guiados.
- **La Cocina del Código** — busca *"CSS"*, *"Bootstrap"*.

### Canales de YouTube (en inglés — imprescindible uno)
- **Kevin Powell** — 🔥 **EL referente mundial de CSS.** Si solo ves un canal para este módulo, que sea este. Busca *"Kevin Powell flexbox"*, *"Kevin Powell CSS grid"*, *"Kevin Powell responsive"*. Te hará entender Flexbox de verdad (tema 4).
- **freeCodeCamp.org** — busca *"HTML CSS Full Course"*, *"Bootstrap Course"*.
- **Traversy Media** — "crash courses" de HTML, CSS, Flexbox y Bootstrap.

### Práctica — juegos para aprender (muy recomendados)
- **Flexbox Froggy** — https://flexboxfroggy.com/#es — juego para dominar Flexbox (tema 4). **Hazlo entero, es rápido y fija el concepto.**
- **Grid Garden** — https://cssgridgarden.com/#es — lo mismo para CSS Grid.
- **CSS Diner** — https://flukeout.github.io/ — juego para dominar los selectores CSS (tema 3).
- **Frontend Mentor** — https://www.frontendmentor.io/ — retos de maquetar diseños reales.
- **CodePen** — https://codepen.io/ — editor online para probar HTML/CSS al instante y ver ejemplos de otros.

### Referencia rápida (cheatsheets)
- **CSS-Tricks — "A Complete Guide to Flexbox"** — https://css-tricks.com/snippets/css/a-guide-to-flexbox/ — la guía visual de Flexbox más usada del mundo. 🔥 Imprescindible para el tema 4.
- **CSS-Tricks — "A Complete Guide to Grid"** — https://css-tricks.com/snippets/css/complete-guide-grid/
- **devhints.io/css** — chuleta de CSS en una página.
- **Animate.style** — https://animate.style/ — catálogo de las animaciones de Animate.css.

### Accesibilidad (tema 10)
- **WCAG en español** — https://www.w3.org/WAI/ — el sitio del WAI del W3C.
- **web.dev — Learn Accessibility** — https://web.dev/learn/accessibility/ — curso de accesibilidad de Google.

---

## Admin

### Profesor y contacto

| | |
|---|---|
| **Módulo** | Diseño de Interfaces Web (2º DAW) |
| **Profesor** | José Manuel Prieto |
| **Otros roles** | Tutor académico del grupo; también imparte Entorno Servidor |
| **Perfil** | Ingeniero informático, experto en ciberseguridad, formación en Oracle y Cisco |
| **Contacto** | Correo electrónico ❓ (lo dio en clase pero no se transcribe) o, preferiblemente, **mensaje por Canvas** |
| **Clase** | Online por Teams, los **martes** (las clases quedan **grabadas**) |
| **Tutorías** | Hay tutorías individuales fijadas, pero el profe queda con flexibilidad (lunes, jueves, viernes... por la tarde para no perjudicar al alumnado). Si una tutoría individual hace falta, la convierte en colectiva y avisa |

### Metodología

- 🔥 **Los apuntes del profe (las presentaciones) son la base de la asignatura.** Las preguntas de test y de ejercicios salen de ahí.
- El **libro** (editorial McGraw-Hill ❓, "temario interfaz gráfica") es **solo de consulta** y está algo desactualizado. El profe **no lo sigue**.
- Cada tema combina **teoría** + **ejercicios resueltos en directo** + **ejercicios resueltos para descargar** (en `.zip` / `.rar`, con comentarios en el código).
- Asignatura **sin programación lógica**: es "programación visual" (HTML y CSS).
- Carga lectiva: **3 horas**. El profe no pide más de **3 horas de trabajo semanal**; pondrá ejercicios cada semana para cubrir ese tiempo.
- **Tests**: prácticos, no teóricos. No preguntan "qué significan las siglas CSS", sino "qué regla CSS usarías para poner el fondo rojo", "para qué sirve Flexbox", etc. (teórico-prácticas).

### Temario / unidades del módulo

| Evaluación | Temas / contenidos |
|---|---|
| **1ª evaluación** | **Tema 1 – HTML5** (la primera presentación tiene 120 diapositivas) · **Tema 2 – Introducción a CSS3** (CSS básico) · **Tema 3 – CSS avanzado** (efectos avanzados, tipos de diseño, preprocesadores, media queries, **Flexbox**, `float`) |
| **2ª evaluación** | **Tema 4 – Diseño de interfaces con Bootstrap** (framework, versión 5) · **Tema 5 – Multimedia**: audio, vídeo y animaciones · Normativa: propiedad intelectual, ley de protección de datos y ley audiovisual |
| **3ª evaluación** | **Contenido interactivo**: eventos, manipulación de propiedades y estilos en tiempo real (requiere algo de JavaScript, que da Borja), controles interactivos · **Accesibilidad y usabilidad** (tema más teórico, última clase) |

### Fechas de exámenes (curso 2025-2026)

| Convocatoria | Fechas |
|---|---|
| **Ordinaria** | Fin de semana del **22, 23 y 24 de mayo de 2026** (no se sabe aún si Interfaces cae sábado o domingo) |
| **Extraordinaria** | Fin de semana del **12, 13 y 14 de junio de 2026** |

> 🔥 En la clase del simulacro el profe concretó: el examen de Interfaces es el **viernes a las 20:00** (último examen del día; antes tienen Empleabilidad y Sostenibilidad, empezando a las 16:00). Las fechas del fin de semana **no cambian**; importante para quien vive fuera y tiene que reservar viajes.

### Formato del examen

- 🔥 **Presencial**, con el **ordenador del alumno** (obligatorio llevarlo). La fecha **no se puede cambiar**.
- **Duración: 90 minutos.**
- Es de **todo el temario** (no hay que asustarse).
- Estructura: **parte tipo test** + **3 problemas, de los que se eligen y entregan 2**.
  - Test: **15 preguntas = 3 puntos** (0,2 cada una), autocorregible en la plataforma.
  - Prácticos: eliges 2 → 7 puntos.
- Entrega en **`.zip` / `.rar`** con carpeta nombrada (nombre, apellidos, asignatura) que incluya los 2 ejercicios y todos sus recursos; si da tiempo, capturas.
- Mismo formato que el examen del año pasado y que el resto de módulos (Lenguaje de Marcas, Programación, Empresa...).
- **Revisiones**: no se mencionan explícitamente en estas transcripciones. ❓

### Actividades evaluables y pesos

| Tipo de actividad | Nota | Frecuencia | Notas |
|---|---|---|---|
| **Práctica evaluable** | 0 a 10 | **Una por evaluación** (3 en total) | Fecha de entrega fija (la marca la universidad, **no se puede cambiar**) |
| **Ejercicios NO evaluables** | Sin nota | Semanales | Tienen fecha de entrega "de control", pero sin penalización por retraso; sirven para autoevaluarte. El profe da la solución a la semana siguiente |
| **Tests** | ❓ (peso no concretado en estas transcripciones) | — | Prácticos, teórico-prácticos |

- **Práctica evaluable de la 1ª evaluación**: crear un **interfaz con HTML5 y CSS3**. Se publica a finales de octubre, se hace durante noviembre, **fecha de entrega: 30 de noviembre**.
- El profe puede **adelantar** las prácticas evaluables si el grupo lo pide (para no acumular entregas).
- 🔥 Las prácticas evaluables **se parecen mucho a los ejercicios del examen**: hacerlas bien es preparar el examen.
- ❓ El peso exacto de cada componente en la nota final no aparece en estas transcripciones.

### Criterios de evaluación

- Las prácticas evaluables se puntúan de **0 a 10**.
- En el examen práctico **no hace falta que quede perfecto**: cuenta el producto final que el profe se descarga y visualiza; descuadres menores no penalizan mucho.
- Filosofía del profe: las actividades evaluables **no son enormes**; se trata de trabajar "un poquito más" que en una práctica normal de clase, no de dedicarle 8 horas extra.
- No hay preguntas "a pillar"; se evalúa que demuestres saber hacer las cosas en poco tiempo.

### Plataformas y herramientas

| Herramienta | Uso |
|---|---|
| **Canvas (Campus Virtual)** | 🔥 Lo más importante. Apuntes/presentaciones, ejercicios resueltos, tests, planificación, guía de aprendizaje, programación. Vía de contacto con el profe |
| **Microsoft Teams** | Clases online (martes); quedan **grabadas** |
| **Editor de código** | **Visual Studio Code** (recomendado, con plugins/extensiones — se hablará de ellos más adelante). También válidos Notepad++ (sencillo, gratuito, sin ayudas), Sublime, Atom, etc. |
| **Navegador web** | Edge, Chrome, Safari, Opera... el que uses, para visualizar las páginas |
| **Validadores W3C** | ❓ No se mencionan explícitamente en estas transcripciones |
| **Documentación de Bootstrap** | Consultable online, incluso **durante el examen** |

### Recursos recomendados

- **Documentación oficial de Bootstrap** (versión 5): incluye ejemplos de código, componentes (botones, gráficos) y plantillas descargables.
- 🔥 El profe prometió subir al foro de Canvas un **enlace a una web para repasar HTML y CSS** con ejercicios resueltos (de **consulta**, no para memorizar). El nombre concreto de la web no se llegó a decir en clase. ❓
- Apuntes del módulo de **Lenguaje de Marcas** del curso anterior (profesor José David Ventura) para el repaso inicial.
- ❓ MDN, W3Schools y caniuse no se citan por nombre en estas transcripciones (el profe sí dijo que "os diré dónde mirarlo" para ver las novedades de HTML/CSS, pero no nombró las webs).

### Deberes iniciales (primera semana)

- **Repasar HTML y CSS básico** del módulo de Lenguaje de Marcas del año pasado (NO repasar XML ni JavaScript para este módulo).
- Conceptos a recuperar: etiquetas HTML, enlaces, formularios; en CSS: color de fondo, tipo de fuente, bordes, posicionamiento (relativo, absoluto, fijo), `div`, ancho y alto.
- Sugerencia: coger el examen de Lenguaje de Marcas del año pasado e intentar resolverlo sin mirar la solución.

### 🔥 Lo que cae en el examen

Todo lo que el profe marcó **explícitamente** como importante o de examen:

- 🔥 **El examen es práctico**, presencial, 90 minutos, con tu ordenador. Test (15 preguntas, 3 puntos) + 3 prácticos de los que entregas 2.
- 🔥 **Seguro que hay un ejercicio de Bootstrap.** "Una de las preguntas va a ser usar Bootstrap el día del examen." Vamos por la **versión 5**. Lo clave: dominar **fila/columna (`row`/`col`)**, crear **`card`** (tarjeta de producto) y hacer un **formulario con Bootstrap**.
- 🔥 **Seguro que hay un ejercicio de CSS.**
- 🔥 El **tercer práctico** es variable: **Flexbox**, **multimedia** (audio/vídeo) o **Canvas** (imágenes generadas con código). Audio/vídeo es básico; Canvas requiere algo más.
- 🔥 **Flexbox**: lo más importante es la **colocación** de elementos (columnas, estructura, alineación al principio/al final). Es más potente que `float` y se usa muchísimo. Se puede combinar con Grid y con CSS normal.
- 🔥 **HTML**: "etiquetas, etiquetas, etiquetas" — hay que repasarlas todas. Incluye enlaces.
- 🔥 **CSS**: bordes (`border`, lados concretos), sombras (`box-shadow`), padding/margin, centrado de texto, tamaños y tipos de letra, posicionamiento, `div` y dimensiones; además efectos avanzados, transiciones, media queries.
- 🔥 Las **prácticas evaluables se parecen mucho al examen** — son la mejor preparación.
- 🔥 El **test** sale del recopilatorio de preguntas y de los ejercicios hechos en clase: es un popurrí, nada raro.
- 🔥 En el examen puedes tener **tus chuletas, resúmenes y código previo** en el equipo, y la **web de Bootstrap abierta**. **Prohibidas las IAs.**
- 🔥 El examen **no será largo** (4-6 clases CSS aprox.); si te sale un código enorme, algo va mal.

---
