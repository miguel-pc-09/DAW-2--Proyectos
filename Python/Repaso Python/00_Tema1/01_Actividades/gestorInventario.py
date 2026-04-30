# Muestra el mensaje inicial del programa
print("=== GESTOR DE INVENTARIO ===")

# Creamos una lista vacía donde guardaremos todos los productos
inventario = []

# Bucle principal para introducir productos
while True:
    nombre = input("Introduce el nombre del producto (o pulsa Enter para terminar): ")

    # Si el usuario no escribe nada, salimos del bucle
    if nombre == "":
        break

    # Intentamos leer cantidad y precio
    try:
        cantidad = int(input("Cantidad en stock: "))
        precio = float(input("Precio por unidad (€): "))
    except ValueError:
        print("Cantidad o precio no válidos.")
        continue

    # Creamos un diccionario para guardar la información del producto
    producto = {
        "nombre": nombre,
        "cantidad": cantidad,
        "precio": precio
    }

    # Añadimos el producto a la lista principal
    inventario.append(producto)

# Mostramos el listado final
print("\n=== LISTADO DE INVENTARIO ===")

# Variable para acumular el valor total del inventario
valor_total_inventario = 0

# Recorremos la lista de productos
for producto in inventario:
    # Calculamos el valor total de este producto
    valor_producto = producto["cantidad"] * producto["precio"]

    # Lo sumamos al total del inventario
    valor_total_inventario += valor_producto

    # Mostramos la información del producto
    print(f"{producto['nombre']}: {producto['cantidad']} unidades x {producto['precio']} € = {valor_producto:.2f} €")

# Mostramos el total final
print(f"Valor total del inventario: {valor_total_inventario:.2f} €")
print("--- Fin del programa ---")

