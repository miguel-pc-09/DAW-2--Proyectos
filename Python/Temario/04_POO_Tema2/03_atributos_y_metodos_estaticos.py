# 03_atributos_y_metodos_estaticos.py
# incluyendo:
# - atributo de clase 'contratado'
# - método de instancia 'mostrar_info'
# - método estático 'mostrar_informacio_estatico'
# Además, simulo el uso desde otro fichero.

class Empleado:
    # Atributo de clase: compartido por todos los empleados.
    # NOTA: no hace falta self aquí porque no es de instancia.
    contratado = True

    def __init__(self, nombre, puesto, salario=1500, *tareas):
        self.nombre = nombre
        self.puesto = puesto
        self.salario = salario
        self.tareas = tareas

    def mostrar_info(self):
        # Método de instancia: usa self para acceder a atributos.
        print(f"Nombre: {self.nombre}")
        print(f"Puesto: {self.puesto}")
        print(f"Salario: {self.salario} €")
        print(f"Contratado: {self.contratado}")

        print("Tareas asignadas:")
        if self.tareas:
            for t in self.tareas:
                print(f" - {t}")
        else:
            print(" (Sin tareas asignadas)")

    @staticmethod
    def mostrar_informacio_estatico():
        # Método estático: NO recibe self, así que aquí no tengo acceso
        # a atributos concretos de un empleado.
        print("Ejecución directa del método estático de Empleado")


# Nota sobre cómo se llamaría desde otro fichero:
# En el PDF se hace algo como:
#
#   import objetos
#   objetos.empleado.mostrar_informacio_estatico()
#
# Aquí simulo algo equivalente en un solo archivo.


if __name__ == "__main__":
    # Creo un empleado normal
    e1 = Empleado("Laura", "Recepcionista", 1600, "Atender llamadas", "Organizar agenda")
    e1.mostrar_info()
    print("-" * 40)

    # Llamo al método estático directamente desde la clase.
    # NOTA (mía): esto es el equivalente a Clase.metodo_estatico().
    Empleado.mostrar_informacio_estatico()