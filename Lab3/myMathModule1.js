function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return 'Błąd: dzielenie przez 0!';
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.power = power;
