<!-- Eliminan caracteres a la derecha, a la izquierda o por ambos lados de una cadena -->
<!-- string rtrim (string str [,string charlist]) -->

<?php
    $frase = "hola que tal";
    $frase = rtrim($frase, "al");
    print_r($frase);
?>