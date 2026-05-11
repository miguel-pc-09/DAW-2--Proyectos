<?php 
    $busqueda = trim($_REQUEST['search_term']);
    $archivo = "inventario.txt";

    $fp = fopen($archivo, "r");
    $encotradp = 0;
    while (!feof($fp)) {
        $linea = fgets($fp);
        if (stripos($linea, $busqueda) !== false) {
            echo "<p>Producto encontrado: " . htmlspecialchars($linea) . "</p>";
            $encotradp = 1;
        }
    }
?>