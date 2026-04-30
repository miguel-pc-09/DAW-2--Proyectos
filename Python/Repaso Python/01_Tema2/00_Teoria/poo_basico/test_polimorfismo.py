# test_polimorfismo.py
# Uso desde otro archivo para demostrar polimorfismo.

from polimorfismo_7 import Perro, Gato

lista = [Perro(), Gato()]

for animal in lista:
    animal.hacer_sonido()

# Comentario: Este patrón es muy común en diseños que utilizan interfaces o clases base.
