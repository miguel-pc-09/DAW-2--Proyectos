""" Los métodos representan las funcionalidades que se pueden ejecutar sobre un objeto
cualquiera. """
""" input(): permite leer por teclado un dato y asociarlo a una variable. Pide como parámetros el texto que se mostrará en la peticion.
    print(): escribre por consola el texto indicado como parametro.
    upper(), lower(): Estos métodos permiote pasar a mayúsculas o minúsculas respectivamente un texto indicado por parametros.
    strip(): permite eliminar espacios en blanco de un string pasado por parametros.
    replace(): permite sustituir un grupo de caracteres por otro en un string. 
    find(): permite obtener la posicion de un grupo de caracteres en una palabra tretornando su posicion.
    len(): retorna la longitud del objeto que se pasa por parametro, siendo la cantidad de letras en el caso de pasar un string o un numero en el caso de pasar una lista.
    type(): retorna la clase del objeto que se pasa por parámetros.
    int(), float(): retorna el elemento pasado por parametro en el tipo correspondiente."""

# Pedimos al usuario que introduzca su nombre
nombre = input("introduce tu nombre: ")
print("")

#limpiamos los espacios en blanco.
nombre_limpio = nombre.strip()
print("")

# Mostramos el nombre en diferentes formatos 
print("En mayúsculas: ", nombre_limpio.upper())
print("En minúsculas: ", nombre_limpio.lower())
print("")

# Reemplazamos un nombre por otro, por ejemplo, si alguien se llama "Juan"
nombre_modificado = nombre_limpio.replace("Juan", "Juanjo")
print("Nombre con nmodificacion: ", nombre_modificado)
print("")

# Buscamos si el apellido "Gómez" está en el nombre
posicion = nombre_limpio.find("Gómez")
if posicion != -1:
    print("El apellido 'Gómez' empieza en la posición:", posicion)
else: 
    print("El apellido 'Gómez' no se encuentra en el nombre.")

print("")
# Mostramos la longitud del nombre
print("Número de caracteres:", len(nombre_limpio))
print("")

# Mostramos el tipo de dato que es la variable nombre_limpio
print("El tipo de dato de la variable es: ", type(nombre_limpio))
print("")

# Convertimos edad a numero entero
edad_str = input("¿Cuantos años tienes?")
edad = int(edad_str)
print("Edad como numero entero:", edad)
print("")

# Mostramos tambien esa edad como número decimal (float)
edad_float = float(edad)
print("Edad como numero decimal:", edad_float)