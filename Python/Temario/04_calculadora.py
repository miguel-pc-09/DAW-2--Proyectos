# Calculadora básica usando el módulo operaciones
# Aquí practico la modularidad importando funciones
# de otro archivo .py (operaciones.py)

# Importo el módulo completo. Recordar a OPERACIONES NO PONER 04_operaciones por ejemplo da error 
import operaciones

# Pido los operandos al usuario.
operando1 = float(input("Introduce el operando 1: "))
operando2 = float(input("Introduce el operando 2: "))

# Pido la operación a realizar.
print("Operaciones disponibles: suma, resta, multiplicacion, division, potencia, raiz")
operacion = input("Indica la operación a realizar: ").strip().lower()

# Según lo que escriba el usuario, llamo a una función u otra del módulo operaciones.
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
    # Para la raíz solo uso el primer operando.
    resultado = operaciones.raiz_cuadrada(operando1)
else:
    resultado = "Operación no válida."

print(f"El resultado de la operación es: {resultado}")