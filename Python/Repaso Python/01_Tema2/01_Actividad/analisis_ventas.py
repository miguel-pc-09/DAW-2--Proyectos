# Paso 1: filtrar ventas validas
def filtrar_ventas_validas(ventas):
    # Creamos una lista vacía donde guardaremos solo las ventas correctas
    validas = []

    # Recorremos todos los elementos de la lista original
    for v in ventas:
        # Comprobamos que el valor sea número (int o float) y además positivo
        # isinstance → sirve para comprobar el tipo de dato
        if isinstance(v, (int, float)) and v >= 0:
            # Si cumple las condiciones lo añadimos a la nueva lista
            validas.append(v)

    # Devolvemos la lista ya filtrada
    return validas


# Paso 2: calcular total ventas 
def total_ventas(ventas):
    # Inicializamos el total a 0
    total = 0

    # Recorremos todas las ventas
    for v in ventas:
        # Vamos sumando cada valor al total
        total += v

    # Devolvemos el total acumulado
    return total


# Paso 3: calcular media de ventas
def media_ventas(ventas):
    # Si la lista está vacía no se puede calcular la media
    if len(ventas) == 0:
        return None   # Devolvemos None para indicar que no hay resultado

    # Si hay valores, usamos la función total y dividimos entre la cantidad
    return total_ventas(ventas) / len(ventas)


# Paso 4: calcular maximo y minimo de ventas
def extremos_ventas(ventas):
    # Si la lista está vacía devolvemos valores vacíos
    if len(ventas) == 0:
        return (None, None)

    # Inicializamos máximo y mínimo con el primer valor de la lista
    maximo = ventas[0]
    minimo = ventas[0]

    # Recorremos la lista desde el segundo elemento
    for v in ventas[1:]:
        # Si encontramos un valor mayor lo guardamos como nuevo máximo
        if v > maximo:
            maximo = v

        # Si encontramos un valor menor lo guardamos como nuevo mínimo
        if v < minimo:
            minimo = v

    # Devolvemos ambos valores en una tupla
    return (maximo, minimo)


# Paso 5 Clasificacion de ventas por rangos
def clasificar_ventas(ventas, rangos):
    # Creamos un diccionario donde cada categoría tendrá una lista vacía
    resultado = {k: [] for k in rangos}

    # Añadimos una categoría extra para valores fuera de rango
    resultado['fuera_rango'] = []

    # Recorremos cada venta
    for v in ventas:
        colocado = False  # Variable para saber si la venta ya se ha clasificado

        # Recorremos cada rango definido en el diccionario
        for nombre, (min_val, max_val) in rangos.items():
            # Comprobamos si la venta está dentro del rango (incluye extremos)
            if min_val <= v <= max_val:
                # La añadimos a su categoría correspondiente
                resultado[nombre].append(v)
                colocado = True  # Marcamos como clasificado
                break  # Salimos del bucle porque ya está clasificada

        # Si no ha entrado en ningún rango
        if not colocado:
            resultado['fuera_rango'].append(v)

    # Devolvemos el diccionario con la clasificación
    return resultado


# Paso 6: Resumen global de ventas
def resumen_ventas(ventas):
    # Primero filtramos los valores válidos
    ventas_validas = filtrar_ventas_validas(ventas)

    # Calculamos número de valores
    n = len(ventas_validas)

    # Calculamos total, media, máximo y mínimo usando funciones ya creadas
    total = total_ventas(ventas_validas)
    media = media_ventas(ventas_validas)
    maximo, minimo = extremos_ventas(ventas_validas)

    # Devolvemos todo en un diccionario
    return {
        'n': n,
        'total': total,
        'media': media,
        'max': maximo,
        'min': minimo
    }


# Bloque principal 
# Esto solo se ejecuta si lanzamos este archivo directamente
if __name__ == "__main__":

    # Lista con datos mezclados (correctos e incorrectos)
    ventas = [100, 250.5, -30, 'error', 600, 80, 150, None, 1000, 10]

    # Mostramos datos originales
    print("Ventas originales: ", ventas)

    # Filtramos valores válidos
    validas = filtrar_ventas_validas(ventas)
    print("Ventas validas: ", validas)

    # Calculamos total
    total = total_ventas(validas)
    print("Total de ventas: ", total)

    # Calculamos media
    media = media_ventas(validas)
    print("Media de ventas: ", media)

    # Calculamos máximo y mínimo
    maximo, minimo = extremos_ventas(validas)
    print("Máximo:", maximo)
    print("Mínimo:", minimo)

    # Definimos los rangos de clasificación
    rangos = {
        'bajas': (0, 50),
        'medias': (51, 200),
        'altas': (201, 500),
        'premium': (501, 1000)
    }

    # Clasificamos las ventas
    clasificacion = clasificar_ventas(validas, rangos)
    print("Clasificacion por rangos: ")

    # Recorremos el diccionario resultado
    for categoria, lista in clasificacion.items():
        print(f"{categoria}: {lista}")

    """
    # Mostrar resumen completo (opcional)
    resumen = resumen_ventas(ventas)
    print("Resumen global de ventas: ", resumen)
    """