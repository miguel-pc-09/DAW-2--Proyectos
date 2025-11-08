# Función que recibe un mensaje y lo imprime por pantalla formateado
def funcionImprimir(mensaje):
    print(
        f'El mensaje que se ha mandado a imprimir es el siguiente: {mensaje}')


# Función que permite añadir varios elementos a una lista
# 'lista' es la lista inicial y '*elementos' permite pasar varios valores
def sumarElementosList(lista, *elementos):
    # extend() agrega todos los elementos pasados a la lista
    lista.extend(elementos)
    # Se devuelve la lista ya modificada
    return lista


# Función que obtiene un subconjunto de una lista usando posiciones
def obtenerSubconjuntoList(lista, pos1, pos2):
    # Se obtiene la parte de la lista comprendida entre los índices pos1 y pos2 (sin incluir pos2)
    listaResultado = lista[pos1:pos2]
    
    # Mensaje informativo de que la operación fue correcta
    print('La operacion se ha llevado a cabo con éxito')
    
    # Mostramos cuántos elementos tiene la lista resultante
    print(f'Se ha obtenido una lista de {len(listaResultado)} elementos')
    
    # Devolvemos la parte recortada de la lista original
    return listaResultado