function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        return "La base y la altura deben ser números positivos.";
    }
    
    var area = (base * height) / 2;
    
    return "El área del triángulo es: " + area;
}

var base = parseFloat(prompt("Introduce la base del triángulo:"));
var height = parseFloat(prompt("Introduce la altura del triángulo:"));

var result = calculateTriangleArea(base, height);
console.log(result);
