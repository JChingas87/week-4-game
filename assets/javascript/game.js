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
        $('#wins').empty();
        $('#wins').append(this.wins);
        $('#losses').empty();
        $('#losses').append(this.losses);
        $('.current-score').empty();
        $('.current-score').append(this.currentScore);

    },

    gameReset: function() {

        this.currentScore;
        this.winningNumber;

        $('.winning-number').empty();
        $('.winning-number').append(this.winningNumber);

        this.ruby;
        this.topaz;
        this.sapphire;
        this.emerald;

        this.gameValues();
    },

    gameLogic: function() {

        if (this.winningNumber == this.currentScore) {
            this.wins = this.wins + 1;
            this.gameReset();
        } else if (this.winningNumber < this.currentScore) {
            this.losses = this.losses + 1;
            this.gameReset();
        } else {
            this.gameValues();
        }

    },

}

$(".current-score").append(gameObject.currentScore);
console.log(gameObject.winningNumber);
$(".winning-number").append(gameObject.winningNumber);
console.log(gameObject.currentScore);

// Add an on click listener to all elements that have the class "crystal"

$(document).ready(function() {

    $('#button-1').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.ruby;
        gameObject.gameLogic();
    })
    $('#button-2').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.topaz;
        gameObject.gameLogic();
    })
    $('#button-3').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.sapphire;
        gameObject.gameLogic();
    })
    $('#button-4').click(function() {
        gameObject.currentScore = gameObject.currentScore + gameObject.emerald;
        gameObject.gameLogic();
    })
});