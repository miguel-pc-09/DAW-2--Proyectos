# ej4_figuras.py
# Ejercicio 4: polimorfismo con figuras geométricas.
# Objetivo: crear una jerarquía Figura -> Circulo/Cuadrado con método area().

class Figura:
    def area(self):
        # Método 'abstracto' en sentido informal: las subclases deben implementarlo.
        raise NotImplementedError("Subclase debe implementar area()")

class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio

    def area(self):
        # Área del círculo = pi * r^2
        pi = 3.141592653589793
        return pi * (self.radio ** 2)

class Cuadrado(Figura):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        # Área del cuadrado = lado^2
        return self.lado * self.lado

if __name__ == "__main__":
    formas = [Circulo(3), Cuadrado(4)]
    for f in formas:
        print(f"Área de {f.__class__.__name__}: {f.area()}")
