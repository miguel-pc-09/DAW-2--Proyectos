from usuarios.usuario import Usuario

# Entrenador del centro.
# Tiene especialidad 
class Entrenador(Usuario):

    # Constructor del entrenador
    def __init__(self, nombre, correo, especialidad):
        super().__init__(nombre, correo)

        # Especialidad del entrenador 
        self._especialidad = especialidad

    # Devuelve el tipo de usuario 
    def get_tipo(self) -> str:
        return "Entrenador"

    # Getter de la especialidad
    def get_especialidad(self):
        # Si es Enum, devuelvo el nombre del enum 
        if hasattr(self._especialidad, "name"):
            return self._especialidad.name
        return self._especialidad
