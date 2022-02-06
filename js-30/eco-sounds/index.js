let isPlay = false;
let play_pause = document.querySelector(".play_pause");
let play_pause2 = document.querySelector(".play_pause2");
let link = document.querySelectorAll(".nav_link");
const night = document.querySelector("night");
const forest = document.querySelector("forest");
const rain = document.querySelector("rain");
const summer = document.querySelector("summer");
const swamp = document.querySelector("swamp");
const thunder = document.querySelector("thunder");
const sea = document.querySelector("sea");
const winter = document.querySelector("winter");
const imgFon = document.querySelector(".container_img");
night.addEventListener("click", playAudio);
forest.addEventListener("click", playAudio);
rain.addEventListener("click", playAudio);
summer.addEventListener("click", playAudio);
swamp.addEventListener("click", playAudio);
thunder.addEventListener("click", playAudio);
sea.addEventListener("click", playAudio);
winter.addEventListener("click", playAudio);
play_pause.addEventListener("click", playAudio2);
play_pause2.addEventListener("click", playAudio2);
const audio = new Audio();
audio.src = `./assets/audio/night.mp3`;

function playAudio2() {
    if (!isPlay) {
        audio.play();
        isPlay = true;
        play_pause.style.display = "none";
        play_pause2.style.display = "block";
    } else {
        audio.pause();
        isPlay = false;
        play_pause.style.display = "block";
        play_pause2.style.display = "none";
    }
}

function playAudio(ev) {
    for (let l of link) {
        l.classList.remove("active");
    }
    let element = ev.target.getElement("id");
    ev.target.classList.add("active");
    audio.src = `./assets/audio/${element}.mp3`;
    audio.currentTime = 0;
    audio.play();
    imgFon.style.backgroundImage = `url(./assets/img/${element}.jpg)`;
    play_pause.style.display = "none";
    play_pause2.style.display = "block";
    isPlay = true;

}