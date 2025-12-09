# 01_condicional_if.py
# Tema 1 Estructuras de control
# condicional IF básico 


# NOTA: el IF se usa para ejecutar código solo si una condición es cierta.

edad = 20  # ejemplo simple

if edad >= 18:
    print("Eres mayor de edad")  # mensaje si la condición se cumple

# Si ejecuto este archivo directamente, pruebo el comportamiento.
if __name__ == "__main__":
    edad = 15
    if edad >= 18:
        print("Eres mayor de edad")
    else:
        print("Eres menor de edad")
