numbers_str = input("Ingrese una lista de números separados por espacios: ")

numbers_list = [float(x) for x in numbers_str.split()]

if not numbers_list:
    print("La lista está vacía.")
else:
    minimum = min(numbers_list)
    maximum = max(numbers_list)

    
    print("Valor mínimo:", minimum)
    print("Valor máximo:", maximum)
