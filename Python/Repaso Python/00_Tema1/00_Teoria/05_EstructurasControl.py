""" =============================== If – if/else – if/elif/else =================================== """
numero = int(input("Por favor introduce el valor numérico que quieres evaluar "))

if numero>0 or numero >=100:
    if numero <10:
        print("Valor entre 0 y 10")
    elif numero <100:
     print("Valor de 2 cifras mayor que 100")
else:
    print("Valor no válido")
    
print("")

""" ==========================================================  Match =================================================="""
opcion = input("Selecciona una opcion(1, 2, 3):")
match opcion:
    case "1":
        print("Has selecionado la opcion1: Ver perfil.")
    case "2":
        print("Has selecionado la opcion 2: Editar perfil.")
    case "3":
        print("Has selecionado la opcion 3: Cerrar sesion.")
    case _:
        print("Operacion no valida. Intentalo de nuevo.")
        
""" Estructuras de repeticion """
""" ============================================================= For =============================================="""
""" (Valor inicial, Valor final, en cuanto incrementa) """
for i in range(1, 10, 3):
    print(i)
    # la salida sería 1,4,7
print("")

for i in range(10, 1, -3):
    print(i)
    
print("")

# Indicando una coleccion de datos en vez del metodo range. =====================================
for i in [1,2,3,4,5,6,7,8,9,10]:
    print(i)

alumnos = ["Juan", "Maria", "Jorge", "Claudia", "Marcos", "Celia"]
for i in alumnos:
    print(i)
    
print("")
""" Anidando estructuras de control """
for i in range(1,10):
    print(f"Tabla del {i}")
    for j in range(1,10):
        print(f"{i}*{j}={i*j}") 
        
""" ================================  WHILE ============================================ """
contador = 1
contador = 1
while contador <= 5:
    print("Valor:", contador)
    contador += 1
print("Saliendo del bloque while")

""" =========== utilizar un bloque while para dejar la
aplicación bloqueada hasta realizar un login correcto ================================== """

nombre = input("Introduce el nombre del usuario")
password = input("Introduce la pass del usuario")

while nombre != "admin" or password != "admin":
    print("Login incorrecto")
    nombre = input("Introduce el nombre del usuario")
    password = input("Introduce la pass del usuario")
    
print("Login correcto, puedes continuar.")

""" ======== Pyhton no existe la estructura de control do-while. similar su uso con un while (true) y un break ============ """
while True:
    numero = int(input("Introduce la opcion a mostrar:"))
    if numero == 7:
        print("Has selecionado la opcion salir")
        break
    print("Vuelve a selecionar una opcion.")
print("Saliendo del programa.")

""" =============================== LIST ============================================== """
""" Una lista de datos, es una estructura de datos ordenada, lo cual quiere decir que los elementos estan asociados a posiciones siendo el 0 la primera, y mutable de elementos
los cuales pueden ser de cualquier tipo."""

listaElementos = ["Elemento1", "Elemento2", "Elemento3"]
""" Acciones que poder hacer  """
print(listaElementos[0]) # Acceder a un dato mediante posicionamiento. 
print("")
listaElementos[0] = "Elemento1 Modificado" # Modificar un dato mediante posicionamiento.
print("")
listaElementos.append("Elemento nuevo") # Agregar un elemento
print("")
listaElementos.insert("Elemento adicional", 1) # Agregar un elemento en una posicion determinada.
print("") 
listaElementos.remove("Elemento1") # Eliminar un elemento.
del listaElementos[0] # Eliminar un elemento mediante posicionamiento.

""" métodos asociados para acceder a acciones avanzadas """
# Iterar sobre los elementos 
for item in listaElementos:
    print(item)
    
print("")

# Obtener la posicion de un elemento
listaElementos.index("Elemento2")
print("")

# Filtrar elemento: Concatenaion de sentencias de control, utilizando el for y el if de forma conjunta
p = [p for p in listaElementos if "2" in p]
print("")

