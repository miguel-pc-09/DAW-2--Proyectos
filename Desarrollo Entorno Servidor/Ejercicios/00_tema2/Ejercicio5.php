<?php 
// Escribe un programa que muestre en tres columnas: 
// Numero -  cuadrado -  cubo
// De 5 numeros aletorios entre 5 y 20.
echo "<table border='1' cellpadding='5'>";
// th : es para el encabezado que suele ir por defecto en negrita. 
echo "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

// <table>, <tr>, <td> crean una tabla HTML con 3 columnas.

for ($i = 1; $i <= 5; $i++) {
    $num = rand(5, 20);    // rand(5, 20) → genera un número aleatorio entre 5 y 20.
    $cuadrado = $num ** 2;           // número al cuadrado
    $cubo = $num ** 3;               // número al cubo

     // tr : filas (table row), y dentro van
          // td: celda de datos (contenido)
    echo "<tr>                      
            <td>$num</td>
            <td>$cuadrado</td>
            <td>$cubo</td>
          </tr>";
}

echo "</table>";
?>