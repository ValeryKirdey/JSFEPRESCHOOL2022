const navItems = document.querySelectorAll('.nav-item')
const audio = document.querySelector('.audio')
const playContainer = document.querySelector('.play-button-container')
const logo = document.querySelector('.logo')
let context;
let src;
let analyser;
let init = false
let isPlay = false
let currentItem = navItems[0]
let showInfo = false;

async function playAudio() {
    if (!init) {
        try {
            let AudioContext = window.AudioContext || window.webkitAudioContext || false
            if (AudioContext) {
                context = new AudioContext();
                src = context.createMediaElementSource(audio)
                analyser = context.createAnalyser()
                src.connect(analyser)
                analyser.connect(context.destination);
                analyser.fftSize = 64;
                audio.addEventListener('play', visualizer);
            }
        } catch (e) {
            console.log(e)
        }
        init = true
    }
    if (isPlay) {
        audio.src = `./assets/audio/${currentItem.firstChild.dataset.bird}.mp3`
        await new Promise(resolve => audio.addEventListener('canplay', resolve))
        audio.play()
    } else {
        audio.pause()
    }
}