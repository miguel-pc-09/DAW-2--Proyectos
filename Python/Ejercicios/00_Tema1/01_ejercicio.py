"""
Imagina que tienes dos jugadores que introducen sus puntuaciones. El programa debe. 
    1. Pedir el nombre y la puntuacion de cada jugador.
    2. Mostrar operaciones aritméticas entre las puntuaciones (Suma, diferencia, etc.)
    3. Comparar las puntuaciones y mostrar los resultados (== , > , < , etc.)
    4. Mostrar expresiones lógicas compuestas sobre quién tiene más puntos, si son iguales, etc.
    5. Mostrar todos los resultados como parte de un resumen divertido.
"""
# Pedir el nombre y la puntuacion de cada jugador.
nombre1 = input("Indica tu nombre jugador1: ")
puntuacion1 = int(input("Cual es tu puntuación: "))
nombre2 = input("Indica tu nombre jugador 2: ")
puntuacion2 = int(input("Cual es tu puntuación: "))

# Mostrar operaciones aritméticas entre las puntuaciones (Suma, diferencia, etc.)
suma = puntuacion1 + puntuacion2
print(f"La suma de las puntuaciones es: {suma}")

resta = puntuacion1 - puntuacion2
print(f"La resta de las puntuaciones es: {resta}")
multiplicacion = puntuacion1 * puntuacion2
print(f"La multiplicacion de las puntuaciones es: {multiplicacion}")
division = puntuacion1 / puntuacion2
print(f"La division de las puntuaciones es: {division}")
resto = puntuacion1 % puntuacion2
print(f"El resto de las puntuaciones es: {resto}")
potencia = puntuacion1 ** puntuacion2
print(f"La potencia de las puntuaciones es: {potencia}")

#Comparar las puntuaciones y mostrar los resultados (== , > , < , etc.)
igual = puntuacion1 == puntuacion2
print(f"Son iguales las puntuaciones: {igual}")
diferente = puntuacion1 != puntuacion2
print(f"Son diferentes las puntuaciones: {diferente}")
mayor_que = puntuacion1 > puntuacion2
print(f"Es mayor puntuacion 1 que 2: {mayor_que}")
menor_que = puntuacion1 < puntuacion2
print(f"Es menor puntuacion 1 que 2: {menor_que}")
mayor_igual = puntuacion1 >= puntuacion2
print(f"Es mayor o igual la puntuacion 1 que 2: {mayor_igual}")
menor_igual = puntuacion1 <= puntuacion2
print(f"Es menor o igual la puntuacion 1 que 2: {menor_igual}")

# Mostrar expresiones lógicas compuestas sobre quién tiene más puntos, si son iguales, etc.
resultado_and = puntuacion1 and puntuacion2
print(f"son iguales {resultado_and}")
resultado_or = puntuacion1 or puntuacion2
print("son iguales: ", resultado_or)
resultado_not = not puntuacion1, not puntuacion2

print(resultado_not)