# 09_iterando_estructuras.py
# Tema 1 Recorrer listas, diccionarios y rangos

numeros = [10, 20, 30, 40]

for n in numeros:
    print(f"Número: {n}")

persona = {"nombre": "Miguel", "edad": 25}

for clave, valor in persona.items():
    print(f"{clave}: {valor}")

for i in range(3):
    print(f"Iteración {i}")


if __name__ == "__main__":
    print("Todo recorrido correctamente.")
