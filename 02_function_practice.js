&
//convert fx into fat arrow fnx
//function multiply(a,b){
   // return a*b;
//}
  
let multiply = (a,b) => {  
    return a*b;
}

// use rest parameter toaccept any number of scores and return the total.


function sum(... val){
    let total = 0;
    val.forEach(function (score){
        total = total + score;
    });
    return total;
}

console.log(sum(10,20,30));

fix the fx using early return 
//function checkAge(age){
  //  if (age<18){
  //      console.log("too young");
   // }else{
//        console.log("Allowed");
  //      }
  //  }


function checkAge(age){
   if (age<18){
      return "too young";
      }
    return "Allowed";     
   }
console.log(checkAge(21));

// assign a fx to a variable then call it 

let a = function(){
    console.log("hlo");
}
a();


//pass a fx into another fx and execute it inside.

function acd(val){
    val();
}
acd(function(){
    console.log("hlo");
});

//convert the above fx into pure fx

let total = 0;
function addToTotal(num){
    let newtotal = total;
    total += num;
}
// convert this normal function into an IIFE 
// function init(){
//    console.log("Initialized");
//}
 
(function init(){
    console.log("Initialized");
}) ();
  
practice of fx 
//Write a BMI claculator 

function bmi(w,h){
    output = w/(h*h);
    return output;
}
console.log(Math.round(bmi(60,1.7)));
