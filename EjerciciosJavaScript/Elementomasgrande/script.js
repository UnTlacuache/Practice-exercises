function findLargestElement(arr) {
    if (arr.length === 0) {
        return "La matriz está vacía.";
    }
    
    var largest = arr[0]; 
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    
    return largest;
}

var numbers = [12, 45, 2, 41, 31, 10, 8, 6];

var largestElement = findLargestElement(numbers);
console.log("El elemento más grande de la matriz es: " + largestElement);
