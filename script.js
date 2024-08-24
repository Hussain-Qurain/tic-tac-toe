console.log("Welcome to my tic-tac-toe game");

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let random = Math.random();
    if(random >= 0.33 && random < 0.67){
        return choices[1];
    }
    else if (random < 0.33){
        return choices[0];
    }
    return choices[2];
}

function getHumanChoice(){
    let choice = prompt('Pick one of the following: ' + choices);
    return choice;
}

function calculateWinner(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'tie';
    }
    else if(humanChoice === 'rock'){
        if(computerChoice === 'paper') return 'computer';
        else if(computerChoice === 'scissors') return 'human';
    }
    else if(humanChoice === 'paper'){
        if(computerChoice === 'rock') return 'human';
        else if(computerChoice === 'scissors') return 'computer';
    }
    //if human choice is scissors
    else if(humanChoice === 'scissors'){
        if(computerChoice === 'rock') return 'computer';
        else if(computerChoice === 'paper') return 'human';
    }
    else{
        console.alert("You picked an invalid choice");
        return false;
    }
}

function play(){
    let x = prompt("Enter 1 to keep playing, otherwise enter anything");
    if(x === "1"){
        return 1;
    }
    return false;
}

function declareScores(humanScore, computerScore){
    console.log("Human: " +humanScore);
    console.log("Computer: " +computerScore);
}

function playRound(){
    let humanScore = 0;
    let computerScore = 0;
    let keepGoing = 1;
    while(keepGoing){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        let winner = calculateWinner(human, computer);
        if(winner === 'human'){
            console.log(`You win! ${human} beats ${computer}`);
            humanScore++;
        }
        else if (winner === 'computer'){
            console.log(`You lose! ${computer} beats ${human}`)
            computerScore++;
        }
        else{
            console.log("It is a tie!");
        }
        declareScores(humanScore, computerScore);

        keepGoing = play();
    }
}

playRound();