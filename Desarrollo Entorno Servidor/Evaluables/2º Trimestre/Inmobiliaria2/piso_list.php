<?php
$conn = mysqli_connect('localhost', 'root', 'rootroot', 'inmobiliaria');
if (!$conn) {
    die("Error conexión");
}

$sql = "SELECT * FROM pisos";
$result = mysqli_query($conn, $sql);
?>

<h1>Listado de pisos</h1>

<table border="1">
    <tr>
        <th>Código</th>
        <th>Calle</th>
        <th>Número</th>
        <th>Piso</th>
        <th>Precio</th>
    </tr>

    <?php
while ($fila = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>".$fila['Codigo_piso']."</td>";
    echo "<td>".$fila['calle']."</td>";
    echo "<td>".$fila['numero']."</td>";
    echo "<td>".$fila['piso']."</td>";
    echo "<td>".$fila['precio']."</td>";
    echo "</tr>";
}
?>

</table>

<br>
<a href="indice.php">Volver al menú</a>