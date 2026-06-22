/*
Problem 2 — Discount Price Table
Concepts: Loops, Arrays, console.table()

An e-commerce site wants to show customers how much they save 
at every discount level on a product.

Write a program that takes a product's original price and prints 
a discount table showing the final price after every 10% discount 
step, from 10% to 100%.

Also display how much money the customer saves at each step.
*/
let proprice = Number(prompt("Enter the price:"));
let dis = 0;
let data = [];
for(dis = 10; dis<=100; dis+=10)
{
    var saved = (dis/100)*proprice;
    var finalprice = proprice - saved;

data.push({ discount: dis + "%", finalPrice: finalprice, you_saved: saved });
}
console.table(data);
