//TYPEWRITER EFFECT

const dynamicContent=document.getElementById("dynamic-text");

const phrases= ["Software Engineer...", "Mentor...", "Human Being..." ];
let letterIndex=0;
let phraseIndex=0;
function printLetters(phrase){

    if(letterIndex == phrase.length){
        clearLetters();
    }
    // console.log(phrase.length);
    else if(letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);
    console.log(dynamicContent.textContent);
    letterIndex++;
    setTimeout(function() {
        printLetters(phrase)
    }, 150)
}

    // setTimeout()
}
function clearLetters(){
    if(letterIndex == -1) {
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex=0;
        printLetters(phrases[phraseIndex]);
    }
    else if(letterIndex > -1) {
    let updatedPhrase ="";
    for(let index=0;index < letterIndex;index++){
        updatedPhrase += phrases[phraseIndex].charAt(index);
    }
    console.log(updatedPhrase);
    dynamicContent.textContent=updatedPhrase;
    // console.log(dynamicContent);
    letterIndex -= 1;
    setTimeout(function(){
        clearLetters();
    },75);
    }
}
printLetters(phrases[phraseIndex]);

document.getElementById("email").addEventListener("input", function(event) {
    const emailContent = event.target;
    if(emailContent.validity.typeMismatch){
        emailContent.setCustomValidity("Enter a valid email address");
        emailContent.reportValidity();
    }
    else{
        emailContent.setCustomValidity("");
    }
});