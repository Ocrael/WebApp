# 1 -Backend Web App con gestione degli utenti

___
Dipendenze:

- express
- body-parser
___
Rotte:

- /protected - Richiede l'autenticazione dell'utente prima di accedere alla rotta richiesta.
___
Files:

- node_modules
    - (moduli)
- package-lock.json
- package.json
- server.js
- users.json
___


In questo primo progetto scegliamo per praticità di non utilizzare ancora un interfaccia front end in web: lavoreremo attraverso i terminali in **VSC**.
Il file **server.js** gestirà appunto il server, ma anche l'interfaccia.
Scrivendo le credenziali di accesso all'interno di un file **.json**, li andremo successivamente a recuperare attraverso la seguente stringa **curl**:

> curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}' http://localhost:3000/protected

Il file server.js, attraverso il modulo **body-parser**, confronterà i dati del **curl** con quelli contenuti nel file **.json** e fornirà l'input richiesto (in questo caso l'accesso dell'utente) oppure seguirà un messaggio di errore (Unauthorized access).

## Passaggi da eseguire:


(I comandi curl andranno inseriti nel terminale bash, il server verrà mantenuto attivo dal terminale powershell)
- Aprire nel terminale **powershell** la cartella del progetto.
- Avviare il server eseguendo **node server.js**.
- Aprire un altro terminale, questa volta **bash**, utilizzando il precendente terminale per mantenere attivo il server.
- Inserire la stringa **curl** nel path **/protected** per inserire le credenziali.
- Profit!


# 2 -Backend Web App con utilizzo jwt
_____________________
Dipendenze:

- express
- body-parser
- jsonwebtoken
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
- users.json
_____________________




Implementiamo il primo programma inserendo un passaggio intermedio tra l'inserimento delle credenziali e l'accesso, ovvero l'utilizzo di un token identificativo univoco legato all'account.
Il token verrà gestito dal modulo **jwt** (json web token).
All'interno del terminale ci verrà fornito un token, che andremo ad inserire a nostra volta per confermare l'accesso.


> curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}' http://localhost:3000/login

> curl -X GET -H "Authorization: your-jwt-token" http://localhost:3000/protected

** ESEMPIO:** 

> curl -X GET -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjg4MTEzNTEzLCJleHAiOjE2ODgxMTcxMTN9.Rvjns-5CDS4Oc999Ips75aOPL-WmZmXOQEu27ETTGgY" http://localhost:3000/protected


## Passaggi da eseguire:

- Aprire nel terminale **powershell** la cartella del progetto.
- Avviare il server eseguendo **node server.js**.
- Aprire un altro terminale, questa volta **bash**, utilizzando il precendente terminale per mantenere attivo il server.
- All'interno del **bash**, inserire la prima stringa **curl** (/login) per richiedere il token legato a quel determinato account.
- Verrà stampato in console il token, che andremo quindi a inserire nel terminale attraverso la seconda stringa **curl**.
- Il messaggio **"You have accessed protected content"** confermerà quindi la riuscita dell'operazione di accesso.



- user.json: contiene i dati degli utenti (username, password)
- server.js:
    - gestisce la connessione tra browser e console VSC
    - gestisce i percorsi delle pagine
    - genera un json web token
    - reindirizza l'utente alla pagina protected (se il token è attivo)



## 3 -Web App completa di frontend
___
Dipendenze:

- express
- body-parser
- jsonwebtoken
- serve-static
___
Rotte:

- /protected - Richiede l'autenticazione dell'utente prima di accedere alla rotta richiesta.
- /login - Consente di accedere alle pagine relative (admin e user).
- /logout - Elimina la sessione corrente cancellando il token.
- /admin - È la pagina di autenticazione **admin**
___
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
___

In questa versione del server andiamo ad aggiungere account differenti (le cui credenziali vengono trovate all'interno di user.json), con funzionalità differenti a loro volta.

- La cartella **public** contiene i nostri files html (rappresentanti le pagine web) e il nostro file login.js

- La rotta **/login** ci rimanda al file login.js, che a sua volta ci permette di generare il token e ci reindirizza alla pagina interessata.

- Il middleware si occupa di verificare l'autenticità del token.

- Il file **auth.js** consente l'autenticazione dell'utente attraverso la verifica del token e se la verifica va a buon fine, l'utente viene reindirizzato alla pagina relativa al tipo di account (in questo caso admin o user), altrimenti si verrà riportati alla pagina **/index**



## 4 -Web App completa con JWT e SQLite
___
Dipendenze:

- express
- body-parser
- jsonwebtoken
- serve-static
- sqlite3
___
Rotte:

- /protected - Richiede l'autenticazione dell'utente prima di accedere alla rotta richiesta.
- /login - Consente di accedere alle pagine relative (admin e user).
- /logout - Elimina la sessione corrente cancellando il token.
- /admin - È la pagina dedicata all'utente **admin**
- /register - Consente di registrare nuovi utenti inserendo i loro dati all'interno del db.
___
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
___



Andremo a sostituire il nostro precedente database **.json** con **myDatabase.db**, gestito da **sqlite3** e scritto attraverso il file **createDb.js**
Ora sql gestirà i dati dell'utente (id, username, password e ruolo).

## Passaggi da eseguire:

- node createDb.js (per creare il DataBase)
- node server.js (avviare la connessione al server)
- inserire nella barra d'indirizzi: http://localhost:3000/register.html per registrarsi e scrivere le credenziali, oltre al tipo di ruolo, all'interno del DB
- inserire poi http://localhost:3000/login.html per accedere alla pagina relativa al tipo di role.



