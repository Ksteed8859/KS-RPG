// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specSymbols = "!@#$%^&*()";
var numbers = "0123456789";
var passLength = "";

var generatePassword = function() {
  var choiceLowercase = window.confirm("Would you like to include lowercase letters?");
    if (choiceLowercase) {
      console.log("Lowercase = true")
    } else {
      console.log("Lowercase = false")
    }
  var choiceUppercase = window.confirm("Would you like to include uppercase letters?");
    if (choiceUppercase) {
      console.log("Uppercase = true")
    } else {
      console.log("Uppercase = false")
    }
  var choiceSymbols = window.confirm ("Would you like to include special symbols?");
    if (choiceSymbols) {
      console.log("Symbols = true")
    } else {
      console.log("Symbols = false")
    }
  var choiceNumbers = window.confirm ("Would you like to include numbers?");
    if (choiceNumbers) {
      console.log("Numbers = true")
    } else {
      console.log("Numbers = false")
    }
  
    var choiceLength = window.prompt ("Choose number of digits (8-128)")
    if (!choiceLength) {
      return;
    }
      
  /*while (choiceLength > 128) {
        window.prompt ("Too many digits: Pick a lower number. (8-128)");
        if (choiceLength <= 128) {
          break;
        }
      } 
      
  while (choiceLength < 8) {
        window.prompt ("Too few digits: Pick a higher number. (8-128) ");
        if (choiceLength >= 8) {
          break;
        }
      } 

      if (choiceLength < 128 && choiceLength > 8){
        console.log (choiceLength)
      }
  
*/
      
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
