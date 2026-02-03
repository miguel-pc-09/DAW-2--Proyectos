<!-- formulario -->
<!DOCTYPE html>
<html>

<head>
    <title>Alta usuario</title>
</head>

<body>
    <h1>Alta usuario</h1>

    <form method="post" action="usuario_add2.php">
        <label>Nombre:</label>
        <input type="text" name="nombres" required><br><br>

        <label>Correo:</label>
        <input type="email" name="correo" required><br><br>

        <label>Clave:</label>
        <input type="text" name="clave" required><br><br>

        <label>Tipo usuario:</label>
        <select name="tipo_usuario" required>
            <option value="administrador">administrador</option>
            <option value="comprador">comprador</option>
            <option value="vendedor">vendedor</option>
        </select><br><br>

        <input type="submit" value="Crear usuario">
    </form>

    <a href="indice.php">Volver al menú</a>
</body>

</html>