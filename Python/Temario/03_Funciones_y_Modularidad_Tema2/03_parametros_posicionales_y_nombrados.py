# 03_parametros_posicionales_y_nombrados.py
# Resumen Tipos de parámetros:
#   - posicionales
#   - nombrados (keyword)

def funcion_parametros(param1, param2, param3):
    # NOTA : estos parámetros son posicionales, es decir,
    # se asignan por el orden en el que se pasan en la llamada.
    print(f"param1: {param1}, param2: {param2}, param3: {param3}")


if __name__ == "__main__":
    # Llamada con parámetros POSICIONALES
    # Aquí:
    #   param1 = "valor1"
    #   param2 = "valor2"
    #   param3 = "valor3"
    funcion_parametros("valor1", "valor2", "valor3")

    print("-" * 40)

    # Llamada con parámetros NOMBRADOS
    # NOTA: aquí indico explícitamente qué va a cada parámetro,
    # así que puedo cambiar el orden sin problema.
    funcion_parametros(param1="valor2", param2="valor3", param3="valor1")

    print("-" * 40)

    # También puedo mezclar: primero posicionales, luego nombrados
    # (pero los nombrados siempre al final).
    funcion_parametros("A", param2="B", param3="C")
