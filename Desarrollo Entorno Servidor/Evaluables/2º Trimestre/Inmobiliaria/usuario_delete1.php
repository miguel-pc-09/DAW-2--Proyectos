<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Borrar usuario</title>
</head>

<body>

    <h1>Borrar usuario</h1>

    <form method="post" action="usuario_delete2.php">
        <label>ID del usuario:</label><br>
        <input type="number" name="usuario_id" required>
        <input type="submit" value="Borrar">
    </form>

    <br>
    <a href="indice.php">Volver al menú</a>

</body>

</html>