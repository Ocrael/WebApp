var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}















const timer = document.getElementById("timer");
const btnAvvia = document.getElementById("avvia");
const btnFerma = document.getElementById("ferma");
const btnAzzera = document.getElementById("azzera");
let intervallo; // let non richiede tipologia di dati
let secondi = 0;
let minuti = 0;

function avviaTimer() {
  intervallo = setInterval(function() {
    secondi++;
    if (secondi === 60) {
      minuti++;
      secondi = 0;
    }
    // operatore ternario in js utilizza il ? come separatore, quindi la sintassi è: contidion = expression1 : expression2
    const minutiFormattati = minuti < 10 ? "0" + minuti : minuti; 
    const secondiFormattati = secondi < 10 ? "0" + secondi : secondi;
    timer.textContent = `${minutiFormattati}:${secondiFormattati}`;
  }, 1000);
}

function fermaTimer() {
  clearInterval(intervallo);
}

function azzeraTimer() {
  clearInterval(intervallo);
  secondi = 0;
  minuti = 0;
  timer.textContent = "00:00";
}

btnAvvia.addEventListener("click", function() {
  avviaTimer();
});

btnFerma.addEventListener("click", function() {
  fermaTimer();
});

btnAzzera.addEventListener("click", function() {
  azzeraTimer();
});









