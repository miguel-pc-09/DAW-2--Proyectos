""" Clase padre de cliente y eentradores o otros """

class Usuario:
    def __inti__(self, nombre, correo):
        self.nombre = nombre
        self.correo = correo
        
    def mostrar_info(self):
        # metodo para msotrar la informacion básica del usuario
        print(f"Nombre: {self.nombre}, Correo: {self.correo}")

