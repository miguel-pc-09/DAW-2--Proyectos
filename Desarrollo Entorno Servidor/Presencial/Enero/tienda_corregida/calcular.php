<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular Precios - Tienda Online</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-calcular">
        <header class="cabecera">
            <h1>Tienda Online</h1>
            <nav class="navegacion">
                <a href="login.html" class="btn btn-secundario">Inicio</a>
                <a href="pedido.php" class="btn btn-secundario">Nuevo Pedido</a>
            </nav>
        </header>

        <main class="principal">
            <div class="contenedor-calculadora">
                <div class="tarjeta-formulario">
                    <h2>Calculadora de Precios</h2>
                    <p class="descripcion">
                        Introduce el nombre del cliente o deja vacío para calcular el total general
                    </p>

                    <?php
                    // Defino el precio de cada producto en un array asociativo.
                    // Se leería así:
                    // - iphone vale 1000
                    // - roomba vale 500
                    // - reloj vale 100
                    $precios = [
                        'iphone' => 1000,
                        'roomba' => 500,
                        'reloj' => 100
                    ];
                    ?>

                    <form method="post" class="formulario">
                        <div class="grupo-formulario">
                            <label for="cliente">Nombre del cliente (opcional)</label>
                            <input type="text" id="cliente" name="cliente"
                                   value="<?php echo isset($_POST['cliente']) ? htmlspecialchars($_POST['cliente']) : ''; ?>">
                        </div>

                        <div class="grupo-botones">
                            <button type="submit" class="btn btn-primario">Calcular Total</button>
                        </div>
                    </form>
                </div>

                <?php
                // Variables para guardar el resultado final y el cliente buscado.
                $resultado = '';
                $cliente = '';

                // Solo proceso el cálculo si se envió el formulario.
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                    // Recojo el nombre del cliente y le quito espacios laterales.
                    $cliente = isset($_POST['cliente']) ? trim($_POST['cliente']) : '';

                    // Variable acumuladora del total.
                    $total = 0;

                    // Bandera para saber si se encontró el cliente buscado.
                    $encontrado = false;

                    // Compruebo si existe el archivo y tiene contenido.
                    if (file_exists('pedidos.txt') && filesize('pedidos.txt') > 0) {
                        $archivo = fopen('pedidos.txt', 'r');

                        if ($archivo) {
                            while (!feof($archivo)) {
                                $linea = fgets($archivo);
                                $linea = trim($linea);

                                if ($linea != '') {
                                    $datos = explode('|', $linea);

                                    if (count($datos) == 5) {
                                        $nombrePedido = $datos[0];
                                        $producto = strtolower($datos[2]);
                                        $cantidad = (int) $datos[3];

                                        // Si no se ha escrito cliente, sumo todos los pedidos.
                                        // Si se ha escrito cliente, solo sumo los que coincidan.
                                        if ($cliente == '' || strcasecmp($nombrePedido, $cliente) == 0) {
                                            if (isset($precios[$producto])) {
                                                $total += $precios[$producto] * $cantidad;
                                                $encontrado = true;
                                            }
                                        }
                                    }
                                }
                            }

                            fclose($archivo);
                        }

                        // Si el campo estaba vacío, muestro total general.
                        if ($cliente == '') {
                            $resultado = 'Total de todos los pedidos: ' . $total . '€';
                        } else {
                            // Si se escribió cliente y no se encontró, muestro error.
                            if ($encontrado) {
                                $resultado = 'Total del cliente ' . htmlspecialchars($cliente) . ': ' . $total . '€';
                            } else {
                                $resultado = 'Error. No se encuentra el cliente ' . htmlspecialchars($cliente);
                            }
                        }
                    } else {
                        $resultado = 'No hay pedidos registrados.';
                    }
                }

                if ($resultado != ''):
                ?>
                <div class="tarjeta-resultado">
                    <h3>Resultado del Cálculo</h3>
                    <div class="resultado">
                        <div class="resultado-item">
                            <span class="valor destacado"><?php echo $resultado; ?></span>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
            </div>

            <div class="tarjeta-precios">
                <h3>Tabla de Precios Oficial</h3>
                <table class="tabla-precios">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio Unitario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>iPhone</td>
                            <td class="precio">1.000€</td>
                        </tr>
                        <tr>
                            <td>Roomba</td>
                            <td class="precio">500€</td>
                        </tr>
                        <tr>
                            <td>Reloj</td>
                            <td class="precio">100€</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</body>
</html>
