<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <?php

include_once 'Vehiculo.php';

$miCoche = new Coche(); 
$miCoche->color = 'Rojo';
$miCoche->potencia = 120;
$miCoche->marca = 'seat';

$otroCoche = new Coche(); 
$otroCoche->color = 'Verde';
$otroCoche->potencia = 110;
$otroCoche->marca = 'audi';

$miCoche2 = new Coche(); 
$miCoche2->color = 'Azul';
$miCoche2->potencia = 100;
$miCoche2->marca = 'bmw';

$miCoche->printCaracteristicas();
$otroCoche->printCaracteristicas();
$miCoche2->printCaracteristicas();

?>
</body>

</html>