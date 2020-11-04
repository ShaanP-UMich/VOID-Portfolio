const menu_button = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-items');

allEventListners();

function allEventListners() {
    hamburger.addEventListener('click', togglerClick);
}

function togglerClick() {
    hamburger.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}