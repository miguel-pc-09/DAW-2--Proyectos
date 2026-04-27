from abc import ABC, abstractmethod  # Importo ABC y abstractmethod para poder crear clases abstractas


class SinPlazasException(Exception):  # Creo una excepción personalizada para cuando no queden plazas
    pass  # No añado nada más porque solo necesito diferenciar este error de otros


class Usuario(ABC):  # Creo una clase abstracta Usuario, que será la base de Cliente y Entrenador
    def __init__(self, nombre, correo):  # Constructor de Usuario, recibe nombre y correo
        self.nombre = nombre  # Guardo el nombre del usuario
        self.correo = correo  # Guardo el correo del usuario

    @abstractmethod  # Indico que este método es obligatorio en las clases hijas
    def tipo_usuario(self):  # Método abstracto para saber si es Cliente o Entrenador
        pass  # No tiene código aquí porque lo implementan las clases hijas


class Cliente(Usuario):  # Cliente hereda de Usuario
    def __init__(self, nombre, correo):  # Constructor de Cliente
        super().__init__(nombre, correo)  # Llamo al constructor de Usuario para guardar nombre y correo
        self.reservas = []  # Creo una lista vacía para guardar las reservas del cliente

    def tipo_usuario(self):  # Implemento el método abstracto de Usuario
        return "Cliente"  # Devuelvo que este usuario es un cliente

    def agregar_reserva(self, reserva):  # Método para añadir una reserva al cliente
        self.reservas.append(reserva)  # Guardo la reserva en la lista de reservas

    def mostrar_reservas(self):  # Método para mostrar las reservas del cliente
        if len(self.reservas) == 0:  # Compruebo si el cliente no tiene reservas
            print("Este cliente no tiene reservas.")  # Muestro mensaje si no tiene reservas
        else:  # Si sí tiene reservas
            for reserva in self.reservas:  # Recorro cada reserva del cliente
                reserva.mostrar_info()  # Muestro la información de esa reserva


class Entrenador(Usuario):  # Entrenador hereda de Usuario
    def __init__(self, nombre, correo, especialidad):  # Constructor de Entrenador
        super().__init__(nombre, correo)  # Llamo al constructor de Usuario para guardar nombre y correo
        self.especialidad = especialidad  # Guardo la especialidad del entrenador

    def tipo_usuario(self):  # Implemento el método abstracto de Usuario
        return "Entrenador"  # Devuelvo que este usuario es un entrenador


class Actividad(ABC):  # Creo una clase abstracta Actividad, base de todas las actividades
    def __init__(self, nombre, precio_base, plazas_maximas):  # Constructor de Actividad
        self.nombre = nombre  # Guardo el nombre de la actividad
        self.precio_base = precio_base  # Guardo el precio base de la actividad
        self.plazas_maximas = plazas_maximas  # Guardo el número máximo de plazas
        self.plazas_ocupadas = 0  # Empiezo con 0 plazas ocupadas

    def hay_plazas(self):  # Método para comprobar si quedan plazas libres
        return self.plazas_ocupadas < self.plazas_maximas  # Devuelve True si ocupadas es menor que máximas

    def ocupar_plaza(self):  # Método para ocupar una plaza al hacer una reserva
        if self.hay_plazas():  # Compruebo si todavía quedan plazas disponibles
            self.plazas_ocupadas += 1  # Aumento en 1 las plazas ocupadas
        else:  # Si no quedan plazas
            raise SinPlazasException("No quedan plazas disponibles.")  # Lanzo una excepción personalizada

    @abstractmethod  # Indico que este método lo tienen que implementar las clases hijas
    def calcular_precio(self):  # Método abstracto para calcular el precio de la actividad
        pass  # No tiene código aquí porque cada actividad calcula el precio de forma distinta

    def mostrar_ocupacion(self):  # Método para mostrar plazas ocupadas y plazas máximas
        return f"{self.plazas_ocupadas}/{self.plazas_maximas}"  # Devuelvo un texto con la ocupación


class ClaseColectiva(Actividad):  # ClaseColectiva hereda de Actividad
    def calcular_precio(self):  # Implemento el cálculo del precio
        return self.precio_base  # En una clase colectiva el precio final es el precio base


