<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Resultado búsqueda pisos</title>
</head>

<body>

    <h1>Resultados de pisos</h1>

    <?php
$conn = mysqli_connect("localhost", "root", "rootroot", "inmobiliaria");

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$texto = mysqli_real_escape_string($conn, $_POST["texto"]);

$sql = "SELECT Codigo_piso, calle, numero, piso, puerta, cp, metros, zona, precio, imagen, usuario_id
        FROM pisos
        WHERE calle LIKE '%$texto%'
           OR zona LIKE '%$texto%'
           OR cp LIKE '%$texto%'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {

    echo "<table border='1'>";
    echo "<tr>
            <th>Código</th>
            <th>Calle</th>
            <th>Número</th>
            <th>Piso</th>
            <th>Puerta</th>
            <th>CP</th>
            <th>Metros</th>
            <th>Zona</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Usuario ID</th>
          </tr>";

    while ($fila = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>".$fila["Codigo_piso"]."</td>";
        echo "<td>".$fila["calle"]."</td>";
        echo "<td>".$fila["numero"]."</td>";
        echo "<td>".$fila["piso"]."</td>";
        echo "<td>".$fila["puerta"]."</td>";
        echo "<td>".$fila["cp"]."</td>";
        echo "<td>".$fila["metros"]."</td>";
        echo "<td>".$fila["zona"]."</td>";
        echo "<td>".$fila["precio"]."</td>";
        echo "<td>".$fila["imagen"]."</td>";
        echo "<td>".$fila["usuario_id"]."</td>";
        echo "</tr>";
    }

    echo "</table>";

} else {
    echo "<p>No se encontraron pisos.</p>";
}

mysqli_close($conn);
?>

    <br>
    <a href="indice.php">Volver al menú</a>

</body>

</html>