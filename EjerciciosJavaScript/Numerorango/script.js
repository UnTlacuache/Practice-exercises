function getRandomNumberInRange(min, max) {
    if (min >= max) {
        return "Rango no válido. 'min' debe ser menor que 'max'.";
    }
    
    var randomNum = Math.random() * (max - min) + min;
    
    return randomNum;
}

var minRange = parseFloat(prompt("Introduzca el valor mínimo del rango:"));
var maxRange = parseFloat(prompt("Introduzca el valor máximo del rango:"));

if (!isNaN(minRange) && !isNaN(maxRange)) {
    var randomNumber = getRandomNumberInRange(minRange, maxRange);
    console.log("Número aleatorio en el rango [" + minRange + ", " + maxRange + "]: " + randomNumber);
} else {
    console.log("Entrada inválida. Por favor ingrese números válidos para el rango.");
}
