# 05_retorno_de_funciones.py
# Resumen Uso del retorno en funciones


def procesar_informe(*datos):
    # NOTA: uso *datos para aceptar un número variable de argumentos.
    print("Los datos se han recibido correctamente")

    
    if len(datos) == 2:
        # Si me pasan exactamente dos datos, construyo un texto con nombre y apellido.
        return f"Nombre: {datos[0]}\nApellido: {datos[1]}"
    elif len(datos) > 2:
        # Si me pasan más de dos datos, considero que es "cantidad incorrecta".
        return "Cantidad de datos incorrecta"
    else:
        # Si no se han recibido datos suficientes, aviso.
        return "No se han recibido datos"


if __name__ == "__main__":
    # Ejemplo del PDF:
    resultado_ok = procesar_informe("Borja", "Martinez")
    print(resultado_ok)
    print("-" * 40)

    resultado_muchos = procesar_informe("Borja", "Martinez", 30)
    print(resultado_muchos)
    print("-" * 40)

    resultado_pocos = procesar_informe()
    print(resultado_pocos)