class EntrenamientoPersonal(Actividad):  # EntrenamientoPersonal hereda de Actividad
    def __init__(self, nombre, precio_base, plazas_maximas, porcentaje_extra):  # Constructor del entrenamiento personal
        super().__init__(nombre, precio_base, plazas_maximas)  # Llamo al constructor de Actividad
        self.porcentaje_extra = porcentaje_extra  # Guardo el porcentaje extra que se suma al precio

    def calcular_precio(self):  # Implemento el cálculo del precio
        return self.precio_base + (self.precio_base * self.porcentaje_extra / 100)  # Devuelvo precio base más porcentaje extra


class Reserva:  # Creo la clase Reserva
    def __init__(self, cliente, actividad):  # Constructor de Reserva
        self.cliente = cliente  # Guardo el cliente que hace la reserva
        self.actividad = actividad  # Guardo la actividad reservada
        self.precio_final = actividad.calcular_precio()  # Calculo y guardo el precio final automáticamente

    def mostrar_info(self):  # Método para mostrar los datos de la reserva
        print(  # Imprimo la información de la reserva
            f"Actividad: {self.actividad.nombre} | "  # Muestro el nombre de la actividad
            f"Precio: {self.precio_final:.2f}€ | "  # Muestro el precio final con 2 decimales
            f"Ocupación: {self.actividad.mostrar_ocupacion()}"  # Muestro la ocupación de la actividad
        )  # Cierro el print


class SistemaReservas:  # Creo la clase que controla todo el sistema
    def __init__(self):  # Constructor del sistema
        self.clientes = []  # Lista donde se guardan los clientes
        self.entrenadores = []  # Lista donde se guardan los entrenadores
        self.actividades = []  # Lista donde se guardan las actividades

    def agregar_cliente(self, nombre, correo):  # Método para crear y guardar un cliente
        self.clientes.append(Cliente(nombre, correo))  # Creo un Cliente y lo añado a la lista

    def agregar_entrenador(self, nombre, correo, especialidad):  # Método para crear y guardar un entrenador
        self.entrenadores.append(Entrenador(nombre, correo, especialidad))  # Creo un Entrenador y lo añado a la lista

    def agregar_actividad(self, actividad):  # Método para añadir una actividad al sistema
        self.actividades.append(actividad)  # Guardo la actividad en la lista de actividades

    def reservar(self, cliente, actividad):  # Método para reservar una actividad para un cliente
        actividad.ocupar_plaza()  # Ocupo una plaza de la actividad si hay disponibilidad
        reserva = Reserva(cliente, actividad)  # Creo la reserva con el cliente y la actividad
        cliente.agregar_reserva(reserva)  # Guardo la reserva dentro del cliente
        print("Reserva realizada correctamente.")  # Muestro mensaje de confirmación


def mostrar_lista_clientes(clientes):  # Función para mostrar todos los clientes
    for i, cliente in enumerate(clientes):  # Recorro la lista de clientes con índice
        print(f"{i + 1}. {cliente.nombre} - {cliente.correo}")  # Muestro número, nombre y correo


def mostrar_lista_actividades(actividades):  # Función para mostrar todas las actividades
    for i, actividad in enumerate(actividades):  # Recorro la lista de actividades con índice
        print(  # Imprimo los datos de cada actividad
            f"{i + 1}. {actividad.nombre} | "  # Muestro el número y nombre de la actividad
            f"Precio: {actividad.calcular_precio():.2f}€ | "  # Muestro el precio calculado con 2 decimales
            f"Plazas: {actividad.mostrar_ocupacion()}"  # Muestro las plazas ocupadas y máximas
        )  # Cierro el print


