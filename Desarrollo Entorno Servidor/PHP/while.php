<?php

$i = 0; //Inializamos la variable en 0
while($i<=10) {
	$i++; //Aumentamos $i en uno
	echo "i ahora equivale a ".$i."</br> "; //Mostramos texto
}
echo "Fin del bucle while. El bucle while terminó en ".$i."";

$numero = 5; //ejemplo de factorial de numero 5
$factorial = 1;
while ( $numero > 1 ) {
   $factorial = $factorial * $numero;
   $numero = $numero - 1;
}
echo ' El factorial de ' . $numero . ' es ' . $factorial;
?>