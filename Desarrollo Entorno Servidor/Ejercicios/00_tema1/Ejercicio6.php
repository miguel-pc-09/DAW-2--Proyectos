<?php 
// Un programa que genere 2 tiradas de 3 dados(simulando 2 jugadores). 
// Muestre las dos tiradas y me diga cual tiene mayor puntuación(sumando las tiradas)
$dado1 = rand (1, 6);
$dado2 = rand (1, 6);
print "<p> El jugador 1 a sacado $dado1.</p>\n";
print "<p> El jugador 2 a sacado $dado2. </p>\n"; 
 
    if ($dado1 > $dado2){
    print "<p>¡EL jugador 1 gana!, saco más que el jugador 2.</p>\n";
}
else{
    print "<p>¡El jugador 2 gano!, saco más que el jugador 1.</p>\n";
}
if($dado1 == $dado2){
    print "<p>Los dos jugadores empatan</p>";
}

// Me queda meter las imagenes, 
?>