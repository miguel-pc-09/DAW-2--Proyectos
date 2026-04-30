""" ===============================
TRABAJO CON FICHEROS EN PYTHON
=============================== """

# ---------------------------------
# 1. LECTURA DE FICHEROS
# ---------------------------------

# Modo "r" → solo lectura
# Si el fichero no existe → error

with open("./00_Teoria/lectura.txt", "r") as fichero:
    contenido = fichero.read()   # Lee todo el contenido
    print("LECTURA:")
    print(contenido)


# ---------------------------------
# 2. ESCRITURA DE FICHEROS
# ---------------------------------

# Modo "w"
# Sobrescribe el contenido si existe
# Si no existe → lo crea

with open("./00_Teoria/escritura.txt", "w") as fichero:
    fichero.write("Linea 1\n")


# Modo "a"
# Añade contenido sin borrar lo anterior

with open("./00_Teoria/escritura.txt", "a") as fichero:
    fichero.write("Linea 2\n")


# Método writelines()
# Escribe varias líneas desde una lista

lineas = ["Linea 3\n", "Linea 4\n", "Linea 5\n"]

with open("./00_Teoria/escritura.txt", "a") as fichero:
    fichero.writelines(lineas)


# ---------------------------------
# 3. EXPORTAR OBJETOS A CSV
# ---------------------------------

class alumno:
    def __init__(self, nombre, edad, curso, nota):
        self.nombre = nombre
        self.edad = edad
        self.curso = curso
        self.nota = nota

    def exportar_datos(self):
        return f"{self.nombre}, {self.edad}, {self.curso}, {self.nota}"


# Lista de alumnos
alumnos = [
    alumno("Juan", 20, "1º", 8.5),
    alumno("Ana", 22, "2º", 9.0),
    alumno("Luis", 21, "1º", 7.5),
    alumno("Marta", 24, "1º", 9.5),
]


# Modo "w" → para evitar error si ya existe
with open("./00_Teoria/alumnos.csv", "w") as fichero:
    for a in alumnos:
        fichero.write(a.exportar_datos() + "\n")


# ---------------------------------
# 4. EXCEPCIONES
# ---------------------------------

# try → código que puede fallar
# except → captura el error
# finally → se ejecuta siempre

try:
    numero = int(input("Introduce un número: "))
    print("Número correcto:", numero)

except ValueError:
    print("Error: no es un número válido")

finally:
    print("Fin del programa")
    
    
