# polimorfismo_7.py
# Ejemplo de polimorfismo: objetos de diferentes clases responden al mismo mensaje/método.

class Animal:
    def hacer_sonido(self):
        # Implementación por defecto (puede no usarse)
        print("Sonido genérico")

class Perro(Animal):
    def hacer_sonido(self):
        print("Guau!")

class Gato(Animal):
    def hacer_sonido(self):
        print("Miau!")

if __name__ == "__main__":
    animales = [Perro(), Gato()]
    # No necesitamos preguntar el tipo; llamamos al mismo método y cada uno responde a su manera.
    for a in animales:
        a.hacer_sonido()
