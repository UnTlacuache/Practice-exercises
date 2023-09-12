function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

var celsius = parseFloat(prompt("Introduzca la temperatura en grados Celsius:"));

if (!isNaN(celsius)) {
    var fahrenheit = celsiusToFahrenheit(celsius);
    console.log(celsius + " grados centígrados es igual a    " + fahrenheit + " grados Fahrenheit.");
} else {
    console.log("Entrada inválida. Por favor ingrese un número valido.");
}
