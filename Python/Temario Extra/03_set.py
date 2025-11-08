# Creamos un conjunto (set) con tres elementos.
# Importante: Los sets no mantienen orden y no permiten elementos repetidos.
elementos = {"elemento 1", "elemento 2", "elemento 3"} 

# Agregamos un nuevo elemento al conjunto.
# Si ya existiera, no se duplicaría (los sets no permiten repetidos).
elementos.add("elemento adicional")

# Eliminamos un elemento concreto del conjunto.
# Si el elemento no existiera, .remove() daría error.
elementos.remove("elemento 1")

# Recorremos el conjunto e imprimimos cada elemento.
# El orden puede variar al imprimir, ya que los sets no tienen índice ni orden fijo.
for i in elementos:
    print(i)


# Creamos dos conjuntos numéricos.
conjunto1 = {1, 2, 3, 4, 5, 6, 7, 8}
conjunto2 = {4, 5, 9, 10, 11, 12}

# symmetric_difference() devuelve los elementos que están en uno u otro conjunto,
# pero NO en ambos. Es decir, excluye la intersección.
conjuntoResultante = conjunto1.symmetric_difference(conjunto2)

# Mostramos el resultado.
print(conjuntoResultante)