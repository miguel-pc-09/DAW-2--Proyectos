<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación - Tienda Online</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-menu">
        <?php
        // Recibo el usuario enviado desde el formulario.
        // Se leería así: en usuario guarda lo que venga en POST con nombre usuario.
        $usuario = isset($_POST['usuario']) ? trim($_POST['usuario']) : '';

        // Recibo la clave enviada desde el formulario.
        // Se leería así: en clave guarda lo que venga en POST con nombre clave.
        $clave = isset($_POST['clave']) ? trim($_POST['clave']) : '';

        // Variable para saber si el login es correcto o no.
        $login_correcto = false;

        // Compruebo que el archivo de claves exista antes de leerlo.
        if (file_exists('clave.txt')) {
            // Abro el archivo en modo lectura.
            // Se leería así: abre clave.txt para leer.
            $archivo = fopen('clave.txt', 'r');

            // Si el archivo se ha abierto bien, lo recorro línea a línea.
            if ($archivo) {
                // Mientras no llegue al final del archivo, sigue leyendo.
                while (!feof($archivo)) {
                    // Leo una línea del archivo.
                    $linea = fgets($archivo);

                    // Quito espacios y saltos de línea sobrantes.
                    $linea = trim($linea);

                    // Solo proceso la línea si no está vacía.
                    if ($linea != '') {
                        // Separo la línea por espacios.
                        // Ejemplo: admin 1234 -> [admin, 1234]
                        $partes = explode(' ', $linea);

                        // Compruebo que la línea tenga dos partes: usuario y clave.
                        if (count($partes) == 2) {
                            // Comparo lo del archivo con lo escrito en el formulario.
                            if ($partes[0] == $usuario && $partes[1] == $clave) {
                                // Si coinciden, el login es correcto.
                                $login_correcto = true;

                                // Ya no hace falta seguir buscando.
                                break;
                            }
                        }
                    }
                }

                // Cierro el archivo cuando termino de usarlo.
                fclose($archivo);
            }
        }

        // Si el login es correcto, muestro el menú principal.
        if ($login_correcto) {
            echo "<header class='cabecera'>";
            echo "<h1>Tienda Online</h1>";
            echo "<div class='info-usuario'>";
            echo "<p>Usuario: <strong>" . htmlspecialchars($usuario) . "</strong></p>";
            echo "<a href='login.html' class='btn btn-secundario'>Cerrar Sesión</a>";
            echo "</div>";
            echo "</header>";

            echo "<main class='principal'>";
            echo "<div class='tarjeta-pedido'>";
            echo "<h2>¡Bienvenido " . htmlspecialchars($usuario) . "!</h2>";
            echo "<p class='descripcion'>Selecciona una opción del sistema.</p>";
            echo "</div>";

            echo "<div class='grid-opciones'>";
            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>📝</div>";
            echo "<h3>Hacer Pedido</h3>";
            echo "<p>Registrar un nuevo pedido.</p>";
            echo "<a href='pedido.php' class='btn btn-primario'>Ir</a>";
            echo "</div>";

            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>📋</div>";
            echo "<h3>Mostrar Pedidos</h3>";
            echo "<p>Ver todos los pedidos guardados.</p>";
            echo "<a href='mostrar.php' class='btn btn-primario'>Ir</a>";
            echo "</div>";

            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>💶</div>";
            echo "<h3>Calcular Precio</h3>";
            echo "<p>Calcular el importe total de pedidos.</p>";
            echo "<a href='calcular.php' class='btn btn-primario'>Ir</a>";
            echo "</div>";

            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>🎁</div>";
            echo "<h3>Sorteo del Pedido</h3>";
            echo "<p>Elegir un ganador de forma aleatoria.</p>";
            echo "<a href='sorteo.php' class='btn btn-primario'>Ir</a>";
            echo "</div>";
            echo "</div>";
            echo "</main>";
        } else {
            // Si el login falla, muestro mensaje de error.
            echo "<div class='tarjeta-login'>";
            echo "<h2 style='color: red;'>Error de autenticación</h2>";
            echo "<p>Las credenciales introducidas no son correctas.</p>";
            echo "<a href='login.html' class='btn btn-primario'>Volver al formulario</a>";
            echo "</div>";
        }
        ?>

        <footer class="pie">
            <p>Sistema de Gestión de Tienda Online</p>
        </footer>
    </div>
</body>
</html>
