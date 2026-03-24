<?php
echo "<h2>Lista de Pedidos</h2>";

$archivo = fopen("pedidos.txt", "r");
if ($archivo) {
    echo "<table border='1'>";
    echo "<tr><th>Nombre</th><th>Dirección</th><th>Producto</th><th>Cantidad</th><th>Fecha</th></tr>";
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        if (!empty(trim($linea))) {
            $datos = explode("|", trim($linea));
            echo "<tr>";
            echo "<td>" . $datos[0] . "</td>";
            echo "<td>" . $datos[1] . "</td>";
            echo "<td>" . $datos[2] . "</td>";
            echo "<td>" . $datos[3] . "</td>";
            echo "<td>" . $datos[4] . "</td>";
            echo "</tr>";
        }
    }
    echo "</table>";
    fclose($archivo);
} else {
    echo "No hay pedidos registrados.";
}
?>
<br>
<a href="verificar.php">Volver al menú</a>