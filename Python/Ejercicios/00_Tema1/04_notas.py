""" Estructuras de control y datos en Python – Gestor de notas de alumnos """
""" 
    • Estructuras de control:
        o if, elif, else → para tomar decisiones.
        o while, for → para repetir acciones.
    • Estructuras de datos:
        o list → para guardar varios valores.
        o dict → para agrupar información con etiquetas (por ejemplo, nombre y notas).
    • Entrada y salida de datos:
        o input() y print() 
"""
""" 
Crear un programa en Python que:
1. Pida los nombres de varios alumnos.
2. Para cada alumno, permita introducir varias notas.
3. Calcule la media de cada alumno.
4. Indique si está aprobado o suspenso.
5. Muestre un resumen final con todos los alumnos procesados

"""

print("====== GESTOR DE NOTAS ======= ")

# 1º crear una lista para poder guardar datos en el futuro 
alumnos = []

# 2º Un bucle principal para introducir alumnos
while True:
    nombre = input("Introduce el nombre del alumno (o pulsa Enter para finalizar): ") # entrada de nombre por consola 
    if nombre == "":   # Si nombre es igual a vacio ("") 
        break          # Cierra. De lo contrario seguira siempre recogiendo nombres. 

# 3º Otro bucle para recoger las notas, antes crear una variable con la lista 
    notas = []

    while True:
        nota = input("Introduce una nota(o pulsa Enter para terminar): ")
        if nota == "":
         break            # Al igual que con nombre notas misma estructura

        notas.append(float(nota))


# 4º guardado de los datos 
    alumno = {
        "nombre": nombre,
        "notas": notas,
     }
    alumnos.append(alumno)

# 5º mostramos resultados 
print("==== RESULTADOS === ")
for alumno in alumnos:
    if len(alumno["notas"]) > 0:
        media = sum(alumno["notas"])/len(alumno["notas"]) # SUM => es una funcion de Python que suma todos los elementos de un iterable(lista, tupla, etc)
    else:
        media = 0

    if media >= 5:
        estado = "Aprobado"
    else:
        estado = "Suspenso"
print(f"{alumno['nombre']}: media = {media:.2f} -> {estado}")  # :.2f redondea el número a 2 decimales

# 6º final del programa 
print("\n--- Fin del programa ----")
print(f"Se han procesado {len(alumnos)} alumnos.")