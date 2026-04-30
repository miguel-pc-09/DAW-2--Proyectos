class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio
        
    def mostrar_info(self):
        print(f"Producto: {self.nombre}, | precio: {self.precio}")
        
class Bebida(Producto):
    def __init__(self, nombre, precio, tipo):
        super().__init__(nombre, precio)
        self.tipo = tipo
        
    def mostrar_info(self):
        print(f"Bebida: {self.nombre}, | tipo: {self.tipo}, | Precio: {self.precio} € ")
        
class Comida(Producto):
    def __init__(self, nombre, precio, caliente):
        super().__init__(nombre, precio)
        self.caliente = caliente
        
    def mostrar_info(self):
        if self.caliente:
            estado = "caliente"
        else:
            estado = "fria"
            
        print(f"Comida: {self.nombre} | Estado: {estado} | Precio: {self.precio} €")
        
class Menu(Producto):
    def __init__(self, nombre, precio, completo):
        super().__init__(nombre, precio)
        self.completo = completo
    
    def mostrar_info(self):
        if self.completo:
            estado = "menu completo"
        else:
            estado = "menu basico"
            
        print(f"Menú: {self.nombre} | Tipo: {estado} | Precio: {self.precio} €")
        
class Pedido:
    def __init__(self):
        self.productos = []
        self.coste_total = 0
        
    def agregar_producto(self, producto):
        self.productos.append(producto)
        self.coste_total += producto.precio
        
    def mostrar_pedido(self):
        print("\n---Pedido ---")
        
        for producto in self.productos:
            producto.mostrar_info()
            
        print(f"Total del pedido: {self.coste_total}")
        
# Creamos productos
cafe = Bebida("Café con leche", 1.50, "caliente")
te = Bebida("Té verde", 1.30, "caliente")
croissant = Comida("Croissant", 2.00, False)
menu_desayuno = Menu("Menú desayuno", 4.50, True)

# Creamos pedido
pedido1 = Pedido()

# Añadimos productos al pedido
pedido1.agregar_producto(cafe)
pedido1.agregar_producto(croissant)
pedido1.agregar_producto(menu_desayuno)

# Mostramos el pedido
pedido1.mostrar_pedido()
        
        
        
