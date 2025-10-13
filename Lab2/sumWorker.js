const { parentPort, workerData } = require('worker_threads');

//odebranie danych od procesu głównego
const limit = workerData.limit;

//proste obliczenia (ciężka pętla CPU)
let sum = 0;
for (let i = 1; i<=limit; i++){
    sum += i;
}

//odesłanie wyniku do procesu głównego
parentPort.postMessage(sum);