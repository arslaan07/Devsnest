let firstSet = [1,3,5,8,10];
let anotherSet = [2,6,9,12,46,36];
console.log(firstSet, anotherSet);

//we want to add functionality that will
//give us only even numbers from any array

Array.prototype.evenNumbers = function() {
    console.log("-------", this);
    return this.filter(function(item) {
        return item % 2 === 0;
    }) 
    // every object has a property called prototype,
    //  which is an object that serves as a template
    //   for creating other objects

    //advantage of using a prototype is that we can
    //extend a prototype at any given time

    ///filter function is already present in
    //array prototype, it filters the items of array
    //based on specified condition

}

console.log(firstSet.evenNumbers());

//Object create

let org = {
    org: "Devsnest"
}
let newPerson = Object.create(org, {
    name: {
    value : "foo"
    }
})
console.log(newPerson);

//Object assign

// used to merge two objects into one

let someP = {name: "Gaurav"};
let carP = {car: "Some car"};
console.log(Object.assign({}, someP, carP));
