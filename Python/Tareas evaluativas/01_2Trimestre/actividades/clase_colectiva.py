# Hereda de Actividad y añade el tipo de clase (yoga, pilates, etc).
# El precio final aqui es el mismo que el precio base.

from actividades.actividad import Actividad
from actividades.tipo_clase import TipoClase

class ClaseColectiva(Actividad):
    # En colectivas ponemos un tope de plazas, por ejemplo 5
    def __init__(self, nombre, precio, tipo_clase):
        super().__init__(nombre, precio, plaza_maximas=5)
        self.tipo_clase = tipo_clase
        
    def calcular_precio(self):
        # En clase colectiva no hay recargo, es el precio base
        return self.precio
    
    def mostrar_info(self):
        super().mostrar_info()
        print(f"Tipo de clase: {self.tipo_clase}")