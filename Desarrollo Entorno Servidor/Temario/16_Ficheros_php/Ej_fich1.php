<?php

$nombreArchivo = "clase1.txt";
$mensaje=" pasado es domingo";

//abrir un fichero
$archivo = fopen($nombreArchivo, "a"); // w - write(sobreescribe) a-append(anade al final)
//echo $archivo;
fwrite($archivo, $mensaje);
/* fputs($archivo, $mensaje); // escribe en el fichero */
// echo "<br> fichero grabado";
fclose($archivo); // cierra el fichero.

?>