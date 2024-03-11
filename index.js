let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector("#newbtn");
let messagecontainer = document.querySelector('.msg-container');
let message = document.querySelector('#msg');
// all the winning patterns of the game...
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnO = true;// for accessing whose turn is this time...
let count=0;// to take draw conditon

const disableButton=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableButton=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText = '';
    }
};
const resetButton=()=>
{
    turnO=true;
    count=0;
    enableButton();
    messagecontainer.classList.add("hide");   
};
const showwinner=(winner)=>
{
    message.innerText = 'congrats winner is ' + winner;
     messagecontainer.classList.remove("hide");   
     disableButton();
};
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');
        if (turnO === true) {
           
           let Otext= box.innerText = 'O';
          box.style.cssText='color:#416D19';
            turnO = false;
        }
       
        
        else {
            box.innerText = 'X';
            box.style.cssText='color:#FF9843';
            turnO = true;
        }
        box.disabled = true;
        count++;
        let win=checkwinner();
        if(count===9 && !win)
        {
            gamedraw();
        }
        
    });
});
const gamedraw=()=>
{
    message.innerText='Game was a draw';
    messagecontainer.classList.remove('hide');
    disableButton();
};
const checkwinner = () => {
    for (patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }
    }
}
newgamebtn.addEventListener('click',resetButton);
resetbtn.addEventListener('click',resetButton);

