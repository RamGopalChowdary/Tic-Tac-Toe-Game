let playerTxt=document.getElementById('playerText');
let reset = document.getElementById('resetBtn');
let boxes=document.querySelectorAll('.cell');
let arr=Array.from(boxes);
let turn=document.querySelector('#turn');
const o_text='O';
const x_text='X';
let curr=x_text;
let spaces=new Array(9).fill(null);
let bool=false;
const startGame=() =>{
     arr.forEach(box => box.addEventListener('click',function(e){
        if(bool==false){
            boxClicked(e);
        }
     }));
}
function boxClicked(e){
    const id=e.target.id;
    
    if(!spaces[id]){
        spaces[id]=curr;
        e.target.innerHTML=curr;
        if(playerWon()!=false){
            playerTxt.innerHTML= 'Player '+curr+'  Won';
            bool=true;
            return 
        }
        curr=(curr==x_text?o_text:x_text);
        turn.innerHTML=curr + " 's turn"
}
if(!spaces.includes(null)){
    playerTxt.innerHTML='Draw';
}
}
const winningCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function playerWon(){
     for (const comb of winningCombos) {
        let [a,b,c]=comb;
        if(spaces[a] && spaces[a]==spaces[b] && spaces[a]==spaces[c]){
            console.log(a,b,c)
            return true
        }
     }
     return false;
}


reset.addEventListener('click',restartFunc);
function restartFunc(){
    spaces.fill(null);
    arr.forEach(box =>{
        box.innerHTML="";
    })
    playerTxt.innerHTML='Tic-Tac-Toe';
    curr=x_text
    bool=false
}
startGame()