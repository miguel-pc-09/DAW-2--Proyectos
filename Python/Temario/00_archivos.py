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

                     # 1º "w"// 2º y 3º "r" //  4º "a"
archivo_texto = open ("archivo.txt", "a") # solo con esto al ejecutar se crea automaticamente lo crea. CREACION Y APERTURA
                                        

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

# ====================== 2º COMO ABRIRLO EN MODO LECUTRA R =======================================
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


# ====================== 3º COMO ABRIRLO EN MODO LECUTRA R  radlines()=======================================
""" Lo mantenemos con "r" es decir lineas 9 y 17 iguales. Comentamos lo anterior  """
# Creamos una variable 
# ===== DESCOMENTAR PARA USAR ==== 
""" lineas_texto = archivo_texto.readlines() """

# Como la informacion guardada cerramos
# ===== DESCOMENTAR PARA USAR ==== 
""" archivo_texto.close() """

# podemos decir que nos imprima veremos que muestra una lista [' Estupendo dia para estudiar Python \n', ' el sabado']
# ===== DESCOMENTAR PARA USAR ==== 
""" print(lineas_texto) """
# Como podemos acceder a la primera linea por ejemplo  -> Estupendo dia para estudiar Python 
# ===== DESCOMENTAR PARA USAR ==== 
""" print(lineas_texto[0]) """
""" print(lineas_texto[1])  """   # ->  con un salto de linea entre las dos => el sabado

# Tambien podemos usar el metodo for para recorrer los elementos de la lista o con condicionales buscar un elemento concreto 


# ====================== 4º COMO ABRIRLO PARA AGREGAR INFORMACION a  append 13:52=======================================
# Al metodo Open le tenemos que pasar una "a" como parte del argumento 
# Esto abre el archivo en modo extension, abrir o añadir. 
# Usamos ese archivo junto con el metodo write, dentro de (escribir lo que queramos)
archivo_texto.write("\n siempre es una buena ocasion para estudiar Python")    # metemos \n para que escriba en la siguiente linea

# Y ya podemos cerrar el archivo
archivo_texto.close()

# Guardamos y si ejecutamos veremos lo siguiente 
"""  
Estupendo dia para estudiar Python 
 el sabado
 siempre es una buena ocasion para estudiar Python 
"""