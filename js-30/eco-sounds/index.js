// const audio = document.querySelector('audio');

// function playAudio() {
//     audio.currentTime = 0;
//     audio.play();
// }

// function pauseAudio() {
//     audio.pause();
// }

const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play');
// const pauseBtn = document.querySelector('.pause-btn');

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}

// function pauseAudio() {
//     audio.pause();
// }

playBtn.addEventListener('click', playAudio);
// pauseBtn.addEventListener('click', pauseAudio);

//---------------------------------------------------
const navList = document.querySelector('.nav-list');
const mainBackgraund = document.querySelectorAll('.main');

navList.addEventListener('click', updateMain);

function updateMain(event) {
    if (event.target.classList.contains('nav-item')) {
        const activeBtn = document.querySelector('.active');
        const pressedBtn = event.target;
        activeBtn.classList.remove('active');
        pressedBtn.classList.add('active');
        let item = event.target.dataset.item;
        mainBackgraund.forEach((img) => img.src = `./assets/img/${item}.jpg`);
    }
}

function preloadImages() {
    const items = ['winter', 'thunder', 'summer', 'rain'];
    items.forEach(elem => {
        for (let i = 1; i <= 8; i++) {
            const img = new Image();
            img.src = `./assets/img/${elem}.jpg`;
        }
    });
}

preloadImages();

//----------------------------------------------------



// document.body.addEventListener('click', e => {
//     if (!e.target.matches('button')) return
//     document.querySelector('.forest').src = e.target.dataset.item

//     document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'))
//     e.target.classList.add('active')
// })