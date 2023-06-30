## 3 -Web App completa di frontend
_____________________
Dipendenze:

- express
- body-parser
- jsonwebtoken
- serve-static
_____________________
Rotte:

- /protected - Richiede l'autenticazione dell'utente prima di accedere alla rotta richiesta.
- /login - Consente di accedere alle pagine relative (admin e user).
- /logout - Elimina la sessione corrente cancellando il token.
- /admin - È la pagina di autenticazione **admin**
_____________________
Files:

- node_modules
    - (moduli)
- package-lock.json
- package.json
- server.js
- public
    - auth.js
    - index.html
    - user.html
    - admin.html
    - login.js
_____________________

In questa versione del server andiamo ad aggiungere account differenti (le cui credenziali vengono trovate all'interno di user.json), con funzionalità differenti a loro volta.

- La cartella **public** contiene i nostri files html (rappresentanti le pagine web) e il nostro file login.js

- La rotta **/login** ci rimanda al file login.js, che a sua volta ci permette di generare il token e ci reindirizza alla pagina interessata.

- Il middleware si occupa di verificare l'autenticità del token.

- Il file **auth.js** consente l'autenticazione dell'utente attraverso la verifica del token e se la verifica va a buon fine, l'utente viene reindirizzato alla pagina relativa al tipo di account (in questo caso admin o user), altrimenti si verrà riportati alla pagina **/index**

