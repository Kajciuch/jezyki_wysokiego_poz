const fs = require("fs"); 

console.log("Początek skryptu."); 

fs.readFile('package.json', function (err, data) { 
    if (err) return console.error(err); 
    console.log(data.toString()); }); 

console.log("Koniec skryptu."); 

/* wynik:

Początek skryptu.
Koniec skryptu.
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


*/