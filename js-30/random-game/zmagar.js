import { incrementAssetProp, getAssetProp, setAssetProp } from "./updateLevel.js"

let zmagar = document.querySelector(".zmagar")
let jumpSpeed = .45 // sets vertical jump speed
let gravity = .0015 // sets vertical fall speed
let yVelocity // sets vertical movement up on jump
let isJumping // determines whether Zmagar is actively jumping
let currentImage = 0 // initializes running animation frame

// contains assets for Zmagar running animation
let zmagarRunningFrames = [
    "./assets/img/zmagar/zmagar_1.png",
    "./assets/img/zmagar/zmagar_2.png",
    "./assets/img/zmagar/zmagar_3.png",
    "./assets/img/zmagar/zmagar_4.png",
    "./assets/img/zmagar/zmagar_5.png",
]

// handles initial Zmagar behavior at start and restart
export function startZmagar() {
    isJumping = false
    yVelocity = 0
    setAssetProp(zmagar, "--bottom", 20)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
}

// handles seperate Zmagar behaviors during game
export function moveZmagar(startSpeed, currentTime) {
    cycleRun(startSpeed)
    jumpZmagar(currentTime)
}

// handles Zmagar running animation
export async function cycleRun(interval) {
    if (isJumping) return
    if (currentImage < zmagarRunningFrames.length - 1) {
        if (currentImage === 0) {
            await setTimeout(function() {
                currentImage = 1
            }, interval)
        }
        if (currentImage === 1) {
            await setTimeout(function() {
                currentImage = 2
            }, interval)
        }
        if (currentImage === 2) {
            await setTimeout(function() {
                currentImage = 3
            }, interval)
        }
        if (currentImage === 3) {
            await setTimeout(function() {
                currentImage = 4
            }, interval)
        }
        if (currentImage === 4) {
            await setTimeout(function() {
                currentImage = 5
            }, interval)
        }
    } else {
        await setTimeout(function() {
            currentImage = 0
        }, interval)
    }
    zmagar.src = zmagarRunningFrames[currentImage]
}

// handles Zmagar vertical movement behavior on jump
function jumpZmagar(currentFrame) {
    if (!isJumping) return

    incrementAssetProp(zmagar, "--bottom", yVelocity * currentFrame)

    if (getAssetProp(zmagar, "--bottom") <= 20) {
        setAssetProp(zmagar, "--bottom", 20)
        isJumping = false
    }

    yVelocity -= gravity * currentFrame
}

// handles Zmagar appearance and determines variable value on jump
function onJump(e) {
    if (isJumping || e.code !== "Space") return

    zmagar.src = "./assets/img/zmagar_jump.png"

    yVelocity = jumpSpeed
    isJumping = true
}

// defines Zmagar element's outline for collision check
export function getZmagarHitBox() {
    return zmagar.getBoundingClientRect()
}

// changes Zmagar's appearance on lose
export function zmagarHit() {
    zmagar.src = "./assets/img/zmagar.png"
}