# Une un cliente con una actividad concreta.
# Guarda el precio final en el momento de la reserva.

class Reserva:
    def __init__(self, cliente, actividad):
        self.cliente = cliente
        self.actividad = actividad

        # El precio final se calcula al crear la reserva
        self.precio_final = actividad.calcular_precio()

    def __str__(self):
        # Esto sirve para mostrar la reserva de forma clara por consola
        return (
            f"Actividad: {self.actividad.nombre} | "
            f"Precio: {self.precio_final} | "
            f"Plazas: {self.actividad.plazas_ocupadas}/"
            f"{self.actividad.plazas_maximas}"
        )