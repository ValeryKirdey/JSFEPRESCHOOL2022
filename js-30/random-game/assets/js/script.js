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
let score
let startScreen = document.querySelector(".start-screen")
    // let endScreen = document.querySelector(".end-screen")
let scoreText = document.querySelector(".score")


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
    startScreen.remove()
        // endScreen.remove()
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
    scoreText.textContent = "Score: " + Math.floor(score)
}

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
// let gameOvers = false;

// function loop() {
//     if (gameOvers === false && gamePaused == false) {
//         if (game.lives === 0) {
//             var cv = localStorage.getItem("highestScore");
//             if (!cv) {
//                 localStorage.setItem("highestScore", game.score.toString());
//             } else {
//                 if (parseInt(cv) > game.score) {} else if (parseInt(cv) < game.score) {
//                     localStorage.removeItem("highestScore");
//                     localStorage.setItem("highestScore", game.score.toString());
//                 }
//             }
//             gameOvers = true;
//         }
//     }
// }

// let highestScore = localStorage.getItem("highestScore");
// let btn = document.getElementById("resume");
// let currentScore = document.getElementById("score");
// let highestScores = document.getElementById("score2");
// if (!highestScore) {
//     highestScore = "0";
// }
// currentScore.textContent = "CURRENT SCORE : " + game.score;
// highestScores.textContent = "HIGHEST SCORE : " + highestScore;
// popup.style.display = "block";
// btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
//     location.reload();
// });
// "use strict"
// (function(namespace) {
//     var SCORE_FACTOR = 0.1;

//     function formatOffset(offset) {
//         // TODO pad with zeroes
//         return Math.floor(offset * SCORE_FACTOR);
//     }

//     function ScoreBoard(options) {
//         this.scale = options.scale;
//         this.x = options.left;
//         this.y = options.bottom;
//         this.colour = options.colour;
//     }

//     ScoreBoard.prototype = Object.create(GameObject.prototype);
//     ScoreBoard.prototype.constructor = ScoreBoard;

//     ScoreBoard.prototype.draw = function(context, offset) {
//         context.fillStyle = this.colour;
//         context.font = "16px Courier";
//         context.textAlign = "right";
//         context.fillText(formatOffset(offset), this.x, this.y);
//     };

//     namespace.ScoreBoard = ScoreBoard;
// })(window);