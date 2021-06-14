//burger menu
const burgerBtn = document.querySelector(".burgerBtn");
const navList = document.querySelector(".nav__list");

burgerBtn.addEventListener("click", toggleStuff);

navList.addEventListener("click", toggleStuff);

function toggleStuff () {
    burgerBtn.classList.toggle("open");
    navList.classList.toggle("toggle");
}