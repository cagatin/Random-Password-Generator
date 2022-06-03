// Getting References to the elements we need.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function used to generate a password.
function generatePassword() {
  // prompt the user for the desired length of the password.
  let passLength = prompt("Please enter the desired length of your password. (Between 8 and 128)");

  // string variable containing all possible characters to choose from.
  let charString = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let specialString = "~!@#$%^&*()-=_+[]{}:;,./?|";

  // password to be returned by the function.
  let result = "";

  // for loop used to generate random password. 
  for (let i = 0; i < passLength; i++) {
    let charIndex = Math.floor(Math.random() * charString.length);
    result += charString.charAt(charIndex);
  }
  console.log(result);
  return result;
}