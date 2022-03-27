// Assignment Code
var generateBtn = document.querySelector("#generate");

//character sets

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//start
//defined var to store selected variables in the generatepass function
// function write password will activate generate password. 
//generatepass will contain the logic behind the password generation.
var passwordlength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;


function generatepass(){
  var passwordlength = prompt("How many characters would you like your password to be?")

  breakme: if (passwordlength < 8 || passwordlength > 128){
      alert("Length must be 8-128 characters")
  }
  
  if (passwordlength >= 8 && passwordlength <= 128){
  var confirmUpper = confirm("Would you like to use uppercase letters?")
  var confirmLower = confirm("Would you like to use lowercase letters?")
  var confirmNumber = confirm("would you like to use numbers?")
  var confirmSpecial = confirm("would you like to use special characters?")
  }
  
  breakme: if (!confirmUpper && !confirmLower && !confirmNumber  && !confirmSpecial){
      alert("You must select at least one character type!")
  }
  
  //concat merges arrays
  // possible options, 4 selected ,3 selected ,2 selected and 1 selected.

  if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowercase.concat(uppercase, numbers, special);
    console.log(userChoices);
  }

  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowercase.concat(uppercase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowercase.concat(uppercase, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowercase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = uppercase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowercase.concat(uppercase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowercase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowercase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = uppercase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = uppercase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // 1 true option
  else if (confirmLower) {
    userChoices = lowercase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(uppercase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  var passwordcontainer = [];
  
  // Loop for random selection
  for (var i = 0; i<passwordlength; i++){
    var array = userChoices;
    var rand = array[Math.floor(Math.random()* array.length)]
    console.log(rand)
    passwordcontainer.push(rand)
  } return passwordcontainer



}



// Write password to the #password input
function writePassword() {
  var password = generatepass();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

