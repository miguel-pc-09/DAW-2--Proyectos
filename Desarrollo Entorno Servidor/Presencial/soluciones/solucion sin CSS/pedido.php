<!DOCTYPE html>
<html>
<head>
    <title>Hacer Pedido</title>
</head>
<body>
    <h2>Hacer Pedido</h2>
    <form method="post" action="guardar_pedido.php">
        Nombre: <input type="text" name="nombre" required><br><br>
        Dirección: <textarea name="direccion" required></textarea><br><br>
        Producto: 
        <select name="producto" required>
            <option value="">Seleccione</option>
            <option value="iphone">iPhone</option>
            <option value="roomba">Roomba</option>
            <option value="reloj">Reloj</option>
        </select><br><br>
        Cantidad: <input type="number" name="cantidad" min="1" required><br><br>
        <input type="submit" value="Enviar Pedido">
    </form>
    <br>
    <a href="verificar.php">Volver al menú</a>
</body>
</html>