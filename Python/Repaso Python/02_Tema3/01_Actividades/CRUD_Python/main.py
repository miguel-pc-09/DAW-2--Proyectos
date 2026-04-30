"""
=====================================
ARCHIVO PRINCIPAL (INTERFAZ POR CONSOLA)
=====================================

Este archivo contiene:
- El menú interactivo
- El bucle principal del programa
"""

from crud import (
    crear_tabla,
    insertar_alumno,
    mostrar_alumnos,
    actualizar_alumno,
    eliminar_alumno
)


def mostrar_menu():
    """Imprime el menú por pantalla"""
    print("\n====== GESTIÓN DE ALUMNOS ======")
    print("1. Crear tabla")
    print("2. Insertar alumno")
    print("3. Mostrar alumnos")
    print("4. Actualizar alumno")
    print("5. Eliminar alumno")
    print("6. Salir")


def main():
    """Función principal del programa"""
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            crear_tabla()
        elif opcion == "2":
            insertar_alumno()
        elif opcion == "3":
            mostrar_alumnos()
        elif opcion == "4":
            actualizar_alumno()
        elif opcion == "5":
            eliminar_alumno()
        elif opcion == "6":
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Intente de nuevo.")


# Punto de entrada del programa
if __name__ == "__main__":
    main()
