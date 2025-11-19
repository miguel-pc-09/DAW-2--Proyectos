<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
</head>

<body>
    <?php
      $a = $_GET['a']; // Si utilizamos el metodo GET en el otro aqui podemos, si no el $_request
      $b = $_GET['b']; // Y si usamos post en el formulario aqui tambien podemos usar $_post
      echo "La suma de $a mas $b es ", $a + $b;
    ?>
</body>

</html>