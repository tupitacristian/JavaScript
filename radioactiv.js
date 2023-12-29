var nume = "Cristian";
var nume_marime = nume.length;
console.log(nume_marime); // arata cate caractere sunt
console.log(nume.length);// aici este la fel
console.log(nume.slice(0,6));

var scris = prompt("Adauga aici :");
var scrisSub140 = scris.slice(0,140);
alert(scrisSub140);

var nume = "Cristian";
console.log(nume = nume.toUpperCase(4,7));

// 1 Create a var that stores the name that user enters via prompt.

var name = prompt("What is your name?");

// 2 Capitalise the first letter of their name.

// a isolate the first char
var firstChar = name.slice(0,1);

// b Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// c Isolate the rest of the name
var restOfName = name.slice(1,name.length);

// d concatenate the first char with the rest of the char
var capitalsedName = upperCaseFirstChar + restOfName;
