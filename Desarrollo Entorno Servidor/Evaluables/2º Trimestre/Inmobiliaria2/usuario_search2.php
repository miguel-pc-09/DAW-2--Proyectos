<!-- Resultado -->
<!DOCTYPE html>
<html>

<head>
    <title>Resultado búsqueda</title>
</head>

<body>
    <h1>Resultados</h1>

    <?php
  $conn = mysqli_connect('localhost', 'root', 'rootroot', 'inmobiliaria');

  if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
  }

  $texto = mysqli_real_escape_string($conn, $_POST['texto']);

  $sql = "SELECT usuario_id, nombres, correo, tipo_usuario
          FROM usuario
          WHERE nombres LIKE '%$texto%' OR correo LIKE '%$texto%'";

  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    echo "<ul>";
    while ($row = mysqli_fetch_assoc($result)) {
      echo "<li>ID: ".$row['usuario_id']." | ".$row['nombres']." | ".$row['correo']." | ".$row['tipo_usuario']."</li>";
    }
    echo "</ul>";
  } else {
    echo "No se encontraron usuarios.";
  }

  mysqli_close($conn);
  ?>

    <a href="indice.php">Volver al menú</a>
</body>

</html>