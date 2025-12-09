# 04_bucle_for.py
# Tema 1 Bucle FOR 

# NOTA: el FOR recorre elementos de una secuencia:
# listas, rangos, cadenas, etc.

animales = ["perro", "gato", "loro"]

for animal in animales:
    print(f"Animal: {animal}")

# También puedo recorrer un rango numérico
for i in range(1, 6):
    print(f"Número: {i}")


if __name__ == "__main__":
    # Prueba de recorrido sobre un texto
    for letra in "Hola":
        print(letra)
