<?php
$conn = mysqli_connect("localhost", "root", "rootroot", "inmobiliaria");

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$Codigo_piso = mysqli_real_escape_string($conn, $_POST["Codigo_piso"]);

$sql = "DELETE FROM pisos WHERE Codigo_piso=$Codigo_piso";

if (mysqli_query($conn, $sql)) {
    echo "Piso borrado correctamente.";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>

<br>
<a href="indice.php">Volver al menú</a>