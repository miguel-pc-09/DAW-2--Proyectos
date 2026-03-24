<?php
$precios = [
    'iphone' => 1000,
    'roomba' => 500,
    'reloj' => 100
];

// Si se envió el formulario, procesar
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cliente = trim($_POST['cliente']);
    
    $total = 0;
    $encontrado = false;
    
    $archivo = fopen("pedidos.txt", "r");
    if ($archivo) {
        while (!feof($archivo)) {
            $linea = fgets($archivo);
            if (!empty(trim($linea))) {
                $datos = explode("|", trim($linea));
                // Si no se especifica cliente o coincide
                if ($cliente == "" || $datos[0] == $cliente) {
                    $producto = $datos[2];
                    $cantidad = $datos[3];
                    if (isset($precios[$producto])) {
                        $total += $precios[$producto] * $cantidad;
                        $encontrado = true;
                    }
                }
            }
        }
        fclose($archivo);
    }
    
    if ($cliente != "" && !$encontrado) {
        echo "Error. No se encuentra el cliente '$cliente'.<br>";
    } else {
        if ($cliente == "") {
            echo "Total de todos los pedidos: $total €<br>";
        } else {
            echo "Total de pedidos de $cliente: $total €<br>";
        }
    }
}
?>

<h2>Calcular Precio</h2>
<form method="post">
    Cliente (dejar vacío para todos): <input type="text" name="cliente">
    <input type="submit" value="Calcular">
</form>
<br>
<a href="verificar.php">Volver al menú</a>