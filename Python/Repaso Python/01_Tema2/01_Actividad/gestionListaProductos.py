""" Crea un programa en Python que permita gestionar una lista de productos de una
tienda. El programa debe utilizar funciones para realizar las siguientes operaciones:
o Agregar productos con su nombre y precio.
o Mostrar todos los productos disponibles.
o Buscar un producto por su nombre y mostrar su precio.
o Calcular el precio total de todos los productos.
Organiza tu código en funciones separadas para cada una de estas acciones. El
usuario debe poder elegir qué hacer mediante un menú simple. Además, tendrás
que utilizar estructuras de control como listas para poder almacenar todos los
productos.
"""

# Funcion para agregar producto
def agregar_producto(productos):
    nombre = input("Introduce el nombre del producto:")
    precio = float(input("Introduce el precio del producto:"))
    
    producto = {
        "nombre": nombre,
        "precio": precio
    }
    
    productos.append(producto)
    print("Producto agregado correctamente. ")
    
# Funcion para mostrar productos
def mostrar_productos(productos):
    if not productos:
        print("No hay productos.")
    else:
        for producto in productos:
            print(f"{producto['nombre']} - {producto['precio']}")
            
# Funcion buscar producto
def buscar_producto(productos):
    nombre = input("Introduce el nombre del producto: ")
    
    for producto in productos:
        if producto["nombre"] == nombre:
            print(f"Precio: {producto['precio']}")
            return
        
    print("producto no encontrado. ")
    
# Calcular el total
def calcular_total(productos):
    total = 0
    
    for producto in productos:
        total += producto["precio"]
        
    print(f"El total es: {total}")
    
# Creacion de menu
def menu():
    productos = []
    
    while True:
        print("\n -- Menu --")
        print("1. Agregar producto. ")
        print("2. Mostrar productos. ")
        print("3. Buscar producto. ")
        print("4. Calcular Total. ")
        print("5. Salir. ")
        
        opcion = input("Que opcion eliges.")
        
        if opcion == "1":
            agregar_producto(productos)
        elif opcion == "2":
            mostrar_productos(productos)
        elif opcion == "3":
            buscar_producto(productos)
        elif opcion == "4":
            calcular_total(productos)
        elif opcion == "5":
            print("Saliendo.")
            break
        else: 
            print("Opcion no valida. ")
            
menu()
