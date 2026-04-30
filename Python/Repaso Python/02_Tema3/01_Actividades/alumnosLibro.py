""" Realiza el siguiente ejercicio para practicar lo visto en esta unidad:
Crea un programa en Python que lea un fichero de texto llamado notas.txt, donde
cada línea contiene el nombre de un alumno y su nota, separados por una coma.
Ejemplo del contenido del fichero:
Ana,8.5
Luis,9.0
Carlos,mal
María,7.2
El programa debe
▪ Abrir el fichero notas.txt en modo lectura.
"""

# Guardamos las notas validas
notas_validas = []

# abrimos y leemos el fichero
with open("./01_Actividades/notas.txt", "r") as fichero:
    lineas = fichero.readlines()
    
    # Recorremos fichero linea por linea
for linea in lineas:
    # como puede venir con \n, usamos strip()
    linea = linea.strip()
    # Separamos con split(",") los datos
    datos = linea.split(",")
    
    nombre = datos[0]
    # Como vendra mal una de las notas controlamos con try
    try:
        nota = float(datos[1])
        notas_validas.append(f"{nombre},{nota}\n")
        print(nombre, nota)
        
    except ValueError:
        print(f"La nota de {nombre} no es valida.")
        
# guardamos notas_validas de arriba 
with open("./01_Actividades/notas_validas.txt", "w") as fichero:
    fichero.writelines(notas_validas)
    
print("Fichero notas_validas.txt creado correctamente. ")
        
        
    
    
    
   