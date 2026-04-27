from abc import ABC, abstractmethod
from enum import Enum


# ================================================================
# ENUMS / TIPOS
# ================================================================

# Tipos de clases/actividades que existen en el centro.
class TipoClase(Enum):
    YOGA = 1
    PILATES = 2
    ZUMBA = 3
    SPINNING = 4


# Especialidades del entrenador.
class TipoEspecialidad(Enum):
    YOGA = 1
    CROSSFIT = 2
    MUSCULACION = 3
    PILATES = 4


# ================================================================
# USUARIOS
# ================================================================

# Clase base abstracta para los usuarios del centro.
class Usuario(ABC):

    # Constructor común para todos los usuarios
    def __init__(self, nombre: str, correo: str):
        # Uso "_" para indicar que son atributos encapsulados
        self._nombre = nombre
        self._correo = correo

    # Getter del nombre
    def get_nombre(self) -> str:
        return self._nombre

    # Getter del correo
    def get_email(self) -> str:
        return self._correo

    # Método abstracto que obliga a los hijos a decir qué tipo son
    # Esto ayuda a identificar Cliente / Entrenador
    @abstractmethod
    def get_tipo(self) -> str:
        pass

    # Método común para mostrar datos básicos
    def mostrar_info(self):
        print(f"Nombre: {self._nombre}")
        print(f"Correo: {self._correo}")


# Cliente del centro deportivo.
# Un cliente puede tener varias reservas
class Cliente(Usuario):

    # Constructor del cliente
    def __init__(self, nombre, correo):
        super().__init__(nombre, correo)

        # Lista donde guardo todas las reservas de este cliente
        self._reservas = []

    # Devuelve el tipo de usuario
    def get_tipo(self) -> str:
        return "Cliente"

    # Añade una reserva a la lista del cliente
    def anadir_reserva(self, reserva):
        self._reservas.append(reserva)

    # Devuelve todas las reservas del cliente
    def get_reservas(self):
        return self._reservas


# Entrenador del centro.
# Tiene especialidad
class Entrenador(Usuario):

    # Constructor del entrenador
    def __init__(self, nombre, correo, especialidad):
        super().__init__(nombre, correo)

        # Especialidad del entrenador
        self._especialidad = especialidad

    # Devuelve el tipo de usuario
    def get_tipo(self) -> str:
        return "Entrenador"

    # Getter de la especialidad
    def get_especialidad(self):
        # Si es Enum, devuelvo el nombre del enum
        if hasattr(self._especialidad, "name"):
            return self._especialidad.name
        return self._especialidad


# ================================================================
# ACTIVIDADES
# ================================================================

# Excepción personalizada para cuando no hay plazas disponibles (RF6).
class SinPlazasException(Exception):
    pass


# Clase abstracta Actividad (RF2).
# Todas las actividades comparten estructura común.
# Cada tipo de actividad implementa su propia lógica de precio (polimorfismo).
class Actividad(ABC):

    # tipo: tipo de clase (Enum TipoClase)
    # precio_base: precio base de la actividad
    # plazas_max: aforo máximo
    def __init__(self, tipo: TipoClase, precio_base: float, plazas_max: int):
        self._tipo = tipo
        self._precio_base = float(precio_base)
        self._plazas_max = int(plazas_max)
        self._plazas_ocupadas = 0

    # Devuelve el tipo (Enum)
    def get_tipo(self) -> TipoClase:
        return self._tipo

    # Devuelve el nombre legible de la actividad
    def get_nombre(self) -> str:
        return self._tipo.name.capitalize()

    # Getter del precio base
    def get_precio_base(self) -> float:
        return self._precio_base

    # Getter del aforo máximo
    def get_plazas_max(self) -> int:
        return self._plazas_max

    # Getter de plazas ocupadas
    def get_plazas_ocupadas(self) -> int:
        return self._plazas_ocupadas

    # Devuelve el estado tipo
    def estado_ocupacion(self) -> str:
        return f"{self._plazas_ocupadas}/{self._plazas_max}"

    # Comprueba si hay plazas disponibles
    def hay_plazas(self) -> bool:
        return self._plazas_ocupadas < self._plazas_max

    # Suma una plaza ocupada si hay sitio
    # Si no hay plazas, lanza una excepción (RF3 y RF6)
    def ocupar_plaza(self):
        if not self.hay_plazas():
            raise SinPlazasException(f"No hay plazas disponibles en {self.get_nombre()}")
        self._plazas_ocupadas += 1

    # Método abstracto para calcular el precio final.
    # Cada clase hija lo implementa a su manera (RF2/RF4).
    @abstractmethod
    def calcular_precio(self) -> float:
        pass


