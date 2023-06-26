const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 
app.use(express.static('public'));

app.post('/submit', (req, res) => 
{
    const { name, email, checkbox, textarea, select } = req.body;

    console.log(`Nome: ${name}, Email: ${email} Checkbox : ${checkbox}, Select : ${select}, Textarea : ${textarea}`);

    res.send(`Dati ricevuti! Nome: ${name}, Email: ${email}, Checkbox : ${checkbox}, Select : ${select}, Textarea : ${textarea}`);
});



app.listen(3000, () => {
    console.log('listening on http://localhost:3000')
});
