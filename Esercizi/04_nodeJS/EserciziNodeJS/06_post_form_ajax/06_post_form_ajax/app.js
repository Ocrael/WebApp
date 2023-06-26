const express = require('express'); 
const app = express(); 

// prerequisiti:
// npm install ajax
// npm install queryselector
// infilare files index.html e script.js nella cartella public

app.use(express.urlencoded({ extended: true})); // verifica che i valori conetnuti nel form non siano solo stringhe, ma valori
app.use(express.json()); // le info vengono inviate come array json e quindi devono essere deserializzate
app.use(express.static('public')); // express crea una rotta "publi" che serve i files statici

app.post('/submit', (req, res) => // /submit è la rotta alla quale viene inviato il moudulo
{
    const { name, email } = req.body;

    console.log(`Nome: ${name}, Email: ${email}`);

    res.send(`Dati ricevuti! Nome: ${name}, Email: ${email}`);
});

app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000!');
});
