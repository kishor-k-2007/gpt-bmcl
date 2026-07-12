// ===============================
// GPT Bethamcharlla Final JS
// ===============================

// Mobile Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){
    menuBtn.onclick = () => {
        navbar.classList.toggle("active");
    };
}

// Close menu after clicking link (mobile)
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Sticky header shadow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.18)";
    }else{
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".card, .home-section, .page-section"
);

function revealOnScroll(){
    const trigger = window.innerHeight - 100;

    revealElements.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if(top < trigger){
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

// Initial hidden state
revealElements.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Form Submission Alert
const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Your message has been submitted successfully!");
        form.reset();
    });
});