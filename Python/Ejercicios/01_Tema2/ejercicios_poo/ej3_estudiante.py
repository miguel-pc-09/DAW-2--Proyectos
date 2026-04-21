# ej3_estudiante.py
# Ejercicio 3: herencia. Definimos Persona y la subclase Estudiante.
# Objetivo: practicar super(), herencia y métodos específicos.

class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

class Estudiante(Persona):
    def __init__(self, nombre, ciclo):
        # Llamamos al constructor de la clase base para inicializar nombre
        super().__init__(nombre)
        # Atributo específico de Estudiante
        self.ciclo = ciclo

    def mostrar_curso(self):
        # Método específico de la subclase
        return f"Soy {self.nombre} y estudio {self.ciclo}."

if __name__ == "__main__":
    e = Estudiante("Carlos", "DAM")
    print(e.mostrar_curso())
