# 03_entrada_y_salida.py
# Tema 1 Entrada y salida de datos
# Basado en el uso de input() y print() explicado en el tema.

# NOTA: input() siempre devuelve un STRING. Si quiero números,
# debo convertirlos (int, float).


def pedir_nombre():
    nombre = input("Introduce tu nombre: ")
    print(f"Hola {nombre}, bienvenido a Python.")


if __name__ == "__main__":
    print("Este archivo muestra cómo funciona la entrada y salida.")
    # Comentado para evitar que moleste al importar:
    # pedir_nombre()
