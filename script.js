// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//press generatepassword
function generatePassword() {
  //will ask you how long the desired password length
  var passwordLength = prompt("Enter password length, no less than 8 and no more than 128 characters");
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Password length must be between 8 characters to 128 characters.");
  }

  //will ask you the whether you want these or not.
  var addLowerCase = confirm("Did you want lowercase letters?");
  var addUpperCase = confirm("Did you want uppercase letters?");
  var addNumbers = confirm("Did you want numbers?");
  var addSpecialChars = confirm("Did you want special characters?");

  // if no chars are selected it will prompt user to choose one 
  while (!addLowerCase && !addUpperCase && !addNumbers && !addSpecialChars) {
    alert("Have at least one character type must be selected. Please try again");
    addLowerCase = confirm("Did you want lowercase letters?");
    addUpperCase = confirm("Did you want uppercase letters?");
    addNumbers = confirm("Did you want numbers?");
    addSpecialChars = confirm("Did you want to include special characters?");
  }

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var SpecialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var selectedChars = "";

  if (addLowerCase) {
    selectedChars += lowerCaseChars;
  }

  if (addUpperCase) {
    selectedChars += upperCaseChars;
  }

  if (addNumbers){
    selectedChars += numberChars;
  }

  if (addSpecialChars){
    selectedChars += SpecialChars;
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor (Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
