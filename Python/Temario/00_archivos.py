# Modulo io modulo estandar
# Fases para Guardar unformacion en archivos externos
    # 1º Creacion 
    # 2º Apertura
    # 3º Manipulacion para introducion de informacion o leer
    # 4º Cierre

# importamos el modulo io el metodo open para abrir un archivo externo
from io import open

# crear un archivo externo para almacenar una frase. El metodo open nos pedira dos argumentos: 
    # nombre del archivo y el modo en el que lo vamos a abrir:
            #   lectura"Si queremos leer solamente", 2º Usaremos este. (COMENTAR PARTES DEL ANTERIOR)
            #   "w" escritura,"si vamos agregar informacion" 1º usaremos este 
            #   append, "Para agregar informacion a un archivo que ya existe y tiene informacion "

archivo_texto = open ("archivo.txt", "r") # solo con esto al ejecutar se crea automaticamente lo crea. CREACION Y APERTURA

# EScribir dentro del archivo 
#Creamos una variable con un contenido
# ==== DESCOMENTAR PARA USAR ====
""" frase = " Estupendo dia para estudiar Python \n el sabado" """

# Ahora tenemos que decir que incluya el contenido de esta variable al archivo.
# Llamamos al archivo punto, y usamos el metodo write (escritura), y dentro el argumento que queremos que escriba
# ===== DESCOMENTAR PARA USAR ==== 
""" archivo_texto.write(frase)  """  # MANIPULACION 

# Cierre con el metodo close()
# ===== DESCOMENTAR PARA USAR ==== 
""" archivo_texto.close() """

# ====================== COMO ABRIRLO EN MODO LECUTRA R =======================================
# Mantenemos la linea 9 y 17 pero cambiando la W por la R, con esto le decimos que abriremos el archivo que ya existe en modo lectura
# para esto podemos crear una variable, y dentro de esta variable guardaremos lo que se lee dentro del archivo
# ===== DESCOMENTAR PARA USAR ==== 
""" texto = archivo_texto.read() """
        # A la hora de leer un archivo tambien tenemos el metodo READLINES(). le el archivo linea a linea y almacenar eso en una LISTA, y nos permitira 
        # hacer busquedas como de manipulacion de archivos.

# Ahora lo pdemos cerrar
# ===== DESCOMENTAR PARA USAR ==== 
""" archivo_texto.close() """

# Apesar de cerrar el archivo como esta almacenada en la variable texto, podemos imprimirla
# ===== DESCOMENTAR PARA USAR ==== 
""" print(texto) """


# ====================== COMO ABRIRLO EN MODO LECUTRA R  radlines()=======================================
""" Lo mantenemos con "r" es decir lineas 9 y 17 iguales. Comentamos lo anterior  """
# Creamos una variable 
lineas_texto = archivo_texto.readlines()

# Como la informacion guardada cerramos
archivo_texto.close()

# podemos decir que nos imprima veremos que muestra una lista [' Estupendo dia para estudiar Python \n', ' el sabado']
print(lineas_texto)
# Como podemos acceder a la primera linea por ejemplo  -> Estupendo dia para estudiar Python 
print(lineas_texto[0])
print(lineas_texto[1])    # ->  con un salto de linea entre las dos => el sabado

# Tambien podemos usar el metodo for para recorrer los elementos de la lista o con condicionales buscar un elemento concreto 


# ====================== COMO ABRIRLO PARA AGREGAR INFORMACION R  radlines() 13:52=======================================
