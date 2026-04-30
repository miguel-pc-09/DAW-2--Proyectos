import sqlite3
import os

# ---------------------------
# MODELOS DE DATOS
# ---------------------------

class Jugador:
    def __init__(self, nombre, posicion, valor_mercado):
        self.nombre = nombre
        self.posicion = posicion
        self.valor_mercado = valor_mercado


class Equipo:
    def __init__(self, nombre, anio_fundacion):
        self.nombre = nombre
        self.anio_fundacion = anio_fundacion


# ---------------------------
# FUNCIONES DE BASE DE DATOS
# ---------------------------

def crear_bd():
    with sqlite3.connect("futbol.db") as conn:
        cursor = conn.cursor()
        cursor.execute("PRAGMA foreign_keys = ON")

        cursor.execute("""
        CREATE TABLE IF NOT EXISTS equipos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            anio_fundacion INTEGER NOT NULL
        )
        """)

        cursor.execute("""
        CREATE TABLE IF NOT EXISTS jugadores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            posicion TEXT NOT NULL,
            valor_mercado REAL NOT NULL
        )
        """)

        cursor.execute("""
        CREATE TABLE IF NOT EXISTS plantilla (
            id_equipo INTEGER,
            id_jugador INTEGER,
            FOREIGN KEY(id_equipo) REFERENCES equipos(id),
            FOREIGN KEY(id_jugador) REFERENCES jugadores(id)
        )
        """)

        conn.commit()


def registrar_jugador(jugador):
    with sqlite3.connect("futbol.db") as conn:
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO jugadores (nombre, posicion, valor_mercado)
        VALUES (?, ?, ?)
        """, (jugador.nombre, jugador.posicion, jugador.valor_mercado))

        conn.commit()


def registrar_equipo(equipo):
    with sqlite3.connect("futbol.db") as conn:
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO equipos (nombre, anio_fundacion)
        VALUES (?, ?)
        """, (equipo.nombre, equipo.anio_fundacion))

        conn.commit()


def fichar_jugador(id_equipo, id_jugador):
    with sqlite3.connect("futbol.db") as conn:
        cursor = conn.cursor()

        cursor.execute("""
        INSERT INTO plantilla (id_equipo, id_jugador)
        VALUES (?, ?)
        """, (id_equipo, id_jugador))

        conn.commit()


def mostrar_jugadores_equipo(id_equipo):
    with sqlite3.connect("futbol.db") as conn:
        cursor = conn.cursor()

        cursor.execute("""
        SELECT j.nombre, j.posicion, j.valor_mercado
        FROM jugadores j
        JOIN plantilla p ON j.id = p.id_jugador
        WHERE p.id_equipo = ?
        """, (id_equipo,))

        jugadores = cursor.fetchall()

        for j in jugadores:
            print(f"Nombre: {j[0]}, Posición: {j[1]}, Valor: {j[2]}M€")


def filtrar_jugadores_por_valor(valor_minimo):
    with sqlite3.connect("futbol.db") as conn:
        cursor = conn.cursor()

        cursor.execute("""
        SELECT nombre, posicion, valor_mercado
        FROM jugadores
        WHERE valor_mercado >= ?
        """, (valor_minimo,))

        jugadores = cursor.fetchall()

        for j in jugadores:
            print(f"Nombre: {j[0]}, Posición: {j[1]}, Valor: {j[2]}M€")


def exportar_jugadores_txt():
    if not os.path.exists("informes"):
        os.makedirs("informes")

    with sqlite3.connect("futbol.db") as conn:
        cursor = conn.cursor()

        cursor.execute("SELECT nombre, posicion, valor_mercado FROM jugadores")
        jugadores = cursor.fetchall()

        with open("informes/jugadores.txt", "w", encoding="utf-8") as f:
            for j in jugadores:
                f.write(f"{j[0]} - {j[1]} - Valor de mercado: {j[2]}M€\n")

            f.write(f"\nTotal de jugadores: {len(jugadores)}")


# ---------------------------
# EJEMPLO DE USO
# ---------------------------

if __name__ == "__main__":
    crear_bd()

    # Ejemplo de inserción
    registrar_jugador(Jugador("Mbappé", "Delantero", 180))
    registrar_jugador(Jugador("Modric", "Centrocampista", 20))
    registrar_jugador(Jugador("Courtois", "Portero", 60))

    registrar_equipo(Equipo("Real Madrid", 1902))
    registrar_equipo(Equipo("PSG", 1970))

    fichar_jugador(1, 2)
    fichar_jugador(1, 3)
    fichar_jugador(2, 1)

    print("\nJugadores del Real Madrid:")
    mostrar_jugadores_equipo(1)

    print("\nJugadores con valor superior a 50M€:")
    filtrar_jugadores_por_valor(50)

    exportar_jugadores_txt()

    print("\nInforme generado en 'informes/jugadores.txt'")