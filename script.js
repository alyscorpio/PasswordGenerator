var generateBtn = document.querySelector('#generate');

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

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', formPop);

function formPop() {
  var popup = document.getElementById('myForm');
  popup.classList.toggle('show');
}

var sumbitBtn = document.querySelector('#submit');
sumbitBtn.addEventListener('click', passCriteria);

var passLength = document.querySelector('#p-length');

function generatePassword()

// if (passLength < 8) {
  //       window.alert("Sorry, that's too short. Passwords must be at least 8 characters to ensure your safety!");
  //       return;
  //     }
  //     if (passLength > 128) {
  //       window.alert("Woah, that's a little too long! Please pick a length under 128 characters.");
  //       return;
  //     }

//   var passCap = document.getElementById('myform').elements['cap'].value;
//     if (passCap === 'true') {
//       finalArray = finalArray.concat(bigCharacters);
//     }

//   var passLittle = document.getElementById('myform').elements['little'].value;
//     if (passLittle === 'true') {
//       finalArray = finalArray.concat(littleCharacters);
//     }
  
//   var passNumb = document.getElementById('myform').elements['numb'].value;
//     if (passNumb === 'true') {
//       finalArray = finalArray.concat(numberCharacters);
//     }

//   var passSpec = document.getElementbyId('myform').elements['spec'].value;
//     if (passSpec === 'true') {
//       finalArray = finalArray.concat(specialCharacters);
//     }

//   console.log(finalArray)

// }




// var generateBtn = document.querySelector('#generate');
// var formPop = document.querySelector('#form')

// generateBtn.addEventListener('click', popup);

// function popup () {
//   document.getElementById('form').style.display=('show');
// };

// function popup() {
//   popup.classList.toggle("show");
// }

// on click make form popup

// console log data from form

//

// select button in html with the id "generate" and assign it to the variable generateBtn
// var generateBtn = document.querySelector("#generate");

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
