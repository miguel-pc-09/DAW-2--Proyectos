<?php 
// Aquí guardo los datos de conexión con la base de datos
$servidor = "localhost";
$usuario = "root";
$contrasena = "rootroot";
$baseDeDatos = "eventos_tech";

// Hago la conexión con MySQL
$conexion = mysqli_connect($servidor, $usuario, $contrasena, $baseDeDatos);

// Si falla la conexión, paro la ejecución y muestro el error
if(!$conexion){
    die("Error de conexion: " . mysqli_connect_error());
}
?>