function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

var num = parseInt(prompt("Introduzca un número entero positivo:"));

if (!isNaN(num) && num > 0) {
    if (isPrime(num)) {
        console.log(num + " es un número primo.");
    } else {
        console.log(num + " no es un número primo.");
    }
} else {
    console.log("Entrada inválida. Por favor ingrese un número entero positivo.");
}
