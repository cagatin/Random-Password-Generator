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
  // string variable containing all possible characters to choose from.
  let charString = "";

  let specialChars = "~!@#$%^&*()-=_+[]{}:;,./?|";
  let numberChars = "0123456789";
  let capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

  // prompt the user for the desired length of the password.
  let passLength = prompt("Please enter the desired length of your password. (Between 8 and 128)");

  // prompt the user to allow special character values.
  let allowSpecial = confirm("Allow password to contain special character values?");

  // prompt the user to allow number values.
  let allowNumbers = confirm("Allow password to contain number values?");

  // prompt to allow capital letters.
  let allowCapitals = confirm("Allow password to contain capital letters?");

  // prompt to allow lowercase eltters
  let allowLowercase = confirm("allow password to contian lowercase letters?");

  // If the allowSpecial is true, add specialChars to the charString.
  if (allowSpecial) {
    charString = charString.concat(specialChars);
  }
  // If allowNumbers is true, add the numberChars to the charString.
  if (allowNumbers) {
    charString = charString.concat(numberChars);
  }
  // If allowCapitals is true, add the capitalChars to the charString.
  if (allowCapitals) {
    charString = charString.concat(capitalChars);
  }
  if (allowLowercase) {
    charString = charString.concat(lowercaseChars);
  }

  if (charString == "") {
    alert("No character types selected. Please Select at least one character type to generate your password.");
    return;
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