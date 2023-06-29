const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users.json');

const app = express();
app.use(bodyParser.json());

// Middleware to chec authentication
function isAuthenticated(req, res, next) {
    const { username, password } = req.body;
    const user = users.users.find(
    (user) => user.username === username && user.password === password
    );

if (user) { 
    next();
} else {
    res.status(401).json({message: 'Unauthorized access'});
}
}

// Authenticated route
app.post('/protected', isAuthenticated, (req, res)=> {
    res.json({ message: 'You have accessed protected content' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

