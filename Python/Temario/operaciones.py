# Módulo operaciones No puede tener numeros da error al llamarlo 
# Aquí defino funciones matemáticas básicas.
# Luego las usaré desde otro archivo (calculadora.py)

# Función para sumar dos números.
def sumar(a, b):
    return a + b


# Función para restar dos números.
def restar(a, b):
    return a - b


# Función para multiplicar dos números.
def multiplicar(a, b):
    return a * b


# Función para dividir dos números, controlando división entre cero.
def dividir(a, b):
    if b == 0:
        return "Error: no se puede dividir entre cero."
    return a / b


# Función para potencia.
def potencia(base, exponente):
    return base ** exponente


# Función para raíz cuadrada.
def raiz_cuadrada(x):
    if x < 0:
        return "Error: no se puede calcular la raíz de un número negativo."
    return x ** 0.5