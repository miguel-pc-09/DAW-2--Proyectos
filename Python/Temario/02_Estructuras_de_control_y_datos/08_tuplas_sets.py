# 08_tuplas_sets.py
# Tema 1 Tuplas y Conjuntos

# --- TUPLAS ---
# NOTA : Son inmutables (no se pueden modificar).
coordenadas = (10, 20)

print("Tupla:", coordenadas)
print("Primer valor:", coordenadas[0])


# --- SETS (Conjuntos) ---
# NOTA: No guardan orden, no aceptan duplicados.
vocales = {"a", "e", "i", "o", "u", "a"}  # la segunda "a" se elimina

print("Set:", vocales)

vocales.add("x")
vocales.discard("i")


if __name__ == "__main__":
    print("Conjunto final:", vocales)
