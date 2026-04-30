"""
====================================================================================
PRÁCTICA AVANZADA DE TRATAMIENTO DE FICHEROS EN PYTHON
====================================================================================

ENUNCIADO
---------
Este programa implementa un sistema completo de gestión de empleados utilizando
exclusivamente ficheros y directorios del sistema operativo, sin emplear bases de datos.

El objetivo es demostrar el dominio total de las operaciones de entrada/salida (E/S)
en Python, incluyendo:

- Creación y gestión de directorios
- Creación, lectura, escritura y borrado de ficheros
- Modificación segura de información persistente
- Registro de actividad (logging)
- Copias de seguridad
- Eliminación recursiva de recursos

El sistema debe ser robusto, legible, mantenible y correctamente documentado.
====================================================================================
"""

from pathlib import Path
from datetime import datetime
import shutil


# -------------------------------------------------------------------------------
# DEFINICIÓN DE RUTAS BASE
# -------------------------------------------------------------------------------

BASE_DIR = Path("empresa_logs")
DATOS_DIR = BASE_DIR / "datos"
LOGS_DIR = BASE_DIR / "logs"
BACKUP_DIR = BASE_DIR / "backups"

EMPLEADOS_FILE = DATOS_DIR / "empleados.txt"
LOG_FILE = LOGS_DIR / "actividad.log"
BACKUP_FILE = BACKUP_DIR / "empleados_backup.txt"


# -------------------------------------------------------------------------------
# CREACIÓN DE LA ESTRUCTURA DE DIRECTORIOS
# -------------------------------------------------------------------------------

def crear_estructura():
    """
    Crea la estructura de directorios necesaria para la aplicación.
    El uso de exist_ok evita errores si los directorios ya existen.
    """
    DATOS_DIR.mkdir(parents=True, exist_ok=True)
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)


# -------------------------------------------------------------------------------
# REGISTRO DE ACTIVIDAD
# -------------------------------------------------------------------------------

def registrar_log(mensaje):
    """
    Registra una operación en el fichero de log incluyendo fecha y hora.
    Se utiliza el modo append para no sobrescribir registros anteriores.
    """
    with open(LOG_FILE, "a", encoding="utf-8") as log:
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log.write(f"[{timestamp}] {mensaje}\n")


# -------------------------------------------------------------------------------
# CREACIÓN DEL FICHERO DE EMPLEADOS
# -------------------------------------------------------------------------------

def crear_fichero_empleados():
    """
    Crea el fichero de empleados si no existe para evitar errores posteriores
    de lectura o escritura.
    """
    if not EMPLEADOS_FILE.exists():
        with open(EMPLEADOS_FILE, "w", encoding="utf-8"):
            pass
        registrar_log("Creado fichero de empleados")


# -------------------------------------------------------------------------------
# AÑADIR EMPLEADO
# -------------------------------------------------------------------------------

def añadir_empleado(id_emp, nombre, departamento, salario):
    """
    Añade un nuevo empleado al final del fichero.
    """
    with open(EMPLEADOS_FILE, "a", encoding="utf-8") as f:
        f.write(f"{id_emp};{nombre};{departamento};{salario}\n")
    registrar_log(f"Añadido empleado ID {id_emp}")


# -------------------------------------------------------------------------------
# LISTAR EMPLEADOS
# -------------------------------------------------------------------------------

def listar_empleados():
    """
    Lee el fichero línea a línea y muestra cada empleado.
    """
    with open(EMPLEADOS_FILE, "r", encoding="utf-8") as f:
        for linea in f:
            print(linea.strip())


# -------------------------------------------------------------------------------
# MODIFICAR EMPLEADO
# -------------------------------------------------------------------------------

def modificar_empleado(id_emp, nuevo_departamento, nuevo_salario):
    """
    Modifica los datos de un empleado concreto.
    """
    with open(EMPLEADOS_FILE, "r", encoding="utf-8") as f:
        empleados = f.readlines()

    with open(EMPLEADOS_FILE, "w", encoding="utf-8") as f:
        for emp in empleados:
            datos = emp.strip().split(";")
            if datos[0] == str(id_emp):
                datos[2] = nuevo_departamento
                datos[3] = str(nuevo_salario)
                f.write(";".join(datos) + "\n")
                registrar_log(f"Modificado empleado ID {id_emp}")
            else:
                f.write(emp)


# -------------------------------------------------------------------------------
# ELIMINAR EMPLEADO
# -------------------------------------------------------------------------------

def eliminar_empleado(id_emp):
    """
    Elimina un empleado filtrando por identificador exacto.
    """
    with open(EMPLEADOS_FILE, "r", encoding="utf-8") as f:
        empleados = f.readlines()

    with open(EMPLEADOS_FILE, "w", encoding="utf-8") as f:
        for emp in empleados:
            if not emp.startswith(f"{id_emp};"):
                f.write(emp)

    registrar_log(f"Eliminado empleado ID {id_emp}")


# -------------------------------------------------------------------------------
# COPIA DE SEGURIDAD
# -------------------------------------------------------------------------------

def crear_backup():
    """
    Realiza una copia física del fichero de empleados.
    """
    shutil.copy(EMPLEADOS_FILE, BACKUP_FILE)
    registrar_log("Copia de seguridad creada")


# -------------------------------------------------------------------------------
# BORRADO TOTAL
# -------------------------------------------------------------------------------

def borrar_todo():
    """
    Elimina completamente la estructura del proyecto.
    """
    if BASE_DIR.exists():
        shutil.rmtree(BASE_DIR)


# -------------------------------------------------------------------------------
# BLOQUE PRINCIPAL
# -------------------------------------------------------------------------------

if __name__ == "__main__":
    crear_estructura()
    crear_fichero_empleados()



    añadir_empleado(1, "Ana López", "Ventas", 28000)
    añadir_empleado(2, "Juan Pérez", "IT", 35000)

    listar_empleados()

    modificar_empleado(2, "Sistemas", 37000)
    eliminar_empleado(1)

    crear_backup()

