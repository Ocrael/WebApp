# 1 -Backend Web App con gestione degli utenti

In questo primo progetto non vi è necessità di un interfaccia front end in web: lavoreremo attraverso i terminali in **VSC**.
Il file **server.js** gestirà appunto il server, ma anche l'interfaccia.
Scrivendo le credenziali di accesso all'interno di un file **.json**, li andremo successivamente a recuperare attraverso la seguente stringa **curl**:

> curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}' http://localhost:3000/protected

Il file server.js, attraverso il modulo **body-parser**, confronterà i dati del **curl** con quelli contenuti nel file **.json** e fornirà l'input richiesto (in questo caso l'accesso dell'utente) oppure seguirà un messaggio di errore (Unauthorized access).

## Passaggi da eseguire:

- Aprire nel terminale **powershell** la cartella del progetto.
- Avviare il server eseguendo **node server.js**.
- Aprire un altro terminale, questa volta **bash**, utilizzando il precendente terminale per mantenere attivo il server.
- Inserire la stringa **curl** nel path **/protected** per inserire le credenziali.
- Profit!
