/*
Problem 3 — Rock Paper Scissors
Concepts: Functions, Conditionals, Math.random(), Input Validation

Build a single round Rock Paper Scissors game where user plays 
against computer. Computer picks randomly. Handle invalid inputs.
*/

let your_choice = prompt("enter your choice:");
const arry = ["rock","paper","scissors"];
const my_choice = arry[Math.floor(Math.random()*arry.length)];
function game(your_choice,my_choice){
    if(your_choice===my_choice){
        console.log("drawn");
    }
    else if(
        (your_choice==="rock" && my_choice==="paper") ||
      (your_choice==="paper" && my_choice==="scissors") ||
      (your_choice==="scissors" && my_choice==="rock")
      ){
          console.log("you win");
      }
    else{
        console.log("please enter a valid choice");
    } 
    return 0;
}
game(your_choice, my_choice);
