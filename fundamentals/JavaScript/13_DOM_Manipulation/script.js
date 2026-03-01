// Select elements
let title = document.getElementById("heading");
let para = document.getElementById("para");
let btn = document.getElementById("btn");

// Change style initially
title.style.color = "blue";

// Event listener
btn.addEventListener("click", function() {
    
    // Change text
    title.innerText = "You clicked the button 🚀";

    // Change paragraph
    para.innerText = "DOM Manipulation working!";

    // Change styles
    title.style.color = "red";
    para.style.fontSize = "20px";
});