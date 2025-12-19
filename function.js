// Wrap everything in an IIFE to create private scope
(function() {
    'use strict';
    
    // Store original Math.random to prevent tampering
    const secureRandom = Math.random.bind(Math);
    
    // Freeze the weapon array to prevent modifications
    const weapon = Object.freeze(["✊🏼", "✋🏼", "✌🏼"]);
    
    // Private variables - not accessible from console
    const Player1 = document.getElementById("pchoice");
    const Player2 = document.getElementById("cchoice");
    const GameResult = document.getElementById("result");
    const display1 = document.getElementById("p1score");
    const display2 = document.getElementById("p2score");
    
    let pscore = 0;
    let cscore = 0;
    
    // Private function - not accessible from console
    function rochambo(PlayerChoice) {
        // Input validation - only accept valid weapon choices
        if (!weapon.includes(PlayerChoice)) {
            console.warn('Invalid choice detected');
            return;
        }
        
        // Use secured random function
        const computerbot = weapon[Math.floor(secureRandom() * 3)];
        
        let results = "";
        
        if (PlayerChoice === computerbot) {
            results = "TIE";
        } else {
            switch (PlayerChoice) {
                case "✊🏼":
                    results = (computerbot === "✌🏼") ? "PLAYER WON" : "COMPUTER WON";
                    break;
                
                case "✋🏼":
                    results = (computerbot === "✊🏼") ? "PLAYER WON" : "COMPUTER WON";
                    break;
                
                case "✌🏼":
                    results = (computerbot === "✋🏼") ? "PLAYER WON" : "COMPUTER WON";
                    break;
            }
        }
        
        Player1.textContent = `${PlayerChoice}`;
        Player2.textContent = `${computerbot}`;
        GameResult.textContent = results;
        
        switch (results) {
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
    
    // Attach event listeners instead of using inline onclick
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.choice button');
        buttons.forEach((button, index) => {
            button.onclick = function() {
                rochambo(weapon[index]);
            };
        });
    });
})();