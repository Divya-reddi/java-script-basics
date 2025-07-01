let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
//console.log(choices);
let msg = document.querySelector(".msg");
let userscoreVal = document.getElementById("user-score");
let compscoreVal = document.getElementById("comp-score");
let getCompchoice = function(){
    let compChoices = ['rock', 'paper', 'scissors'];
    let randIdx = Math.floor(Math.random()*3);
    return compChoices[randIdx];
}

let drawGame = function(){
    msg.innerText = "It was a Draw! play again!!";
    msg.style.backgroundColor = "orange";
}

let showWinner = function(userWin){
    if(userWin){
        userScore++;
        msg.innerText = " You Won!! ";
        msg.style.backgroundColor = "green";
        userscoreVal.textContent = userScore;
    }else{
        compScore++;
        msg.innerText = " Computer Won!! ";
        msg.style.backgroundColor = "red";
        compscoreVal.textContent = compScore;
    }
}
let playGame = function(userChoice){
    let compChoice = getCompchoice();
    console.log(userChoice);
    console.log(compChoice);
    let userWin = true;
    if(userChoice === compChoice){
        drawGame();
    }else if(userChoice === 'paper'){
        userWin = compChoice === 'rock' ? true : false;
        showWinner(userWin);
    }else if(userChoice === 'scissors'){
        userWin = compChoice === 'paper' ? true : false;
        showWinner(userWin);
    }else{
        userWin = compChoice === 'scissors' ? true : false;
        //console.log(userWin);
        showWinner(userWin);
    } 
}
choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        //console.log(userChoice);
        playGame(userChoice);
    });
});


