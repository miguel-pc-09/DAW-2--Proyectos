""" ========== ESCRITURA =========  """
# Apertura del fichero en modo escritura (w). El cual sobrescribe lo ya existente, (a) añadir contenido a lo ya existente o en modo creacion (x), creando el fichero si no existe y obteniendo un error en caso de existir.
# Utilizando el operador with, lo dejariamos preparado de la siguiente forma

# REaliazar ejemplos  aquí --------------------------------------

lineas = ["\nLinea 1\n", "Linea 2\n", "Linea 3\n"]
with open("./00_Teoria/escritura.txt", "a") as fichero:      
    fichero.writelines(lineas)    
                                                                

# ------------------------------------------------------------
# Modo escritura    

""" 
with open("./00_Teoria/escritura.txt", "x") as fichero:     
        # Metodo write el cual escribe línea con el string indicado.
        fichero.write("Linea de escritura.")   
        
"""
    
# Modo anexar. 
""" 
with open("./00_Teoria/escritura.txt", "a") as fichero:
    fichero.write("\nLinea de escritura de una segunda linea. ") # \n para que haga el salto de linea 
    
"""
    
    
# OTra capacidad, escribir de forma completa el contenido de una lista en un fichero. Para ello es necesario utilizar el método writelines(). 
""" 
lineas = ["Linea 1\n", "Linea 2\n", "Linea 3\n"]
with open("./recursos/escrutura.txt", "a") as fichero:
    fichero.writelines(lineas)

"""


""" Vamos a imaginar que queremos exportar a un fichero csv la lista de alumnos (creados como objetos), mostrando todos sus datos """
class alumno: 
    def __init__(self, nombre, edad, curso, nota):
        self.nombre = nombre
        self.edad = edad
        self.curso = curso
        self.nota = nota
        
    def exportar_datos(self):
        return f"{self.nombre}, {self.edad}, {self.curso}, {self.nota}"
    
from alumnos import alumno 
alumno = {
    alumno("Juan", 20, "1º", 8.5),
    alumno("Ana", 22, "2º", 9.0),
    alumno("Luis", 21, "1º", 7.5),
    alumno("Marta", 24, "1º", 9.5),
    alumno("Juan", 28, "2º", 7.5),
}

with open("./00_Teoria/alumnos.csv", "x") as fichero:
    for a in alumno:
        fichero.write(a.exportar_datos() + "\n")