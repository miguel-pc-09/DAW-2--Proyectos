<?php

// Variables configurables por el administrador de la aplicación
// Cargo el archivo config.php una sola vez.
// "require_once" se leería como: requiere una vez este archivo.
// Si no existe o falla, el programa se para.
require_once "config.php";

// Variables configurables por el programador de la aplicación

// Nombres de las tablas
// Aquí guardo en el array de configuración el nombre de la tabla que voy a usar.
// Se leería como: en cfg, en la posición tablaPersonas, guardo "personas".
$cfg["tablaPersonas"] = "personas";           // Nombre de la tabla Personas

// FUNCIONES ESPECÍFICAS DE LA BASE DE DATOS MYSQL

// MYSQL: FUNCIÓN DE CONEXIÓN CON LA BASE DE DATOS

// FUNCIÓN DE CONEXIÓN CON LA BASE DE DATOS
// Se leería como: función conectaDb
// Esta función me devuelve la conexión con la base de datos.
function conectaDb()
{
    // Voy a usar dentro de esta función una variable que está fuera
    global $cfg;

    try {
        // Intento conectarme a la base de datos usando PDO
        // Le paso host, nombre de la BD, usuario y contraseña
        $tmp = new PDO("mysql:host=$cfg[mysqlHost];dbname=$cfg[mysqlDatabase];charset=utf8mb4", $cfg["mysqlUser"], $cfg["mysqlPassword"]);
    } catch (PDOException $e) {
        // Si falla la conexión con base de datos, intento conectarme solo al servidor MySQL (sin seleccionar BD)
        $tmp = new PDO("mysql:host=$cfg[mysqlHost];charset=utf8mb4", $cfg["mysqlUser"], $cfg["mysqlPassword"]);
    } catch (PDOException $e) {
        // Si vuelve a fallar, muestro un error por pantalla
        print "    <p class=\"aviso\">Error: No puede conectarse con la base de datos. {$e->getMessage()}</p>\n";
        // Termino la ejecución del programa
        exit;
    } finally {
        // Configuro PDO para que no lance errores automáticamente
        $tmp->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
        // Activo consultas con buffer (me permite recorrer resultados mejor)
        $tmp->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        // Devuelvo la conexión creada
        return $tmp;
    }
}

// MYSQL: FUNCIÓN DE BORRADO Y CREACIÓN DE BASE DE DATOS Y TABLA

function borraTodo()
{
    global $pdo, $cfg;

    $consulta = "DROP DATABASE IF EXISTS $cfg[mysqlDatabase]";

    if (!$pdo->query($consulta)) {
        print "    <p class=\"aviso\">Error al borrar la base de datos. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Base de datos borrada correctamente (si existía).</p>\n";
    }
    print "\n";

    $consulta = "CREATE DATABASE $cfg[mysqlDatabase]
                 CHARACTER SET utf8mb4
                 COLLATE utf8mb4_unicode_ci";

    if (!$pdo->query($consulta)) {
        print "    <p class=\"aviso\">Error al crear la base de datos. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Base de datos creada correctamente.</p>\n";
        print "\n";
    }

    $consulta = "USE $cfg[mysqlDatabase]";

    if (!$pdo->query($consulta)) {
        print "    <p class=\"aviso\">Error en la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Base de datos seleccionada correctamente.</p>\n";
        print "\n";
    }

    $consulta = "CREATE TABLE $cfg[tablaPersonas] (
                 id INTEGER UNSIGNED AUTO_INCREMENT,
                 nombre VARCHAR($cfg[tablaPersonasTamNombre]),
                 apellidos VARCHAR($cfg[tablaPersonasTamApellidos]),
                 PRIMARY KEY(id)
                 )";

    if (!$pdo->query($consulta)) {
        print "    <p class=\"aviso\">Error al crear la tabla. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Tabla creada correctamente.</p>\n";
    }
}

// FUNCIÓN DE INSERCIÓN DE REGISTRO

function insertaRegistro($nombre, $apellidos)
{
    global $pdo, $cfg;

    $consulta = "INSERT INTO $cfg[tablaPersonas]
                 (nombre, apellidos)
                 VALUES (:nombre, :apellidos)";

    $resultado = $pdo->prepare($consulta);
    if (!$resultado) {
        print "    <p class=\"aviso\">Error al preparar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } elseif (!$resultado->execute([":nombre" => $nombre, ":apellidos" => $apellidos])) {
        print "    <p class=\"aviso\">Error al ejecutar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Registro creado correctamente.</p>\n";
        print "\n";
    }
}

// FUNCIÓN DE CONTEO DE REGISTROS

function cuentaRegistros()
{
    global $pdo, $cfg;

    $consulta = "SELECT COUNT(*) FROM $cfg[tablaPersonas]";

    $resultado = $pdo->query($consulta);
    if (!$resultado) {
        print "    <p class=\"aviso\">Error en la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>La tabla contiene {$resultado->fetchColumn()} registro(s).</p>\n";
        print "\n";
    }
}

// FUNCIÓN DE SELECCIÓN DE TODOS LOS REGISTROS

function muestraRegistros()
{
    global $pdo, $cfg;

    $consulta = "SELECT * FROM $cfg[tablaPersonas]";

    $resultado = $pdo->query($consulta);
    if (!$resultado) {
        print "    <p class=\"aviso\">Error en la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p><strong>Registro(s) obtenido(s):</strong></p>\n";
        print "    <ul>\n";
        foreach ($resultado as $registro) {
            print "      <li>$registro[id] - $registro[nombre] - $registro[apellidos]</li>\n";
        }
        print "    </ul>\n";
        print "\n";
    }
}

// FUNCIÓN DE MODIFICACIÓN DE REGISTRO

function modificaRegistro($id, $nombre, $apellidos)
{
    global $pdo, $cfg;

    $consulta = "UPDATE $cfg[tablaPersonas]
                 SET nombre = :nombre, apellidos = :apellidos
                 WHERE id = :id";

    $resultado = $pdo->prepare($consulta);
    if (!$resultado) {
        print "    <p class=\"aviso\">Error al preparar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } elseif (!$resultado->execute([":nombre" => $nombre, ":apellidos" => $apellidos, ":id" => $id])) {
        print "    <p class=\"aviso\">Error al ejecutar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Registro modificado correctamente.</p>\n";
        print "\n";
    }
}

// FUNCIÓN DE BORRADO DE REGISTROS

function borraRegistros($id)
{
    global $pdo, $cfg;

    foreach ($id as $indice => $valor) {
        $consulta = "DELETE FROM $cfg[tablaPersonas]
                     WHERE id = :indice";

        $resultado = $pdo->prepare($consulta);
        if (!$resultado) {
            print "    <p class=\"aviso\">Error al preparar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
        } elseif (!$resultado->execute([":indice" => $indice])) {
            print "    <p class=\"aviso\">Error al ejecutar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
        } else {
            print "    <p>Registro borrado correctamente (si existía).</p>\n";
            print "\n";
        }
    }
}