""" Comentarios en Python con triple comillas """

""" Mensaje por consola """
print("Método de salida por consola con print")
print("")

""" Formatos de salida """
""" Variables """
nombre = "Juan"
correo = "juan@gmail.com"
edad = 25
""" Salida con formato """
print(f"Mi nombre es {nombre}, tengo {edad} años y mi correo es {correo}.")
print("")

""" Entrada de datos por consola """
nombre = input("¿Cuál es tu nombre? ")
edad = int(input("¿Cuántos años tienes? "))
correo = input("¿Cuál es tu correo electrónico? ")
print(f"Hola {nombre}, tienes {edad} años y tu correo es {correo}.")