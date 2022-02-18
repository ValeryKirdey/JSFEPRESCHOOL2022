import { getAssetProp, setAssetProp, incrementAssetProp } from "./level.js"

let speed = .015
let ObstacleIntervalMin = 750
let ObstacleIntervalMax = 2000
let nextObstacleTime
let world = document.querySelector(".world")

export function setUpClouds() {
    nextObstacleTime = ObstacleIntervalMin
    document.querySelectorAll(".clouds").forEach(clouds => {
        clouds.remove()
    })
}

function createObstacle() {
    let clouds = document.createElement("img")
    clouds.src = "./assets/img/clouds.png"
    clouds.classList.add("clouds")
    setAssetProp(clouds, "--left", 100)
    world.append(clouds)
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max + min) + min)
}

export function moveClouds(currentFrame, gameSpeed) {
    document.querySelectorAll(".clouds").forEach(clouds => {
        incrementAssetProp(clouds, "--left", gameSpeed * currentFrame * speed * -1)

        if (getAssetProp(clouds, "--left") <= -30) {
            clouds.remove()
        }
    })

    if (nextObstacleTime <= 0) {
        createObstacle()
        nextObstacleTime = randomNumberBetween(ObstacleIntervalMin, ObstacleIntervalMax) / gameSpeed
    }
    nextObstacleTime -= currentFrame
}