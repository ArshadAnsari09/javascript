// console.log("Good");

// var name = "Arshad";
// console.log(name.toUpperCase());
// 1 asking user to enter his/her name
var name = prompt("What is your name");
var length = name.length;

// 2 capitalise the first letter of user's name

// 2a isolate the first letter
var firstChar = name.slice(0,1);

// 2b capitalise the firstChar
firstChar = firstChar.toUpperCase();

//2c isolate other chars
var otherChars = name.slice(1,length);

//2d convert otherChars into lowerCase
otherChars = otherChars.toLowerCase();

//2e concatenate both upper and lowercase part
var capitaliseName = firstChar + otherChars;

//3 greet user's by capitalise its first letter 
alert("Hello " + capitaliseName);
