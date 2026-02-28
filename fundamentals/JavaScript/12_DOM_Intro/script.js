// Select element
let title = document.getElementById("heading");

// Change text
title.innerText = "Welcome to DOM";

// Change style
title.style.color = "blue";
title.style.fontSize = "40px";

// Function for button
function changeText() {
    let para = document.querySelector("p");
    para.innerText = "Text changed using JavaScript 😎";
}