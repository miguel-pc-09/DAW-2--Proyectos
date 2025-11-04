from typing import List, Dict

ARCHIVO_INVENTARIO = "inventario.txt"


Producto = Dict[str, str]


def crear_inventario_inicial() -> List[Producto]:
    """
    Crea una lista de productos inicial.
    Se usa SOLO si no existe el archivo inventario.txt.
    """
    # Cada producto tiene: nombre, precio (como texto) y cantidad (como texto).
    return [
        {"nombre": "Portatil", "precio": "799.99", "cantidad": "5"},
        {"nombre": "Telefono", "precio": "299.99", "cantidad": "10"},
        {"nombre": "Tablet", "precio": "199.99", "cantidad": "0"},
        {"nombre": "Auriculares", "precio": "49.90", "cantidad": "25"},
    ]


def guardar_inventario(productos: List[Producto], ruta: str = ARCHIVO_INVENTARIO) -> None:
    """
    Guarda la lista de productos en un archivo de texto.
    Formato de cada línea: nombre|precio|cantidad
    """
    # Abrimos el archivo en modo escritura: sobreescribe el contenido anterior.
    with open(ruta, "w", encoding="utf-8") as f:
        for p in productos:
            linea = f"{p['nombre']}|{p['precio']}|{p['cantidad']}\n"
            f.write(linea)


def cargar_inventario(ruta: str = ARCHIVO_INVENTARIO) -> List[Producto]:
    """
    Carga productos desde el archivo.
    - Si NO existe, lo crea con datos iniciales y devuelve esa lista.
    - Si existe, lee línea a línea y construye los productos.
    """
    try:
        productos: List[Producto] = []
        with open(ruta, "r", encoding="utf-8") as f:
            for linea in f:
                linea = linea.strip()       # quitamos saltos de línea/espacios
                if not linea:
                    continue                # saltamos líneas vacías
                partes = linea.split("|")   # separamos por "|"
                if len(partes) != 3:
                    # Si la línea no tiene exactamente 3 partes, la ignoramos.
                    continue
                nombre, precio, cantidad = partes
                productos.append({"nombre": nombre, "precio": precio, "cantidad": cantidad})
        return productos
    except FileNotFoundError:
        # Si el archivo no existe, lo creamos con un inventario por defecto.
        productos_iniciales = crear_inventario_inicial()
        guardar_inventario(productos_iniciales, ruta)
        return productos_iniciales


def mostrar_inventario(productos: List[Producto]) -> None:
    """
    Muestra el inventario en forma de tabla sencilla.
    """
    print("\n=== INVENTARIO ===")
    print(f"{'Nº':<3} {'Nombre':<15} {'Precio (€)':>12} {'Cantidad':>10}")
    print("-" * 45)

    for i, p in enumerate(productos, start=1):
        # Convertimos a tipos numéricos con control de errores
        try:
            precio = float(p["precio"])
        except ValueError:
            precio = 0.0
        try:
            cantidad = int(p["cantidad"])
        except ValueError:
            cantidad = 0

        print(f"{i:<3} {p['nombre']:<15} {precio:>12.2f} {cantidad:>10d}")


def valor_total_inventario(productos: List[Producto]) -> float:
    """
    Devuelve la suma de (precio * cantidad) de todos los productos.
    """
    total = 0.0
    for p in productos:
        try:
            precio = float(p["precio"])
        except ValueError:
            precio = 0.0
        try:
            cantidad = int(p["cantidad"])
        except ValueError:
            cantidad = 0
        total += precio * cantidad
    return total


def productos_agotados(productos: List[Producto]) -> List[Producto]:
    """
    Devuelve los productos cuya cantidad es 0.
    """
    agotados: List[Producto] = []
    for p in productos:
        try:
            cantidad = int(p["cantidad"])
        except ValueError:
            cantidad = 0
        if cantidad == 0:
            agotados.append(p)
    return agotados


def actualizar_cantidad(productos: List[Producto]) -> None:
    """
    Permite elegir un producto por número y cambiar su cantidad.
    Luego guarda el inventario actualizado en el archivo.
    """
    # Primero mostramos para ver los índices
    mostrar_inventario(productos)

    # Elegimos el producto por su número (1..n)
    try:
        numero = int(input("\nIntroduce el Nº del producto que quieres actualizar: "))
        indice = numero - 1  # convertimos a índice de lista (0..n-1)
        if indice < 0 or indice >= len(productos):
            print("Número fuera de rango. No se ha realizado ningún cambio.")
            return
    except ValueError:
        print("Entrada no válida. Debes escribir un número.")
        return

    # Pedimos la nueva cantidad
    try:
        nueva_cantidad = int(input("Introduce la nueva cantidad (entero >= 0): "))
        if nueva_cantidad < 0:
            print("La cantidad no puede ser negativa.")
            return
    except ValueError:
        print("Entrada no válida. Debes escribir un número entero.")
        return

    # Actualizamos en memoria (como texto)
    productos[indice]["cantidad"] = str(nueva_cantidad)

    # Guardamos toda la lista en el archivo
    guardar_inventario(productos, ARCHIVO_INVENTARIO)
    print("Cantidad actualizada y guardada correctamente.\n")


def menu() -> None:
    """
    Muestra un menú y gestiona las opciones hasta que el usuario sale.
    """
    # Cargamos (o creamos) el inventario al empezar
    productos = cargar_inventario(ARCHIVO_INVENTARIO)

    while True:
        print("\n===== MENÚ INVENTARIO =====")
        print("1) Mostrar inventario")
        print("2) Calcular valor total del inventario")
        print("3) Ver productos agotados")
        print("4) Actualizar cantidad de un producto")
        print("5) Salir")

        opcion = input("Elige una opción (1-5): ").strip()

        if opcion == "1":
            mostrar_inventario(productos)

        elif opcion == "2":
            total = valor_total_inventario(productos)
            print(f"\nValor total del inventario: {total:.2f} €")

        elif opcion == "3":
            agotados = productos_agotados(productos)
            if not agotados:
                print("\nNo hay productos agotados.")
            else:
                print("\n=== PRODUCTOS AGOTADOS ===")
                for p in agotados:
                    print(f"- {p['nombre']} (cantidad: {p['cantidad']})")

        elif opcion == "4":
            actualizar_cantidad(productos)
            # Tras actualizar, recargamos del archivo por si se modificó fuera
            productos = cargar_inventario(ARCHIVO_INVENTARIO)

        elif opcion == "5":
            print("Saliendo del programa. ¡Hasta luego!")
            break

        else:
            print("Opción no válida. Intenta de nuevo (1-5).")


# Punto de entrada: se ejecuta solo si lanzamos este archivo directamente.
if __name__ == "__main__":
    menu()
