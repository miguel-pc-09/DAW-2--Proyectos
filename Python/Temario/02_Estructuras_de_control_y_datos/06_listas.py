# 06_listas.py
# Tema 1 Estructuras de datos → LISTAS

# NOTA: Las listas son ordenadas, mutables, y pueden contener cualquier tipo.

frutas = ["manzana", "pera", "plátano"]

# Acceder
print(frutas[0])   # primera posición
print(frutas[-1])  # última posición

# Modificar
frutas.append("naranja")   # añadir al final
frutas.insert(1, "kiwi")   # añadir en posición concreta
frutas.remove("pera")      # borrar un elemento
frutas.pop()               # quita el último

# Recorrer
for f in frutas:
    print(f)


if __name__ == "__main__":
    print("Lista final:", frutas)
