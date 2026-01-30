/* =========================================================
   datos.js
   - Aquí están los mazos (Tabú y Trivial) por asignatura
   - Cuando me pases más preguntas, se pegan aquí.
   ========================================================= */

/* --------------------------
   TABÚ (cartas)
   Formato:
   { word: "DOM", forbidden: ["document", "querySelector", "HTML", "nodo"] }
--------------------------- */
const mazosTabu = {
  entorno_cliente: [
    { word: "DOM", forbidden: ["document", "HTML", "nodo", "selector"] },
    {
      word: "Evento",
      forbidden: ["click", "listener", "addEventListener", "target"],
    },
    { word: "Promesa", forbidden: ["then", "catch", "async", "await"] },
  ],
  interfaces_web: [
    { word: "Responsive", forbidden: ["móvil", "media", "grid", "breakpoint"] },
    {
      word: "Flexbox",
      forbidden: ["display", "justify-content", "align-items", "row"],
    },
    {
      word: "Accesibilidad",
      forbidden: ["ARIA", "contraste", "teclado", "lector"],
    },
  ],
  sostenibilidad: [
    {
      word: "Economía circular",
      forbidden: ["reciclar", "reutilizar", "residuos", "7R"],
    },
    {
      word: "Huella de carbono",
      forbidden: ["CO2", "emisiones", "clima", "impacto"],
    },
    {
      word: "Ecodiseño",
      forbidden: ["material", "reparar", "durabilidad", "diseño"],
    },
  ],
  ipe2: [
    {
      word: "Marca personal",
      forbidden: ["LinkedIn", "perfil", "imagen", "reputación"],
    },
    {
      word: "Entrevista",
      forbidden: ["preguntas", "RRHH", "empresa", "respuestas"],
    },
    {
      word: "Competencias",
      forbidden: ["habilidades", "soft", "trabajo", "equipo"],
    },
  ],
  digitalizacion: [
    {
      word: "Transformación digital",
      forbidden: ["tecnología", "proceso", "empresa", "cambio"],
    },
    { word: "Cloud", forbidden: ["nube", "servidor", "AWS", "internet"] },
    {
      word: "Big Data",
      forbidden: ["datos", "volumen", "análisis", "información"],
    },
  ],
  entorno_servidor: [
    { word: "API", forbidden: ["endpoint", "HTTP", "JSON", "request"] },
    { word: "Middleware", forbidden: ["express", "next", "req", "res"] },
    { word: "JWT", forbidden: ["token", "auth", "login", "header"] },
  ],
  ingles: [
    { word: "Interview", forbidden: ["job", "questions", "answer", "company"] },
    { word: "Deadline", forbidden: ["time", "finish", "project", "late"] },
    {
      word: "Teamwork",
      forbidden: ["team", "together", "communication", "collaboration"],
    },
  ],
  python: [
    { word: "Lista", forbidden: ["append", "len", "for", "índice"] },
    { word: "Diccionario", forbidden: ["clave", "valor", "keys", "items"] },
    {
      word: "Función",
      forbidden: ["def", "return", "parámetros", "argumentos"],
    },
  ],
  despliegue: [
    {
      word: "Docker",
      forbidden: ["contenedor", "imagen", "compose", "puerto"],
    },
    {
      word: "CI/CD",
      forbidden: ["pipeline", "github", "automatizar", "deploy"],
    },
    {
      word: "HTTPS",
      forbidden: ["certificado", "SSL", "seguridad", "cifrado"],
    },
  ],
};

