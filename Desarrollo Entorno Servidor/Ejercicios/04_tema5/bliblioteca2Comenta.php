<?php

// Cargo el archivo config.php una sola vez.
// "require_once" se leería como: requiere una vez este archivo.
// Si no existe o falla, el programa se para.
require_once "config.php";

// Aquí guardo en el array de configuración el nombre de la tabla que voy a usar.
// Se leería como: en cfg, en la posición tablaPersonas, guardo "personas".
$cfg["tablaPersonas"] = "personas"; // Nombre de la tabla Personas


// FUNCIÓN DE CONEXIÓN CON LA BASE DE DATOS
// Se leería como: función conectaDb
// Esta función me devuelve la conexión con la base de datos.
function conectaDb()
{
    // "global" significa que voy a usar aquí dentro una variable creada fuera de la función.
    // Se leería como: usa la variable global cfg dentro de esta función.
    global $cfg;

    // "try" se leería como: intenta hacer esto.
    try {
        // Creo una nueva conexión PDO a MySQL.
        // Se leería como:
        // nueva conexión PDO usando:
        // - el host guardado en cfg[mysqlHost]
        // - la base de datos guardada en cfg[mysqlDatabase]
        // - juego de caracteres utf8mb4
        // - el usuario guardado en cfg["mysqlUser"]
        // - la contraseña guardada en cfg["mysqlPassword"]
        $tmp = new PDO(
            "mysql:host=$cfg[mysqlHost];dbname=$cfg[mysqlDatabase];charset=utf8mb4",
            $cfg["mysqlUser"],
            $cfg["mysqlPassword"]
        );

    // "catch" se leería como: si falla lo anterior y se produce un error PDOException, entra aquí.
    } catch (PDOException $e) {

        // Si falla la conexión completa, intento conectarme solo al servidor MySQL
        // sin indicar todavía la base de datos.
        // Se leería como: nueva conexión PDO solo al host, con usuario y contraseña.
        try {
            $tmp = new PDO(
                "mysql:host=$cfg[mysqlHost];charset=utf8mb4",
                $cfg["mysqlUser"],
                $cfg["mysqlPassword"]
            );

        // Si también falla este segundo intento, entro aquí.
        } catch (PDOException $e) {
            // Muestro un mensaje de error en pantalla.
            // {$e->getMessage()} se leería como:
            // saca el mensaje del error que ha generado la excepción.
            print "    <p class=\"aviso\">Error: No puede conectarse con la base de datos. {$e->getMessage()}</p>\n";

            // "exit" se leería como: termina aquí la ejecución del programa.
            exit;
        }
    }

    // Aquí configuro la conexión una vez creada.
    // Se leería como: en el objeto tmp, establece este atributo.
    // PDO::ATTR_ERRMODE es el modo de errores.
    // PDO::ERRMODE_SILENT significa que no lance excepciones automáticamente, sino que deje consultar el error.
    $tmp->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);

    // Activo consultas con buffer.
    // Esto permite que los resultados se carguen en memoria y luego se recorran mejor.
    $tmp->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);

    // "return $tmp" se leería como: devuelve la conexión guardada en tmp.
    return $tmp;
}


