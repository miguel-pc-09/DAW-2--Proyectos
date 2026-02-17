<?php
require("conexion.php");

// Texto a buscar
$texto = isset($_REQUEST["texto"]) ? trim(strip_tags($_REQUEST["texto"])) : "";
$texto = mysqli_real_escape_string($conexion, $texto);

// Consulta
$sql = "SELECT Codigo_piso, calle, numero, piso, puerta, cp, metros, zona, precio, imagen, usuario_id
        FROM pisos
        WHERE calle LIKE '%$texto%' OR zona LIKE '%$texto%' OR cp LIKE '%$texto%'
        ORDER BY Codigo_piso DESC";

$result = mysqli_query($conexion, $sql);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Resultado búsqueda pisos</title>
</head>

<body>

    <h1>Resultados de búsqueda</h1>

    <?php
if ($result && mysqli_num_rows($result) > 0) {

  echo "<table border='1' cellpadding='6'>";
  echo "<tr>
          <th>Código</th><th>Calle</th><th>Número</th><th>Piso</th><th>Puerta</th>
          <th>CP</th><th>Metros</th><th>Zona</th><th>Precio</th><th>Imagen</th><th>ID usuario</th>
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

mysqli_close($conexion);
?>

    <br>
    <a href="indice.php">Volver al menú</a>

</body>

</html>