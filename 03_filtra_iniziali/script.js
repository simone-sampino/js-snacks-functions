/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function startLetter() {
  let letter = [];
  for (let i = 0; i < names.length; i++) {
    const element = names[i];

    if (element.charAt(0) === "A") {
      letter.push(element);
    }
  }
  return letter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(startLetter());

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
