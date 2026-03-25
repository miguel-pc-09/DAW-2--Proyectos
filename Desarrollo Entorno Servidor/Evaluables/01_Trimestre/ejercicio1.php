<?php 
// Ejercicio 1. Realizar un programa PHP que generé 2 números aleatorios (entre 5 y 15) y me dibujé un rectángulo de asteriscos como se puesta en la figura:
echo "<h1>Generacion de rectangulos gracias a números aleatorios. </h1>";

$filas = rand(5, 15);     // número aleatorio de filas 
$columnas = rand(5,15);   // número aleatorio de columnas



// utilizamos 2 for para que genere el rectangulo dependiendo de los numeros aleatorios que saque
echo "Alto: $filas <br>";
echo "Ancho: $columnas <br>";

for ($i=0; $i < $filas; $i++) {             // bucle para filas
    for ($j=0; $j < $columnas;  $j++) {     // bucle para columnas
        echo " * ";                 // añade asteriscos
    }
    echo"<br>";    // salto de linea al terminar
}


?>