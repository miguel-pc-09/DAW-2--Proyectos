<?php
require("conexion.php");

$sql = "SELECT usuario_id, nombres, correo, tipo_usuario FROM usuario ORDER BY usuario_id DESC";
$result = mysqli_query($conexion, $sql);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Listar usuarios</title>
</head>

<body>

    <h1>Lista de usuarios</h1>

    <?php
if ($result && mysqli_num_rows($result) > 0) {
  echo "<table border='1' cellpadding='6'>";
  echo "<tr><th>ID</th><th>Nombre</th><th>Correo</th><th>Tipo</th></tr>";

  while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>" . $row["usuario_id"] . "</td>";
    echo "<td>" . $row["nombres"] . "</td>";
    echo "<td>" . $row["correo"] . "</td>";
    echo "<td>" . $row["tipo_usuario"] . "</td>";
    echo "</tr>";
  }

  echo "</table>";
} else {
  echo "<p>No hay usuarios.</p>";
}

mysqli_close($conexion);
?>

    <br>
    <a href="indice.php">Volver al menú</a>

</body>

</html>