import { layGround, moveGround } from "./ground.js"
import { startZmagar, moveZmagar, getZmagarHitBox, zmagarHit } from "./zmagar.js"
import { setUpObstacle, moveObstacle, getObstacleHitBox } from "./omon.js"
import { setUpClouds, moveClouds } from "./clouds.js"


document.addEventListener("keydown", startGame, { once: true })

let previousFrame
let currentFrame
let gameSpeed
let gameRateIncrease = .00001
let startSpeed = 100
    // let hs = localStorage.getItem("highestScore")
let scoreHigh
let score
let startScreen = document.querySelector(".start-screen")
let scoreText = document.querySelector(".score")
let scoreTextHigh = document.querySelector(".score1")

function startGame(e) {
    if (e.code !== "Space") {
        document.addEventListener("keydown", startGame, { once: true })
        return
    }

    previousFrame = null
    layGround()
    startZmagar()
    setUpObstacle()
    setUpClouds()
    gameSpeed = 1.25
    score = 0
    scoreHigh = 0
    startScreen.remove()
    window.requestAnimationFrame(update)
}

function update(frame) {
    if (previousFrame == null) {
        previousFrame = frame
        window.requestAnimationFrame(update)
        return
    }
    currentFrame = frame - previousFrame
    increaseGameSpeed(currentFrame)

    moveGround(currentFrame, gameSpeed)
    moveZmagar(startSpeed, currentFrame)
    moveObstacle(currentFrame, gameSpeed)
    moveClouds(currentFrame, gameSpeed)
    updateScore(currentFrame)

    if (checkLose()) { return loseGame() }

    previousFrame = frame
    window.requestAnimationFrame(update)
}

function increaseGameSpeed(currentTime) {
    gameSpeed += currentTime * gameRateIncrease
    startSpeed += gameSpeed * -.01
}

function updateScore(currentFrame) {
    score += currentFrame * .01
    scoreText.textContent = "Лепшы Вынiк: " + Math.floor(scoreHigh)
    scoreTextHigh.textContent = "Рахунак: " + Math.floor(score)
    if (score > scoreHigh) {
        scoreHigh = score
    }
}
scoreHigh = localStorage.setItem("myKey", score)
localStorage.getItem("myKey")
    // console.log(scoreTextHigh)



function checkCollision(asset1, asset2) {
    return (
        asset1.left < asset2.right &&
        asset1.top < asset2.bottom &&
        asset1.right > asset2.left &&
        asset1.bottom > asset2.top
    )

}

function checkLose() {
    let zmagarHitBox = getZmagarHitBox()
    return getObstacleHitBox().some(hitBox => checkCollision(hitBox, zmagarHitBox))
}

function loseGame() {
    zmagarHit()
    setTimeout(() => {
        document.addEventListener("keydown", startGame, { once: true })
    }, 100)
}


console.log("Мне пока не хватает знаний, чтоб реализовать весь задуманный функционал данной игры, надеюсь, что к концу курса, я смогу 'допилить' данную игру!:)")