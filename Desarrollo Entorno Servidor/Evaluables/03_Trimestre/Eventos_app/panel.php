<?php
session_start();

// Si no hay usuario en sesión, no puede entrar al panel
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}

// Guardo el nombre del usuario para mostrarlo luego en pantalla
$usuario = $_SESSION['usuario'];

// Esta variable la uso en la cabecera para las rutas
$rutaBase = "";
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <!-- Hace la web responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Panel principal</title>

    <!-- Favicon de la web -->
    <link rel="icon" type="image/png" href="img/Favicon.png">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

    <!-- Mi css -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="fondo-app">

    <?php include("includes/cabecera.php"); ?>

    <div class="container contenedor-principal">

        <?php
        // Aquí saludo al usuario que ha iniciado sesión
        echo "<h1 class='titulo-bienvenida'>Bienvenido, " . htmlspecialchars($usuario) . "</h1>";
        ?>

        <div class="row justify-content-center g-4 fila-paneles">

            <!-- Tarjeta para ir al listado -->
            <div class="col-md-5 col-lg-4">
                <div class="card p-4 tarjeta-app h-100">
                    <h3>Listar eventos</h3>
                    <p>Ver todos los eventos guardados en la base de datos.</p>
                    <a href="eventos/listar.php" class="btn btn-primary">Ir</a>
                </div>
            </div>

            <!-- Tarjeta para crear evento -->
            <div class="col-md-5 col-lg-4">
                <div class="card p-4 tarjeta-app h-100">
                    <h3>Crear evento</h3>
                    <p>Añadir un nuevo evento tecnológico.</p>
                    <a href="eventos/crear.php" class="btn btn-primary">Ir</a>
                </div>
            </div>

        </div>
    </div>

    <?php include("includes/pie.php"); ?>

</body>

</html>