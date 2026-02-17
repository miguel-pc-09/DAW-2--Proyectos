<?php
require("conexion.php");

// Código a borrar
$Codigo_piso = isset($_REQUEST["Codigo_piso"]) ? trim(strip_tags($_REQUEST["Codigo_piso"])) : "";
$Codigo_piso = mysqli_real_escape_string($conexion, $Codigo_piso);

// Delete
$sql = "DELETE FROM pisos WHERE Codigo_piso = $Codigo_piso";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Borrar piso</title>
</head>

<body>

    <h1>Borrar piso</h1>

    <?php
if (mysqli_query($conexion, $sql)) {
  echo "<p>Piso borrado correctamente.</p>";
} else {
  echo "<p>Error al borrar: " . mysqli_error($conexion) . "</p>";
}

mysqli_close($conexion);
?>

    <a href="indice.php">Volver al menú</a>

</body>

</html>