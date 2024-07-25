let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
const resetGame =()=>{
    turnO = true
    enabledBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach(box =>{
    box.addEventListener("click",()=>{
        console.log("button was clicked")
        if(turnO){
            box.innerHTML = "O"
            turnO = false
        }else{
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled= true
        checkWinner();
    })
    
})
const disabledBoxes =()=>{
    for(box of boxes){
        box.disabled = true
    }
}
const enabledBoxes =()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) =>{
  msg.innerHTML =`Congratulation, winner is ${winner}`
  msgcontainer.classList.remove("hide");
  resetBtn.classList.remove("hide")
  disabledBoxes();
}

const checkWinner = () =>{
    for(pattern of winPattern){
      let pos1val = boxes[pattern[0]].innerHTML;
      let pos2val = boxes[pattern[1]].innerHTML;
      let pos3val = boxes[pattern[2]].innerHTML;
        if (pos1val!="" && pos2val != "" && pos3val !=""){
          if (pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val)
            showWinner(pos1val);
            disabledBoxes();
          }  
        }        
    }     
}
resetBtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
