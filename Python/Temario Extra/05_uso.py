# Importamos el módulo externo 'modfunciones' para poder usar las funciones que contiene
import modfunciones

# Llamamos a la función funcionImprimir del módulo, pasando el mensaje 'Importacion correcta'
# Esta función imprimirá un mensaje indicando que la importación fue exitosa
modfunciones.funcionImprimir('Importacion correcta')

# Llamamos a la función obtenerSubconjuntoList pasando:
# - Una lista completa [1,2,3,4,5,6,7]
# - Un índice de inicio (2)
# - Un índice de fin (4)
# La función devolverá el subconjunto de la lista comprendido entre esos índices
lista = modfunciones.obtenerSubconjuntoList([1, 2, 3, 4, 5, 6, 7], 2, 4)

# Mostramos el resultado del subconjunto obtenido
print(lista)

# Llamamos a la función sumarElementosList pasando:
# - Una lista vacía []
# - Tres números (1, 2, 3) que se usarán para sumarlos o agregarlos
lista = modfunciones.sumarElementosList([], 1, 2, 3)

# Mostramos el resultado final de la suma o lista generada
print(lista)