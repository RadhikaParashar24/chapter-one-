/*
Problem 1 — Electricity Bill Calculator
Concepts: Variables, Operators, Conditionals

A local electricity board charges customers based on units consumed:
- 0 to 100 units    → ₹2.50 per unit
- 101 to 300 units  → ₹3.75 per unit
- 301 to 500 units  → ₹5.00 per unit
- Above 500 units   → ₹7.00 per unit

Fixed government tax of 8% is added to the total bill.
*/
let unit = Number(prompt("Enter the total units:"));
let cost = 0;
    if (unit<101){
    cost = unit*2.50;
}
if (unit>100 && unit<301){
    cost = (100*2.5)+(unit-100)*3.75;
}
if (unit>300 && unit<501){
   cost = (100*2.5)+(200*3.75)+(unit-300)*5;
}
if (unit>500){
    cost = (100*2.5)+(200*3.75)+(200*5)+(unit-500)*7;
}
let total = cost+(cost*(8/100));
console.log(`you have to pay ${total} including tax`);




