<?php
// Aquí recogemos el formulario y hacemos el INSERT
require("conexion.php");

// Recogida básica como en apuntes: isset + trim + strip_tags
$nombres = isset($_REQUEST["nombres"]) ? trim(strip_tags($_REQUEST["nombres"])) : "";
$correo  = isset($_REQUEST["correo"])  ? trim(strip_tags($_REQUEST["correo"]))  : "";
$clave   = isset($_REQUEST["clave"])   ? trim(strip_tags($_REQUEST["clave"]))   : "";
$tipo    = isset($_REQUEST["tipo_usuario"]) ? trim(strip_tags($_REQUEST["tipo_usuario"])) : "";

// Protección para SQL
$nombres = mysqli_real_escape_string($conexion, $nombres);
$correo  = mysqli_real_escape_string($conexion, $correo);
$clave   = mysqli_real_escape_string($conexion, $clave);
$tipo    = mysqli_real_escape_string($conexion, $tipo);

// Insert
$sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario)
        VALUES ('$nombres', '$correo', '$clave', '$tipo')";

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Crear usuario</title>
</head>

<body>

    <h1>Crear usuario</h1>

    <?php
if (mysqli_query($conexion, $sql)) {
  echo "<p>Usuario creado correctamente.</p>";
} else {
  echo "<p>Error al crear usuario: " . mysqli_error($conexion) . "</p>";
}

mysqli_close($conexion);
?>

    <a href="indice.php">Volver al menú</a>

</body>

</html>