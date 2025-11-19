<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Resultado de la operación</title>
</head>

<body>
    <h2>Resultado</h2>

    <?php
    // 1) Recoger los datos del formulario (método POST)
    //    Como en el ejemplo del profesor, asumimos que los campos llegan bien.
    $n1 = (int) $_POST['n1'];
    $n2 = (int) $_POST['n2'];
    $operacion = $_POST['operacion']; // name="operacion" en el formulario

    // 2) Variables para guardar el resultado y posibles errores
    $resultado = 0;
    $resultadoOp = "";
    $error = "";

    // 3) Calcular según la operación elegida
    if ($operacion == "suma") {
        $resultado = $n1 + $n2;
        $resultadoOp = "suma";

    } elseif ($operacion == "resta") {
        $resultado = $n1 - $n2;
        $resultadoOp = "resta";

    } elseif ($operacion == "producto") {
        $resultado = $n1 * $n2;
        $resultadoOp = "producto";

    } elseif ($operacion == "cociente") {

        if ($n2 == 0) {
            // No se puede dividir entre 0
            $error = "No se puede dividir entre cero.";
        } else {
            $resultado = $n1 / $n2;
            $resultadoOp = "cociente";
        }

    } else {
        // Por si llega algo raro en "operacion"
        $error = "Operación no válida.";
    }

    // 4) Mostrar mensaje
    if ($error != "") {
        // Si hay error, lo mostramos
        echo "<p><strong>$error</strong></p>";
    } else {
        // Frase del enunciado
        echo "<p>El resultado de realizar $resultadoOp de los números $n1 y $n2 es $resultado.</p>";
    }
    ?>

    <p><a href="operaciones.php">Volver al formulario</a></p>

</body>

</html>