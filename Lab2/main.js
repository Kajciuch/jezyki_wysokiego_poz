// main.js
const { Worker } = require('worker_threads');

function runWorker(limit) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const worker = new Worker('./sumWorker.js', {
      workerData: { limit }
    });

    worker.on('message', (result) => {
      const time = Date.now() - start;
      console.log(`✅ Worker (limit=${limit}) wynik: ${result}, czas: ${time} ms`);
      resolve();
    });

    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker zakończył się z kodem ${code}`));
    });
  });
}

async function main() {
  console.time('Całkowity czas');

  // Uruchom 4 workery równolegle
  await Promise.all([
    runWorker(10_000_000),
    runWorker(20_000_000),
    runWorker(30_000_000),
    runWorker(40_000_000)
  ]);

  console.timeEnd('Całkowity czas');
}

main();
