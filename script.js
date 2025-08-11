let slides = document.querySelectorAll(".slides img");
let index = 0;

// Slideshow functionality
setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);

// Navbar scroll color change
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 165, 0, 0.9)"; // Orange
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.7)"; // Original black
    }
});
