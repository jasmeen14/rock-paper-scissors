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

function game(userChoice){
    console.log("choice"+ userChoice);
}

//function main(){
    rock_div.addEventListener("click", fuction())
        console.log('rock');//
       // game("r");
     // }
      paper_div.addEventListener("click",fuction())
      {
        console.log('paper');//game('p');
      }
      scissors_div.addEventListener("click",fuction())
      {
        console.log('scissors'); //game('s');
      }
    
main();


