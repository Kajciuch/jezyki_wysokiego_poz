/* ZADANIE 2. BLOKUJĄCE I NIEBLOKUJĄCE WYWOŁANIA. */

const fs = require("fs"); 
const data = fs.readFileSync('package.json'); 

console.log("Początek skryptu."); 
console.log(data.toString()); 
console.log("Koniec skryptu."); 

/* wynik:

Początek skryptu.
{
  "name": "lab1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Kajciuch",
  "license": "ISC"
}

Koniec skryptu.

*/