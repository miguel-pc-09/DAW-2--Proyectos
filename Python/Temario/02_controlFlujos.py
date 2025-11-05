# if else elif ####### 
edad = 10
if edad < 18:
    print("El usuario es mejor de edad")
elif edad < 65:
    print("El usuario está en edad labora")
else:
    print("El usuario que ha ganado la jubilacion")
    print("Mensaje ejecutado fuera de bloque")


### If – if/else – if/elif/  #####  
numero = int(input("Por favor introduce el valor numérico que quieres evaluar "))
if numero<0 or numero>=100:
    if numero<10:
        print("valor entre 0 y 10")
    elif numero<100:
        print("valor de 2 cifras mayor que 100")
else:
    print("Valor no válido")


## Match = SWITCH evalúa el valor de una variable y ejecuta de forma directa el caso correspondiente, pudiendo seleccionar un caso por defecto utilizando el carácter _
opcion = input("Selecciona una opción (1, 2, 3):")
match opcion:
    case "1":
        print("Has seleccionado la opción 1: Ver perfil.")
    case "2":
        print("Has seleccionado la opción 2: Editar perfil.")
    case "3":
        print("Has seleccionado la opción 3: Cerrar sesión.")
    case _:
        print("Opción no válida. Inténtalo de nuevo.")


## Estructuras de repeticion ####

# FOR
for i in range(1,10,3): # 1=> desde, 10 => donde llega, 3 => como salta, en este caso de tres en tres
    print(i)

for i in range(10,1,-3):# Aqui ira de menos tres en menos tres 
    print(i)

for i in [1,2,3,4,5,6,7,8,9,10]: # Recorriendo un Array de numeros, imprimira cada numero
    print(i)

alumnos = ["Juan","Maria", "Jorge","Claudia", "Marcos","Celia"]
for i in alumnos:
    print(i)
# donde i va tomando los valores de la colección

""" Dentro de la estructura de control, se pueden utilizar tantas estructuras como sean
necesarias, incluso anidar el mismo tipo de estructura """
for i in range(1,10):
    print(f"Tabla del {i}")
    for j in range(1,10):
        print(f"{i}*{j}={i*j}")


##  WHILE ####
""" permite repetir un bloque de código dependiendo de una condición lógica """
""" La condición de evaluación tiene que cambiar en algún momento. De no ser así,
el bloque de repetición entrará en un bucle infinito a no ser que se aplique un
break. 
"""
contador = 1

contador = 1
while contador <= 5:
    print("Valor:", contador)
    contador += 1                  # SUMARA 1 Y CUANDO LLEGUE A 5 PARA Y SACA EL PRINT
print("Saliendo del bloque while")

""" podemos utilizar un bloque while para dejar la
aplicación bloqueada hasta realizar un login correcto: """

nombre = input("introduce el nombre del usuario")
password = input("introduce la pass del usuario")


while nombre != "admin" or password != "admin":  # Mientras nombre sea distinto de admin o pasword distinto de admin entra en bucle. 
    print("Login incorrecto")
    nombre = input("introduce el nombre del usuario")
    password = input("introduce la pass del usuario")

print("Login correcto, puedes continuar")

""" En Pyhton no existe la estructura de control do-while. Sin embargo, podríamos
similar su uso con un while (true) y un break en el caso de no cumplir la condición
correspondiente.
"""
while True:                                                  # mientras no elijas 7 seguiras 
    numero = int(input("Introduce la opción a mostrar:"))
    if numero == 7:
        print("Has seleccionado la opción de salir")
        break
    print("Vuelve a seleccionad una opción.")
print("Saliendo el ")


####    LIST    ##### 
""" es una estructura de datos ordenada, lo cual quiere decir que los
elementos están asociados a posiciones siendo el 0 la primera, y mutable de elementos
los cuales pueden ser de cualquier tipo. Para poder crear una lista se utilizan [] """

listaElementos = ["Elemento1", "Elemento2", "Elemento3"]

# Acceder a un dato: utilizando la posición del elemento se puede acceder a él indicando el índice
print(listaElementos[0])

# Modificar un dato: utilizando la posicion del elemento que se quiere modificar e igualando al nuevo valor que se quiere asociar
listaElementos[0] = "Elemento1 modificado"

# Agregar un elemento: como se trata de una estructura mutable en cualquier momento se pueden agregar elemento, haciendolo en la última posicion de la lista
# Agregar a la ultima posicion APPEND
listaElementos.append("Elemento nuevo")

# Agregar un elemento en una posicion determinada: muy similar al caso anterior, pero indicando la posicion donde se agrega, el resto se desplazan a derecha
listaElementos.insert(1, "Elemento adicional") 
 # Ahora en la posicion 1 estara Elemento adicional. 

# Eliminar un elemento: indicando el valor del elemento que se quiere borrar, la lista eliminara el primer elemento que coincida con el valor indicado.
#El resto de elemento de la derecha se moveran una posicion
#Existe también la posibilidad de eliminar el elemento indicando la posición que se quiere borrar
listaElementos.remove("Elemento1")
del listaElementos[0]

