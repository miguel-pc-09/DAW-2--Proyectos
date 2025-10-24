# primer print , comprobando que funciona
print("Método de salida por consola con print")
print("Ejecucion correcta")
print("")

print("------ Formatos de salida ------------")
""" Formatos de salida """
nombre = "Miguel"
print(f"Formateando la salida de consola con f-string por parte de {nombre}")
#Este permite no solo mostrar el contenido de la variable, sino tambien actuar ante ella

print("Añadiendo correo y contando con lend con f-string")
correo = "asasf@gmail.com"
print(f"El correo de {nombre} el correo es {correo}, el cual cuenta con {len(correo)} caracteres")
print("")

#Tener en cuenta que todos los datos introducidos son string, y se guardan en una variable 
print("----- Entrada de datos con método input() --------------------")
nombre = input("¿Cuál es tu nombre? ")
correo = input("¿Cuál es tu correo? ")
#Para la edad usaremos una conversion explicita que sera un int, y se hace de la siguiente manera
edad = int(input("¿Cuál es tu edad? "))

print(f"El correo de {nombre}, es {correo}, el cual cuenta con {len(correo)} caracteres, con una edad de {edad}")
print("")

# Comentarios
"""
    Los comentarios podemos usar # para una sola linea y triple comillas dobles como aqui
    salida de datos por consola 
    método de salida por consola con print y mostrar datos
    
"""
# Las variables no necesitan tipado, ya que esta se asigna en el momento de la asignación

# Los bloques, no tienen llaves. Ya que para un bloque (funcion, sentencia de control o similar), no es necesario indicar {} para marcar el ambito
# ya que se hace con una indentación o sangria (dejando un espacio)
print("----- Bloques ------- ")
if edad < 18: # aqui se usan los puntos y no {}
    print("El usuario es menor de edad, por lo que no puede acceder a la plataforma")
else: 
    print(f"El correo de {nombre} es {correo}, el cual cuenta con {len(correo)} caracteres con {edad} años")

print("")

# Variables 
"""
Las variables representan aquellas partes de código donde se quiere almacenar datos de forma que estos sean 
accedidos desde diferentes partes en el código. 
     
"""

#  int: números enteros sin decimal
print("----- De número entero int ------ ")
my_int_variable = 7
print(my_int_variable)
print("")


# float: números con decimales, donde la parte decimal se representa con un punto.
print("----- Float ------ ")
my_float_variable = 3.14
print(my_float_variable)
print("")


# str: cadena de caracteres, definida entre ""
print("--- Función str ------ ")
my_string = "Ángel"
   # podemos cambiar el tipo deentero del anterior a un string 
my_int_to_str_variable = str(my_int_variable)
print(my_string)
print(my_int_to_str_variable)
print(type(my_int_to_str_variable))   # Nos dice que la variable int 7 es un string 
print("")


# Tambien podemos declarar variables en una sola linea, y a la hora de imprimir cambiar su orden
print("--- Variables en una sola línea ----- ") 
name, surname, alias, age = "Miguel", "Perucha", "MPC", 37
print("Me llamo:",name, surname, ". Mi edad es:",age, ". Y mi alias es:", alias)      # a la hora de imprimir podemos cambiar el orden 
print("")


# bool: valor de true o false muy utilizado para decisiones lógicas.
print("----- Bool ------ ")
my_bool_variable = True     # o False
print(my_bool_variable)
print("")


#list: lista ORDENADA y DINÁMICA para poder guardar diferentes datos
my_list = list()
my_other_list = []

print(len(my_list))
my_list = [35, 24, 62, 52, 30, 30, 17]  # Lista de números, con 7 elementos, 6 índices
print(my_list)
print(len(my_list))                     # Len nos dice los elementos que tenemos 

my_other_list = [37, 1.90, "Miguel", "Perucha"]   # No hace falta que siempre guardemos el mismo tipo de dato


# tuple: lista ORDENADA y EXTÁTICA para poder guardar diferentes datos. 
my_tuple = tuple()       # Estas son sus dos formas de definirlo
my_other_tuple = ()

print("Creación primera tupla, imprimir y tipo")
my_tuple = (37, 1.90, "Miguel", "Perucha", "Miguel") 
my_other_tuple = (35, 60, 30)

print(my_tuple)                                       # (37, 1.9, 'Miguel', 'Perucha')
print(type(my_tuple))                                 # <class 'tuple'> Python lo interpreta como una tupla 
print("")


# dict: diccionario de datos asociado a par clave-valor
my_dict = dict()
my_other_dict = {}

print(type(my_dict))
print(type(my_other_dict))

   # Para diferenciar de un set, relacion clave :  valor.
my_other_dict = {"Nombre": "Miguel", "Apellido":"Perucha", "Edad": 37, 1:"Python"} # Mezclamos las claves string tres primeras y la ultima un int

my_dict = {
    "Nombre": "Miguel", 
    "Apellido":"Perucha", 
    "Edad": 37, 
    "Lenguajes":{"Python", "Java", "C#"},         # Clave un string -> Valor un set
    1 : 1.90
}

print(my_other_dict)
print(my_dict)
print("---- Len ----- ")
print(len(my_other_dict))
print(len(my_dict))
print("")

"""
    Los métodos representan las funcionalidades que se pueden ejecutar sobre un objeto cualquiera 
        
        print(): escribe por consola el texto indicado como parámetro. 

"""

