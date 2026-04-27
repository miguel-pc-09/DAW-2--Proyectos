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