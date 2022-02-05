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
}
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