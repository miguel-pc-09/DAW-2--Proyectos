<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Indico la codificación del documento -->
    <meta charset="UTF-8">

    <!-- Hago la página adaptable a distintos dispositivos -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título de la pestaña -->
    <title>Verificación - Tienda Online</title>

    <!-- Cargo la hoja de estilos -->
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-menu">
        <?php
        /*
        TAREA 1: OBTENER DATOS DEL FORMULARIO
        - Recuperar el usuario y clave enviados por POST
        - Usar $_POST['usuario'] y $_POST['clave']
        - Guardar en variables: $usuario, $clave
        */

        // Recojo el usuario enviado desde login.html.
        // Se leería como: en usuario guarda lo que venga en POST con nombre usuario.
        // Uso isset para evitar aviso si alguien entra directamente a este archivo.
        $usuario = isset($_POST['usuario']) ? trim($_POST['usuario']) : '';

        // Recojo la clave enviada desde login.html.
        // Se leería como: en clave guarda lo que venga en POST con nombre clave.
        $clave = isset($_POST['clave']) ? trim($_POST['clave']) : '';

        // Creo una variable para saber si el login es correcto o no.
        // Empieza en false porque todavía no he comprobado nada.
        $login_correcto = false;

        /*
        TAREA 2: LEER ARCHIVO DE CLAVES (clave.txt)
        - Abrir el archivo clave.txt en modo lectura
        - Usar fopen(), fgets(), feof(), fclose()
        - Leer línea por línea
        - Cada línea tiene formato: "usuario clave"
        */

        // Intento abrir el archivo clave.txt en modo lectura.
        // Se leería como: abre clave.txt con permiso solo de lectura.
        $archivo = fopen("clave.txt", "r");

        // Compruebo que el archivo se haya abierto bien.
        if ($archivo) {
            // Recorro el archivo hasta llegar al final.
            // Se leería como: mientras no sea final de archivo, sigue leyendo.
            while (!feof($archivo)) {
                // Leo una línea del archivo.
                // Se leería como: guarda en linea la siguiente línea del archivo.
                $linea = fgets($archivo);

                // Quito espacios al principio y al final y compruebo que la línea no esté vacía.
                if (!empty(trim($linea))) {
                    // Divido la línea usando el espacio como separador.
                    // Ejemplo: admin 1234 -> [admin, 1234]
                    $partes = explode(" ", trim($linea));

                    /*
                    TAREA 3: VALIDAR CREDENCIALES
                    - Para cada línea del archivo:
                      * Dividir la línea en dos partes (usuario y clave)
                      * Comparar con los datos del formulario
                      * Si coinciden: $login_correcto = true
                    */

                    // Compruebo que realmente haya dos datos: usuario y clave.
                    if (count($partes) == 2) {
                        // Comparo el usuario del archivo con el del formulario
                        // y la clave del archivo con la del formulario.
                        if ($partes[0] == $usuario && $partes[1] == $clave) {
                            // Si coinciden, marco el login como correcto.
                            $login_correcto = true;

                            // Salgo del bucle porque ya no hace falta seguir buscando.
                            break;
                        }
                    }
                }
            }

            // Cierro el archivo cuando termino de leerlo.
            fclose($archivo);
        }

        /*
        TAREA 4: MOSTRAR RESULTADO
        CASO A: Login correcto
          - Mostrar mensaje de bienvenida
          - Mostrar menú con 4 opciones

        CASO B: Login incorrecto
          - Mostrar mensaje "Error"
          - Enlace para volver a login.html
        */

        // Si login_correcto vale true, muestro el menú principal.
        if ($login_correcto) {
            echo "<header class='cabecera'>";
            echo "<h1>Tienda Online</h1>";
            echo "<div class='info-usuario'>";
            echo "<p>Usuario: <strong>" . htmlspecialchars($usuario) . "</strong></p>";
            echo "<a href='login.html' class='btn btn-secundario'>Cerrar Sesión</a>";
            echo "</div>";
            echo "</header>";

            echo "<main class='principal'>";
            echo "<div class='bienvenida'>";
            echo "<h2>¡Bienvenido al Sistema de Gestión!</h2>";
            echo "<p>Selecciona una de las opciones disponibles.</p>";
            echo "</div>";

            echo "<div class='grid-opciones'>";

            // Opción 1: ir al formulario de pedidos.
            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>📝</div>";
            echo "<h3>Nuevo Pedido</h3>";
            echo "<p>Registrar un nuevo pedido de cliente.</p>";
            echo "<a href='pedido.php' class='btn btn-primario'>Ir a pedidos</a>";
            echo "</div>";

            // Opción 2: mostrar pedidos guardados.
            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>📋</div>";
            echo "<h3>Mostrar Pedidos</h3>";
            echo "<p>Ver el listado completo de pedidos registrados.</p>";
            echo "<a href='mostrar.php' class='btn btn-primario'>Ver pedidos</a>";
            echo "</div>";

            // Opción 3: calcular el importe total.
            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>💶</div>";
            echo "<h3>Calcular Precios</h3>";
            echo "<p>Calcular total general o por cliente.</p>";
            echo "<a href='calcular.php' class='btn btn-primario'>Calcular</a>";
            echo "</div>";

            // Opción 4: realizar sorteo.
            echo "<div class='tarjeta-opcion'>";
            echo "<div class='icono-opcion'>🎁</div>";
            echo "<h3>Sorteo</h3>";
            echo "<p>Elegir al azar un cliente ganador.</p>";
            echo "<a href='sorteo.php' class='btn btn-primario'>Ir al sorteo</a>";
            echo "</div>";

            echo "</div>";
            echo "</main>";
        } else {
            // Si el login es incorrecto, muestro mensaje de error.
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
