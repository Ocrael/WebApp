# **REACT**
___

## Files:

─

```
-/MainFolder

    - package-lock.json
    - package.json
    - server.js

    - /node_modules
        - (moduli)

    - /public
        - index.html
        - manifest.json

    - /src
        - App.css
        - App.js
        - index.css
        - index.js
        - (Ecc.)

        - /components
            - Bio
            - Login
            - (Ecc)


```
___

## Dipendenze:

- axios
- bcryptjs
- express
- jsonwebtoken
- cors

___
Passaggi:

- inserire il comando **npx create-react-app nome-file** per creare la cartella di lavoro (solo lettere minuscole)
- Inserire il comando **npm start**, nel terminale della cartella creata, per avviare il server
- Creare cartella **components** dentro alla cartella **src**, quindi sbatterci dentro le sezioni della pagina HTML, sottoforma di file .js (Es Bio.js)
    - Esporto il file **Bio.js** in **App.js** con la stringa **export default Bio;**
    - Importo il file Bio.js in App.js con la stringa **import Bio from './components/Bio';**
    - Rinse and repeat per tutte le altre **sezioni** della pagina
___


Per vedere le modifiche dei file .css di "<Progetti/>" e "<Competenze/>", prendo questi ultimi e li sposto sopra a " {isAuthenticated ? ("

```javascript
  return (
    <div>
      <Header/>
      <Bio/>
      {isAuthenticated ? (
        <React.Fragment>
          <Progetti/>
          <Competenze/>
        </React.Fragment>


      ) : (
        <Login onLogin={handleLogin} />
      )}
      <Contatti />
    </div>
  );
  ```