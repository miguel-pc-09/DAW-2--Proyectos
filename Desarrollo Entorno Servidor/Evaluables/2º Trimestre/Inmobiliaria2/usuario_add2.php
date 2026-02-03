<!-- INSERT -->
<?php
$conn = mysqli_connect('localhost', 'root', 'rootroot', 'inmobiliaria');

if (!$conn) {
  die("Conexión fallida: " . mysqli_connect_error());
}

$nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
$correo = mysqli_real_escape_string($conn, $_POST['correo']);
$clave = mysqli_real_escape_string($conn, $_POST['clave']);
$tipo_usuario = mysqli_real_escape_string($conn, $_POST['tipo_usuario']);

$sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario)
        VALUES ('$nombres', '$correo', '$clave', '$tipo_usuario')";

if (mysqli_query($conn, $sql)) {
  echo "Usuario creado correctamente.";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>

<br>
<a href="indice.php">Volver al menú</a>