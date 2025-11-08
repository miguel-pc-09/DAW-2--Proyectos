# Creamos una tupla vacía.
# Las tuplas son estructuras inmutables (no se pueden modificar después de crearlas).
lista = tuple()

# Creamos una tupla con varios números, incluyendo valores repetidos.
# A diferencia de las listas, una tupla se define entre paréntesis.
listaCosas = (1, 2, 3, 4, 5, 6, 1, 2, 1, 1, 4)

# index(valor) devuelve la posición (índice) donde aparece por primera vez ese valor.
# En este caso, el número 2 está por primera vez en la posición 1 (empezando desde 0).
print(listaCosas.index(2))

# count(valor) cuenta cuántas veces aparece ese valor dentro de la tupla.
# Aquí queremos saber cuántas veces aparece el número 1.
print(listaCosas.count(1))