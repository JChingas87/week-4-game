$(document).ready(function() {

    // Make our variables global to the runtime of our application
    var crystalNumbers;
    var targetNumbers;
    var randomCrystalNumbers;
    var randomTargetNumbers;
    var winningNumber;
    var ruby;
    var topaz;
    var sapphire;
    var emerald;
    var wins;
    var losses;
    var winningScore;
    var currentScore;


    // Use a function to initialize the game.
    // This way when the user hits wins or loses, the game will reset by calling the function.
    function initializeGame() {

        var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var targetNumbers = ["between 12 and 120"];
        var randomCrystalNumbers = Math.floor(Math.random() * crystalNumbers.length);
        var randomTargetNumbers = Math.floor(Math.random() * targetNumbers.length);
        var winningNumber = targetNumbers[randomTargetNumbers];
        var ruby = crystalNumbers[randomCrystalNumbers];
        var topaz = crystalNumbers[randomCrystalNumbers];
        var sapphire = crystalNumbers[randomCrystalNumbers];
        var emerald = crystalNumbers[randomCrystalNumbers];
        var wins = 0;
        var losses = 0;
        var winningScore = 0;
        var currentScore = 0;

        $(".winning-score, .current-score, .crystals").empty();
    }

    // Add an on click listener to all elements that have the class "crystal"
    $(".number").on("click", function() {

        // add a jquery link to html for .number and make it equals to randomCrystalNumbers to refactor. Console log to check. Then each crystal will be random and will need less code

        // each crystal button with same class name and then specify variable for specific random value per crytal
    });

    // once each crystal has a random value, append value to html div and add it to previous value
    // if currentScore = winningScore (wins++) and reset game but not wins or losses, else if currentScore > winningScore (losses++) and reset game but not wins or losses
});