# 06_polimorfismo.py
# Ejemplo de varias clases implementan
# el mismo método 'trabajar' pero cada una hace algo distinto.



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
        print(f"{self.nombre} está programando en {self.lenguaje}.")


if __name__ == "__main__":
    # Lista de empleados mezclando tipos distintos
    empleados = [
        Gerente("Ana", 5000, "Marketing"),
        Desarrollador("Luis", 4000, "Python"),
        Empleado("Marta", 3000)
    ]

    # Aquí se ve el polimorfismo:
    # Todos tienen un método 'trabajar', pero cada uno se comporta distinto.
    for empleado in empleados:
        empleado.trabajar()
