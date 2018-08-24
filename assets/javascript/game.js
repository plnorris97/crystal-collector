$(document).ready(function () {


var redValue=Math.floor(Math.random()*(12-1)+1);;
var blueValue=Math.floor(Math.random()*(12-1)+1);;
var greenValue=Math.floor(Math.random()*(12-1)+1);;
var yellowValue=Math.floor(Math.random()*(12-1)+1);;
var wins = 0;
var losses = 0;
var totalScore = [];
var goalScore = "";
    

function startGame() {
    goalScore=Math.floor(Math.random()*(120-19)+19);
    $("#goal-score").html("Goal Score: " + goalScore);
    wins = "";
    losses = "";
    totalScore = [];

    $("#goal-score").html("Goal Score: " + goalScore);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
   
}

function clearArray() {
    totalScore = [];
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
    
    var totalScoreNew = totalScore;
    for (var i = totalScore.length; i > 0; i--) {
        totalScore.pop();
       }
    
    $("your-score").html("Your score: " + totalScoreNew);
    
    startGame();
});

});


