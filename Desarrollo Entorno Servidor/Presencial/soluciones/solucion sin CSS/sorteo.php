<?php
// Contar pedidos
$numPedidos = 0;
$archivo = fopen("pedidos.txt", "r");
if ($archivo) {
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        if (!empty(trim($linea))) {
            $numPedidos++;
        }
    }
    fclose($archivo);
}

if ($numPedidos == 0) {
    echo "No hay pedidos para sortear.<br>";
} else {
    // Generar número aleatorio entre 1 y $numPedidos
    $ganador = rand(1, $numPedidos);
    
    // Leer el pedido ganador
    $contador = 0;
    $archivo = fopen("pedidos.txt", "r");
    if ($archivo) {
        while (!feof($archivo)) {
            $linea = fgets($archivo);
            if (!empty(trim($linea))) {
                $contador++;
                if ($contador == $ganador) {
                    $datos = explode("|", trim($linea));
                    $nombreGanador = $datos[0];
                    break;
                }
            }
        }
        fclose($archivo);
    }
    
    echo "Número de pedidos: $numPedidos<br>";
    echo "Número aleatorio generado: $ganador<br>";
    echo "El ganador del sorteo es: $nombreGanador<br>";
}
?>
<br>
<a href="verificar.php">Volver al menú</a>