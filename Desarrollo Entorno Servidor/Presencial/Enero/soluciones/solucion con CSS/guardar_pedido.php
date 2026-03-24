<?php
$nombre = $_POST['nombre'] ?? '';
$direccion = $_POST['direccion'] ?? '';
$producto = $_POST['producto'] ?? '';
$cantidad = $_POST['cantidad'] ?? '';
$fecha = date('Y-m-d H:i:s');

// Validar datos
$error = '';
if (empty($nombre)) $error = "El nombre es obligatorio";
if (empty($direccion)) $error = "La dirección es obligatoria";
if (empty($producto)) $error = "Debe seleccionar un producto";
if (!is_numeric($cantidad) || $cantidad < 1) $error = "La cantidad debe ser mayor que 0";

if ($error) {
    ?>
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error - Tienda Online</title>
        <link rel="stylesheet" href="css/estilos.css">
    </head>
    <body>
        <div class="contenedor-pedido">
            <div class="tarjeta-pedido">
                <h2 style="color: red;">Error al procesar el pedido</h2>
                <p><?php echo $error; ?></p>
                <a href="pedido.php" class="btn btn-primario">Volver al formulario</a>
            </div>
        </div>
    </body>
    </html>
    <?php
    exit();
}

$linea = "$nombre|$direccion|$producto|$cantidad|$fecha\n";

$archivo = fopen("pedidos.txt", "a");
if ($archivo) {
    fputs($archivo, $linea);
    fclose($archivo);
    $mensaje = "Pedido guardado correctamente.";
} else {
    $mensaje = "Error al guardar el pedido.";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedido Guardado - Tienda Online</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-pedido">
        <header class="cabecera">
            <h1>Tienda Online</h1>
        </header>
        
        <main class="principal">
            <div class="tarjeta-pedido">
                <h2>Pedido Procesado</h2>
                <p><?php echo $mensaje; ?></p>
                <div class="resumen-pedido">
                    <h3>Resumen del Pedido</h3>
                    <div class="detalle-resumen">
                        <p><strong>Cliente:</strong> <?php echo htmlspecialchars($nombre); ?></p>
                        <p><strong>Producto:</strong> <?php echo htmlspecialchars($producto); ?></p>
                        <p><strong>Cantidad:</strong> <?php echo htmlspecialchars($cantidad); ?></p>
                        <p><strong>Fecha:</strong> <?php echo $fecha; ?></p>
                    </div>
                </div>
                <div class="grupo-botones">
                    <a href="pedido.php" class="btn btn-primario">Hacer otro pedido</a>
                    <a href="verificar.php" class="btn btn-secundario">Volver al menú</a>
                </div>
            </div>
        </main>
    </div>
</body>
</html>