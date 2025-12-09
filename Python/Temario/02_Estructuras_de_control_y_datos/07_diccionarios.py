# 07_diccionarios.py
# Tema 1 Diccionarios (clave → valor)

# NOTA: Diccionario = conjunto de pares (clave : valor).

persona = {
    "nombre": "Miguel",
    "edad": 25,
    "ciudad": "Guadalajara"
}

# Acceder
print(persona["nombre"])

# Modificar
persona["edad"] = 26

# Añadir
persona["profesion"] = "Desarrollador"

# Recorrer
for clave, valor in persona.items():
    print(f"{clave}: {valor}")


if __name__ == "__main__":
    print("Diccionario completo:", persona)
