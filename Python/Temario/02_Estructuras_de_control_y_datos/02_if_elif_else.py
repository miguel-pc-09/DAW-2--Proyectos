
# 02_if_elif_else.py
# Tema 1 Uso de IF - ELIF - ELSE 

# NOTA: IF evalúa una condición.
# ELIF evalúa otras condiciones en caso de que las anteriores fallaran.
# ELSE se ejecuta solo si ninguna condición anterior se cumple.

nota = 7

if nota >= 9:
    print("Sobresaliente")
elif nota >= 7:
    print("Notable")
elif nota >= 5:
    print("Aprobado")
else:
    print("Suspenso")


if __name__ == "__main__":
    # Aquí hago otra prueba, para comprobar que funcionan bien los rangos.
    nota_prueba = 4
    if nota_prueba >= 9:
        print("Sobresaliente")
    elif nota_prueba >= 7:
        print("Notable")
    elif nota_prueba >= 5:
        print("Aprobado")
    else:
        print("Suspenso")
