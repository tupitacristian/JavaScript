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

// Bracket Notation to Find First Character in String

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[1];
console.log(firstLetterOfLastName);

// String Immutability

var myStr = "Jello World";

myStr[0] = "H"; // incorect
myStr = "Hello World";

// Bracket Notation to Find Last Character in String

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

// WordBlanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Nested Arrays or a multidimensional array

var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["universul", 44], ["orice", 1010101]];

// Access Array Data

var ourArray = [50, 60, 70];
var ourData = ourArray[2];
console.log(ourData);

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

