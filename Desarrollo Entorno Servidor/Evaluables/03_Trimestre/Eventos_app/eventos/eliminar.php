<?php 
// Inicio sesion para comprobar si el usuario esta logueado
session_start();

// Si no hay usuario en sesion, lo mando al login
if(!isset($_SESSION['usuario'])){
    header("Location: ../login.php");
    exit();
}

// Incluyo la conexion a la base de datos
include("../includes/conexion.php");

// Compruebo si llega el ID por la URL
if(isset($_GET['id'])){
    $id = intval($_GET['id']);
}else{
    // si no llega mando a la lista de eventos
    header("Location: listar.php");
    exit();
}

/* Aquí hago la consulta para eliminar el registro */
$consulta = "DELETE FROM eventos WHERE id = ?";

$sentencia = mysqli_prepare($conexion, $consulta);

if($sentencia){
    mysqli_stmt_bind_param($sentencia, "i", $id);

    // ejecuto la consulta 
    $resultado = mysqli_stmt_execute($sentencia);

    // Compruebo si funciono
    if($resultado){
        mysqli_stmt_close($sentencia);

        // cierro conexion antes de redirigir
        mysqli_close($conexion);

        // si se ha borrado correctamente, vuelvo al listado
        header("Location: listar.php?mensaje=eliminado");
        exit();
    }else {
        // Si falla, muestro error
        echo "Error al eliminar el registro";
    }

    mysqli_stmt_close($sentencia);
}else{
    echo "Error al preparar la consulta";
}

// cierro conexion
mysqli_close($conexion);
?>