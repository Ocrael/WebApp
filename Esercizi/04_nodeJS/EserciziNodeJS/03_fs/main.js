const fs = require('fs'); // la funzione "require" ci permette di istanziare la costante "fs", necessaria per scrivere, leggere e modificare file system

fs.readFile('file.txt', (err, data) => { // metodo per leggere dati del file .txt
    if (err) throw err; // gestione eccezioni
    console.log(data.toString()); // serve a stampare nella console il file di testo
});