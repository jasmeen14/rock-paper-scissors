//catche DOM
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");// dom variable
const computerScore_span = document.getElementById("computer-score");// dom variable
const scoreBoard_div = document.querySelector(".score-board");// dom variable
const result_div = document.querySelector(".result");// dom variable
const rock_div = document.getElementById("r"); // dom variable
const paper_div = document.getElementById("p");// dom variable
const scissors_div = document.getElementById("s");// dom variable

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rp":
        case "pr":
        case "sp":
            console.log("USER WINS.");
            break;
         case"rp":
         case "ps":
         case"sr":
            console.log("COMPUTER WINS.");
            break;
         case"rr":
         case "pp":
         case"ss":
            console.log("COMPUTER WINS.");
            break;
        }
}
 function main(){
    rock_div.addEventListener("click", fuction()
    {
        game("r");
      });
      paper_div.addEventListener("click", fuction()
      {
        game("p");
      });
      scissors_div.addEventListener("click", fuction()
      {
        game("s");
      });
    }
main();


