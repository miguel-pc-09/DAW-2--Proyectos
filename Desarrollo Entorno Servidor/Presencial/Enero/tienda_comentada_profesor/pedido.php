<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Codificación de caracteres -->
    <meta charset="UTF-8">

    <!-- Adaptación a distintos tamaños de pantalla -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título de la página -->
    <title>Nuevo Pedido - Tienda Online</title>

    <!-- Hoja de estilos externa -->
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor-pedido">
        <header class="cabecera">
            <h1>Tienda Online</h1>
            <nav class="navegacion">
                <a href="login.html" class="btn btn-secundario">Menú Principal</a>
                <a href="mostrar.php" class="btn btn-secundario">Ver Pedidos</a>
            </nav>
        </header>

        <main class="principal">
            <div class="tarjeta-pedido">
                <h2>Realizar Nuevo Pedido</h2>
                <p class="descripcion">Complete el formulario para registrar un nuevo pedido</p>

                <!-- 
                TAREA: Este formulario debe enviar los datos a guardar_pedido.php
                Campos obligatorios:
                  - nombre (texto)
                  - direccion (textarea)
                  - producto (select: iphone, roomba, reloj)
                  - cantidad (number, mínimo 1)
                -->
                <!-- Este formulario envía los datos del pedido al archivo guardar_pedido.php -->
                <!-- Se leería como: form action guardar_pedido.php method post -->
                <form action="guardar_pedido.php" method="post" class="formulario">
                    <fieldset class="grupo-campos">
                        <legend>Datos del Cliente</legend>

                        <div class="grupo-formulario">
                            <label for="nombre">Nombre completo *</label>

                            <!-- Campo de texto para el nombre del cliente -->
                            <input type="text" id="nombre" name="nombre" required>
                        </div>

                        <div class="grupo-formulario">
                            <label for="direccion">Dirección de envío *</label>

                            <!-- Área de texto para escribir la dirección -->
                            <textarea id="direccion" name="direccion" rows="3" required></textarea>
                        </div>
                    </fieldset>

                    <fieldset class="grupo-campos">
                        <legend>Producto a Pedir</legend>

                        <div class="grupo-formulario">
                            <label for="producto">Seleccione producto *</label>

                            <!-- Lista desplegable para elegir un producto -->
                            <select id="producto" name="producto" required>
                                <option value="">-- Elija un producto --</option>
                                <option value="iphone">iPhone - 1.000€</option>
                                <option value="roomba">Roomba - 500€</option>
                                <option value="reloj">Reloj Inteligente - 100€</option>
                            </select>
                        </div>

                        <div class="grupo-formulario">
                            <label for="cantidad">Cantidad *</label>

                            <!-- Campo numérico para la cantidad -->
                            <!-- min 1 evita que se pidan 0 unidades o negativas -->
                            <input type="number" id="cantidad" name="cantidad" min="1" value="1" required>
                        </div>
                    </fieldset>

                    <div class="grupo-botones">
                        <!-- Botón para enviar el pedido -->
                        <button type="submit" class="btn btn-primario">Confirmar Pedido</button>

                        <!-- Botón para limpiar todos los campos del formulario -->
                        <button type="reset" class="btn btn-secundario">Limpiar Formulario</button>
                    </div>
                </form>
            </div>
        </main>

        <footer class="pie">
            <p>Complete todos los campos marcados con * para registrar el pedido</p>
        </footer>
    </div>
</body>
</html>
