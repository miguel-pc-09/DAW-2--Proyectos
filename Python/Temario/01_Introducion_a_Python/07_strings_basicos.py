# 07_strings_basicos.py
# Tema 1 Operaciones básicas con cadenas

texto = "Hola Python"

# Longitud
print("Longitud:", len(texto))

# Acceso a caracteres
print("Primer carácter:", texto[0])
print("Último carácter:", texto[-1])

# Slicing
print("Subcadena:", texto[0:4])

# Métodos útiles
print("Mayúsculas:", texto.upper())
print("Minúsculas:", texto.lower())
print("Reemplazar:", texto.replace("Python", "Miguel"))

# f-strings
nombre = "Miguel"
edad = 25
print(f"Me llamo {nombre} y tengo {edad} años")


if __name__ == "__main__":
    print("Strings probados correctamente.")
