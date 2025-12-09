# 05_break_continue_pass.py
# Tema 1 Sentencias especiales en bucles

# NOTA:
# - break → corta el bucle
# - continue → salta a la siguiente iteración
# - pass → instrucción vacía 


# Ejemplo con break
for i in range(10):
    if i == 5:
        break
    print(f"Break ejemplo → {i}")


# Ejemplo con continue
for i in range(5):
    if i == 2:
        continue
    print(f"Continue ejemplo → {i}")


# Ejemplo con pass
for i in range(3):
    pass  # esto no hace nada, pero la sintaxis lo permite


if __name__ == "__main__":
    print("Pruebas de break/continue/pass ejecutadas")
