// select button in html with the id "generate" and assign it to the variable generateBtn
var generateBtn = document.querySelector("#generate");

// create arrays for character groups (uppercase, lowercase, numbers, special characters)
var bigCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var littleCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharacters = ["!", "@", "#", "$", "&", "%", "?", "*"]

console.log(bigCharacters);
console.log(littleCharacters);
console.log(numberCharacters);
console.log(specialCharacters);

// click function for generate button
generateBtn.addEventListener("click", function enterInfo() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// when button is clicked, user is prompted for password parameters

// LENGTH OF PASSWORD
// create function to generate password between 8 and 128 characters
var chooseLength = window.prompt("How long do you want your password to be? (Pick a number between 8 & 128 to ensure maximum safety!)");
  if (userLength < 8) {
    window.alert("Oh no, that password length is too short! Please choose a number between 8 & 128.");
    return;
  }

  // if user input is > 128, reject
  if (userLength > 128) {
    window.alert("Uh oh! Your password is too long. Please try again.");
    return;
  }

// PASSWORD CRITERIA PROMPTS
// prompt user about password criteria (length, uppercase, lowercase, numbers, special characters)
window.prompt ("First, give me some guidelines for your password.")

// When the user clicks on <div>, open the popup
function 

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

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

