# 2 -Backend Web App con utilizzo jwt

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
