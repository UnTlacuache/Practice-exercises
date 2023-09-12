function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

var text = prompt("Introduzca una cadena de texto:");

var reversedText = reverseString(text);
console.log("Cadena invertida: " + reversedText);
