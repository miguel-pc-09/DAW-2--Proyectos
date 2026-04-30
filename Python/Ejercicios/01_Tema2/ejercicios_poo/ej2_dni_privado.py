# ej2_dni_privado.py
# Ejercicio 2: atributo privado y método para accederlo.
# Objetivo: practicar encapsulamiento usando __ (name mangling) y métodos seguros.

class Persona:
    def __init__(self, nombre, dni):
        self.nombre = nombre
        # Atributo "privado" mediante name mangling
        self.__dni = dni

    def obtener_dni(self):
        # Método público para acceder al DNI de forma controlada
        return self.__dni

if __name__ == "__main__":
    persona = Persona("Luis", "12345678A")
    print("DNI (vía método):", persona.obtener_dni())
    # Acceso directo no recomendado:
    # print(persona.__dni)  # causará AttributeError
