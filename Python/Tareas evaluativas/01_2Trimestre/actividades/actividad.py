class Actividad:
    def __init__(self, nombre, precio, plaza_maximas):
        self.nombre = nombre
        self.precio = precio
        self.plaza_maximas = plaza_maximas
        self.plazas_ocupadas = 0
        
    def hay_plazas(self):
        # Devuelve true si aun quedan plazas libres
        return self.plazas_ocupadas < self.plazas_maximas
    
    def ocupar_plaza(self):
        #suma una plaza ocupada si hay hueco
        if self.hay_plazas():
            self.plazas_ocupadas += 1
        else:
            # esto lo controlaremos mejro con exception
            print("No quedan plazas disponibles")
            
    def calcular_precio(self):
        # metodo base 
        #las clases hijas lo sobreescribiran si lo necesitan
        return self.precio
    
    def mostrar_info(self):
        print("-------- Informacion -------------")
        print(f"Nombre: {self.nombre}")
        print(f"Precio: {self.calcular_precio()}")
        print(f"Plazas disponibles: {self.hay_plazas()}")
        print(f"Plazas ocupadas: {self.plazas_ocupadas}")