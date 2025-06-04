/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function initials() {
  let firstLetter = [];
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    firstLetter.push(element.charAt(0));
  }
  return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initials());

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
