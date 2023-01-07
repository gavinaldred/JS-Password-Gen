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

  var length = parseInt(
    prompt('Choose how many characters you would like your password to be, enter a number between 1 and 128')
  );
 if (isNaN(length) === true) {
  alert('Please use numbers and not letters or charters to chooses the length');
  return;
 }

 if (length < 8) {
  alert('Your password needs to be at least 8 characters long');
  return;
 }

 if (length > 128) {
  alert('Your password can\t be longer that 128 characters')
  return;
 }

 var addSpecialChars = confirm(
  'click OK to use special charcters in your password'
 );

 var addNumbers = confirm(
  'click ok to use numbers in your password'
 );

 var addLowerCase = confirm(
  'click ok to use lowercase letters in your password'
 );

 var addUpperCase = confirm(
  'click ok to use uppercase letters in your password'
 );

 if (addSpecialChars === false && addNumbers === false && addLowerCase === false && addUpperCase === false)
 { 
alert('you have to choose some characters!');
return;
 }

 var userPasswordOptions = {
  length: length,
  addSpecialChars: addSpecialChars,
  addNumbers: addNumbers,
  addLowerCase: addLowerCase,
  addUpperCase: addUpperCase
 };

 return userPasswordOptions;

}

// Function for getting a random element from an array

 


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