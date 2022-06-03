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

  // prompt the user to allow lowercase characters
  let allowSpecial = confirm("Allow password to contain special characters?");


  // string variable containing all possible characters to choose from.
  let charString = "~!@#$%^&*()-=_+[]{}:;,./?|0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // let specialString = "~!@#$%^&*()-=_+[]{}:;,./?|";

  if (!allowSpecial) {
    charString = charString.substring(27, charString.length);
  }

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