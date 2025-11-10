var question1="Name the capital of United Kingdom";
var answer1="London";

var question2="Name the capital of Australia";
var answer2="Canberra";

var question3="Name the capital of India";
var answer3="New Dehli";

var question4="Name the capital of France";
var answer4="Paris";

var playerScore = 0;  

function askQuestion(question,answer) {
    var userAnswer = prompt(question1);
    askQuestion(question1, answer1);  
    alert("You got " + playerScore + " out of 3 right.");  
    if (userAnswer.toLowerCase()==answer.toLowerCase()) {
      playerScore++;
      alert("That's correct!");
    } else {
      alert("Incorrect. The answer was " + answer + ".");
    }  
}  

askQuestion(question2, answer2);  
askQuestion(question3, answer3);  

var finalReport = "You got " + playerScore ↵
    + " out of 3 right. ";  


    var finalReport = "You got " + playerScore ↵
    + " out of 3 right. ";  
if (playerScore==3) {
    finalReport += "Perfect score!";  
} else if (playerScore==2) {
    finalReport += "Good job!";  
} else if (playerScore==1) {
    finalReport += "Not bad!";  
} else {
    finalReport += "Better luck next time!";  
}  
alert(finalReport);  