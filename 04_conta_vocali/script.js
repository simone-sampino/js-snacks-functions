/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function searchVowels() {
  let vowels = "aeiou";
  let vowelsNumb = "";

  for (let i = 0; i < word.length; i++) {
    const element = word[i];

    if (vowels.includes(element)) {
      console.log(vowelsNumb + "(a, " + "a, " + "i)");
    }
  }
  return vowelsNumb;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(searchVowels());

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
