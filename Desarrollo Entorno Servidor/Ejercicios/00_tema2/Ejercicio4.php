<?php
// Realiza un programa que nos diga cuántos dígitos tiene un número aleatorio (0 y 9999). Mostrar el número y la cantidad de digitos.
$numero = rand(0, 9999);
// $digitos = strlen((string)$numero); // (string)$numero → convierte el número en texto para poder contar sus caracteres. Igualmente se podria usar el siguiente formato
$digitos = strlen($numero);  // funciona igualmente, solo que se puede especificar para futuros errores. 
echo "El número generado es: $numero <br>"; // strlen() → devuelve la longitud de esa cadena, es decir, cuántos dígitos tiene.
echo " tiene $digitos dígitos";
?>