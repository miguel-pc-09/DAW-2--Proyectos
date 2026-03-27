<?php
session_start();

/*Si hay sesión iniciada, entra al panel. Si no hay sesión, va al login.*/
if (isset($_SESSION['usuario'])) {
    header("Location: panel.php");
    exit();
} else {
    header("Location: login.php");
    exit();
}
?>