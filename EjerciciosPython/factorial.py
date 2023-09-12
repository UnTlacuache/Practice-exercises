def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

num = int(input("Introduzca un número entero no negativo: "))

if num < 0:
    print("El factorial no está definido para números negativos.")
else:
    result = factorial(num)
    print(f"El factorial de {num} es {result}")
