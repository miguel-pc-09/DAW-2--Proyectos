<!-- usuario_delete1.php -->
<!DOCTYPE html>
<html>

<head>
    <title>Borrar usuario</title>
</head>

<body>
    <h1>Borrar usuario</h1>

    <form method="post" action="usuario_delete2.php">
        <label>ID del usuario:</label>
        <input type="number" name="usuario_id" required>
        <input type="submit" value="Borrar">
    </form>

    <a href="indice.php">Volver al menú</a>
</body>

</html>