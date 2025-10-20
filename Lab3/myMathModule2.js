
class MyMathModule {
    constructor() {}

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) return 'Błąd: dzielenie przez 0!';
        return a / b;
    }

    power(a, b) {
        return Math.pow(a, b);
    }
}

module.exports = MyMathModule;
