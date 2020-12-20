const myMusic = new Audio("./sounds/pixelate.mp3")
const gameOverEffect = new Audio("./sounds/gameOver.mp3")

const playMusic = function () {
    myMusic.volume=0.5
    myMusic.play()
}
const stopMusic = function(){
    myMusic.pause()
}

const moveSoundEffect = function (effect) {

    const moveEffect = new Audio(`./sounds/${effect}.mp3`)
    moveEffect.volume= (effect == 'movement')? 0.2 : 0.8
    moveEffect.play()
    
}



const playGameOver= function(){
   stopMusic()
    gameOverEffect.volume=0.6
    gameOverEffect.play()

}




