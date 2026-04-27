# herencia_6.py
# Ejemplo de herencia: crear clases especializadas a partir de una clase base.
# La herencia permite reutilizar código y extender comportamiento.

class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hacer_sonido(self):
        # Método genérico; cada subclase puede sobrescribirlo (override)
        print("Sonido genérico")

class Perro(Animal):
    def hacer_sonido(self):
        # Método sobrescrito: comportamiento específico para Perro
        print(f"{self.nombre} dice: Guau!")

class Gato(Animal):
    def hacer_sonido(self):
        print(f"{self.nombre} dice: Miau!")

if __name__ == "__main__":
    p = Perro("Bobby")
    g = Gato("Michi")
    p.hacer_sonido()  # Perro usa versión propia
    g.hacer_sonido()  # Gato usa versión propia
