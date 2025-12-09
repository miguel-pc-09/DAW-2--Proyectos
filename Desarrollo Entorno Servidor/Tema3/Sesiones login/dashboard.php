<!-- Página protegida que solo se muestra a usuarios logueados -->
<?php 
   session_start(); # iniciar sesion  
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>

<body>
    <h1>Área usuario</h1>
    <?php 
    if(isset($_SESSION["usuario"])){
        echo "<p>Hola," . $_SESSION["usuario"] ."</p>";
        echo "<p>Esta página solo para usuarios </p>";
        echo "<p><a href='index.php'> Ir al inicio </a></p>";
        echo "<p><a href='logout.php'> Cerrar sesión </a></p>";
    } else {
        echo "<p> </p>";
        echo "<p>No has iniciciado sesion </p>";
        echo "<p><a href='login.php'>Ir página de login </a></p>";
    }
    ?>

</body>

</html>