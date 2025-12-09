# 05_herencia.py
# Ejemplo con:
#   - clase Empleado
#   - clases hijas Gerente y Desarrollador
#   - clase DirectorTecnico con herencia múltiple



class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

    def mostrar_info(self):
        print(f"Empleado: {self.nombre}, Salario: {self.salario}€")


class Gerente(Empleado):
    def __init__(self, nombre, salario, departamento):
        # Llamo al constructor de la clase padre con super().
        super().__init__(nombre, salario)
        self.departamento = departamento

    def mostrar_info(self):
        # Reutilizo la lógica de la clase padre y luego añado más info.
        super().mostrar_info()
        print(f"Departamento a cargo: {self.departamento}")


class Desarrollador(Empleado):
    def __init__(self, nombre, salario, lenguaje):
        super().__init__(nombre, salario)
        self.lenguaje = lenguaje

    def mostrar_info(self):
        super().mostrar_info()
        print(f"Lenguaje de programación: {self.lenguaje}")


class DirectorTecnico(Gerente, Desarrollador):
    # Ejemplo de herencia múltiple del PDF.
    def __init__(self, nombre, salario, departamento, lenguaje):
        # Aquí el profe llama explícitamente a los __init__ de las dos clases padre.
        Gerente.__init__(self, nombre, salario, departamento)
        Desarrollador.__init__(self, nombre, salario, lenguaje)

    def mostrar_info(self):
        # NOTA (mía): por MRO (Method Resolution Order), super() usará
        # la primera clase de la lista de herencia (Gerente).
        super().mostrar_info()
        print(f"(También programa en: {self.lenguaje})")


if __name__ == "__main__":
    d = DirectorTecnico("Borja", 50000, "IT", "Python")
    d.mostrar_info()
