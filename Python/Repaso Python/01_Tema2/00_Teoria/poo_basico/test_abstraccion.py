# test_abstraccion.py
# Uso desde otro archivo, el usuario solo invoca 'arrancar' sin preocuparse
# por los detalles internos. Esto es abstracción aplicada en código.

from abstraccion_4 import Coche

c = Coche()
c.arrancar()
