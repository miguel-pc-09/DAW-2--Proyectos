<?php
$conn = mysqli_connect('localhost', 'root', 'rootroot', 'inmobiliaria');

if (!$conn) {
  die("Conexión fallida: " . mysqli_connect_error());
}

$usuario_id = mysqli_real_escape_string($conn, $_POST['usuario_id']);

$sql = "DELETE FROM usuario WHERE usuario_id=$usuario_id";

if (mysqli_query($conn, $sql)) {
  echo "Usuario borrado correctamente.";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>

<br>
<a href="indice.php">Volver al menú</a>