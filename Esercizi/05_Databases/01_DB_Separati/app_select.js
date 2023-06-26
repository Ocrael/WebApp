const sqlite3 = require('sqlite3').verbose(); 

const db = new sqlite3.Database('mydb.db');

db.all('SELECT * FROM mytable', (err, rows) => {
    if (err) {
        console.error(err.message);
    }

    rows.forEach(row => {
        console.log(row.name, row.age, row.city);
    });
});

db.close();