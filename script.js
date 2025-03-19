const roles = [
    "Web Designer",
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer",
    "Software Tester",
];
let currentRoleIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Speed of typing
const erasingSpeed = 100; // Speed of erasing
const delayBetweenRoles = 1500; // Delay before switching roles
const spanElement = document.querySelector(".text-animation span");

function type() {
    if (charIndex < roles[currentRoleIndex].length) {
        spanElement.textContent += roles[currentRoleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        spanElement.textContent = roles[currentRoleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenRoles);
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id +']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}