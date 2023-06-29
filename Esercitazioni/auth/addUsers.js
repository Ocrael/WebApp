const sqlite3 = require ('sqlite3').verbose();

    const db = new sqlite3.Database("./myDatabase.db", (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Connected to the myDatabase SQLite database.");
    });

    const addUsers = () => {
        const users = [
            { username: 'user1', password: 'password1', role: 'user', email: 'user1@email.com', active: 'true'},
            { username: 'user2', password: 'password2', role: 'user', email: 'user2@email.com', active: 'true'},
            { username: 'admin', password: 'adminpassword', role: 'admin', email: 'admin@email.com', active: 'true'},
        ];

        const insertUser = db.prepare('INSERT INTO users (username, password, role, email, active) VALUES (?, ?, ?, ?, ?)');

        users.forEach((user) => {
            insertUser.run(user.username, user.password, user.role, user.email, user.active, (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`User ${user.username} added successfull`);
                }
            });
        });
    
        insertUser.finalize();
    };