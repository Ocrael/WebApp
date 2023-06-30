## 4 -Web App completa con JWT e SQLite
_____________________
Dipendenze:

- express
- body-parser
- jsonwebtoken
- serve-static
- sqlite3
_____________________
Rotte:

- /protected - Richiede l'autenticazione dell'utente prima di accedere alla rotta richiesta.
- /login - Consente di accedere alle pagine relative (admin e user).
- /logout - Elimina la sessione corrente cancellando il token.
- /admin - È la pagina dedicata all'utente **admin**
- /register - Consente di registrare nuovi utenti inserendo i loro dati all'interno del db.
_____________________
Files:

- node_modules
    - (moduli)
- package-lock.json
- package.json
- server.js
- public
    - auth.js
    - addUser.js
    - register.html
    - index.html
    - user.html
    - admin.html
    - login.js
_____________________



Andremo a sostituire il nostro precedente database **.json** con **myDatabase.db**, gestito da **sqlite3** e scritto attraverso il file **createDb.js**
Ora sql gestirà i dati dell'utente (id, username, password e ruolo).

