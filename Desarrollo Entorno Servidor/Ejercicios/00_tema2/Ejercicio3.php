<?php 
// Muestra la tabla de multiplicar de un número generado de manera aletoria entre 1 y 10. El resultado en formato <table>
$n = rand(1,10);                 // Genera un número aleatorio entre 1 y 10
echo "<table border='1'>";                 // Empieza la tabla
echo "<caption>Tabla del $n</caption>";    // Con caption ponemos Título con el número aleatorio encima de la tabla

for($i=1; $i<=10; $i++){                   // Bucle del 1 al 10 . No añadimos th para la cabecera. tr: creacion linea, td: columnas
  echo "<tr><td>$n</td><td>x</td><td>$i</td><td>=</td><td>".($n*$i)."</td></tr>";
}

echo "</table>";                           // Cierra la tabla

?>