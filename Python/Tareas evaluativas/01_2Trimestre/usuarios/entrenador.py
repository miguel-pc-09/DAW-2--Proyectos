from usuarios.usuario import Usuario

class Entrenador(Usuario):
    # Llamo al constructor de la clase padre (Usuario)
        # para reutilizar nombre y correo
    def __init__(self, nombre, correo, especialidad):
        super().__init__(nombre, correo)
        
        # dato propio del entrenador
        self.especialidad = especialidad
        
    def mostrar_info(self):
        super().mostrar_info()
        print(f"Especialidad: {self.especialidad}")