# Iterar sobre los elementos: para ello es necesario utilizar la estructura de control for, obteniendo cada uno de los elementos de la coleccion de uno en uno.
for item in listaElementos:
    print(item)

# Obtener la posicion de un elemento: para ello se utiliza el método index(), retornando la posicion del valor indicado. En el caso de no encontrarlo se retorna un VALUERROR
listaElementos.index("Elemento2")

# Filtrar elemento: no se trata de un método como tal, sino una concatenacion de sentencias de control, utilizando el for y el if de forma conjunta
p = [p for p in listaElementos if "2" in p]

# Ordenar una lista: utilizando el método sort(), pudiendo indicar entre los parentesis la condicion de ordenacion. 
listaElementos.sort(key=len)

""" En Python se puede acceder a la posición de un elemento a través de posiciones
negativas, siendo el elemento en la posición -1 el último elemento de la lista, el -2 el
antepenúltimo y así sucesivamente. """

lista = ["a", "b", "c", "d", "e"]

print(lista[0])   # Primer elemento -> a
print(lista[-1])  # Último elemento -> e
print(lista[-2])  # Penúltimo -> d
print(lista[-3])  # Antepenúltimo -> c


#### TUPLAS ##### 
""" Las tuplas son una estructura de datos muy similar a las listas apartado anterior con la
diferencia que son no mutables, es decir que no pueden alterar su tamaño no se puede
ni agregar elementos y eliminarlos"""

trabajadores = ("Juan", "Patricia", "Maria")

""" Los métodos de acceso, modificación de valor, obtención de longitud y recorrido son
idénticos a los vistos en las listas, siendo la diferencia la no posibilidad de agregar
elementos y los paréntesis a la hora de crear la colección. """

"""Es posible desempaquetar una tupla, o lo que es lo mismo crear variables
asignándolas de forma directa a los elementos que forman parte de esta."""

datos = ("Ford", "Mustang", 2025, 500, 60000)
marca, modelo, anio, cv, precio = datos

### Diccionarios ### 
""" os diccionarios me permiten no solo meter datos en una
colección mutable, sino que lo hacen relacionando una clave a un valor. Para la
creación de un diccionario realizaremos """

trabajador = {
    "nombre": "Celia",
    "edad": 23,
    "especialidad": "Informática",
    "titulación": "Ingeniería",
    "conocimientos": ["Programación", "Sistemas", "BigData"]
}

# Acceso a elementos: para poder acceder a un elemento de un diccionario, se utiliza la clave asociada. También se puede utilizar el método get para el acceso
print(trabajador["nombre"])

# Modifica elementos: muy similar al acceso del elemento, con la diferencia que hay que indicar el nuevo valor de este 
trabajador["edad"] = trabajador["edad"]+1

# Eliminar elementos: para poder eliminar un elemento del diccionario se utiliza la funcion "del", indicando cual es el elemento que se quiere eliminar
del trabajador["titulación"]

# Añadir elementos: en el caso de querer añadir un elemento que no exista en el diccionario, se indica la clave y el valor que tendrá.
trabajador["especialidad"] = "Inteligencia artificial"

# Recorrer elemento: utilizando la estructura de control for podemos acceder a las claves del diccionario, y una vez tenemos esta acceder elementos de forma iterativa
for item in trabajador:
    print(f"{item}: {trabajador[item]}")
    if item == "conocimientos":
        for c in trabajador[item]:
            print(f"\t{c}")

# Ademas de estas se pueden utilizar:
# Obtener todos los elementos: para ello se utiliza el método values
for item in trabajador.values():
    print(item)

# Obtener todas las claves: para ello se utiliza el método keys
for item in trabajador.keys():
    print(item)

#Saber si un elemento está dentro del diccionario: para ello se evalúa mediante el operador "in"

####   Conjuntos   ###### 
""" conjuntos o set. Estas colecciones son
muy similares a las listas, con la diferencia que no se permiten elementos duplicados y
además son no ordenadas. """
# Para poder definir un conjunto se utilizan las llaves o la función set:

numeros = {1, 2, 3}
numerosSet = set([2, 3, 4])

""" En caso de tener elementos duplicados dentro de un conjunto, Python elimina
automáticamente los segundos datos duplicados """

# Las acciones comunes con este tipo de elementos son:

    # Agregar Datos: se utiliza el método add
numeros.add(4)

    #Eliminar datos: Se utiliza el método discard (si no existe el elemetno a borrar no da error) o remove ( si no existe el elemento a borrar da error)
numeros.discard(1)
numeros.remove(5)
""" en este caso obtendíamos un error al no estar el elemento 5"""

    # Vaciar datos: se utiliza el método clear. 
numeros.clear()

    # Recorrer los elementos: se utiliza una estructura for
for i in numeros:
    print(i)