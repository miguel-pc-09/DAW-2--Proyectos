""" ==================== ENCAPSULAMIENTO ===================== """
class Estudiante:
    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.__nota = nota
        
    def modificar_nota(self, nueva_nota):
        self.__nota = nueva_nota
        
    def mostrar_nota(self):
        print(f"Nota: {self.__nota}")
        
        
# Para llamarlo from pooEncapsulamiento import estudiante

estudiante = Estudiante("Juan", 8)
estudiante.modificar_nota(10)
print(estudiante.mostrar_nota())
print(estudiante.__nota) # error al declarar la variable como "privada"