""" ============= HERENCIA ========================== """
# Herencia: es la capacidad de una clase derivada de heredar los atributos y metodos de otra clase base.
class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario
        
    def mostrar_info(self):
        print(f"Empleado: {self.nombre}, Salario: {self.salario}")
        
""" Clases hijas  """

class Gerente(Empleado):
    def __init__(self, nombre, salario, departamento): # debemos poner siempre las del padre primero y luego las que tenga el hijo propias
        super().__init__(nombre, salario) # llamada a la clase padre
        self.departamento = departamento
        
    def mostrar_info(self):
        super().mostrar_info()
        print(f"Departamento a cargo: {self.departamento}")
        

class Desarrollador(Empleado):
    def __init__(self, nombre, salario, lenguaje):
        super().__init__(nombre, salario)
        self.lenguaje = lenguaje
    def mostrar_info(self):
        super().mostrar_info()
        print(f"Lenguaje de programación: {self.lenguaje}")

    
desarollador = Desarrollador("Borja", 50000, "Python")
gerente = Gerente("Laura", 70000, "IT")
desarollador.mostrar_info()
gerente.mostrar_info()

# ======== HERENCIA MULTIPLE ======================
class DirectorTecnico(Gerente, Desarrollador):
    def __init__(self, nombre, salario, departamento, lenguaje):
        Gerente.__init__(self, nombre, salario, departamento)
        Desarrollador.__init__(self, nombre, salario, lenguaje)
        
    def mostrar_info(self):
        super().mostrar_info()
        print(f"(También programa en: {self.lenguaje})")
        


class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario
        
def trabajar(self):
    print(f"{self.nombre} está trabajando en tareas generales.")
    
class Gerente(Empleado):
    def __init__(self, nombre, salario, departamento):
        super().__init__(nombre, salario)
        self.departamento = departamento
        
def trabajar(self):
    print(f"{self.nombre} está gestionando el departamento de {self.departamento}.")
    
class Desarrollador(Empleado):
    def __init__(self, nombre, salario, lenguaje):
        super().__init__(nombre, salario)
        self.lenguaje = lenguaje
        
    def trabajar(self):
        print(f"{self.nombre} esta programando en {self.lenguaje}.")
        
empleados = [
    Gerente("Ana", 5000, "Marketing"),
    Desarrollador("Luis", 4000, "Python"),
    Empleado("Marta", 3000)
]
for empleado in empleados:
    empleado.trabajar()
    
empleado = Empleado("Carlos", 3000)
desarollador = Desarrollador("Borja", 50000, "Python")
gerente = Gerente("Laura", 70000, "IT")
        