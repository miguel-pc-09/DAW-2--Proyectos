<?php
session_start();

/* Aquí cierro la sesión del usuario para que salga de la aplicación
    y lo mando otra vez al login. */
session_destroy();
header("Location: login.php");
exit();
?>