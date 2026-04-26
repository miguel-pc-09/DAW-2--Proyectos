"""  Operadores aritméticos
    + Suma            -> Suma aritmética entre dos operadores
    - Resta           -> Resta aritmética entre dos operadores
    * Multiplicación  -> Multiplicación aritmética entre dos operadores
    / División        -> División aritmética entre dos operadores. En este caso hay que tener en cuenta que la división entre dos números enteros es un número entero
    % Resto           -> Resto aritmético entre dos operadores. Se trata del resto de la división entre dos números
    ** Potencia       -> Potencia aritmética de la base y el exponente
    // División entera """
    
# Operadores aritméticos binarios
a= 10
b = 3
suma = a + b # suma: 13
resta = a - b # resta: 7
multiplicacion = a * b # multiplicación: 30
division = a / b # división: 3.3333333333333335 (periodo en este caso float)
division_entera = a // b # división entera: 3
modulo = a % b # Módulo: 1
potencia = a ** b # potencia: 1000

print(suma)
print(resta)
print(multiplicacion)
print(division)
print(division_entera)
print(modulo)
print(potencia)


""" Operadores de comparacion  """

""" > Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
== Igual que
!= Diferente que """

# Operadores de comparación
a = 10
b = 5
igual = a == b # ¿a es igual a b? → False
diferente = a != b # ¿a es distinto de b? → True
mayor_que = a > b # ¿a es mayor que b? → True
menor_que = a < b # ¿a es menor que b? → False
mayor_o_igual = a >= b # ¿a es mayor o igual que b? → True
menor_o_igual = a <= b # ¿a es menor o igual que b? → False

diferente = a != b # ¿a es distinto de b? → True
mayor_que = a > b # ¿a es mayor que b? → True
menor_que = a < b # ¿a es menor que b? → False
mayor_o_igual = a >= b # ¿a es mayor o igual que b? → True
menor_o_igual = a <= b # ¿a es menor o igual que b? → False

""" and -> Obtiene como resultado true todas las condiciones de la sentencia son verdades. En caso contrario el resulta es false. A diferencia del operador & es que si la primera condicion es false el resto no se evalúa.
    or -> Obtiene como resultado true si una dfe las condiciones de la sentencia es verdaderas. En caso contrario, el resultado es false. A diferencia del operador & es que si la primera condicion es true el resto no se evalúa.
    not -> obrtiene el valor boolerano inverso del booleano indicado. """
    
# Operadores lógicos
a = True
b = False
resultado_and = a and b # AND lógico: True si ambos son True
resultado_or = a or b # OR lógico: True si al menos uno es True
resultado_not_a = not a # NOT lógico: invierte el valor de a

""" Ejercicio: Imagina que tienes dos jugadores que introducen sus puntuaciones. El programa
debe:
1. Pedir el nombre y la puntuación de cada jugador.
2. Mostrar operaciones aritméticas entre las puntuaciones (suma, diferencia, etc.).
3. Comparar las puntuaciones y mostrar los resultados (==, >, <, etc.). """

nombre1 = input("Introduce tu nombre jugador 1.")
jugador1 = int(input("Introduce tu puntuacion jugador 1."))
nombre2 = input("Introduce tu nombre jugador 2.")
jugador2 = int(input("Introduce tu puntuacion jugador 2."))

print("La diferencia de las dos puntuaciones es: ", jugador1 - jugador2)
print("La suma de las dos puntuaciones es: ", jugador1 + jugador2)
print("La multiplicacion de las dos puntuaciones es: ", jugador1 * jugador2)
print("La division de las dos puntuaciones es: ", jugador1 / jugador2)
print("La potencia de las dos puntuaciones es: ", jugador1 ** jugador2)
print("El modulo de las dos puntuaciones es: ", jugador1 % jugador2)

print("El jugador 1 es el ganador? ", jugador1 > jugador2)
print("El jugador 2 es el ganador? ", jugador2 > jugador1)
print("El jugador 1 es el ganador? ", jugador1 >= jugador2)
print("El jugador 2 es el ganador? ", jugador2 >= jugador1)
print("El jugador 1 es el ganador? ", jugador1 < jugador2)
print("El jugador 2 es el ganador? ", jugador2 < jugador1)
print("El jugador 1 es el ganador? ", jugador1 <= jugador2)
print("El jugador 2 es el ganador? ", jugador2 <= jugador1)
