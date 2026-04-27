# encapsulamiento_5.py
# Ejemplo de encapsulamiento: proteger datos internos de acceso directo.
# Python no tiene atributos privados estrictos, pero utiliza convenciones:
# - _nombre -> indica 'protegido' (no tocar desde fuera)
# - __nombre -> name mangling (más difícil acceder desde fuera)

class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular     # atributo público
        self.__saldo = saldo       # atributo "privado" (name mangling)

    def depositar(self, cantidad):
        # Método que modifica el saldo de forma controlada
        if cantidad > 0:
            self.__saldo += cantidad
        else:
            raise ValueError("La cantidad debe ser positiva")

    def retirar(self, cantidad):
        # Controla que no se retire más de lo que hay
        if 0 < cantidad <= self.__saldo:
            self.__saldo -= cantidad
        else:
            raise ValueError("Saldo insuficiente o cantidad inválida")

    def obtener_saldo(self):
        # Método público para acceder al saldo de forma segura
        return self.__saldo

if __name__ == "__main__":
    cuenta = CuentaBancaria("Ana", 1000)
    cuenta.depositar(200)
    try:
        cuenta.retirar(500)
    except ValueError as e:
        print("Error:", e)
    print("Saldo final:", cuenta.obtener_saldo())

    # Intento de acceso directo al atributo 'privado'
    # print(cuenta.__saldo)  # -> AttributeError: 'CuentaBancaria' object has no attribute '__saldo'
    # Si insistes, podrías acceder mediante name mangling:
    # print(cuenta._CuentaBancaria__saldo)  # no recomendado
