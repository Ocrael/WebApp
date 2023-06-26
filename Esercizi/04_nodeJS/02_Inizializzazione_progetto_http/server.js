const http = require('http'); // costante, costruttore che istanzia oggetto server

const server = http.createServer((req, res) => { // oggetto http e metodo createServer, richiede e restituisce al server
    if (req.url === '/') // effettua richiesta di un url "/", che rimanderà a pagina
    {
        res.writeHead(200, { 'Content-type': 'text/plain ; charset=UTF-8' });
        res.end('Benvenuto nella mia applicazionè!');
    }
    else if (req.url === '/about')
    {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Questa è la pagina "About"!');
    }
    else 
    {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Pagina non trovata!');
    }
});

server.listen(3000, () => {console.log('Il server è in ascolto sulla porta 3000!');});
