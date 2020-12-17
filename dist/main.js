const game = new PacMan
const renderer = new Renderer

$("#start").on('click', function () {
    const rows = $('#rows').val() || 18
    $('#rows').val('')
    const columns = $('#columns').val() || 40
    $('#columns').val('')
    game.generateGame(rows, columns)
    renderer.render(game.getBoard())
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
        renderer.render(game.getBoard())
        renderer.renderScore(game.getCoins())
        if (game.checkGameOver()) {
            renderer.renderGameOver(game.getWinner())

        }
    }
})