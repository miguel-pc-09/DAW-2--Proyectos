<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesar Pedido - Tienda Online</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-pedido">
        <header class="cabecera">
            <h1>Tienda Online</h1>
        </header>

        <main class="principal">
            <div class="tarjeta-pedido">
                <?php
                // Inicializo variables para evitar errores si algo falla.
                $mensaje = '';
                $nombre = '';
                $direccion = '';
                $producto = '';
                $cantidad = '';
                $fecha = '';

                // Compruebo que la página haya llegado por POST.
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                    // Recojo los datos del formulario.
                    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
                    $direccion = isset($_POST['direccion']) ? trim($_POST['direccion']) : '';
                    $producto = isset($_POST['producto']) ? trim($_POST['producto']) : '';
                    $cantidad = isset($_POST['cantidad']) ? (int) $_POST['cantidad'] : 0;

                    // Valido que todos los campos obligatorios tengan valor.
                    if ($nombre == '' || $direccion == '' || $producto == '' || $cantidad < 1) {
                        $mensaje = 'Error: faltan datos obligatorios del pedido.';
                    } else {
                        // Obtengo la fecha y hora actual del sistema.
                        $fecha = date('Y-m-d H:i:s');

                        // Creo la línea con el formato pedido solicitado.
                        // Se leería así: nombre|direccion|producto|cantidad|fecha y salto de línea.
                        $linea = $nombre . '|' . $direccion . '|' . $producto . '|' . $cantidad . '|' . $fecha . "\n";

                        // Abro el archivo pedidos.txt en modo añadir al final.
                        $archivo = fopen('pedidos.txt', 'a');

                        if ($archivo) {
                            // Escribo la línea en el archivo.
                            fputs($archivo, $linea);

                            // Cierro el archivo después de guardar.
                            fclose($archivo);

                            $mensaje = 'Pedido guardado correctamente.';
                        } else {
                            $mensaje = 'Error: no se pudo guardar el pedido en el archivo.';
                        }
                    }
                } else {
                    $mensaje = 'Error: acceso no permitido.';
                }
                ?>

                <h2>Pedido Procesado</h2>
                <p><?php echo htmlspecialchars($mensaje); ?></p>

                <?php if ($mensaje == 'Pedido guardado correctamente.'): ?>
                <div class="resumen-pedido">
                    <h3>Resumen del Pedido</h3>
                    <div class="detalle-resumen">
                        <p><strong>Cliente:</strong> <?php echo htmlspecialchars($nombre); ?></p>
                        <p><strong>Dirección:</strong> <?php echo htmlspecialchars($direccion); ?></p>
                        <p><strong>Producto:</strong> <?php echo htmlspecialchars($producto); ?></p>
                        <p><strong>Cantidad:</strong> <?php echo htmlspecialchars($cantidad); ?></p>
                        <p><strong>Fecha:</strong> <?php echo htmlspecialchars($fecha); ?></p>
                    </div>
                </div>
                <?php endif; ?>

                <div class="grupo-botones">
                    <a href="pedido.php" class="btn btn-primario">Hacer otro pedido</a>
                    <a href="login.html" class="btn btn-secundario">Volver al inicio</a>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
