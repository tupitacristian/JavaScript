const age = 18;

// if/else
if(age < 18){
    console.log("You are under aged.");
} else {
    console.log("You are an adult.");
}

// for loop
const people = ["Bogdan", "Mihai", "Andreea", "Ovidiu"];

for(i=0; i<people.length; i++){
    console.log(people[i]);
}

for(i=people.length - 1; i>=0; i--){
    console.log(people[i]);
}

let number = 1;

// while

while(number <= 10){
    console.log(number);
    number++;
}

// do while

do {
    number++;
    console.log(number);
}while(number <= 10);