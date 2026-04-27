""" ========================= METODOS ========================= """
class empleado:
    contratado = True
    
    def __init_(self, nombre, puesto, salario=1500, *tareas):
        self.nombre = nombre
        self.puesto = puesto
        self.salario = salario
        self.tareas = tareas
        
    def mostrar_info(self):
        print(f"Nombre: {self.nombre}")
        print(f"Puesto: {self.puesto}")
        print(f"Salario: {self.salario} €")
        print(f"Contradado: {self.contratado}")
        print("Tareas asignadas:")
        if self.tareas:
            for t in self.tareas:
                print(f"- {t}")
        else:
            print("(Sin tareas asignadas)")
            
empleado1 = empleado("Laura", "Recepcionista")
empleado1.mostrar_info()