/* --------------------------
   TRIVIAL (preguntas tipo test)
   Formato:
   {
     id: 1,
     question: "....",
     options: [{ id:"a", text:"...", correct:true }, ...]
   }
--------------------------- */
const mazosTrivial = {
  entorno_cliente: [
    {
      id: 1,
      question: "¿Dónde se ejecuta normalmente JavaScript en una página web?",
      options: [
        { id: "a", text: "En el servidor únicamente", correct: false },
        { id: "b", text: "En el navegador del usuario", correct: true },
        { id: "c", text: "En la base de datos", correct: false },
        { id: "d", text: "En el router", correct: false },
      ],
    },
    {
      id: 2,
      question: "¿Qué devuelve document.querySelectorAll('.item')?",
      options: [
        { id: "a", text: "Un solo elemento", correct: false },
        {
          id: "b",
          text: "Un NodeList con los elementos que coinciden",
          correct: true,
        },
        { id: "c", text: "Un número", correct: false },
        { id: "d", text: "Un boolean", correct: false },
      ],
    },
  ],

  interfaces_web: [
    {
      id: 1,
      question: "¿Para qué se usa Flexbox principalmente?",
      options: [
        { id: "a", text: "Para crear base de datos", correct: false },
        {
          id: "b",
          text: "Para alinear y distribuir elementos en un contenedor",
          correct: true,
        },
        { id: "c", text: "Para programar lógica", correct: false },
        { id: "d", text: "Para compilar CSS", correct: false },
      ],
    },
  ],

  sostenibilidad: [
    {
      id: 1,
      question: "¿Cuál es una idea clave de la economía circular?",
      options: [
        { id: "a", text: "Usar y tirar", correct: false },
        { id: "b", text: "Reducir, reutilizar y reciclar", correct: true },
        { id: "c", text: "Aumentar residuos", correct: false },
        { id: "d", text: "Producir sin límite", correct: false },
      ],
    },
  ],

  ipe2: [
    {
      id: 1,
      question: "¿Qué significa adaptar el CV a una oferta concreta?",
      options: [
        { id: "a", text: "Mentir sobre la experiencia", correct: false },
        { id: "b", text: "Cambiar solo colores", correct: false },
        {
          id: "c",
          text: "Destacar lo más relacionado con el puesto",
          correct: true,
        },
        { id: "d", text: "Usar siempre el mismo modelo", correct: false },
      ],
    },
  ],

  digitalizacion: [
    {
      id: 1,
      question: "¿Qué es la transformación digital?",
      options: [
        { id: "a", text: "Cambiar el logo de la empresa", correct: false },
        {
          id: "b",
          text: "Integrar tecnología para mejorar procesos y servicios",
          correct: true,
        },
        { id: "c", text: "Eliminar Internet", correct: false },
        { id: "d", text: "Usar solo papel", correct: false },
      ],
    },
  ],

  entorno_servidor: [
    {
      id: 1,
      question: "¿Qué es un endpoint en una API?",
      options: [
        { id: "a", text: "Un tipo de variable", correct: false },
        {
          id: "b",
          text: "Una ruta/URL que atiende una petición",
          correct: true,
        },
        { id: "c", text: "Un archivo CSS", correct: false },
        { id: "d", text: "Un plugin de VS Code", correct: false },
      ],
    },
  ],

  ingles: [
    {
      id: 1,
      question: "¿Qué significa 'deadline'?",
      options: [
        { id: "a", text: "Reunión", correct: false },
        { id: "b", text: "Fecha límite", correct: true },
        { id: "c", text: "Vacaciones", correct: false },
        { id: "d", text: "Entrevista", correct: false },
      ],
    },
  ],

  python: [
    {
      id: 1,
      question: "¿Qué palabra clave se usa para definir una función en Python?",
      options: [
        { id: "a", text: "func", correct: false },
        { id: "b", text: "def", correct: true },
        { id: "c", text: "fun", correct: false },
        { id: "d", text: "define", correct: false },
      ],
    },
  ],

  despliegue: [
    {
      id: 1,
      question: "¿Para qué sirve Docker principalmente?",
      options: [
        { id: "a", text: "Para diseñar interfaces", correct: false },
        {
          id: "b",
          text: "Para ejecutar apps en contenedores de forma aislada",
          correct: true,
        },
        { id: "c", text: "Para escribir SQL", correct: false },
        { id: "d", text: "Para editar vídeo", correct: false },
      ],
    },
  ],
};
