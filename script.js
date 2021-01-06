// assignment code.

var generateBtn = document.querySelector("#generate");

// write password to the #password input.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// variables listed in arrays. 

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "_", "-"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// begin the password generation.

function generatePassword() {
  userSelections = []

  // prompt user to choose a password length between 8 and 128.

  var passLength = parseInt(prompt("Choose a number between 8 and 128 for your password length."));
  while (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {



    alert("Please choose a valid number.");
    var passLength = parseInt(prompt("Choose a number between 8 and 128 for your password length."));
  }


  var numericQuestion = confirm("Do you want to use numeric characters?");

  if (numericQuestion === true) {
    userSelections = userSelections.concat(numeric)
  };

  var specialQuestion = confirm("Do you want to use special characters?");

  if (specialQuestion === true) {
    userSelections = userSelections.concat(special)
  };

  var upperQuestion = confirm("Do you want to use upper case characters?");

  if (upperQuestion === true) {
    userSelections = userSelections.concat(upper)
  };

  var lowerQuestion = confirm("Do you want to use lower case characters?");

  if (lowerQuestion === true) {
    userSelections = userSelections.concat(lower)
  }

  if (!numericQuestion && !specialQuestion && !upperQuestion && !lowerQuestion) {
    alert("You need to select at least one of the alert options!");
    reset();
  }

  var result = ""

// a random password is generated here, based on the users selections.


  for (i = 0; i < passLength; i++) {
    result += userSelections[Math.floor(Math.random() * userSelections.length)];
  }
  return result;
}


// add event listener to generate button.

generateBtn.addEventListener("click", writePassword);

// copy to clipboard function

function CopyPassword() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
