# atributos_2.py
# Ejemplo que muestra atributos de instancia y el constructor (__init__).
# Atributos: variables que guardan el estado del objeto.

class Coche:
    def __init__(self, marca, modelo):
        # __init__ es el constructor: se ejecuta al crear una instancia.
        # 'self' representa la propia instancia y permite acceder a sus atributos.
        self.marca = marca   # atributo de instancia
        self.modelo = modelo # otro atributo de instancia

# Uso directo para ver los atributos en acción
if __name__ == "__main__":
    c = Coche("Toyota", "Corolla")
    print("Marca:", c.marca)   # acceder a los atributos
    print("Modelo:", c.modelo)
