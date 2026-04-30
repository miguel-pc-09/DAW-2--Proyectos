def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Error: no se puede dividir entre cero."
    return a / b

def potencia(base, exponente):
    return base ** exponente

def raiz_cuadrada(x):
    if x < 0:
        return "Error: no se puede calcular la raíz de un número negativo."
    return x ** 0.5