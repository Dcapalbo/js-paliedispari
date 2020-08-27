// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//1. ask to the user to insert a word
var wordUser = prompt("insert a word");

//2. create an array and push the wordUser inside of it

var wordArray = [];
wordArray.push(wordUser);
var reversed = wordArray.reverse();


console.log(reversed);
// //3. create a function usefull to find if a word is palindrom or it is not
// function checkPalindrom (str) {
//   if (wordUser) {
//
//   }
// }

//3. print on the console the results.
// console.log(wordUser);
