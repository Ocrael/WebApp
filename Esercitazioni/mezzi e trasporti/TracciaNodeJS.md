# FILE NODE.JS


# Area di lavoro:


 ```
 

    \MainFolder

        app.js

        package-lock.json

        package.json

        \node_modules

          (tutti i moduli)


        \public
           index.html
           script.js
           style.css
```


## Comandi npm:

```code
npm init
npm install (nomeDelPacchetto)
node (nomeDelFileJS)
```


## Cartella public:


 Inserisco i files **index.html**, **script.js** e **style.css** all'interno di una cartella public.
 Utilizzando il framework **express**, inserisco all'interno del file **app.js** la stringa **app.use(express.static('public'));**
  così da poter accedere alla cartella.


# Creazione files


# Creare file "index.html":

 Partendo da un autocompilazione di html:5, scrivo il file inserendo le sezioni di cui ho bisogno; in questo caso prenderemo come esempio,
  nello specifico i tags **option**, **form**, **textarea** e **input**.



# Creare file "style.css"

Necessitiamo di **più** font arcobaleno

# Creare file "script.js"

## Fetching:

eseguiamo un fetch di dati leggendo dal tag **form** contenuto in 
```javascript
const form = document.querySelector('form');
```

e mandiamo una risposta grazie alla stringa
```javascript
const result = document.getElementById('result');
```
Assegnazione delle costanti:

```javascript
    const name = document.getElementById('name').value;
```
Abbiamo istanziato la costante **name** assegnandole un valore letto dall'id **name** contenuto nel DOM

Gestione degli errori:

attraverso il seguente ciclo, verifichiamo che l'indirizzo sia esistente e che quindi ci venga restituito il codice 200:

```javascript
        if (xhr.readyState === XMLHttpRequest.DONE)
        {
            if (xhr.status === 200)
            {
                result.innerHTML = xhr.responseText;
            }
            else
            {
                console.error('Errore nella richiesta AJAX!');
            }
        }
```

Reinvio dei dati in console:
_(Premessa: Attraverso **get** ci verranno presentate, inserite all'interno dell'indirizzo, le informazioni mentre **POST** ci permette di tenere "oscurate" le i dati.)_

la prima stringa ci permette di aprire una nuova pagina html **/submit** in "post", e ci verranno riportati i dati inseriti sulla pagina web, ma all'interno della console.

```javascript
    xhr.open('POST', '/submit');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`name=${name}&email=${email}&mezzo=${mezzo}&comment=${comment}&checked=${checkbox}`);
```



# Creare file "app.js"

## Dichiarazione costanti:

attraverso le stringhe:   
 
```javascript
const express = require('express'); 
const app = express();
```
andiamo a dichiarare la costante **app** assegnandola a ciò che viene restituito da **express**.


## Print delle costanti in log:

```javascript
app.post('/submit', (req, res) =>
{
    const { name, email, mezzo, comment, checkbox } = req.body;

    console.log(`Nome: ${name}, Email: ${email}, Mezzo: ${mezzo}, Comment: ${comment}, Checkbox: ${checkbox}`);

    res.send(`Benvenuto, ${name}. Hai scelto ${mezzo} come metodo di trasporto. Invieremo gli aggiornamenti al seguente indirizzo email: ${email}. Grazie per aver scelto Broonoo!${checkbox}`);
});

```
Associamo le costanti e le scriviamo all'interno di un log, stampato in console.

Con **req.body** andiamo a richiedere (request) informazioni (le costanti name, email ecc) contenute nella sezione **body** del file **index.html** e ne restituisce (respond) altre, scritte di seguito in console.log.
La risposta (response) verrà rimandata all'interno del terminale grazie a **res.send**.






