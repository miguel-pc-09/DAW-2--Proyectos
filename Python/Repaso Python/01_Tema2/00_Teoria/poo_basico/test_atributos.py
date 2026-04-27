# test_atributos.py
# Importamos la clase Coche definida en atributos_2.py y la usamos desde aquí.

from atributos_2 import Coche

c = Coche("Honda", "Civic")
print("Marca:", c.marca)
print("Modelo:", c.modelo)

# Comentario: Los atributos son específicos de cada instancia a menos que
# se definan como atributos de clase (ej. Coche.numero_ruedas = 4).
