"""
=====================================
MÓDULO DE CONEXIÓN A BASE DE DATOS
=====================================

Este archivo se encarga EXCLUSIVAMENTE de:
- Cargar variables de entorno
- Crear la conexión a MySQL
- Devolver la conexión lista para usar

Aplicamos el principio de separación de responsabilidades.
"""

import mysql.connector  # Conector oficial de MySQL para Python
import os               # Permite acceder a variables del sistema
from dotenv import load_dotenv  # Carga variables desde archivo .env


# Cargamos las variables del archivo .env
load_dotenv()


def obtener_conexion():
    """
    Esta función crea y devuelve una conexión a la base de datos.
    Si ocurre un error, devuelve None.
    """
    try:
        conexion = mysql.connector.connect(
            host=os.getenv("DB_HOST"),       # Dirección del servidor
            user=os.getenv("DB_USER"),       # Usuario
            password=os.getenv("DB_PASSWORD"),  # Contraseña
            database=os.getenv("DB_NAME")    # Base de datos
        )
        return conexion

    except mysql.connector.Error as error:
        print("Error al conectar a la base de datos:", error)
        return None


