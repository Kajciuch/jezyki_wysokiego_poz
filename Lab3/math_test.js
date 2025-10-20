const readline = require('readline');
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Kalkulator matematyczny ===");
console.log("Dostępne operacje: add, subtract, multiply, divide, power");

rl.question("Podaj pierwszą liczbę: ", (num1) => {
    rl.question("Podaj drugą liczbę: ", (num2) => {
        rl.question("Jaką operację chcesz wykonać? ", (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            console.log("\n--- Wersja 1 (exports) ---");
            if (math1[operation]) {
                console.log(`Wynik: ${math1[operation](a, b)}`);
            } else {
                console.log("Nieznana operacja!");
            }

            console.log("\n--- Wersja 2 (obiektowa) ---");
            if (typeof math2[operation] === 'function') {
                console.log(`Wynik: ${math2[operation](a, b)}`);
            } else {
                console.log("Nieznana operacja!");
            }

            rl.close();
        });
    });
});

rl.on("close", function() {
    console.log("\nDo zobaczenia!");
    process.exit(0);
});
