numbers = input("Ingrese una lista de números separados por espacios: ").split()

numbers = [int(num) for num in numbers]

sorted_numbers = sorted(numbers)

print("Números ordenados en orden ascendente:", sorted_numbers)
