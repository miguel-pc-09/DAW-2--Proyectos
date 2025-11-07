# importamos el archivo, os-> modulo estandar en python para comprobar si existe archivo o carpetas
import os

# Carga el inventario 
# defino nombre al archivo como es una constante en mayusculas
ARCHIVO = "inventario.txt"

# Leer productos desde archivo inventario.txt
# Si el archivo no existe se debe crear con un inventario inicial predeterminado
def inicializar_archivo():          # define una funcion llamada inicializar_archivo
    # yo quiero trabajar con comas y espacios: "Portatil, 799.99, 5"
    if not os.path.exists(ARCHIVO): # si no existe el archivo cuyo nombre esta en la variable ARCHIVO 
        with open(ARCHIVO, "w") as f: # abrelo en modo escritura con codificacion por defecto y llama a ese manejador f. A diferencia de java o C# aqui con w vale. 
            f.write("Portatil, 799.99, 5\n")
            f.write("Telefono, 299.99, 10\n")
            f.write("Tablet, 199.99, 0\n")
            f.write("Auriculares, 49.90, 25\n")
    else:
        # si el archivo SI existe, lo leo y si veo que esta vacio (o solo espacios/saltos), lo relleno
        with open(ARCHIVO, "r") as f:
            contenido = f.read().strip()
        if contenido == "":
            with open(ARCHIVO, "w") as f:
                f.write("Portatil, 799.99, 5\n")
                f.write("Telefono, 299.99, 10\n")
                f.write("Tablet, 199.99, 0\n")
                f.write("Auriculares, 49.90, 25\n")

# mostrar el inventario
# imprimir los productos (nombre, precio y cantidad)
def cargar_inventario():  # Defino la funcion cargar_inventario 
    productos = []         # creo una lista vacia donde voy a ir metiendo cada producto (como diccionario)
    with open(ARCHIVO, "r") as f:
        for linea in f:
            linea = linea.strip()                 # limpio espacios/saltos al inicio/fin
            if linea == "":                       # si hay una linea vacia, la salto
                continue
            # ahora separo por coma porque mi formato es "Nombre, precio, cantidad"
            partes = linea.split(",")
            nombre = partes[0].strip()            # quito espacios sobrantes por si acaso
            precio = partes[1].strip()
            cantidad = partes[2].strip()
            productos.append({"nombre": nombre, "precio": precio, "cantidad": cantidad})
    return productos

# calcular el valor total del inventario
def valor_total_inventario(lista):
    total = 0.0
    for p in lista: 
        total += float(p["precio"]) * int(p["cantidad"])
    return total

# Impelementar una funcion que calcule y devuelva el valor total del inventario
def guardar_inventario(productos):
    # yo guardo en el mismo formato con comas y un espacio despues de la coma
    with open(ARCHIVO, "w") as f:
        for p in productos:
            f.write(p["nombre"] + ", " + p["precio"] + ", " + p["cantidad"] + "\n")

# Identificar productos agotados
def productos_agotados(lista):
    agotados = []
    for p in lista:
        if int(p["cantidad"]) == 0:
            agotados.append(p)
    return agotados

# permitir al usuario seleccionar un producto y modificar su cantidad en el inventario
# Guardar la actualizacion en el archivo inventario.txt
def mostrar_inventario(lista):
    print("---- Inventario ---- ")
    print("Nº   Nombre            Precio(€)   Cantidad")
    print("-------------------------------------------")
    i = 1
    for p in lista:
        precio = float(p["precio"])
        cantidad = int(p["cantidad"])
        # imprimo sencillo con espacios porque estoy en nivel basico
        print(str(i) + "    " + p["nombre"] + "            " + str(round(precio, 2)) + "         " + str(cantidad))
        i = i + 1
    if i == 1:
        print("(vacío)")

# Actualizar cantidad de un producto
# Leer los productos desde un archivo de texto inventario.txt
# Si el archivo no existe, se debe crear con un inventario inicial predeterminado
def actualizar_cantidad(lista):
    mostrar_inventario(lista)
    numero = int(input("\nNº del producto a actualizar: "))
    indice = numero - 1
    nueva = int(input("Nueva cantidad (entero >= 0): "))
    lista[indice]["cantidad"] = str(nueva)  # mantengo como texto para escribir igual en el .txt
    guardar_inventario(lista)
    print("Cantidad actualizada y guardada.\n")

def menu():
    inicializar_archivo()
    productos = cargar_inventario()

    while True:
        print("\n------ MENÚ INVENTARIO -----")
        print("1) Mostrar inventario")
        print("2) Valor total del inventario")
        print("3) Ver productos agotados")
        print("4) Actualizar cantidad")
        print("5) Salir")

        opcion = input("Elige (1-5): ").strip()

        match opcion:
            case "1":
                mostrar_inventario(productos)
            case "2":
                total = valor_total_inventario(productos)
                print(f"\nValor total: {total:.2f}€")
            case "3":
                agotado = productos_agotados(productos)
                if not agotado:
                    print("\nNo hay productos agotados. ")
                else:
                    print("\nProductos Agotados")
                    for p in agotado:
                        print(f" {p['nombre']} (cantidad: {p['cantidad']})")
            case "4":
                actualizar_cantidad(productos)
                productos = cargar_inventario()  # vuelvo a cargar del archivo despues de guardar
            case "5":
                print("¡Hasta pronto!")
                break
            case _:
                print("Opcion no valida.")

# Punto de entrada del programa
if __name__ == "__main__":
    menu()
