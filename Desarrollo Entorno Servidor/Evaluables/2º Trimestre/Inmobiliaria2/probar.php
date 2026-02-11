<?php
// Archivo simple para comprobar que conecta
require("conexion.php");

echo "Conectado correctamente a la base de datos 'inmobiliaria'.";

mysqli_close($conexion);
?>