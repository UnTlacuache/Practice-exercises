def find_second_largest(numbers):
    if len(numbers) < 2:
        return None
    
    numbers.sort()
    
    return numbers[-2]

numbers = [12, 45, 2, 41, 31, 10, 8, 6]

second_largest = find_second_largest(numbers)

if second_largest is not None:
    print("El segundo elemento más grande de la lista es:", second_largest)
else:
    print("La lista no contiene un segundo elemento más grande.")
