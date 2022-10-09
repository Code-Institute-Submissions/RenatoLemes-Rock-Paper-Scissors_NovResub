var playerScore = 0
var computerScore = 0

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
    let opt = ['rock', 'paper', 'scissors']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    computer = opt[num]
    imgComputer.innerHTML = "<img src='assets/images/" + computer + ".svg'>"
    gameRule()
}

function gameRule() {

    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true

    let win = "0"

    if (player == computer) {

    } else if (player == "rock") {
        win = computer == 'scissors' ? 1 : -1
    } else if (player == 'paper') {
        win = computer == 'rock' ? 1 : -1
    } else if (player == 'scissors') {
        win = computer == 'paper' ? 1 : -1
    }

    if(win == 0){
        
    } else if(win > 0){ 
        playerScore = playerScore + 1
    } else {
        computerScore = computerScore + 1
    }

    score.innerHTML = playerScore +  "-" + computerScore

    if (playerScore >= 2){
        winner.classList.remove('none')
        winner.classList.add('center')
    }

    if (computerScore >= 2){
        loser.classList.remove('none')
        loser.classList.add('center')
    }

    setTimeout(()=>{
        rock.disabled = false
        paper.disabled = false
        scissors.disabled = false
        clear();
    },1000)
}

function clear(){
    imgComputer.innerHTML=""
    imgPlayer.innerHTML = ""
}

document.getElementById("again").addEventListener("click", () => {
    newGame()
})

function restart(){
    score.innerHTML = "0 0"
    computerScore = 0
    playerScore = 0
    clear()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')
}