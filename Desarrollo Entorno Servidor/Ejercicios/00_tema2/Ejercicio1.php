<?php
// Muestra los números múltiplos de 5 de un bucle de 0 a 100 utilizando while.

$numero = 0;                  // Igualamos a cero la variable 
while($numero <= 100){        // mientras número sea menor o igual a 100, repetimos bucle

    if($numero % 5 == 0){     // con el if, si el número es multiplo de 5 (es decir, resto 0 al dividir entre 5) 
        echo "$numero <br>";  // muestrame el numero
    }
    $numero ++ ;              // Al salir del if mientras while no sea mayor o igual a 100 suma 1 más y repite todo
}
?>