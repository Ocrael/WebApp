Styling dei componenti
Nello sviluppo di applicazioni React, ci sono diverse tecniche per applicare stili ai componenti. Vediamo le opzioni più comuni:

Fogli di Stile CSS Esterni
Questo è il metodo tradizionale e consiste nell'utilizzare file CSS esterni che contengono le regole di stile. Puoi collegare un foglio di stile al tuo componente importandolo.

Esempio:

// In un file CSS (es. App.css)
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
}

// In un file del componente (es. App.js)
import React from 'react';
import './App.css';

function App() {
    return <button className="button">Clicca qui</button>;
}
Inline Styling
Puoi anche utilizzare stili inline, che consistono nel passare un oggetto JavaScript contenente le regole di stile direttamente all'elemento nel JSX.

Esempio:

function App() {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px'
    };

    return <button style={buttonStyle}>Clicca qui</button>;
}
Tieni presente che quando usi stili inline, le proprietà CSS sono scritte in camelCase piuttosto che con trattini (ad es. backgroundColor invece di background-color).

CSS Modules
CSS Modules è una tecnica che permette di definire stili in un file CSS ma utilizzarli in modo da avere uno scope locale al componente. Questo evita conflitti tra classi con lo stesso nome in diversi componenti.

Esempio:

/* In un file CSS (es. Button.module.css) */
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
}
// In un file del componente (App.js)
import React from 'react';
import styles from './Button.module.css';

function Button() {
    return <button className={styles.button}>Clicca qui</button>;
}
Styled Components Styled Components è una libreria che permette di scrivere CSS nel codice JavaScript utilizzando un particolare tipo di template string chiamato "tagged template literals". Questo consente di utilizzare tutte le funzionalità di CSS pur mantenendo gli stili strettamente legati al componente.
Esempio:

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
`;

function App() {
    return <Button>Clicca qui</Button>;
}