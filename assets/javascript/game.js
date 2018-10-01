$(document).ready(function () {

    // declare variables for each crystal and score item
var redValue=Math.floor(Math.random()*(12-1)+1);;
var blueValue=Math.floor(Math.random()*(12-1)+1);;
var greenValue=Math.floor(Math.random()*(12-1)+1);;
var yellowValue=Math.floor(Math.random()*(12-1)+1);;
var wins = 0;
var losses = 0;
var totalScore = [];
var goalScore = "";
    
// startGame function is the primary function of the game
function startGame() {
    // generates a random goal score number between 19 and 120.
    goalScore=Math.floor(Math.random()*(120-19)+19);
    // writes the goal score to the page in the #goal-score htmml div
    $("#goal-score").html("Goal Score: " + goalScore);
    // clears out the wins, losses and totalScore html divs
    wins = "";
    losses = "";
    totalScore = [];

    // writes the
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
   
}

function playAgain() {
    goalScore=Math.floor(Math.random()*(120-19)+19);
    $("#goal-score").html("Goal Score: " + goalScore);
    totalScore = []
    $("#your-score").text("Total Score:");

    redValue=Math.floor(Math.random()*(12-1)+1);;
    blueValue=Math.floor(Math.random()*(12-1)+1);;
    greenValue=Math.floor(Math.random()*(12-1)+1);;
    yellowValue=Math.floor(Math.random()*(12-1)+1);;
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
   
}

function clearArray() {
    totalScore = [];

    var totalScoreNew = totalScore;
    for (var i = totalScore.length; i > 0; i--) {
        totalScore.pop();
       }
}

function winner() {
    alert("Congrats you won!");
    wins++;
    $("#wins").html("Wins: " + wins);
}
        
function loser() {
    alert("Sorry, you lost.");
    losses++;
    $("#losses").html("Losses: " + losses);
}

startGame();

$("button").val(redValue, blueValue, greenValue, yellowValue)

    $(".redBtn").click(function() {
        totalScore = eval(totalScore) + eval(redValue);
        console.log(redValue);
        $("#your-score").html("Your score: " + totalScore);
        if (totalScore == goalScore) {
            winner();
        }
        else if (totalScore > goalScore) {
            loser();
        }  
    });
    $(".blueBtn").click(function() {
        totalScore = eval(totalScore) + eval(blueValue);
        console.log(blueValue);
        $("#your-score").html("Your score: " + totalScore);
        if (totalScore == goalScore) {
            winner();
        }
        else if (totalScore > goalScore) {
            loser();
        }  
    });
    $(".greenBtn").click(function() {
        totalScore = eval(totalScore) + eval(greenValue);
        console.log(greenValue);
        $("#your-score").html("Your score: " + totalScore);
        if (totalScore == goalScore) {
            winner();
        }
        else if (totalScore > goalScore) {
            loser();
        }  
    });
    $(".yellowBtn").click(function() {
        totalScore = eval(totalScore) + eval(yellowValue);
        console.log(yellowValue);
        $("#your-score").html("Your score: " + totalScore); 

        if (totalScore == goalScore) {
            winner();
        }
        else if (totalScore > goalScore) {
            loser();
        }  
    });


$("#play-again").click(function() {
    console.log("let's play");
    clearArray();
    playAgain();
    $("your-score").html("Your score: " + totalScoreNew);
});


$("wins").html("Wins: " + wins);
$("losses").html("Losses: " + losses);

});


