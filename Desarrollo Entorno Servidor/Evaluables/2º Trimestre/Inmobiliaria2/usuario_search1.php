<!-- form para buscar por nombres o correos -->
<!DOCTYPE html>
<html>

<head>
    <title>Buscar usuario</title>
</head>

<body>
    <h1>Buscar usuario</h1>

    <form method="post" action="usuario_search2.php">
        <label>Buscar (nombre o correo):</label>
        <input type="text" name="texto" required>
        <input type="submit" value="Buscar">
    </form>

    <a href="indice.php">Volver al menú</a>
</body>

</html>