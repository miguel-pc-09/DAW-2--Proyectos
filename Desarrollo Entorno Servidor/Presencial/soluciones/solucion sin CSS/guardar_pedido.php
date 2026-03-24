<?php
$nombre = $_POST['nombre'];
$direccion = $_POST['direccion'];
$producto = $_POST['producto'];
$cantidad = $_POST['cantidad'];
$fecha = date('Y-m-d H:i:s');

$linea = "$nombre|$direccion|$producto|$cantidad|$fecha\n";

$archivo = fopen("pedidos.txt", "a");
if ($archivo) {
    fputs($archivo, $linea);
    fclose($archivo);
    echo "Pedido guardado correctamente.<br>";
    echo "<a href='pedido.php'>Hacer otro pedido</a> | ";
    echo "<a href='verificar.php'>Volver al menú</a>";
} else {
    echo "Error al guardar el pedido.";
}
?>