// Assignment code here
// Arrays of possible choices for generator to use
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var choiceLength = "";

// Window Prompts to determine values

var generatePassword = function() {
  var choiceLength = window.prompt ("Choose number of characters (8-128)")
    if (!choiceLength) {
      return;
    } 
    if (choiceLength >= 8 && choiceLength <= 128) {
      console.log (choiceLength)
    }
    while (choiceLength < 8) {
      window.alert ("Password is too short. Please enter another number.")
      choiceLength = window.prompt ("Choose number of digits (8-128)")
    }
    while (choiceLength > 128) {
      window.alert ("Password is too long. Please enter another number.")
      choiceLength = window.prompt ("Choose number of digits (8-128)")
    }
  
  var choiceLowercase = window.confirm("Would you like to include lowercase letters?")
    if (choiceLowercase) {
      console.log ("lowercase = true")
    } else {
      console.log ("lowercase = false")
    }
  var choiceUppercase = window.confirm("Would you like to include uppercase letters?")
    if (choiceUppercase) {
      console.log ("uppercase = true")
    } else {
      console.log ("uppercase = false")
    }
  var choiceSymbols = window.confirm ("Would you like to include special symbols?")
    if (choiceSymbols) {
      console.log ("symbols = true")
    } else {
      console.log ("symbols = false")
    }
  var choiceNumbers = window.confirm ("Would you like to include numbers?")
    if (choiceNumbers) {
      console.log ("numbers = true")
    } else {
      console.log ("numbers = false")
    }
    while (choiceLowercase === false && choiceUppercase === false && choiceSymbols === false && choiceNumbers === false) {
      window.alert ("You must choose at least one character group to be included in your password.");
      choiceLowercase = window.confirm("Would you like to include lowercase letters?");
      choiceUppercase = window.confirm("Would you like to include uppercase letters?");
      choiceSymbols = window.confirm ("Would you like to include special symbols?");
      choiceNumbers = window.confirm ("Would you like to include numbers?");
    }

  //Arrays to select what characters to use in password

  var characterArray = []

  if (choiceLowercase) {
    characterArray = characterArray.concat(lowercase)
  }
  if (choiceUppercase) {
    characterArray = characterArray.concat(uppercase)
  }
  if (choiceSymbols) {
    characterArray = characterArray.concat(specSymbols)
  }
  if (choiceNumbers) {
    characterArray = characterArray.concat(numbers)
  }

  //Random Password Generator
  var newPassword = "";

  for (var i =0; i < choiceLength; i++) {
    newPassword = newPassword + characterArray[Math.floor(Math.random() * characterArray.length)];
  }
  
  console.log(newPassword);
  return newPassword;
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