""" 
Crea un programa en Python que permita gestionar una lista de productos de una tienda. 
El programa debe utilizar funciones para realizar las siguientes operaciones: 
    - Agregar productos con su nombre y precio
    - Mostrar todos los productos disponibles 
    - Buscar un producto por su nombre y mostrar su precio 
    - Calcular el precio total de todos los productos
Organiza tu código en funciones separadas para cada una de estas acciones. El usuario debe poder elegir que hacer mediente un menú simple.
Además, tendras que utilizar estructuras de control como listas para poder almacenar todos los productos.

"""
print(" ==== Gestion Listas ==== ")

#productos = []

#---------------- Función para mostrar el menú ----
def mostrar_menu(): 
    # aqui las opciones del menu
    print("\n---Menú Principal")
    print("1. Agregar producto")
    print("2. Mostrar todos los productos")
    print("3. Buscar producto por nombre")
    print("4. Calcular precio total")
    print("5. Salir")


#------ Funcion para agregar un producto --- 
def agregar_producto(productos):
    #pedir el nombre del producto
    nombre = input("Nombre del producto: ")

    # pido el precio del producto, y dejamos que use coma o punto
    precio_texto = input("Precio del producto: ")
    precio_texto = precio_texto.replace(",", ".")
    precio = float(precio_texto)

    # creo el diccionario con los datos del producto
    producto = {
        "nombre" : nombre,
        "precio" : precio
    }

    # añado el producto a la lista
    productos.append(producto)
    print(f"Producto '{nombre}' añadido correctamente. ")

# ------- funcion para mostrar todos los productos ---------- 
def mostrar_productos(productos):
    # si la lsita esta vacia, aviso y salgo de la funcion
    if len(productos) == 0:
        print("No hay productos en la lista.")
        return
    
    print("\n--- Lista de productos ---- ")
    # Recorroro la lista y muestro cada producto
    for producto in productos:
        # Accedo al nombre y al precio a traves del diccionario
        print(f"- {producto['nombre']} : {producto['precio']}€")


# ------- Funcion para buscar un producto por nombre ----- 
def buscar_producto(productos):
    # pido el nombre del producto que quiero buscar
    nombre_buscar = input("Introduce el nombre del producto a buscar: ")

    # Uso una variable para saber si lo he encontrado o no
    encontrado = False

    # Recorro la lista de productos
    for producto in productos:
        # comparo el nombre guardado con el que ha escrito el usuario
        if producto["nombre"] == nombre_buscar:
            print(f"El producto '{nombre_buscar}' tiene un precio de {producto['precio']}€")
            encontrado = True
            # como ya lo he encontrado, puedo salir del bucle
            break

    # si despues del bucle no se ha encontrado, aviso al usuario 
    if not encontrado:
        print(f"No se ha encontrado el producto '{nombre_buscar}'.")


# ------- Funcion  para calcular el precio total ------ 
def calcular_total(productos): 
    # si no hay productos, el total es 0
    if len(productos) == 0:
        print("No hay productos. El total es 0 €.")
        return
    
    # variable para ir acumulando el precio total 
    total = 0.0

    # recorro la lsita y voy sumando los precios 
    for producto in productos:
        total += producto["precio"]

    print(f"El precio total de todos los productos es: {total}€")


# --------- Funcion principal con el menu -----------------
def main():
    # aqui creo la lista donde voy a guardar todos los productos
    productos = []

    # bucle principal del programa 
    while True: 
        # muestro el menu en cada vuelta 
        mostrar_menu()

        # pido la opcion al usuario
        opcion = input("Elige una opcion: ")

        # segun la opcion, llamo a una funcion u otra
        if opcion == "1":
            agregar_producto(productos)
        elif opcion == "2":
            mostrar_productos(productos)
        elif opcion == "3":
            buscar_producto(productos)
        elif opcion == "4":
            calcular_total(productos)
        elif opcion == "5":
            print("Saliendo del programa.")
            break
        else: 
            print("Opcion no valida.")

# ------ Llamo a main para iniciar el programa --- 
main()