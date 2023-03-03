const para=document.createElement("p");
para.textContent="this is created using DOM API";
para.classList.add("one"); //classList is kind of an array
para.classList.add("second-class");
para.classList.remove("second-class");
para.setAttribute("id", "js-para");
document.body.appendChild(para);
console.log(para.getAttribute("id"));

const span = document.createElement("span");
span.id="span-id";
span.className ="blue"; //to give blue color as mentioned in <style> tag
// span.textContent = " this is span created using <em>DOM.createElement<em>";
span.innerHTML = "this is span created using <em>DOM.createElement</em>";
//innerHTML allows to use html tags in text content
span.style.backgroundColor= "red";//styling info in <style> prop.
para.appendChild(span);
console.log(span.getAttribute("class"));