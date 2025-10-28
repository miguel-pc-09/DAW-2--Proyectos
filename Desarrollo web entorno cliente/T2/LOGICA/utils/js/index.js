console.log("Ejecucion del fichero");
// clases
// funciones
// variables
// 3 posibilidades pero dara dos
// en prog. o ent. complejo y primitivo
// valor -> int double float boolean char string Object
// Aqui -> number (int, double, float) boolean char string Object -> Lenguaje no tipado
// ambito  -> let (variable normal y corriente) // var (Da igual donde estan porque se puede acceder desde cualquier sitio ** No usaremos.) // const (no cambian nunca)

// let nombre = "Miguel Perucha"; // String // undefined si no ponemos nada                // No obliga a normalizar
let edad = 37; //number // undefined
let altura = 1.9; //number // undefined              *****   El navegador define el TIPO ****
let letraPiso = "A"; // char- string // undefined
let experiencia = true; // boolean  // undefined
let fechaNacimiento = new Date(1988, 4, 16); // Object // undefined
let mail = "miguel@ue.com"; // string  // undefined
let puesto = null; // null
let conocimiento; // null

/* // Constantes const no se les puede modificiar
const DNI = "1234A";
DNI = "1234B"; // Assignment to constant variable. */

// Forma de llamarlos
// console.log("Mi nombre es " + nombre);
console.log("Mi edad es " + edad);
console.log("Mi puesto es " + puesto);
console.log("Mi edad es " + conocimiento);

// Aqui con banderas con comilla tumbada al lado de la P. Con esto tenemos aceso a otras cosas que queramos con el punto. es decir ${nombre.split}
// console.log(`Mi nombre es ${nombre} y tengo ${edad}`);

// como sacar el tipo de la variable
console.log("El tipo de edad es: " + typeof edad);
console.log("El tipo de altura es: " + typeof altura);
console.log("El tipo de puesto " + typeof puesto);
console.log("El tipo de conocimiento " + typeof conocimiento);

// NaN -> Not a Number

/* if (numero < 10) {
  let numero = 5;
  console.log("Este numero es inferior");
  numero = 20;
}
console.log(numero); // No dejara porque el ambito del let esta entre las llaves. Si let la cambiamos por VAR si podríamos */
