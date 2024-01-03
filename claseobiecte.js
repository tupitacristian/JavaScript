class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    calculateAge(){
        return new Date().getFullYear() - this.dateOfBirth.getFullYear();
    }
}

var p = new Person("Mihai", "Angelescu", new Date("11-11-1989"));
console.log("Mihai Angelescu are " + p.calculateAge() + " de ani");