// FUNCIÓN DE BORRADO Y CREACIÓN DE BASE DE DATOS Y TABLA
// Se leería como: función borraTodo.
// Esta función borra la base de datos si existe, la crea otra vez y crea la tabla personas.
function borraTodo()
{
    // Voy a usar dentro de esta función dos variables globales:
    // - $pdo: la conexión a la base de datos
    // - $cfg: la configuración
    global $pdo, $cfg;

    // Guardo en la variable consulta una instrucción SQL para borrar la base de datos si existe.
    // Se leería como: consulta igual a DROP DATABASE IF EXISTS nombreBaseDeDatos
    $consulta = "DROP DATABASE IF EXISTS $cfg[mysqlDatabase]";

    // Ejecuto la consulta con query().
    // El símbolo ! delante significa "si NO".
    // Se leería como: si no se puede ejecutar la consulta...
    if (!$pdo->query($consulta)) {
        // Muestro mensaje de error con el código SQLSTATE y el texto del error.
        print "    <p class=\"aviso\">Error al borrar la base de datos. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        // Si todo ha ido bien, muestro mensaje correcto.
        print "    <p>Base de datos borrada correctamente (si existía).</p>\n";
    }

    // Imprimo un salto de línea en el HTML generado.
    print "\n";

    // Preparo la consulta para crear la base de datos.
    // CHARACTER SET utf8mb4 indica el juego de caracteres.
    // COLLATE utf8mb4_unicode_ci indica la forma de comparar textos.
    $consulta = "CREATE DATABASE $cfg[mysqlDatabase]
                 CHARACTER SET utf8mb4
                 COLLATE utf8mb4_unicode_ci";

    // Intento crear la base de datos.
    if (!$pdo->query($consulta)) {
        print "    <p class=\"aviso\">Error al crear la base de datos. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Base de datos creada correctamente.</p>\n";
        print "\n";
    }

    // Preparo la consulta USE para seleccionar la base de datos recién creada.
    // Se leería como: usa esta base de datos.
    $consulta = "USE $cfg[mysqlDatabase]";

    // Intento seleccionar la base de datos.
    if (!$pdo->query($consulta)) {
        print "    <p class=\"aviso\">Error en la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Base de datos seleccionada correctamente.</p>\n";
        print "\n";
    }

    // Preparo la consulta SQL para crear la tabla personas.
    // id será entero positivo, autoincremental.
    // nombre y apellidos tendrán el tamaño indicado en la configuración.
    // PRIMARY KEY(id) indica que id es la clave principal.
    $consulta = "CREATE TABLE $cfg[tablaPersonas] (
                 id INTEGER UNSIGNED AUTO_INCREMENT,
                 nombre VARCHAR($cfg[tablaPersonasTamNombre]),
                 apellidos VARCHAR($cfg[tablaPersonasTamApellidos]),
                 PRIMARY KEY(id)
                 )";

    // Intento crear la tabla.
    if (!$pdo->query($consulta)) {
        print "    <p class=\"aviso\">Error al crear la tabla. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        print "    <p>Tabla creada correctamente.</p>\n";
    }
}


// FUNCIÓN DE INSERCIÓN DE REGISTRO
// Se leería como: función insertaRegistro, recibe nombre y apellidos.
// Esta función inserta una persona nueva en la tabla.
function insertaRegistro($nombre, $apellidos)
{
    // Uso la conexión y la configuración globales.
    global $pdo, $cfg;

    // Preparo una consulta SQL INSERT.
    // :nombre y :apellidos son marcadores.
    // Luego les pasaré los valores reales al ejecutar.
    $consulta = "INSERT INTO $cfg[tablaPersonas]
                 (nombre, apellidos)
                 VALUES (:nombre, :apellidos)";

    // "prepare" se leería como: prepara esta consulta para ejecutarla después.
    $resultado = $pdo->prepare($consulta);

    // Si no se pudo preparar la consulta, muestro error.
    if (!$resultado) {
        print "    <p class=\"aviso\">Error al preparar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";

    // Si sí se preparó pero falla al ejecutarla con los datos, muestro error.
    // "execute" se leería como: ejecuta la consulta sustituyendo:
    // :nombre por $nombre
    // :apellidos por $apellidos
    } elseif (!$resultado->execute([":nombre" => $nombre, ":apellidos" => $apellidos])) {
        print "    <p class=\"aviso\">Error al ejecutar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        // Si todo va bien, mensaje correcto.
        print "    <p>Registro creado correctamente.</p>\n";
        print "\n";
    }
}


// FUNCIÓN DE CONTEO DE REGISTROS
// Se leería como: función cuentaRegistros.
// Esta función cuenta cuántos registros hay en la tabla.
function cuentaRegistros()
{
    global $pdo, $cfg;

    // Consulta SQL que cuenta todos los registros.
    // COUNT(*) significa contar todas las filas.
    $consulta = "SELECT COUNT(*) FROM $cfg[tablaPersonas]";

    // Ejecuto la consulta directamente con query().
    $resultado = $pdo->query($consulta);

    // Si falla la consulta, muestro error.
    if (!$resultado) {
        print "    <p class=\"aviso\">Error en la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        // fetchColumn() se leería como: coge el valor de la primera columna del resultado.
        // En este caso devuelve el número total de registros.
        print "    <p>La tabla contiene {$resultado->fetchColumn()} registro(s).</p>\n";
        print "\n";
    }
}


