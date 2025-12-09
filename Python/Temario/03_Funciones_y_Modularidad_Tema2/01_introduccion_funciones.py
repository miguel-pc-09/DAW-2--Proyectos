# 01_introduccion_funciones.py
# Aquí recojo la idea básica del tema: qué es una función
# y el primer ejemplo sencillo.


# NOTA: una función es un bloque de código con un nombre
# que puedo reutilizar todas las veces que quiera sin repetirlo.


# Defino una función muy simple:
def saludar():
    # Esta función no recibe parámetros y solo muestra un mensaje.
    print("Hola desde la primera función")


if __name__ == "__main__":
    print("Vamos a proceder a la llamada de la función")

    # Llamo a la función 'saludar'. Importante: siempre con paréntesis.
    saludar()

    # NOTA: si no pongo los paréntesis (saludar), NO se ejecuta,
    # solo estaría pasando la referencia a la función.
