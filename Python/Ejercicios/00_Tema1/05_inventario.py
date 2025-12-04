""" 
aplicación en Python que simule un gestor básico de inventario
para una tienda.
El programa deberá permitir al usuario registrar productos con su nombre, cantidad y precio, y finalmente
mostrar un listado con el valor económico de cada producto y el valor total del inventario.
El objetivo principal es aplicar las estructuras de control y datos vistas en la Unidad 2:
    • Condicionales if, elif, else
    • Bucles while y for
    • Estructuras de datos: listas y diccionarios
    • Entrada, procesamiento y salida de información
"""
""" 
El programa deberá cumplir los siguientes requisitos funcionales:
1. Mostrar un mensaje de bienvenida al iniciar la aplicación.
2. Permitir introducir varios productos, cada uno con:
    o Nombre del producto (cadena de texto)
    o Cantidad en stock (entero)
    o Precio por unidad (número decimal)
3. Usar un bucle while que permita seguir introduciendo productos hasta que el usuario deje el campo del
nombre vacío.
4. Validar que la cantidad y el precio sean valores numéricos (controlar errores con try-except).
5. Guardar los productos en una lista de diccionarios, por ejemplo:
6. [
7. {"nombre": "Ratón", "cantidad": 15, "precio": 12.5},
8. {"nombre": "Teclado", "cantidad": 10, "precio": 25.0}
9. ]
10. Al finalizar la entrada de datos, recorrer la lista con un bucle for y:
    o Calcular el valor total de cada producto (cantidad * precio)
    o Mostrar cada producto en formato:
    o Ratón: 15 unidades x 12.5 € = 187.50 €
11. Calcular el valor total del inventario sumando el valor de todos los productos.
12. Mostrar al final un mensaje con el valor total y una despedida.
"""
# Mensaje de bienvenida
print("=== Gestor inventario ==")

# inventario, lista vacia 
productos = []

# Entrada de datos ---------
while True:
    # Pedir nombre del producto --------------
    nombre = input("Nombre del producto: ")
    # Si el usuario lo deja en vacio para y sigue al siguiente punto
    if nombre == "":
        break

    # Pedimos la cantidad
    while True:
        cantidad_input = input("cantidad de producto: ")
        # Controlamos que no este vacia
        if cantidad_input == "":
         print("La cantidad no puede estar vacía.")
         continue

        try:
           cantidad = int(cantidad_input)
           if cantidad < 0:
              print("La cantidad no puede ser negativa.")
              continue
           break
        except ValueError:
           print("Introducir numero entero")

        # Pedimos el precio 
    while True:
           
        precio_input = input("Precio por unidad: ")
        # no dejamos que este vacio
        if precio_input == "":
            print("El precio no puede estar vacio.")
            continue

        try:
            precio = float(precio_input)
            if precio < 0:
                print("El precio no puede ser negativo.")
                continue
            break
        except ValueError:
            print("Debes introducir un numero.")

    # creamos el diccionaro de producto
    producto = {
       "nombre": nombre,
       "cantidad": cantidad,
       "precio": precio,
    }

    # Añadimos a la lista de productos
    productos.append(producto)
    print(f"Producto {nombre} añadido correctamente.\n")

# Procesamos y salida ---------------
# Si no se a introducido ningun producto 
if len(productos) == 0:
   print("No se introdujo ningun producto.")
else:
   print("--- Lista de productos --- ")
   valor_total_inventario = 0.0

   # Recorremos la lsita de productos 
   for p in productos:
      # calculamos el valor total de cada producto 
      valor_producto = p["cantidad"] * p["precio"]
      valor_total_inventario += valor_producto

      # Mostramos la informacion del producto
      print(f"{p['nombre']}: {p['cantidad']} unidades x {p['precio']}€ = {valor_producto:.2f}€")

    # Mostramos el valor total del inventario 
print(f"\nValor total del inventario: {valor_total_inventario:.2f}€")
print("Gracias por usar el gestor")