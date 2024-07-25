let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscor = document.querySelector("#userscore");
let compscor = document.querySelector("#compscore");
let reset = document.querySelector("#resetbtn");
console.log(reset);
const draw = ()=>{
    msg.innerHTML = "Game was Draw. Play Again"
}
const resetGame =()=>{
    userscor.innerHTML = 0
    compscor.innerHTML = 0
    msg.innerHTML = `Your Move`
}
const showwinner = (userwin)=>{
    if(userwin){ 
        userscore ++
        msg.innerHTML = `You Win!`;
        userscor.innerHTML = userscore
    }else{
        compscore ++
        msg.innerHTML = `You Lose!`;
        compscor.innerHTML = compscore
    }
}
const gencomchoice =()=>{
    let option = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3);
    return option[index];
}
const playgame = (userchoice) =>{
    console.log("userchoice", userchoice);
    const comchoice = gencomchoice();
    console.log("comchoice", comchoice);
    
    if(userchoice === comchoice){
        draw();
    }else{
        let userwin = true
        if(userchoice === "rock"){
           userwin = comchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = comchoice === "scissor" ? false : true;
        }else{
            userwin = comchoice === "rock" ? false : true
        }
        showwinner(userwin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userchoice = choice.getAttribute("id");
        playgame(userchoice);        
    })
})
reset.addEventListener("click",resetGame);

