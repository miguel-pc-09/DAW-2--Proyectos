""" r => MODO LECTURA. Solo podemos leer el fichero. Si no existe, se producira un error. 
    w => MODO ESCRITURA. Si el fichero existe, se borra su contenido. Si no existe, se crea.
    a => MODO AÑADIR. Si el fichero existe, escribimos al final. Si no existe, se crea uno nuevo.
    r+ => LECUTRA Y ESCRITURA al mismo tiempo, sin borrar el contenido. 
"""
# Ejemplo de fichero lectura
fichero = open("./00_Teoria/lectura.txt", "r")
print(fichero.name) # nombre del fichero
print(fichero.mode) # modo de apertura. 

print(fichero.encoding) # Codificación

# === Cerrar el fichero al final == 
fichero.close()

""" Recuerda. Librería llamada Path para el manejo de rutas que simplifica el trabajo en gran medida. Ejemplo: 

from pathlib import Path

ruta = Path("documentos/listado.txt")
if ruta.exists():
    print("El fichero existe")
else: 
    print("No se ha encontrado. ")
    
"""
""" ================ LECTURA ===========================  """
# Diferenest formas de lectura. 
    # -> Lectura carácter a carácter: Este tipo de lectura permtie obtener cada uno de los caracteres de un fichero, obtenido el byte asociado
fichero = open("./00_Teoria/lectura.txt", "r")
caracter = fichero.read(1)
    # podemos utilizar un bucle para que lea todas las lineas del fichero
print(caracter)
fichero.close()
print(" caracte 1 arriba ")
# Lectura línea a línea: Este tipo de lectura permite obtener un string con la ejecucion del método read la obtencion de todo el contenido del fichero: 
print("Lectura con bucle")
fichero = open("./00_Teoria/lectura.txt", "r")
contenido = fichero.read()

for i in contenido:
    print(i)
fichero.close
print("")

# LEctura completa a una lista: Este tipo de lectura es muy similar al anterio, con la diferencia que la lectura queda guardada en una lista. 
fichero = open("./00_Teoria/lectura.txt", "r")
lineas = fichero.readlines()
print(lineas)
print("Numero de lineas: ", len(lineas))
print("Primera linea: ", lineas[0])

""" Existe la posibilidad de utilizar with para poder crear un bloque por lo que no sería necesario abrir y cerrar el fichero ya que lo hace automaticamente """
with open("./00_Teoria/lectura.txt", "r") as fichero:
    contenido = fichero.read()
    print(contenido)
    print(fichero.closed())
    