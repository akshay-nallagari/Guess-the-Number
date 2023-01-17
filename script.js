'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
  
const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector('.check').addEventListener(
    'click', function(){
        let guess = Number(document.querySelector('.guess').value);
        if(!guess)
        {
            displayMessage('No number !');
            score--;
        }
        else if(guess === secretNumber)
        {
            displayMessage("Correct !");
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector(".number").style.width = "30rem";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.highscore').textContent = Math.max(highScore, score);
        }
        else if(guess !== secretNumber)
        {
            if(score>1)
            {
                displayMessage( guess > secretNumber ? "Too high !" : "Too low !");
            }
            else{
                displayMessage("You Lost !");
            }
            score--;
        }
        document.querySelector('.score').textContent = score;
    }
)

document.querySelector('.again').addEventListener(
    'click', function(){
        score = 20;
        document.querySelector(".score").textContent = score;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        displayMessage('Start guessing...');
        document.querySelector(".number").textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    }
)