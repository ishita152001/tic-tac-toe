console.log("Working!!!!!!!!!!!!");
//declaring the games and variables
const gameOverSound = new Audio("sounds/gameover.mp3");
const backgroundSound = new Audio("sounds/music.mp3");
const turnSound = new Audio("sounds/ting.mp3");
var turn = "X";
var isgameover = false;

//Function to change the turn
const changeTurn = ()=> {
    return turn === "X"? "0" : "X";
}

//Function for winning the match
const checkWin = ()=> {
var textbox = document.getElementsByClassName("textBox");
var wins = [
    [0,1,2,-1,4,0],
    [3,4,5,-1,12,0],
    [6,7,8,-1,20,0],
    [0,3,6,-9,12,90],
    [1,4,7,-1,12,90],
    [2,5,8,7,12,90],
    [0,4,8,-1,12,46],
    [2,4,6,-1,11,135]
]

wins.forEach(e=>{
if((textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText!=="")){
    document.querySelector(".gameInfo").innerText = textbox[e[0]].innerText + "  Won!!!!";
    isgameover = true;
    document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    document.querySelector(".line").style.width="27vw";
}
// else {
//     document.querySelector(".gameInfo").innerText = "Game Over!!!!";
// }
})
}

//Game Logic
var boxes = document.getElementsByClassName("gBox");
Array.from(boxes).forEach(element=>{
    var textbox = element.querySelector(".textBox");
    element.addEventListener("click",()=>{
        if(textbox.innerText === "")
        {
            textbox.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if(!isgameover)
            {
                document.querySelector(".gameInfo").innerText = "Turn for "+turn;
            }
        }
    })
})


