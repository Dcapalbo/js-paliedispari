// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//1. ask to the user to insert a word
var wordUser = prompt("insert a word");
var control = true;


//2. crete a function usefull to control

function checkingPalindrom(wordUser) {
  for (var i = 0; i < wordUser.length; i++) {
    var leftWord = wordUser[i];
    var rightWord = wordUser.charAt(wordUser.length -i -1);
    if (leftWord !== rightWord) {
      control = false;
    }
  } return control;
}

if (control) {
  console.log("this is a palindrom");
} else {
  console.log("this is not a palindrom");
}




// //3. create a function usefull to find if a word is palindrom or it is not
// function checkPalindrom (str) {
//   if (wordUser) {
//
//   }
// }

//3. print on the console the results.
// console.log(wordUser);
