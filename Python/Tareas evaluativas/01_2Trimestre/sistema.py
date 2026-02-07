from usuarios.cliente import Cliente
from usuarios.entrenador import Entrenador
from reserva import Reserva

from actividades.tipo_clase import TipoClase
from actividades.clase_colectiva import ClaseColectiva
from actividades.entrenamiento_personal import EntrenamientoPersonal

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
