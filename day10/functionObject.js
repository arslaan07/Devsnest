var a = 2;

let person = {
    firstName: "Arslaan",
    lastName: "Shakeel",
    getName: function() {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }

}
console.log(this.a);
console.log(person.getName);
getName();