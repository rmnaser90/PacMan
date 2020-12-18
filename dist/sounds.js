const myMusic = new Audio("./sounds/pixelate.mp3")
const gameOverEffect = new Audio("./sounds/gameOver.mp3")

const playMusic = function (params) {
    myMusic.volume=0.5
    myMusic.play()
}

const moveSoundEffect = function (params) {
    const moveEffect = new Audio("./sounds/movement.mp3")
    moveEffect.play()
    
}
const playGameOver= function(){
    myMusic.pause()
    gameOverEffect.volume=0.6
    gameOverEffect.play()

}

