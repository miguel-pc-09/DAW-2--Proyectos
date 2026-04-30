# metodos_3.py
# Ejemplo de métodos: funciones que definen comportamientos de los objetos.

class Coche:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def arrancar(self):
        # Método público: describe una acción que puede realizar el objeto.
        print(f"El coche {self.marca} {self.modelo} ha arrancado")

# Uso en el mismo archivo
if __name__ == "__main__":
    c = Coche("Ford", "Focus")
    c.arrancar()
