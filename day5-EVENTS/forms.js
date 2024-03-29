document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit",function(event){
        console.log(event);
        event.preventDefault();
        //to stop page from refreshing and to see event on console
        const form = event.target;
        console.log(form.username.value);
        console.log(form.email.value);
        const mobileNumber = parseInt(form.mobile.value);
        // if(mobileNumber.toString == NaN.toString){
        //     alert("Please enter a valid number !");
        // }
        // else
        console.log(mobileNumber);
    })

    document.getElementById("email").addEventListener("input", function(event){
        const emailElement  = event.target;
        console.log(emailElement.value)
        if(emailElement.validity.typeMismatch==true) {
            emailElement.setCustomValidity("Please enter a valid email address");
            emailElement.reportValidity();
            //reportValidity will report the validation to browser
        }
        else{
            emailElement.setCustomValidity("");
        }
    })

    document.addEventListener("click", function() {
        console.log(document.getElementById("outside").value);
    })

})