def menu():  # Función principal del menú
    sistema = SistemaReservas()  # Creo el objeto principal del sistema

    sistema.agregar_actividad(ClaseColectiva("Yoga", 20, 3))  # Añado una actividad colectiva de Yoga
    sistema.agregar_actividad(ClaseColectiva("Zumba", 15, 5))  # Añado una actividad colectiva de Zumba
    sistema.agregar_actividad(EntrenamientoPersonal("Personal Trainer", 30, 1, 25))  # Añado entrenamiento personal con 25% extra

    while True:  # Bucle infinito para que el menú se repita hasta salir
        print("\n--- MENÚ CENTRO DEPORTIVO ---")  # Muestro el título del menú
        print("1. Crear cliente")  # Opción para crear cliente
        print("2. Crear entrenador")  # Opción para crear entrenador
        print("3. Mostrar actividades")  # Opción para mostrar actividades
        print("4. Reservar actividad")  # Opción para reservar actividad
        print("5. Ver reservas de cliente")  # Opción para ver reservas
        print("6. Salir")  # Opción para salir

        opcion = input("Elige una opción: ")  # Pido al usuario una opción del menú

        match opcion:  # Evalúo la opción elegida
            case "1":  # Si elige crear cliente
                nombre = input("Nombre del cliente: ")  # Pido el nombre del cliente
                correo = input("Correo del cliente: ")  # Pido el correo del cliente
                sistema.agregar_cliente(nombre, correo)  # Creo y guardo el cliente en el sistema
                print("Cliente creado.")  # Muestro mensaje de confirmación

            case "2":  # Si elige crear entrenador
                nombre = input("Nombre del entrenador: ")  # Pido el nombre del entrenador
                correo = input("Correo del entrenador: ")  # Pido el correo del entrenador
                especialidad = input("Especialidad: ")  # Pido la especialidad del entrenador
                sistema.agregar_entrenador(nombre, correo, especialidad)  # Creo y guardo el entrenador
                print("Entrenador creado.")  # Muestro mensaje de confirmación

            case "3":  # Si elige mostrar actividades
                mostrar_lista_actividades(sistema.actividades)  # Muestro todas las actividades del sistema

            case "4":  # Si elige reservar actividad
                if len(sistema.clientes) == 0:  # Compruebo si no hay clientes creados
                    print("Primero debes crear un cliente.")  # Aviso de que hace falta crear un cliente
                    continue  # Vuelvo al inicio del menú

                print("\nClientes:")  # Muestro título de clientes
                mostrar_lista_clientes(sistema.clientes)  # Muestro la lista de clientes
                num_cliente = int(input("Elige cliente: ")) - 1  # Pido el número del cliente y resto 1 para usar índice

                print("\nActividades:")  # Muestro título de actividades
                mostrar_lista_actividades(sistema.actividades)  # Muestro la lista de actividades
                num_actividad = int(input("Elige actividad: ")) - 1  # Pido el número de actividad y resto 1 para usar índice

                try:  # Intento hacer la reserva controlando posibles errores
                    cliente = sistema.clientes[num_cliente]  # Obtengo el cliente elegido
                    actividad = sistema.actividades[num_actividad]  # Obtengo la actividad elegida
                    sistema.reservar(cliente, actividad)  # Hago la reserva
                except SinPlazasException as e:  # Capturo el error si no quedan plazas
                    print("Error:", e)  # Muestro el mensaje del error
                except IndexError:  # Capturo error si el número elegido no existe
                    print("Error: opción incorrecta.")  # Muestro mensaje de opción incorrecta

            case "5":  # Si elige ver reservas de un cliente
                if len(sistema.clientes) == 0:  # Compruebo si no hay clientes creados
                    print("No hay clientes creados.")  # Aviso al usuario
                    continue  # Vuelvo al inicio del menú

                mostrar_lista_clientes(sistema.clientes)  # Muestro la lista de clientes
                num_cliente = int(input("Elige cliente: ")) - 1  # Pido el cliente y resto 1 para usar índice

                try:  # Intento mostrar las reservas controlando errores
                    sistema.clientes[num_cliente].mostrar_reservas()  # Muestro las reservas del cliente elegido
                except IndexError:  # Capturo error si el cliente no existe
                    print("Error: cliente no válido.")  # Muestro mensaje de error

            case "6":  # Si elige salir
                print("Saliendo del programa.")  # Muestro mensaje de salida
                break  # Rompo el bucle y termina el programa

            case _:  # Si escribe una opción que no existe
                print("Opción no válida.")  # Muestro mensaje de opción no válida


if __name__ == "__main__":  # Punto de entrada del programa
    menu()  # Llamo al menú principal
    
    
    