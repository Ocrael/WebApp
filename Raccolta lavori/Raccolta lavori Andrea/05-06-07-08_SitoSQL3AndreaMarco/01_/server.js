const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users.json');

const app = express();
app.use(bodyParser.json());


function isAuthenticated(req, res, next) {
    const { username, password } = req.body;
    const user = users.utente.find( // abbiamo istanziato una costante chiamata "user" che va a leggere il file "users.json"
    (user) => user.username === username && user.password === password 
    );

// accerta che user abbia i dati scritti nel file .json

if (user) { 
    next();
} else {
    res.status(401).json({message: 'Accesso NON consentito!'});
}
}


app.post('/protected', isAuthenticated, (req, res)=> {
    res.json({ message: 'Accesso consentito!' });
});


const port = process.env.PORT || 3000; // Apre la connessione tra il terminale e il browser
app.listen(port, () => console.log(`Server in ascolto sulla porta ${port}!`));






//curl -X POST -H "Content-Type: application/json" -d '{"username": "Mario", "password": "password"}' http://localhost:3000/protected
