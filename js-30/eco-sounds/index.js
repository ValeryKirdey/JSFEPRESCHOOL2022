const navItems = document.querySelectorAll('.nav-item')
const audio = document.querySelector('.audio')
const playContainer = document.querySelector('.play-button-container')
const logo = document.querySelector('.logo')
let context;
let src;
let analyser;
let init = false
let currentItem = navItems[0]
let showInfo = false;


setBackground('night')
playContainer.addEventListener('click', playButtonHandler);
//---------------------Play/Pause Audio-----------------------------------

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') playButtonHandler()
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') changeTabByKey(e.code)
})

logo.addEventListener('click', (e) => { setBackground('night') })

for (let navItem of navItems) {
    navItem.addEventListener('click', (e) => setActive(e.target.parentNode))
}

function changeTabByKey(key) {
    let number = Number(currentItem.firstChild.dataset.order)
    if (key == 'ArrowRight') number = (number < navItems.length - 1) ? number + 1 : 0
    if (key == 'ArrowLeft') number = (number === 0) ? 7 : number - 1
    setActive(navItems[number])
}

//---------------------Play/Pause Audio-----------------------------------


const playPauseBtn = document.querySelector('.play');
const playPauseLogo = document.querySelector('.logo');
const playNavSounds = document.querySelector('[data-item]')

let isPlay = false;
const audio = new Audio();

function playAudio() {
    // audio.src = './assets/audio/night.mp3';
    audio.src = sourceFinder();
    audio.currentTime = 0;
    if (!isPlay) {
        audio.play()
        isPlay = true
    } else {
        audio.pause();
        isPlay = false
    }
    toggleButton()
        // console.log(isPlay)
}

function sourceFinder() {
    const soundItem = document.querySelectorAll('.nav-item')
    soundItem.forEach((el) => {
        if (el.classList.contains('active')) {
            const soundName = el.dataset.bird
            const sourse = `./assets/audio/${soundName}.mp3`
            console.log(source)
        }
        return source
    })

}
// function sourceFinder() {
// let item = './assets/audio/night.mp3'
// console.log(item)

// for (let i = 1; i < 8; i++) {
// if (soundItem[i].classList.contains('active')) {
// let soundName = soundItem[i].dataset.item
// item = `./assets/audio/${soundName}.mp3`
// console.log(item)
// return item
// }
// }
// // for (el in birdItem) {
// // if (birdItem[el].classList.contains('active')) {
// // const soundName = birdItem[el].dataset.item
// // source = `./assets/audio/${soundName}.mp3`
// // console.log(source)
// // return source
// // }
// // }
// return item
// }

playPauseBtn.addEventListener('click', playAudio);
playPauseLogo.addEventListener('click', playAudio);
soundItem.addEventListener('click', playAudio)

//---------------------Play/Pause Button-----------------------------------

function playButtonHandler() {
    isPlay = !isPlay
    const target = document.querySelector('.play')
    target.focus()
    if (target.classList.contains('play-show') || target.classList.contains('play-hide')) {
        target.classList.remove('play-show')
        target.classList.remove('play-hide')
    }
    animate(target, 'play-hide', true)
        .then(() => {
            playContainer.classList.remove(isPlay ? 'play' : 'pause')
            animate(target, 'play-show', true)
            playContainer.classList.add(isPlay ? 'pause' : 'play')

        })
    playAudio()
}

function animate(target, animation, remove) {
    return new Promise(resolve => {
        target.addEventListener('animationend', () => {
            if (remove) target.classList.remove(animation)
            resolve()
        })
        target.classList.add(animation)
    })
}
//---------------------Background-----------------------------------

function setActive(targetItem) {

    if (targetItem.classList.contains('show') || targetItem.classList.contains('hide')) {
        targetItem.classList.remove('show')
        targetItem.classList.remove('hide')
    }

    const prevItem = document.querySelector('.nav-item.active')

    const prevOrder = prevItem.firstChild.dataset.order
    const currentOrder = targetItem.firstChild.dataset.order
    const mainContainer = document.querySelector('.main')

    let directionPrev = (prevOrder < currentOrder) ? 'align-end' : 'align-start'
    let directionCurrent = (prevOrder < currentOrder) ? 'align-start' : 'align-end'

    prevItem.classList.add(directionPrev)
    animate(prevItem, 'deactive', true).then(() => prevItem.classList.remove(directionPrev))
    navItems.forEach(e => e.classList.remove('active'))
    animate(mainContainer, 'hide', true)
        .then(() => setBackground(targetItem.firstChild.dataset.bird))
        .then(() => animate(mainContainer, 'show', true))

    targetItem.classList.add(directionCurrent)

    animate(targetItem, 'active', false).then(() => targetItem.classList.remove(directionCurrent))
    currentItem = targetItem
    playAudio()
}
//---------------------Background-----------------------------------

function setBackground(name) {
    const mainContainer = document.querySelector('.main')
    return new Promise(resolve => {
        mainContainer.setAttribute('class', `main bg-${name}`)
        resolve()
    })
}