""" Realiza el siguiente ejercicio para practicar lo visto en esta unidad:
Crea una aplicación que permita gestionar los proyectos de una empresa. Para
ello sigue estos pasos:
o Pregunta al usuario cuantos proyectos va a registrar.
o Por cada proyecto, pide el código, nombre, responsable y presupuesto del
proyecto.
o Guarda la información de todos los proyectos en un diccionario (puedes
utilizar el código como la clave y como valor puedes utilizar otro diccionario
o lista.
o Muestra por consola solo el nombre y presupuesto de cada uno de los
proyectos. """



# Pregunta al usuario cuantos proyectos va a registrar, metemos int ya que el input devuelve texto 
total = int(input("¿Cuantos proyectos vas a registrar?"))

# creamos la estructura, en este caso diccionario para la clave valor. 
proyectos = {}

# Repetimos la recogida de datos N veces. range(total) genera 0,1,2,... hasta N-1. Así iteramos exactamente total veces.
for i in range(total):
    # Mostramos i + 1 para que el usuario vea 1,2,3
    print(f"\n--- Proyecto {i + 1} de {total} ---- ")

    codigo = input("Código del proyecto: ").strip() # strip quita espacios sobrantes al inicio/fin
    nombre = input("Nombre del proyecto: ").strip()
    responsable = input("Responsable del proyecto: ").strip()
    presupuesto = float(input("Presupuesto del proyecto: ").strip())

    # como la clave sera el codigo, dentro guardaremos sus valores
    proyectos[codigo] = {
        "nombre": nombre,
        "responsable": responsable,
        "presupuesto": presupuesto
    }

print("\n== Resumen (nombre y presupuesto) ==")
for codigo, datos in proyectos.items():
    print(f"- {datos['nombre']} -> Presupuesto: {datos['presupuesto']:.2f} €")

""" 
leer N
crear diccionario vacío
repetir i de 1 a N:
    leer codigo, nombre, responsable, presupuesto
    guardar en diccionario usando 'codigo' como clave
fin repetir

para cada entrada del diccionario:
    mostrar nombre y presupuesto
fin para
 """