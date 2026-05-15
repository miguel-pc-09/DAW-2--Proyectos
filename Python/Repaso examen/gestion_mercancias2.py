# gestion_mercancias.py

# Importamos ABC y abstractmethod para poder crear una clase abstracta
from abc import ABC, abstractmethod


# Clase base abstracta
class Mercancia(ABC):
    # Constructor de la clase Mercancia
    def __init__(self, marca, modelo):
        # Atributos privados
        self.__marca = marca
        self.__modelo = modelo

    # Getter de marca
    def get_marca(self):
        return self.__marca

    # Setter de marca
    def set_marca(self, marca):
        self.__marca = marca

    # Getter de modelo
    def get_modelo(self):
        return self.__modelo

    # Setter de modelo
    def set_modelo(self, modelo):
        self.__modelo = modelo

    # Método común para mostrar información
    def mostrar_info(self):
        print(f"Marca: {self.__marca}")
        print(f"Modelo: {self.__modelo}")

    # Método abstracto que deberán implementar las clases hijas
    @abstractmethod
    def calcular_coste(self):
        pass


# Clase hija Fruta
class Fruta(Mercancia):
    # Constructor de Fruta
    def __init__(self, marca, modelo, procedencia, kilos, precio_kilo):
        # Llamamos al constructor de la clase padre
        super().__init__(marca, modelo)

        # Atributos específicos de Fruta
        self.procedencia = procedencia
        self.kilos = kilos
        self.precio_kilo = precio_kilo

    # Implementamos el método abstracto
    def calcular_coste(self):
        return self.kilos * self.precio_kilo

    # Sobrescribimos mostrar_info
    def mostrar_info(self):
        print("\n=== FRUTA ===")
        print(f"Marca: {self.get_marca()}")
        print(f"Modelo: {self.get_modelo()}")
        print(f"Procedencia: {self.procedencia}")
        print(f"Kilos: {self.kilos}")
        print(f"Precio por kilo: {self.precio_kilo} €")
        print(f"Coste total: {self.calcular_coste()} €")


# Clase hija Carne
class Carne(Mercancia):
    # Constructor de Carne
    def __init__(self, marca, modelo, animal, unidades, precio_unidad):
        # Llamamos al constructor de la clase padre
        super().__init__(marca, modelo)

        # Atributos específicos de Carne
        self.animal = animal
        self.unidades = unidades
        self.precio_unidad = precio_unidad

    # Implementamos el método abstracto
    def calcular_coste(self):
        return self.unidades * self.precio_unidad

    # Sobrescribimos mostrar_info
    def mostrar_info(self):
        print("\n=== CARNE ===")
        print(f"Marca: {self.get_marca()}")
        print(f"Modelo: {self.get_modelo()}")
        print(f"Animal: {self.animal}")
        print(f"Unidades: {self.unidades}")
        print(f"Precio por unidad: {self.precio_unidad} €")
        print(f"Coste total: {self.calcular_coste()} €")


# Programa principal

# Creamos una lista donde guardaremos todas las mercancías
mercancias = []

# Creamos objetos de tipo Fruta
fruta1 = Fruta("Frutas Sol", "Manzana Golden", "España", 10, 2.5)
fruta2 = Fruta("Campo Verde", "Plátano", "Canarias", 8, 1.8)

# Creamos objetos de tipo Carne
carne1 = Carne("Carnes Norte", "Filete", "Ternera", 6, 4.5)
carne2 = Carne("Alimentación Sur", "Pechuga", "Pollo", 10, 3.2)

# Añadimos todos los objetos a la lista
mercancias.append(fruta1)
mercancias.append(fruta2)
mercancias.append(carne1)
mercancias.append(carne2)

# Recorremos la lista mostrando la información
# Aquí se usa polimorfismo, porque cada objeto ejecuta su propio mostrar_info()
for mercancia in mercancias:
    mercancia.mostrar_info()
    
