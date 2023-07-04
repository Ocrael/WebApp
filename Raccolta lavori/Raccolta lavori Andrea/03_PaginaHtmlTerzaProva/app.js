const express = require('express'); 
const app = express(); 

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.post('/submit', (req, res) =>
{
    const { name, email, mezzo, comment, checkbox } = req.body;

    console.log(`Nome: ${name}, Email: ${email}, Mezzo: ${mezzo}, Comment: ${comment}, Checkbox: ${checkbox}`);

    res.send(`Benvenuto, ${name}. Hai scelto ${mezzo} come metodo di trasporto. Invieremo gli aggiornamenti al seguente indirizzo email: ${email}. Grazie per aver scelto Broonoo!`);
});

app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000!');
});