#ORdenar una lista. SORT
listaElementos.sort(key=len) #ORdenacion mediante criterio "key=len" key funcion de criterio para python
listaElementos.sort() # Ordenacion alfabeticamente. 
print("")


""" Ejercicio: crea una aplicación en consola donde se permitan gestionar las calificaciones de
la asignatura. Para ello, mediante un menú permite las siguientes acciones:
   - Introducir notas: el usuario introducirá notas hasta que meta un -1. Esto indicará que la introducción ha terminado. Una vez realizado esto volverá a aparecer el mené.
   - Listar notas: se mostrarán todas las notas de una en una.
   - Obtener extremos: se mostrarán la nota más alta y baja.
   - Obtener información: se mostrarán los siguientes datos sobre las notas: total
      introducidas, número suspensos, número aprobador, nota media."""
      

notas = []
while True:
    print("----- MENU -----")
    print("1. Introducir notas")
    print("2. Listar notas")
    print("3. Obtener extremos")
    print("4. Obtener informacion")
    print("5. Salir")

    opcion = input("Elige una opcion: ")

    match opcion:
        case "1":
            print("Elegiste introducir notas")
            print("Para dejar de introducir notas escribe -1")

            while True:
                anadirNota = float(input("Introduce la nota: "))

                if anadirNota == -1:
                    break

                notas.append(anadirNota)

        case "2":
            print("Listar notas:")

            if len(notas) == 0:
                print("No hay notas introducidas")
            else:
                for nota in notas:
                    print(nota)

        case "3":
            print("Obtener extremos:")

            if len(notas) == 0:
                print("No hay notas introducidas")
            else:
                print("La nota mas alta es:", max(notas))
                print("La nota mas baja es:", min(notas))

        case "4":
            print("Obtener informacion:")

            if len(notas) == 0:
                print("No hay notas introducidas")
            else:
                total = len(notas)
                suspensos = 0
                aprobados = 0
                suma = 0

                for nota in notas:
                    suma += nota

                    if nota < 5:
                        suspensos += 1
                    else:
                        aprobados += 1

                media = suma / total

                print("Total de notas introducidas:", total)
                print("Numero de suspensos:", suspensos)
                print("Numero de aprobados:", aprobados)
                print("Nota media:", media)

        case "5":
            print("Saliendo del programa")
            break

        case _:
            print("Opcion no valida")
            
""" TUPLAS: son una estructura de datos muy similar a las listas con la ==================================== TUPLAS
diferencia que son no mutables, es decir que no pueden alterar su tamaño """
trabajadores = ("Juan", "Patricia", "Maria")

""" Es posible desempaquetar una tupla, o lo que es lo mismo crear variables
asignándolas de forma directa a los elementos que forman parte de esta. """
datos = ("Ford", "Mustang", 2025, 500, 60000)
marca, modelo, anio, cv, precio = datos


""" ==================== DICCIONARIOS ============================== """
trabajador = {
    "nombre": "Celia",
    "edad": 23,
    "especialidad": "Informática",
    "titulación": "Ingeniería",
    "conocimientos": ["Programación", "Sistemas", "BigData"]
}

# Acceso a elementos: para poder acceder a un elemento de un diccionario, se utiliza la clave asociada. También se puede utilizar el método get para el acceso
print(trabajador["nombre"])

# Modificar elementos: muy similar al acceso del elemento, con la diferencia que hay que indicar el nuevo valor de este
trabajador["edad"] = trabajador["edad"] + 1

# Eliminar elementos: Para poder eliminar un elemento del diccionario se utiliza la funcion del, indicando cual es el elemento que se quiere eliminar
del trabajador["titulación"]

# Añadir elementos: en el caso de querr añadir un elemento que no exista en el diccionario, se indica la clave y el valor que tendrá
trabajador["especialidad"] = "Inteligencia artificial"

