class Player {
    constructor(name,xPos,yPos) {
        this.name = name
        this.position = {
            xPos: xPos,
            yPos: yPos
        }
        this.coins = 0
    }

    moveRight() {
        this.position.xPos++
        return this.position
    }
    moveLeft() {
        this.position.xPos--
        return this.position
    }
    moveUp() {
        this.position.yPos--
        return this.position
    }
    moveDown() {
        this.position.yPos++
        return this.position
    }
    getPosition() {
        return this.position
    }
    getStatus() {
        return {
            name: this.name,
            coins: this.coins
        }
    }
    addCoins(){
        this.coins+=10
    }
    getCoins(){
        return this.coins
    }

}