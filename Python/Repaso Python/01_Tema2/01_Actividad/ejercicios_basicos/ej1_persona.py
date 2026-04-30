# ej1_persona.py
# Ejercicio 1: definición de la clase Persona con atributos y método de presentación.
# Objetivo: practicar atributos, constructor y método de instancia.

class Persona:
    def __init__(self, nombre, edad):
        # Constructor que inicializa atributos públicos
        self.nombre = nombre
        self.edad = edad

    def presentarse(self):
        # Método que devuelve una cadena con la presentación
        return f"Hola, me llamo {self.nombre} y tengo {self.edad} años."

# Ejecución directa: ejemplo de uso local
if __name__ == "__main__":
    p = Persona("Ana", 30)
    print(p.presentarse())
