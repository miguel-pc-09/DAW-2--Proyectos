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
