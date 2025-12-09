# 04_encapsulamiento.py
# Ejemplo con la clase Estudiante y __nota.

class Estudiante:
    def __init__(self, nombre, nota):
        self.nombre = nombre
        # Atributo "privado" usando __ (name mangling) "Doble barra baja".
        # NOTA: esto no es privado al 100% como en otros lenguajes,
        # pero sirve para indicar que no debo tocarlo desde fuera.
        self.__nota = nota

    def modificar_nota(self, nueva_nota):
        # Setter sencillo para modificar la nota de forma controlada.
        self.__nota = nueva_nota

    def mostrar_nota(self):
        # Getter sencillo para ver la nota.
        print(f"Nota: {self.__nota}")


if __name__ == "__main__":
    est = Estudiante("Juan", 8)

    # Uso correcto: a través de sus métodos.
    est.mostrar_nota()
    est.modificar_nota(10)
    est.mostrar_nota()

    # Uso incorrecto: intentar acceder directamente al atributo "privado".
    # Esto daría error:
    # print(est.__nota)
    #
    # NOTA: si intentara acceder, Python se quejaría porque internamente
    # hace name mangling y el atributo se llama algo como _Estudiante__nota.