
""" Clases """
class Usuario:
    def __init__(self, nombre, edad, *datos, nota=0):
        self.nombre = nombre
        self.edad = edad
        self.nota = nota
        self.datos = datos

    def mostrar_datos(self):
        print(f"Nombre: {self.nombre}")
        print(f"Edad: {self.edad}")
        print(f"Nota: {self.nota}")
        for dato in self.datos:
            print(f"Datos adicionales: {dato}")


# 2. Crear objetos (instanciar)
alumno = Usuario(
    "Juan",
    20,
    "Estudiante de Ingeniería",
    "Becado por la universidad",
    "Convalidaciones en curso",
    nota=9
)

alumno1 = Usuario("Pedro", 22)


# 3. Usar los objetos
print("=== Alumno 1 ===")
alumno.mostrar_datos()

print("\n=== Alumno 2 ===")
alumno1.mostrar_datos()


""" ====================== ATRIBUTOS =======================  """
class empleado:
    # PArametro de clase 
    contratado = True
    def __init__(self, nombre, puesto, salario=1500, *tareas):
        self.nombre = nombre
        self.puesto = puesto
        self.salario = salario
        
    def mostrar_info(self):
        print(f"Nombre: {self.nombre}")
        print(f"Puesto: {self.puesto}")
        print(f"Salario: {self.salario} €")
        
        

