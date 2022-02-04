// const navItems = document.querySelectorAll('.nav-item')
// const audio = document.querySelector('.audio')
// const playContainer = document.querySelector('.play-button-container')
// const logo = document.querySelector('.logo')
// let context;
// let src;
// let analyser;
// let init = false
// let isPlay = false
// let currentItem = navItems[0]
// let showInfo = false;


// setBackground('night')
// playContainer.addEventListener('click', playButtonHandler);
// //---------------------Play/Pause Audio-----------------------------------

// document.addEventListener('keydown', (e) => {
//     if (e.code === 'Space') playButtonHandler()
//     if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') changeTabByKey(e.code)
// })

// logo.addEventListener('click', (e) => { setBackground('night') })

// for (let navItem of navItems) {
//     navItem.addEventListener('click', (e) => setActive(e.target.parentNode))
// }

// function changeTabByKey(key) {
//     let number = Number(currentItem.firstChild.dataset.order)
//     if (key == 'ArrowRight') number = (number < navItems.length - 1) ? number + 1 : 0
//     if (key == 'ArrowLeft') number = (number === 0) ? 7 : number - 1
//     setActive(navItems[number])
// }

// //---------------------Play/Pause Audio-----------------------------------


// async function playAudio() {
//     if (!init) {
//         try {
//             let AudioContext = window.AudioContext || window.webkitAudioContext || false
//             if (AudioContext) {
//                 context = new AudioContext();
//                 src = context.createMediaElementSource(audio)
//                 analyser = context.createAnalyser()
//                 src.connect(analyser)
//                 analyser.connect(context.destination);
//                 analyser.fftSize = 64;
//                 audio.addEventListener('play', visualizer);
//             }
//         } catch (e) {
//             console.log(e)
//         }
//         init = true
//     }
//     if (isPlay) {
//         audio.src = `./assets/audio/${currentItem.firstChild.dataset.bird}.mp3`
//         await new Promise(resolve => audio.addEventListener('canplay', resolve))
//         audio.play()
//     } else {
//         audio.pause()
//     }
// }
// //---------------------Play/Pause Button-----------------------------------

// function playButtonHandler() {
//     isPlay = !isPlay
//     const target = document.querySelector('.play')
//     target.focus()
//     if (target.classList.contains('play-show') || target.classList.contains('play-hide')) {
//         target.classList.remove('play-show')
//         target.classList.remove('play-hide')
//     }
//     animate(target, 'play-hide', true)
//         .then(() => {
//             playContainer.classList.remove(isPlay ? 'play' : 'pause')
//             animate(target, 'play-show', true)
//             playContainer.classList.add(isPlay ? 'pause' : 'play')

//         })
//     playAudio()
// }
// //---------------------Background-----------------------------------

// function setActive(targetItem) {

//     if (targetItem.classList.contains('show') || targetItem.classList.contains('hide')) {
//         targetItem.classList.remove('show')
//         targetItem.classList.remove('hide')
//     }

//     const prevItem = document.querySelector('.nav-item.active')

//     const prevOrder = prevItem.firstChild.dataset.order
//     const currentOrder = targetItem.firstChild.dataset.order
//     const mainContainer = document.querySelector('.main')

//     let directionPrev = (prevOrder < currentOrder) ? 'align-end' : 'align-start'
//     let directionCurrent = (prevOrder < currentOrder) ? 'align-start' : 'align-end'

//     prevItem.classList.add(directionPrev)
//     animate(prevItem, 'deactive', true).then(() => prevItem.classList.remove(directionPrev))
//     navItems.forEach(e => e.classList.remove('active'))
//     animate(mainContainer, 'hide', true)
//         .then(() => setBackground(targetItem.firstChild.dataset.bird))
//         .then(() => animate(mainContainer, 'show', true))

//     targetItem.classList.add(directionCurrent)

//     animate(targetItem, 'active', false).then(() => targetItem.classList.remove(directionCurrent))
//     currentItem = targetItem
//     playAudio()
// }
// //---------------------Background-----------------------------------

// function setBackground(name) {
//     const mainContainer = document.querySelector('.main')
//     return new Promise(resolve => {
//         mainContainer.setAttribute('class', `main bg-${name}`)
//         resolve()
//     })
// }



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

setBackground('forest')
playContainer.addEventListener('click', playButtonHandler)

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') playButtonHandler()
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') changeTabByKey(e.code)
})

logo.addEventListener('click', (e) => { setBackground('forest') })

for (let navItem of navItems) {
    navItem.addEventListener('click', (e) => setActive(e.target.parentNode))
}

let infoButton = document.querySelector('.info-button')
let info = document.querySelector('.info')

infoButton.addEventListener('click', () => info.classList.toggle('info-active'))

function changeTabByKey(key) {
    let number = Number(currentItem.firstChild.dataset.order)
    if (key == 'ArrowRight') number = (number < navItems.length - 1) ? number + 1 : 0
    if (key == 'ArrowLeft') number = (number === 0) ? 7 : number - 1
    setActive(navItems[number])
}

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

function playButtonHandler() {
    isPlay = !isPlay
    const target = document.querySelector('.play-button-container')
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

function setBackground(name) {
    const mainContainer = document.querySelector('.main')
    return new Promise(resolve => {
        mainContainer.setAttribute('class', `main bg-${name}`)
        resolve()
    })
}

function visualizer() {
    const canvas = document.querySelector('.canvas')
    const ctx = canvas.getContext("2d");

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const barWidth = (WIDTH / bufferLength);
    let barHeight;
    let x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);
        x = 0;
        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = '#1c1c1c';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] * 0.7;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
            x += barWidth + 1;
        }
    }

    renderFrame();
}