// ================= TYPING EFFECT =================

const roles = [
    "Full Stack Developer",
    "Data Analyst",
    "UI/UX Designer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const span = document.querySelector(".home-content span");

    let currentRole = roles[roleIndex];

    if (!deleting) {
        span.textContent = currentRole.substring(0, charIndex++);
    } else {
        span.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================= COUNTERS =================

function counter(id, end) {

    let value = 0;

    let interval = setInterval(() => {

        value++;

        document.getElementById(id).innerHTML = value + "+";

        if (value === end) {
            clearInterval(interval);
        }

    }, 150);

}

counter("project-count", 3);
counter("cert-count", 6);
counter("intern-count", 1);


// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================= HEADER BACKGROUND =================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.style.background = "#081b29";
    }
    else {
        header.style.background = "rgba(255,255,255,.05)";
    }

});


// ================= DARK MODE =================

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

    let icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

};


// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
".heading,.box,.about-card,.interest-card,.project-card,.timeline-item,.certificate-card");

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ================= PARTICLES =================

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 50; i++) {

    let particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.width = particle.style.height =
        Math.random() * 8 + 3 + "px";

    particle.style.animationDuration =
        Math.random() * 10 + 8 + "s";

    particleContainer.appendChild(particle);

}


// ================= FLOATING ICONS =================

const iconContainer = document.createElement("div");

iconContainer.classList.add("floating-icons");

document.body.appendChild(iconContainer);

const techIcons = [
    "fa-html5",
    "fa-css3-alt",
    "fa-js",
    "fa-java",
    "fa-github"
];

for (let i = 0; i < 15; i++) {

    let icon = document.createElement("i");

    let randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];

    icon.className = `fa-brands ${randomIcon}`;

    icon.style.left = Math.random() * 100 + "%";

    icon.style.animationDuration =
        Math.random() * 10 + 10 + "s";

    iconContainer.appendChild(icon);

}


// ================= CERTIFICATE AUTO SLIDE =================

const slider = document.querySelector(".certificate-slider");

setInterval(() => {

    slider.scrollBy({
        left: 300,
        behavior: "smooth"
    });

    if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth
    ) {
        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }

}, 3000);


// ================= SMOOTH SCROLL =================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        document.querySelector(
            link.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});