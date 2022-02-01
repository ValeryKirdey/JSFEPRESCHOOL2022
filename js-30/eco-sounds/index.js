// const audio = document.querySelector('audio');

// function playAudio() {
//     audio.currentTime = 0;
//     audio.play();
// }

// function pauseAudio() {
//     audio.pause();
// }

// const audio = document.querySelector('audio');
// const playBtn = document.querySelector('.play-btn');
// const pauseBtn = document.querySelector('.pause-btn');

// function playAudio() {
//     audio.currentTime = 0;
//     audio.play();
// }

// function pauseAudio() {
//     audio.pause();
// }

// playBtn.addEventListener('click', playAudio);
// pauseBtn.addEventListener('click', pauseAudio);

//---------------------------------------------------

document.body.addEventListener('click', e => {
    if (!e.target.matches('button')) return
    document.querySelector('.forest').src = e.target.dataset.item

    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
})