<?php 

class Coche {
    public $color;
    public $potencia;
    public $marca;

    public function printCaracteristicas() {
        echo 'Color: ' . $this->color . "<br>";
        echo 'Potencia: ' . $this->potencia . "<br>";
        echo 'Marca: ' . $this->marca . "<br><br>";
    }
}
?>