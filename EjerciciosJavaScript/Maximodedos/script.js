function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

var num1 = parseFloat(prompt("Introduce el primer número:"));
var num2 = parseFloat(prompt("Introduce el segundo número:"));

if (!isNaN(num1) && !isNaN(num2)) {
    var maximum = findMaximum(num1, num2);
    console.log("El máximo de " + num1 + " y " + num2 + " es " + maximum);
} else {
    console.log("Entrada inválida. Por favor ingrese números válidos.");
}
