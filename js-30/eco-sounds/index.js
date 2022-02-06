const audio = new Audio();
audio.src = './assets/audio/night.mp3'
let isPlay = false;

const btnPlay = document.querySelector('.button')
const main = document.querySelector('.main-container')
const btnLogo = document.querySelector('.logo')
const btnNavLink = document.querySelectorAll('.nav-link')
const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnSummer = document.querySelector('.summer')
const btnSwamp = document.querySelector('.swamp')
const btnThunder = document.querySelector('.thunder')
const btnSea = document.querySelector('.sea')
const btnWinter = document.querySelector('.winter')



btnPlay.addEventListener('click', playSong)
btnLogo.addEventListener('click', nightSong)
btnForest.addEventListener('click', forestSong)
btnRain.addEventListener('click', rainSong)
btnSummer.addEventListener('click', summerSong)
btnSwamp.addEventListener('click', swampSong)
btnThunder.addEventListener('click', thunderSong)
btnSea.addEventListener('click', seaSong)
btnWinter.addEventListener('click', winterSong)



function playSong() {
    if (!isPlay) {

        audio.play()
        btnPlay.classList.add('play')
        isPlay = !isPlay
    } else {
        audio.pause()
        audio.currentTime = 0
        btnPlay.classList.remove('play')
        isPlay = !isPlay
    }
}

function stopSong() {
    audio.pause()
    btnPlay.classList.add('play')
    isPlay = false
    audio.currentTime = 0
}


function nightSong() {
    stopSong()
    audio.src = './assets/audio/night.mp3'
    main.style.backgroundImage = "url('./assets/img/night.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnLogo.classList.add('active')
}

function forestSong() {
    stopSong()
    audio.src = './assets/audio/forest.mp3'
    main.style.backgroundImage = "url('./assets/img/forest.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnForest.classList.add('active')
}

function rainSong() {
    stopSong()
    audio.src = './assets/audio/rain.mp3'
    main.style.backgroundImage = "url('./assets/img/rain.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnRain.classList.add('active')
}

function summerSong() {
    stopSong()
    audio.src = './assets/audio/summer.mp3'
    main.style.backgroundImage = "url('./assets/img/summer.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnSummer.classList.add('active')
}

function swampSong() {
    stopSong()
    audio.src = './assets/audio/swamp.mp3'
    main.style.backgroundImage = "url('./assets/img/swamp.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnSwamp.classList.add('active')
}

function thunderSong() {
    stopSong()
    audio.src = './assets/audio/thunder.mp3'
    main.style.backgroundImage = "url('./assets/img/thunder.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnThunder.classList.add('active')
}

function seaSong() {
    stopSong()
    audio.src = './assets/audio/sea.mp3'
    main.style.backgroundImage = "url('./assets/img/sea.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnSea.classList.add('active')
}

function winterSong() {
    stopSong()
    audio.src = './assets/audio/winter.mp3'
    main.style.backgroundImage = "url('./assets/img/winter.jpg')";
    playSong()
    btnNavLink.forEach(el => el.classList.remove('active'))
    btnWinter.classList.add('active')
}