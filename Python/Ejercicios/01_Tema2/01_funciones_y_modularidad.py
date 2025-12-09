# Declaro la primera función: filtrar_validos
# Objetivo: limpiar la lista de datos y quedarme solo con los int (pero sin contar True y False)
def filtrar_validos(puntuaciones):
    """ 
     Devuelvo una lista con solo los enteros (no bool) contenidos en 'puntuaciones'.
    - puntuaciones: iterable con datos varios (enteros, None, strings, etc.)
    - return: lista solo con int válidos.
    """
    # Aquí guardo los valores que sí considero válidos(solo enteros que no sean bool)
    validos = []

    # Recorro todos los elementos de la lista original
    for x in puntuaciones: 
        # isinstance(x, int) comprueba si x es un entero
        # NOTA: en Python, bool hereda de int, asi que True/False tambien son int (1/0)
        # por eso añado "and not isinstance(x, bool)" para excluir True y False
        if isinstance(x, int) and not isinstance(x, bool):
            validos.append(x)

    # Devuelve la lista final ya limpia
    return validos

# Declaro la segunda función media(lista)
# Objetivo: Calcular la media de una lista no vacía. Si esta vacía -> ValueError
def media(lista):
    """ 
    Calculo la media aritmética de una lista de números.
    Si la lista está vacía, lanzo ValueError (para obligar a controlar ese caso).
    """
    if len(lista) == 0:
        # Aquí fuerzo el error si intentan calcular la media de una lista vacía.
        # raise sirve para lanzar un error a propósito cuando ocurre una situacion incorrecta 
        raise ValueError("La lista esta vacía: no se puede calcular la media")
    """ 
    'raise' lanza una excepción manualmente. Lo uso cuando detecto un problema
    y quiero que el programa se detenga y avise del error (igual que los mensajes
    que Python saca cuando algo está mal). En este ejercicio lo uso para impedir
    calcular la media de una lista vacía.
    """

# Declaro la tercera función max_min(lista)
#objetivo: devolver (maximo, minimo) SIN usar max() ni min() directamente
def max_min(lista):
    """  
    Devuelvo una tupla (maximo, minimo) de la lista.
    Si la lista está vacía, lanzo ValueError.
    """
    if len(lista) == 0:
        raise ValueError("Lista vacía: no hay máximo ni mínimo")
    
    #función interna para calcular el máximo manualmente.
    def calcular_max(lst):
        #Empiezo suponiendo que el mayor es el primer elemento.
        mayor = lst[0]
        # Recorro desde el segundo en adelante.
        for v in lst[1:]:
            if v > mayor:
                mayor = v
        return mayor
    
    # función interna para calcular el mínimo manualmente.
    def calcular_min(lst):
        menor = lst[0]
        for v in lst[1:]:
            if v < menor:
                menor = v
        return menor
    
    # Devuelvo una tupla con (máximo, mínimo)
    return calcular_max(lista), calcular_min(lista)

# Declaro la cuarta función clasificar_pro_rango(puntuaciones, rangos)
# objetivo: dado un diccionario de rangos (suspenso, aprobado, etc), meter cada puntuación en su categoría 
def clasificar_por_rango(puntuaciones, rangos):
    """
    Clasifico 'puntuaciones' según los rangos.
    - rangos: dict con formato {nombre_categoria: (min_incl, max_incl)}
    - return: dict con listas de puntuaciones por categoría y 'fuera_rango'.
    """
    # Creo el diccionario resultado con las mismas claves que 'rangos',
    # todas inicializadas a listas vacías.
    resultado = {k: [] for k in rangos}
    # Añado también la clave especial para los valores que no encajen.
    resultado["fuera_rango"] = []

    # Recorro cada puntuación válida
    for p in puntuaciones:
        colocado = False  # uso esta bandera para saber si la he colocado en algún rango

        # Recorro los rangos (nombre, (min, max))
        for nombre, (minv, maxv) in rangos.items():
            # Comparación inclusiva (>= min y <= max)
            if minv <= p <= maxv:
                resultado[nombre].append(p)
                colocado = True
                # En cuanto la coloco en un rango, paro el bucle interno.
                break

        # Si no encajó en ninguno de los rangos, la mando a 'fuera_rango'
        if not colocado:
            resultado["fuera_rango"].append(p)

    return resultado

# Declaro la quitan función resumen_estadistico(puntuaciones)
# Objetivo: devolver un diccionario con:
def resumen_estadistico(puntuaciones):
    """
    Devuelvo un dict con el resumen estadístico:
    {'n': numero_de_valores, 'media': media, 'max': maximo, 'min': minimo}
    Si no hay valores válidos, devuelvo n=0 y el resto a None.
    """
    # Primero limpio la lista y me quedo solo con valores válidos.
    vals = filtrar_validos(puntuaciones)
    n = len(vals)

    # Si no hay ningún valor después de filtrar, devuelvo el resumen vacío.
    if n == 0:
        return {"n": 0, "media": None, "max": None, "min": None}

    # Intento calcular la media, controlando posible ValueError.
    try:
        m = media(vals)
    except ValueError:
        m = None

    # Intento calcular máximo y mínimo, también controlando errores.
    try:
        mx, mn = max_min(vals)
    except ValueError:
        mx, mn = None, None

    # Devuelvo el diccionario resumen.
    return {"n": n, "media": m, "max": mx, "min": mn}


# Bloque de prueba con if __name__ = "__main__"
if __name__ == "__main__":
    # Lista de datos de prueba: mezcla de enteros válidos e inválidos.
    datos = [9, "abc", 7, 10.0, None, 5, True, 8, -1, 10, 6]
    print("Datos originales:", datos)

    # 1) Primero filtro los valores válidos (solo enteros que no sean bool).
    validos = filtrar_validos(datos)
    print("Valores válidos:", validos)

    # 2) Muestro el resumen estadístico usando la función que lo calcula todo.
    print("Resumen:", resumen_estadistico(validos))

    # 3) Defino los rangos para clasificar las notas como en el ejercicio.
    rangos = {
        "suspenso": (0, 4),
        "aprobado": (5, 6),
        "notable": (7, 8),
        "sobresaliente": (9, 10),
    }

    # 4) Llamo a la función que clasifica cada nota en su rango
    clasific = clasificar_por_rango(validos, rangos)
    print("Clasificación por rangos:")

    # 5) Recorro el diccionario resultado e imprimo cada categoría
    for k, v in clasific.items():
        print(f" {k}: {v}")
