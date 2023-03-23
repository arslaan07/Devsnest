const para=document.createElement("p");
para.textContent="this is created using DOM API";
para.classList.add("one"); //classList is kind of an array
para.classList.add("second-class");
para.classList.remove("second-class");
para.classList.add("third-class");

document.body.appendChild(para);
//appending the element in body of index.html
para.setAttribute("id", "js-para");

console.log(para.getAttribute("id"));
console.log(para.getAttribute("class"));

const span = document.createElement("span");
span.id="span-id";
span.className ="blue"; //to give blue color as mentioned in <style> tag
// span.textContent = " this is span created using <em>DOM.createElement<em>";
// span.className="green";
span.innerHTML = "this is span created using <em>DOM.createElement</em>";
//innerHTML allows to use html tags in text content
span.style.backgroundColor= "red";//styling info in <style> prop.
para.appendChild(span);
console.log(span.getAttribute("class")); 

const hobbies = ["coding", "swimming", "jogging"];
const list = document.createElement("ul");
for(let hobby of hobbies){
    list.innerHTML += "<li class='blue'>" + hobby + "</li>";
}
document.body.appendChild(list);

console.log(document.getElementById("first-para").textContent);
console.log(document.getElementsByClassName("blue"));
console.log(document.querySelector("p"));
//querySelector returns the first element that matches requirements
console.log(document.querySelectorAll("p"));
