/* ZADANIE 1. TESTUJEMY ASYNCHRONICZNOŚĆ */

const wait = 3000; 
console.log("Początek skryptu..."); 
setTimeout(function(){ 
    console.log("Upłynęły minimum 3 sek...") 
}, wait); 
console.log("koniec skryptu...");

/* wynik:
Początek skryptu...
koniec skryptu...
Upłynęły minimum 3 sek... */

/*program, w momencie gdy dotarł do instrukcji setTimeout() 
nie czekał aż miną 3 sekundy, 
ale zlecił tej funkcji odczekanie tych 3 sekund, 
wykonanie callbacka i wrócenie z wynikiem. 
Sam natomiast wykonał kolejną instrukcję, 
czyli console.log(„koniec skryptu...”);. 
Kiedy setTimeout() wrócił do głównego wątku naszego programu z wynikiem, 
wtedy został wykonany. */