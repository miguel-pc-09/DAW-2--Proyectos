# Hereda de Actividad y añade el tipo de clase (yoga, pilates, etc).
# El precio final aqui es el mismo que el precio base.

from actividades.actividad import Actividad
from actividades.tipo_clase import TipoClase


class ClaseColectiva(Actividad):
    def __init__(self, nombre, precio, tipo_clase):
        # Tope de plazas en colectivas
        super().__init__(nombre, precio, plazas_maximas=5)
        self.tipo_clase = tipo_clase

    def calcular_precio(self):
        return self.precio

    def mostrar_info(self):
        super().mostrar_info()
        # Si es Enum, .name saca YOGA/PILATES/...
        print(f"Tipo de clase: {self.tipo_clase.name}")