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

                     #⏬ 1º "w"// 2º y 3º "r" //  4º "a"⏬ // 5º "r" // 6º "r+"
archivo_texto = open ("archivo.txt", "r+") # solo con esto al ejecutar se crea automaticamente lo crea. CREACION Y APERTURA
                                        

# EScribir dentro del archivo 
#Creamos una variable con un contenido

# ==== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪====
""" frase = " Estupendo dia para estudiar Python \n el sabado" """

# Ahora tenemos que decir que incluya el contenido de esta variable al archivo.
# Llamamos al archivo punto, y usamos el metodo write (escritura), y dentro el argumento que queremos que escriba
# =====🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.write(frase)  """  # MANIPULACION 

# Cierre con el metodo close()

# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.close() """



# ====================== 🥳🙈🙉🙊 2º COMO ABRIRLO EN MODO LECUTRA R 🥳🙈🙉🙊=======================================
# Mantenemos la linea 9 y 17 pero cambiando la W por la R, con esto le decimos que abriremos el archivo que ya existe en modo lectura
# para esto podemos crear una variable, y dentro de esta variable guardaremos lo que se lee dentro del archivo
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" texto = archivo_texto.read() """
        # A la hora de leer un archivo tambien tenemos el metodo READLINES(). le el archivo linea a linea y almacenar eso en una LISTA, y nos permitira 
        # hacer busquedas como de manipulacion de archivos.

# Ahora lo pdemos cerrar
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.close() """

# Apesar de cerrar el archivo como esta almacenada en la variable texto, podemos imprimirla
# =====🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" print(texto) """



# ======================🥳🙈🙉🙊 3º COMO ABRIRLO EN MODO LECUTRA R  radlines() 🥳🙈🙉🙊=======================================
""" Lo mantenemos con "r" es decir lineas 9 y 17 iguales. Comentamos lo anterior  """
# Creamos una variable 
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" lineas_texto = archivo_texto.readlines() """

# Como la informacion guardada cerramos
# =====🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.close() """

# podemos decir que nos imprima veremos que muestra una lista [' Estupendo dia para estudiar Python \n', ' el sabado']
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" print(lineas_texto) """
# Como podemos acceder a la primera linea por ejemplo  -> Estupendo dia para estudiar Python 
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪 ==== 
""" print(lineas_texto[0]) """
""" print(lineas_texto[1])  """   # ->  con un salto de linea entre las dos => el sabado

# Tambien podemos usar el metodo for para recorrer los elementos de la lista o con condicionales buscar un elemento concreto 


# ======================🥳🙈🙉🙊 4º COMO ABRIRLO PARA AGREGAR INFORMACION a  append 13:52 🥳🙈🙉🙊=======================================
# Al metodo Open le tenemos que pasar una "a" como parte del argumento 
# Esto abre el archivo en modo extension, abrir o añadir. 
# Usamos ese archivo junto con el metodo write, dentro de (escribir lo que queramos)
# =====🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.write("\n siempre es una buena ocasion para estudiar Python") """    # metemos \n para que escriba en la siguiente linea

# Y ya podemos cerrar el archivo
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.close() """

# Guardamos y si ejecutamos veremos lo siguiente 
"""  
Estupendo dia para estudiar Python 
 el sabado
 siempre es una buena ocasion para estudiar Python 
"""

# ========================🥳🙈🙉🙊 5º SEGUNDA PARTE, NO CREO QUE SEA NECESARIO 🥳🙈🙉🙊===================
""" Como manejar un, Punteros de texto.  """
# Lo primero es el import lo dejamos igual pero la linea de open debemos cambiar de "a" que tenia a "r" modo lectura
# pediremos que imprima el archivo de texto 
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" print(archivo_texto.read()) """
# no podria hacer otro print porque el cursor ya se situo al final. 
#print(archivo_texto.read())
# Si no indicamos nada por defecto se situa al comienzo del archivo, 📍Comienzo del texto...... y cuando termina se va al final ...estudiar Python📍
# En python esto se puede modificar para situnarnos donde queramos. Con el METODO SEEK(PARAMETROS DONDE QUEREMOS QUE SE POSICIONE). EJEMPLO seek(5) se colocara en la posicion 5
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.seek(0) """  # Con esta instrucion ahora si podemos hacer otro read del fichero
""" archivo_texto.seek(11) """ # Comienza en dia......
""" print(archivo_texto.read()) """
""" archivo_texto.seek(0)  """  # volvemos a ponerlo en cero y ahora en read ejecutamos 11
# No lo podemos con el metodo sekk, tambien se podria con el read pero seria distinta. seek se posiciona el puntero en el caracter ese
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" print(archivo_texto.read(11)) """ # Solo leera hasta que llegue al 11 -> Estupendo

# ===== Como decirle por ejemplo que comienze en medio ===== 
# Utilizaremos el metodo seek y dentro len. 
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.seek(len(archivo_texto.read())/2) """ # como len nos devuelve la longitud de caracteres que tiene pues todo ello lo dividimos entre 2

# Ahora hacemos un print para que nos saque la mitad
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" print(archivo_texto.read()) """ # salto de linea y texto siempre es una buena ocasion para estudiar Python

# Tambioen podemos usar el metodo readline para que salte la primera linea y lea el resto 
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.seek(len(archivo_texto.readline())) """
""" print(archivo_texto.read())  """  # Desde "el sabado...... Python"


# ========================🥳🙈🙉🙊 6º Como hacer que se abra tanto para leer como para escribir a la vez  🥳🙈🙉🙊===================
# Se consigue poniendo "r+" -> Lectura y escritura 

# Ahora se puede usar write 
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" archivo_texto.write("Comienzo del texto") """ # Si no le indicamos nada sobre el cursor, por defecto el puntero estara en la posicion 0
                                          # Lo que tambien hace es reemplazar lo que estuviera y ocupe el siguiente texto 
# Si esto lo usamos junto con el metodo readline, podemos manipular por lineas. "Comentamos el write"
# ===== 🤪⏬ DESCOMENTAR PARA USAR ⏬🤪==== 
""" print(archivo_texto.readlines()) """ # Nos devolvera uina lista ['Comienzo del textoa estudiar Python \n', ' el sabado\n', ' siempre es una buena ocasion para estudiar Python'] 
                                                        # Los saltos de lineas los representa con \n
        # comentamos el print este ultimo 
# Podemos incluir dentro de esa lista, una linea en mitad de ese documento
# Creamos una variable
lista_texto = archivo_texto.readlines()

lista_texto[1] = " Esta linea ha sido incluida desde el exterior \n"

archivo_texto.seek(0)

# El metodo writelines nos pide por parametro una lista. 
archivo_texto.writelines(lista_texto)

archivo_texto.close()
