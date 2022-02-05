//---------------Change btn & sound----------------------

const button = document.querySelector('button');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('pause');
const audio = new Audio();
let isPlay = false;

function playAudio() {
    if (!isPlay) {
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
    toggleButton()
}


// let isPlay = false;
// const audio = new Audio();

// function playAudio() {
//     // audio.src = './assets/audio/night.mp3';
//     audio.src = sourceFinder();
//     audio.currentTime = 0;
//     if (!isPlay) {
//         audio.play()
//         isPlay = true
//     } else {
//         audio.pause();
//         isPlay = false
//     }
//     toggleButton()
//         // console.log(isPlay)
// }

// function sourceFinder() {
//     const soundItem = document.querySelectorAll('.nav-item')
//     soundItem.forEach((el) => {
//             if (el.classList.contains('active')) {
//                 const soundName = el.dataset.bird
//                 const sourse = `./assets/audio/${soundName}.mp3`
//                     // console.log(source)
//             }
//             return source
//         })
//---------------Change image & sound---------------------

const navBtns = document.querySelectorAll('.nav-link');
const navBtn = document.querySelector('.header-container');
const videoImg = document.querySelectorAll('.img-video');

function changeImage(event) {
    const bird = event.target.dataset.bird;
    if (event.target.classList.contains('nav-link')) {
        videoImg.forEach((img) => img.src = `assets/img/${bird}.jpg`);
        audio.src = `assets/audio/${bird}.mp3`;
        navBtns.forEach((btn) => btn.classList.remove('active'));
        event.target.classList.add('active');
        if (isPlay == true) {
            audio.play();
        }
    }
}
navBtn.addEventListener('click', changeImage);

//-----------------Change btn---------------------------------

function toggleBtn() {
    button.classList.toggle('pause');
}

playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);