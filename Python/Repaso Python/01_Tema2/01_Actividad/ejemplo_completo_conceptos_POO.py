"""
====================================================================
EJERCICIO COMPLETO DE PROGRAMACIÓN ORIENTADA A OBJETOS EN PYTHON
====================================================================

ENUNCIADO GENERAL
-----------------
Una empresa desea desarrollar un pequeño sistema para gestionar
a sus empleados utilizando Programación Orientada a Objetos (POO).

Todos los empleados comparten ciertas características comunes,
como el nombre y un salario base, pero no todos calculan su salario
de la misma forma.

El sistema debe cumplir los siguientes requisitos:

1. Debe existir una clase abstracta llamada Empleado que:
   - No pueda instanciarse directamente.
   - Contenga los atributos comunes a todos los empleados.
   - Obligue a las clases hijas a implementar el cálculo del salario.

2. Se deben crear distintos tipos de empleados:
   - EmpleadoFijo: cobra un salario mensual fijo.
   - EmpleadoPorHoras: cobra en función de las horas trabajadas.
   - EmpleadoConBonus: cobra un salario fijo más un bonus adicional.

3. El salario base debe estar protegido (encapsulado) y no debe
   accederse directamente desde fuera de la clase.

4. El programa debe demostrar el uso de:
   - Clases
   - Atributos
   - Métodos
   - Abstracción
   - Encapsulamiento
   - Herencia
   - Polimorfismo

5. Finalmente, el programa principal debe:
   - Crear varios empleados de distintos tipos.
   - Guardarlos en una lista.
   - Mostrar su información y salario usando polimorfismo.
"""

# ================================================================
# IMPORTACIÓN PARA ABSTRACCIÓN
# ================================================================

from abc import ABC, abstractmethod


# ================================================================
# CLASE ABSTRACTA EMPLEADO
# ================================================================

class Empleado(ABC):
    """
    Clase abstracta que representa a un empleado genérico.
    Sirve como base para todos los tipos de empleados.
    """

    def __init__(self, nombre, salario_base):
        """
        Constructor de la clase Empleado.

        Parámetros:
        - nombre: nombre del empleado
        - salario_base: salario base del empleado

        Se utiliza encapsulamiento para proteger el salario.
        """
        self.nombre = nombre                # Atributo público
        self.__salario_base = salario_base  # Atributo privado

    # ============================================================
    # MÉTODO GETTER
    # ============================================================

    def get_salario_base(self):
        """
        Devuelve el salario base del empleado.

        Función:
        - Permite acceder al salario base de forma controlada.
        - Evita el acceso directo al atributo privado.
        """
        return self.__salario_base

    # ============================================================
    # MÉTODO SETTER
    # ============================================================

    def set_salario_base(self, nuevo_salario):
        """
        Modifica el salario base del empleado.

        Función:
        - Controla que el salario no sea negativo.
        - Protege la integridad de los datos.
        """
        if nuevo_salario > 0:
            self.__salario_base = nuevo_salario
        else:
            print("Error: el salario debe ser positivo")

    # ============================================================
    # MÉTODO COMÚN
    # ============================================================

    def mostrar_info(self):
        """
        Muestra información básica del empleado.

        Función:
        - Método común para todas las clases hijas.
        - Puede reutilizarse sin redefinir.
        """
        print(f"Empleado: {self.nombre}")

    # ============================================================
    # MÉTODO ABSTRACTO
    # ============================================================

    @abstractmethod
    def calcular_salario(self):
        """
        Método abstracto.

        Función:
        - Obliga a todas las clases hijas a definir
          su propia forma de calcular el salario.
        """
        pass


# ================================================================
# CLASE EMPLEADO FIJO
# ================================================================

class EmpleadoFijo(Empleado):
    """
    Representa a un empleado con salario mensual fijo.
    """

    def calcular_salario(self):
        """
        Devuelve el salario mensual fijo.

        Función:
        - Implementa el método abstracto.
        - Usa el salario base definido en la clase padre.
        """
        return self.get_salario_base()


# ================================================================
# CLASE EMPLEADO POR HORAS
# ================================================================

class EmpleadoPorHoras(Empleado):
    """
    Representa a un empleado que cobra por horas trabajadas.
    """

    def __init__(self, nombre, salario_base, horas_trabajadas):
        """
        Constructor de EmpleadoPorHoras.

        Añade un atributo específico: horas_trabajadas.
        """
        super().__init__(nombre, salario_base)
        self.horas_trabajadas = horas_trabajadas

    def calcular_salario(self):
        """
        Calcula el salario multiplicando salario base por horas.

        Función:
        - Comportamiento distinto al de EmpleadoFijo.
        """
        return self.get_salario_base() * self.horas_trabajadas


# ================================================================
# CLASE EMPLEADO CON BONUS
# ================================================================

class EmpleadoConBonus(EmpleadoFijo):
    """
    Empleado fijo que recibe un bonus adicional.
    """

    def __init__(self, nombre, salario_base, bonus):
        """
        Constructor que añade un bonus al salario fijo.
        """
        super().__init__(nombre, salario_base)
        self.bonus = bonus

    def calcular_salario(self):
        """
        Devuelve salario base más bonus.

        Función:
        - Sobrescribe el método de la clase padre.
        """
        return self.get_salario_base() + self.bonus


# ================================================================
# FUNCIÓN QUE DEMUESTRA POLIMORFISMO
# ================================================================

def mostrar_salarios(lista_empleados):
    """
    Recorre una lista de empleados y muestra su salario.

    Función:
    - Demuestra polimorfismo.
    - Todos los objetos se tratan como Empleado,
      pero cada uno responde de forma distinta.
    """
    for empleado in lista_empleados:
        empleado.mostrar_info()
        print("Salario final:", empleado.calcular_salario())
        print("-" * 40)


# ================================================================
# PROGRAMA PRINCIPAL
# ================================================================

if __name__ == "__main__":

    # Crear un empleado fijo
    emp1 = EmpleadoFijo("Ana", 1800)

    # Crear un empleado por horas
    emp2 = EmpleadoPorHoras("Luis", 15, 120)

    # Crear un empleado fijo con bonus
    emp3 = EmpleadoConBonus("María", 2000, 300)

    # Guardar todos los empleados en una lista
    empleados = [emp1, emp2, emp3]

    # Mostrar información y salarios usando polimorfismo
    mostrar_salarios(empleados)

    # Modificar el salario usando encapsulamiento
    emp1.set_salario_base(1900)

    # Mostrar el nuevo salario
    print("Nuevo salario de Ana:", emp1.calcular_salario())
    print("Info de Ana:", emp1.mostrar_info())
    
