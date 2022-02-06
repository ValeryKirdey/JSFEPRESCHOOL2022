let isPlay = false;
let play_pause = document.querySelector(".play_pause");
let play_pause2 = document.querySelector(".play_pause2");
let link = document.querySelectorAll(".nav_link");
let night = document.querySelector("night");
let forest = document.querySelector("forest");
let rain = document.querySelector("rain");
let summer = document.querySelector("summer");
let swamp = document.querySelector("swamp");
let thunder = document.querySelector("thunder");
let sea = document.querySelector("sea");
let winter = document.querySelector("winter");
let imgFon = document.querySelector(".container_img");
night.addEventListener("click", playAudio);
if (!night)
    return;
forest.addEventListener("click", playAudio);
if (!forest)
    return;
rain.addEventListener("click", playAudio);
if (!rain)
    return;
summer.addEventListener("click", playAudio);
if (!summer)
    return;
swamp.addEventListener("click", playAudio);
if (!swamp)
    return;
thunder.addEventListener("click", playAudio);
if (!thunder)
    return;
sea.addEventListener("click", playAudio);
if (!sea)
    return;
winter.addEventListener("click", playAudio);
if (!winter)
    return;
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