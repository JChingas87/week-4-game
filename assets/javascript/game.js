var intervalId;

var clockRunning = false;

var gameObject = {

    winningNumber: 0,

    ruby: 0,
    topaz: 0,
    sapphire: 0,
    emerald: 0,

    wins: 0,
    losses: 0,

    currentScore: 0,

    timer: {

        time: 10,

        reset: function() {

            gameObject.timer.time = 10;

            $(".timer").html(gameObject.timer.time);

        },

        start: function() {

            if (!clockRunning) {
                clockRunning = true;
                intervalId = setInterval(gameObject.timer.count, 1000);

            }

        },

        count: function() {

            gameObject.timer.time--;
            var currentTime = gameObject.timer.time;
            $(".timer").html(gameObject.timer.time);

        },

    },



    gameValues: function() {
        $('#wins').empty().append(this.wins);
        $('#losses').empty().append(this.losses);
        $('.current-score').empty().append(this.currentScore);
    },

    gameReset: function() {

        this.currentScore = 0;

        this.timer.reset();

        this.winningNumber = Math.floor((Math.random() * 120) + 19);

        $('.winning-number').empty().append(this.winningNumber);

        this.ruby = Math.floor((Math.random() * 12) + 1);
        this.topaz = Math.floor((Math.random() * 12) + 1);
        this.sapphire = Math.floor((Math.random() * 12) + 1);
        this.emerald = Math.floor((Math.random() * 12) + 1);

        this.gameValues();
    },

    gameLogic: function() {

        if ((this.winningNumber == 0) && (this.currentScore == 0)) {
            this.wins = this.wins;
            this.losses = this.losses;
            this.timer.start();
            this.gameReset();
        } else if (gameObject.timer.time = 0) {
            this.gameReset();
        } else if (this.winningNumber == this.currentScore) {
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
$(".winning-number").append(gameObject.winningNumber);


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