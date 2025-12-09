# 06_funciones_lambda.py
# Resumen Funciones lambda (funciones anónimas)
# Basado en el PDF:
#   - comparación suma normal vs lambda
#   - uso de lambda como key en sorted

# Definición normal de una función suma
def suma_normal(a, b):
    return a + b


# Definición y uso de una función lambda
# NOTA: lambda a, b: a + b crea una función anónima,
# que guardo en la variable 'suma_lambda'.
suma_lambda = lambda a, b: a + b  


if __name__ == "__main__":
    # Comparo ambas formas de sumar
    print("Usando suma_normal(7, 9):", suma_normal(7, 9))
    print("Usando suma_lambda(7, 9):", suma_lambda(7, 9))
    print("-" * 40)

    # Ejemplo del PDF usando lambda como key en sorted
    alumnos = [("Ana", 7), ("Luis", 5), ("Pedro", 9)]

    # NOTA: key=lambda x: x[1] indica que quiero ordenar
    # la lista de tuplas usando el segundo elemento de cada tupla (la nota).
    ordenados = sorted(alumnos, key=lambda x: x[1])
    print("Alumnos ordenados por nota:")
    print(ordenados)
