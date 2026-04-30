# test_ej2.py
# Uso desde otro archivo del ejercicio 2

from ej2_dni_privado import Persona

p = Persona("Luis", "12345678A")
print("Test Ejercicio 2 -> DNI:", p.obtener_dni())
