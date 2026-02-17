<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Alta piso</title>
</head>

<body>

    <h1>Alta piso</h1>

    <form method="post" action="piso_add2.php">

        <label>Código piso:</label><br>
        <input type="number" name="Codigo_piso" required><br><br>

        <label>Calle:</label><br>
        <input type="text" name="calle" required><br><br>

        <label>Número:</label><br>
        <input type="number" name="numero" required><br><br>

        <label>Piso:</label><br>
        <input type="number" name="piso" required><br><br>

        <label>Puerta:</label><br>
        <input type="text" name="puerta" required><br><br>

        <label>CP:</label><br>
        <input type="number" name="cp" required><br><br>

        <label>Metros:</label><br>
        <input type="number" name="metros" required><br><br>

        <label>Zona:</label><br>
        <input type="text" name="zona"><br><br>

        <label>Precio:</label><br>
        <input type="number" step="0.01" name="precio" required><br><br>

        <label>Imagen (nombre o ruta):</label><br>
        <input type="text" name="imagen" required><br><br>

        <label>ID usuario (vendedor):</label><br>
        <input type="number" name="usuario_id" required><br><br>

        <input type="submit" value="Crear piso">

    </form>

    <br>
    <a href="indice.php">Volver al menú</a>

</body>

</html>