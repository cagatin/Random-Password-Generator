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

  let specialChars = "\'\"~!@#$%^&*()-=_+[]{}:;,./?|";
  let numberChars = "0123456789";
  let capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

  // prompt the user for the desired length of the password.
  let passLength = prompt("Please enter the desired length of your password. (Between 8 and 128)");

  // Check to see if the passLength value is a valid Number.
  if (!checkString(passLength)) {
    alert("Only numerical values are allowed for the desired password length");
    return "Please reenter a password length between 8 and 128";
  }

  // Checks to see if the password length is within the applicable range.
  if (passLength < 8 || passLength > 128) {
    alert("Please select a password length value between 8 and 128");
    return "Please reenter a password length between 8 and 128";
  }

  // prompt the user to allow special character values.
  let allowSpecial = confirm("Allow password to contain special character values?");

  // prompt the user to allow number values.
  let allowNumbers = confirm("Allow password to contain number values?");

  // prompt to allow capital letters.
  let allowCapitals = confirm("Allow password to contain capital letters?");

  // prompt to allow lowercase letters.
  let allowLowercase = confirm("Allow password to contain lowercase letters?");

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
  // if allowLowercase is true, add lowercaseChars to the charString.
  if (allowLowercase) {
    charString = charString.concat(lowercaseChars);
  }

  // Checks if the user rejected every available character type. If so, alerts the user to select at least one character type.
  if (charString == "") {
    alert("No character types selected. Please Select at least one character type to generate your password.");
    return "Please Select at least one character type to generate your password.";
  }

  // password to be returned by the function.
  let result = "";

  // for loop used to generate random password. 
  for (let i = 0; i < passLength; i++) {
    let charIndex = Math.floor(Math.random() * charString.length);
    result += charString.charAt(charIndex);
  }

  return result;
}

// Function to check if a string only contains number values.
function checkString(str) {
  // length of the string
  let len = str.length;

  // for loop to iterate through the str argument passed in.
  for (let i = 0; i < len; i++) {
    // selecting a character in the str string. 
    let cmp = parseInt(str.charAt(i));  //convert the character to a Number using parseInt().
    // if the character is NOT a number, then reject the entire string.
    if (isNaN(cmp)) {
      return false;
    }
  }

  // All characters in the string are number values. Thus, return true.
  return true;
}