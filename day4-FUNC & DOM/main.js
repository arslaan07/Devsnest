        let firstNumber=5;
        let secondNumber=12;
        // if(num2>num1)
        // console.log(num2 + " is greater than " + num1);
        // else if(num2<num1)
        // console.log(num2 + " is less than " + num1);
        // else{
        // console.log("Both the numbers are equal");
        // console.log("this is another statement");
        // }

        function compareNumber(firstNumber, secondNumber){
            if(secondNumber>firstNumber)
            console.log(secondNumber + " is greater than " + firstNumber);
            else if(secondNumber<firstNumber)
            console.log(secondNumber + " is less than " + firstNumber);
            else{
            console.log("Both the numbers are equal");
            console.log("this is another statement");
            }
        }

        compareNumber(firstNumber,secondNumber);
        compareNumber(12,5);

        function print(){
            console.log("This is printed in the console");
        }
        print();

        function addNumber(firstNumber,secondNumber){
            return firstNumber+secondNumber;
        }
        let sum=addNumber(12,5);
        console.log(sum);

        //anonymous function

        let subtract= function(firstNumber, secondNumber){
            return firstNumber - secondNumber;
        }
        console.log(subtract(3,5));

        const person = {
            firstName: "John",
            lastName: "Doe",
            print: function(){
                console.log("this function is a property of an object");
            }
        }

        person.print();