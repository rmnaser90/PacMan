const game = new PacMan
const renderer = new Renderer
const socket = io.connect('/')

$("#start").on('click', function () {
    const rows = $('#rows').val() || 18
    $('#rows').val('')
    const columns = $('#columns').val() || 40
    $('#columns').val('')
    game.generateGame(rows, columns)
    renderer.render(game.getBoard())
    socket.emit('game', game)
})

$('body').on('keypress', function (e) {
    if (game.startGame) {
        switch (e.key) {
            case "a":
                game.moveLeft(game.player1)
                break;

            case 'd':
                game.moveRight(game.player1)
                break;

            case 'w':
                game.moveUp(game.player1)
                break;

            case 's':
                game.moveDown(game.player1)
                break;

            case "j":
                game.moveLeft(game.player2)
                break;

            case 'l':
                game.moveRight(game.player2)
                break;

            case 'i':
                game.moveUp(game.player2)
                break;

            case 'k':
                game.moveDown(game.player2)

                break;
        }
        socket.emit('game', game)


    }
})

socket.on('game', function (newGame) {
    if (!game.startGame) {
        game.generateGame(newGame.rows, newGame.columns)
    }
    game.board.matrix = newGame.board.matrix
    game.columns = newGame.columns
    game.rows = newGame.rows
    game.player1.coins = newGame.player1.coins
    game.player2.coins = newGame.player2.coins
    game.player1.position = newGame.player1.position
    game.player2.position = newGame.player2.position
    game.startGame = newGame.startGame
    game.totalCoins = newGame.totalCoins

    renderer.render(game.getBoard())
    renderer.renderScore(game.getCoins())
    if (game.checkGameOver()) {
        renderer.renderGameOver(game.getWinner())
    }
})