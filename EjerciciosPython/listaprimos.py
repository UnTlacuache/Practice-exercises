def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(num ** 0.5) + 1, 2):
        if num % i == 0:
            return False
    return True

def generate_primes_in_range(start, end):
    prime_list = []
    for num in range(start, end + 1):
        if is_prime(num):
            prime_list.append(num)
    return prime_list

start = int(input("Introduzca el número inicial: "))
end = int(input("Introduzca el número final: "))

prime_numbers = generate_primes_in_range(start, end)

if prime_numbers:
    print("Números primos en el rango de", start, "a", end, "son:")
    print(prime_numbers)
else:
    print("No se encontraron números primos en el rango de", start, "a", end)
