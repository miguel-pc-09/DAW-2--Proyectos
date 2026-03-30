// ===============================
// 1. IF SIMPLE
// ===============================

let edad = 18;

// Compruebo una condición
if (edad >= 18) {
  console.log("Eres mayor de edad");
  // -> Esto solo se ejecuta si la condición es verdadera
}

// ===============================
// 2. IF / ELSE
// ===============================

let numero = 5;

if (numero > 10) {
  console.log("Es mayor que 10");
} else {
  console.log("Es menor o igual que 10");
  // -> Si no se cumple el if, entra aquí
}

// ===============================
// 3. IF / ELSE IF / ELSE
// ===============================

let nota = 7;

if (nota < 5) {
  console.log("Suspenso");
} else if (nota < 7) {
  console.log("Aprobado");
} else if (nota < 9) {
  console.log("Notable");
} else {
  console.log("Sobresaliente");
}

// ===============================
// 4. USANDO VARIABLES DE TEXTO
// ===============================

let usuario = "Miguel";

if (usuario === "Miguel") {
  console.log("Bienvenido Miguel");
} else {
  console.log("Usuario incorrecto");
}

// ===============================
// 5. SWITCH (alternativa a muchos if)
// ===============================

let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}

// ===============================
// 6. CONDICIONES CON && (AND)
// ===============================

let edadUsuario = 20;
let tieneCarnet = true;

if (edadUsuario >= 18 && tieneCarnet === true) {
  console.log("Puede conducir");
}

// ===============================
// 7. CONDICIONES CON || (OR)
// ===============================

let esAdmin = false;
let esProfesor = true;

if (esAdmin || esProfesor) {
  console.log("Tiene permisos");
}

// ===============================
// 8. CONDICIÓN NEGADA (!)
// ===============================

let bloqueado = false;

if (!bloqueado) {
  console.log("Puede entrar");
}
