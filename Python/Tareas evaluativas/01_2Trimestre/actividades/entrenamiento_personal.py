from actividades.actividad import Actividad
from actividades.tipo_clase import TipoClase

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
