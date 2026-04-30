# pide tres numeros enteros . Asi que necesito tres variables. 
num1 = int(input("Introduce el primer numero: "))
num2 = int(input("Introduce el segundo numero: "))
num3 = int(input("introduce el tercer numero: "))

# Mostrar los numeros y su tipo
print(" Número 1: ", num1, "tipo: ", type(num1))
print(" Número 1: ", num2, "tipo: ", type(num2))
print(" Número 1: ", num3, "tipo: ", type(num3))

# Mayor y menor usamos max() y min()
mayor = max(num1, num2, num3)
menor = min(num1, num2, num3)

print("mayor: ", mayor)
print("menor: ", menor)

# Operaciones
suma = num1 + num2+ num3
print("Suma: ", suma)

resta = num1 - num2 - num3
print("Resta: ", resta)

multiplicacion = num1 * num2 * num3
print("Multiplicacion: ", multiplicacion)

media = suma / 3
print("Media: ", media)

# division entera 
print("division entera: ", suma // 3)

# Resto 
print("Resto:", suma % 3)

# potencia 
potencia = mayor ** menor
print("Potencia: ", potencia)

# Convertir media a entero
media_entera = int(media)
print("Media entera: ", media_entera)

# suma como texto
suma_texto = str(suma)
print("La suma como texto es:", suma_texto)

# Par o impar -> si el resto de dividir entre 2 es 0 -> par
if suma % 2 == 0:
    print("la suma es PAR")
else: 
    print("la suma es IMPAR")
    
# MEdia mayor, menor o igual a 10
if media > 10:
    print("La media es mayor que 10")
elif media < 10:
    print("La media es menor que 10")
else: 
    print("la media es igual a 10")
    