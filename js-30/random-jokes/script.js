const audio = new Audio();
const btnPlay = document.querySelector('.btn');

function playSong() {
    audio.src = './assets/audio/Burp-A1-www.fesliyanstudios.com.mp3';
    let isPlay = false
    if (!isPlay) {
        audio.play()
    }
}

btnPlay.addEventListener('click', playSong);


function getdata() {
    let datacur = document.querySelector('.quote');
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json('rick-and-morty-quotes.json'))
        .then(data => {
            console.log(data)
            datacur.innerHTML = data.value;
        })
        .catch(err => console.error())


}