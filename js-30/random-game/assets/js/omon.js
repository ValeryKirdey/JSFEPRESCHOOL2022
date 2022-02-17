import { getAssetProp, setAssetProp, incrementAssetProp } from "./level.js"

let speed = .05
let obstacleIntervalMin = 750
let obstacleIntervalMax = 2000
let nextObstacleTime
let world = document.querySelector(".world")

export function setUpObstacle() {
    nextObstacleTime = obstacleIntervalMin
    document.querySelectorAll(".obstacle").forEach(obstacle => {
        obstacle.remove()
    })
}

function createObstacle() {
    let obstacle = document.createElement("img")
    obstacle.src = "./assets/img/trush.png"
    obstacle.classList.add("obstacle")
    setAssetProp(obstacle, "--left", 100)
    world.append(obstacle)
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

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

export function getObstacleHitBox() {
    return [...document.querySelectorAll(".obstacle")].map(obstacle => {
        return obstacle.getBoundingClientRect()
    })
}