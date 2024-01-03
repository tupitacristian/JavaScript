// primitive si obiecte

//Primitive
//Boolean
let boolean = true;

// Null
let n = null;

// Undefined
let undf = undefined;

// Number 
let num = 123;

// String
let str = "Acesta este un string.";

console.log(str);
console.log(typeof(str));

// Obiect
let person = {
    age : 20,
    name : "Cristian"
};

let person2 = {
    age : 30,
    name : "Cernea"
};

console.log(person);

// Array 
const hobbies = ["Reading", "Biking", "Swimming"];
const prices = [12.5, 13.3, 25.7, 30.1];

const biking = hobbies[1];

const price = prices[3];
console.log(price);

const persons = [person, person2];

console.log(persons);

// Putem sa declaram arrayuri si asa

const oameni = [{id: 1, age: 33, email: "omul1@email.com"},
{id: 2, age: 40, email: "omul2@email.com"}];

console.log(oameni);