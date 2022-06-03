// Getting References to the elements we need.
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector('#textArea');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //appending the generated password to the textArea.
  textArea.appendChild(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function used to generate a password.
function generatePassword() {
  // prompt the user for the desired length of the password.
  let passLength = prompt("Please enter the desired length of your password. (Between 8 and 128)");
}