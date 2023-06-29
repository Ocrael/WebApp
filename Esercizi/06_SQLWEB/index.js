const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const ejs = require('ejs');

const app = express();
const db = new sqlite3.Database('mydb.db');

// Crea la tabella se non esiste
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS mytable (name TEXT, password TEXT, address1 TEXT, address2 TEXT, city TEXT, state TEXT, age INTEGER, checkbox BOOLEAN)');
});

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs'); // Imposta EJS come motore di visualizzione

// Route per la pagina principale
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route per gestire il submit del form
app.post('/submit', (req, res) => {
    const { name, password, address1, address2, city, state, age, checkbox } = req.body;
    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    stmt.run(name, password, address1, address2, city, state, age, checkbox);
    stmt.finalize();
    res.send('Dati inseriti correttamente!');
});

//Aggiungere una pagina per la visualizzazione degli inserimenti    ejs
//Route per visualizzare i dati
app.get('/data', (req, res) => {
    db.all('SELECT * FROM mytable', (err, rows) => {
        if (err) {
            res.status(500).send('Errore nel recupero dei dati dal database');
        } else {
            res.render('data', { rows });
        }
    });
    });

    // Route per la pagina di modifica
app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/public/edit.html');
});

// Route per gestire la modifica dei dati
app.post('/edit', (req, res) => {
    const { id, newAge } = req.body;
    const stmt = db.prepare('UPDATE mytable SET age = ? WHERE rowid = ?');
    stmt.run(newAge, id, err => {
        if (err) {
            res.status(500).send('Errore nella modifica dei dati');
        } else {
            res.send(`Dato con id ${id} aggiornato correttamente!`);
        }
    });
    stmt.finalize();
});



// Route per la pagina di eliminazione
app.get('/delete', (req, res) => {
    res.sendFile(__dirname + '/public/delete.html');
});

// Route per gestire la modifica di eliminazione
app.post('/delete', (req, res) => {
    const { id } = req.body;
    const stmt = db.prepare('DELETE FROM mytable WHERE rowid = ?');
    stmt.run(id, err => {
        if (err) {
            res.status(500).send('Errore nell\'eliminazione del dato');
        } else {
            res.send(`Dato con id ${id} eliminato correttamente!`);
        }
    });
    stmt.finalize();
});

// Route per la pagina di login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});




// Route per gestire il login degli utenti
app.post('/login', (req, res) => {
    const { name, age } = req.body;
    const stmt = db.prepare('SELECT COUNT(*) AS count FROM mytable WHERE name = ? AND age = ?');
    stmt.get(name, age, (err, row) => {
        if (err) {
            res.status(500).send('Errore nel login');
        } else {
            if (row.count > 0) {
                res.send('Accesso riuscito!')
            } else {
                res.send('Credenziali non valide');
            }
        }
    });
    stmt.finalize();
});












/*
// Route per gestire il login degli utenti
app.post('/login', (req, res) => {
    const { name, age } = req.body;
    const stmt = db.prepare('SELECT COUNT(*) AS count FROM mytable WHERE name = ? AND age = ?');
    stmt.get(name, age, (err, row) => {
        if (err) {
            res.status(500).send('Errore nel login');
        } else {
            if (row.count > 0) {
                // Reindirizza l'utente a diverse pagine in base alle condizioni
                if (name === 'admin') {
                    res.redirect('/admin-page.html');
                } else if (age > 18) {
                    res.redirect('/premium-page.html');
                }
                else {
                    res.redirect('/user-page.html');
                }
            } else {
                res.send('Credenziali non valide');
            }
            }
    });
    stmt.finalize();
});
*/





// Avvia il server
app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});
