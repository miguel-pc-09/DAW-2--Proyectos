# 1. Función para validar un jugador
def validar_jugador(j):
    # Comprobamos que el jugador sea un diccionario
    if not isinstance(j, dict):
        return False

    # Lista de claves que debe tener cada jugador
    claves = ["nombre", "nivel", "puntuacion", "tiempo", "precision", "enemigos"]

    # Recorremos las claves para comprobar que existen en el diccionario
    for c in claves:
        if c not in j:
            return False

    # Comprobamos que el nivel sea entero y mayor o igual a 1
    if not isinstance(j["nivel"], int) or j["nivel"] < 1:
        return False

    # Comprobamos que la puntuación sea número y no negativa
    if not isinstance(j["puntuacion"], (int, float)) or j["puntuacion"] < 0:
        return False

    # Comprobamos que el tiempo sea mayor que 0
    if not isinstance(j["tiempo"], (int, float)) or j["tiempo"] <= 0:
        return False

    # Comprobamos que la precisión esté entre 0 y 100
    if not (0 <= j["precision"] <= 100):
        return False

    # Comprobamos que enemigos sea entero y no negativo
    if not isinstance(j["enemigos"], int) or j["enemigos"] < 0:
        return False

    # Si pasa todas las comprobaciones, el jugador es válido
    return True


# 2. Función para separar jugadores válidos e inválidos
def filtrar_jugadores(jugadores):
    validos = []
    invalidos = []

    # Recorremos la lista de jugadores
    for j in jugadores:
        # Si el jugador es válido, lo añadimos a la lista de válidos
        if validar_jugador(j):
            validos.append(j)
        else:
            # Si no es válido, lo añadimos a la lista de inválidos
            invalidos.append(j)

    return validos, invalidos


# 3. Función para calcular estadísticas generales
def estadisticas_generales(jugadores):
    # Si no hay jugadores, devolvemos diccionario vacío
    if len(jugadores) == 0:
        return {}

    suma_puntuacion = 0
    suma_precision = 0
    tiempo_total = 0

    # Tomamos el primer nivel como referencia inicial
    nivel_max = jugadores[0]["nivel"]

    # Recorremos todos los jugadores
    for j in jugadores:
        # Sumamos puntuaciones
        suma_puntuacion += j["puntuacion"]

        # Sumamos precisión
        suma_precision += j["precision"]

        # Sumamos tiempo total
        tiempo_total += j["tiempo"]

        # Comparamos para encontrar el nivel máximo
        if j["nivel"] > nivel_max:
            nivel_max = j["nivel"]

    # Devolvemos resultados en un diccionario
    return {
        "media_puntuacion": suma_puntuacion / len(jugadores),
        "media_precision": suma_precision / len(jugadores),
        "nivel_maximo": nivel_max,
        "tiempo_total": tiempo_total
    }


# 4. Función para clasificar por nivel de habilidad
def clasificar_habilidad(j):
    nivel = j["nivel"]

    # Clasificamos según el nivel usando if y elif
    if nivel <= 5:
        return "novato"
    elif nivel <= 15:
        return "intermedio"
    elif nivel <= 30:
        return "avanzado"
    else:
        return "experto"


# Función para clasificar todos los jugadores
def clasificar_todos(jugadores):
    # Creamos un diccionario con listas vacías
    categorias = {
        "novato": [],
        "intermedio": [],
        "avanzado": [],
        "experto": []
    }

    # Recorremos todos los jugadores
    for j in jugadores:
        # Obtenemos la categoría llamando a otra función
        categoria = clasificar_habilidad(j)

        # Añadimos el jugador a su categoría
        categorias[categoria].append(j)

    return categorias


# 5. Función para detectar tramposos
def es_tramposo(j):
    # Regla 1: mucha precisión pero pocos enemigos
    if j["precision"] > 95 and j["enemigos"] < 10:
        return True

    # Regla 2: puntuación muy alta para su nivel
    if j["puntuacion"] > j["nivel"] * 20000:
        return True

    # Regla 3: mucho score en muy poco tiempo
    if j["tiempo"] < 5 and j["puntuacion"] > 50000:
        return True

    return False


# Función que recorre todos los jugadores
def detectar_tramposos(jugadores):
    tramposos = []

    # Recorremos la lista
    for j in jugadores:
        # Si cumple alguna regla, lo añadimos
        if es_tramposo(j):
            tramposos.append(j)

    return tramposos



# 6. Función para generar el informe completo
def generar_informe(jugadores):
    # Llamamos a otras funciones (modularidad)
    validos, invalidos = filtrar_jugadores(jugadores)
    stats = estadisticas_generales(validos)
    clasificados = clasificar_todos(validos)
    tramposos = detectar_tramposos(validos)

    # Devolvemos todo en un solo diccionario
    return {
        "validos": validos,
        "invalidos": invalidos,
        "estadisticas": stats,
        "clasificacion": clasificados,
        "tramposos": tramposos
    }


# 7. Función para mostrar el informe
def mostrar_informe(informe):
    print("===== INFORME DE JUGADORES =====")

    # Mostramos cantidad de jugadores
    print(f"Jugadores válidos: {len(informe['validos'])}")
    print(f"Jugadores inválidos: {len(informe['invalidos'])}")

    print("\n--- Estadísticas globales ---")

    # Recorremos el diccionario de estadísticas
    for clave, valor in informe["estadisticas"].items():
        print(f"{clave}: {valor}")

    print("\n--- Clasificación por habilidad ---")

    # Recorremos cada categoría
    for categoria, lista in informe["clasificacion"].items():
        print(f"{categoria}: {len(lista)} jugadores")

    print("\n--- Posibles tramposos ---")

    # Recorremos lista de tramposos
    for j in informe["tramposos"]:
        print(j["nombre"])


# 8. Programa principal
if __name__ == "__main__":

    # Lista de jugadores de prueba
    jugadores = [
        {"nombre": "Player01", "nivel": 12, "puntuacion": 15320, "tiempo": 47.5, "precision": 37.2, "enemigos": 123},
        {"nombre": "Player02", "nivel": 3, "puntuacion": 530, "tiempo": 12.1, "precision": 14.0, "enemigos": 12},
        {"nombre": "Player03", "nivel": 25, "puntuacion": 999999, "tiempo": 1.2, "precision": 99.9, "enemigos": 2},
        {"nombre": "Player04", "nivel": 8, "puntuacion": 8200, "tiempo": 41.0, "precision": 45.5, "enemigos": 98},
        {"nombre": "Player05", "nivel": -1, "puntuacion": 3000, "tiempo": 20.0, "precision": 50, "enemigos": 33}
    ]

    # Generamos el informe llamando a la función principal
    informe = generar_informe(jugadores)

    # Mostramos el informe por pantalla
    mostrar_informe(informe)
    
    
