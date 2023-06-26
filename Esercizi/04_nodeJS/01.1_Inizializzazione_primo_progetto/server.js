const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Ciao, mondo!');
});

app.get('/about', function (req, res) {
    res.send('Stai in abbout');
});

app.get('/about/wow', function (req, res) {
    res.send('Stai in wow');
});

app.listen(3000, function (){
    console.log('Il server è in ascolto sulla porta 3000!');
});
