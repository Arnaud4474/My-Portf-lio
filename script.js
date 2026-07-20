// ======= Rolagem suave =======
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ======= Scroll Reveal Animation =======
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ======= Dark Mode =======
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ======= Animação de Digitação =======
const typingElement = document.getElementById('typing-text');
const text = "Olá, eu sou Arnaud Roberto";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        typingElement.innerHTML += "<span class='cursor'>|</span>";
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);