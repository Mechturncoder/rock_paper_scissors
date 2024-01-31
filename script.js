let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper" ,"scissor"];
    let choiceIdx = Math.floor(Math.random()*3);
    return option[choiceIdx];
}


const showWinner = (userWin) =>{
    if(userWin){
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green"
        userScore++
        userPoint.innerText= userScore;  
    }else{
        msg.innerText = "You Lose."
        msg.style.backgroundColor = "red"
        compScore++
        compPoint.innerText= compScore;  
    }
}

const draw = () =>{
    msg.innerText = "Match Drawn. Play again."
    msg.style.backgroundColor = "#081b31"


}
const playGame= (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        draw();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor"?false:true;
        }else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }



}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})