<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operaciones</title>
</head>

<body>
    <h2>Formulario de operaciones</h2>

    <!-- form: agrupa los campos y define a dónde y cómo se envían -->
    <form action="datos_operaciones.php" method="post">

        <!-- Primer número -->
        <label>Introduzca el primer número:

            <!-- type="number" para que el navegador pida número -->
            <input type="number" name="n1" required>
        </label>
        <br><br>

        <!-- Segundo número -->
        <label>Introduzca el segundo número:
            <!-- lo mismo que con el numero 1  -->
            <input type="number" name="n2" required>
        </label>
        <br><br>

        <!-- Grupo de radios: todos comparten el mismo name="op" -->
        <p>Seleccione la operación:</p>
        <label><input type="radio" name="operacion" value="suma" checked> Suma</label>
        <label><input type="radio" name="operacion" value="resta"> Resta</label>
        <label><input type="radio" name="operacion" value="producto"> Producto</label>
        <label><input type="radio" name="operacion" value="cociente"> Cociente</label>
        <br><br>

        <!-- Botón que envía el formulario -->
        <input type="submit" value="Enviar datos">
    </form>
</body>

</html>