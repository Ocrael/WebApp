const express = require('express');
const bodyParser = require('body-parser');
const jwt =require ('jsonwebtoken')
const users = require('./users.json');

const app = express();
app.use(bodyParser.json()); // Confronta il file .json

const SECRET_KEY = 'your-secret-key'; // Replace this with a more secure key in a production environment

//Login route
app.post ('/login', (req, res) =>{  
    const {username, password} = req.body;
    const user = users.users.find(
        (user) => user.username === username && user.password ===password
    );

    if (user) {
        //Generate and sign the JWT
        const token = jwt.sign({username:user.username}, SECRET_KEY,{
            expiresIn:'1h',
        });

        res.json({message:'Autenticazione riuscita!', token});
    } else {
        res.status(401).json ({message:'Credenziali invalide!'});
    }
});

//MiddLeware che serve a controllare l'autorizzazione
function isAuthenticated (req, res, next) {
    const token =req.headers['authorization'];
    if(token) {
        jwt.verify(token, SECRET_KEY,(err, decoded) =>{
            if (err) {
                return res.status(401).json({message:'Accesso non autorizzato!'}); // Quando il token risulta errato
            }
            req.decoded = decoded;
            next(); // Quando il token fornito risulta valido
        });
    } else {
        res.status(401).json({message:'Nessun token trovato'});
    }
}

app.get('/protected', isAuthenticated, (req, res)=> {
    res.json({ message: 'Accesso consentito!' });
});


const port = process.env.PORT || 3000; // Apre la connessione tra il terminale e il browser
app.listen(port, () => console.log(`Server in ascolto sulla porta ${port}!`));






//curl -X POST -H "Content-Type: application/json" -d '{"username": "Mario", "password": "password"}' http://localhost:3000/protected

// const SECRET_KEY = 'your-secret-key';
 




