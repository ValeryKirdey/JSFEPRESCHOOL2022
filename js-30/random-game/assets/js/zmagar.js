import { incrementAssetProp, getAssetProp, setAssetProp } from "./level.js"

let zmagar = document.querySelector(".zmagar")
let endScreen = document.querySelector(".end-game")
let jumpSpeed = .45
let gravity = .0015
let yVelocity
let isJumping
let currentImage = 0

let zmagarRunningFrames = [
    "./assets/img/zmagar/zmagar_1.png",
    "./assets/img/zmagar/zmagar_2.png",
    "./assets/img/zmagar/zmagar_3.png",
    "./assets/img/zmagar/zmagar_4.png",
    "./assets/img/zmagar/zmagar_5.png",
]

export function startZmagar() {
    isJumping = false
    yVelocity = 0
    setAssetProp(zmagar, "--bottom", 20)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
    endScreen.classList.remove("end-screen");
}

export function moveZmagar(startSpeed, currentTime) {
    cycleRun(startSpeed)
    jumpZmagar(currentTime)
}

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

function jumpZmagar(currentFrame) {
    if (!isJumping) return

    incrementAssetProp(zmagar, "--bottom", yVelocity * currentFrame)

    if (getAssetProp(zmagar, "--bottom") <= 20) {
        setAssetProp(zmagar, "--bottom", 20)
        isJumping = false
    }

    yVelocity -= gravity * currentFrame
}

function onJump(e) {
    if (isJumping || e.code !== "Space") return

    zmagar.src = "./assets/img/zmagar_jump.png"

    yVelocity = jumpSpeed
    isJumping = true
}

export function getZmagarHitBox() {
    return zmagar.getBoundingClientRect()
}

export function zmagarHit() {
    zmagar.src = "./assets/img/zmagar.png"
    endScreen.classList.add("end-screen");
}