<?php
// Este archivo se usa en TODAS las páginas para conectarnos a la BD
$host = "localhost";
$usuario = "root";
$password = "rootroot";
$bbdd = "inmobiliaria";

// Creamos la conexión
$conexion = mysqli_connect($host, $usuario, $password, $bbdd);

// Si falla, cortamos y mostramos el error
if (!$conexion) {
  die("Error de conexión: " . mysqli_connect_error());
}

// Para que no salgan caracteres raros (tildes, ñ, etc.)
mysqli_set_charset($conexion, "utf8");
?>