class Renderer {
    constructor() {
        const source = $('#blocks-template').html()
        this.template = Handlebars.compile(source)
        this.board = $('#board')
        this.rowsElement = $('')
        this.columns = 0
    }

    setBoard(columns) {
        this.columns = columns
        const rowsElements = $('.row')
        for (const row of rowsElements) {
            row.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
        }
    }
    renderScore(coins) {
        $('#p1-coins').text(`Player 1: ${coins.p1}`)
        $('#p2-coins').text(`Player 2: ${coins.p2}`)
    }

    render(board) {
        this.board.empty()
        const html = this.template({ board })
        this.board.append(html)
        this.setBoard(this.columns)

    }
}