let userscore = 0;
let compScore = 0;

let cont = document.querySelectorAll(".imgs");
let msg = document.querySelector(".msg");
let usersc= document.querySelector("#userSco");
let comSco= document.querySelector("#ComputerScore");

const comInput = () => {
    let arr = ["rock", "paper", "scissors"];
    let comTurn = Math.floor(Math.random() * 3);
    return arr[comTurn];
}

const seeWinner = (userwin,userinput,com) => {
    if (userwin) {
        userscore++;
        msg.innerText= `You Win! Your ${userinput} beats ${com}`;
        msg.style.backgroundColor="green";
        usersc.innerText= userscore;
    } else {
        compScore++;
        msg.innerText=`You lose! ${com} beats Your ${userinput}`;
        msg.style.backgroundColor="red";
        comSco.innerText= compScore;
    }
}

const playGame = (userinput) => {
    let com = comInput();
    console.log(`Computer select ${com} && User select ${userinput}`);
    if (userinput === com) {
        msg.innerText= "Game Draw, Bcz Both get Same";
        msg.style.backgroundColor="#183642";
    } else {
        let userwin = true;

        if (userinput === "rock") {
            userwin = com === "paper" ? false : true;
            userwin = com === "scissors" ? true : false;
        } else if (userinput === "paper") {
            userwin = com === "scissors" ? false : true;
            userwin = com === "rock" ? true : false;
        } else {
            userwin = com === "rock" ? false : true;
            userwin = com === "paper" ? true : false;
        }
        seeWinner(userwin, userinput,com);
    }
}

cont.forEach((conts) => {
    conts.addEventListener("click", () => {
        let userinput = conts.getAttribute("id");
        playGame(userinput);
    })
})