# Aqui arranca el programa y saco el menu.
# La logica fuerte esta en sistema.py, aqui solo controlo opciones y pido datos.

from sistema import SistemaReservas
from actividades.clase_colectiva import ClaseColectiva
from actividades.entrenamiento_personal import EntrenamientoPersonal
from actividades.tipo_clase import TipoClase


def mostrar_menu():
    print("\n--- FITLIFE RESERVAS ---")
    print("1. Crear cliente")
    print("2. Crear entrenador")
    print("3. Crear clase colectiva")
    print("4. Crear entrenamiento personal")
    print("5. Hacer reserva (cliente -> actividad)")
    print("6. Ver reservas de un cliente")
    print("7. Ver actividades")
    print("0. Salir")


def elegir_tipo_clase():
    print("\nTipos de clase colectiva:")
    print("1. Yoga")
    print("2. Pilates")
    print("3. Zumba")
    print("4. Spinning")

    opcion = int(input("Elige una opcion (1-4): "))
    return TipoClase(opcion)


def elegir_cliente(sistema):
    if not sistema.clientes:
        print("No hay clientes creados.")
        return None

    print("\nClientes:")
    for i, c in enumerate(sistema.clientes, start=1):
        print(f"{i}. {c.nombre} - {c.correo}")

    idx = int(input("Elige cliente: ")) - 1
    if idx < 0 or idx >= len(sistema.clientes):
        print("Opcion no valida.")
        return None

    return sistema.clientes[idx]


def elegir_actividad(sistema):
    if not sistema.actividades:
        print("No hay actividades creadas.")
        return None

    print("\nActividades:")
    for i, a in enumerate(sistema.actividades, start=1):
        print(f"{i}. {a.nombre} | Plazas: {a.plazas_ocupadas}/{a.plazas_maximas}")

    idx = int(input("Elige actividad: ")) - 1
    if idx < 0 or idx >= len(sistema.actividades):
        print("Opcion no valida.")
        return None

    return sistema.actividades[idx]


def main():
    sistema = SistemaReservas()

    while True:
        mostrar_menu()

        try:
            opcion = int(input("Elige una opcion: "))
        except ValueError:
            print("Tienes que meter un numero.")
            continue

        if opcion == 0:
            print("Cerrando programa...")
            break

        elif opcion == 1:
            nombre = input("Nombre del cliente: ")
            correo = input("Correo del cliente: ")
            sistema.crear_cliente(nombre, correo)
            print("Cliente creado.")

        elif opcion == 2:
            nombre = input("Nombre del entrenador: ")
            correo = input("Correo del entrenador: ")
            especialidad = input("Especialidad del entrenador: ")
            sistema.crear_entrenador(nombre, correo, especialidad)
            print("Entrenador creado.")

        elif opcion == 3:
            nombre = input("Nombre de la actividad: ")
            precio = float(input("Precio base: "))
            tipo = elegir_tipo_clase()

            actividad = ClaseColectiva(nombre, precio, tipo)
            sistema.anadir_actividad(actividad)
            print("Clase colectiva creada.")

        elif opcion == 4:
            nombre = input("Nombre del entrenamiento: ")
            precio = float(input("Precio base: "))
            recargo = float(input("Recargo en porcentaje (ej: 20): "))

            actividad = EntrenamientoPersonal(nombre, precio, recargo)
            sistema.añadir_actividad(actividad)
            print("Entrenamiento personal creado.")

        elif opcion == 5:
            cliente = elegir_cliente(sistema)
            if cliente is None:
                continue

            actividad = elegir_actividad(sistema)
            if actividad is None:
                continue

            reserva = sistema.crear_reserva(cliente, actividad)
            if reserva is not None:
                print("Reserva creada:")
                print(reserva)

        elif opcion == 6:
            cliente = elegir_cliente(sistema)
            if cliente is None:
                continue

            cliente.mostrar_reservas()

        elif opcion == 7:
            if not sistema.actividades:
                print("No hay actividades creadas.")
            else:
                for a in sistema.actividades:
                    a.mostrar_info()

        else:
            print("Opcion no valida.")


if __name__ == "__main__":
    main()