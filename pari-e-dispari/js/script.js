// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//1. insert the even or odd number which the utent can choose
var evenOdd = prompt("scrivi \"pari\" o \"dispari\" ");
//2. Prevent the user to insert some other data with a cicle
while (evenOdd != "pari" && evenOdd != "dispari") {
  evenOdd = prompt("Hai sbagliato qualcosa, reinserisci i dati");
}
//3. generate a random number for the computer from 1 to 5
function numberGenerator(max, min){
  return Math.floor(Math.random() * (5 - 1));
}
//4. make a function to stabilize when a number is even or not
function Even(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
