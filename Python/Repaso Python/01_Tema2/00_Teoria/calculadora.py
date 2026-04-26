import operaciones

operando1 = int(input("Introduce el operando 1: "))
operando2 = int(input("Introduce el operando 2: "))
operacion = input("Indica la operación a realizar: ").strip()
print(operacion)

if operacion == "suma":
    resultado = operaciones.sumar(operando1, operando2)
elif operacion == "resta":
    resultado = operaciones.restar(operando1, operando2)
elif operacion == "multiplicacion":
    resultado = operaciones.multiplicar(operando1, operando2)
elif operacion == "division":
    resultado = operaciones.dividir(operando1, operando2)
elif operacion == "potencia":
    resultado = operaciones.potencia(operando1, operando2)
elif operacion == "raiz":
    resultado = operaciones.raiz_cuadrada(operando1)
else:
    resultado = None
    
print(f"El resultado de la operación es: {resultado}")

""" En el caso de solo querer importar alguna de las funciones se utilizaría como primera
from X import X, ya no siendo necesaria la llamada al módulo dentro del código:"""

from operaciones import sumar, restar, multiplicar, dividir, potencia, raiz_cuadrada 

operando1 = int(input("Introduce el operando 1: "))
operando2 = int(input("Introduce el operando 2: "))
operacion = input("Indica la operación a realizar: ").strip()
print(operacion)
if operacion == "suma":
    resultado = sumar(operando1, operando2)
elif operacion == "resta":
    resultado = restar(operando1, operando2)
elif operacion == "multiplicacion":
    resultado = multiplicar(operando1, operando2)
elif operacion == "division":
    resultado = dividir(operando1, operando2)
elif operacion == "potencia":
    resultado = potencia(operando1, operando2)
elif operacion == "raiz":
    resultado = raiz_cuadrada(operando1)
else:
    resultado = None
    
print(f"El resultado de la operación es: {resultado}")