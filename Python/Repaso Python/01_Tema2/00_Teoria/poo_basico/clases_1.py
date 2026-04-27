# clases_1.py
# Ejemplo básico sobre qué es una clase en Python.
# Una clase es una plantilla (molde) que describe la estructura y comportamiento
# de los objetos que se crearán (instancias).
#
# Aquí definimos una clase Coche sin atributos ni métodos para mostrar la sintaxis mínima.

class Coche:
    pass  # 'pass' indica que la clase no tiene contenido por ahora

# Uso en el mismo archivo: se crea una instancia de Coche y se muestra por pantalla.
# Si ejecutas este archivo directamente (python clases_1.py), se ejecutará este bloque.
if __name__ == "__main__":
    mi_coche = Coche()
    print("Objeto creado en el mismo archivo:", mi_coche)
    # Observa que la impresión muestra la dirección de memoria y el tipo,
    # lo que confirma que mi_coche es una instancia de la clase Coche.
