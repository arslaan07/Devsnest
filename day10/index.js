function add(firstNum){
    return function(secondNum){
        return firstNum + secondNum;
    }
}
console.log(add(6)(2));
let addWith = add(5);
console.log(addWith(2));

//call back function

function callMeOnceDone(fn) {
    console.log("i'm done");
    fn();
    
}
function printText() {
    console.log("hello");
}
callMeOnceDone(printText);