# Hereda de Actividad, pero es para una persona o grupos muy reducidos.
# Por eso le ponemos menos plazas (por ejemplo 3) y un recargo al precio.

from actividades.actividad import Actividad

class EntrenamientoPersonal(Actividad):
    def __init__(self, nombre, precio, recargo_porcentaje):
        # En personal ponemos un maximo mas bajo, por ejemplo 3
        super().__init__(nombre, precio, plazas_maximas=3)
        self.recargo_porcentaje = recargo_porcentaje

    def calcular_precio(self):
        # Precio final = precio base + recargo %
        return self.precio + (self.precio * self.recargo_porcentaje / 100)

    def mostrar_info(self):
        # Muestro lo basico y luego el recargo y el precio final
        super().mostrar_info()
        print(f"Recargo: {self.recargo_porcentaje}%")
        print(f"Precio final: {self.calcular_precio()}")