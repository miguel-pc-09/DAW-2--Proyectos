<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Alta usuario</title>
</head>

<body>

    <h1>Alta usuario</h1>

    <!-- Formulario para crear un usuario -->
    <form method="post" action="usuario_add2.php">
        <label>Nombre:</label><br>
        <input type="text" name="nombres" required><br><br>

        <label>Correo:</label><br>
        <input type="email" name="correo" required><br><br>

        <label>Clave:</label><br>
        <input type="text" name="clave" required><br><br>

        <label>Tipo usuario:</label><br>
        <select name="tipo_usuario" required>
            <option value="administrador">administrador</option>
            <option value="comprador">comprador</option>
            <option value="vendedor">vendedor</option>
        </select><br><br>

        <input type="submit" value="Crear usuario">
    </form>

    <br>
    <a href="indice.php">Volver al menú</a>

</body>

</html>