# Función que recibe un mensaje y lo imprime por pantalla usando una f-string.
def funcionImprimir(mensaje):
    print(f'El mensaje que se ha mandado a imprimir es el siguiente: {mensaje}')


# Función que añade varios elementos a una lista.
# 'lista' es la lista base.
# '*elementos' permite pasar muchos valores sin necesidad de agruparlos en una lista.
def sumarElementosList(lista, *elementos):
    # extend() agrega cada elemento individual a la lista
    lista.extend(elementos)
    # Se devuelve la lista resultante con los elementos añadidos
    return lista


# Función que devuelve una parte de una lista usando posiciones.
def obtenerSubconjuntoList(lista, pos1, pos2):
    # Slicing: obtiene los elementos desde pos1 hasta pos2 (sin incluir pos2)
    listaResultado = lista[pos1:pos2]

    # Mostrar mensajes informativos en consola
    print('La operacion se ha llevado a cabo con éxito')
    print(f'Se ha obtenido una lista de {len(listaResultado)} elementos')

    # Retornar la parte seleccionada de la lista
    return listaResultado
