<?php
print "<h1>Tirada de dado</h1>\n";
$dado = rand(1,6);
print "<p>Ha sacado un $dado.</p>\n";
if ($dado == 6) {
    print "<p>¡Ha conseguido la máxima puntuación!</p>\n";
}
else
{
	print "<p> Tienes menos de 6</p>"; 
}

print "<p>¡Hasta la próxima!</p>\n";

// && (and)  ||(OR)  !(NOT)
$diaMes = rand(1,31);
echo $diaMes."<br>";

if ( $diaMes < 7 ){
     echo 'Estamos a primeros de mes';
}
if ( $diaMes >= 7 && $diaMes <=23 ){
    echo 'Es mediados de mes';
}
if ( $diaMes > 23 ){
    echo 'Es final de mes';
}

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