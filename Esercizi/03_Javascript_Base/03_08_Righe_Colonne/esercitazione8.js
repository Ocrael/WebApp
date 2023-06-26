const btnAggiungiRiga = document.getElementById("aggiungi-riga");
const btnRimuoviRiga = document.getElementById("rimuovi-riga");
const btnAggiungiColonna = document.getElementById("aggiungi-colonna");
const btnRimuoviColonna = document.getElementById("rimuovi-colonna");
const tabella = document.getElementById("tabella");
let righe = 0;
let colonne = 0;

btnAggiungiRiga.addEventListener("click", function() {
  const riga = tabella.insertRow();
  for (let i = 0; i < colonne; i++) {
    const cella = riga.insertCell();
    cella.textContent = `Riga ${righe}, Colonna ${i}`;
  }
  righe++;
});

btnRimuoviRiga.addEventListener("click", function() {
  if (righe > 0) {
    tabella.deleteRow(-1);
    righe--;
  }
});

btnAggiungiColonna.addEventListener("click", function() {
  for (let i = 0; i < righe; i++) {
    const riga = tabella.rows[i];
    const cella = riga.insertCell();
    cella.textContent = `Riga ${i}, Colonna ${colonne}`;
  }
  colonne++;
});

btnRimuoviColonna.addEventListener("click", function() {
  if (colonne > 0) {
    for (let i = 0; i < righe; i++) {
      const riga = tabella.rows[i];
      riga.deleteCell(-1);
    }
    colonne--;
  }
});