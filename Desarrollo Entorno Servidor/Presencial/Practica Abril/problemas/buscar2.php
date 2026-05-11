<!DOCTYPE html>
<html>

<head>
    <title>Buscador de Productos</title>
    <style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }
    </style>
</head>

<body>
    <h1>Buscador de Productos</h1>

    <form method="POST">
        <input type="text" name="busqueda" placeholder="ID o Nombre del producto">
        <button type="submit">Buscar</button>
    </form>




</body>

</html>
<?php 
$conn = mysqli_connect('localhost', 'root', 'rootroot', 'producto');

        if (!$conn) {
            die("Conexión fallida: " . mysqli_connect_error());
        }

        $busqueda = mysqli_real_escape_string($conn, $_POST['busqueda']);
        $sql = "SELECT * FROM productos WHERE id = '$busqueda' OR nombre LIKE '%$busqueda%'";
        $result = mysqli_query($conn, $sql);
        
        if (mysqli_num_rows($result) > 0) {
            echo "<h2>Resultados de la búsqueda:</h2>";
            echo "<table>";
            echo "<tr>";
            echo "<th>ID</th>";
            echo "<th>Nombre</th>";
            echo "<th>Precio</th>";
            echo "<th>Cantidad</th>";
            echo "</tr>";

            while($fila = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars($fila['id']) . "</td>";
                echo "<td>" . htmlspecialchars($fila['nombre']) . "</td>";
                echo "<td>" . htmlspecialchars($fila['precio']) . "</td>";
                echo "<td>" . htmlspecialchars($fila['cantidad']) . "</td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "No se encontraron productos.";
        }

        mysqli_close($conn);

?>