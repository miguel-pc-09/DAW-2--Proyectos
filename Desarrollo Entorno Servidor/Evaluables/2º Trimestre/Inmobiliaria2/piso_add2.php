<?php
require("conexion.php");

// Recogida de datos (apuntes)
$Codigo_piso = isset($_REQUEST["Codigo_piso"]) ? trim(strip_tags($_REQUEST["Codigo_piso"])) : "";
$calle       = isset($_REQUEST["calle"]) ? trim(strip_tags($_REQUEST["calle"])) : "";
$numero      = isset($_REQUEST["numero"]) ? trim(strip_tags($_REQUEST["numero"])) : "";
$piso        = isset($_REQUEST["piso"]) ? trim(strip_tags($_REQUEST["piso"])) : "";
$puerta      = isset($_REQUEST["puerta"]) ? trim(strip_tags($_REQUEST["puerta"])) : "";
$cp          = isset($_REQUEST["cp"]) ? trim(strip_tags($_REQUEST["cp"])) : "";
$metros      = isset($_REQUEST["metros"]) ? trim(strip_tags($_REQUEST["metros"])) : "";
$zona        = isset($_REQUEST["zona"]) ? trim(strip_tags($_REQUEST["zona"])) : "";
$precio      = isset($_REQUEST["precio"]) ? trim(strip_tags($_REQUEST["precio"])) : "";
$imagen      = isset($_REQUEST["imagen"]) ? trim(strip_tags($_REQUEST["imagen"])) : "";
$usuario_id  = isset($_REQUEST["usuario_id"]) ? trim(strip_tags($_REQUEST["usuario_id"])) : "";

// Escape para SQL
$Codigo_piso = mysqli_real_escape_string($conexion, $Codigo_piso);
$calle       = mysqli_real_escape_string($conexion, $calle);
$numero      = mysqli_real_escape_string($conexion, $numero);
$piso        = mysqli_real_escape_string($conexion, $piso);
$puerta      = mysqli_real_escape_string($conexion, $puerta);
$cp          = mysqli_real_escape_string($conexion, $cp);
$metros      = mysqli_real_escape_string($conexion, $metros);
$zona        = mysqli_real_escape_string($conexion, $zona);
$precio      = mysqli_real_escape_string($conexion, $precio);
$imagen      = mysqli_real_escape_string($conexion, $imagen);
$usuario_id  = mysqli_real_escape_string($conexion, $usuario_id);

// Insert
$sql = "INSERT INTO pisos
(Codigo_piso, calle, numero, piso, puerta, cp, metros, zona, precio, imagen, usuario_id)
VALUES
('$Codigo_piso','$calle','$numero','$piso','$puerta','$cp','$metros','$zona','$precio','$imagen','$usuario_id')";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Crear piso</title>
</head>

<body>

    <h1>Crear piso</h1>

    <?php
if (mysqli_query($conexion, $sql)) {
  echo "<p>Piso añadido correctamente.</p>";
} else {
  echo "<p>Error al añadir piso: " . mysqli_error($conexion) . "</p>";
}

mysqli_close($conexion);
?>

    <a href="indice.php">Volver al menú</a>

</body>

</html>