var a = 2;

let person = {
    firstName: "Arslaan",
    lastName: "Shakeel",
    getName: function() {
        return this.firstName + " " + this.lastName;
    }

}
console.log(this.a);
console.log(person.getName());

function greetPerson(greeting) {
    console.log(greeting+" " + this.getName());
    //here this does not refer to person object,
    //so it cant access getName() func.
}
// greetPerson();

//so what we can do is, we can bind greetPerson() 
//with person object so a new copy of function 
//greetPerson() is created and now this keyword 
//is equal to person object

// let greetArslaan = greetPerson.bind(person);
// console.log(greetArslaan());

//But if we dont want to create a new copy of function
//then we can use the call method

// greetPerson.call(person,"Namaste");
//the first argument should be the object to which
//this will point and the second argument is the
//value passed to the function
//we can omit the second parameter if we want


//apply
//apply function works in same way as call function,
//difference is just that the second agrument is 
//passed as an array
greetPerson.apply(person,["Namaste"]);


//concept of arguments
//we can pass parameters with the help of argument function
function sum() {
    let total=0;
    for(let index=0;index<arguments.length;index++){
        total+=arguments[index];
    }
    console.log(total);
}
sum(2,3,4,5,-4);


//function borrowing

let doctor = {
    firstName: "John",
    lastName: "Doe"
}
console.log(person.getName.call(doctor));
// function borrowing is the process of using a method from
//  one object and applying it to another object. This can 
//  be useful when you want to reuse existing code without 
//  having to rewrite it.

//function currying

function logData(date, data) {
    console.log(date, data);
}

logData(new Date(), "this is data to be logged");
let logNow= logData.bind(null, new Date());
logNow("this is another info to be logged");

// function currying is a technique that allows you to transform a 
// function that takes multiple arguments into a sequence of
//  functions that each take a single argument. This can be useful 
//  in situations where you want to reuse a function with a 
//  specific set of arguments, or when you want to create a new 
//  function that is a variation of an existing function.

// function add(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   const add5 = add(5); // returns a new function that adds 5 to its argument
  
//   console.log(add5(3)); // outputs 8

//Another example
// function multiply(x, y) {
//     return x * y;
//   }
//   We can use currying to create a new function double that multiplies
//    a single argument by 2:

//    const double = multiply.bind(null, 2);

// In this example, we use the bind() method to create a new function double
//  that is a partial application of the multiply() function with the first
//   argument set to 2. When we call double(5), it is equivalent to calling 
//   multiply(2, 5), which returns the value 10.
// In this example, null is passed as the first argument to bind() to indicate that 
// we don't want to modify the value of this inside the multiply() function. The 
// second argument to bind() is 2, which is the value that we want to partially 
// apply as the first argument to multiply().


// console.log(double(5)); // outputs 10

  