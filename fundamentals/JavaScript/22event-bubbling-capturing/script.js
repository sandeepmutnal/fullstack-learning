// EVENT BUBBLING (default)

document.getElementById("outer").addEventListener("click", function(){
    console.log("Outer DIV clicked");
});

document.getElementById("middle").addEventListener("click", function(){
    console.log("Middle DIV clicked");
});

document.getElementById("inner").addEventListener("click", function(){
    console.log("Button clicked");
});