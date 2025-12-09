# 06_variables_y_conversiones.py
# Tema 1  Variables y conversión entre tipos

# NOTA: las variables en Python no necesitan declaración previa.
# Su tipo depende del valor que guardo en ellas.

nombre = "Miguel"
edad_str = "25"    # esto es una cadena
edad_int = int(edad_str)  # convierto a int

precio_str = "19.99"
precio_float = float(precio_str)

print(nombre, edad_int, precio_float)


# Conversión a string
numero = 50
numero_texto = str(numero)

print("Número como texto:", numero_texto, type(numero_texto))


if __name__ == "__main__":
    print("Variables y conversiones probadas.")
