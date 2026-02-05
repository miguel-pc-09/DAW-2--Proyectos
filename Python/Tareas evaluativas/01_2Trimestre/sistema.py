# Clase SistemaReservas.
# Aqui va toda la logica del programa: altas y reservas.

from usuarios.cliente import Cliente
from usuarios.entrenador import Entrenador
from reserva import Reserva


class SistemaReservas:
    def __init__(self):
        # Listas principales del sistema
        self.clientes = []
        self.entrenadores = []
        self.actividades = []

    # ---------- ALTAS DE USUARIOS ----------

    def crear_cliente(self, nombre, correo):
        cliente = Cliente(nombre, correo)
        self.clientes.append(cliente)
        return cliente

    def crear_entrenador(self, nombre, correo, especialidad):
        entrenador = Entrenador(nombre, correo, especialidad)
        self.entrenadores.append(entrenador)
        return entrenador

    # ---------- ALTAS DE ACTIVIDADES ----------

    def anadir_actividad(self, actividad):
        self.actividades.append(actividad)

    # ---------- RESERVAS ----------

    def crear_reserva(self, cliente, actividad):
        # Comprobamos que el usuario es un cliente
        if not isinstance(cliente, Cliente):
            print("Solo un cliente puede hacer una reserva")
            return None

        # Comprobamos si hay plazas
        if not actividad.hay_plazas():
            print("No quedan plazas disponibles en esta actividad")
            return None

        # Ocupamos una plaza
        actividad.ocupar_plaza()

        # Creamos la reserva
        reserva = Reserva(cliente, actividad)

        # Añadimos la reserva al cliente
        cliente.añadir_reserva(reserva)

        return reserva