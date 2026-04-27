# test_clases.py
# Ejemplo de cómo importar y usar la clase Coche desde otro archivo.
# Importante: clases_1.py debe estar en la misma carpeta o en el PYTHONPATH.

from clases_1 import Coche

# Crear una instancia desde un archivo diferente demuestra la modularidad.
mi_coche = Coche()
print("Objeto creado desde otro archivo:", mi_coche)

# Comentario: Esta práctica modular permite separar la definición de una
# clase (que puede ser larga y documentada) del código que la utiliza.
