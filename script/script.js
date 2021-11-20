'use strict';

// Mobile navigation
const mobileNav = document.querySelector('.mobile_nav'),
    toggler = document.querySelector('.mobile_toggle__input');

toggler.addEventListener('change', () => {
    mobileNav.classList.toggle('open_nav');
})

// Scrolling progress bar 
const progressBar = document.querySelector('#progressBar');

window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;

    progressBar.style.width = scrolled + "%";
});

// Navigation scroling
let smoothLinks = document.querySelectorAll('._scrollTo');

for (let item of smoothLinks) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = item.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Sticky heaader
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})

// Touchscreen event
const projectDescr = document.querySelector('.project_descr');

projectDescr.addEventListener('touchstart', () => {
    if(projectDescr.contains('touchscreen_event')) {
        projectDescr.classList.remove('touchscreen_event');
    } else {
        projectDescr.classList.add('touchscreen_event');
    }
})

// Sending form
const url = '',
      form = document.querySelector('#contact-form'),
      messages = document.querySelector('#messages'),
      succ = document.querySelector('form_messages__success'),
      err = document.querySelector('.form_messages__error'),
      formButton = document.querySelector('#form-button');

function postData() {
    fetch(url, {method: 'POST'}).then(response => {
        if (!response.ok){
            throw new Error('Network response was not ok.'),
            animateError();
        } else {
            setTimeout( () => {
                form.reset();
                animateSuccess()
              },3500);
        }
    }).catch((err) => {
    	animateError();
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    postData();
});

function animateSuccess() {
        formButton.classList.remove('animate');
        formButton.classList.add('animate');
        formButton.classList.add('success');
        alert()
        succ.style.display = 'block';
    setTimeout(function(){
      formButton.classList.remove('animate')
      formButton.classList.remove('success');
    },4000);
};

function animateError() {
        formButton.classList.remove('animate');
        formButton.classList.add('animate');
        formButton.classList.add('error');
        err.style.display = 'block';
        alert()
    setTimeout(function(){
      formButton.classList.remove('error');
      formButton.classList.remove('animate');
    },6000);
};

function alert() {
    messages.style.display = 'flex';
    setTimeout( () => {
        messages.style.display = 'none';
    },6000);
}

// Preloader 
const preloader = document.querySelector('#preloader');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout( () => {
        preloader.classList.add('hide');
    }, 3000);
})