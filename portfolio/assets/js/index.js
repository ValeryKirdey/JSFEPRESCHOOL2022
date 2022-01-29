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

//----------------------------------------------------

import i18Obj from './translate.js';
const body = document.querySelector('.body');
const btnBurger = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const menuBurger = document.querySelector('.header__nav');
const listBurger = document.querySelector('.nav-header__list');
const overlay = document.querySelector('.header__nav');
const btnPortfolioCont = document.querySelector('.portfolio-content__seasons');
const btnPortfolio = document.querySelectorAll('.portfolio-content__season');
const imgPortfolio = document.querySelectorAll('.portfolio-content__img');
const langItem = document.querySelectorAll('.header__lang-item');
const section = document.querySelectorAll('.section');
const sectionHeader = document.querySelectorAll('.tittle');
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