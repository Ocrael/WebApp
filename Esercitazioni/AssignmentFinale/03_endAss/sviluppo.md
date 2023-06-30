## 3 -Web App completa di frontend

In questa versione del server andiamo ad aggiungere account differenti (le cui credenziali vengono trovate all'interno di user.json), con funzionalità differenti a loro volta.


```javascript

//Login route
app.post ('/login', (req, res) => {
    const {username, password} = req.body;
    const user = users.users.find(
        (user) => user.username === username && user.password ===password
    );

    if (user) {
        //Generate and sign the JWT
        const token = jwt.sign({username:user.username,role:user.role}, SECRET_KEY,{
            expiresIn:'1h',
        });

        res.json({message:'Authentication successful', token});
    } else {
        res.status(401).json ({message:'Invalid credentials'});
    }
});
```

Il file **auth.js** evita che la rotta **/admin** sia accessibile direttamente dall'indirizzo