// FUNCIÓN DE SELECCIÓN DE TODOS LOS REGISTROS
// Se leería como: función muestraRegistros.
// Esta función muestra todos los registros guardados.
function muestraRegistros()
{
    global $pdo, $cfg;

    // Consulta SQL para seleccionar todas las columnas de la tabla.
    // SELECT * significa todas las columnas.
    $consulta = "SELECT * FROM $cfg[tablaPersonas]";

    // Ejecuto la consulta.
    $resultado = $pdo->query($consulta);

    // Si falla, muestro error.
    if (!$resultado) {
        print "    <p class=\"aviso\">Error en la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        // Si va bien, saco un pequeño listado HTML.
        print "    <p><strong>Registro(s) obtenido(s):</strong></p>\n";
        print "    <ul>\n";

        // "foreach" se leería como:
        // para cada registro que venga en el resultado, haz esto.
        foreach ($resultado as $registro) {
            // Muestro id, nombre y apellidos del registro actual.
            // $registro["id"], $registro["nombre"] y $registro["apellidos"]
            // son los datos de cada fila.
            print "      <li>$registro[id] - $registro[nombre] - $registro[apellidos]</li>\n";
        }

        // Cierro la lista HTML.
        print "    </ul>\n";
        print "\n";
    }
}


// FUNCIÓN DE MODIFICACIÓN DE REGISTRO
// Se leería como: función modificaRegistro, recibe id, nombre y apellidos.
// Esta función actualiza un registro ya existente.
function modificaRegistro($id, $nombre, $apellidos)
{
    global $pdo, $cfg;

    // Consulta SQL UPDATE.
    // Cambia nombre y apellidos del registro cuyo id coincida.
    $consulta = "UPDATE $cfg[tablaPersonas]
                 SET nombre = :nombre, apellidos = :apellidos
                 WHERE id = :id";

    // Preparo la consulta.
    $resultado = $pdo->prepare($consulta);

    // Si falla la preparación, muestro error.
    if (!$resultado) {
        print "    <p class=\"aviso\">Error al preparar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";

    // Si falla al ejecutar pasando los valores reales, muestro error.
    } elseif (!$resultado->execute([":nombre" => $nombre, ":apellidos" => $apellidos, ":id" => $id])) {
        print "    <p class=\"aviso\">Error al ejecutar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
    } else {
        // Si todo va bien, aviso correcto.
        print "    <p>Registro modificado correctamente.</p>\n";
        print "\n";
    }
}


// FUNCIÓN DE BORRADO DE REGISTROS
// Se leería como: función borraRegistros, recibe id.
// En realidad aquí espera un array de ids para borrar varios registros.
function borraRegistros($id)
{
    global $pdo, $cfg;

    // "foreach ($id as $indice => $valor)" se leería como:
    // recorre el array id, y en cada vuelta guarda:
    // - en $indice la clave del array
    // - en $valor el valor de esa posición
    foreach ($id as $indice => $valor) {

        // Consulta SQL DELETE para borrar el registro cuyo id coincida.
        $consulta = "DELETE FROM $cfg[tablaPersonas]
                     WHERE id = :indice";

        // Preparo la consulta.
        $resultado = $pdo->prepare($consulta);

        // Si falla al preparar, muestro error.
        if (!$resultado) {
            print "    <p class=\"aviso\">Error al preparar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";

        // Si falla al ejecutar, muestro error.
        // Aquí se sustituye :indice por el valor de $indice.
        } elseif (!$resultado->execute([":indice" => $indice])) {
            print "    <p class=\"aviso\">Error al ejecutar la consulta. SQLSTATE[{$pdo->errorCode()}]: {$pdo->errorInfo()[2]}</p>\n";
        } else {
            // Si va bien, aviso correcto.
            print "    <p>Registro borrado correctamente (si existía).</p>\n";
            print "\n";
        }
    }
}