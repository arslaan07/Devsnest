document.addEventListener("DOMContentLoaded", function() {
    function handleMouseOver(event) {
        console.log(event);
    }

    // This DOMContentLoaded event is particularly useful for executing JavaScript 
    // code that manipulates the DOM or interacts with elements on the 
    // page, as it ensures that the necessary elements are available 
    // before the code runs.


    //event object contains info about the event 
    
    document.getElementById("start").addEventListener("click", function handleClick() {
        document.addEventListener("mouseover", handleMouseOver);
    });
    document.getElementById("stop").addEventListener("click", function handleClick() {
        document.removeEventListener("mouseover", handleMouseOver);
    });
    
    
    document.addEventListener("keypress", function(e){
        console.log("keypress");
        if(e.key==2){
            e.preventDefault();
        }
        console.log(e.key);
    } )
    
    document.addEventListener("keydown", function(e) {
        console.log("keydown");
        console.log(e);
    })
    
    document.addEventListener("keyup", function(e) {
        console.log("keyup");
        console.log(e);
    })
    
    document.querySelector(".parent").addEventListener("click", function() {
        console.log("parent clicked");
    })
    
    document.querySelector(".child").addEventListener("click", function() {
        console.log("child clicked");
    })
    
    document.getElementById("subchild").addEventListener("click", function(event) {
        console.log("subchild clicked");
        event.stopPropagation();
    
        // stopPropagation method prevents event bubbling to occur
    })
     
    // Event capture
    document.querySelector(".parent").addEventListener("click", function() {
        console.log("parent clicked");
    },true);
})
// Event capture and event bubbling are two different mechanisms for handling events in JavaScript.

// Event capture is the process of capturing an event at the top level of the DOM (Document Object Model) and then propagating it down to the target element.
//  In other words, the event is captured by the parent elements first and then propagated down to the child elements until it reaches the target element. 
//  This mechanism is also known as the "capturing phase" of event propagation.

// Event bubbling, on the other hand, is the process of propagating an event from the target element up through its parent elements to the top level of the DOM. 
// In this mechanism, the event starts at the target element and then propagates up the DOM tree until it reaches the top level. 
// This mechanism is also known as the "bubbling phase" of event propagation.

// By default, events in JavaScript use the event bubbling mechanism.
//  However, you can also use event capture by setting the "useCapture" parameter to "true" when adding an event listener.