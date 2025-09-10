let userScore=0;
let compScore=0;
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#computer-score");

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let num=Math.floor(Math.random()*3);
    return options[num];
}
const drawGame=()=>{
    console.log("game is draw"); 
    msg.innerText="game is draw";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";

}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        user_score.innerText=userScore;
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose!! computer win");
        compScore++;
        comp_score.innerText=compScore;
        msg.innerText="you lose!!computer win";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
console.log("user choice was",userchoice);
let compChoice=genCompChoice();
console.log("compute choice =",compChoice);
if(userchoice===compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userchoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}

}
 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
       playGame(userchoice);
    })
}
)
