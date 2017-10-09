var gameObject = {

    winningNumber: Math.floor((Math.random() * 120) + 19),

    ruby: Math.floor((Math.random() * 12) + 1),
    topaz: Math.floor((Math.random() * 12) + 1),
    sapphire: Math.floor((Math.random() * 12) + 1),
    emerald: Math.floor((Math.random() * 12) + 1),

    wins: 0,
    losses: 0,

    currentScore: 0,

    gameValues: function() {
        $('.wins').empty();
        $('.wins').append(gameObject.wins);
        $('.losses').empty();
        $('.losses').append(gameObject.losses);
        $('.current-score').empty();
        $('.current-score').append(gameObject.currentScore);

    },

    gameReset: function() {

        gameObject.currentScore;
        gameObject.winningNumber;

        game.Object.ruby;
        game.Object.topaz;
        game.Object.sapphire;
        game.Object.emerald;

        $('.winning-score').empty();
        $('.winning-score').append(gameObject.winningScore);

        gameObject.gameValues();
    },

    gameLogic: function() {

        if (gameObject.winningScore == gameObject.current.Score) {
            wins++;
            gameObject.gameReset();
        } else if (gameObject.winningScore < gameObject.currentScore) {
            losses--;
            gameObject.gameReset();
        } else {
            gameObject.gameValues();
        }

    },

}

$(".winning-score").append(gameObject.winningNumber);
$(".winning-score").append(gameObject.currentScore);

// Add an on click listener to all elements that have the class "crystal"

$(document).ready(function() {

    $('#button-1').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.ruby;
        gameObject.gameValues();
    })
    $('#button-2').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.topaz;
        gameObject.gameValues();
    })
    $('#button-3').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.sapphire;
        gameObject.gameValues();
    })
    $('#button-4').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.emerald;
        gameObject.gameValues();
    })
});