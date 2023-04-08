// //es6
// //template literal syntax

// const name = "John";
// const age = 28;

// console.log("Hi my name is "+name+" and I'm "+age+" years old");


// //in es6
// console.log(`Hi my name is ${name} and I'm ${age} years old`);

// //shorthand property

// let printMe = function () {
//     console.log(this.name, this.age);
// }
// let person = {
//     name, age, printMe() {
//         console.log(this.name,this.age);
//     }
// }
// console.log(person);


//destructuring

// let anotherPerson = {
//     firstName: "john",
//     lastName: "doe",
//     address: {
//         city: "Pune",
//         state: "MH"
//     }
// }

// let {firstName} = anotherPerson;
// //it looks for firstName in anotherPerson object
//     console.log(firstName);

//destructure array

// const fruits = ["Apple", "Orange", "Kiwi"];
// let [ , secondFruit] = fruits;
// console.log("2nd fruit is "+ secondFruit);


//alias
//works like renaming

//  let anotherPerson = {
//         firstName: "john",
//         lastName: "doe",
//         address: {
//             city: "Pune",
//             state: "MH"
//         }
//     }
//  let {firstName : newName} = anotherPerson;
//  console.log(newName);


//rest operator    ... =>ellipsis notation


// let anotherPerson = {
//         firstName: "john",
//         lastName: "doe",
//         address: {
//             city: "Pune",
//             state: "MH"
//         }
//     }
// let {firstName, ...remaining} = anotherPerson;
// //all properties except firstName will be stored in
// //remaining object
// console.log(remaining);


// //spread operator
// const fruits = ["Apple", "Orange", "Kiwi"];
// let moreFruits =[...fruits];
// console.log(moreFruits);



//arrow function

let sum= function(firstNum, secondNum) {
    return firstNum + secondNum;
}

let sumArrow = (firstNum, secondNum) => 
    firstNum + secondNum;

    //if there are multiple statments then we
    //  have to use keyword return



//nullish coalescing operator


let person = {
    name: "abc",
    age: "28"
}
let age = person.age ?? 20;
console.log(age);
//if person didnt have age prop, the 20 will be assigned 
//to age

