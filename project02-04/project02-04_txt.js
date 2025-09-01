/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Amit Jaggernauth
      Date: 8/31/2025

      Filename: project02-04.js
 */


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 "use strict";

// 3. Declare pricing constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE  =  9.95;
const SALMON_PRICE  = 18.95;
const SALAD_PRICE   =  7.95;
const SALES_TAX     =  0.07;

// 5. Wire up click handlers to recalculate when any checkbox changes
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

// 4. Main calculation function
function calcTotal() {
  // a. Start subtotal at zero
  let cost = 0;

  // b. Read each checkbox’s checked state
  const buyChicken = document.getElementById("chicken").checked;
  const buyHalibut = document.getElementById("halibut").checked;
  const buyBurger  = document.getElementById("burger").checked;
  const buySalmon  = document.getElementById("salmon").checked;
  const buySalad   = document.getElementById("salad").checked;

  // c. Add the item’s price if it was selected
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger  ? BURGER_PRICE  : 0;
  cost += buySalmon  ? SALMON_PRICE  : 0;
  cost += buySalad   ? SALAD_PRICE   : 0;

  // d. Display the formatted subtotal
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // e. Compute the tax
  const tax = cost * SALES_TAX;

  // f. Display the formatted tax
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // g. Compute overall total
  const totalCost = cost + tax;

  // h. Display the formatted total
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}
