'use strict';

// Mobile navigation
let mobileNav = document.querySelector('.mobile_nav'),
    toggler = document.querySelector('.mobile_toggle__input');

toggler.addEventListener('change', () => {
    mobileNav.classList.toggle('open_nav');
})

// Sticky heaader
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})

// Accordeon
// let accordeon = document.querySelector('.hard_skills'),
//     opener = document.querySelector('.hard_skills__list');

// accordeon.addEventListener('click', () => {
//     opener.classList.add('active');
// })