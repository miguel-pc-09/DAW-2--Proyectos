<?php 
// Para imprimir: echo y print  
    // echo: muestra una o más cadenas
// echo cadena1 ["", "cadena2", ""];                 // no es una función

echo "Hola mundo" ;
echo "“Hola “", "“mundo”";

// print: muestra una cadena
// print cadena;              // no es una función

print "Hola mundo";
print "Hola " . "mundo";
?>
<!-- Sintaxis básica  -->
<HTML>

<HEAD>
    <TITLE>Mi primer programa en PHP</TITLE>
</HEAD>

<BODY>

    <!-- Código HTML en HTML p ya hace salto de linea -->
    <P>Párrafo 1</P>
    <P>Párrafo 2</P>
    <?PHP
    print ("<P>Hola mundo</P>");

    // Codigo PHP para salto de linea \n antes de " final
    print ("<P>Párrafo 1</P>");
    print ("<P>Párrafo 2</P>");

    // Soporta 8 Tipos de datos primitivos
        // Tipos escalares: Boolean, integer, double, string
        // Tipos compuestos: array, object
        // Tipos especiales: resource, NULL

    // La función gettype() devuelve el tipo de una variable
    // Las funciones is_type comprueban si una variable es de un
    /* tipo dado:
        is_array(), is_bool(), is_float(), is_integer(), is_null(),
        is_numeric(), is_object(), is_resource(), is_scalar(), is_string() 
        La función var_dump() muestra el tipo y el valor de una
        variable. Es especialmente interesante con los arrays
*/
    $a = 9;
    print 'a vale $a\n';
    // muestra a vale $a\n
    print "a vale $a\n";
    // muestra a vale 9 y avanza una línea
    print "<IMG SRC='logo.gif'>";
    // muestra <IMG SRC=‘logo.gif’>
    print "<IMG SRC=\"logo.gif\">";
    // muestra <IMG SRC=“logo.gif”>

    // Acceso a un carácter de la cadena
    // La forma es $inicial = $nombre{0};

    // Variables siempre precedidas de un $. Comienza por letra o subrallado $GLOBALS, $_SERVER, $_GET, $_POST, $_COOKIES, $_FILES,$_ENV, $_REQUEST, $_SESSION
    // Ámbito: Globales al fichero (excepto funciones) o locales a una funcion 
    $valor = 5;
    print "El valor es: " . $valor . "\n";
    print "El valor es: $valor\n";          // ojo: comillas dobles
    /* Resultado:
    El valor es: 5 */
    // Definición de constantes:
    define ("CONSTANTE", "hola");
    print CONSTANTE;
    // No llevan $ delante
    /* Sólo se pueden definir constantes de los tipos
    escalares (boolean, integer, double, string) */

    // Estructuras de control 
    /* if (condicion)
        sentencia

    if (condición)
        sentencia 1
    else
        sentencia 2 */
    /* if (condición1)
        sentencia 1
    else if (condición2)
        sentencia 2
    ...
    else if (condición n)
        sentencia n
    else
        sentencia n+1 */

    // Estructura SWITCH
    /* switch (expresión)
{
    case valor_1:
        sentencia 1
        break;
    case valor_2:
        sentencia 2
        break;
    ...
    case valor_n:
        sentencia n
        break;
    default
        sentencia n+1
} */
// Ejemplo 
    switch ($extension)
{
    case ("PDF"):
        $tipo = "Documento Adobe PDF";
        break;
    case ("TXT"):
        $tipo = "Documento de texto";
        break;
    case ("HTML"):
    case ("HTM"):
        $tipo = "Documento HTML";
        break;
    default:
        $tipo = "Archivo " . $extension;
}
print ($tipo);
// While abajo 

// Estructura repetitiva for: for (inicialización; condición; incremento) SENTENCIA

 // Bibliotecas de funciones
 /* ▪ explode()
        • Divide una cadena en subcadenas
        • array explode (string separator, string string [, int limit])

▪ rtrim(), ltrim(), trim()
        • Eliminan caracteres a la derecha, a la izquierda o por ambos lados de una cadena
        • string rtrim ( string str [, string charlist])

▪ strstr()
        • Busca la primera ocurrencia de una subcadena

▪ strtolower() / strtoupper()
        • Convierte una cadena a minúscula / mayúscula

▪ strcmp() / strcasecmp()
        • Compara dos cadenas con/sin distinción de mayúsculas

▪ strlen()
        • Calcula la longitud de una cadena 
        
        Funciones de Fecha y Hora
 ▪ date()
        • Formatea una fecha según un formato dado
        • Ejemplo:
    $fecha = date ("j/n/Y H:i");
    print ("$fecha");
        Resultado:
    26/9/2023 17:36

▪ strtotime()
        • Convierte una fecha en un timestamp de UNIX
        • Ejemplo:
    $fecha = date ("j/n/Y", strtotime(“5 april 2023"));
    print ("$fecha");
        Resultado:
    25/9/2023       
*/
?>
</BODY>

</HTML>

<!-- Ejemplo variables internacionalizada1 -->
<?PHP
$mensaje_es="Hola";
$mensaje_en="Hello";
$idioma = "es";
$mensaje = "mensaje_" . $idioma;
print $$mensaje;
?>

<!-- Ejemplo variables internacionalizada1 -->
<?PHP
$mensaje_es="Hola";
$mensaje_en="Hello";
$idioma = "en";
$mensaje = "mensaje_" . $idioma;
print $$mensaje;
?>

<!-- Ejemplo de estructura selectiva if-else: -->

<?PHP
if ($sexo == 'M')
    $saludo = "Bienvenida, ";
else
    $saludo = "Bienvenido, ";
    $saludo = $saludo . $nombre;
print ($saludo);
?>

<!-- WHILE -->
<?PHP
    print ("<UL>\n");
    $i=1;
    while ($i <= 5)
    {
        print ("<LI>Elemento $i</LI>\n");
        $i++;
    }
    print ("</UL>\n");
?>

<!-- Ejemplo estructura repetitiva for -->
<?PHP
    print ("<UL>\n");
    for ($i=1; $i<=5; $i++)
        print ("<LI>Elemento $i</LI>\n");
    print ("</UL>\n");
?>