
const weapon = ["✊🏼", "✋🏼", "✌🏼"];

const Player1 = document.getElementById("pchoice");

const Player2 = document.getElementById("cchoice");

const GameResult = document.getElementById("result");

const display1 = document.getElementById("p1score");

const display2 = document.getElementById("p2score");

let pscore = 0;
let cscore = 0;


function rochambo(PlayerChoice){
    const computerbot = weapon[Math.floor(Math.random()*3)];
    
    let results ="";
    
    if(PlayerChoice === computerbot){
        results="TIE";
    }else{
        switch(PlayerChoice){
            case "✊🏼":
            results = (computerbot==="✌🏼") ? "PLAYER WON" : "COMPUTER WON";
            break;
            
            case "✋🏼":
            results = (computerbot==="✊🏼") ? "PLAYER WON" : "COMPUTER WON";
            break;
            
            case "✌🏼":
            results = (computerbot==="✋🏼") ? "PLAYER WON" : "COMPUTER WON";
            break;
      }
    }
    
 Player1.textContent = `${PlayerChoice}`;
 Player2.textContent = `${computerbot}`;
 GameResult.textContent = results;

switch(results){
    case "PLAYER WON":
    GameResult.style.color = "blue";
    pscore++;
    display1.textContent = pscore;
    break;
    
    case "COMPUTER WON":
    GameResult.style.color = "red";
    cscore++;
    display2.textContent = cscore;
    break;
    
    case "TIE":
    GameResult.style.color = "green";
    break;
    
    
   } 
}