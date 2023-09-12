function factorialIterative(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

var num = parseInt(prompt("Introduzca un número entero no negativo:"));

if (!isNaN(num) && num >= 0) {
    var result = factorialIterative(num);
    console.log("El factorial de " + num + " es " + result);
} else {
    console.log("Entrada inválida. Por favor ingrese un número entero no negativo.");
}
