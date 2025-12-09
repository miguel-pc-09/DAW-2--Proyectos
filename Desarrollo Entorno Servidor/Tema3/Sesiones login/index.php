<!-- Página principal -->

<?php 
   session_start(); # iniciar sesion  
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesion login</title>
</head>

<body>

    <h2>Bienvenida Usuario </h2>
    <?php 
    /* para saber si el usuario esta logueado */
    if(isset($_SESSION['usuario']) && $_SESSION['logueado'] === true){
        echo "<h1> Bienvenido, " . $_SESSION['usuario']."</h1>";
        echo "<p><a href='dashboard.php'> Ir al panel </a></p>";
        echo "<p><a href='logout.php'> Cerrar sesion </a></p>";
    } else {
        echo "<h1>Bienvenido, usuario </h1>";
        echo "<p>No has iniciciado sesion </p>";
        echo "<p><a href='login.php'>Ir página de login </a></p>";
    }

   
    
    ?>

</body>

</html>