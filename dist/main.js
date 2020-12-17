const game = new PacMan
const renderer = new Renderer
const socket = io.connect('/')

$("#start").on('click', function () {
    const rows = $('#rows').val() || 18
    $('#rows').val('')
    const columns = $('#columns').val() || 40
    $('#columns').val('')
    socket.emit('start', {rows,columns})
})

$('body').on('keypress', function (e) {
    if (game.startGame) {
        let direction
        switch (e.key) {
            case "a":

                direction = { player: 'player1', move: 'moveLeft' }
                break;

            case 'd':

                direction = { player: 'player1', move: 'moveRight' }
                break;

            case 'w':

                direction = { player: 'player1', move: 'moveUp' }
                break;

            case 's':

                direction = { player: 'player1', move: 'moveDown' }
                break;

            case "j":

                direction = { player: 'player2', move: 'moveLeft' }
                break;

            case 'l':

                direction = { player: 'player2', move: 'moveRight' }
                break;

            case 'i':

                direction = { player: 'player2', move: 'moveUp' }
                break;

            case 'k':

                direction = { player: 'player2', move: 'moveDown' }
                break;
        }
        direction.game = game
        socket.emit('move', direction)

    }
})

socket.on('start', function (newGame) {
        game.generateGame(newGame.rows, newGame.columns)
        renderer.render(game.getBoard())
})

socket.on('move', function (direction) {
    if (!game.startGame) {
        const newGame = direction.game
        game.generateGame(newGame.rows, newGame.columns)
        game.board.matrix = newGame.board.matrix
        game.player1.coins = newGame.player1.coins
        game.player2.coins = newGame.player2.coins
        game.player1.position = newGame.player1.position
        game.player2.position = newGame.player2.position
        game.totalCoins = newGame.totalCoins
        game.startGame = true

    }
    const { player, move } = direction
    game[move](game[player])
    renderer.render(game.getBoard())
    renderer.renderScore(game.getCoins())
    if (game.checkGameOver()) {
        renderer.renderGameOver(game.getWinner())
    }
})