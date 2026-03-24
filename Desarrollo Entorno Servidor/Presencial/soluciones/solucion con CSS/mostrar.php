<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar Pedidos - Tienda Online</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-pedido">
        <header class="cabecera">
            <h1>Tienda Online</h1>
            <nav class="navegacion">
                <a href="verificar.php" class="btn btn-secundario">Menú Principal</a>
                <a href="pedido.php" class="btn btn-secundario">Nuevo Pedido</a>
            </nav>
        </header>
        
        <main class="principal">
            <div class="tarjeta-pedido">
                <h2>Listado de Pedidos</h2>
                
                <?php
                $archivo = fopen("pedidos.txt", "r");
                if ($archivo) {
                    $numPedidos = 0;
                    
                    echo "<table class='tabla-precios'>";
                    echo "<thead><tr><th>Nombre</th><th>Dirección</th><th>Producto</th><th>Cantidad</th><th>Fecha</th></tr></thead>";
                    echo "<tbody>";
                    
                    while (!feof($archivo)) {
                        $linea = fgets($archivo);
                        if (!empty(trim($linea))) {
                            $datos = explode("|", trim($linea));
                            echo "<tr>";
                            echo "<td>" . htmlspecialchars($datos[0]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[1]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[2]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[3]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[4]) . "</td>";
                            echo "</tr>";
                            $numPedidos++;
                        }
                    }
                    
                    echo "</tbody></table>";
                    echo "<p><strong>Total de pedidos:</strong> $numPedidos</p>";
                    
                    fclose($archivo);
                } else {
                    echo "<p>No hay pedidos registrados.</p>";
                }
                ?>
                
                <br>
                <a href="verificar.php" class="btn btn-primario">Volver al menú</a>
            </div>
        </main>
    </div>
</body>
</html>