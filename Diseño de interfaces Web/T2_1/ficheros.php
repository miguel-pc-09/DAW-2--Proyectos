<!-- Inclusión de ficheros externos:
▪ include()
▪ require() 
Ambos incluyen y evalúan el fichero especificado
▪ Diferencia: en caso de error include() produce un warning y require() un error fatal
▪ Se usará require() si al producirse un error debe interrumpirse la carga de la página-->
<HTML>

<HEAD>
    <TITLE>Título</TITLE>

    <?PHP
// Incluir bibliotecas de funciones
require ("conecta.php");
require ("fecha.php");
require ("cadena.php");
require ("globals.php");
?>
</HEAD>

<BODY>
    <?PHP
include ("cabecera.html");
?>
    <!-- // Código HTML + PHP
    . . . -->
    <?PHP
include ("pie.html");
?>
</BODY>

</HTML>