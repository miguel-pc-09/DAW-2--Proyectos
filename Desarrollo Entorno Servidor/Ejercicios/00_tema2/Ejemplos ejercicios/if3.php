<?php
print "<h1>Tirada de dado</h1>\n";
$dado = rand(1, 6);
print "<p>Ha sacado un $dado.</p>\n";
if ($dado == 6) {
    print "<p>¡Ha conseguido la máxima puntuación!</p>\n";
}
else{
	print "<p>¡Menos de 6!</p>\n";
}
print "<p>¡Hasta la próxima!</p>\n";
?>