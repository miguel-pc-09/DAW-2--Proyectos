from abc import ABC, abstractmethod
from actividades.tipo_clase import TipoClase

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
