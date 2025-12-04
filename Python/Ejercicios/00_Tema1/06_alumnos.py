""" 
Se pide desarrollar un programa con los contenidos vistos en la unidad. Es muy
importante que para desarrollar el código solo se utilice sintaxis básica, estructuras de
control y estructuras de datos, pero no creación y gestión de objetos.
Se pide desarrollar un sistema para la gestión de estudiantes en una asignatura. El
programa deberá ejecutarse en consola y cumplir con las siguientes funcionalidades:

1. Gestión de alumnos
El sistema debe permitir al usuario registrar los datos de varios estudiantes, por
ejemplo, mediante un menú iterativo. Por cada estudiante se debe pedir: nombre
(string), edad (entero), nota final (decimal) y DNI (string).
Para poder almacenar los datos se utilizará un diccionario, donde la clave de cada
alumno será el DNI y el valor asociado una lista con sus datos o un diccionario.

2. Gestión de la información
Una vez se almacenan los objetos, el sistema también permitirá obtener información
sobre ellos, mediante el menú comentado anteriormente. Para ello, el sistema dará
las siguientes opciones:
    ▪ Agregar alumno.
    ▪ Mostrar todos los estudiantes.
    ▪ Mostrar solo los aprobados (nota ≥ 5).
    ▪ Mostrar la media de las notas.
    ▪ Mostrar el estudiante con la nota más alta.
    ▪ Mostrar estudiante (para lo cual pedirá el DNI y mostrará los datos de este).
    ▪ Salir del programa.
"""

print("==== Registro Alumnos === ")
alumnos = {}

# Menu del programa 
while True:
    print("\n=== MENÚ ===")
    print("1. Agregar alumno")
    print("2. Mostrar todos los estudiantes.")
    print("3. Mostrar solo los aprobados")
    print("4. Mostrar la media de las notas")
    print("5. Mostrar el estudiante con la nota más alta")
    print("6. Mostrar estudiante (para lo cual pedirá el DNI y mostrará los datos de este)")
    print("7. Salir del programa.")

    opcion = input("Elige una opcion: ")

    # Agregar alumno-------------------------------- Opcion 1 --------------------
    if opcion == "1":
        print("-- Agregar Alumno --")

        dni = input("DNI: ")
        # comprobar si existe 
        if dni in alumnos:
            print("Ya existe un alumno con el DNI")
            continue

        nombre = input("Nombre: ")

        edad = int(input("Edad: "))
        while edad <= 0:
            print("La edad debe ser mayor que 0")
            edad = int(input("Edad: "))

        # Nota
        nota_tex = input("Nota final: ")

        nota = float(nota_tex)
        while nota < 0 or nota > 10: 
            print("La nota debe ser entre 0 y 10.")
            nota_tex = input("Nota final: ")
            nota = float(nota_tex)

        #Guardamos los datos 
        alumnos[dni] = {
            "nombre": nombre,
            "edad": edad,
            "nota": nota
        }

        print(f"Alumno {nombre} agregado correctamente. ")

    #Mostrar todos los estudiantes ---------------- Opcion 2 --------------------------
    elif opcion == "2":
        print(" -- Lista de todos los estudiantes --- ")

        if len(alumnos) == 0:
            print("No hay alumnos registrados. ")
        else: 
            for dni, datos in alumnos.items():
                print(f"DNI: {dni} | Nombre: {datos['nombre']} | Edad: {datos['edad']} | Nota: {datos['nota']}")
                """ Este for tambien puede ser /// for item in alumnos:
                                                       print(f"{item}: {alumnos[item]}" )"""
    

    # Mostrar solo Aprobados -------------------------- Opcion 3 ----------------------
    elif opcion == "3":
        print("--- Estudiantes aprobados ------ ")

        hay_aprobados = False

        for dni, datos in alumnos.items():
            if datos["nota"] >= 5:
                hay_aprobados = True
                print(f"DNI: {dni} | Nombre: {datos['nombre']} | Nota: {datos['nota']}")

        if not hay_aprobados:
            print("No hay alumnos aprobados.")


    # Mostrar la media de las ntas ---------------------- Opcion 4 ----------------------
    elif opcion == "4":
        print("---- Media de las notas --- ")

        if len(alumnos) == 0:
            print("No hay alumnos para calcular la media. ")
        else:
            suma = 0.0
            for datos in alumnos.values():
                suma += datos["nota"]

            media = suma / len(alumnos)
            print(f"La media de las notas es: {media:.2f}")


    # Mostrar el estudiante con la nota mas alta ------------- Opcion 5 ---------------------   
    elif opcion == "5":
        print("\n--- Estudiante con la nota más alta ---")

        if len(alumnos) == 0:
            print("No hay alumnos registrados.")
        else:
            mejor_dni = None
            mejor_nota = -1.0

            for dni, datos in alumnos.items():
                if datos["nota"] > mejor_nota:
                    mejor_nota = datos["nota"]
                    mejor_dni = dni

            mejor = alumnos[mejor_dni]
            print(f"DNI: {mejor_dni} | Nombre: {mejor['nombre']} | Edad: {mejor['edad']} | Nota: {mejor['nota']}")


    #Mostrar estduantes-------------------------------------- Opcion6 ------------------------
    elif opcion == "6":
        print("\n---- Buscar estudiante ------")
        dni_buscar = input("Introduce el DNI: ")

        if dni_buscar in alumnos:
            datos = alumnos[dni_buscar]
            print(f"DNI: {dni_buscar} | Nombre: {datos['nombre']} | Edad: {datos['edad']} | Nota: {datos['nota']}")
        else:
            print("No existe ningun alumno con ese DNI.")

    
    # Salir ------------------------------------------- Opcion 7 -------------------------
    elif opcion == "7":
        print("\nSaliendo del programa.....")
        break

    # opcion no valida
    else:
        print("Opcion no valida elije otra opcion. ")
