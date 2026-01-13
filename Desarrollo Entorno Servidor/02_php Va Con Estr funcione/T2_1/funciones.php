<!-- Ejemplo funcion -->
<?php 
    function suma ($x, $y)
{
    $s = $x + $y;
    return $s;
}

$a=1;
$b=2;
$c=suma ($a, $b);
print $c;
 ?>

<!-- Por defecto los parámetros se pasan por valor
▪ Paso por referencia: -->
<?php 
function incrementa (&$a)
{
$a = $a + 1;
}
$a=1;
incrementa ($a);
print $a; // Muestra un 2
?>

<!-- Argumentos por defecto  -->
<?php 
 function muestranombre ($titulo = "Sr.")
{
print "Estimado $titulo:\n";
}
muestranombre ();
muestranombre ("Prof.");
 ?>
<!--  Salida:
Estimado Sr.:
Estimado Prof.: -->

<!-- Los argumentos con valores por defecto deben ser siempre los
últimos: -->
<?php 
function muestranombre2 ($nombre, $titulo= "Sr.")
{
print "Estimado $titulo $nombre:\n";
}
muestranombre2 ("Fernández");
muestranombre2 ("Fernández", "Prof.");
?>
<!-- Salida:
Estimado Sr. Fernández:
Estimado Prof. Fernández: -->