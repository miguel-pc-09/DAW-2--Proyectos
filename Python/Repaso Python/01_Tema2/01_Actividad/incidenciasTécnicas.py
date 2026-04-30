# ======================================================
# 1. Definición de excepciones propias del sistema. En un fichero excepciones.py
# ======================================================

# Creamos una excepción base que hereda de Exception
class IncidenciaError(Exception):
    # Sirve como base para todas las excepciones del sistema
    pass


# Excepción para errores de estado inválido
class EstadoInvalidoError(IncidenciaError):
    # Se lanza cuando se intenta poner un estado incorrecto
    pass


# Excepción para errores de permisos
class PermisoDenegadoError(IncidenciaError):
    # Se lanza cuando un usuario no tiene permisos para una acción
    pass

# ----------------------------------------- Fichero usuarios.py -----------------------------------
from abc import ABC, abstractmethod

# ======================================================
# 2. Clase abstracta Usuario
# ======================================================
class Usuario(ABC):
    # Clase base que NO se puede instanciar directamente

    def __init__(self, nombre, email):
        # Atributos protegidos (encapsulamiento)
        self._nombre = nombre
        self._email = email

    @abstractmethod
    def obtener_rol(self):
        # Método abstracto → obliga a las clases hijas a implementarlo
        pass

    def mostrar_datos(self):
        # Método reutilizable por todas las clases hijas
        return f"{self._nombre} ({self._email}) - Rol: {self.obtener_rol()}"


# ======================================================
# 3. Clase Tecnico (hereda de Usuario)
# ======================================================
class Tecnico(Usuario):

    def __init__(self, nombre, email, especialidad):
        # Llamamos al constructor del padre
        super().__init__(nombre, email)

        # Atributos propios del técnico
        self._especialidad = especialidad
        self._incidencias_asignadas = []

    def obtener_rol(self):
        # Implementamos el método abstracto
        return "Técnico"

    def asignar_incidencia(self, incidencia):
        # Añadimos una incidencia a su lista
        self._incidencias_asignadas.append(incidencia)

    def listar_incidencias(self):
        # Si no tiene incidencias, mostramos mensaje
        if not self._incidencias_asignadas:
            return "No tiene incidencias asignadas."

        # Si tiene, las mostramos una a una
        return "\n".join(str(i) for i in self._incidencias_asignadas)


# ======================================================
# 4. Clase Supervisor
# ======================================================
class Supervisor(Usuario):

    def obtener_rol(self):
        # El supervisor devuelve su rol
        return "Supervisor"
    
# ------------------------------------------------------ incidencias.py -------------------------
from abc import ABC, abstractmethod
from excepciones import EstadoInvalidoError

# ======================================================
# 5. Clase abstracta Incidencia
# ======================================================
class Incidencia(ABC):

    # Lista de estados permitidos
    ESTADOS_VALIDOS = ["Abierta", "En proceso", "Resuelta", "Cerrada"]

    def __init__(self, identificador, descripcion):
        self._id = identificador
        self._descripcion = descripcion
        self._estado = "Abierta"
        self._tecnico_asignado = None

    def asignar_tecnico(self, tecnico):
        # Asignamos el técnico a la incidencia
        self._tecnico_asignado = tecnico

        # También añadimos la incidencia al técnico
        tecnico.asignar_incidencia(self)

    def cambiar_estado(self, nuevo_estado):
        # Comprobamos que el estado sea válido
        if nuevo_estado not in self.ESTADOS_VALIDOS:
            raise EstadoInvalidoError("Estado no válido")

        # Si ya está cerrada, no se puede cambiar
        if self._estado == "Cerrada":
            raise EstadoInvalidoError("Incidencia cerrada")

        # Cambiamos el estado
        self._estado = nuevo_estado

    @abstractmethod
    def calcular_tiempo_resolucion(self):
        # Método abstracto → cada tipo lo define
        pass

    def __str__(self):
        # Mostramos información de la incidencia
        tecnico = self._tecnico_asignado._nombre if self._tecnico_asignado else "No asignado"

        return (
            f"[{self._id}] {self._descripcion} | "
            f"Estado: {self._estado} | "
            f"Técnico: {tecnico} | "
            f"Tiempo estimado: {self.calcular_tiempo_resolucion()}h"
        )


# ======================================================
# 6. Incidencia estándar
# ======================================================
class IncidenciaEstandar(Incidencia):

    def calcular_tiempo_resolucion(self):
        # Tiempo normal
        return 8


# ======================================================
# 7. Incidencia crítica
# ======================================================
class IncidenciaCritica(Incidencia):

    def calcular_tiempo_resolucion(self):
        # Tiempo reducido (prioridad alta)
        return 2
    
# -------------------------------------------- gestion.py --------------------------
from excepciones import PermisoDenegadoError

# ======================================================
# 8. Clase GestorIncidencias
# ======================================================
class GestorIncidencias:

    def __init__(self):
        # Lista donde guardamos todas las incidencias
        self._incidencias = []

    def crear_incidencia(self, incidencia):
        # Añadimos una incidencia a la lista
        self._incidencias.append(incidencia)

    def asignar_incidencia(self, supervisor, incidencia, tecnico):
        # Comprobamos si el usuario es supervisor
        if supervisor.obtener_rol() != "Supervisor":
            raise PermisoDenegadoError("Permiso denegado")

        # Si es supervisor, puede asignar
        incidencia.asignar_tecnico(tecnico)

    def listar_incidencias(self):
        # Mostramos todas las incidencias
        return "\n".join(str(i) for i in self._incidencias)
    
# -------------------------------------------- main.py --------------------------
from usuarios import Tecnico, Supervisor
from incidencias import IncidenciaEstandar, IncidenciaCritica
from gestion import GestorIncidencias

# ======================================================
# 9. Programa principal
# ======================================================
def main():

    # Creamos usuarios
    tecnico = Tecnico("Laura Gómez", "laura@empresa.com", "Redes")
    supervisor = Supervisor("Miguel Torres", "miguel@empresa.com")

    # Creamos incidencias
    inc1 = IncidenciaEstandar(1, "Error de configuración de correo")
    inc2 = IncidenciaCritica(2, "Servidor principal caído")

    # Creamos el gestor
    gestor = GestorIncidencias()

    # Añadimos incidencias al sistema
    gestor.crear_incidencia(inc1)
    gestor.crear_incidencia(inc2)

    # Asignamos incidencias (solo supervisor puede)
    gestor.asignar_incidencia(supervisor, inc1, tecnico)
    gestor.asignar_incidencia(supervisor, inc2, tecnico)

    # Cambiamos estados
    inc1.cambiar_estado("En proceso")
    inc2.cambiar_estado("Resuelta")

    # Mostramos todas las incidencias
    print("=== INCIDENCIAS ===")
    print(gestor.listar_incidencias())

    # Mostramos incidencias del técnico
    print("\n=== INCIDENCIAS DEL TÉCNICO ===")
    print(tecnico.listar_incidencias())


# Punto de entrada del programa
if __name__ == "__main__":
    main()