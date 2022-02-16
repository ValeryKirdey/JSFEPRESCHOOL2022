import { getAssetProp, setAssetProp, incrementAssetProp } from "./updateLevel.js"

let speed = .05 // determines ratio for obstacle speed increase
let obstacleIntervalMin = 750 // sets min distance between obstacles
let obstacleIntervalMax = 2000 // sets max distance between obstacles
let nextObstacleTime // tracks distance value for each instance of an obstacle for obstacle creation
let world = document.querySelector(".world")

// starts first obstacle and removes all obstacles left over from previous game
export function setUpObstacle() {
    nextObstacleTime = obstacleIntervalMin
    document.querySelectorAll(".obstacle").forEach(obstacle => {
        obstacle.remove()
    })
}

// handles new obstacle creation
function createObstacle() {
    let obstacle = document.createElement("img")
    obstacle.src = "./assets/img/trush.png"
    obstacle.classList.add("obstacle")
    setAssetProp(obstacle, "--left", 100)
    world.append(obstacle)
}

// handles randomization between obstacle creation times for use in moveObstacle function
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// handles obstacle movement and time between new obstacle creation
export function moveObstacle(currentFrame, gameSpeed) {
    document.querySelectorAll(".obstacle").forEach(obstacle => {
        incrementAssetProp(obstacle, "--left", gameSpeed * currentFrame * speed * -1)

        if (getAssetProp(obstacle, "--left") <= -30) {
            obstacle.remove()
        }
    })

    if (nextObstacleTime <= 0) {
        createObstacle()
        nextObstacleTime = randomNumberBetween(obstacleIntervalMin, obstacleIntervalMax) / gameSpeed
    }
    nextObstacleTime -= currentFrame
}

// defines obstacle element's outline for collision check
export function getObstacleHitBox() {
    return [...document.querySelectorAll(".obstacle")].map(obstacle => {
        return obstacle.getBoundingClientRect()
    })
}