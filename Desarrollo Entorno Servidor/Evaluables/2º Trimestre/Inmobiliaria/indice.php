<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Inmobiliaria - Menú</title>
</head>

<body>
    <h1>Inmobiliaria - Menú principal</h1>

    <!-- Parte backend (administración) -->
    <h2>Usuarios</h2>
    <ul>
        <li><a href="usuario_add1.php">Alta usuario</a></li>
        <li><a href="usuario_list.php">Listar usuarios</a></li>
        <li><a href="usuario_search1.php">Buscar usuario</a></li>
        <li><a href="usuario_delete1.php">Borrar usuario</a></li>
    </ul>

    <h2>Pisos</h2>
    <ul>
        <li><a href="piso_add1.php">Alta piso</a></li>
        <li><a href="piso_list.php">Listar pisos</a></li>
        <li><a href="piso_search1.php">Buscar piso</a></li>
        <li><a href="piso_delete.php">Borrar piso</a></li>
    </ul>

    <hr>

    <!-- Parte pública (sin login) -->
    <h2>Zona pública</h2>
    <p>Cualquiera puede consultar pisos:</p>
    <ul>
        <li><a href="piso_list.php">Ver pisos</a></li>
        <li><a href="piso_search1.php">Buscar pisos</a></li>
    </ul>

</body>

</html>