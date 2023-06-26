const fs = require('fs'); // costante fs (file system) che serve a 

fs.readFile('notes.txt', 'utf-8', (err, data) =>
{
    if (err) throw err;
    console.log(data)
}
);


fs.appendFile('notes.txt', '\n4- Quarta nota', (err) =>
{
    if (err) throw err;
    console.log('Nota aggiunta con successo!');
}
);
