// Palindrom
// Ask to the Utent if the word is palindrom or not
// create a function to control if the world is palindrom or not

//1. ask to the user to insert a word
var wordUser = prompt("insert a word");
//.2 create a variable to invoke the function
var control = checkingPalindrom(wordUser);
//.3 create a function usefull to control
function checkingPalindrom(str) {
  for (var i = 0; i < wordUser.length; i++) {
    var control = true;
    var readLeft = wordUser[i];
    var readRight = wordUser.charAt(wordUser.length -i -1);
    if (readLeft !== readRight) {
      control = false;
    }
  } return control;
}
//4. print the results in the console;
if (control) {
  console.log("this is a palindrom");
} else {
  console.log("this is not a palindrom");
}
