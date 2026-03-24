<?php
$usuario = $_POST['usuario'] ?? '';
$clave = $_POST['clave'] ?? '';

$login_correcto = false;

// Abrir archivo de claves
$archivo = fopen("clave.txt", "r");
if ($archivo) {
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        if (!empty(trim($linea))) {
            $partes = explode(" ", trim($linea), 2);
            if (count($partes) == 2) {
                if ($partes[0] == $usuario && $partes[1] == $clave) {
                    $login_correcto = true;
                    break;
                }
            }
        }
    }
    fclose($archivo);
}

if ($login_correcto) {
    echo "<h1>Bienvenido $usuario</h1>";
    echo "<a href='pedido.php'>Hacer Pedido</a><br>";
    echo "<a href='mostrar.php'>Mostrar pedidos</a><br>";
    echo "<a href='calcular.php'>Calcular Precio del Pedido</a><br>";
    echo "<a href='sorteo.php'>Sorteo del pedido</a><br>";
} else {
    echo "Error. <a href='login.html'>Volver al formulario</a>";
}
?>