<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Buscar Producto - Sistema de Gestión de Inventario</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
    }

    h1 {
        color: #333;
    }

    form {
        margin-bottom: 20px;
    }

    input[type="text"] {
        padding: 5px;
        width: 300px;
    }

    input[type="submit"] {
        padding: 5px 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    .no-results {
        color: #ff0000;
    }

    .back-link {
        margin-top: 20px;
    }
    </style>
</head>

<body>
    <h1>Buscar Producto</h1>

    <form method="POST" action="">
        <input type="text" name="search_term" placeholder="Ingrese ID o nombre del producto" required>
        <input type="submit" value="Buscar">
    </form>


</body>

</html>

<?php 
    $busqueda = trim($_REQUEST['search_term']);
    $archivo = "inventario.txt";
    // Abrir el archivo
    $fp = fopen($archivo, "r");
    $encotrados = 0;
    // Leer linea por linea hasta el final del archivo
    while (!feof($fp)) {
        $linea = trim(fgets($fp)); // fgets lee una linea del archivo y lo almacena en la variable $linea);
        // dividir la linea por los dos puntos
        $datos = explode(":", $linea);

        // verificar que tenga al menos 4 campos
        if (count($datos) >= 4) {
            $id = $datos[0];
            $nombre = $datos[1];
            $cantidad = $datos[2];
            $precio = $datos[3];

                //Buscar por ID o nombre (insensible a mayúsculas / minusculas)
                if(stripos($id, $busqueda) !== false || stripos($nombre, $busqueda) !== false) {
                    echo "<tr>";
                    echo '<td>' . htmlspecialchars($id) . '</td>';
                    echo '<td>' . htmlspecialchars($nombre) . '</td>';
                    echo '<td>' . htmlspecialchars($cantidad) . '</td>';
                    echo '<td>' . number_format($precio, 2) . '</td>';
                    echo "</tr>";
                    $encontrados++;
                }
            
        }
    }
    
?>