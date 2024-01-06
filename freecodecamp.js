/*Learn JavaScript - Full Course for Beginners */

//Compound Assignment with Augmented Addition +, - , *, /

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = 9 + b;
c = c + 7;

// The modification

a += 12;
b += 9;
c += 7;

// Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// Concatenating Strings with Plus Equals Operator

var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

console.log(myStr);

// Construncting strings with variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Beau";
var myStr = "My name is " + myName + " and i am very good!";
console.log(myStr);

// Appending Variables to Strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var lumina = "frumoasa!";
var ourStr = "Lumea este ";
ourStr += lumina;

// Find Length of String

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);
