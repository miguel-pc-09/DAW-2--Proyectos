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
                <a href="login.html" class="btn btn-secundario">Inicio</a>
                <a href="pedido.php" class="btn btn-secundario">Nuevo Pedido</a>
            </nav>
        </header>

        <main class="principal">
            <div class="tarjeta-pedido">
                <h2>Listado de Pedidos</h2>

                <?php
                // Creo un array para guardar todos los pedidos leídos.
                $pedidos = [];

                // Compruebo si el archivo existe y además no está vacío.
                if (file_exists('pedidos.txt') && filesize('pedidos.txt') > 0) {
                    // Abro el archivo en modo lectura.
                    $archivo = fopen('pedidos.txt', 'r');

                    if ($archivo) {
                        // Recorro el archivo línea a línea hasta llegar al final.
                        while (!feof($archivo)) {
                            $linea = fgets($archivo);
                            $linea = trim($linea);

                            // Solo proceso líneas con contenido.
                            if ($linea != '') {
                                // Separo cada dato usando el carácter |.
                                $datos = explode('|', $linea);

                                // Si la línea tiene 5 datos, la guardo en el array pedidos.
                                if (count($datos) == 5) {
                                    $pedidos[] = $datos;
                                }
                            }
                        }

                        // Cierro el archivo al terminar.
                        fclose($archivo);
                    }
                }

                // Cuento cuántos pedidos se han leído correctamente.
                $numPedidos = count($pedidos);

                // Si hay pedidos, los muestro en una tabla.
                if ($numPedidos > 0) {
                    echo "<table class='tabla-precios'>";
                    echo "<thead><tr><th>Nombre</th><th>Dirección</th><th>Producto</th><th>Cantidad</th><th>Fecha</th></tr></thead>";
                    echo "<tbody>";

                    // Recorro el array de pedidos y muestro una fila por cada pedido.
                    foreach ($pedidos as $pedido) {
                        echo "<tr>";
                        echo "<td>" . htmlspecialchars($pedido[0]) . "</td>";
                        echo "<td>" . htmlspecialchars($pedido[1]) . "</td>";
                        echo "<td>" . htmlspecialchars($pedido[2]) . "</td>";
                        echo "<td>" . htmlspecialchars($pedido[3]) . "</td>";
                        echo "<td>" . htmlspecialchars($pedido[4]) . "</td>";
                        echo "</tr>";
                    }

                    echo "</tbody></table>";
                    echo "<p><strong>Total de pedidos:</strong> $numPedidos</p>";
                } else {
                    // Si no hay pedidos, muestro aviso.
                    echo "<p>No hay pedidos registrados.</p>";
                }
                ?>

                <br>
                <a href="login.html" class="btn btn-primario">Volver al inicio</a>
            </div>
        </main>
    </div>
</body>
</html>
