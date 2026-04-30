""" Gestion Alumnos """
alumnos = {}
while True:
    print("\n--Menu--")
    print("1. Agregar Alumno nuevo")
    print("2. Mostrar todos los estudiantes")
    print("3. Buscar Alumno por dni")
    print("4. Mostrar solo aprobados")
    print("5. Mostrar media de las notas")
    print("6. Mostrar el alumno con mayor nota")
    print("7. Salir")
    
    opcion = int(input("Ingrese una opcion: "))
    
    if opcion == "1":
        dni = input("Introduce el DNI del alumno: ")
        if dni in alumnos:
            print("El alumno ya está registrado.")
        else:
            nombre = input("Introduce el nombre del alumno: ").strip()
            try:
                edad = int(input("Introduce la edad del alumno: "))
                nota = float(input("Introduce la nota final del alumno (0-10):"))
                if 0 <= nota <= 10:
                    alumnos[dni] = {
                        "nombre": nombre,
                        "edad": edad,
                        "nota": nota
                    }
                    print("Alumno agregado correctamente.")
                else:
                    print("La nota debe estar entre 0 y 10.")
            except ValueError:
                print("Edad o nota no válidas.")
    elif opcion == "2":
        if not alumnos:
            print("No hay alumnos registrados. ")
        else:
            for dni, datos in alumnos.items():
                print(f"DNI: {dni}, Nombre: {datos['nombre']}, Edad: {datos['edad']}, Nota: {datos['nota']}")
                
    elif opcion == "3":
        dni = input("Introduce el DNI a buscar").strip()
        if dni in alumnos:
            datos = alumnos[dni]
            print(f"Datos del alumno:\nNombre: {datos['nombre']}, Edad: {datos['edad']}, Nota: {datos['nota']}")
        else:
            print("Alumno no encontrado.")
            
    elif opcion == "4":
        aprobados = False
        for dni, datos in alumnos.items():
            if datos["nota"] >= 5:
                print(f"DNI: {dni}, Nombre: {datos['nombre']}, Edad: {datos['edad']}, Nota: {datos['nota']}")
                aprobados = True
            if not aprobados:
                print("No hay alumnos aprobados.")
    elif opcion == "5":
        if not alumnos:
            print("no hay alumnos para calcular la media.")
        else:
            suma = 0
            for datos in alumnos.values():
                suma += datos['nota']
            media = suma / len(alumnos)
            print(f"La media de las notas es: {media:.2f}")
            
    elif opcion == "6":
        if not alumnos:
            print("No hay alumnos registrados. ")
        else: 
            mejor_dni = None
            mejor_nota = -1
            for dni, datos in alumnos.items():
                if datos["nota"] > mejor_nota:
                    mejor_nota = datos["nota"]
                    mejor_dni = dni
                mejor = alumnos[mejor_dni]
                print(f"Mejor alumno: {mejor['nombre']}, (DNI: {mejor_dni}) con nota {mejor_nota}")
    elif opcion == "7":
        print("Saliendo del programa.")
        break
    
    else:
        print("Opcion no válida. ")    
        
        