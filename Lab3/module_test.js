const currency1 = require('./currency1');
//const Currency = require('./currency2');
//const currency2 =  new Currency(constructorParameters);


console.log('50 dolarów kanadyjskich odpowiada następującej ilości złotych:');

console.log(currency1.canadianToPLN(50));

console.log('40 dolarów amerykańskich odpowiada następującej ilości złotych:');

console.log(currency1.USToPLN(40));

console.log('30 euro odpowiada następującej ilości złotych:');

console.log(currency1.EUToPLN(30));

console.log('20 koron duńskich odpowiada następującej ilości złotych:');

console.log(currency1.DKKToPLN(20));

console.log('10 jenów odpowiada następującej ilości złotych:');

console.log(currency1.JENToPLN(10));