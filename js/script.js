//burger menu
const burgerBtn = document.querySelector(".burgerBtn");
const navBurger = document.querySelector(".nav-burger");

burgerBtn.addEventListener("click", toggleStuff);

navBurger.addEventListener("click", toggleStuff);

function toggleStuff () {
    burgerBtn.classList.toggle("open");
    navBurger.classList.toggle("toggle");
}
