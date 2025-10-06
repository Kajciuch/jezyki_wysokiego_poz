/* ZADANIE 4. NPM */

const S = require("string");

console.log("Przykłady działania pakietu 'string':");

let txt = S("   Hej, tu Kaja!   ");
console.log("Oryginał:", txt.s);
console.log("Trimowane:", txt.trim().s);
console.log("Na duże litery:", txt.trim().toUpperCase().s);
console.log("Na małe litery:", txt.trim().toLowerCase().s);
console.log("Czy zaczyna się od 'Cześć':", txt.startsWith("Cześć"));
