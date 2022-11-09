// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specSymbols = "!@#$%^&*()";
var numbers = "0123456789";
var passLength = (8,128);
var password = "";

var generatePassword = function() {

  var choiceLength = window.prompt ("Choose number of digits for password (8-128)")
    if (!choiceLength) {
        return;
    } if (choiceLength >= 8 && choiceLength <= 128) {
        console.log (choiceLength)
      }
  
  //

  var choiceLowercase = window.confirm("Would you like to include lowercase letters?");
    if (choiceLowercase) {
      (includeLowercase == true)
      
    }
  var choiceUppercase = window.confirm("Would you like to include uppercase letters?");
    if (choiceUppercase) {
      (includeUppercase == true)
    }
  var choiceSymbols = window.confirm ("Would you like to include special symbols?");
    if (choiceSymbols) {
      (includeSymbols == true)
    }
  var choiceNumbers = window.confirm ("Would you like to include numbers?");
    if (choiceNumbers) {
      (includeNumbers == true)
    }

  //

   var randomLowercase = function() {
    if (includeLowercase == true) {
      return lowercase[Math.floor(Math.random() * lowercase.length)];
    }
   }
   var randomUppercase = function() {
    if (includeUppercase == true) {
      return uppercase[Math.floor(Math.random() * uppercase.length)];
    }
   }
   var randomNumber = function() {
    if (includeNumbers == true) {
      return numbers[Math.floor(Math.random() * numbers.length)];
    }
   }
   var randomSymbol = function(){
    if (includeSymbols == true) {
      return specSymbols[Math.floor(Math.random() * specSymbols.length)];
    } 
   }

   var typesCount = includeLowercase + includeUppercase + includeSymbols + includeNumbers;
   var typesArray = [(includeLowercase), (includeUppercase), (includeSymbols), (includeNumbers)]
   (
    item => Object.values(item)[0]
   );
   
   generatePassword(); {
    randomLowercase + randomUppercase + randomNumber + randomSymbol;
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
