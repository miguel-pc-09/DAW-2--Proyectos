<?php
session_start();

// Si no hay sesión iniciada, mando al login
if (!isset($_SESSION['usuario'])) {
    header("Location: ../login.php");
    exit();
}

// Incluyo la conexión a la base de datos
include("../includes/conexion.php");

// Variable para mostrar mensajes
$mensaje = "";

// Aquí guardaré los datos del evento que voy a editar
$evento = null;

// Obtengo el ID del evento desde la URL
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Si se ha enviado el formulario de actualizar
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['actualizar'])) {

    // Recojo el id oculto del formulario
    $id = intval($_POST['id']);

    // Recojo y limpio los datos
    $nombre = trim($_POST['nombre']);
    $fecha = trim($_POST['fecha']);
    $descripcion = trim($_POST['descripcion']);
    $lugar = trim($_POST['lugar']);
    $capacidad = trim($_POST['capacidad']);

    // Compruebo que nombre y fecha no estén vacíos
    if ($nombre == "" || $fecha == "") {
        $mensaje = "El nombre y la fecha son obligatorios.";
    } else {

        // Hago la consulta para actualizar el evento
        $sql = "UPDATE eventos SET
                nombre = ?,
                fecha = ?,
                descripcion = ?,
                lugar = ?,
                capacidad = ?
                WHERE id = ?";

        $sentencia = mysqli_prepare($conexion, $sql);

        if ($sentencia) {
            mysqli_stmt_bind_param($sentencia, "ssssii", $nombre, $fecha, $descripcion, $lugar, $capacidad, $id);

            // Si se actualiza bien, vuelvo al listado con mensaje
            if (mysqli_stmt_execute($sentencia)) {
                mysqli_stmt_close($sentencia);
                mysqli_close($conexion);
                header("Location: listar.php?mensaje=actualizado");
                exit();
            } else {
                $mensaje = "Error al actualizar el evento.";
            }

            mysqli_stmt_close($sentencia);
        } else {
            $mensaje = "Error al preparar la consulta.";
        }
    }
}

// Si tengo un id válido, busco el evento en la base de datos
if ($id > 0) {
    $sql = "SELECT * FROM eventos WHERE id = ?";
    $sentencia = mysqli_prepare($conexion, $sql);

    if ($sentencia) {
        mysqli_stmt_bind_param($sentencia, "i", $id);
        mysqli_stmt_execute($sentencia);
        $resultado = mysqli_stmt_get_result($sentencia);

        if (mysqli_num_rows($resultado) > 0) {
            $evento = mysqli_fetch_assoc($resultado);
        }

        mysqli_stmt_close($sentencia);
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

    <title>Editar evento</title>

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
        <h1 class="titulo-pagina">Editar evento</h1>

        <?php
        // Si tengo mensaje, lo muestro arriba
        if ($mensaje != "") {
            echo "<div class='alert alert-info'>$mensaje</div>";
        }
        ?>

        <?php if ($evento) { ?>
        <!-- Esta tarjeta la uso para que el formulario quede más recogido y ordenado -->
        <div class="card shadow-sm p-4 tarjeta-app">
            <form method="post" action="">

                <!-- Guardo el id en oculto para usarlo al actualizar -->
                <input type="hidden" name="id" value="<?php echo $evento['id']; ?>">

                <!-- Agrupo nombre y fecha en una fila para que quede más bonito con Bootstrap -->
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="nombre" class="form-label">Nombre del evento</label>

                        <input type="text" id="nombre" name="nombre" class="form-control"
                            value="<?php echo htmlspecialchars($evento['nombre']); ?>" required>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="fecha" class="form-label">Fecha</label>

                        <input type="date" id="fecha" name="fecha" class="form-control"
                            value="<?php echo htmlspecialchars($evento['fecha']); ?>" required>
                    </div>
                </div>

                <!-- La descripción la dejo ocupando todo el ancho -->
                <div class="mb-3">
                    <label for="descripcion" class="form-label">Descripción</label>

                    <textarea id="descripcion" name="descripcion" class="form-control"
                        rows="4"><?php echo htmlspecialchars($evento['descripcion']); ?></textarea>
                </div>

                <!-- Agrupo lugar y capacidad en otra fila para aprovechar Bootstrap -->
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="lugar" class="form-label">Lugar</label>

                        <input type="text" id="lugar" name="lugar" class="form-control"
                            value="<?php echo htmlspecialchars($evento['lugar']); ?>">
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="capacidad" class="form-label">Capacidad</label>

                        <input type="number" id="capacidad" name="capacidad" class="form-control"
                            value="<?php echo htmlspecialchars($evento['capacidad']); ?>" min="1">
                    </div>
                </div>

                <!-- Aquí dejo los botones con un poco de separación -->
                <div class="d-flex gap-2 mt-3 flex-wrap">
                    <input type="submit" name="actualizar" value="Actualizar evento" class="btn btn-warning">
                    <input type="reset" value="Restaurar valores" class="btn btn-secondary">
                    <a href="listar.php" class="btn btn-primary">Volver</a>
                </div>
            </form>
        </div>

        <?php } elseif ($id > 0) { ?>

        <!-- Si el id existe pero no encuentro el evento, aviso al usuario -->
        <div class="alert alert-warning">
            Evento no encontrado.
        </div>

        <a href="listar.php" class="btn btn-primary">Volver al listado</a>

        <?php } else { ?>

        <!-- Si no llega ningún id, aviso de que no se indicó qué evento editar -->
        <div class="alert alert-warning">
            No se especificó un evento para editar.
        </div>

        <p>Selecciona un evento desde la <a href="listar.php">lista de eventos</a>.</p>

        <?php } ?>
    </div>

    <?php include("../includes/pie.php"); ?>

    <?php
    // Cierro la conexión al final porque en esta página he usado la base de datos
    mysqli_close($conexion);
    ?>
</body>

</html>