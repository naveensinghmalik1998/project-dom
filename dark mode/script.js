var toggled = false; 

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle-container").onclick = function () {
        console.log('clicked');
    if(!toggled) {
        hTag.classList.add("color-white");
        bodyTag.classList.add("bg-toggle-color");
        circle.classList.add("dark-mode")

        toggled = true;
    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bg-toggle-color");
        circle.classList.remove("dark-mode")

        toggled = false;
    }
    
}
