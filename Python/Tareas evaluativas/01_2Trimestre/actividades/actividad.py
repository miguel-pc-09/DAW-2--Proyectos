class Actividad:
    def __init__(self, nombre, precio, plazas_maximas):
        self.nombre = nombre
        self.precio = precio
        self.plazas_maximas = plazas_maximas
        self.plazas_ocupadas = 0

    def hay_plazas(self):
        # Devuelve True si aun quedan plazas libres
        return self.plazas_ocupadas < self.plazas_maximas

    def ocupar_plaza(self):
        # Suma una plaza ocupada si hay hueco
        if self.hay_plazas():
            self.plazas_ocupadas += 1
        else:
            print("No quedan plazas disponibles")

    def calcular_precio(self):
        # Metodo base, las hijas lo pueden sobreescribir
        return self.precio

    def mostrar_info(self):
        print("-------- Informacion -------------")
        print(f"Nombre: {self.nombre}")
        print(f"Precio: {self.calcular_precio()}")
        print(f"Plazas: {self.plazas_ocupadas}/{self.plazas_maximas}")