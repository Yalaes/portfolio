//burger menu
const burgerBtn = document.querySelector(".burgerBtn");
const navBurger = document.querySelector(".nav-burger");

burgerBtn.addEventListener("click", toggleStuff);

navBurger.addEventListener("click", toggleStuff);

function toggleStuff () {
    burgerBtn.classList.toggle("open");
    navBurger.classList.toggle("toggle");
}

//fade in observer
const toFade = document.querySelectorAll(".container");
const options = {
    root: null
}

const observer = new IntersectionObserver(beInTouch, options);
toFade.forEach(el => {
    observer.observe(el);
})

function beInTouch(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("fade")
        }
    });
}