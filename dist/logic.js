class PacMan {
    constructor() {
        this.rows = 0
        this.columns = 0
        this.board = []
        this.player1 = {}
        this.player2 = {}
        this.totalCoins = 0
        this.startGame = false
        this.CONSTANTS = {
            player1: 'Player1',
            player2: 'Player2',
            empty: 'e',
            coin: 'c',
            wall: 'w',
            MAXROWS: 18,
            MAXCOLUMNS: 35
        }

    }
    getRandom(dimension) {
        return Math.floor(Math.random() * (this[dimension] - 1)) || 1
    }
    setWalls() {
        const numberOfWalls = (this.rows * this.columns) / 3
        for (let i = 0; i < numberOfWalls; i++) {
            const y = this.getRandom('rows')
            const x = this.getRandom('columns')
            const matrix = this.board.getMatrix()
            if (matrix[y + 1][x + 1] != this.CONSTANTS.wall &&
                matrix[y - 1][x - 1] != this.CONSTANTS.wall &&
                matrix[y][x] != this.CONSTANTS.wall) {
                this.board.alter(y, x, this.CONSTANTS.wall)
                this.totalCoins -= 10
            }
        }
    }

    generateGame(rows, columns) {
        const { MAXROWS, MAXCOLUMNS, player1, player2 } = this.CONSTANTS
        rows = (rows > MAXROWS)? MAXROWS : rows
        columns = (columns > MAXCOLUMNS)? MAXCOLUMNS : columns
        this.rows = rows
        this.columns = columns
        this.totalCoins = (rows * columns - 2) * 10
        this.board = new Matrix(rows, columns)
        this.player1 = new Player(player1, 0, 0)
        this.player2 = new Player(player2, columns - 1, rows - 1,)
        this.setWalls()
        this.board.alter(0, 0, player1)
        this.board.alter(rows - 1, columns - 1, player2)
        this.startGame = true
    }

    moveRight(player) {
        const { empty, coin } = this.CONSTANTS
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos
        const nextBlock = this.board.get(yPos, xPos + 1)
        if (nextBlock == coin || nextBlock == empty) {
            if (nextBlock == coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, empty)
            player.moveRight()
            this.board.alter(yPos, xPos + 1, player.name)
        }
    }

    moveLeft(player) {
        const { empty, coin } = this.CONSTANTS
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos
        const nextBlock = this.board.get(yPos, xPos - 1)
        if (nextBlock == coin || nextBlock == empty) {
            if (nextBlock == coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, empty)
            player.moveLeft()
            this.board.alter(yPos, xPos - 1, player.name)
        }
    }

    moveDown(player) {
        const { empty, coin } = this.CONSTANTS
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos
        const nextBlock = this.board.get(yPos + 1, xPos)
        if (nextBlock == coin || nextBlock == empty) {
            if (nextBlock == coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, empty)
            player.moveDown()
            this.board.alter(yPos + 1, xPos, player.name)
        }
    }

    moveUp(player) {
        const { empty, coin } = this.CONSTANTS
        const xPos = player.getPosition().xPos
        const yPos = player.getPosition().yPos
        const nextBlock = this.board.get(yPos - 1, xPos)
        if (nextBlock == coin || nextBlock == empty) {
            if (nextBlock == coin) {
                player.addCoins()
            }
            this.board.alter(yPos, xPos, empty)
            player.moveUp()
            this.board.alter(yPos - 1, xPos, player.name)
        }
    }

    getBoard() {
        return this.board.getMatrix()
    }

    getCoins() {
        const p1 = this.player1.getCoins()
        const p2 = this.player2.getCoins()
        return { p1, p2 }
    }

    checkGameOver() {
        const playersCoins = this.getCoins()
        const collectedCoins = playersCoins.p1 + playersCoins.p2
        if (collectedCoins == this.totalCoins) {
            this.startGame = false
            return true
        }
        return false
    }

    getWinner() {
        if (game.player1.coins > game.player2.coins) {
            return game.player1
        } else {
            return game.player2
        }
    }
}