# Clase colectiva:
# - Actividad grupal
# - Precio final = precio base
# - Aforo limitado
class ClaseColectiva(Actividad):

    # tipo: tipo de clase
    # precio_base: precio base
    # plazas_max: aforo
    def __init__(self, tipo: TipoClase, precio_base: float, plazas_max: int):
        super().__init__(tipo, precio_base, plazas_max)

    # Para clase colectiva, el precio final siempre es el base
    def calcular_precio(self) -> float:
        return self.get_precio_base()


# Entrenamiento personal:
# - Actividad individual o grupo muy reducido
# - Tiene recargo adicional
# - El precio final se calcula con un porcentaje extra
class EntrenamientoPersonal(Actividad):

    # tipo: tipo de clase
    # precio_base: precio base
    # plazas_max: plazas muy limitadas
    # porcentaje_extra: porcentaje que se suma al precio base
    def __init__(self, tipo: TipoClase, precio_base: float, plazas_max: int, porcentaje_extra: float):
        super().__init__(tipo, precio_base, plazas_max)
        self._porcentaje_extra = float(porcentaje_extra)

    # Getter del porcentaje
    def get_porcentaje_extra(self) -> float:
        return self._porcentaje_extra

    # Calcula el precio final aplicando el porcentaje extra
    def calcular_precio(self) -> float:
        return self.get_precio_base() * (1 + (self._porcentaje_extra / 100))


# ================================================================
# RESERVA
# ================================================================

# Reserva:
# Une un cliente con una actividad y guarda el precio final calculado (RF3/RF4).
# El cliente no mete el precio, solo reserva.
class Reserva:

    # cliente: el cliente que reserva
    # actividad: la actividad reservada
    def __init__(self, cliente, actividad):
        self._cliente = cliente
        self._actividad = actividad

        # Precio final calculado automáticamente usando polimorfisnmo
        self._precio_final = actividad.calcular_precio()

    # Getter de la actividad
    def get_actividad(self):
        return self._actividad

    # Getter del precio final
    def get_precio_final(self) -> float:
        return self._precio_final


# ================================================================
# SISTEMA
# ================================================================

