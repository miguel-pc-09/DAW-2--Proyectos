<!-- Página con formulario de login y lógica de autenticación -->
<!-- Debe tener un formulario con dos campos: usuario y contraseña -->
<?php 
   session_start(); # iniciar sesion

    $mensaje = "";

   // Comprobar si se ha enviado el formulario
   if (isset($_REQUEST["enviar"])){

    // Recogemos y limpiar usuario
    if(isset($_REQUEST["usuario"])){
        $usuario = trim(strip_tags($_REQUEST["usuario"]));
    } else {
        $usuario = "";
    }

    // Recoger y limpiar contraseña
    if(isset($_REQUEST["clave"])){
        $clave = trim(strip_tags($_REQUEST["clave"]));
    } else {
        $usuario = "";
    }

    // Validar datos 
    if($usuario == "" || $clave == ""){
        $mensaje = "Escriba usuario y contraseña. ";
    } elseif($usuario == "admin" && $clave == "1234"){
        // si todo esta ok
        $_SESSION["usuario"] = $usuario;
        $_SESSION["logueado"] = true;

        $mensaje = "Sesión iniciada.";
        header("Location: dashboard.php");
        exit;
    } else {
        $mensaje = "Usuario o contraseña incorrectos.";
    }
   }

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <h1>Página de login</h1>
    <?php 
    if($mensaje != ""){
        echo "<p>$mensaje</p>";
    }
   ?>
    <form action="login.php" method="post">
        <div>
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario" name="usuario" required>

            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit" name="enviar" value="Entrar"></button>
    </form>
    <p><a href="index.php">Volver a inicio</a></p>


</body>

</html>