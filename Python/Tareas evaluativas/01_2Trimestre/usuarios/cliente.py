from usuarios.usuario import Usuario

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
