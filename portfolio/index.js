console.log('\n Вёрстка соответствует макету. Ширина экрана 768px +48 \n 2) Ни на одном из разрешений до 320 px включительно не появляется горизонтальная полоса прокрутки + 15 \n 3) На ширине экрана 768 рх и меньше реализовано адаптивное меню + 22 ');

const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navUl = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('.nav-ul-a');
const bgBlack = document.createElement('div');
document.body.append(bgBlack);

hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    navUl.classList.toggle('is-active');
    bgBlack.classList.toggle('bg-black');
});

function closeMenu() {
    if (event.target.classList.contains('.nav-ul-a')) {
        hamburgerBtn.classList.remove('is-active');
        nav.classList.remove('is-active');
        navUl.classList.remove('is-active');
        bgBlack.classList.toggle('bg-black');
    }
}
nav.addEventListener('click', closeMenu);