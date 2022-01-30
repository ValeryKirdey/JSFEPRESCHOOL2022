// const hamburgerbtn = document.querySelector('.hamburger');
// const nav = document.querySelector('nav');
// const navTitle = document.querySelector('.nav-title');
// const navReference = document.querySelectorAll('.nav-ref');
// const bgShadow = document.createElement('div');
// document.body.append(bgShadow);

// hamburgerbtn.addEventListener('click', function() {
//     hamburgerbtn.classList.toggle('is-active');
//     nav.classList.toggle('is-active');
//     navTitle.classList.toggle('is-active');
//     bgShadow.classList.toggle('shadow');
// });

// function closeMenu() {
//     if (event.target.classList.contains('nav-ref')) {
//         hamburgerbtn.classList.remove('is-active');
//         nav.classList.remove('is-active');
//         navTitle.classList.remove('is-active');
//         bgShadow.classList.remove('shadow');
//     }
// }
// nav.addEventListener('click', closeMenu);

//----------------------------------------------------

import i18Obj from './translate.js';
const body = document.querySelector('.body');
const btnBurger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const menuBurger = document.querySelector('nav');
const listBurger = document.querySelector('.nav-title');
const overlay = document.querySelector('nav');
const btnPortfolioCont = document.querySelector('.portfolio-btns');
const btnPortfolio = document.querySelectorAll('.seasons-btn');
const imgPortfolio = document.querySelectorAll('.portfolio-content__img');
const langItem = document.querySelectorAll('.header__lang-item');
const section = document.querySelectorAll('.section');
const sectionHeader = document.querySelectorAll('.section-title-text');
const btnTheme = document.querySelector('.header__change-theme');
const btnAll = document.querySelectorAll('.button-theme');
let lange = 'en';
let theme = 'dark';

// Local storage for language
function getLocalStorage() {
    if (localStorage.getItem('lange')) {
        const language = localStorage.getItem('lange');
        getTranslate(i18Obj[language]);
    }
    langItem.forEach((el) => {
        if (el.dataset.i18 === localStorage.getItem('lange')) {
            el.classList.add('header__lang_active');
        }
        if (localStorage.getItem('lange') === null) {
            setLocalStorage();
        }
    });
}
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
    localStorage.setItem('lange', lange);
    langItem.forEach((el) => {
        if (el.dataset.i18 === localStorage.getItem('lange')) {
            el.classList.add('header__lang_active');
        }
    });
}
// Local storage for theme
function getLocalStorageTheme() {
    if (localStorage.getItem('theme') === null) {
        setLocalStorageTheme();
    }
    if (localStorage.getItem('theme') === 'light') {
        changeTheme()
    }
}
window.addEventListener('load', getLocalStorageTheme);

function setLocalStorageTheme() {
    localStorage.setItem('theme', theme);
}

// Open burger-menu
btnBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('nav__header_active');
    listBurger.classList.toggle('header__nav_active');
    body.classList.toggle('body__body_active');
    btnBurger.classList.toggle('active');
});

// Close burger-menu 
const closeMenu = (e) => {
    if (e.target.classList.contains('nav-ref')) {
        menuBurger.classList.remove('nav__header_active');
        listBurger.classList.remove('header__nav_active');
        body.classList.remove('body__body_active');
        btnBurger.classList.remove('active');
    }
};
listBurger.addEventListener('click', closeMenu);

// Close burger-menu (click overlay)
overlay.addEventListener('click', e => {
    if (!e.target.closest('.nav-title')) {
        menuBurger.classList.remove('nav__header_active');
        listBurger.classList.remove('header__nav_active');
        body.classList.remove('body__body_active');
        btnBurger.classList.remove('active');
    }
});

// Change seasons photos in portfolio section
const changePhoto = (e) => {
    if (e.target.classList.contains('seasons-btn')) {
        btnPortfolio.forEach(el => el.classList.remove('season-content_active'));
        e.target.classList.add('season-content_active');
        let seasons = e.target.dataset.season;
        imgPortfolio.forEach((img, index) => img.src = `assets/img/${seasons}/${index + 1}.jpg`);
    }
};
btnPortfolioCont.addEventListener('click', changePhoto);

// Image caching
function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    for (let i = 1; i <= 6; i++) {
        for (let k = 0; k < seasons.length; k++) {
            const img = new Image();
            img.src = `assets/img/${seasons[k]}/${i}.jpg`;
        }
    }
}
preloadImages();

//Translate page
const getTranslate = (lang) => {
    const transAtr = document.querySelectorAll('[data-i18]');
    const transInp = document.querySelectorAll('.contacts-input');
    transAtr.forEach(el => {
        let valueData = el.dataset.i18;
        el.textContent = `${lang[valueData]}`;
    });
    transInp.forEach(elem => {
        let valueData = elem.dataset.i18;
        elem.placeholder = `${lang[valueData]}`;
    })
};

const changeTranslate = (e) => {
    if (e.target.classList.contains('header__lang-item')) {
        langItem.forEach(el => el.classList.remove('header__lang_active'));
        e.target.classList.add('header__lang_active');
        getTranslate(i18Obj[e.target.dataset.i18]);
    }
    lange = e.target.dataset.i18;
    setLocalStorage();
};
langItem.forEach(el => el.addEventListener('click', changeTranslate));

//Change theme
const changeTheme = () => {
    section.forEach((el, idx) => {
        if (idx !== 1 && idx !== section.length[3]) {
            el.classList.toggle('light-theme');
        }
    });
    sectionHeader.forEach((el, idx) => {
        if (idx !== sectionHeader.length - 1) {
            el.classList.toggle('light-theme__header');
        }
    });
    header.classList.toggle('header__light-theme');
    btnTheme.classList.toggle('change__theme_active');
    if (btnTheme.classList.contains('change__theme_active')) {
        theme = 'light';
        setLocalStorageTheme();
    } else {
        theme = 'dark';
        setLocalStorageTheme();
    }
};
btnTheme.addEventListener('click', changeTheme);

//Ripple effect
btnAll.forEach(el => el.addEventListener('click', function(e) {
    const x = e.pageX
    const y = e.pageY
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    const xInside = x - buttonLeft
    const yInside = y - buttonTop
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
    this.appendChild(circle)
    setTimeout(() => circle.remove(), 500)
}))