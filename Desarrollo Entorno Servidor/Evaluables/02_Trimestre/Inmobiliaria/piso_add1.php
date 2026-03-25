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

        <label>Imagen:</label><br>

        <select name="imagen" required>
            <option value="">-- Selecciona una imagen --</option>
            <option value="img/1.jpg">1.jpg</option>
            <option value="img/2.avif">2.avif</option>
            <option value="img/3.webp">3.webp</option>
            <option value="img/4.webp">4.webp</option>
            <option value="img/5.jpg">5.jpg</option>
            <option value="img/6.jpg">6.jpg</option>
            <option value="img/7.jpg">7.jpg</option>
            <option value="img/8.jpeg">8.jpeg</option>
            <option value="img/9.avif">9.avif</option>
            <option value="img/10.avif">10.avif</option>
        </select>

        <br><br>

        <label>ID usuario (vendedor):</label><br>
        <input type="number" name="usuario_id" required><br><br>

        <input type="submit" value="Crear piso">

    </form>

    <br>
    <a href="indice.php">Volver al menú</a>

</body>

</html>