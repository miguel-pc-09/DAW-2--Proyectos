from actividades.tipo_clase import TipoClase
from usuarios.tipo_especialidad import TipoEspecialidad

# Funciones de ayuda para pedir datos sin que el programa se rompa.
# Aquí controlo errores de teclado y límites.

def pedir_texto(msg: str) -> str:
    while True:
        t = input(msg).strip()
        if t != "":
            return t
        print("No puede estar vacío.")

def pedir_int(msg: str, minimo: int, maximo: int) -> int:
    while True:
        try:
            n = int(input(msg))
            if n < minimo or n > maximo:
                print(f"Debe estar entre {minimo} y {maximo}.")
                continue
            return n
        except ValueError:
            print("Introduce un número entero válido.")

def pedir_float(msg: str, minimo: float) -> float:
    while True:
        try:
            n = float(input(msg))
            if n < minimo:
                print(f"Debe ser >= {minimo}.")
                continue
            return n
        except ValueError:
            print("Introduce un número válido (ej: 10.5).")

# Menú para elegir especialidad del entrenador usando Enum
def pedir_especialidad_entrenador():
    print("\nEspecialidad del entrenador:")
    for e in TipoEspecialidad:
        print(f"{e.value}) {e.name}")

    op = pedir_int("Elige especialidad: ", 1, len(TipoEspecialidad))
    for e in TipoEspecialidad:
        if e.value == op:
            return e

# Menú para elegir tipo de clase usando Enum
def pedir_tipo_clase():
    print("\nTipo de actividad:")
    for t in TipoClase:
        print(f"{t.value}) {t.name}")

    op = pedir_int("Elige tipo: ", 1, len(TipoClase))
    for t in TipoClase:
        if t.value == op:
            return t

# Menú para elegir si se crea una actividad colectiva o personal
def pedir_tipo_actividad():
    print("\nTipo de actividad a crear:")
    print("1) Clase colectiva")
    print("2) Entrenamiento personal")
    op = pedir_int("Elige opción: ", 1, 2)
    return op
