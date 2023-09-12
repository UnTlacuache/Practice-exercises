function sumOfNaturals(N) {
    if (N < 1) {
        return "N debe ser un número entero positivo.";
    }
    
    var sum = 0;
    for (var i = 1; i <= N; i++) {
        sum += i;
    }
    
    return sum;
}

var N = parseInt(prompt("Introduzca un número entero positivo (N):"));

if (!isNaN(N) && N > 0) {
    var result = sumOfNaturals(N);
    console.log("La suma de los primeros " + N + " números naturales es: " + result);
} else {
    console.log("Entrada inválida. Por favor ingrese un número entero positivo.");
}
