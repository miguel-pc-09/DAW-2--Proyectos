<?php
session_start();

// Variable para guardar el mensaje de error si el login falla
$error = "";

// Compruebo si se ha enviado el formulario
if (isset($_POST['usuario']) && isset($_POST['password'])) {

    // Recojo el usuario y la contraseña y les quito espacios al principio y al final
    $usuario = trim($_POST['usuario']);
    $password = trim($_POST['password']);

    // Compruebo si el archivo de usuarios existe antes de intentar leerlo
    if (file_exists("usuarios.txt")) {

        // Leo todas las líneas del archivo de usuarios
        $lineas = file("usuarios.txt");

        // Esta variable me sirve para saber si el login es correcto o no
        $correcto = false;

        // Recorro cada línea del archivo
        foreach ($lineas as $linea) {

            // Separo usuario y contraseña usando los dos puntos
            $datos = explode(":", trim($linea));
            // Compruebo que la línea tenga las dos partes antes de compararlas
            if (count($datos) == 2) {

                // Si coinciden usuario y contraseña, el login es correcto
                if ($datos[0] == $usuario && $datos[1] == $password) {
                    $correcto = true;
                }

            }
        }

        // Si el login es correcto, guardo el usuario en sesión y lo mando al panel
        if ($correcto) {
            $_SESSION['usuario'] = $usuario;
            header("Location: panel.php");
            exit();
        } else {
            // Si no coincide, guardo mensaje de error
            $error = "Usuario o contraseña incorrectos";
        }

    } else {
        // Si el archivo no existe, aviso con un mensaje de error
        $error = "No se encontró el archivo de usuarios";
    }
}

// Esta variable la uso para que la cabecera sepa desde dónde estoy
$rutaBase = "";
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <!-- Hace la web responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Login</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

    <!-- Mi hoja de estilos -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="bg-light fondo-app">

    <?php include("includes/cabecera.php"); ?>

    <div class="container mt-5 contenedor-principal">
        <div class="row justify-content-center">

            <!-- Con esta columna centro la tarjeta del login -->
            <div class="col-md-4">
                <div class="card p-4 tarjeta-app">

                    <h3 class="text-center mb-3">Iniciar sesión</h3>

                    <?php
                    // Si hay error, lo muestro en rojo
                    if ($error != "") {
                        echo "<div class='alert alert-danger'>$error</div>";
                    }
                    ?>

                    <form method="POST" action="">
                        <!-- Campo para escribir el usuario -->
                        <input type="text" name="usuario" class="form-control mb-3" placeholder="Usuario" required>

                        <!-- Campo para escribir la contraseña -->
                        <input type="password" name="password" class="form-control mb-3" placeholder="Contraseña"
                            required>

                        <!-- Botón para enviar el formulario -->
                        <button type="submit" class="btn btn-primary w-100">Entrar</button>
                    </form>

                </div>
            </div>
        </div>
    </div>

    <?php include("includes/pie.php"); ?>

</body>

</html>