var imgPlayer = document.getElementById("player")
var imgComputer = document.getElementById("computer")
var playing = document.getElementById("playing") //this is the button play in the end of the game
var score = document.getElementById("scoreGame") //score of the game
var winner = document.getElementById("winner") 
var loser = document.getElementById("loser") 
var rock = document.getElementById("rockInput")
var paper = document.getElementById("paperInput")
var scissors = document.getElementById("scissorsInput")
var player = ""
var computer = ""
var playerScore = 0
var computerScore = 0

rock.addEventListener("click", () => {
    selectGame(rock)
    playComputer()
})

paper.addEventListener("click", () => {
    selectGame(paper)
    playComputer()
})

scissors.addEventListener("click", () => {
    selectGame(scissors)
    playComputer()
})

function selectGame(button) {
    player = button.value
    imgPlayer.innerHTML = "<img src='assets/images/" + player + ".svg'>"
    imgComputer.innerHTML = ""
}

function playComputer() {
    let options = ['rock', 'paper', 'scissors']
    let number = Math.floor(Math.random() * 2);
    computer = options[number]
    imgComputer.innerHTML = "<img src='assets/images/" + computer + ".svg'>"
    gameRule()
}

function gameRule() {
    let win = "0"

    if (player == computer) {
    } else if (player == "rock") {
        win = computer == "scissors" ? 1 : -1
    } else if (player == "paper") {
        win = computer == "rock" ? 1 : -1
    } else if (player == "scissors") {
        win = computer == "paper" ? 1 : -1
    }

    if(win == 0){
    } else if(win > 0){ 
        playerScore = playerScore + 1
    } else {
        computerScore = computerScore + 1
    }

    score.innerHTML = playerScore + " x " + computerScore

    if (playerScore >= 2){
        winner.classList.remove('front-screen')
        winner.classList.add('newWindow')
    }

    if (computerScore >= 2){
        loser.classList.remove('front-screen')
        loser.classList.add('newWindow')
    }
}

function cleanScore(){
    imgComputer.innerHTML=""
    imgPlayer.innerHTML = ""
}

function restart(){
    cleanScore()
    score.innerHTML = "0x0"
    computerScore = 0
    playerScore = 0
    winner.classList.add('front-screen')
    winner.classList.remove('newWindow')
    loser.classList.add('front-screen')
    loser.classList.remove('newWindow')
}

