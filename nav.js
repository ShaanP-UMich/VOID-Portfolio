const menu_button = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-items');

allEventListners();

function allEventListners() {
    menu_button.addEventListener('click', togglerClick);
}

function togglerClick() {
    menu_button.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}