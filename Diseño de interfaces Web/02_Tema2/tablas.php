<!-- Sintaxis:
array ([clave =>] valor, ...)
▪ La clave es una cadena o un entero no negativo. El valor
puede ser de cualquier tipo válido en PHP, incluyendo otro array
▪ Ejemplos: -->
<?php 
$color = array ('rojo'=>101, 'verde'=>51, 'azul'=>255);
$medidas = array (10, 25, 15);
?>

<!-- Acceso: -->
<?php 
 $color['rojo']; // No olvidar las comillas
$medidas[0];
?>
<!-- El primer elemento es el 0 -->


<!-- La estructura de control foreach permite iterar sobre arrays
▪ Sintaxis:

    foreach (expresión_array as $valor)
        sentencia

    foreach (expresión_array as $clave => $valor)
        sentencia
▪ Ejemplos: -->
<?php 
    foreach ($color as $valor)
        print "Valor: $valor<BR>\n";
    foreach ($color as $clave => $valor)
        print "Clave: $clave; Valor: $valor<BR>\n";
?>
<!-- Salida:
Valor: 101
Valor: 51
Valor: 255
Clave: rojo; Valor: 101
Clave: verde; Valor: 51
Clave: azul; Valor: 255 -->

<!-- Funciones de manipulación de cadenas
▪ explode()
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
    • Calcula la longitud de una cadena -->



<!-- Funciones de fecha y hora
▪ date()
    • Formatea una fecha según un formato dado
    • Ejemplo: -->
<?php 
    $fecha = date ("j/n/Y H:i");
    print ("$fecha");
    // Resultado:
    // 26/9/2024 17:36
    ?>

<!-- strtotime()
• Convierte una fecha en un timestamp de UNIX
• Ejemplo: -->
<?php 
    $fecha = date ("j/n/Y", strtotime("5 october 2024"));
    print ("$fecha");
    // Resultado:
    //5/10/2024
?>

<!-- Funciones de arrays
▪ array_count_values()
    • Calcula la frecuencia de cada uno de los elementos de un array
▪ array_search()
    • Busca un elemento en un array
▪ count()
    • Cuenta los elementos de un array
▪ sort(), rsort()
    • Ordena y reindexa un array (r=decreciente)
▪ ksort(), krsort()
    • Ordena por claves un array (r=decreciente) -->