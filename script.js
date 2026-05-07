// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =========================
// CLOSE MENU
// =========================

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// =========================
// ACTIVE NAV
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// =========================
// REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            reveal.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

// =========================
// TYPING EFFECT
// =========================

const texts = [

    "Future AI & Machine Learning Engineer",
    "Building Predictive Intelligence Systems",
    "Computer Science Student & AI Developer",
    "Focused on Scalable Intelligent Solutions",
    "Passionate About Data-Driven Engineering"

];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex = (textIndex + 1) % texts.length;

        }

    }

    setTimeout(typingEffect, deleting ? 50 : 100);

}

typingEffect();

// =========================
// HEADER SHADOW
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =========================
// PARALLAX GLOW
// =========================

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.querySelectorAll(".gradient-orb").forEach((orb, index) => {

        const speed = (index + 1) * 0.05;

        orb.style.transform =
            `translateY(${scrollY * speed}px)`;

    });

});
