# Importamos el módulo completo 'modfunciones'
import modfunciones

# Importamos solo la función sumarElementosList desde el módulo 'modfuncionesind'
from modfuncionesind import sumarElementosList

# Importamos la función funcionImprimir desde 'modfuncionesind'
# pero le asignamos un alias local llamado 'imprimir'
from modfuncionesind import funcionImprimir as imprimir


# Llamamos a la función funcionImprimir del módulo 'modfunciones'
modfunciones.funcionImprimir("Este mensaje viene desde modfunciones")

# Llamamos directamente a sumarElementosList porque la importamos sin alias
resultado = sumarElementosList([], 1, 2, 3)
print(resultado)

# Llamamos a funcionImprimir pero usando el alias 'imprimir'
imprimir("Mensaje impreso usando alias")
