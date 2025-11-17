<?php // && (and)  ||(OR)  !(NOT)
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
?>