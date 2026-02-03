<?php
$conn = mysqli_connect("localhost", "root", "rootroot", "inmobiliaria");

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$Codigo_piso = mysqli_real_escape_string($conn, $_POST["Codigo_piso"]);
$calle       = mysqli_real_escape_string($conn, $_POST["calle"]);
$numero      = mysqli_real_escape_string($conn, $_POST["numero"]);
$piso        = mysqli_real_escape_string($conn, $_POST["piso"]);
$puerta      = mysqli_real_escape_string($conn, $_POST["puerta"]);
$cp          = mysqli_real_escape_string($conn, $_POST["cp"]);
$metros      = mysqli_real_escape_string($conn, $_POST["metros"]);
$zona        = mysqli_real_escape_string($conn, $_POST["zona"]);
$precio      = mysqli_real_escape_string($conn, $_POST["precio"]);
$imagen      = mysqli_real_escape_string($conn, $_POST["imagen"]);
$usuario_id  = mysqli_real_escape_string($conn, $_POST["usuario_id"]);

$sql = "
INSERT INTO pisos 
(Codigo_piso, calle, numero, piso, puerta, cp, metros, zona, precio, imagen, usuario_id)
VALUES
('$Codigo_piso','$calle','$numero','$piso','$puerta','$cp','$metros','$zona','$precio','$imagen','$usuario_id')
";

if (mysqli_query($conn, $sql)) {
    echo "Piso añadido correctamente.";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>

<br>
<a href="indice.php">Volver al menú</a>