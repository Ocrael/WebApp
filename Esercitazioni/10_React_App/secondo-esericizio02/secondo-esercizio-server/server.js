const express = require('express');                  // Pomeriggio 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());  // pomeriggio, da aggiungere

// Dummy user data for demonstration
/* //Non viene utilizzata in questo caso perchè abbiamo il form di register.
const dummyUser = {
    username: 'user',
    password: 'password',
    name:'John Doe',
};
*/
const SECRET_KEY = 'mysecretkey';



//Simulated in-memory database

let users = [];

app.post('/api/register', async (req, res) => {
    const { username, password, name } = req.body;

const hashedPassword = await bcrypt.hash(password, 10);

users.push({
    username,
    password: hashedPassword,
    name,
    });
     
    res.status(201).json({message: 'User registered'});
    });


app.post('/api/authenticate', async (req, res) => {
const { username, password } = req.body;

const user = users.find(user => user.username === username );

if (user && await bcrypt.compare(password, user.password)) {
const token = jwt.sign({ name: user.name }, SECRET_KEY, {
    expiresIn: '1h',
});

res.json({ token });
} else {
 res.status(401).json({message: 'Invalid username or password'});
}
});

// Rotta con token per updateare il profilo utente
app.post('/api/updateProfile', async (req, res) => {
    const token = req.headers['authorization'];
    const { name } = req.body;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = users.find(user => user.name === decoded.name);

        if (user) {
            user.name = name;
            res.json({ message: 'Profile updatet' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});


app.post('/api/updateDetails', (req, res) => {
    const token = req.headers['authorization'];
    const { biography, projects, skills, contacts } = req.body;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = users.find(user => user.username === decoded.username);

        if (user) {
            user.biography = biography;
            user.projects = projects;
            user.skills = skills;
            user.contacts = contacts;
            res.json({ message: 'Details updatet' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});


/*
//in a real-world app, you should veirfy the iser's credentials form a database
if (username === dummyUser.username && password === dummyUser.password) {         // === converte variabile nella  destinazione 
    //generate a token
const token = jwt.sign({ name: dummyUser.name }, SECRET_KEY, {
    expiresIn: '1h',
});
    
    //send the token
    res.json ({token});
} else {
    res.status(401).json({ message: 'Invalid username or password'});  
}
});
*/
app.listen(PORT, () => {
    console.log(`Server running on http://locaalhost:${PORT}`);
});