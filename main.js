//Esercizio 1: Crea una arrow function che accetta due numeri come parametri e restituisce la loro sottrazione.

/*
const subtract = (a, b) => a - b;
console.log(subtract(10, 3));
*/

//Esercizio 2: Crea un oggetto chiamato 'studente'. Dovrebbe avere proprietà per 'nome' e 'età'. Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare il nome e l'età dello studente e un metodo per incrementare l'età.
// Dopo aver fatto l'esercizio abbiamo aggiunto un contatore di saluti.

/*
const studente = {
  nome: "Piero",
  eta: 10,
  cresci: function (anni) {
    this.eta += anni;
  },
  dicciChiSei: function () {
    console.log(`Ciao sono ${this.nome} ed ho ${this.eta} anni`);
    this.contatoreSaluti += 1;
  },
  contatoreSaluti: 0,
};

studente.cresci(6);
studente.dicciChiSei();
studente.dicciChiSei();
studente.dicciChiSei();
studente.dicciChiSei();
console.log(studente);
*/

//Esercizio 3: Crea una semplice pagina HTML con un elemento div. Usa JavaScript per cambiare l'innerHTML e l'innerText del div.

/*
window.addEventListener("load", () => {
  const div = document.getElementById("div1");
  div.innerText = "Carrot";
  div.innerHTML += "<p>Gianni</p>";
});
*/

//Esercizio 4: Crea una lista non ordinata con tre elementi di lista. Usa JavaScript per aggiungere un nuovo elemento di lista alla fine della lista usando appendChild. Poi usa insertBefore per aggiungere un elemento di lista all'inizio della lista.

// NON SONO RIUSCITO A FARE LA SECONDA PARTE ----------SOLUZIONE: screenshot di lezione negli appunti

/*
window.addEventListener("load", function () {
  const lista = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = "qwerty";
  lista.appendChild(li);
  console.log(lista);
});
*/

//Esercizio 5: Crea un elemento div con class 'blu'. Usa JavaScript per controllare al click se il div ha la classe 'blu' usando classList.contains(). Poi usa classList.add() per aggiungere una classe 'rosso' e classList.remove() per rimuovere la classe 'blu'.

/*
window.addEventListener("load", () => {
  const divBlu = document.querySelector(".blu");

  divBlu.addEventListener("click", function () {
    const cl = divBlu.classList;
    console.log(divBlu);
    if (cl.contains("blu")) {
      cl.add("rosso");
      cl.remove("blu");
    } else {
      cl.add("blu");
      cl.remove("rosso");
    }
  });
});
*/

//Esercizio 6: Crea un pulsante in HTML. Usa JavaScript per impostare un attributo 'disabled' sul pulsante usando setAttribute().

/*
window.addEventListener("load", () => {
  const button = document.querySelector("button");
  button.setAttribute("disabled", "");
  console.log(button);
});
*/

//Esercizio 7: Crea un elemento div. Aggiungi un evento onmouseover che cambia il colore del div. Aggiungi un evento onmouseout che cambia il colore del div indietro. Aggiungi un evento click che stampa un messaggio in console.