# Clase principal del sistema.
# Aquí se centraliza la información y la lógica:
# - usuarios
# - actividades
# - reservas
class SistemaReserva:

    def __init__(self):
        # Listas internas del sistema (encapsuladas)
        self._clientes = []
        self._entrenadores = []
        self._actividades = []

        # Creo algunas actividades por defecto para poder probar rápido
        # Clases colectivas (precio = base)
        self._actividades.append(ClaseColectiva(TipoClase.YOGA, 10, 10))
        self._actividades.append(ClaseColectiva(TipoClase.PILATES, 11, 10))
        self._actividades.append(ClaseColectiva(TipoClase.ZUMBA, 9, 15))
        self._actividades.append(ClaseColectiva(TipoClase.SPINNING, 10, 12))

        # Entrenamientos personales (precio = base + % extra)
        # Por defecto 20% extra
        self._actividades.append(EntrenamientoPersonal(TipoClase.YOGA, 10, 2, 20))
        self._actividades.append(EntrenamientoPersonal(TipoClase.PILATES, 11, 2, 20))
        self._actividades.append(EntrenamientoPersonal(TipoClase.ZUMBA, 9, 2, 20))
        self._actividades.append(EntrenamientoPersonal(TipoClase.SPINNING, 10, 2, 20))

    # ---------------- RF1: usuarios ----------------

    # Crea un cliente y lo guarda en la lista
    def crear_cliente(self, nombre: str, correo: str):
        self._clientes.append(Cliente(nombre, correo))

    # Crea un entrenador y lo guarda en la lista
    def crear_entrenador(self, nombre: str, correo: str, especialidad):
        self._entrenadores.append(Entrenador(nombre, correo, especialidad))

    # Devuelve la lista de clientes
    def get_clientes(self):
        return self._clientes

    # Devuelve la lista de entrenadores
    def get_entrenadores(self):
        return self._entrenadores

    # ---------------- RF2: actividades ----------------

    # Devuelve la lista de actividades
    def get_actividades(self):
        return self._actividades

    # Crea una clase colectiva
    def crear_actividad_colectiva(self, tipo: TipoClase, precio_base: float, plazas_max: int):
        self._actividades.append(ClaseColectiva(tipo, precio_base, plazas_max))

    # Crea un entrenamiento personal
    def crear_actividad_personal(self, tipo: TipoClase, precio_base: float, plazas_max: int, porcentaje_extra: float):
        self._actividades.append(EntrenamientoPersonal(tipo, precio_base, plazas_max, porcentaje_extra))

    # ---------------- RF3/RF4: reservas ----------------

    # Reserva una actividad para un cliente.
    # indice_actividad: posición en la lista de actividades
    def reservar(self, cliente: Cliente, indice_actividad: int) -> Reserva:
        actividad = self._actividades[indice_actividad]

        # RF3: comprobar plazas y ocupar
        actividad.ocupar_plaza()

        # RF4: precio automático según tipo de actividad
        reserva = Reserva(cliente, actividad)

        # RF3: se guarda en el cliente
        cliente.anadir_reserva(reserva)

        return reserva

    # ---------------- RF5: consulta ----------------

    # Devuelve las reservas de un cliente
    def reservas_de_cliente(self, cliente: Cliente):
        return cliente.get_reservas()


# ================================================================
# UTILS
# ================================================================

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


# ================================================================
# MAIN
# ================================================================

# Imprime el menú principal
def mostrar_menu():
    print("\n============================")
    print("   GIMNASIO - MENÚ PRINCIPAL")
    print("============================")
    print("1) Crear cliente")
    print("2) Crear entrenador")
    print("3) Listar usuarios")
    print("4) Listar actividades")
    print("5) Crear actividad")
    print("6) Reservar actividad")
    print("7) Ver reservas de un cliente")
    print("0) Salir")


# Lista clientes y entrenadores creados
def listar_usuarios(sistema: SistemaReserva):
    print("\n--- CLIENTES ---")
    clientes = sistema.get_clientes()
    if len(clientes) == 0:
        print("No hay clientes.")
    else:
        for c in clientes:
            print(f"- {c.get_nombre()} ({c.get_email()})")

    print("\n--- ENTRENADORES ---")
    entrenadores = sistema.get_entrenadores()
    if len(entrenadores) == 0:
        print("No hay entrenadores.")
    else:
        for e in entrenadores:
            print(f"- {e.get_nombre()} ({e.get_email()}) | Especialidad: {e.get_especialidad()}")


# Lista todas las actividades del sistema con ocupación y tipo
def listar_actividades(sistema: SistemaReserva):
    acts = sistema.get_actividades()

    print("\n--- ACTIVIDADES DISPONIBLES ---")
    for i, a in enumerate(acts, start=1):
        # Para mostrar si es colectiva o personal miro el tipo de objeto
        if isinstance(a, EntrenamientoPersonal):
            tipo_txt = f"Personal (+{a.get_porcentaje_extra():.0f}%)"
        else:
            tipo_txt = "Colectiva"

        print(
            f"{i}) {a.get_nombre()} | {tipo_txt} | Base: {a.get_precio_base():.2f}€ | Ocupación: {a.estado_ocupacion()}"
        )


