console.log('\n 1. Вёрстка соответствует макету. Ширина экрана 768px +48 \n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется. Фоновые изображения, добавляемые свойством background-image, к контенту не относятся, их можно обрезать +15 \n 3. На ширине экрана 768 рх и меньше реализовано адаптивное меню + 22 \n 4. Total points: 85');


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