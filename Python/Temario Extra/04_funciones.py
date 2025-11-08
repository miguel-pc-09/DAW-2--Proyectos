# Definimos una función llamada generarInforme, que recibe tres parámetros:
# contenido -> una lista de textos
# titulo -> un texto que se mostrará como encabezado del informe
# elementos -> una lista o conjunto de elementos asociados al informe
def generarInforme(contenido, titulo, elementos):
    print(titulo)  # Imprimimos el título del informe
    
    # Recorremos cada elemento de la lista contenido e imprimimos cada línea
    for i in contenido:
        print(i)
    
    # Mostramos los elementos recibidos
    print(f'los elementos pasados para el informe son {elementos}')


# Llamada a la función pasando los argumentos por posición (en orden)
generarInforme(["Esto es un ejemplo de contenido", "para mostrar en un informe"],
               "Informe posicional", [1, 2, 3, 4])

# Llamada a la función pasando los argumentos por nombre (el orden da igual)
generarInforme(elementos=["Esto es un ejemplo de contenido", "para mostrar en un informe"],
               titulo="Informe posicional", contenido=[1, 2, 3, 4])


# Definimos una función con anotación de tipo (mensaje debe ser una cadena).
# Solo imprime un texto informativo.
def funcionImprimir(mensaje: str):
    print(f'el {mensaje} se ha impreso correctamente')




# Función que realiza una suma entre dos valores y devuelve el resultado
def suma(op1, op2):
    resultado = op1 + op2   # Operación de suma
    print('Suma realizada con éxito')
    return resultado         # Se devuelve el resultado para poder usarlo fuera


resultado = suma(4, 4)      # Llamada a la función suma
print(resultado)            # Se muestra el resultado devuelto por la función


# Función que multiplica dos valores.
# op2 tiene un valor por defecto de 1, por lo que si no se pasa, se usa ese valor.
def multiplicacion(op1, op2 = 1):
    resultado = op1 * op2
    print(f'La multiplicación de {op1} y {op2} es {resultado}')


multiplicacion(9, 2)  # Llamada normal → multiplica 9 * 2
multiplicacion(9)     # Usa el valor por defecto → multiplica 9 * 1


# Función que puede recibir un número variable de argumentos (*elementos)
# Los elementos pasados se reciben como una tupla.
def sumarTodos(*elementos):
    sumatorio = 0
    for item in elementos:
        sumatorio += item   # Se van acumulando los valores
    print(f'El resultado de sumar todos los elementos pasados es de {sumatorio}')


# Llamada pasando muchos números
sumarTodos(1, 4, 5, 6, 7, 3, 1, 0)
