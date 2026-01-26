// Como ya esta metido en index.html todo lo que hagamos aqui se reflejara en la web
console.log("Ejecucion del fichero");
// Los logs los veremos dentro de la consola de la web

// JS funciona igual que cualquier otro lenguaje

// clases
// funciones
// variables

// Como crear una variable, tenemos tres posibilidades pero usaremos LET y CONST
// VAR es la antigua y no se usa y es peligrosa
// Tipos:
// Primitivos: number, string, boolean, null, undefined, symbol(bigint) COMPLEJO
// No primitivos: object, array, function

// SEGUN EL VALOR -> int  double float  string char boolean
// Todos los numeros son del tipo NUMBER entran int y double

// Lenguaje no tipado, tremendamente debil no decimos nosotros es el navegador quien lo interpreta

// Segun su ambito
// let -> ambito de bloque {}
// var -> ambito de funcion function(){}, da igual donde se declare esta en toda la clase
// const -> ambito de bloque {}  valor constante

// let nombre; // podemos no inicializarlo y al no estar definicodo sera UNDEFINED
let nombre = "Miguel Ángel"; // inicializada
let edad = 37; // inicializada NUMBER
let altura = 1.9; // NUMBER
let letraPiso = "A"; // STRING TAMBIEN PUEDE SER CHAR
let experiencia = true; // BOOLEAN
let fechaNacimiento = new Date(1988, 4, 16); // OBJECT TIPO FECHA
let mail = "miguel@ue.com"; // STRING
let puesto = null; // si queremos que sea null se lo tenemos que marcar NULL
let conocimiento;
// Al ser let podemos alterar su valor
edad = 43;
nombre = "Ana";
// PEro si ponemos const no y saltara error
const DNI = "123A";
// DNI = "456B"; // ERROR

// TIPAMOS EN EL MOMENTO DE LA IGUALACION, y quien decide esto, el navegador cuando interpreta.

// como utilizarlas
/* console.log("Mi nombre es " + nombre);
console.log("Mi edad es " + edad);
console.log("Mi puesto es " + puesto);
console.log("Mi conocimiento " + conocimiento); */

// banderas
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
// Tambien podemos ejecutar cosas sobre la variable poniendo el punto
console.log(`Mi nombre es ${nombre.valueOf()} y tengo ${edad} años`);
console.log(`Mi puesto es ${puesto}`);
console.log(`Mi conocimiento ${conocimiento}`);

// Como sacar el tipo de una variable
console.log("El tipo de la edad es " + typeof edad);
console.log("El tipo de altura es " + typeof altura);
console.log("El tipo de puesto es " + typeof puesto); // al poner que es null lo toma como objeto
console.log("El tipo de conocimiento es " + typeof conocimiento);

// NaN -> Not a Number es todos aquellos tipos que no son numeros
// Por ejemplo una letra a numero, pues si no entra el parseo dira isNaN
/* let letra = "a";
let letraANumero = parseInt(letra); */

// Variable con VAR
// con let podemos ver que es accsible
// let numero = 5; pero si la guardamos dentro
/* if (numero < 10) {
  // let numero = 5; comentamos para probar el var
  var numero = 5;
  console.log("Este numero es inferior");
  // console.log(numero); para probar si se puede acceder con let dentro
  numero = 20;
}
console.log(numero); */ // Al estar el let dentro no nos dejara acceder. En cambio con Var si podemos

// Sumar
