# abstraccion_4.py
# Ejemplo de abstracción: se expone una interfaz simple (arrancar)
# mientras que los detalles internos se mantienen ocultos en métodos "privados".
# En Python se usa la convención de prefijo '_' para métodos internos.

class Coche:
    def arrancar(self):
        # Interfaz pública: el usuario solo usa este método.
        self._comprobar_combustible()  # detalle interno
        self._activar_motor()          # detalle interno
        print("Coche arrancado (interfaz pública)")

    def _comprobar_combustible(self):
        # Método interno (no estrictamente privado): detalle de implementación.
        print("(Comprobando combustible...)")

    def _activar_motor(self):
        # Otro detalle interno.
        print("(Motor activado)")

if __name__ == "__main__":
    c = Coche()
    c.arrancar()
