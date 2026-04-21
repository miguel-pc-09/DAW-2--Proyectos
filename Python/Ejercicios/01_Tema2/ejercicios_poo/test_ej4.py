# test_ej4.py
# Uso desde otro archivo del ejercicio 4 (polimorfismo)

from ej4_figuras import Circulo, Cuadrado

formas = [Circulo(2), Cuadrado(5)]
for forma in formas:
    print("Test Ejercicio 4 ->", forma.__class__.__name__, "área:", forma.area())
