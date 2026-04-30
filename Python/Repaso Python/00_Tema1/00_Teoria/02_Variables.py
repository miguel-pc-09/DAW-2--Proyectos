""" Variables en Python """
""" int: números enteros, sin decimales 
    float: números con decimales, donde la parte decimal se representa con un punto.
    str: cadena de caracteres, definida entre "" 
    bool: valor de true o false muy utilizado para decissiones de logicas.
    list: lista ordenada y dinámica para poder guardar diferentes datos.
    tuple: lista ordenada y extatica para poder guardar diferentes datos.
    dict: diccionario de datos asociando par clave-valor. """
    
numeroDecimal = 34.87 
numeroEntero = int(numeroDecimal)
print(f"El número decimal es {numeroDecimal} y el número entero es {numeroEntero}")
print("")

""" Para saber el tipo de la variable se utiliza la función type() """
print(type(numeroDecimal)) 
""" Respuesta consola: <class 'float'> """