<?php
$usuario = $_POST['usuario'] ?? '';
$clave = $_POST['clave'] ?? '';

$login_correcto = false;

// Abrir archivo de claves
$archivo = fopen("clave.txt", "r");
if ($archivo) {
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        if (!empty(trim($linea))) {
            $partes = explode(" ", trim($linea), 2);
            if (count($partes) == 2) {
                if ($partes[0] == $usuario && $partes[1] == $clave) {
                    $login_correcto = true;
                    break;
                }
            }
        }
    }
    fclose($archivo);
}

if ($login_correcto) {
    // Mostrar menú principal con diseño
    ?>
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Menú Principal - Tienda Online</title>
        <link rel="stylesheet" href="css/estilos.css">
    </head>
    <body>
        <div class="contenedor-menu">
            <header class="cabecera">
                <h1>Tienda Online</h1>
                <div class="info-usuario">
                    <p>Usuario: <strong><?php echo htmlspecialchars($usuario); ?></strong></p>
                    <a href="login.html" class="btn btn-secundario">Cerrar Sesión</a>
                </div>
            </header>
            
            <main class="principal">
                <div class="bienvenida">
                    <h2>¡Bienvenido al Sistema de Gestión!</h2>
                    <p class="descripcion">
                        Selecciona una opción del menú para comenzar a gestionar los pedidos
                    </p>
                </div>
                
                <div class="grid-opciones">
                    <div class="tarjeta-opcion">
                        <div class="icono-opcion">📝</div>
                        <h3>Hacer Pedido</h3>
                        <p>Registra un nuevo pedido en el sistema</p>
                        <a href="pedido.php" class="btn btn-primario">Acceder a Pedidos</a>
                    </div>
                    
                    <div class="tarjeta-opcion">
                        <div class="icono-opcion">📋</div>
                        <h3>Mostrar Pedidos</h3>
                        <p>Consulta todos los pedidos registrados</p>
                        <a href="mostrar.php" class="btn btn-primario">Ver Listado</a>
                    </div>
                    
                    <div class="tarjeta-opcion">
                        <div class="icono-opcion">💰</div>
                        <h3>Calcular Precio</h3>
                        <p>Calcula el importe de pedidos específicos</p>
                        <a href="calcular.php" class="btn btn-primario">Calcular Importes</a>
                    </div>
                    
                    <div class="tarjeta-opcion">
                        <div class="icono-opcion">🎁</div>
                        <h3>Sorteo de Pedido</h3>
                        <p>Realiza un sorteo entre los pedidos</p>
                        <a href="sorteo.php" class="btn btn-primario">Realizar Sorteo</a>
                    </div>
                </div>
            </main>
            
            <footer class="pie">
                <p>Sistema de Gestión de Tienda Online</p>
            </footer>
        </div>
    </body>
    </html>
    <?php
} else {
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
        <div class="contenedor-login">
            <div class="tarjeta-login">
                <h2 style="color: red;">Error de autenticación</h2>
                <p>Las credenciales introducidas no son correctas.</p>
                <a href="login.html" class="btn btn-primario">Volver al formulario</a>
            </div>
        </div>
    </body>
    </html>
    <?php
}
?>