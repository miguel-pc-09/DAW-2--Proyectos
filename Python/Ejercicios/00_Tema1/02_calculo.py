"""
Se desea realizar un programa que trabaje con tres números enteros introducidos por el usuario.
El programa debe:
    1. Solicitar al usuario tres números enteros (num1, num2, num3).
    2. Mostrar los números introducidos, indicando su tipo de dato (int).
    3. Calcular y mostrar:
        o El mayor y el menor.
        o La suma de los tres números.
        o La resta secuencial (num1 - num2 - num3).
        o El producto (num1 * num2 * num3).
        o El cociente real de dividir la suma entre 3 (/).
        o La división entera (//) de la suma entre 3.
        o El resto (%) de la suma entre 3.
        o La potencia del mayor elevado al menor.
    4.Convertir la media aritmética a entero (con int) y mostrarla.
    5.Convertir la suma a cadena de texto y mostrar el mensaje: "La suma como texto es: <valor>".
    6.Indicar si la suma es par o impar.
    7.Mostrar si la media real es mayor, menor o igual a 10.

Restricciones: No usar bucles ni listas.    Solo trabajar con variables simples y if, elif, else
"""
# Solicitar al usuario tres números enteros (num1, num2, num3).
num1 = int(input("Dime el primer numero: "))
num2 = int(input("Dime el segundo numero: "))
num3 = int(input("Dime el tercer numero: "))

print("")

# Mostrar los números introducidos, indicando su tipo de dato (int).
print(F"El primer numero es: {num1} y su tipo es: ",type(num1))
print(F"El segundo numero es: {num2} y su tipo es: ",type(num2))
print(F"El tercer numero es: {num3} y su tipo es: ",type(num3))
print("")

# o El mayor y el menor.
if num1 >= num2 and num1 >= num3:
    mayor = num1
elif num2 >= num1 and num2 >= num3:
    mayor = num2
else:
    mayor = num3

print(f"El mayor de los 3 es: {mayor}\n")

if num1 <= num2 and num1 <= num3:
    menor = num1
elif num2 <= num1 and num2 <= num3:
    menor = num2
else:
    menor = num3

print(f"El numero mas pequeño es: {menor}\n")

# o La suma de los tres números.
suma = num1 + num2 + num3
print(f"La suma de todos los numeros es: {suma}\n")

# La resta secuencial (num1 - num2 - num3).
resta = num1 - num2 - num3
print(f"La resta de los números es: {resta}\n")

# El producto (num1 * num2 * num3).
producto = num1 * num2 * num3
print(f"La multiplicacion de los 3 es: {producto}\n")

# El cociente real de dividir la suma entre 3 (/)
cociente = suma / 3
print(f"El cociente real de dividir la suma entre 3 es: {cociente}\n")

# La división entera (//) de la suma entre 3. Recordar // da el entero  y con / da float
division = suma // 3
print(f"La division entera es: {division}\n")

# El resto (%) de la suma entre 3
resto = suma % 3
print(f"El resto de la suma entre 3 es: {resto}\n")

# La potencia del mayor elevado al menor.
potencia = None
potencia_valida = True
if mayor == 0 and menor < 0:
    potencia_valida = False
else:
    potencia = mayor ** menor
    print(f"La potencia del mayor elevado al menor es: {potencia}\n")

# Convertir la media aritmética a entero (con int) y mostrarla.
media = int(cociente)
print(f"La media a entero es: {media}\n")

# Convertir la suma a cadena de texto y mostrar el mensaje: "La suma como texto es: <valor>".
texto = str(suma)
print(f"La suma como texto es: {texto}")
print(type(texto))
print("")

# Indicar si la suma es par o impar.
if suma % 2 == 0:
    print("La suma es par")
else:
    print("La suma es impar")

# Mostrar si la media real es mayor, menor o igual a 10.
if media > 10:
    print("La media es mayor que 10")
elif media == 10:
    print("La media es igual a 10")
else:
    print("La media es menor que 10")