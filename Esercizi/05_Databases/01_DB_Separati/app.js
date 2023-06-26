const sqlite3 = require('sqlite3').verbose(); // il metodo "verbose" abilita i messaggi di debug

const db = new sqlite3.Database('mydb.db'); // istanziamo un nuovo oggetto "Database" che rappresenta il database SQLite denominato mydb.db

db.serialize(() => { // la funzione "serialize()"" viene utilizzata per garantire che tutte le query vengano eseguite in sequenza una dopo l'altra
    // all'interno della funzione serialize() viene eseguita una query SQL per creare una nuova tabella denominata mytable, con tre colonne name (TEXT), age (INTEGER) e city (TEXT)
    db.run('CREATE TABLE mytable (name TEXT, age INTEGER, city TEXT)');
const stmt = db.prepare(`INSERT INTO mytable VALUES (?, ?, ?)`); // viene preparata una query SQL che inserisce le tre righe nella tabella mytable, con valori "Mario", 30, "Roma" per la prima riga ecc.
stmt.run('Mario', 30, 'Roma');
stmt.run('Luigi', 25, 'Napoli');
stmt.run('Giovanni', 35, 'Milano');
stmt.finalize(); // viene chiamato il metodo "finalize()" per completare l'inserimento dei dati nella tabella e viene stampato un messaggio di conferma sull'inserimento dati

console.log(`Dati inseriti correttamente!`);
});

db.close(); // serve per chiudere la connessione al database