# Recorrer elementos: utilizando la estructura de control for podemos acceder a las claves del diccionario, y una vez tenemos esta acceder elementos de forma iterativa 
for item in trabajador:
    print(f"{item}: {trabajador[item]}")
    if item == "conocimientos":
        for c in trabajador[item]:
            print(f"\t{c}")
            
# Además se puede utilizar funciones avanzadas. 
# Obtener todos los elementos: para ello se utiliza el método values
for item in trabajador.values():
    print(item)
    
# Obtener todas las claves: para ello se utiliza el método keys
for item in trabajador.keys():
    print(item)
    
# Saber si un elemento está dentro del diccionario: para ello se evalúa mediante el operador in.
if "conocimientos" in trabajador:
    print("El trabajador tiene conocimientos")
else:
    print("El trabajador no tiene conocimientos")
    
""" ========================================== CONJUNTOS ================================ """
""" conjuntos o set. Estas colecciones son
muy similares a las listas, con la diferencia que no se permiten elementos duplicados y
además son no ordenadas. """

numeros = {1, 2, 3}
numerosSet = set([2, 3, 4])

# Agregar datos: se utiliza el método add
numeros.add(4)

# Eliminar datos: se utiliza el método remove(Si no existe da error) o discard(Si no existe no da error)
numeros.remove(5)
numeros.discard(1)

# Vaciar datos: se utiliza el método clear.
numeros.clear()

# Recorrer los elementos: se utiliza una estructura for
for i in numeros:
    print(i)
    
""" Unión: se obtienen un set con los valores de dos conjuntos, eliminando aquellos datos que están duplicados.
    2. Intersección: se obtiene un set con los valores duplicados de dos conjuntos, eliminando aquellos que no lo son.
    3. Diferencia: se obtiene un set con los valores que están en el conjunto A pero no en el B.
    4. Diferencia simétrica: se obtiene un set con los valores que están en el conjunto A y B pero obviando los comunes.
        Un ejemplo de cada una de ellas sería el siguiente código: """
        
conjunto1 = {1,2,3,4,5}
conjunto2 = {3,4,5,6,7}
# {1234567}
conjuntoUnion = conjunto1.union(conjunto2)

# {345}
conjuntoInters = conjunto1.intersection(conjunto2)

# {12}
conjuntoDif = conjunto1.difference(conjunto2)

# {1267}
conjuntoDif = conjunto1.symmetric_difference(conjunto2)

""" Ejercicio:  Realiza el siguiente ejercicio para practicar lo visto en esta unidad:
Crea una aplicación que permita gestionar los proyectos de una empresa. Para ello sigue estos pasos:"""
    # Pregunta al usuario cuantos proyectos va a registrar.
    # Por cada proyecto, pide el código, nombre, responsable y presupuesto del proyecto.
    # Guarda la información de todos los proyectos en un diccionario (puedes utilizar el código como la clave y como valor puedes utilizar otro diccionario
    # lista.
    # Muestra por consola solo el nombre y presupuesto de cada uno de los proyectos.
    
    # Preguntamos cuantos proyectos se van a registrar
num_proyectos = int(input("¿Cuantos proyectos quieres registrar? "))
# creamos el diccionario donde guardaremos los proyectos
proyectos = {}

# Recorremos el numero de proyectos 
for i in range(num_proyectos):
    print(f"\nProyecto {i+1}")
    
    # Pedimos los datos
    codigo = input("Introduce el codigo del proyecto:")
    nombre = input("Introduce el nombre del proyecto:")
    responsable = input("Introduce el responsable: ")
    presupuesto = float(input("Introduce el presupuesto: "))
    
    # Guardamos el proyecto en el diccionario
    proyectos[codigo] = {
        "nombre": nombre,
        "responsable": responsable,
        "Presupuesto": presupuesto
    }
# mostramos resultados
print("\n Listado de proyectos: ")

for codigo in proyectos:
    print("Nombre:", proyectos[codigo]["nombre"])
    print("Presupuesto:", proyectos[codigo]["Presupuesto"])
    print("")
