const name = prompt("Enter Your Name");

const user = document.querySelector("#name");
user.innerText = name;

let userscore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userWinTime = document.querySelector("#user-score");
const compWinTime = document.querySelector("#computer-score");
const choice = document.querySelector(".choice")

// choice.onmousedown = () => {
    // choice.style.backgroundColor = "#081b31";
// }


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGamees = () => {
    console.log("ohhnn....Game Was Draw!!.")
    msg.innerText = "Game Was Draw!!..Play again..";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win!!!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userWinTime.innerText = userscore;
    }
    else{
        console.log("You Lose!!!");
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compWinTime.innerText = compScore;
    }
};

const playGame = (userChoice) => {

    

    console.log("User Choice = ", userChoice);
    // Generate computer choice

    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if(userChoice == compChoice) {
        drawGamees();
    }
    else{
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);

    }

};


choices.forEach((choice) =>{

    choice.style.backgroundColor = "#081b31";
    choice.onmousedown = () => {
        choice.style.backgroundColor = "#FF674D";
    }
    choice.onmouseup = () => {
        choice.style.backgroundColor = "#081b31";
    }
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});