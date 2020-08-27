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
  return Math.floor(Math.random() * (max - min) + min);
}
//4. make a function to stabilize when a number is even or not
function even(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
//5. insert a prompt to let the User insert the number
var userN = parseInt(prompt("inserisci un numero compreso tra 1 e 5"));
while (userN < 1 || userN > 5) {
  userN = parseInt(prompt("Numero sbagliato, reinserisci il numero"));
}
//6. sum the user and the computer number
var computerNumber = numberGenerator(5, 1);
var total = computerNumber + userN;
//7. add a variable to the even function
var even = even();
//8. checking if the sum is even or odd
if ((even && userN == "pari") || (even == false && userN == "dispari")) {
  alert("Hai vinto");
}
