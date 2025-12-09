# 07_cafeteria_demo.py
# Ejercicio "cafetería"
# Aquí recojo la idea del PDF:
#   - clase base Producto
#   - clases hijas Bebida, Comida, Menu
#   - clase Pedido que agrupa productos



class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def mostrar_info(self):
        # Implementación genérica en la clase base
        print(f"{self.nombre} - {self.precio}€")


class Bebida(Producto):
    def __init__(self, nombre, precio, tipo):
        super().__init__(nombre, precio)
        self.tipo = tipo  # ej: "café", "té", "refresco"

    def mostrar_info(self):
        print(f"Bebida: {self.nombre} ({self.tipo}) - {self.precio}€")


class Comida(Producto):
    def __init__(self, nombre, precio, caliente):
        super().__init__(nombre, precio)
        self.caliente = caliente  # True = caliente, False = fría

    def mostrar_info(self):
        estado = "caliente" if self.caliente else "fría"
        print(f"Comida: {self.nombre} ({estado}) - {self.precio}€")


class Menu(Producto):
    def __init__(self, nombre, precio, completo):
        super().__init__(nombre, precio)
        self.completo = completo  # True = menú completo

    def mostrar_info(self):
        tipo_menu = "completo" if self.completo else "simple"
        print(f"Menú: {self.nombre} ({tipo_menu}) - {self.precio}€")


class Pedido:
    def __init__(self):
        # Lista donde voy a guardar objetos de tipo Producto o hijos.
        self.productos = []
        self.coste_total = 0

    def agregar_producto(self, producto):
        # Agrego un producto al pedido y actualizo el coste total.
        self.productos.append(producto)
        self.coste_total += producto.precio

    def mostrar_pedido(self):
        print("=== Pedido actual ===")
        for p in self.productos:
            p.mostrar_info()
        print(f"Coste total: {self.coste_total}€")


if __name__ == "__main__":
    
    cafe = Bebida("Café solo", 1.20, "café")
    te = Bebida("Té verde", 1.30, "té")
    croissant = Comida("Croissant", 1.50, True)
    menu_dia = Menu("Menú del día", 9.90, True)

    pedido = Pedido()
    pedido.agregar_producto(cafe)
    pedido.agregar_producto(te)
    pedido.agregar_producto(croissant)
    pedido.agregar_producto(menu_dia)

    pedido.mostrar_pedido()