# input(): permite leer por teclado un dato asociarlo a una variable. Pide como parámetro el texto que se mostrara en la petición
# Pedimos al usuario que introduzca su nombre
nombre = input("Introduce tu nombre: ")
print(nombre)
print("")


# strip(): permite eliminar espacios en blanco de un string pasado por parámetros 
print("--- strip() ------  ")
nombre_limpio = nombre.strip()
print(nombre)
print("")


# upper(), lower(): estos método permite pasar a mayúscula o minúscula respectivamente un texto indicado por parámetros
print("----- upper() y lower() -------- ")
print("En mayúsculas:", nombre_limpio.upper())
print("En minúsculas:", nombre_limpio.lower())
print("")


# replace(): permite sustituir un grupo de caracteres por otro en un string
    # Reemplazamos un nombre por otro, por ejemplo, si alguien se llama "Juan"
print("------ replace() -------- ")
nombre_modificado = nombre_limpio.replace("Juan", "Juanjo")
print("Nombre con modificación:", nombre_modificado)
print("")


# find(): permite obtener la posición de un grupo de caracteres en una palabra, retornando su posición
    # Buscamos si el apellido "Gómez" está en el nombre
print("------ find() --------- ")
posicion = nombre_limpio.find("Gómez")
if posicion != -1:
    print("El apellido 'Gómez' empeiza en la posición: ", posicion)
else:
    print("El apellido 'Gómez' no se encuentra en el nombre.")

print("")


# len(): retorna la longitud del objeto que se pasa por parámetro, siendo la cantidad de letras en el caso de pasar un string o un numero en el caso de pasar una lista
    # Mostramos la longitud del nombre
print("---- lend() -------- ")
print("Número de caracteres:",len(nombre_limpio))
print("")


# type(): retorna la clase del objeto que se pasa por parámetros. 
    # Mostramos el tipo de dato que es la variable nombre_limpio
print("----- type() ------- ")
print("El tipo de dato de la variable es:", type(nombre_limpio))


# int(), float(): retorna el elemento pasado por parámetro en el tipo correspondiente. 
    # Convertimos edad a número entero 
print("---- int convertido ---- ")
edad_str = input("¿Cuántos años tienes?")
edad = int(edad_str)
print("Edad como número entero:", edad)
print("")

    # Mostramos también esa edad como número decimal (float)
print("---- float convertido ---- ")
edad_float = float(edad)
print("Edad como número decimal:",edad_float)


"""
Operadores: 
    -  :Resta aritmética entre dos operadores
    +  :Suma aritmética entre dos operadores
    *  :Multiplicación aritmética entre dos operadores
    ** :Potencia aritmética de la base y el exponente
    /  :División aritmética entre dos operadores. Tener en cuenta que la división entre dos números enteros es un numero ENTERO
    %  :Resto aritmético entre dos operadores. Se trata del resto de la division entre dos números
"""
# Operadores aritmeticos binarios
print("---- Operadores ----- ")
a = 10
b = 3
suma = a + b               # Suma: 13
print(suma)
resta = a - b              # Resta: 7
print(resta)
multiplicacion = a * b     # Multiplicación: 30
print(multiplicacion)
division = a / b           # División 3.333 (periodo en este caso float)
print(division)
division_entera = a // b   # División entera: 3
print(division_entera)
modulo = a % b             # Módulo:1
print(modulo)
potencia = a ** b          # Potencia: 10^3 = 1000  
print(potencia)


"""
Operadores comparación: 
    >  :Obtiene como resultado bool, de comparar que un operador es mayor que otro
    >= :Obtiene como resultado bool, de operadores es mayor o igual que otro
    <  :Obtiene como resultado bool, un operador es menor que otro
    <= :Obtiene como resultado bool, un operador es menor o igual que otro
    == :Obtiene como resultado bool, un operador es igual que otro
    != :Obtiene como resultado bool, un operador es diferente que otro
"""
# Operadores de comparacion 
print("Operadores de comparacion")
a = 10
b = 5
igual = a == b  #¿a es igual a b? -> flase
print(igual)
diferente = a != b # ¿a es distinto de b? -> true
print(diferente)
mayor_que = a > b #¿a es mayor que b? -> true
print(mayor_que)
menor_que = a < b #¿a es menor que b? -> false
print(menor_que)
mayor_o_igual = a >= b #¿a es mayor o igual que b? -> true 
print(mayor_o_igual)
menor_o_igual = a <= b #¿a es menor o igual que b? -> false
print(menor_o_igual)

print("")

"""
Operadores lógicos
    and : Obtiene como resultado true todas las condiciones de la sentencia son verdaderas. En caso contrario false. 
        A diferencia del operador & es que si la primera condición es false el resto no se evalúa

    or  : Obtiene como resultado true si una de las condiciones de la sentencia es verdaderas. En caso contrario, el resultado es false.
        A diferencia del operador & es que la primera condicion es true el resto no se evalúa 

    not : Obtiene el valor booleano inverso del booleano indicado
"""
#Operadores lógicos
print("--- Operadores lógicos ---- ")
a = True
b = False
resultado_and = a and b  # AND lógico: true si ambos son True
print(resultado_and)
resultado_or = a or b    # OR lógico: True si al menos uno es True
print(resultado_or)
resultado_not_a = not a  # NOT lógico: invierte el valor de a
print(resultado_not_a)

print("")