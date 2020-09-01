let menu = document.getElementById("menu")
let nav = document.getElementById("nav")
var myVar;

function myMenu() {
    menu.classList.toggle("hidden")
    menu.classList.toggle("show")
    nav.classList.toggle("nav_hidden")
    nav.classList.toggle("nav_shown")
}

function myNav() {
    nav.classList.toggle("nav_hidden")
    nav.classList.toggle("nav_shown")
    menu.classList.toggle("hidden")
    menu.classList.toggle("show")
}


// function myFunction1() {
// myVar = setTimeout(myMenu, 400);
// }

// function myFunction2() {
// myVar = setTimeout(myNav, 400);
// }