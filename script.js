
var generateBtn = document.querySelector('#generate');

// Create arrays for character groups (uppercase, lowercase, numbers, special characters)
var bigCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var littleCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharacters = ["!", "@", "#", "$", "&", "%", "?", "*"];
var finalArray = [];

  console.log(bigCharacters);
  console.log(littleCharacters);
  console.log(numberCharacters);
  console.log(specialCharacters);

function generatePassword() {

// LENGTH
var passLength = window.prompt("How many characters do you want?");
  if (passLength < 8) {
    window.alert("Too short! Are you trying to get hacked?! Password lengths have to be at least 8 characters, DUH.");
    return;
  }
  if (passLength > 128) {
    window.alert("Wayyyyy too long! You think you could even remember all of that? Pick a length under 128 characters.");
    return;
  }

// CAPITAL LETTERS
var passCap = window.confirm("Uppercase?");

// LOWERCASE LETTERS
var passNoCap = window.confirm("Lowercase characters?");
console.log(passCap);

// NUMBERS
var passNumb = window.confirm("Numbers?");
console.log(passNumb);

// SPECIAL CHARACTERS
var passSpec = window.confirm("Special characters?");
console.log(passSpec);

  // Include capital letters if user approves
  if (passCap === true) {
    finalArray = finalArray.concat(bigCharacters);
    console.log(finalArray);
  }

  // Include lowercase letters if user approves
  if (passNoCap === true) {
    finalArray = finalArray.concat(littleCharacters);
    console.log(finalArray);
  }

  // Include numbers if user approves
  if (passNumb === true) {
    finalArray = finalArray.concat(numberCharacters);
    console.log(finalArray);
  }

  // Include special characters if user approves
  if (passSpec === true) {
    finalArray = finalArray.concat(specialCharacters);
    console.log(finalArray);
  }

console.log(finalArray);

var finalPass = '';

  for (var i = 0; i< passLength; i++) {
    finalPass = finalPass + finalArray[Math.floor(Math.random() * finalArray.length)];
  }
  console.log(finalPass);

return finalPass;

}


function writePassword () {
  var finalPass = generatePassword();
  var passText = document.querySelector('#password');

  passText.value = finalPass;
}

generateBtn.addEventListener('click', writePassword);
