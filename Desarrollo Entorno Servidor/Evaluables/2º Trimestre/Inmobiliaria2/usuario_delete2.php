<?php
require("conexion.php");

// Recogemos el id
$usuario_id = isset($_REQUEST["usuario_id"]) ? trim(strip_tags($_REQUEST["usuario_id"])) : "";
$usuario_id = mysqli_real_escape_string($conexion, $usuario_id);

// Borrado
$sql = "DELETE FROM usuario WHERE usuario_id = $usuario_id";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Borrar usuario</title>
</head>

<body>

    <h1>Borrar usuario</h1>

    <?php
if (mysqli_query($conexion, $sql)) {
  echo "<p>Usuario borrado correctamente.</p>";
} else {
  echo "<p>Error al borrar: " . mysqli_error($conexion) . "</p>";
}

mysqli_close($conexion);
?>

    <a href="indice.php">Volver al menú</a>

</body>

</html>