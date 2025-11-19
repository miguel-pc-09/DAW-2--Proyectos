<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio2</title>
</head>

<body>
    <?php

    echo "<h2>Juego de dados</h2>";

        // ---------- Jugador 1 ----------
    echo "<h3>Jugador 1</h3>\n";
    $total1 = 0;                        // acumulador de J1
    for ($i = 0; $i < 5; $i++) {        // 5 dados
        $dado = rand(1, 6);
        echo "<img src='./img/$dado.jpg' width='100' height='100'>\n";
        $total1 += $dado;               // total1 = total1 + dado
    }
    echo "<p>Total de puntos jugador 1: $total1</p>\n";

        // ---------- Jugador 2 ----------
    echo "<h3>Jugador 2</h3>\n";
    $total2 = 0;                        // acumulador de J2
    for ($i = 0; $i < 5; $i++) {
        $dado = rand(1, 6);
        echo "<img src='./img/$dado.jpg' width='100' height='100'>\n";
        $total2 += $dado;
    }
    echo "<p>Total de puntos jugador 2: $total2</p>\n";

        // ---------- Resultado ----------
    echo "<h3>Resultado</h3>\n";
    if ($total1 > $total2) {
        echo "Ha ganado el jugador 1.</br>";
    
    } elseif ($total2 > $total1) {
        echo "Ha ganado el jugador 2.</br>";
   
    } else {
        echo "Empate.";
    
    }
    ?>
</body>

</html>