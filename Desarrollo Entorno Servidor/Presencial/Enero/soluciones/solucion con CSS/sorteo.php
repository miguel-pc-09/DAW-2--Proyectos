<?php
// Contar pedidos
$numPedidos = 0;
$archivo = fopen("pedidos.txt", "r");
if ($archivo) {
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        if (!empty(trim($linea))) {
            $numPedidos++;
        }
    }
    fclose($archivo);
}

$mensaje = '';
$nombreGanador = '';

if ($numPedidos == 0) {
    $mensaje = "No hay pedidos para sortear.";
} else {
    $ganadorNum = rand(1, $numPedidos);
    
    // Leer el pedido ganador
    $contador = 0;
    $archivo = fopen("pedidos.txt", "r");
    if ($archivo) {
        while (!feof($archivo)) {
            $linea = fgets($archivo);
            if (!empty(trim($linea))) {
                $contador++;
                if ($contador == $ganadorNum) {
                    $datos = explode("|", trim($linea));
                    $nombreGanador = $datos[0];
                    break;
                }
            }
        }
        fclose($archivo);
    }
    
    $mensaje = "Número de pedidos: $numPedidos<br>";
    $mensaje .= "Número aleatorio generado: $ganadorNum<br>";
    $mensaje .= "El ganador del sorteo es: ";
}
?>
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
                <a href="verificar.php" class="btn btn-secundario">Menú Principal</a>
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
                
                <div class="resultado-sorteo">
                    <h3>Resultado del Sorteo</h3>
                    <div class="tarjeta-ganador">
                        <div class="ganador-info">
                            <div class="avatar-ganador">👑</div>
                            <div class="detalles-ganador">
                                <?php
                                if ($numPedidos > 0) {
                                    echo "<h4>" . htmlspecialchars($nombreGanador) . "</h4>";
                                    echo "<p class='fecha-sorteo'>Sorteado: " . date('d/m/Y H:i') . "</p>";
                                } else {
                                    echo "<h4>No hay ganador</h4>";
                                }
                                ?>
                            </div>
                        </div>
                    </div>
                    
                    <div class="historial-sorteos">
                        <h4>Información del Sorteo</h4>
                        <p><?php echo $mensaje; ?><strong><?php echo htmlspecialchars($nombreGanador); ?></strong></p>
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