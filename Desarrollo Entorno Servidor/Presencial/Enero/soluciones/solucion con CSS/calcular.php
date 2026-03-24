<?php
$precios = [
    'iphone' => 1000,
    'roomba' => 500,
    'reloj' => 100
];

$resultado = '';
$cliente = '';
$total = 0;
$encontrado = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cliente = trim($_POST['cliente'] ?? '');
    
    $archivo = fopen("pedidos.txt", "r");
    if ($archivo) {
        while (!feof($archivo)) {
            $linea = fgets($archivo);
            if (!empty(trim($linea))) {
                $datos = explode("|", trim($linea));
                if ($cliente == "" || $datos[0] == $cliente) {
                    $producto = $datos[2];
                    $cantidad = $datos[3];
                    if (isset($precios[$producto])) {
                        $total += $precios[$producto] * $cantidad;
                        $encontrado = true;
                    }
                }
            }
        }
        fclose($archivo);
    }
    
    if ($cliente != "" && !$encontrado) {
        $resultado = "Error. No se encuentra el cliente '$cliente'.";
    } else {
        if ($cliente == "") {
            $resultado = "Total de todos los pedidos: $total €";
        } else {
            $resultado = "Total de pedidos de $cliente: $total €";
        }
    }
}
?>
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
                <a href="verificar.php" class="btn btn-secundario">Menú Principal</a>
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
                    
                    <form method="post" class="formulario">
                        <div class="grupo-formulario">
                            <label for="cliente">Nombre del cliente (opcional)</label>
                            <input type="text" id="cliente" name="cliente" value="<?php echo htmlspecialchars($cliente); ?>">
                        </div>
                        
                        <div class="grupo-botones">
                            <button type="submit" class="btn btn-primario">Calcular Total</button>
                        </div>
                    </form>
                </div>
                
                <?php if ($resultado != ''): ?>
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