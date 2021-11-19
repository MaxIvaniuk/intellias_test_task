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
        console.log('scroll is more then 100')
    } else {
        header.classList.remove('sticky')
    }
})