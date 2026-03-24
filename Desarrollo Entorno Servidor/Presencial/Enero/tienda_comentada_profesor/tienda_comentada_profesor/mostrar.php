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
                <a href="login.html" class="btn btn-secundario">Menú Principal</a>
                <a href="pedido.php" class="btn btn-secundario">Nuevo Pedido</a>
            </nav>
        </header>

        <main class="principal">
            <div class="tarjeta-pedido">
                <h2>Listado de Pedidos</h2>

                <?php
                /*
                TAREA 1: LEER ARCHIVO pedidos.txt
                - Abrir archivo en modo lectura ('r')
                - Usar fopen(), fgets(), feof(), fclose()
                - Contar número de pedidos
                */

                // Creo un array vacío para guardar todas las líneas válidas del archivo.
                $pedidos = [];

                // Creo un contador de pedidos.
                $numPedidos = 0;

                // Compruebo si el archivo pedidos.txt existe antes de abrirlo.
                if (file_exists('pedidos.txt')) {
                    // Abro el archivo en modo lectura.
                    $archivo = fopen('pedidos.txt', 'r');

                    // Si se ha abierto bien, leo línea a línea.
                    if ($archivo) {
                        while (!feof($archivo)) {
                            $linea = fgets($archivo);

                            // Quito espacios y salto de línea.
                            $linea = trim($linea);

                            // Si la línea no está vacía, la guardo en el array y aumento el contador.
                            if ($linea != '') {
                                $pedidos[] = $linea;
                                $numPedidos++;
                            }
                        }

                        // Cierro el archivo al terminar.
                        fclose($archivo);
                    }
                }

                /*
                TAREA 2: MOSTRAR PEDIDOS EN TABLA
                - Crear tabla HTML con columnas:
                  Nombre, Dirección, Producto, Cantidad, Fecha
                - Leer línea por línea del archivo
                - Cada línea tiene formato: nombre|direccion|producto|cantidad|fecha
                - Usar explode() para separar los datos
                - Mostrar cada pedido en una fila de la tabla
                */

                /*
                TAREA 3: MANEJAR CASO SIN PEDIDOS
                - Si el archivo no existe o está vacío
                - Mostrar mensaje: "No hay pedidos registrados."
                */

                // Si hay pedidos, muestro la tabla.
                if ($numPedidos > 0) {
                    echo "<table class='tabla-precios'>";
                    echo "<thead><tr><th>Nombre</th><th>Dirección</th><th>Producto</th><th>Cantidad</th><th>Fecha</th></tr></thead>";
                    echo "<tbody>";

                    // Recorro el array de pedidos para mostrar cada uno.
                    foreach ($pedidos as $pedido) {
                        // Divido la línea en sus 5 partes usando el separador |.
                        $datos = explode('|', $pedido);

                        // Solo muestro la fila si realmente tiene las 5 partes esperadas.
                        if (count($datos) == 5) {
                            echo "<tr>";
                            echo "<td>" . htmlspecialchars($datos[0]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[1]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[2]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[3]) . "</td>";
                            echo "<td>" . htmlspecialchars($datos[4]) . "</td>";
                            echo "</tr>";
                        }
                    }

                    echo "</tbody></table>";
                    echo "<p><strong>Total de pedidos:</strong> $numPedidos</p>";
                } else {
                    // Si no hay pedidos, muestro el mensaje indicado.
                    echo "<p>No hay pedidos registrados.</p>";
                }
                ?>

                <br>
                <a href="login.html" class="btn btn-primario">Volver al menú</a>
            </div>
        </main>
    </div>
</body>
</html>
