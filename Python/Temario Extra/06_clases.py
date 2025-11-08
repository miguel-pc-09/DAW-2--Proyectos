# Definición de la clase Producto
class Producto:
    # Constructor de la clase: inicializa los atributos del producto: __init__ es el constructor
    def __init__(self, nombre, descripcion, precio):
        self.nombre = nombre          # Nombre del producto
        self.descripcion = descripcion # Descripción del producto
        self.precio = precio          # Precio del producto

    # Método para mostrar los datos del producto
    def mostrarDatos(self):
        print(f'El nombre del producto es {self.nombre}')
        print(f'La descripción del producto es {self.descripcion}')
        print(f'El precio del producto es {self.precio} €')


# Clase Informe
class Informe:
    # Constructor que recibe título, categoría, lista de elementos y un nombre
    def __init__(self, titulo, categoria, elementos, nombre):
        self.titulo = titulo          # Título del informe
        self.categoria = categoria    # Categoría del informe
        self.elementos = elementos    # Lista de elementos asociados
        self.__nombre = nombre        # Atributo privado (no accesible directamente desde fuera)

    # Método para mostrar el informe
    def imprimirInforme(self):
        print(self.__nombre)          # Se puede acceder dentro de la clase
        print(self.titulo)
        print(self.categoria)
        for item in self.elementos:   # Recorre y muestra cada elemento
            print(item)


# Creamos un objeto de tipo Informe
informe = Informe("Titulo", "Categoria", ["elemento1", "elemento2", "elemento3"], "nombre del informe")

# print(informe.__nombre)  # Esto produce error porque __nombre es privado

# Forma correcta de mostrarlo (name mangling)
print(informe._Informe__nombre)

# Llamamos al método para imprimir el informe
informe.imprimirInforme()
