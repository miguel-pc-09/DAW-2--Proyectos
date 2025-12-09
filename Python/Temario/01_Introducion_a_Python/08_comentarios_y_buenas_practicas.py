# 08_comentarios_y_buenas_practicas.py
# Tema 1 Comentarios y estilo del código

# Comentario en una línea

"""
Comentario
de varias
líneas (documentación)
"""

# NOTA: en Python se recomienda:
# - usar nombres claros
# - escribir todo en minúscula con guiones bajos (snake_case)
# - comentar SOLO si aporta claridad


def sumar(a, b):
    """Función que suma dos números"""
    return a + b


if __name__ == "__main__":
    print(sumar(10, 5))
    print("Ejemplo de documentación y buenas prácticas.")
