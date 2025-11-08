# Creacion de diccionario con tres claves: Nombre, Prioridad y elementos,  y sus valores separados por :
informe = {'nombre': "informe ventas", 'prioridad': 'alta',
           'elementos': ['cabecera', 'contenido', 'totales']}

# Implementamos una nueva clave valor para el diccionario y borramos la clave y sus valores de Prioridad
informe["cliente"] = "Universidad Europea"
del (informe["prioridad"])

# Borrado  y obtenemos su valor de forma segura
print(f'eliminado el elemento {informe.pop("elementos")}')

# Recorremos los valores de informe, "no las claves" y cogemos sus elementos a imprimir(i)
for i in informe.values():
    print(i)

# devuelve None si no existe (o un valor por defecto)
informe.get("nombree")

# Acceso a una clave existente. Si no existe lanzaria KeyError
print(informe["nombre"])

# Creacion de una list, con la ultima clave vacia
lista = ["ventas", "finanzas", "marketing", ""]
# Construción de dict desde iterable, cada string se interpreta como un par (clave, valor) de dos caracteres:
listaDict = dict(["a1", "b2", "c3", "d4"])


print(type(informe))
print(type(lista))
print(type(listaDict))

print(informe)
print(lista)
print(listaDict)