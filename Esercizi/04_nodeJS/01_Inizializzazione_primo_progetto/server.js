const express = require('express'); 
const app = express(); // dichiariamo una costante app, assegnato a quello che ci restituisce express, e tramite "app" richiamiamo funzionalità get e listen

app.get('/', function (req, res) { // richiama metodi: .get , .listen
    res.send('Ciao, mondoè!');
});

app.get('/about', function (req, res) {
    res.send('è About!');  // manderà la cosa espressa tra parentesi al server/porta 3000 Serve a scrivere testo 
});


app.listen(3000, function (){ // is used to bind and listen to the connections on the specified host and port.
    console.log('Il server è in ascolto sulla porta 3000!');
});


