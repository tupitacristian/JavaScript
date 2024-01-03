// Operatori

// 1. Aritmetici +, - , /, *, ++, --

const sum = 1 + 1; console.log(sum);
const difference = 2 - 1; console.log(difference);
const division = 10 / 5; console.log(division);
let multiplication = 2 * 2; console.log(multiplication);

multiplication++;

console.log(multiplication);

multiplication--;

console.log(multiplication);

// 2. Logici && AND, || OR, ! NOT

// && - si
// || - ori
// ! - negatie

// 3. Comparatie ==, !=, ===, !==, >=, <=

const number1 = 12;
const number2 = 10;

console.log(number1 == number2); // false
console.log(number1 != number2); // true numar 1 este diferit de numar 2

const myNumber = "12";

console.log(number1 === myNumber); // false

console.log(number1 >= number2);
console.log(number1 <= number2);

// 4. Atribuire =, +=, -=, *=, /=

const myName = "Cristi";
const mySecondNumber = 20;
console.log("My number: " + mySecondNumber);
mySecondNumber += 10;
console.log("My number: " + mySecondNumber);
