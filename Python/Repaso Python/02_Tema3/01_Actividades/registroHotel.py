# Clase base: Habitacion
class Habitacion:
    # Constructor de la clase. Se ejecuta al crear una habitación.
    def __init__(self, numero, precio_base):
        # Número identificador de la habitación.
        self.numero = numero

        # Precio base de la habitación antes de aplicar extras.
        self.precio_base = precio_base

        # Indica si la habitación está reservada o no. Empieza en False.
        self.reservada = False

    # Método que devuelve una descripción básica de la habitación.
    def descripcion(self):
        return f"Habitación estándar con precio base de {self.precio_base}€"

    # Método que calcula el precio final. En la habitación normal es el precio base.
    def calcular_precio_final(self):
        return self.precio_base

    # Método para reservar la habitación.
    def reservar(self):
        # Si no está reservada, cambiamos su estado a reservada.
        if not self.reservada:
            self.reservada = True
            return f"Habitación {self.numero} reservada con éxito."
        else:
            # Si ya estaba reservada, devolvemos aviso.
            return f"Habitación {self.numero} ya está reservada."


# Clase hija: Suite
class Suite(Habitacion):
    # Constructor de Suite. Usa los datos de Habitacion y añade jacuzzi.
    def __init__(self, numero, precio_base, tiene_jacuzzi):
        # Llamamos al constructor de la clase padre.
        super().__init__(numero, precio_base)

        # Atributo propio de Suite.
        self.tiene_jacuzzi = tiene_jacuzzi

    # Sobrescribimos descripcion para dar información propia de Suite.
    def descripcion(self):
        # Si tiene_jacuzzi es True muestra "Sí", si no muestra "No".
        jacuzzi = "Sí" if self.tiene_jacuzzi else "No"
        return f"Suite con jacuzzi: {jacuzzi}. Precio base: {self.precio_base}€"

    # Sobrescribimos calcular_precio_final porque la Suite cuesta un 50% más.
    def calcular_precio_final(self):
        return self.precio_base * 1.5


# Clase hija: HabitacionFamiliar
class HabitacionFamiliar(Habitacion):
    # Constructor de habitación familiar. Añade capacidad de personas.
    def __init__(self, numero, precio_base, capacidad_personas):
        # Llamamos al constructor de la clase padre.
        super().__init__(numero, precio_base)

        # Atributo propio de la habitación familiar.
        self.capacidad_personas = capacidad_personas

    # Sobrescribimos descripcion para mostrar la capacidad.
    def descripcion(self):
        return f"Habitación familiar para {self.capacidad_personas} personas. Precio base: {self.precio_base}€"

    # Sobrescribimos calcular_precio_final porque cuesta un 20% más.
    def calcular_precio_final(self):
        return self.precio_base * 1.2


# Clase Hotel
class Hotel:
    # Constructor del hotel.
    def __init__(self):
        # Lista donde se guardan habitaciones normales, suites y familiares.
        self.habitaciones = []

    # Método para añadir una habitación al hotel.
    def agregar_habitacion(self, habitacion):
        self.habitaciones.append(habitacion)

    # Método para mostrar solo las habitaciones disponibles.
    def mostrar_disponibles(self):
        # Creamos una lista con las habitaciones que NO están reservadas.
        disponibles = [h for h in self.habitaciones if not h.reservada]

        print("Habitaciones disponibles:")

        # Recorremos las habitaciones disponibles.
        for h in disponibles:
            # Aquí se usa polimorfismo:
            # cada habitación ejecuta su propia descripcion y precio final.
            print(f" - {h.numero}: {h.descripcion()} | Precio final: {h.calcular_precio_final()}€")

    # Método para mostrar todas las habitaciones.
    def mostrar_todas(self):
        print("Información de todas las habitaciones:")

        # Recorremos todas las habitaciones del hotel.
        for h in self.habitaciones:
            # Si está reservada, mostramos Reservada; si no, Disponible.
            estado = "Reservada" if h.reservada else "Disponible"

            # Mostramos número, descripción, precio final y estado.
            print(f" - {h.numero}: {h.descripcion()} | Precio final: {h.calcular_precio_final()}€ | Estado: {estado}")

    # Método para reservar una habitación buscando por número.
    def reservar_habitacion(self, numero):
        # Recorremos todas las habitaciones.
        for h in self.habitaciones:
            # Si encontramos la habitación con ese número, la reservamos.
            if h.numero == numero:
                print(h.reservar())
                return

        # Si termina el for sin encontrarla, mostramos mensaje.
        print(f"No se encontró la habitación {numero}.")


# Clase Entrada
class Entrada:
    # Método que ejecuta el programa.
    def ejecutar():
        # Creamos el hotel.
        hotel = Hotel()

        # Creamos habitaciones de distintos tipos.
        h1 = Habitacion(101, 80)
        h2 = Suite(202, 150, True)
        h3 = HabitacionFamiliar(303, 120, 4)

        # Añadimos habitaciones al hotel.
        hotel.agregar_habitacion(h1)
        hotel.agregar_habitacion(h2)
        hotel.agregar_habitacion(h3)

        # Reservamos dos habitaciones.
        hotel.reservar_habitacion(101)
        hotel.reservar_habitacion(202)

        # Mostramos todas las habitaciones.
        print("\n--- TODAS LAS HABITACIONES ---")
        hotel.mostrar_todas()

        # Mostramos solo las disponibles.
        print("\n--- HABITACIONES DISPONIBLES ---")
        hotel.mostrar_disponibles()


# Ejecutar el programa desde la clase Entrada.
Entrada.ejecutar()
