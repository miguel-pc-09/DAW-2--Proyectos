<?php
session_start();

// Si el usuario no ha iniciado sesión, no puede entrar aquí
if (!isset($_SESSION['usuario'])) {
    header("Location: ../login.php");
    exit();
}

// Incluyo la conexión
include("../includes/conexion.php");

// Esta variable me sirve para mostrar mensajes al usuario
$mensaje = "";

// Preparo variables para que el formulario no pierda los datos si hay error
$nombre = "";
$fecha = "";
$descripcion = "";
$lugar = "";
$capacidad = "";

// Compruebo si han llegado los datos del formulario
if (isset($_POST['nombre']) && isset($_POST['fecha']) && isset($_POST['descripcion']) && isset($_POST['lugar']) && isset($_POST['capacidad'])) {

    // Recojo y limpio los datos del formulario
    $nombre = trim($_POST['nombre']);
    $fecha = trim($_POST['fecha']);
    $descripcion = trim($_POST['descripcion']);
    $lugar = trim($_POST['lugar']);
    $capacidad = trim($_POST['capacidad']);

    // Compruebo que los campos obligatorios no estén vacíos
    if ($nombre == "" || $fecha == "") {
        $mensaje = "El nombre y la fecha son obligatorios";
    } else {

        // Hago la consulta para insertar el nuevo evento
        $consulta = "INSERT INTO eventos (nombre, fecha, descripcion, lugar, capacidad)
                     VALUES (?, ?, ?, ?, ?)";

        $sentencia = mysqli_prepare($conexion, $consulta);

        if ($sentencia) {
            mysqli_stmt_bind_param($sentencia, "ssssi", $nombre, $fecha, $descripcion, $lugar, $capacidad);

            // Si se guarda bien, cierro conexión y vuelvo al listado con mensaje
            if (mysqli_stmt_execute($sentencia)) {
                mysqli_stmt_close($sentencia);
                mysqli_close($conexion);
                header("Location: listar.php?mensaje=creado");
                exit();
            } else {
                $mensaje = "Error al añadir el evento";
            }

            mysqli_stmt_close($sentencia);
        } else {
            $mensaje = "Error al preparar la consulta";
        }
    }
}

// Esta variable la uso para ajustar las rutas dependiendo de desde qué carpeta llamo a la cabecera
// Si estoy dentro de una carpeta (como paginas), necesito "../" para subir un nivel
$rutaBase = "../";
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <!-- Hace que la web se adapte mejor a móvil, tablet y ordenador -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Crear evento</title>

    <!-- Cargo Bootstrap para aprovechar sus clases de diseño -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- Cargo el JS de Bootstrap por si algún componente lo necesita -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

    <!-- Enlazo mi css propio -->
    <link rel="stylesheet" href="../css/style.css">

    <!-- Pongo el icono de la pestaña -->
    <link rel="icon" type="image/png" href="../img/Favicon.png">
</head>

<body class="fondo-app">

    <?php include("../includes/cabecera.php"); ?>

    <div class="container mt-5 contenedor-principal">
        <h1 class="titulo-pagina">Añadir evento</h1>

        <?php
        // Si tengo algún mensaje, lo muestro arriba del formulario
        if ($mensaje != "") {
            echo "<div class='alert alert-info'>$mensaje</div>";
        }
        ?>

        <!-- Esta tarjeta la uso para que el formulario quede más recogido y ordenado -->
        <div class="card shadow-sm p-4 tarjeta-app">
            <form method="POST" action="">

                <!-- Agrupo nombre y fecha en una fila para que quede más bonito con Bootstrap -->
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="nombre" class="form-label">Nombre del evento</label>

                        <!-- Muestro el valor anterior por si hubo error y no tener que escribirlo otra vez -->
                        <input type="text" id="nombre" name="nombre" class="form-control"
                            placeholder="Ejemplo: Hackathon de Desarrollo Web"
                            value="<?php echo htmlspecialchars($nombre); ?>" required>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="fecha" class="form-label">Fecha</label>

                        <input type="date" id="fecha" name="fecha" class="form-control"
                            value="<?php echo htmlspecialchars($fecha); ?>" required>
                    </div>
                </div>

                <!-- La descripción la dejo ocupando todo el ancho -->
                <div class="mb-3">
                    <label for="descripcion" class="form-label">Descripción</label>

                    <textarea id="descripcion" name="descripcion" class="form-control" rows="4"
                        placeholder="Escribe una breve descripción del evento"><?php echo htmlspecialchars($descripcion); ?></textarea>
                </div>

                <!-- Agrupo lugar y capacidad en otra fila para aprovechar Bootstrap -->
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="lugar" class="form-label">Lugar</label>

                        <input type="text" id="lugar" name="lugar" class="form-control"
                            placeholder="Ejemplo: Centro Tecnológico" value="<?php echo htmlspecialchars($lugar); ?>">
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="capacidad" class="form-label">Capacidad</label>

                        <input type="number" id="capacidad" name="capacidad" class="form-control"
                            placeholder="Ejemplo: 80" min="1" value="<?php echo htmlspecialchars($capacidad); ?>">
                    </div>
                </div>

                <!-- Aquí dejo los botones con un poco de separación -->
                <div class="d-flex gap-2 mt-3">
                    <button type="submit" class="btn btn-success">Guardar evento</button>
                    <a href="listar.php" class="btn btn-secondary">Volver</a>
                </div>
            </form>
        </div>
    </div>

    <?php include("../includes/pie.php"); ?>

    <?php
    // Cierro la conexión al final porque en esta página he usado la base de datos
    mysqli_close($conexion);
    ?>

</body>

</html>