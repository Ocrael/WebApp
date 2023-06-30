const express = require('express');
const bodyParser = require('body-parser');
const jwt =require ('jsonwebtoken')
const sqlite3 = require('sqlite3').verbose();
// const users = require('./users.json'); <-- non prendo più i file dal json, ma da sqlite3
const db = new sqlite3.Database('./myDatabase.db', (err) => {if(err){ console.error(err.message);}
console.log('Connected to the myDatabase SQLite database.');});
const serveStatic = require('serve-static');
const app = express();

app.use(bodyParser.json());
app.use(serveStatic('public'));

const SECRET_KEY = 'your-secret-key'; //Replace this with a more secure key in a production environment

//Login route
app.post ('/login', (req, res) => {
    const {username, password} = req.body;
    
    db.get ('SELECT * FROM users WHERE username = ?', [username], (err, users) => {

    if (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'internal server error'});
        }

        if (user && user.password === password) {
            const token =  jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, {
                expiresIn: '1h', 
            });

            res.json({message: 'Authentication successful', token});
        }else{
            res.status(401).json({ message: 'Invalid credentials'});
        }
    });
    });

    // Riferimento al file json
    /*const user = users.users.find(
        (user) => user.username === username && user.password === password
    );
    */

    if (user) {
        //Generate and sign the JWT
        const token = jwt.sign({username:user.username,role:user.role}, SECRET_KEY,{
            expiresIn:'1h',
        });

        res.json({message:'Authentication successful', token});
    } else {
        res.status(401).json ({message:'Invalid credentials'});
    }


//MiddLeware to check authentication
function isAuthenticated (req, res, next) {
    const token =req.headers['authorization'];
    if(token) {
        jwt.verify(token, SECRET_KEY,(err, decoded) =>{
            if (err) {
                return res.status(401).json({message:'Unauthorized access'});
            }
            req.decoded = decoded;
            next();
        });
    } else {
        res.status(401).json({message:'No token provided'});
    }
}

//Authenticated route
app.get('/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'You have accessed protected content' });
});

// Middleware to check for admin role
function isAdmin(req, res) {
    if (req.decoded && req.decoded.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access forbidden: not an administrator' });
    }
}

// Admin route
app.get('/admin', isAuthenticated, (req, res) => {
    res.json({ message: 'Welcome to the admin area' });
});

// Logout route
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/index.html');
});


// Register route
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;

    db.run('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, role], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Internal server error' });
        }

        res.status(201).json({ message: 'User created successfully' });
    });
});


// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`))


// Closing connection
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
    });

    process.exit(0);
});