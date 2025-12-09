# 02_parametros_basicos_y_por_defecto.py
# Uso de parámetros y valores por defecto
# Basado en los ejemplos del tema:
#   - saludar(nombre)
#   - saludar(nombre, apellido, repeticiones)
#   - repeticiones con valor por defecto.



# Función con un parámetro simple
def saludar_persona(nombre):
    # Uso un f-string para insertar el nombre dentro del texto.
    # NOTA: las llaves {} dentro del f-string ejecutan la expresión.
    print(f"Hola {nombre}, espero que te encuentres bien.")


# Función con varios parámetros
def saludar_completo(nombre, apellido, repeticiones):
    # NOTA: 'repeticiones' indica cuántas veces repito el saludo.
    for i in range(repeticiones):
        print(f"Hola {nombre} {apellido}, espero que te encuentres bien.")


# Misma idea, pero con valor por defecto en 'repeticiones'
def saludar_completo_defecto(nombre, apellido, repeticiones=1):
    # NOTA (importante): si no paso 'repeticiones' al llamar,
    # Python usará el valor 1 por defecto.
    for i in range(repeticiones):
        print(f"Hola {nombre} {apellido}, espero que te encuentres bien.")


if __name__ == "__main__":
    # Llamada normal con un parámetro
    saludar_persona("Juan")
    print("-" * 40)

    # Llamada con nombre, apellido y número de repeticiones
    saludar_completo("Juan", "Gomez", 3)
    print("-" * 40)

    # Llamada usando el valor por defecto (repeticiones = 1)
    saludar_completo_defecto("Marta", "Jiménez")
    print("-" * 40)

    # Llamada cambiando el valor por defecto
    saludar_completo_defecto("Marta", "Jiménez", 3)
