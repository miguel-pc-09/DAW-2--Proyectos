# 04_args_y_kwargs.py
# Uso de *args y **kwargs
# Basado en los ejemplos del PDF:
#   - calculo_media(*notas)
#   - importar_usuario(**kwargs)
#   - suma_mixta(*args, **kwargs)


def calculo_media(*notas):
    # NOTA: *notas recoge todos los parámetros posicionales
    # en una TUPLA. No sé cuántos serán, y no hace falta.
    media = 0.0
    print(f"Procedo a calcular la media de {len(notas)} notas")

    for n in notas:
        media += n

    # Evito dividir entre 0 si no me han pasado ninguna nota.
    if len(notas) > 0:
        media /= len(notas)
        print(f"La media obtenida es de: {media}")
    else:
        print("No se han pasado notas, no puedo calcular la media.")


def importar_usuario(**kwargs):
    # NOTA: **kwargs recoge parámetros NOMBRADOS
    # en un DICCIONARIO: clave = nombre del parámetro, valor = dato.
    print("Los datos pasados del usuario son:")
    for key, value in kwargs.items():
        print(f"{key}: {value}")


def suma_mixta(*args, **kwargs):
    # Ejemplo del PDF donde mezcla *args y **kwargs.
    suma = 0
    for n in args:
        suma += n

    print(f"La suma de los argumentos posicionales es: {suma}")

    # Recorro los kwargs para mostrar información extra
    for key, value in kwargs.items():
        print(f"{key}: {value}")


if __name__ == "__main__":
    # Pruebo calculo_media con diferentes cantidades de notas
    calculo_media(1, 5, 7, 3)
    print("-" * 40)
    calculo_media(4, 9, 6)
    print("-" * 40)
    calculo_media()  # caso sin notas

    print("=" * 60)

    # Pruebo importar_usuario con datos nombrados
    importar_usuario(nombre="Juan", apellido="Gomez", edad=25, ciudad="Madrid")
    print("=" * 60)

    # Pruebo suma_mixta como en el PDF
    suma_mixta(
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        proyecto="Sumatorio", unidad="2", curso="python"
    )
