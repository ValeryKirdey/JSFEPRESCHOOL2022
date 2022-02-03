const playPauseBtn = document.querySelector('.play');
let isPlay = false;
const audio = new Audio();

function playAudio() {
    audio.src = './assets/audio/night.mp3';
    audio.currentTime = 0;
    if (!isPlay) {

        audio.play()
        isPlay = true
    } else { isPlay }
    console.log(isPlay)
}

playPauseBtn.addEventListener('click', playAudio);


//---------------------------------------------------

// let play = 'play';
// const themeSwitcher = document.querySelector('.pause');
// themeSwitcher.addEventListener('click', switchTheme);

// function switchTheme() {
//     themeSwitcher.classList.toggle('.pause');
//     play = themeSwitcher.classList.contains('.pause') ? 'play' : 'pause';
//     toggleLight();
// }



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