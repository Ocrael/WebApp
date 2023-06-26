const fs = require('fs'); // come nell'esercizio precedente, istanziamo oggetto fs

fs.writeFile('message.txt', 'Ciao, mondooooòòò!', (err) => { // attraverso il metodo " writeFile " scrivo ciò che verrà contenuto nel file di testo
    if (err) throw err; // gestione delle eccezioni
    console.log('Il file è stato creatoooòòò!!!'); // log che conferma la creazione del files
});