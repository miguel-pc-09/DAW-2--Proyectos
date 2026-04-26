# Definir una funcion simple 
def saludar():
    print("Hola desde la primera funcion")
    
# Llamar a la funcion
print("Vamos a proceder a la llamada de la funcion")
saludar()
print("")

""" ===================================================================================================== """
# Uso de parametros en una funcion
def saludar(nombre):
    print(f"Hola {nombre}, espero que te encuentres bien")
    
# llamada a la funcion con parametro 
saludar("Luis")

# PAsar mas datos, tantos como quisieramos y con repeticion
def saludar(nombre, apellido, repeticiones):
    for i in range(repeticiones):
     print(f"Hola{nombre} {apellido}, espero que te encuentres bien.")
     
# Llamada a la funcion con mas parametros, el ultimo es tantas veces se va a repetir.
saludar("Luis", "Perez", 3)
print("")

# En caso de no poner un valor por defecto en los parametros, se debe poner el valor por defecto en el ultimo parametro
def saludar(nombre, apellido, repeticiones = 1):
    for i in range(repeticiones):
        print(f"Hola {nombre} {apellido}, espero que te encuentres bien.")
        
# Llamada a la funcion con mas parametros, el ultimo es tantas veces se va a repetir.
saludar("Juan", "Gómez")

""" Importante los parametros por defecto siempre seran en la parte final de la funcion """
# def saludar(nombre="Juan", apellido, edad) # Uso incorrecto
def saludar(nombre,apellido, edad= 18, experiencia= True):
    print(f"Hola {nombre} {apellido}, tienes {edad} años y tienes experiencia? {experiencia}")
    
# Llamada a la funcion con mas parametros, el ultimo es tantas veces se va a repetir.
saludar("Luis", "Perez")
print("")

""" ================= TIPOS DE PARÁMETROS ================== """
def funcionParametros(param1, param2, param3):
    print(f"param1: {param1}, param2: {param2}, param3: {param3}")
    
funcionParametros("valor1", "Valor2", "valor3")
print("")
""" ================================================= Uso de *args y **kwargs ============================== """
# Uso de *args mete en tupla los parametros
def calculo_media(*notas):
    media = 0.0
    print(f"Procedo a caulcular la media de {len(notas)} notas")
    for i in notas:
        media += i
        
    media /= len(notas)
    print(f"La media obtenida es de : {media}")
    
calculo_media(1, 5, 7, 3)
calculo_media(4, 9, 6)
print("")

# *Kwargs mete en diccionario los parametros
def importar_usuario(**kwargs):
    print("Los datos pasados del ususario son:")
    for key, value in kwargs.items():
        print(f"{key}: {value}")
        
importar_usuario(nombre="Juan", apellido="Gomez", edad = 25, ciudad="Madrid")
print("")

# *args y **kwargs
def suma_mixta(*args, **kwargs):
    suma = 0
    for i in args:
        suma += i
    print(f"La suma de los argumentos es: {suma}")
    for key, value in kwargs.items():
        print(f"{key}: {value}")
        
suma_mixta(1,2,3,4,5,6,7,8,9,10, proyecto="Sumatorio", unidad="2", curso="Python")
print("")

# Uso de retorno
def procesar_informe(*datos):
    print("Los datos se han recibido correctamente")
    if len(datos) > 0:
        return f"Nombre: {datos[0]}\nApellido: {datos[1]}"
    elif len(datos) > 2:
        return "Cantidad de datos incorrecta"
    else:
        return "No se han recibido datos"
print(procesar_informe("Miguel", "Perucha"))
print("")
""" ============================================= Funciones lambda ========================================= """
# definicion normal de la funcion 
def suma(a, b):
    return a + b

# definicion y uso de una funcion lambda
sumaVar = lambda a, b: a + b
print("Funcion lambda: de 7 y 9 ", sumaVar(7, 9))
print("")
# utilizar como parámetro dentro de otra funcion
alumnos = [("Ana", 7), ("Luis", 5), ("Pedro", 9)]
ordenados = sorted(alumnos,key=lambda x: x[1])
print(ordenados)


""" ============================== Modularidad ====================================== """
# Fichero operaciones.py
#  Lo llamamos en el fichero calculadora.py
