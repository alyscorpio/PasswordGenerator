var generateBtn = document.querySelector('#generate');

// Create arrays for character groups (uppercase, lowercase, numbers, special characters)
var bigCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var littleCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharacters = ["!", "@", "#", "$", "&", "%", "?", "*"];
var passlength = '';
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

  if (passCap === true) {
    finalArray = finalArray.concat(bigCharacters);
  }

  // LOWERCASE LETTERS
  var passNoCap = window.confirm("Lowercase characters?");
  console.log(passCap);

  if (passNoCap === true) {
    finalArray = finalArray.concat(littleCharacters);
  }

  // NUMBERS
  var passNumb = window.confirm("Numbers?");
  console.log(passNumb);

  if (passNumb === true) {
    finalArray = finalArray.concat(numberCharacters);
  }

  // SPECIAL CHARACTERS
  var passSpec = window.confirm("Special characters?");
  console.log(passSpec);

  if (passSpec === true) {
    finalArray = finalArray.concat(specialCharacters);
  }

  console.log(finalArray);

  // Final password is an empty string
  var finalPass = "";

  // For loop to generate a random set of characters from the finalArray, the length of passLength
  for (var i = 0; i< userLength; i++) {
    finalPass = finalPass + finalarray[Math.floor(Math.random() * finalArray.length)];
  }
  console.log(finalPass);

  return finalPass;
}





// // create arrays for character groups (uppercase, lowercase, numbers, special characters)
// var bigCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var littleCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// var specialCharacters = ["!", "@", "#", "$", "&", "%", "?", "*"];
// var finalArray = [];

// console.log(bigCharacters);
// console.log(littleCharacters);
// console.log(numberCharacters);
// console.log(specialCharacters);

// PASSWORD CRITERIA
// prompt user about password length
// generateBtn.addEventListener("click", passPrompt, generatePassword, writePassword);

// function passPrompt() {

//   var passLength = window.prompt("How long should the password be?");
//     console.log(passLength);
//     // set password parameters between 8 and 128 characters
//     if (passLength < 8) {
//       window.alert("Sorry, that's too short. Passwords must be at least 8 characters to ensure your safety!");
//       return;
//     }
//     if (passLength > 128) {
//       window.alert("Woah, that's a little too long! Please pick a length under 128 characters.");
//       return;
//     }
  
//   var passCap = window.confirm("Lowercase characters?");
//   console.log(passCap);

//   // include uppercase characters if user selects okay
//   if (passCap === true) {
//     finalArray = finalArray.concat(bigCharacters);
//   }

//   var passNoCap = window.confirm("Uppercase?");
//   console.log(passNoCap);

//   // include lowercase characters if user selects okay
//   if (passNoCap === true) {
//     finalArray = finalArray.concat(littleCharacters);
//   }
    
//   var passNumb = window.confirm("Numbers?");
//   console.log(passNumb);

//   // include numbers if user selects okay
//   if (passNumb === true) {
//     finalArray = finalArray.concat(numberCharacters);
//   }

//   var passSpec = window.confirm("Special characters?");
//   console.log(passSpec);

//   // include special characters if user selects okay
//   if (passSpec === true) {
//     finalArray = finalArray.concat(specialCharacters);
//   }

//   console.log(finalArray);
// }

// // GENERATING PASSWORD
// var password = "";

// function generatePassword() {
//   for (i = 0; i < passLength; i++) {
//     password = password + finalArray[Math.floor(Math.random() * finalArray.length)];
//   }

// console.log(password);
// // // for (var i = 0; i < passLength; i++) {
// // //   password = password + finalArray[Math.floor(Math.random() * finalArray.length)];
// // // }

// // console.log(password);

// // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   password.writePassword ();
// }
