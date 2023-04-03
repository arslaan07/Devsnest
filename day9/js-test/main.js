
// function printMe() {
//     var a = 2;
//     console.log(a);
// }
// printMe();
// console.log(a);

function a() {
    var b =  10;
    c();
    function c() {
        console.log(b);
    }
}
a();
// output will be 10 bcuz c() contains memory
// refernce of its lexical parent

function a() {
    var b =  10;
    c();
}
function c() {
    console.log(b);
}
a();
// output will show b not defined as lexical parent
// of c() is GEC where b is not declared