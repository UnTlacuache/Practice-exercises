function isPalindrome(word) {
    word = word.replace(/ /g, "").toLowerCase();
    
    var reversedWord = word.split("").reverse().join("");
    
    return word === reversedWord;
}

var inputWord = prompt("Introduzca una palabra:");

if (inputWord && inputWord.trim() !== "") {
    if (isPalindrome(inputWord)) {
        console.log("'" + inputWord + "' es un palíndromo.");
    } else {
        console.log("'" + inputWord + "' no es un palíndromo.");
    }
} else {
    console.log("Entrada inválida. Por favor introduce una palabra.");
}
