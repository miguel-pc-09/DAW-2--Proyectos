""" Bloques no tienen llaves  """
print("Bloques")
nombre = "Juan"
edad = 25
correo = "juan@gmail.com"
if edad < 18:
    print("el usuario es menor de edad, por lo que no puede acceder a la plataforma")
    
else: 
    print(f"El correo de {nombre} es {correo}, el cual cuenta con {len(correo)} caracteres con {edad} años")
    """ LEN cuenta los caracteres de lo que pongas dentro del paréntesis, en este caso el correo """