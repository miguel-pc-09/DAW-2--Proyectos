# 03_bucle_while.py
# Tema 1  Bucle WHILE 

# NOTA: WHILE ejecuta un bloque mientras la condición sea verdadera.
# IMPORTANTE: debo actualizar la condición o puedo hacer un bucle infinito.

contador = 1

while contador <= 5:
    print(f"Iteración número {contador}")
    contador += 1  # si no incremento, se queda en bucle infinito


if __name__ == "__main__":
    # Prueba adicional
    x = 0
    while x < 3:
        print("Hola desde un while de prueba")
        x += 1
