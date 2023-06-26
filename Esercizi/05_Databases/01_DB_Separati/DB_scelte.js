const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.db');
const operation = "1";

switch (operation) {
    case "1": Select(); break;
    case "2": Delete(); break;
    case "3": Update(); break;
    default: console.log('Invalid operation!'); break;
}

function Select() {

    db.all('SELECT * FROM mytable', (err, rows) => {
        if (err) {
            console.error(err.message);
        }

        rows.forEach(row => {
            console.log(row.name, row.age, row.city);
        });
    });
    db.close();
}


function Delete() {
    const id = 1;
    db.run(`DELETE FROM mytable WHERE rowid = ${id}`, err => {
        if (err) {
            console.error(err.message);
        }
        console.log(`Dato con id ${id} eliminato correttamente!`);
    });
    db.close();
}



function Update() {
    const id = 1;
    const newAge = 40;
    db.run(`UPDATE mytable SET age = ${newAge} WHERE rowid = ${id}`, err => {
        if (err) {
            console.error(err.message);
        }
        console.log(`Dato con id ${id} aggiornato correttamente!`);
    });
    db.close();
}








/*


const sqlite3 = require('sqlite3').verbose(); 

const db = new sqlite3.Database('mydb.db'); 

const input = "2";

switch (input) { 
    case "1":
        readTable();
        break;
    case "2":
        updateAge(1, 24);            
        break;
    case "3":
        deleteRecord(3);
        break;
    default:
        console.log('Operazione non valida.');
        break;        
}

//db.close(); 

function readTable() {
    db.all('SELECT * FROM mytable', (err, rows) => {

        if (err) {
            console.error(err.message);
        }
    
        rows.forEach(row => {
            console.log(row.name, row.age, row.city);
        });
    
    });
}

function updateAge(id, newAge) {
    db.run(`UPDATE mytable SET age = ${newAge} WHERE rowid = ${id}`, err => {
    
        if (err) {
            console.error(err.message);
        }
    
        console.log(`Dato con id ${id} aggiornato correttamente!`);
    
    });
}

function deleteRecord(id) {
    db.run(`DELETE FROM mytable WHERE rowid = ${id}`, err => {

        if (err) {
            console.error(err.message);
        }
    
        console.log(`Dato con id ${id} eliminato correttamente!`);
    });
}



*/