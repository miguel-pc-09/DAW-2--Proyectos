<!-- Script para cerrar sesión -->
<?php 
   session_start(); # iniciar sesion  

   // eliminamos usuario y contraseña
   unset($_SESSION["usuario"]);
   unset($_SESSION["logueado"]);

   // destruir
   session_destroy();

   // redirigir al inicio
   header("Location: index.php");


?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cerrar sesion</title>
</head>

<body>
    <h1>Sesión cerrada</h1>
    <p>Ha cerrado la sesión correctamente.</p>
</body>

</html>