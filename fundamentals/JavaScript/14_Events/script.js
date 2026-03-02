// MOUSE EVENTS
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    alert("Button clicked!");
});

btn.addEventListener("mouseover", function() {
    btn.style.backgroundColor = "green";
});

btn.addEventListener("mouseout", function() {
    btn.style.backgroundColor = "gray";
});


// KEYBOARD EVENTS
let input = document.getElementById("input");

input.addEventListener("keyup", function() {
    console.log("Typing:", input.value);
});


// FORM EVENTS
let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});