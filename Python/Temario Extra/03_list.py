elementos = [1, "cosa", False]  # Lista heterogénea: int, str, bool

numeros = [1, 2, 3, 4, 5, 6, 7]
numeros.insert(1, 10)           # Inserta 10 en índice 1 -> [1, 10, 2, 3, 4, 5, 6, 7]
print(numeros)

numeros[0:3] = [9, 8, 7]        # Reemplaza el slice 0..2 -> [9, 8, 7, 3, 4, 5, 6, 7] remplaza del 0 al 2 incluido por 9,8,7
numeros[0] = -1                 # Cambia el primer elemento -> [-1, 8, 7, 3, 4, 5, 6, 7]

subconjunto = numeros[2:4]      # Slice (índices 2 y 3) -> [7, 3] posicion 2 a la posicion 4 es decir el 7 y 3
print(subconjunto)

print(numeros[-1])              # Último elemento -> 7
print(numeros[-len(numeros)])   # Primer elemento -> -1   (ojo: en tu comentario ponías 1)

print(numeros[0])               # Primer elemento -> -1   (ya fue modificado)
print(numeros[len(numeros)-1])  # Último elemento -> 7

palabras = list()               # Crea lista vacía
palabras.extend(["Ejemplo", "de", "como", "añadir", "elementos"])  # Añade varios de golpe
print(palabras)

lista1 = ["primero", "segundo", "tercero"]
listaResultante = lista1 * 2    # Repite la lista multiplica por 2  -> ['primero','segundo','tercero','primero','segundo','tercero']
print(listaResultante)

lista2 = ["cuarto", "quinto", "sexto"]
listaResultante = lista1 + lista2  # Concatena -> ['primero','segundo','tercero','cuarto','quinto','sexto']
print(listaResultante)

listaElementos = ["Elemento 4", "Elemento 2", "Elemento 1", "Elemento 3"]
listaElementos.sort()           # Orden lexicográfico -> ['Elemento 1','Elemento 2','Elemento 3','Elemento 4']
print(listaElementos)

if 'Elemento 1' in listaElementos:
    print('El elemento está en la lista')

for item in listaElementos:     # Recorre y muestra cada elemento
    print(item)

print(f'Elemento {listaElementos.pop(0)} eliminado con éxito')  # Quita y devuelve índice 0 -> 'Elemento 1'
# listaElementos.remove('Elemento 1')  # Quita por valor (primera coincidencia); produciría error si no existe
print(listaElementos)           # Tras pop -> ['Elemento 2','Elemento 3','Elemento 4']

del listaElementos[2]           # Borra por índice (aquí borra 'Elemento 4')
# Resultado final -> ['Elemento 2','Elemento 3']
