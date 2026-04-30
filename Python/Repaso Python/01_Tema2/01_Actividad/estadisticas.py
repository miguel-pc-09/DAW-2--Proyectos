# Ejercicio: Resumen estadístico con funciones y modularidad


def filtrar_validos(puntuaciones):
    """
    Recibe una lista con distintos valores y devuelve solo los enteros válidos.
    No acepta booleanos, porque True y False en Python también cuentan como int.
    """
    validos = []

    for x in puntuaciones:
        if isinstance(x, int) and not isinstance(x, bool):
            validos.append(x)

    return validos


def media(lista):
    """
    Recibe una lista de números y devuelve su media aritmética.
    Si la lista está vacía, lanza un ValueError.
    """
    if len(lista) == 0:
        raise ValueError("La lista está vacía: no se puede calcular la media.")

    suma = 0

    for numero in lista:
        suma += numero

    return suma / len(lista)


def max_min(lista):
    """
    Recibe una lista de números y devuelve una tupla con el máximo y el mínimo.
    No se usan max() ni min(), se calcula recorriendo la lista.
    """
    if len(lista) == 0:
        raise ValueError("La lista está vacía: no hay máximo ni mínimo.")

    mayor = lista[0]
    menor = lista[0]

    for numero in lista:
        if numero > mayor:
            mayor = numero

        if numero < menor:
            menor = numero

    return mayor, menor


def clasificar_por_rango(puntuaciones, rangos):
    """
    Recibe una lista de puntuaciones y un diccionario de rangos.
    Devuelve un diccionario con las puntuaciones clasificadas por categoría.
    Si una puntuación no entra en ningún rango, se guarda en 'fuera_rango'.
    """
    resultado = {}

    # Creamos una lista vacía para cada categoría del diccionario rangos.
    for categoria in rangos:
        resultado[categoria] = []

    # Añadimos una categoría extra para valores que no encajen.
    resultado["fuera_rango"] = []

    # Recorremos cada puntuación para clasificarla.
    for puntuacion in puntuaciones:
        colocado = False

        # Recorremos los rangos: nombre de categoría y límites.
        for categoria, limites in rangos.items():
            minimo = limites[0]
            maximo = limites[1]

            if minimo <= puntuacion <= maximo:
                resultado[categoria].append(puntuacion)
                colocado = True
                break

        if not colocado:
            resultado["fuera_rango"].append(puntuacion)

    return resultado


def resumen_estadistico(puntuaciones):
    """
    Recibe una lista de puntuaciones.
    Primero filtra los valores válidos y después devuelve un resumen con:
    número de valores, media, máximo y mínimo.
    Si no hay valores válidos, devuelve None en media, max y min.
    """
    valores_validos = filtrar_validos(puntuaciones)
    cantidad = len(valores_validos)

    if cantidad == 0:
        return {
            "n": 0,
            "media": None,
            "max": None,
            "min": None
        }

    media_calculada = media(valores_validos)
    maximo, minimo = max_min(valores_validos)

    return {
        "n": cantidad,
        "media": media_calculada,
        "max": maximo,
        "min": minimo
    }


# Parte principal del programa.
# Solo se ejecuta cuando abrimos este archivo directamente.
if __name__ == "__main__":

    datos = [9, "abc", 7, 10.0, None, 5, True, 8, -1, 10, 6]

    print("Datos originales:")
    print(datos)

    valores_validos = filtrar_validos(datos)
    print("\nValores válidos:")
    print(valores_validos)

    print("\nMedia:")
    try:
        print(media(valores_validos))
    except ValueError as error:
        print(error)

    print("\nMáximo y mínimo:")
    try:
        maximo, minimo = max_min(valores_validos)
        print(f"Máximo: {maximo}")
        print(f"Mínimo: {minimo}")
    except ValueError as error:
        print(error)

    rangos = {
        "suspenso": (0, 4),
        "aprobado": (5, 6),
        "notable": (7, 8),
        "sobresaliente": (9, 10)
    }

    clasificacion = clasificar_por_rango(valores_validos, rangos)

    print("\nClasificación por rangos:")
    for categoria, lista in clasificacion.items():
        print(f"{categoria}: {lista}")

    resumen = resumen_estadistico(datos)

    print("\nResumen estadístico:")
    print(resumen)
     
