// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passLength;
var password;

var includeLowercase;
var includeUppercase;
var includeSymbols;
var includeNumbers;

var generatePassword = function() {
  var choiceLowercase = window.confirm("Would you like to include lowercase letters?");
    if (choiceLowercase) {
      includeLowercase = true
    }
  var choiceUppercase = window.confirm("Would you like to include uppercase letters?");
    if (choiceUppercase) {
        includeUppercase = true
    }
  var choiceSymbols = window.confirm ("Would you like to include special symbols?");
    if (choiceSymbols) {
      includeSymbols = true
    }
  var choiceNumbers = window.confirm ("Would you like to include numbers?");
    if (choiceNumbers) {
      includeNumbers = true
    }
  
  var choiceLength = window.prompt ("Choose number of digits (8-128)")
    if (!choiceLength) {
      return;
    } 
    if (choiceLength >= 8 && choiceLength <= 128) {
      console.log ("choiceLength work")
    }
    if (choiceLength < 8) {
      window.alert ("Password is too short. Please enter another number.")
    }
    if (choiceLength > 128) {
      window.alert ("Password is too long. Please enter another number.")
    }
  
  



   
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);