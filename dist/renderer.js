class Renderer {
    constructor() {
        const source = $('#blocks-template').html()
        const gameOverSource = $('#gameOver-template').html()
        this.boardContainer = $('#boardContainer')
        this.menu = $('#menu')
        this.template = Handlebars.compile(source)
        this.gameOverTemplate = Handlebars.compile(gameOverSource)
        this.columns = 0
        this.styleSheet = document.styleSheets
    }


    setBoard(columns) {
        const rowsElements = $('.row')
        for (const row of rowsElements) {
            row.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
        }
        this.menu.css('display','none')
    }

    renderScore(coins) {
        $('#p1-coins').text(`Player 1: ${coins.p1}`)
        $('#p2-coins').text(`Player 2: ${coins.p2}`)
    }

    render(board) {
        this.columns = board[0].length
        this.boardContainer.empty()
        const html = this.template({ board })
        this.boardContainer.append(html)
        this.setBoard(this.columns)
        setTimeout(() => {
            this.styleSheet[0].cssRules[12].style.animationName = 'none'
        }, 1000)
    }

    renderGameOver(player) {
        const html = this.gameOverTemplate(player)
        this.boardContainer.append(html)
        this.menu.css('display','grid')
    }

    closeWindow() {
        $('#gameOver').css('display', 'none')
    }
}