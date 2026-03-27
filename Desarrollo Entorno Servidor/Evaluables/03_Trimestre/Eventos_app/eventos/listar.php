<?php
session_start();

// Si no hay sesión iniciada, lo mando al login
if (!isset($_SESSION['usuario'])) {
    header("Location: ../login.php");
    exit();
}

// Incluyo la conexión a la base de datos
include("../includes/conexion.php");

// Hago la consulta para sacar todos los eventos, ordenados por fecha de más próxima a más lejana
$consulta = "SELECT * FROM eventos ORDER BY fecha ASC";
$resultado = mysqli_query($conexion, $consulta);


// Esta variable la uso para ajustar las rutas dependiendo de desde qué carpeta llamo a la cabecera
$rutaBase = "../";
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <!-- Hace que la web se adapte mejor a móvil, tablet y ordenador -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Listar eventos</title>

    <!-- Cargo Bootstrap para usar sus clases y dar mejor diseño -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- Cargo el JS de Bootstrap por si uso componentes interactivos -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

    <!-- Enlazo mi css propio -->
    <link rel="stylesheet" href="../css/style.css">

    <!-- Pongo el favicon de la web -->
    <link rel="icon" type="image/png" href="../img/Favicon.png">
</head>

<body class="fondo-app">

    <?php include("../includes/cabecera.php"); ?>

    <div class="container mt-5 contenedor-principal">
        <h1 class="titulo-pagina">Listado de eventos</h1>

        <?php
        // Si vengo con un mensaje por la URL, lo muestro arriba
        if (isset($_GET['mensaje'])) {
            if ($_GET['mensaje'] == "eliminado") {
                echo "<div class='alert alert-success'>Evento eliminado correctamente</div>";
            }

            if ($_GET['mensaje'] == "creado") {
                echo "<div class='alert alert-success'>Evento creado correctamente</div>";
            }

            if ($_GET['mensaje'] == "actualizado") {
                echo "<div class='alert alert-success'>Evento actualizado correctamente</div>";
            }
        }
        ?>

        <!-- Botón para ir al formulario de crear evento -->
        <a href="crear.php" class="btn btn-success mb-3">Añadir nuevo evento</a>

        <!-- Con table-responsive hago que la tabla se adapte mejor en pantallas pequeñas -->
        <div class="table-responsive">
            <!-- Uso clases de Bootstrap para que la tabla quede más clara y ordenada -->
            <table class="table table-bordered table-striped table-hover align-middle tabla-app">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>

                    <!-- Le pongo text-nowrap para que el texto no se parta en varias líneas -->
                    <th class="text-nowrap">Fecha</th>

                    <th>Descripción</th>
                    <th>Lugar</th>
                    <th>Capacidad</th>
                    <th>Acciones</th>
                </tr>

                <?php
                // Si hay eventos en la base de datos, los recorro uno a uno
                if (mysqli_num_rows($resultado) > 0) {
                    while ($fila = mysqli_fetch_assoc($resultado)) {
                        echo "<tr>";
                        echo "<td>" . $fila['id'] . "</td>";
                        echo "<td>" . htmlspecialchars($fila['nombre']) . "</td>";

                        // Formateo la fecha para que se vea mejor y le pongo text-nowrap para que no se corte
                        echo "<td class='text-nowrap'>" . date("d/m/Y", strtotime($fila['fecha'])) . "</td>";

                        echo "<td>" . htmlspecialchars($fila['descripcion']) . "</td>";
                        echo "<td>" . htmlspecialchars($fila['lugar']) . "</td>";
                        echo "<td>" . htmlspecialchars($fila['capacidad']) . "</td>";

                        // En esta columna pongo los botones de editar y eliminar
                        echo "<td class='acciones text-nowrap'>";

                        // El me-2 es una clase de Bootstrap que deja un pequeño espacio a la derecha
                        echo "<a href='editar.php?id=" . $fila['id'] . "' class='btn btn-warning btn-sm me-2'>Editar</a>";

                        // Este botón elimina el evento y antes pregunta si estoy seguro
                        echo "<a href='eliminar.php?id=" . $fila['id'] . "' class='btn btn-danger btn-sm' onclick='return confirm(\"¿Seguro que quieres eliminar este evento?\")'>Eliminar</a>";

                        echo "</td>";
                        echo "</tr>";
                    }
                } else {
                    // Si no hay registros, muestro este mensaje en la tabla
                    echo "<tr><td colspan='7'>No hay eventos</td></tr>";
                }
                ?>
            </table>
        </div>
    </div>

    <?php include("../includes/pie.php"); ?>

    <?php
    // Cierro la conexión al final porque en esta página he usado la base de datos
    mysqli_close($conexion);
    ?>

</body>

</html>