import { getAssetProp, setAssetProp, incrementAssetProp } from "./updateLevel.js"

let speed = .015 // determines ratio for obstacle speed increase
let ObstacleIntervalMin = 750 // sets min distance between obstacles
let ObstacleIntervalMax = 2000 // sets max distance between obstacles
let nextObstacleTime // tracks distance value for each instance of an obstacle for obstacle creation
let world = document.querySelector(".world")

// starts first obstacle and removes all obstacles left over from previous game
export function setUpClouds() {
    nextObstacleTime = ObstacleIntervalMin
    document.querySelectorAll(".clouds").forEach(clouds => {
        clouds.remove()
    })
}

// handles new obstacle creation
function createObstacle() {
    let clouds = document.createElement("img")
    clouds.src = "./assets/img/clouds.png"
    clouds.classList.add("clouds")
    setAssetProp(clouds, "--left", 100)
    world.append(clouds)
}

// handles randomization between obstacle creation times for use in moveObstacle function
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max + min) + min)
}

// handles obstacle movement and time between new obstacle creation
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