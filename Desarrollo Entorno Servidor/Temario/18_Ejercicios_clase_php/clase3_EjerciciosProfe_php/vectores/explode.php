<!-- Divide una cadena en subcadenas -->
<!-- array explode ( string separator, string string [,int limit]) -->

<?php
    $frase = "hola que tal";
    $array = explode(" ", $frase);
    print_r($array);
?>