# test_herencia.py
# Importamos las subclases y usamos los comportamientos heredados y sobrescritos.

from herencia_6 import Perro, Gato

p = Perro("Rex")
g = Gato("Luna")

# Aunque Perro y Gato no definieron __init__ propio (usaron el de Animal),
# disponen de nombre y del método hacer_sonido específico.
p.hacer_sonido()
g.hacer_sonido()
