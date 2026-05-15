# gestion_libros.py

# Nombre del archivo donde se guardan los libros, por convencion se pone en mayusculas para indicar que es una constante
ARCHIVO = "libros.txt"


# Función que comprueba si el archivo existe
# Si no existe, lo crea con unos libros por defecto
def crear_archivo_si_no_existe():
    try:
        # Intentamos abrir el archivo en modo lectura
        with open(ARCHIVO, "r", encoding="utf-8"):
            pass  # Si existe no hacemos nada
    except FileNotFoundError:
        # Si no existe, lo creamos y escribimos datos iniciales
        with open(ARCHIVO, "w", encoding="utf-8") as f:
            f.write("Los pilares de la tierra;1049;Mario\n")
            f.write("El nombre de la rosa;2234;Luis\n")
            f.write("El perfume;5678;Ángela\n")
        print("Archivo creado con libros iniciales.")


# Función que carga los libros desde el archivo
def cargar_libros():
    libros = []  # Lista donde guardamos los libros

    # Abrimos el archivo en modo lectura
    with open(ARCHIVO, "r", encoding="utf-8") as f:
        for linea in f:
            # Quitamos saltos de línea y separamos por ;
            datos = linea.strip().split(";")

            # Comprobamos que tenga los 3 datos correctos
            if len(datos) == 3:
                # Creamos un diccionario con los datos del libro
                libro = {
                    "nombre": datos[0],
                    "id": datos[1],
                    "encargado": datos[2]
                }
                # Añadimos el libro a la lista
                libros.append(libro)

    # Devolvemos la lista de libros
    return libros


# Función que guarda todos los libros en el archivo
def guardar_libros(libros):
    # Abrimos el archivo en modo escritura (sobrescribe todo)
    with open(ARCHIVO, "w", encoding="utf-8") as f:
        for libro in libros:
            # Guardamos cada libro en una línea con formato ;
            f.write(f"{libro['nombre']};{libro['id']};{libro['encargado']}\n")


# Función que muestra los libros por pantalla
def mostrar_libros(libros):
    print("\n=== LISTA DE LIBROS ===")

    # Si no hay libros
    if len(libros) == 0:
        print("No hay libros registrados.")
    else:
        # Recorremos la lista y mostramos cada libro
        for libro in libros:
            print(f"Nombre: {libro['nombre']}")
            print(f"Identificador: {libro['id']}")
            print(f"Encargado: {libro['encargado']}")
            print("------------------------")


# Función para añadir un nuevo libro
def agregar_libro(libros):
    print("\n=== AÑADIR LIBRO ===")

    # Pedimos los datos por consola
    nombre = input("Introduce el nombre del libro: ")
    identificador = input("Introduce el identificador del libro: ")
    encargado = input("Introduce la persona encargada: ")

    # Creamos el libro como diccionario
    libro = {
        "nombre": nombre,
        "id": identificador,
        "encargado": encargado
    }

    # Lo añadimos a la lista
    libros.append(libro)

    # Guardamos los cambios en el archivo
    guardar_libros(libros)

    print("Libro añadido correctamente.")


# Función para actualizar un libro existente
def actualizar_libro(libros):
    print("\n=== ACTUALIZAR LIBRO ===")

    # Pedimos el ID del libro a modificar
    identificador = input("Introduce el ID del libro que quieres actualizar: ")

    encontrado = False  # Variable para saber si lo encuentra

    # Recorremos los libros
    for libro in libros:
        if libro["id"] == identificador:
            print("Libro encontrado.")

            # Pedimos los nuevos datos
            nuevo_nombre = input("Nuevo nombre del libro: ")
            nuevo_encargado = input("Nueva persona encargada: ")

            # Actualizamos los valores
            libro["nombre"] = nuevo_nombre
            libro["encargado"] = nuevo_encargado

            # Guardamos cambios en el archivo
            guardar_libros(libros)

            print("Libro actualizado correctamente.")
            encontrado = True

    # Si no lo encuentra
    if encontrado == False:
        print("No se ha encontrado ningún libro con ese ID.")


# Función para eliminar un libro
def eliminar_libro(libros):
    print("\n=== ELIMINAR LIBRO ===")

    # Pedimos el ID del libro a eliminar
    identificador = input("Introduce el ID del libro que quieres eliminar: ")

    encontrado = False

    # Recorremos los libros
    for libro in libros:
        if libro["id"] == identificador:
            # Eliminamos el libro de la lista
            libros.remove(libro)

            # Guardamos cambios
            guardar_libros(libros)

            print("Libro eliminado correctamente.")
            encontrado = True
            break  # Salimos del bucle

    # Si no se encuentra
    if encontrado == False:
        print("No se ha encontrado ningún libro con ese ID.")


# Función principal con el menú
def menu():
    # Primero comprobamos que el archivo exista
    crear_archivo_si_no_existe()

    while True:
        # Cargamos los libros en cada vuelta
        libros = cargar_libros()

        # Mostramos menú
        print("\n===== MENÚ BIBLIOTECA =====")
        print("1. Mostrar libros")
        print("2. Añadir libro")
        print("3. Actualizar libro")
        print("4. Eliminar libro")
        print("5. Salir")

        # Pedimos opción
        opcion = input("Selecciona una opción: ")

        # Ejecutamos según opción
        if opcion == "1":
            mostrar_libros(libros)
        elif opcion == "2":
            agregar_libro(libros)
        elif opcion == "3":
            actualizar_libro(libros)
        elif opcion == "4":
            eliminar_libro(libros)
        elif opcion == "5":
            print("Saliendo del programa...")
            break
        else:
            print("Opción incorrecta.")


# Llamamos al menú para iniciar el programa
menu()