from sistema import SistemaReserva
from actividades.entrenamiento_personal import EntrenamientoPersonal
from actividades.clase_colectiva import ClaseColectiva
from actividades.actividad import SinPlazasException

from utils import (
    pedir_texto,
    pedir_int,
    pedir_float,
    pedir_especialidad_entrenador,
    pedir_tipo_clase,
    pedir_tipo_actividad,
)

# Imprime el menú principal
def mostrar_menu():
    print("\n============================")
    print("   GIMNASIO - MENÚ PRINCIPAL")
    print("============================")
    print("1) Crear cliente")
    print("2) Crear entrenador")
    print("3) Listar usuarios")
    print("4) Listar actividades")
    print("5) Crear actividad")
    print("6) Reservar actividad")
    print("7) Ver reservas de un cliente")
    print("0) Salir")


# Lista clientes y entrenadores creados
def listar_usuarios(sistema: SistemaReserva):
    print("\n--- CLIENTES ---")
    clientes = sistema.get_clientes()
    if len(clientes) == 0:
        print("No hay clientes.")
    else:
        for c in clientes:
            print(f"- {c.get_nombre()} ({c.get_email()})")

    print("\n--- ENTRENADORES ---")
    entrenadores = sistema.get_entrenadores()
    if len(entrenadores) == 0:
        print("No hay entrenadores.")
    else:
        for e in entrenadores:
            print(f"- {e.get_nombre()} ({e.get_email()}) | Especialidad: {e.get_especialidad()}")


# Lista todas las actividades del sistema con ocupación y tipo
def listar_actividades(sistema: SistemaReserva):
    acts = sistema.get_actividades()

    print("\n--- ACTIVIDADES DISPONIBLES ---")
    for i, a in enumerate(acts, start=1):
        # Para mostrar si es colectiva o personal miro el tipo de objeto
        if isinstance(a, EntrenamientoPersonal):
            tipo_txt = f"Personal (+{a.get_porcentaje_extra():.0f}%)"
        else:
            tipo_txt = "Colectiva"

        print(
            f"{i}) {a.get_nombre()} | {tipo_txt} | Base: {a.get_precio_base():.2f}€ | Ocupación: {a.estado_ocupacion()}"
        )


# Pide elegir un cliente por número
def elegir_cliente(sistema: SistemaReserva):
    clientes = sistema.get_clientes()
    if len(clientes) == 0:
        print("No hay clientes creados.")
        return None

    print("\n--- ELIGE CLIENTE ---")
    for i, c in enumerate(clientes, start=1):
        print(f"{i}) {c.get_nombre()} ({c.get_email()})")

    idx = pedir_int("Cliente: ", 1, len(clientes))
    return clientes[idx - 1]


# Muestra todas las reservas de un cliente (RF5)
def ver_reservas_cliente(cliente):
    reservas = cliente.get_reservas()

    print(f"\n--- RESERVAS DE {cliente.get_nombre()} ---")
    if len(reservas) == 0:
        print("Este cliente no tiene reservas.")
        return

    for r in reservas:
        act = r.get_actividad()

        # Tipo de actividad para mostrar
        if isinstance(act, EntrenamientoPersonal):
            tipo_txt = f"Personal (+{act.get_porcentaje_extra():.0f}%)"
        else:
            tipo_txt = "Colectiva"

        print(
            f"- {act.get_nombre()} | {tipo_txt} | Precio final: {r.get_precio_final():.2f}€ | Ocupación: {act.estado_ocupacion()}"
        )


# Programa principal
def main():
    sistema = SistemaReserva()

    while True:
        mostrar_menu()
        opcion = pedir_int("Elige una opción: ", 0, 7)

        # Salir
        if opcion == 0:
            print("Saliendo...")
            break

        # Crear cliente
        if opcion == 1:
            nombre = pedir_texto("Nombre del cliente: ")
            correo = pedir_texto("Correo del cliente: ")
            sistema.crear_cliente(nombre, correo)
            print("Cliente creado.")

        # Crear entrenador
        elif opcion == 2:
            nombre = pedir_texto("Nombre del entrenador: ")
            correo = pedir_texto("Correo del entrenador: ")
            especialidad = pedir_especialidad_entrenador()
            sistema.crear_entrenador(nombre, correo, especialidad)
            print("Entrenador creado.")

        # Listar usuarios
        elif opcion == 3:
            listar_usuarios(sistema)

        # Listar actividades
        elif opcion == 4:
            listar_actividades(sistema)

        # Crear actividad (colectiva o personal)
        elif opcion == 5:
            tipo_act = pedir_tipo_actividad()
            tipo_clase = pedir_tipo_clase()
            precio_base = pedir_float("Precio base: ", 0.01)
            plazas_max = pedir_int("Plazas máximas: ", 1, 9999)

            # Si es colectiva
            if tipo_act == 1:
                sistema.crear_actividad_colectiva(tipo_clase, precio_base, plazas_max)
                print("Actividad colectiva creada.")
            else:
                # Si es personal, pido porcentaje extra
                porcentaje = pedir_float("Porcentaje extra (ej: 20): ", 0.0)
                sistema.crear_actividad_personal(tipo_clase, precio_base, plazas_max, porcentaje)
                print("Entrenamiento personal creado.")

        # Reservar actividad
        elif opcion == 6:
            cliente = elegir_cliente(sistema)
            if cliente is None:
                continue

            listar_actividades(sistema)
            acts = sistema.get_actividades()
            idx_act = pedir_int("Elige actividad: ", 1, len(acts)) - 1

            try:
                reserva = sistema.reservar(cliente, idx_act)
                print(f"Reserva hecha. Precio final: {reserva.get_precio_final():.2f}€")
            except SinPlazasException as e:
                # RF6: si no hay plazas, muestro el error y no revienta el programa
                print(f"Error: {e}")

        # Ver reservas de un cliente
        elif opcion == 7:
            cliente = elegir_cliente(sistema)
            if cliente is None:
                continue
            ver_reservas_cliente(cliente)


if __name__ == "__main__":
    main()
