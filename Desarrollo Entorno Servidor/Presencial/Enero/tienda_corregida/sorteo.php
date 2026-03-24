<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteo - Tienda Online</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-sorteo">
        <header class="cabecera">
            <h1>Tienda Online</h1>
            <nav class="navegacion">
                <a href="login.html" class="btn btn-secundario">Inicio</a>
                <a href="mostrar.php" class="btn btn-secundario">Ver Pedidos</a>
            </nav>
        </header>

        <main class="principal">
            <div class="contenedor-ruleta">
                <div class="info-sorteo">
                    <h2>Sorteo del Mes</h2>
                    <p class="descripcion">
                        ¡Un cliente afortunado recibirá su pedido GRATIS!
                        El sorteo se realiza entre todos los pedidos registrados.
                    </p>
                </div>

                <div class="ruleta">
                    <div class="controles-sorteo">
                        <form method="post" action="sorteo.php">
                            <button type="submit" name="realizar_sorteo" class="btn btn-primario btn-grande">
                                Realizar Nuevo Sorteo
                            </button>
                        </form>
                    </div>
                </div>

                <div class="resultado-sorteo tarjeta-pedido">
                    <h3>Resultado del Sorteo</h3>

                    <?php
                    // Inicializo variables por si no hay pedidos o no se ha sorteado todavía.
                    $numPedidos = 0;
                    $nombreGanador = '';
                    $ganadorNum = 0;

                    // Compruebo si existe el archivo y tiene pedidos.
                    if (file_exists('pedidos.txt') && filesize('pedidos.txt') > 0) {
                        // Leo todas las líneas del archivo en un array.
                        $lineas = file('pedidos.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

                        // Cuento cuántos pedidos hay.
                        $numPedidos = count($lineas);

                        // Solo hago el sorteo si hay pedidos.
                        if ($numPedidos > 0) {
                            // Genero un número aleatorio entre 1 y el total de pedidos.
                            $ganadorNum = rand(1, $numPedidos);

                            // Como los arrays empiezan en 0, resto 1 para coger la línea correcta.
                            $lineaGanadora = $lineas[$ganadorNum - 1];

                            // Separo la línea por el carácter |.
                            $datosGanador = explode('|', $lineaGanadora);

                            // El nombre del cliente está en la primera posición.
                            $nombreGanador = $datosGanador[0];
                        }
                    }

                    if ($numPedidos > 0) {
                        echo "<p><strong>Número de pedidos:</strong> $numPedidos</p>";
                        echo "<p><strong>Número aleatorio generado:</strong> $ganadorNum</p>";
                        echo "<p><strong>El ganador del sorteo es:</strong> " . htmlspecialchars($nombreGanador) . "</p>";
                        echo "<p>¡Enhorabuena!</p>";
                    } else {
                        echo "<p>No hay pedidos para sortear.</p>";
                    }
                    ?>

                    <div class="tarjeta-ganador">
                        <div class="ganador-info">
                            <div class="avatar-ganador">👑</div>
                            <div class="detalles-ganador">
                                <?php if ($numPedidos > 0): ?>
                                <h4><?php echo htmlspecialchars($nombreGanador); ?></h4>
                                <p class="fecha-sorteo">Sorteado: <?php echo date('d/m/Y H:i'); ?></p>
                                <?php else: ?>
                                <h4>No hay ganador</h4>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="pie">
            <p>El sorteo es automático y completamente aleatorio.</p>
        </footer>
    </div>
</body>
</html>
