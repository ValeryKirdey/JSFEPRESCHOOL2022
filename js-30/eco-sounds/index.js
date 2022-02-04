const navItems = document.querySelectorAll('.nav-item')
const audio = document.querySelector('.audio')
const playContainer = document.querySelector('.play')
const logo = document.querySelector('.logo')
let context;
let src;
let analyser;
let init = false
let isPlay = false
let currentItem = navItems[0]
let showInfo = false;


setBackground('forest')
playContainer.addEventListener('click', playButtonHandler);
//---------------------Play/Pause Audio-----------------------------------

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
        audio.src = `./assets/audio/${currentItem.firstChild.dataset.item}.mp3`
        await new Promise(resolve => audio.addEventListener('canplay', resolve))
        audio.play()
    } else {
        audio.pause()
    }
}
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

