<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Codificación del documento -->
    <meta charset="UTF-8">

    <!-- Adaptación responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título de la página -->
    <title>Procesar Pedido - Tienda Online</title>

    <!-- Enlace al CSS -->
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
                /*
                TAREA 1: RECIBIR DATOS DEL FORMULARIO
                - Recuperar: nombre, direccion, producto, cantidad
                - Usar $_POST para cada campo
                - Validar que todos los campos tengan datos
                */

                // Recojo el nombre enviado por POST.
                // Se leería como: en nombre guarda el dato POST llamado nombre.
                $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';

                // Recojo la dirección enviada por POST.
                $direccion = isset($_POST['direccion']) ? trim($_POST['direccion']) : '';

                // Recojo el producto enviado por POST.
                $producto = isset($_POST['producto']) ? trim($_POST['producto']) : '';

                // Recojo la cantidad enviada por POST.
                $cantidad = isset($_POST['cantidad']) ? trim($_POST['cantidad']) : '';

                // Creo una variable para guardar el mensaje final al usuario.
                $mensaje = '';

                /*
                TAREA 2: OBTENER FECHA ACTUAL
                - Usar date('Y-m-d H:i:s') para obtener fecha y hora
                - Guardar en variable $fecha
                */

                // Obtengo la fecha y hora actual con el formato pedido en el ejercicio.
                // Se leería como: fecha igual a date año-mes-día hora:minuto:segundo.
                $fecha = date('Y-m-d H:i:s');

                /*
                TAREA 3: FORMATEAR LÍNEA PARA EL ARCHIVO
                - Crear una línea con formato: nombre|direccion|producto|cantidad|fecha
                - Ejemplo: Juan Pérez|Calle Mayor 1|iphone|2|2024-01-11 10:30:00
                - Añadir salto de línea al final (\n)
                */

                // Si todos los campos tienen contenido, preparo la línea para guardarla.
                if ($nombre != '' && $direccion != '' && $producto != '' && $cantidad != '') {
                    // Uno todos los datos con el carácter | y al final añado un salto de línea.
                    // Se leería como: linea igual a nombre barra vertical dirección barra vertical producto...
                    $linea = $nombre . '|' . $direccion . '|' . $producto . '|' . $cantidad . '|' . $fecha . "\n";

                    /*
                    TAREA 4: GUARDAR EN ARCHIVO pedidos.txt
                    - Abrir archivo en modo append ('a')
                    - Usar fopen(), fputs(), fclose()
                    - Si se guarda correctamente, mostrar mensaje de éxito
                    - Si hay error, mostrar mensaje de error
                    */

                    // Abro el archivo pedidos.txt en modo append.
                    // append significa que escribe al final sin borrar lo anterior.
                    $archivo = fopen('pedidos.txt', 'a');

                    // Compruebo si se ha abierto bien el archivo.
                    if ($archivo) {
                        // Escribo la línea completa dentro del archivo.
                        fputs($archivo, $linea);

                        // Cierro el archivo después de escribir.
                        fclose($archivo);

                        // Guardo mensaje de éxito.
                        $mensaje = 'Pedido guardado correctamente.';
                    } else {
                        // Si falla al abrir el archivo, guardo un mensaje de error.
                        $mensaje = 'Error al guardar el pedido.';
                    }
                } else {
                    // Si falta algún dato, aviso al usuario.
                    $mensaje = 'Error: faltan datos del pedido.';
                }

                /*
                TAREA 5: MOSTRAR RESULTADO AL USUARIO
                - Mostrar mensaje de confirmación o error
                - Mostrar resumen del pedido
                - Mostrar botones para:
                    * Hacer otro pedido (enlace a pedido.php)
                    * Volver al menú (enlace a verificar.php)
                */
                ?>

                <h2>Pedido Procesado</h2>
                <p><?php echo $mensaje; ?></p>

                <?php if ($mensaje == "Pedido guardado correctamente."): ?>
                <div class="resumen-pedido">
                    <h3>Resumen del Pedido</h3>
                    <div class="detalle-resumen">
                        <p><strong>Cliente:</strong> <?php echo htmlspecialchars($nombre); ?></p>
                        <p><strong>Dirección:</strong> <?php echo htmlspecialchars($direccion); ?></p>
                        <p><strong>Producto:</strong> <?php echo htmlspecialchars($producto); ?></p>
                        <p><strong>Cantidad:</strong> <?php echo htmlspecialchars($cantidad); ?></p>
                        <p><strong>Fecha:</strong> <?php echo $fecha; ?></p>
                    </div>
                </div>
                <?php endif; ?>

                <div class="grupo-botones">
                    <a href="pedido.php" class="btn btn-primario">Hacer otro pedido</a>
                    <a href="login.html" class="btn btn-secundario">Volver al menú</a>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
