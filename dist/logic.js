class PacMan {
    constructor() {
        this.rows = 0
        this.columns = 0
        this.board = []
        this.player1 = {}
        this.player2 = {}
        this.startGame = false
        this.items = {
            player1: 'p1',
            player2: 'p2',
            empty: 'e',
            coin: 'c',
            wall: 'w'
        }

    }

    generateGame(rows, columns) {
        this.rows = rows
        this.columns = columns
        this.board = new Matrix(this.rows, this.columns)
        this.player1 = new Player(this.items.player1, 0, 0)
        this.player2 = new Player(this.items.player2, this.columns - 1, this.rows - 1,)
        this.board.alter(0, 0, this.items.player1)
        this.board.alter(this.rows - 1, this.columns - 1, this.items.player2)
        this.startGame =true
    }

    moveRight(player) {
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos
        const nextBlock = this.board.get(yPos, xPos + 1)
        if (nextBlock == this.items.coin || nextBlock == this.items.empty) {
            if (nextBlock == this.items.coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, this.items.empty)
            player.moveRight()
            this.board.alter(yPos, xPos + 1, player.name)
        }
    }
    moveLeft(player) {
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos
        const nextBlock = this.board.get(yPos, xPos - 1)
        if (nextBlock == this.items.coin || nextBlock == this.items.empty) {
            if (nextBlock == this.items.coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, this.items.empty)
            player.moveLeft()
            this.board.alter(yPos, xPos - 1, player.name)
        }
    }

    moveDown(player) {
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos
        const nextBlock = this.board.get(yPos + 1, xPos)
        if (nextBlock == this.items.coin || nextBlock == this.items.empty) {
            if (nextBlock == this.items.coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, this.items.empty)
            player.moveDown()
            this.board.alter(yPos + 1, xPos, player.name)
        }
    }
    moveUp(player) {
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos

        const nextBlock = this.board.get(yPos - 1, xPos)
        if (nextBlock == this.items.coin || nextBlock == this.items.empty) {
            if (nextBlock == this.items.coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, this.items.empty)
            player.moveUp()
            this.board.alter(yPos - 1, xPos, player.name)
        }
    }
    getBoard() {
        return this.board.getMatrix()
    }
    getCoins(){
        const p1 = this.player1.getCoins()
        const p2 = this.player2.getCoins()

        return{p1,p2}
    }

}

