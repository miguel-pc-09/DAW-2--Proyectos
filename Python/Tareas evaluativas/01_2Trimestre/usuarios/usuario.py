from abc import ABC, abstractmethod

# Clase base abstracta para los usuarios del centro.
class Usuario(ABC):

    # Constructor común para todos los usuarios
    def __init__(self, nombre: str, correo: str):
        # Uso "_" para indicar que son atributos encapsulados 
        self._nombre = nombre
        self._correo = correo

    # Getter del nombre
    def get_nombre(self) -> str:
        return self._nombre

    # Getter del correo
    def get_email(self) -> str:
        return self._correo

    # Método abstracto que obliga a los hijos a decir qué tipo son
    # Esto ayuda a identificar Cliente / Entrenador 
    @abstractmethod
    def get_tipo(self) -> str:
        pass

    # Método común para mostrar datos básicos
    def mostrar_info(self):
        print(f"Nombre: {self._nombre}")
        print(f"Correo: {self._correo}")
