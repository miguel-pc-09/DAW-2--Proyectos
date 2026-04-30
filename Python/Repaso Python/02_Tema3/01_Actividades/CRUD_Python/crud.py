"""
=====================================
MÓDULO CRUD (Create, Read, Update, Delete)
=====================================

Aquí se implementa toda la lógica de negocio
relacionada con la tabla alumnos.
"""

from db import obtener_conexion


def crear_tabla():
    """Crea la tabla alumnos si no existe"""
    conexion = obtener_conexion()
    if conexion is None:
        return

    cursor = conexion.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS alumnos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100),
        edad INT,
        curso VARCHAR(50)
    )
    """)

    conexion.commit()  # Confirmamos cambios
    cursor.close()
    conexion.close()

    print("Tabla creada o verificada correctamente.")


def insertar_alumno():
    """Inserta un nuevo alumno en la base de datos"""
    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    curso = input("Curso: ")

    conexion = obtener_conexion()
    if conexion is None:
        return

    cursor = conexion.cursor()

    # Consulta parametrizada (evita SQL Injection)
    cursor.execute(
        "INSERT INTO alumnos (nombre, edad, curso) VALUES (%s, %s, %s)",
        (nombre, edad, curso)
    )

    conexion.commit()
    cursor.close()
    conexion.close()

    print("Alumno insertado correctamente.")


def mostrar_alumnos():
    """Muestra todos los alumnos"""
    conexion = obtener_conexion()
    if conexion is None:
        return

    cursor = conexion.cursor()
    cursor.execute("SELECT * FROM alumnos")

    resultados = cursor.fetchall()

    print("\n--- LISTADO DE ALUMNOS ---")
    for fila in resultados:
        print(fila)

    cursor.close()
    conexion.close()


def actualizar_alumno():
    """Actualiza la edad de un alumno"""
    nombre = input("Nombre del alumno a actualizar: ")
    nueva_edad = int(input("Nueva edad: "))

    conexion = obtener_conexion()
    if conexion is None:
        return

    cursor = conexion.cursor()

    cursor.execute(
        "UPDATE alumnos SET edad = %s WHERE nombre = %s",
        (nueva_edad, nombre)
    )

    conexion.commit()
    cursor.close()
    conexion.close()

    print("Alumno actualizado correctamente.")


def eliminar_alumno():
    """Elimina un alumno por nombre"""
    nombre = input("Nombre del alumno a eliminar: ")

    conexion = obtener_conexion()
    if conexion is None:
        return

    cursor = conexion.cursor()

    cursor.execute(
        "DELETE FROM alumnos WHERE nombre = %s",
        (nombre,)
    )

    conexion.commit()
    cursor.close()
    conexion.close()

    print("Alumno eliminado correctamente.")



