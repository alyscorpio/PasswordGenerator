// select button in html with the id "generate" and assign it to the variable generateBtn
var generateBtn = document.querySelector("#generate");

// create arrays for character groups (uppercase, lowercase, numbers, special characters)
var bigCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var littleCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharacters = ["!", "@", "#", "$", "&", "%", "?", "*"]

// LENGTH OF PASSWORD
// create function to generate password between 8 and 128 characters

// PASSWORD CRITERIA PROMPTS
// prompt user about password criteria (length, uppercase, lowercase, numbers, special characters)

// GENERATING PASSWORD
// function to generate random password based on criteria (if, then)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

