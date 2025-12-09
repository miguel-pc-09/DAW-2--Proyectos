# 02_usuario_args_y_nota.py
# - self (como this en Java)
# - *datos (args variables)
# - nota=0 (parámetro con valor por defecto)

class Usuario:
    # En este constructor:
    # - nombre y edad: parámetros posicionales normales.
    # - *datos: todos los parámetros posicionales extra se guardan en una tupla.
    # - nota=0: parámetro opcional que SOLO se puede cambiar nombrándolo (nota=9).
    def __init__(self, nombre, edad, *datos, nota=0):
        # Atributos básicos del usuario
        self.nombre = nombre
        self.edad = edad
        self.nota = nota

        # Aquí guardo todos los datos adicionales que vengan después de edad
        # y antes del "nota=" en la llamada al constructor.
        # NOTA: self.datos es una TUPLA (no una lista).
        self.datos = datos

    def mostrar_datos(self):
        # Método de instancia: siempre lleva self como primer parámetro.
        # self me permite acceder a los atributos del objeto actual.
        print(f"Nombre: {self.nombre}")
        print(f"Edad: {self.edad}")
        print(f"Nota: {self.nota}")

        # Recorro los datos adicionales que se han guardado en la tupla self.datos.
        # NOTA: esto responde a la duda que tuve de por qué hay un for aquí:
        # simplemente va imprimiendo cada dato "extra" que pasé al crear el objeto.
        for dato in self.datos:
            print(f"Datos adicionales: {dato}")


if __name__ == "__main__":
    # Aquí voy a probar varias formas de crear un Usuario,
    # para recordar cómo reparte Python los parámetros.

    # 1) Caso con solo los obligatorios (nombre y edad)
    u1 = Usuario("Miguel", 25)
    u1.mostrar_datos()
    print("-" * 40)

    # 2) Caso con datos adicionales y nota nombrada
    # NOTA (importante):
    #   "Estudiante de DAW" y "Turno de mañana" van a la tupla *datos.
    #   nota=9 va al parámetro nota porque lo nombro explícitamente.
    u2 = Usuario("Miguel", 25, "Estudiante de DAW", "Turno de mañana", nota=9)
    u2.mostrar_datos()
    print("-" * 40)

    # 3) Si añado más datos sin nombrar, todos van a la tupla *datos.
    #    Da igual que sean strings, números, etc. Python NO decide por tipo,
    #    decide por POSICIÓN.
    u3 = Usuario("Miguel", 25, "Estudiante de DAW", "Turno de mañana", "Empleado del mes", nota=10)
    u3.mostrar_datos()
    print("-" * 40)

    # 4) Ojo con esto:
    #    Aquí el 9 NO es la nota, se va a *datos, y la nota se queda en 0.
    u4 = Usuario("Miguel", 25, 9)
    u4.mostrar_datos()