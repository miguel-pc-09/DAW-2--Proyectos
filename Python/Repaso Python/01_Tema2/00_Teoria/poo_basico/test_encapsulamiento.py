# test_encapsulamiento.py
# Uso desde otro archivo demostrando encapsulamiento.

from encapsulamiento_5 import CuentaBancaria

cuenta = CuentaBancaria("Luis", 500)
cuenta.depositar(100)
print("Saldo (vía método):", cuenta.obtener_saldo())

# Comentario: aunque Python permite técnicas para evadir el encapsulamiento,
# la convención y los métodos públicos fomentan un uso seguro del objeto.
