# -------- Crear Funciones 
    # Palabra reservada DEF
def saludar():
    print("Hola desde la primera funcion")

    # se ejecuta llamandola
saludar()  # -> "Hola desde la primera funcion"

# Python no usa llaves, usa INDENTACIÓN (sangría) para marcar bloque

# --------- PARAMETROS EN LAS FUNCIONES -------- 
# Ahora creo una función que recibe un parámetro (nombre)
# y lo usa dentro del print.
def saludar_nombre(nombre):
    print(f"Hola {nombre}, espero que estés bien.")


# Pruebo la función pasándole un nombre.
saludar_nombre("Miguel")


# Puedo añadir más parámetros. En este caso nombre, apellido y repeticiones.
def saludar_completo(nombre, apellido, repeticiones):
    # Uso un bucle for para repetir el mensaje las veces que diga repeticiones.
    for i in range(repeticiones):
        print(f"Hola {nombre} {apellido}, saludo número {i + 1}")


# Llamada con 3 parámetros (todos posicionales).
saludar_completo("Ana", "López", 3)


# -------- Parámetros por defecto --------
# Aquí repeticiones tiene un valor por defecto (1).
# Si no le paso ese parámetro, tomará el 1 automáticamente.
def saludar_defecto(nombre, apellido, repeticiones=1):
    for i in range(repeticiones):
        print(f"Hola {nombre} {apellido} (saludo con valor por defecto)")


# Llamo SIN pasar repeticiones, así usa el valor por defecto (1).
saludar_defecto("Luis", "García")

# Llamo pasando repeticiones, y entonces usa el valor que yo le dé.
saludar_defecto("Luis", "García", 3)


# -------- Parámetros posicionales y nombrados --------
# Esta función solo muestra los tres parámetros que recibe.
def funcion_parametros(param1, param2, param3):
    print(f"param1: {param1}, param2: {param2}, param3: {param3}")


# Llamada con parámetros posicionales (en orden).
funcion_parametros("A", "B", "C")

# Llamada con parámetros nombrados (indico el nombre del parámetro).
funcion_parametros(param1="valor1", param2="valor2", param3="valor3")

# También puedo cambiar el orden si uso nombrados.
funcion_parametros(param3="último", param1="primero", param2="segundo")


# -------- Uso de *args (parámetros variables posicionales) --------
# *args junta todos los parámetros posicionales en una tupla.
# Aquí lo uso para calcular la media de las notas que yo quiera.
def calcular_media(*notas):
    # Si no se pasan notas, controlo que no reviente la media.
    if len(notas) == 0:
        print("No se han pasado notas.")
        return

    # Voy acumulando la suma de todas las notas.
    suma = 0
    for nota in notas:
        suma += nota

    media = suma / len(notas)
    print(f"He recibido {len(notas)} notas y la media es {media}")


# Puedo llamar con notas sueltas, sin lista.
calcular_media(5, 7, 9)
calcular_media(4, 6)


# -------- Uso de **kwargs (parámetros variables nombrados) --------
# **kwargs junta todos los parámetros nombrados en un diccionario.
# Aquí lo uso para mostrar información de un usuario.
def mostrar_usuario(**kwargs):
    print("Datos del usuario:")
    # kwargs es un diccionario, así que lo recorro con items().
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")


# Llamo pasando pares nombre=valor.
mostrar_usuario(nombre="Juan", apellido="Gómez", edad=25, ciudad="Madrid")


# -------- Mezclar *args y **kwargs --------
# Primero van los parámetros normales (si los hubiera), luego *args y al final **kwargs.
def suma_mixta(*args, **kwargs):
    # args será una tupla con todos los números posicionales.
    suma = 0
    for numero in args:
        suma += numero

    print(f"La suma de los argumentos posicionales es: {suma}")

    # kwargs será un diccionario con argumentos nombrados.
    if kwargs:
        print("Parámetros nombrados (kwargs):")
        for clave, valor in kwargs.items():
            print(f"  {clave}: {valor}")
    else:
        print("No se han pasado parámetros nombrados (kwargs).")


# Pruebo la función con solo args.
suma_mixta(1, 2, 3, 4, 5)

# Pruebo la función con args y kwargs mezclados.
suma_mixta(10, 20, 30, proyecto="Práctica funciones", unidad="2", curso="Python")


# -------- Uso de return en funciones --------
# Aquí creo una función que procesa unos datos y devuelve un texto.
def procesar_informe(*datos):
    # Simulo que recibo datos y quiero preparar un informe.
    if len(datos) == 0:
        return "No se han recibido datos."

    # Si hay exactamente 2 datos, supongo que son nombre y apellido.
    if len(datos) == 2:
        return f"Nombre: {datos[0]}\nApellido: {datos[1]}"

    # Si el número de datos no es 0 ni 2, lo considero incorrecto.
    return "Cantidad de datos incorrecta."


# Guardo lo que devuelve la función en una variable y luego lo imprimo.
informe1 = procesar_informe("Borja", "Martínez")
print(informe1)

informe2 = procesar_informe()
print(informe2)

informe3 = procesar_informe("Uno", "Dos", "Tres")
print(informe3)


# -------- Funciones lambda --------
# Una función lambda es una función anónima (sin nombre) de una sola línea.
# La forma general es: lambda parámetros: expresión

# Ejemplo equivalente:
# Función normal
def suma_normal(a, b):
    return a + b


# Función lambda equivalente, guardada en una variable.
suma_lambda = lambda a, b: a + b

print("Suma normal:", suma_normal(3, 4))
print("Suma lambda:", suma_lambda(3, 4))


# Ejemplo típico: usar lambda como key en sorted()
# Tengo una lista de tuplas (nombre, nota).
alumnos = [("Ana", 7), ("Luis", 5), ("Pedro", 9)]

# Quiero ordenarlos por la nota (posición 1 de la tupla).
# Aquí uso key=lambda x: x[1] para decirle a sorted que use la nota como clave de orden.
alumnos_ordenados = sorted(alumnos, key=lambda x: x[1])

print("Alumnos ordenados por nota (de menor a mayor):")
print(alumnos_ordenados)