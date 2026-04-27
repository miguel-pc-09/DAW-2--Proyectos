# test_metodos.py
# Importar y usar los métodos de la clase Coche desde otro archivo.

from metodos_3 import Coche

c = Coche("Seat", "Ibiza")
c.arrancar()

# Comentario: Los métodos pueden acceder y modificar atributos usando 'self'.
