$(document).ready(function () {
    // Declare global variables
    var crystals = $('.gem');
    var numofWins = 0;
    var numOfLosses = 0;
    var score;
    var numberToMatch;

    // On page load, run the startGame function
    startGame();

    // initialize global variables and declare local variables to maniplate the DOM
    function startGame() {
        // Generate a random number to match and display on page
        numberToMatch = Math.floor((Math.random() * 101) + 19);
        $('#random-number').html(numberToMatch);

        // Display wins and losses on page
        $('#wins').html(numofWins);
        $('#losses').html(numOfLosses);

        // Initialize score to 0 and display in score section
        score = 0;
        $('#score-display').html(score);

        // Remove value attribute from each crystal
        crystals.each(function () {
            $('button').removeAttr("value");
        });
    }

    // Event handler when crystals are clicked
    $('button').on("click", function () {
        // local variables
        var crystalValue = $(this).attr("value");
        var points;

        // Randomly generate a number between 1 and 12
        var value = Math.floor((Math.random() * 12) + 1);

        // If value attribute does not exist, add it and set it equal to randomly generated number
        if (!crystalValue) {
            $(this).attr("value", value);
            // Point value will equal value attribute of crystal
            points = $(this).val();
        }
        else {
            points = $(this).val();
        }
        // Convert points from string to integer and pass it to calculateScore function
        points = parseInt(points);
        calculateScore(points)
    });


    // Retrieve points to calculate score
    function calculateScore(points) {
        score += points;

        // If points went over, display loser message
        if (score > numberToMatch) {
            $('#message').html("You lose!!");
            numOfLosses++;
            startGame();
        }
        // If points match, display winner message
        else if (score === numberToMatch) {
            $('#message').html("You win!!");
            numofWins++;
            startGame();
        }
        // Update the DOM to show score each time points are added
        $('#score-display').html(score);
        return score;
    }
});