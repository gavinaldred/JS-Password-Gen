// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var length = parseInt( // stores the users password length as an interger
    prompt('Choose how many characters you would like your password to be, enter a number between 10 and 64')
  );
 if (isNaN(length) === true) {// if the users has entered a value that is not a number, this will trigger
  alert('Please use numbers and not letters or charters to chooses the length');
  return; // return ends the function
 }

 if (length < 10) { // checks if the minimum length password criteria is met
  alert('Your password needs to be at least 10 characters long');
  return;
 }

 if (length > 64) { // checks that the maximum password length criteria is not breached
  alert('Your password can"t" be longer that 128 characters')
  return;
 }

 var addSpecialChars = confirm( // asks the user if they want special characters in their password and stores a boolean in the variable
  'click OK to use special charcters in your password'
 );

 var addNumbers = confirm( // asks the user if they want numbers in their password and stores a boolean in the variable
  'click ok to use numbers in your password'
 );

 var addLowerCase = confirm( // asks the user if they want lower case characters in their password and stores a boolean in the variable
  'click ok to use lowercase letters in your password'
 );

 var addUpperCase = confirm( // asks the user if they want upper case characters in their password and stores a boolean in the variable
  'click ok to use uppercase letters in your password'
 );

 if (addSpecialChars !== true && addNumbers !== true && addLowerCase !== true && addUpperCase !== true) // if all the user declines all options, then user alerted
 { 
alert('you have to choose some characters!');
return; // function ends
 }

 var userPasswordOptions = { // object that stores the password options (true / false) from user input into key pairs, as well as the length from the parseINT
  length: length,
  addSpecialChars: addSpecialChars,
  addNumbers: addNumbers,
  addLowerCase: addLowerCase,
  addUpperCase: addUpperCase
 };

 return userPasswordOptions;

}

// Function for getting a random element from an array // found this on https://www.programiz.com/javascript/examples/get-random-item - will be used later when pushing a random part of an array to users password

function getRandom(arr) {
    // get random index value
  var randIndex = Math.floor(Math.random() * arr.length);
   // get random item
  var randElement = arr[randIndex];

  return randElement;
}


// Function to generate password with user input


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 