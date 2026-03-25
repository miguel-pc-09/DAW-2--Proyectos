<!-- Esta es la cabecera común de la aplicación.
     La uso para no repetir el menú en todos los archivos.-->

<nav class="navbar navbar-dark barra-app sombra-suave">
    <div class="container contenedor-barra">

        <a href="<?php echo $rutaBase; ?>panel.php" class="navbar-brand marca-app">
            <img src="<?php echo $rutaBase; ?>img/Favicon.png" alt="Icono Eventos Tech" class="icono-cabecera">
            <span class="texto-logo">EVENTOS TECH</span>
        </a>

        <!-- Menú de navegación -->
        <div class="menu-navegacion">
            <a href="<?php echo $rutaBase; ?>panel.php" class="btn btn-light btn-sm">Panel</a>
            <a href="<?php echo $rutaBase; ?>eventos/listar.php" class="btn btn-light btn-sm">Eventos</a>
            <a href="<?php echo $rutaBase; ?>eventos/crear.php" class="btn btn-light btn-sm">Crear</a>
            <a href="<?php echo $rutaBase; ?>logout.php" class="btn btn-danger btn-sm">Salir</a>
        </div>
    </div>
</nav>