const hamburgerbtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navTitle = document.querySelector('.nav-title');
const navReference = document.querySelectorAll('.nav-ref');
const bgShadow = document.createElement('div');
document.body.append(bgShadow);

hamburgerbtn.addEventListener('click', function() {
    hamburgerbtn.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    navTitle.classList.toggle('is-active');
    bgShadow.classList.toggle('shadow');
});

function closeMenu() {
    if (event.target.classList.contains('nav-ref')) {
        hamburgerbtn.classList.remove('is-active');
        nav.classList.remove('is-active');
        navTitle.classList.remove('is-active');
        bgShadow.classList.remove('shadow');
    }
}
nav.addEventListener('click', closeMenu);