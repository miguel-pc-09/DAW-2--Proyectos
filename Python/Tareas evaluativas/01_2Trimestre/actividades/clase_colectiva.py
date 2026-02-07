from actividades.actividad import Actividad
from actividades.tipo_clase import TipoClase

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
