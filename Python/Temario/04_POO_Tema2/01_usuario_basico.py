# 01_usuario_basico.py
# Resumen POO Tema 2 - Clases y constructor simple
# En Python, una clase es la plantilla para crear objetos.
# Se define con 'class Nombre:' .

class Usuario:
    # Aquí defino el constructor de la clase
    # NOTA: self es como el "this" de JAVA, es decir, la propia instancia del objeto sobre la que estoy trabajando.
    def __init__(self, nombre, edad, nota):
        # Estos son los atributos de instancia.
        self.nombre = nombre
        self.edad = edad
        self.nota = nota


if __name__ == "__main__":
    # Creo un objeto de tipo Usuario.
    alumno = Usuario("Borja", 20, 9)

    # Compruebo que los atributos se han guardado bien.
    print(alumno.nombre)
    print(alumno.edad)
    print(alumno.nota)
