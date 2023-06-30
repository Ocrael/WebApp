# Analisi dei requisiti dell'applicazione

- Questa applicazione web verrà realizzata in quattro versioni di complessità crescente (eseguire ogni versione con node server.js).

1 -Backend Web App con gestione degli utenti tramite file json **(senza interfaccia web ma con comandi CURL)**

2 -Backend Web App con utilizzo **JWT** (json web token) richiesti ed assegnati ad ogni utente tramite comandi CURL

3 -Web App completa di frontend con gestione degli utenti tramite **file json** ed autenticazione tramite **JWT**

4 -Web App completa con JWT e SQLite (con Admin)

# DIPENDENZE:

## 1 -Backend Web App con gestione degli utenti

- express
- body-parser

## 2 -Backend Web App con utilizzo

- express
- body-parser
- jsonwebtoken

## 3 -Web App completa di frontend

- express
- body-parser
- jsonwebtoken
- serve-static

## 4 -Web App completa con JWT e SQLite

- express
- body-parser
- jsonwebtoken
- serve-static
- sqlite3

# FILES NECESSARI:

## 1 -Backend Web App con gestione degli utenti

- user.json: contiene i dati degli utenti (username, password)
- server.js: gestisce la connessione tra browser e console VSC; inoltre gestisce i percorsi delle pagine

eseguire con **node server.js**

comando curl da eseguire

> curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}' http://localhost:3000/protected


## 2 -Backend Web App con utilizzo

- user.json: contiene i dati degli utenti (username, password)
- server.js:
    - gestisce la connessione tra browser e console VSC
    - gestisce i percorsi delle pagine
    - genera un json web token
    - reindirizza l'utente alla pagina protected (se il token è attivo)



## 3 -Web App completa di frontend

- 

## 4 -Web App completa con JWT e SQLite

- 

