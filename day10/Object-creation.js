//object literal syntax

let person2 = {
    firstName : "Arslaan",
    lastName : "Shakeel"
}
console.log(person2);

//another way of creating an object 

let anotherPerson = new Object();
    anotherPerson.firstName = "John";
    anotherPerson.lastName = "Doe";
console.log(anotherPerson);

//function constructor

function person3(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
let jane = new person3("Jane", "Doe");
console.log(jane);
let gaurav = new person3("Gaurav", "Sen");
console.log(gaurav);

//prototypal inheritance is a bit complex,
//so i'm leaving it for now