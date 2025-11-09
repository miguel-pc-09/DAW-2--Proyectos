from io import open 

# por defecto 
def por_defecto():
    # Diccionario con cinco productos por defecto (lo dejo así para iniciar el .txt de forma clara)
    productos = [
        {"nombre": "Portatil", "precio": 799.99, "cantidad": 4},
        {"nombre": "Telefono", "precio": 299.99, "cantidad": 8},
        {"nombre": "Tablet", "precio": 199.99, "cantidad": 0},
        {"nombre": "Auriculares", "precio": 43.55, "cantidad": 3},
        {"nombre": "Ratón", "precio": 72.00, "cantidad": 13},
    ]
    archivo_texto = open("inventario.txt", "w")               # abro en escritura: crea/sobrescribe
    lineas = [f"{p['nombre']},{p['precio']},{p['cantidad']}\n" for p in productos]
    archivo_texto.writelines(lineas)                          # escribo todas las líneas de golpe
    archivo_texto.close()                                     # cierro para dejarlo guardado

    return productos
    

# Carga el inventario 
def carga():
    archivo_texto = open("inventario.txt", "a+")              # a+: si no existe lo crea; también me deja leer
    archivo_texto.seek(0)                                     # me coloco al principio para leer
    contenido = archivo_texto.read()

    if contenido.strip() == "":                               # si está vacío, meto los datos por defecto
        archivo_texto.close()
        por_defecto()
        print("Inventario vacío. Cargando productos por defecto.")
        archivo_texto = open("inventario.txt", "r")           # reabro ya en lectura
    else:
        archivo_texto.seek(0)                                 # si ya tenía cosas, vuelvo al inicio para leer todo
        
    filas = archivo_texto.readlines()                         # LEO LÍNEAS (así puedo formatear cada una)
    archivo_texto.close()

    print("---- Inventario cargado ---- ")
    for fila in filas:                                        # formateo: Producto: , Precio: , Cantidad: 
        nombre, precio, cantidad = fila.strip().split(",")
        print(f"Producto: {nombre}, Precio: {precio}, Cantidad: {cantidad}")
    return filas

# Mostrar el inventario 
def mostrar():
    archivo_texto = open("inventario.txt", "r")               # aquí solo necesito leer
    filas = archivo_texto.readlines()                         # uso readLINES para recorrer productos (no read)
    archivo_texto.close()
    print("--- Inventario ---")
    for fila in filas:                                        # mismo formato legible que en carga()
        nombre, precio, cantidad = fila.strip().split(",")
        print(f"Producto: {nombre}, Precio: {precio}, Cantidad: {cantidad}")

        
# Calcular inventario
def calcular():
    archivo_texto = open("inventario.txt", "r")
    filas = archivo_texto.readlines()
    archivo_texto.close()

    total = 0.0
    for fila in filas:
        partes = fila.strip().split(",")                      # separo los 3 campos
        precio = float(partes[1])                             # paso a número para poder multiplicar
        cantidad = int(partes[2])
        total += precio * cantidad

    print(f"\nValor total del inventario: {total:.2f}€")
    return total

# Productos agotados
def agotados():
    archivo_texto = open("inventario.txt", "r")
    filas = archivo_texto.readlines()
    archivo_texto.close()

    print("\n--- Productos agotados ---")
    hay = False

    for fila in filas:
        datos = fila.strip().split(",")                       # separo nombre, precio, cantidad
        cantidad = datos[2]                                   # me quedo con la cantidad (posición 2)
        if cantidad == "0":                                   # si la cantidad es 0, está agotado
            print(f"Producto agotado: {datos[0]}")            # muestro solo el nombre
            hay = True

    if not hay:
        print("No hay productos agotados.")

# Actualizar productos
def actualizar():
    # Abro el archivo en modo lectura/escritura para leer y luego regrabar encima
    archivo_texto = open("inventario.txt", "r+")
    lineas = archivo_texto.readlines()                        # leo todo el inventario actual

    # Pido el producto y la cantidad nueva
    nombre_producto = input("Escribe el nombre del producto a actualizar: ").strip()
    nueva_cantidad = input("Nueva cantidad: ").strip()

    # Construyo la nueva versión de líneas (modifico solo si coincide el nombre)
    nuevas_lineas = []
    encontrado = False

    for linea in lineas:
        datos = linea.strip().split(",")                      # [nombre, precio, cantidad]
        nombre = datos[0]
        precio = datos[1]
        cantidad = datos[2]

        if nombre.lower() == nombre_producto.lower():         # si coincide, sustituyo la cantidad
            cantidad = nueva_cantidad
            encontrado = True

        nuevas_lineas.append(f"{nombre},{precio},{cantidad}\n")

    # Reescribo sobre el mismo archivo (r+): vuelvo al inicio, escribo y corto lo que sobre
    archivo_texto.seek(0)
    archivo_texto.writelines(nuevas_lineas)
    archivo_texto.truncate()
    archivo_texto.close()

    if encontrado:
        print(f"Cantidad actualizada correctamente para '{nombre_producto}'.")
    else:
        print(f"Producto '{nombre_producto}' no encontrado en el inventario.")
    return


# Menu de la aplicacion 
while True:
    
    print("\n---- Menu del inventario ----- ")
    print("1. Cargar productos. ")
    print("2. Mostrar productos")
    print("3. Valor total del inventario. ")
    print("4. Productos agotados.")
    print("5. Actualizar cantidad de un producto")
    print("6. Salir.")

    opcion = input("Elige una opcion: ")
    match opcion:
        case "1":
            carga()
        
        case "2":
            mostrar()

        case "3": 
            calcular()
    
        case "4": 
            agotados()
    
        case "5":
            actualizar()
        
        case "6":
            print("Hasta pronto")
            break

        case _:
            print("Opcion no valida. ")

    input("\nPulsa Enter para continuar...")
