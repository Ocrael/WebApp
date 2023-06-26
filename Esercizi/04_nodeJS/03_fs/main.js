const fs = require('fs'); // instanziamo oggetto "fs"

fs.readFile('file.txt', (err, data) => { // metodo per leggere dati del file .txt
    if (err) throw err; // gestione eccezioni
    console.log(data.toString()); // serve a stampare nella console il file di testo
});