# Pide elegir un cliente por número
def elegir_cliente(sistema: SistemaReserva):
    clientes = sistema.get_clientes()
    if len(clientes) == 0:
        print("No hay clientes creados.")
        return None

    print("\n--- ELIGE CLIENTE ---")
    for i, c in enumerate(clientes, start=1):
        print(f"{i}) {c.get_nombre()} ({c.get_email()})")

    idx = pedir_int("Cliente: ", 1, len(clientes))
    return clientes[idx - 1]


# Muestra todas las reservas de un cliente (RF5)
def ver_reservas_cliente(cliente):
    reservas = cliente.get_reservas()

    print(f"\n--- RESERVAS DE {cliente.get_nombre()} ---")
    if len(reservas) == 0:
        print("Este cliente no tiene reservas.")
        return

    for r in reservas:
        act = r.get_actividad()

        # Tipo de actividad para mostrar
        if isinstance(act, EntrenamientoPersonal):
            tipo_txt = f"Personal (+{act.get_porcentaje_extra():.0f}%)"
        else:
            tipo_txt = "Colectiva"

        print(
            f"- {act.get_nombre()} | {tipo_txt} | Precio final: {r.get_precio_final():.2f}€ | Ocupación: {act.estado_ocupacion()}"
        )


# Programa principal
def main():
    sistema = SistemaReserva()

    while True:
        mostrar_menu()
        opcion = pedir_int("Elige una opción: ", 0, 7)

        # Salir
        if opcion == 0:
            print("Saliendo...")
            break

        # Crear cliente
        if opcion == 1:
            nombre = pedir_texto("Nombre del cliente: ")
            correo = pedir_texto("Correo del cliente: ")
            sistema.crear_cliente(nombre, correo)
            print("Cliente creado.")

        # Crear entrenador
        elif opcion == 2:
            nombre = pedir_texto("Nombre del entrenador: ")
            correo = pedir_texto("Correo del entrenador: ")
            especialidad = pedir_especialidad_entrenador()
            sistema.crear_entrenador(nombre, correo, especialidad)
            print("Entrenador creado.")

        # Listar usuarios
        elif opcion == 3:
            listar_usuarios(sistema)

        # Listar actividades
        elif opcion == 4:
            listar_actividades(sistema)

        # Crear actividad (colectiva o personal)
        elif opcion == 5:
            tipo_act = pedir_tipo_actividad()
            tipo_clase = pedir_tipo_clase()
            precio_base = pedir_float("Precio base: ", 0.01)
            plazas_max = pedir_int("Plazas máximas: ", 1, 9999)

            # Si es colectiva
            if tipo_act == 1:
                sistema.crear_actividad_colectiva(tipo_clase, precio_base, plazas_max)
                print("Actividad colectiva creada.")
            else:
                # Si es personal, pido porcentaje extra
                porcentaje = pedir_float("Porcentaje extra (ej: 20): ", 0.0)
                sistema.crear_actividad_personal(tipo_clase, precio_base, plazas_max, porcentaje)
                print("Entrenamiento personal creado.")

        # Reservar actividad
        elif opcion == 6:
            cliente = elegir_cliente(sistema)
            if cliente is None:
                continue

            listar_actividades(sistema)
            acts = sistema.get_actividades()
            idx_act = pedir_int("Elige actividad: ", 1, len(acts)) - 1

            try:
                reserva = sistema.reservar(cliente, idx_act)
                print(f"Reserva hecha. Precio final: {reserva.get_precio_final():.2f}€")
            except SinPlazasException as e:
                # RF6: si no hay plazas, muestro el error y no revienta el programa
                print(f"Error: {e}")

        # Ver reservas de un cliente
        elif opcion == 7:
            cliente = elegir_cliente(sistema)
            if cliente is None:
                continue
            ver_reservas_cliente(cliente)


if __name__ == "__main__":
    main()